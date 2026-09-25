/**
 * Practice page and lesson warm-up with real SRS cards (created by finishing ear exercises in lessons through the UI):
 * new/due cards, 5 items per card, adaptive difficulty (harder after a streak, easier after misses), session summary;
 * warm-up only when the deck has something to offer, skippable, done once per lesson, and it owns note input.
 * Every test starts from a fresh DB (the file's server is restarted per test via `freshDb`).
 */
import { DatabaseSync } from 'node:sqlite';
import type { APIRequestContext, Page } from '@playwright/test';
import { test, expect } from './fixtures';
import { goto } from './helpers/app';
import { lessons, type SourceExercise, type SourceLesson } from './helpers/content';
import { completeSet, currentItem, exerciseLocator, next, waitForIndex } from './helpers/exercises';
import { midi } from './helpers/app';

test.use({ isolated: true });

const byId = (lessonId: string, exId: string) => {
  const l = lessons().find((x) => x.id === lessonId)!;
  return { l, e: l.exercises.find((x) => x.id === exId)! };
};
// small, fast ear exercises used as card sources
const INTERVAL = byId('w02-l2-black-keys-and-half-steps', 'e5'); // ear-interval m2/M2
const OCTAVE = byId('w01-l2-pitch-and-octaves', 'e2'); // ear-octave
const NOTE = byId('w05-l1-seconds-and-thirds', 'e7'); // ear-note, degree answers

interface Card { id: number; key: string; type: string; lessonId: string; exerciseId: string; reps: number; lapses: number; dueSession: number }

async function cards(api: APIRequestContext): Promise<Card[]> {
  return (await (await api.get('/api/srs/cards')).json()).cards;
}

/** Finish an ear exercise in its lesson (all correct) → its SRS card exists. */
async function earnCard(page: Page, api: APIRequestContext, src: { l: SourceLesson; e: SourceExercise }): Promise<Card> {
  await goto(page, `/lesson/${src.l.id}`);
  // a warm-up may be offered on the lesson page: not wanted here
  const skip = page.getByTestId('warmup').getByRole('button', { name: 'Skip' });
  if (await skip.isVisible()) await skip.click();
  await exerciseLocator(page, src.e.id).scrollIntoViewIfNeeded();
  expect(await completeSet(page, src.e.id)).toContain('Passed ✓');
  let card: Card | undefined;
  await expect.poll(async () => !!(card = (await cards(api)).find((c) => c.lessonId === src.l.id && c.exerciseId === src.e.id))).toBe(true);
  return card!;
}

/** Start a new SRS session (the learner was away for 3 h), repeatedly until `cardId` is due. */
async function makeDue(api: APIRequestContext, dbFile: string, cardId: number) {
  for (let i = 0; i < 8; i++) {
    const due = await (await api.get('/api/srs/due')).json();
    if ((due.cards as { id: number }[]).some((c) => c.id === cardId)) return;
    const db = new DatabaseSync(dbFile);
    db.exec('PRAGMA busy_timeout = 3000');
    db.prepare("UPDATE meta SET value = ? WHERE key = 'last_activity'").run(String(Date.now() - 3 * 3600_000));
    db.close();
  }
  throw new Error(`card ${cardId} never became due`);
}

/** Section of the exercise shown on the Practice page. */
function practiceCard(page: Page) {
  return page.locator('.practice section.exercise');
}

async function practiceItemsAll(page: Page, correct: boolean) {
  const section = practiceCard(page);
  await expect(section).toBeVisible();
  const id = (await section.getAttribute('data-testid'))!.replace('exercise-', '');
  const { total } = await currentItem(page, id);
  expect(total, '5 items per practice card').toBe(5);
  await completeSet(page, id, () => correct);
  return id;
}

test.beforeEach(async ({ server }) => {
  await server.handle!.restart({ freshDb: true });
});

test('Practice: cards earned in lessons show up as new cards, 5 items each; session summary per type', async ({ page, api }) => {
  test.setTimeout(120_000);
  const c1 = await earnCard(page, api, INTERVAL);
  const c2 = await earnCard(page, api, OCTAVE);
  await goto(page, '/practice');
  await expect(page.getByText('Card 1 of 2')).toBeVisible();
  await expect(page.locator('.tag.new')).toBeVisible();
  await expect(page.locator('.tag.level')).toHaveText('standard');
  const firstType = await practiceCard(page).getAttribute('data-type');
  const firstSrc = firstType === 'ear-interval' ? INTERVAL : OCTAVE;
  await expect(page.getByRole('link', { name: firstSrc.l.title })).toHaveAttribute('href', `/lesson/${firstSrc.l.id}`);
  await practiceItemsAll(page, true);
  await expect(page.getByText('Card 2 of 2')).toBeVisible({ timeout: 5000 });
  await practiceItemsAll(page, true);
  const summary = page.getByTestId('session-summary');
  await expect(summary).toBeVisible({ timeout: 5000 });
  await expect(summary).toContainText('100%');
  await expect(summary).toContainText(/Session done — 2 card\(s\) reviewed in \d+ min · all remembered/);
  await expect(summary.locator('tbody tr')).toHaveCount(2);
  for (const t of ['ear-interval', 'ear-octave']) await expect(summary.locator('tbody tr').filter({ hasText: t })).toContainText('100%');
  // reviews stored: reps 1, due in a later session; nothing left for this session
  await expect.poll(async () => (await cards(api)).filter((c) => [c1.id, c2.id].includes(c.id)).map((c) => c.reps)).toEqual([1, 1]);
  const session = (await (await api.get('/api/srs/due')).json()).session as number;
  for (const c of await cards(api)) expect(c.dueSession).toBeGreaterThan(session);
  await page.getByRole('button', { name: 'Practice more' }).click();
  await expect(page.getByText('Nothing due right now')).toBeVisible();
  // practice attempts are recorded with source=practice, not as lesson attempts
  const p = await (await api.get('/api/progress')).json();
  expect(p.exercises[INTERVAL.l.id][INTERVAL.e.id].attempts).toBe(INTERVAL.e.count ?? 10);
});

test('adaptive difficulty: a correct streak makes the card harder next session, misses make it easier', async ({ page, api, server }) => {
  test.setTimeout(150_000);
  const card = await earnCard(page, api, INTERVAL);
  const base = (INTERVAL.e.spec.intervals as string[]).length;
  // session 1: all correct → level +1 ("got harder")
  await goto(page, '/practice');
  await expect(page.locator('.tag.level')).toHaveText('standard');
  expect((await currentItem(page, INTERVAL.e.id)).item.choices!.length).toBe(base);
  await practiceItemsAll(page, true);
  await expect(page.getByTestId('session-summary')).toContainText('1 got harder ↑', { timeout: 5000 });
  // session 2: the card comes back one level harder — one more interval to tell apart
  await makeDue(api, server.handle!.dbFile, card.id);
  await goto(page, '/practice');
  await expect(page.locator('.tag.level')).toHaveText('harder +1');
  await expect(page.locator('.tag.level')).toHaveClass(/up/);
  expect((await currentItem(page, INTERVAL.e.id)).item.choices!.length).toBe(base + 1);
  // all wrong → back to standard, and the card lapses
  await practiceItemsAll(page, false);
  const summary = page.getByTestId('session-summary');
  await expect(summary).toContainText('1 made easier ↓', { timeout: 5000 });
  await expect(summary).toContainText('1 to repeat next session');
  await expect.poll(async () => (await cards(api)).find((c) => c.id === card.id)?.lapses).toBe(1);
  // session 3: standard again; failing again → easier than standard
  await makeDue(api, server.handle!.dbFile, card.id);
  await goto(page, '/practice');
  await expect(page.locator('.tag.level')).toHaveText('standard');
  expect((await currentItem(page, INTERVAL.e.id)).item.choices!.length).toBe(base);
  await practiceItemsAll(page, false);
  await makeDue(api, server.handle!.dbFile, card.id);
  await goto(page, '/practice');
  await expect(page.locator('.tag.level')).toHaveText('easier -1');
  await expect(page.locator('.tag.level')).toHaveClass(/down/);
});

test('lesson warm-up: hidden without cards; offered when the deck has cards; Skip; Start runs 3 items and is done once', async ({ page, api }) => {
  test.setTimeout(120_000);
  const lessonB = lessons().find((l) => l.id === 'w01-l1-welcome-and-setup')!;
  await goto(page, `/lesson/${lessonB.id}`);
  await page.waitForTimeout(300);
  await expect(page.getByTestId('warmup'), 'no cards → no warm-up').toHaveCount(0);

  const card = await earnCard(page, api, NOTE);
  await goto(page, `/lesson/${lessonB.id}`);
  const warm = page.getByTestId('warmup');
  await expect(warm).toContainText('2-minute warm-up');
  await expect(warm).toContainText('One review card is waiting');
  await warm.getByRole('button', { name: 'Skip' }).click();
  await expect(warm).toHaveCount(0);
  // skipping is per visit: offered again next time
  await page.reload();
  await expect(page.getByTestId('warmup')).toContainText('2-minute warm-up');
  await page.getByTestId('warmup').getByRole('button', { name: 'Start warm-up' }).click();
  await expect(warm).toContainText(/\d:\d\d left · card 1\/1/);
  const section = warm.locator('section.exercise');
  await expect(section).toHaveAttribute('data-type', 'ear-note');
  const { total } = await currentItem(page, NOTE.e.id);
  expect(total).toBe(3);
  await completeSet(page, NOTE.e.id);
  await expect(warm).toHaveText('✓ Warm-up done — 1 card reviewed.', { timeout: 5000 });
  await expect.poll(async () => (await cards(api)).find((c) => c.id === card.id)?.reps).toBe(1);
  // done: not offered again on this lesson in this browser session, and nothing is due anywhere now
  await page.reload();
  await page.waitForLoadState('networkidle');
  await expect(page.getByTestId('warmup')).toHaveCount(0);
  await goto(page, `/lesson/${lessons()[1]!.id}`);
  await page.waitForTimeout(300);
  await expect(page.getByTestId('warmup'), 'reviewed card is not due again this session').toHaveCount(0);
});

test('warm-up owns note input: MIDI answers the warm-up card, not the lesson’s keyboard exercises (BUG-02 regression)', async ({ page, api }) => {
  test.setTimeout(90_000);
  await earnCard(page, api, NOTE);
  const lessonB = lessons().find((l) => l.id === 'w01-l1-welcome-and-setup')!;
  const playNotes = lessonB.exercises.filter((e) => e.type === 'play-notes');
  await goto(page, `/lesson/${lessonB.id}`);
  await page.getByTestId('warmup').getByRole('button', { name: 'Start warm-up' }).click();
  const section = page.getByTestId('warmup').locator('section.exercise');
  await expect(section).toHaveClass(/input-active/);
  const { item } = await currentItem(page, NOTE.e.id);
  await midi.noteOn(page, item.midi, 100);
  await midi.noteOff(page, item.midi);
  await expect(section.locator('.feedback.ok')).toBeVisible();
  for (const e of playNotes) await expect(exerciseLocator(page, e.id).getByText(/Played: 0\//)).toBeVisible();
  const prog = await (await api.get('/api/progress')).json();
  for (const e of playNotes) expect(prog.exercises[lessonB.id]?.[e.id], `${e.id} got no attempt`).toBeUndefined();
  // after the warm-up the first lesson exercise gets input focus back
  await next(page, NOTE.e.id);
  await waitForIndex(page, NOTE.e.id, 1);
  await page.getByTestId('warmup').getByRole('button', { name: 'end warm-up' }).click();
  await expect(page.getByTestId('warmup')).toHaveCount(0);
  // focus falls back to the lesson's first exercise; clicking a play-notes exercise takes it
  await expect(exerciseLocator(page, lessonB.exercises[0]!.id)).toHaveClass(/input-active/);
  const first = exerciseLocator(page, playNotes[0]!.id);
  await first.locator('.exercise-head h3').click();
  await expect(first).toHaveClass(/input-active/);
  const target = (await currentItem(page, playNotes[0]!.id)).item.midis[0] as number;
  await midi.noteOn(page, target, 100);
  await midi.noteOff(page, target);
  await expect(first.getByText(/Played: 1\//)).toBeVisible();
});
