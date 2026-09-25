/**
 * 6. Progress persistence (reload + server restart), Dashboard "Continue", SRS due endpoint and the
 * Practice page (empty state and with due cards). Runs in order against its own fresh DB.
 */
import { DatabaseSync } from 'node:sqlite';
import type { APIRequestContext } from '@playwright/test';
import { test, expect } from './fixtures';
import { goto } from './helpers/app';
import { lessons } from './helpers/content';
import { canAnswer, completeSet, currentItem, exerciseLocator, summaryText } from './helpers/exercises';

test.use({ isolated: true });

const all = lessons();
const first = all[0]!;
const quizLesson = all.find((l) => l.exercises.some((e) => e.type === 'quiz'))!;
const quizEx = quizLesson.exercises.find((e) => e.type === 'quiz')!;
const earUse = all.flatMap((l) => l.exercises.filter((e) => e.type.startsWith('ear-') && canAnswer(e.type) && e.srs !== false).map((e) => ({ l, e })))[0]!;

/** Pretend the learner was away for 3 h: the next API activity starts a new SRS session. */
function advanceSession(dbFile: string) {
  const db = new DatabaseSync(dbFile);
  db.exec('PRAGMA busy_timeout = 3000');
  db.prepare("UPDATE meta SET value = ? WHERE key = 'last_activity'").run(String(Date.now() - 3 * 3600_000));
  db.close();
}

async function progress(api: APIRequestContext) {
  return (await api.get('/api/progress')).json();
}

test('fresh profile: Dashboard offers to start the first lesson', async ({ page }) => {
  await goto(page, '/');
  const hero = page.locator('.card.hero');
  await expect(hero.getByRole('heading', { level: 2 })).toHaveText(first.title);
  await expect(hero.getByRole('link', { name: /Start lesson/ })).toHaveAttribute('href', `/lesson/${first.id}`);
  await expect(page.getByText('0 / 154')).toBeVisible();
  await expect(page.getByRole('heading', { name: '0 due' })).toBeVisible();
  await hero.getByRole('link', { name: /Start lesson/ }).click();
  await expect(page.locator('header.lesson-header h1')).toHaveText(first.title);
});

test('Practice: empty state when nothing is due', async ({ page }) => {
  await goto(page, '/practice');
  await expect(page.getByText('Nothing due right now')).toBeVisible();
  await page.getByRole('button', { name: 'Check again' }).click();
  await expect(page.getByText('Nothing due right now')).toBeVisible();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await expect(page).toHaveURL(/\/$/);
});

test('exercise + lesson completion survive reload and a server restart', async ({ page, api, server }) => {
  await goto(page, `/lesson/${quizLesson.id}`);
  await completeSet(page, quizEx.id);
  await expect.poll(async () => (await progress(api)).exercises[quizLesson.id]?.[quizEx.id]?.passed).toBe(true);
  await page.getByRole('button', { name: 'Complete lesson' }).click();
  await expect(page.getByText('✓ Lesson complete')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Complete lesson' })).toHaveCount(0);
  await expect.poll(async () => (await progress(api)).lessons[quizLesson.id]?.status).toBe('completed');

  const checkPersisted = async () => {
    await goto(page, `/lesson/${quizLesson.id}`);
    await expect(page.getByText('✓ Lesson complete')).toBeVisible();
    await expect(page.locator(`aside.rail li.rail-item:has(a[href="#ex-${quizEx.id}"])`)).toHaveClass(/\bpassed\b/);
    await expect(page.locator('aside.rail .rail-title')).toContainText(`1/${quizLesson.exercises.length}`);
    await goto(page, '/curriculum');
    const row = page.locator('li.lesson-row').filter({ has: page.getByRole('link', { name: quizLesson.title, exact: true }) });
    await expect(row).toHaveClass(/completed/);
    await expect(row.locator('.status')).toHaveText('●');
    await expect(row).toContainText('100%');
    await goto(page, '/');
    await expect(page.getByText('1 / 154')).toBeVisible();
  };
  await page.reload();
  await checkPersisted();
  await server.handle!.restart();
  await checkPersisted();
  const p = await progress(api);
  expect(p.exercises[quizLesson.id][quizEx.id]).toMatchObject({ passed: true, bestScore: 1 });
  expect(p.totals.lessonsCompleted).toBe(1);
});

test('Dashboard "Continue" goes to the first unfinished lesson after completing one', async ({ page, api }) => {
  // lesson 1 may be completed by the previous test (if it was the quiz lesson); make it explicit
  await api.post(`/api/progress/lessons/${first.id}/complete`);
  const p = await progress(api);
  const expected = p.nextLessonId as string;
  expect(expected).not.toBe(first.id);
  await goto(page, '/');
  const link = page.locator('.card.hero').getByRole('link', { name: /Continue lesson/ });
  await expect(link).toHaveAttribute('href', `/lesson/${expected}`);
  await link.click();
  await expect(page.locator('header.lesson-header h1')).toHaveText(all.find((l) => l.id === expected)!.title);
});

test('Dashboard "Continue" resumes the lesson the learner was last working on', async ({ page, api }) => {
  // Regression for BUG-04 (fixed): the hero used nextLessonId (first not-completed lesson in curriculum order)
  // and ignored lastLessonId.
  const target = all[12]!;
  const ex = target.exercises.find((e) => canAnswer(e.type))!;
  await api.post('/api/progress/attempts', { data: { lessonId: target.id, exerciseId: ex.id, type: ex.type, correct: true, score: 1 } });
  expect((await progress(api)).lastLessonId).toBe(target.id);
  await goto(page, '/');
  await expect(page.locator('.card.hero').getByRole('link', { name: /Continue lesson/ })).toHaveAttribute('href', `/lesson/${target.id}`);
});

test('SRS: passing an ear exercise creates a card that is due next session; Practice reviews it', async ({ page, api, server }) => {
  const { l, e } = earUse;
  await goto(page, `/lesson/${l.id}`);
  await completeSet(page, e.id);
  await expect.poll(async () => (await (await api.get('/api/srs/cards')).json()).cards.length).toBeGreaterThan(0);
  const cards = (await (await api.get('/api/srs/cards')).json()).cards as { id: number; exerciseId: string; lessonId: string; dueSession: number; reps: number }[];
  const card = cards.find((c) => c.lessonId === l.id && c.exerciseId === e.id)!;
  expect(card).toBeTruthy();
  const session0 = (await (await api.get('/api/srs/due')).json()).session as number;
  expect(card.dueSession).toBe(session0 + 1);
  // same session → not due yet as a review; the Practice page may still offer it as one of its (≤5) *new* cards
  expect((await (await api.get('/api/srs/due')).json()).cards).toEqual([]);
  await goto(page, '/practice');
  await expect(page.getByText(/Card 1 of \d+/)).toBeVisible();
  await expect(page.locator('.tag.new')).toBeVisible();

  advanceSession(server.dbFile);
  const due = await (await api.get('/api/srs/due')).json();
  expect(due.session).toBe(session0 + 1);
  expect(due.cards.map((c: { id: number }) => c.id)).toContain(card.id);
  await goto(page, '/');
  await expect(page.getByRole('heading', { name: `${due.cards.length} due` })).toBeVisible();

  const attemptsBefore = (await progress(api)).exercises[l.id][e.id].attempts;
  await goto(page, '/practice');
  await expect(page.getByText(`Card 1 of ${due.cards.length}`)).toBeVisible();
  await expect(page.getByRole('link', { name: l.title })).toHaveAttribute('href', `/lesson/${l.id}`);
  const { total } = await currentItem(page, e.id);
  expect(total).toBe(Math.min(5, e.count ?? 5));
  await completeSet(page, e.id);
  // Practice keeps the shell mounted, so the summary shows here
  expect(await summaryText(page, e.id, 1000)).toContain('100%');
  if (due.cards.length === 1) await expect(page.getByText(/Session done — 1 card\(s\) reviewed in \d+ min · all remembered/)).toBeVisible({ timeout: 5000 });
  await expect.poll(async () => ((await (await api.get('/api/srs/cards')).json()).cards as typeof cards).find((c) => c.id === card.id)?.reps).toBe(1);
  const after = ((await (await api.get('/api/srs/cards')).json()).cards as typeof cards).find((c) => c.id === card.id)!;
  expect(after.dueSession).toBe(session0 + 2);
  // practice attempts are not counted as lesson exercise attempts
  expect((await progress(api)).exercises[l.id][e.id].attempts).toBe(attemptsBefore);
  expect((await (await api.get('/api/srs/due')).json()).cards.map((c: { id: number }) => c.id)).not.toContain(card.id);
});

test('Practice: a failed review is due again next session', async ({ page, api, server }) => {
  const cards = (await (await api.get('/api/srs/cards')).json()).cards as { id: number; exerciseId: string; lessonId: string; dueSession: number; lapses: number }[];
  test.skip(cards.length === 0, 'needs the card from the previous test');
  advanceSession(server.dbFile);
  advanceSession(server.dbFile);
  // two new sessions: session +1 now; make everything due by stepping until due
  for (let i = 0; i < 3; i++) {
    const due = await (await api.get('/api/srs/due')).json();
    if (due.cards.length) break;
    advanceSession(server.dbFile);
  }
  const due = await (await api.get('/api/srs/due')).json();
  expect(due.cards.length).toBeGreaterThan(0);
  const card = due.cards[0];
  await goto(page, '/practice');
  await expect(page.getByText(`Card 1 of ${due.cards.length}`)).toBeVisible();
  await completeSet(page, card.exerciseId, () => false);
  await expect.poll(async () => ((await (await api.get('/api/srs/cards')).json()).cards as typeof cards).find((c) => c.id === card.id)?.lapses).toBe(card.lapses + 1);
  const after = ((await (await api.get('/api/srs/cards')).json()).cards as typeof cards).find((c) => c.id === card.id)!;
  expect(after.dueSession).toBe(due.session + 1);
});

test('lesson page shows server progress for exercises tried before', async ({ page, api }) => {
  const l = all[3]!;
  const ex = l.exercises.find((e) => canAnswer(e.type))!;
  await api.post('/api/progress/exercises/complete', { data: { lessonId: l.id, exerciseId: ex.id, type: ex.type, score: 0.3, passed: false, correct: 3, total: 10 } });
  await goto(page, `/lesson/${l.id}`);
  await expect(page.locator(`aside.rail li.rail-item:has(a[href="#ex-${ex.id}"])`)).toHaveClass(/\btried\b/);
  await expect(exerciseLocator(page, ex.id)).toBeVisible();
});
