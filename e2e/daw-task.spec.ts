/**
 * daw-task exercises inside lessons: the compact DAW embed, Check (per-predicate ✓/✗), Submit (scored attempt),
 * autosave under task-<lesson>-<exercise>, "Start over", projectRef continuity across lessons and the timerMin
 * countdown. projectRef / timerMin are not used by the curriculum yet, so this file's server serves content/ plus
 * the fixture lessons in e2e/fixture-content/ (w01-l8-e2e-daw-start, w01-l9-e2e-daw-continue).
 */
import type { APIRequestContext, Page } from '@playwright/test';
import { test, expect } from './fixtures';
import { goto } from './helpers/app';
import { lessons } from './helpers/content';
import { clickRoll, daw, dawDo, type Note } from './helpers/daw';
import { currentItem, exerciseLocator, next, setDawNotes } from './helpers/exercises';

test.use({ isolated: true, contentFixture: true });

const first = lessons().flatMap((l) => l.exercises.filter((e) => e.type === 'daw-task').map((e) => ({ l, e })))[0]!;

async function openTask(page: Page, lessonId: string, exId: string) {
  await goto(page, `/lesson/${lessonId}`);
  await expect(page.locator('details.problems'), 'content problems').toHaveCount(0);
  const section = exerciseLocator(page, exId);
  await section.scrollIntoViewIfNeeded();
  await expect(section.locator('.daw-embed')).toBeVisible({ timeout: 15_000 });
  const key = `task:${lessonId}:${exId}`;
  await expect.poll(async () => (await daw(page, key)).persistent, { message: 'task project loaded/created on the server' }).toBe(true);
  await expect(section.getByText('Loading your project…')).toHaveCount(0);
  return { section, key };
}

async function scores(api: APIRequestContext, lessonId: string, exId: string) {
  return ((await (await api.get(`/api/progress/attempts?lessonId=${lessonId}&exerciseId=${exId}&limit=20`)).json()) as { score: number }[]).map((a) => a.score);
}

async function serverProject(api: APIRequestContext, id: string) {
  const r = await api.get(`/api/projects/${id}`);
  return r.ok() ? r.json() : null;
}

test('lesson daw-task: Check shows each check ✓/✗, a melody drawn in the embedded piano roll passes, Submit records the score', async ({ page, api }) => {
  test.setTimeout(90_000);
  const { l, e } = first;
  const { section, key } = await openTask(page, l.id, e.id);
  const { item } = await currentItem(page, e.id);
  const nChecks = (item.checks as { kind: string }[]).filter((c) => c.kind !== 'custom').length;
  // the template project was created on the server under task-<lesson>-<exercise> (no 404 in the console on the way)
  const projectId = `task-${l.id}-${e.id}`;
  await expect.poll(async () => !!(await serverProject(api, projectId))).toBe(true);
  expect((await daw(page, key)).project.id).toBe(projectId);

  // empty template: Check lists every predicate, not all pass
  await section.getByRole('button', { name: 'Check', exact: true }).click();
  const list = section.getByRole('list', { name: 'Check results' });
  await expect(list.locator('li')).toHaveCount(nChecks);
  await expect(list.locator('li.bad').first()).toBeVisible();
  const passedBefore = await list.locator('li.ok').count();
  await expect(section.getByText(`${passedBefore}/${nChecks} checks passed`)).toBeVisible();

  // a partial answer: Submit scores it by the share of checks passed (first attempt)
  await clickRoll(page, 0, 60, { key, scope: section });
  await expect.poll(async () => (await daw(page, key)).project.tracks[0]!.clips.flatMap((c) => c.notes).length).toBe(1);
  await section.getByRole('button', { name: 'Submit' }).click();
  await expect(section.locator('.feedback.bad')).toContainText(/checks passed\. Still to do:/);
  await expect.poll(async () => (await scores(api, l.id, e.id))[0] ?? -1).toBeLessThan(1);
  const partial = (await scores(api, l.id, e.id))[0]!;
  expect(partial).toBeGreaterThan(0);

  // draw the full melody with the mouse: 16 quarter notes, C major, starting and ending on C
  const melody = [60, 62, 64, 65, 67, 65, 64, 62, 60, 62, 64, 65, 67, 65, 64, 60];
  await dawDo(page, 'st.mutate((p) => { p.tracks[0].clips.forEach((c) => (c.notes = [])); })', key);
  for (const [i, m] of melody.entries()) await clickRoll(page, i * 480, m, { key, scope: section });
  await expect
    .poll(async () => (await daw(page, key)).project.tracks[0]!.clips.flatMap((c) => c.notes.map((x) => [x.midi, x.startTick + c.startTick])))
    .toEqual(melody.map((m, i) => [m, i * 480]));
  await section.getByRole('button', { name: 'Check', exact: true }).click();
  await expect(list.locator('li.ok')).toHaveCount(nChecks);
  await expect(section.getByText(`${nChecks}/${nChecks} checks passed`)).toBeVisible();
  await section.getByRole('button', { name: 'Submit' }).click();
  await expect(section.locator('.feedback.ok')).toHaveText(`All ${nChecks} checks passed — nice work!`);
  // the per-attempt log keeps the first attempt's score
  expect((await scores(api, l.id, e.id))[0]).toBe(partial);
  // autosaved
  await expect.poll(async () => ((await serverProject(api, projectId))?.tracks[0].clips as { notes: Note[] }[]).flatMap((c) => c.notes).length).toBe(16);
  // finishing the 1-item set records the exercise: daw-task is a performance type, so the best take counts
  await next(page, e.id);
  await expect(section.getByTestId('exercise-summary')).toContainText('100%');
  await expect(section.getByTestId('exercise-summary')).toContainText('Best take');
  await expect.poll(async () => (await (await api.get('/api/progress')).json()).exercises[l.id]?.[e.id]?.lastScore).toBe(1);

  // the work is still there after a reload; "Start over" resets to the template
  await page.reload();
  const again = await openTask(page, l.id, e.id);
  await expect.poll(async () => (await daw(page, key)).project.tracks[0]!.clips.flatMap((c) => c.notes).length).toBe(16);
  await again.section.getByRole('button', { name: 'Start over' }).click();
  await again.section.getByRole('button', { name: 'Reset to the template?' }).click();
  await expect.poll(async () => (await daw(page, key)).project.tracks[0]!.clips.flatMap((c) => c.notes).length).toBe(0);
  await expect.poll(async () => ((await serverProject(api, projectId))?.tracks[0].clips as { notes: Note[] }[]).flatMap((c) => c.notes).length).toBe(0);
  // ...and Start over is undoable
  await again.section.getByRole('button', { name: 'Hide keyboard' }).or(again.section.getByRole('button', { name: 'Show keyboard' })).click();
  await dawDo(page, 'st.undo()', key);
  await expect.poll(async () => (await daw(page, key)).project.tracks[0]!.clips.flatMap((c) => c.notes).length).toBe(16);
});

test('projectRef: a second task continues the project of the first one (other lesson), both ways', async ({ page, api }) => {
  const A = 'w01-l8-e2e-daw-start';
  const B = 'w01-l9-e2e-daw-continue';
  const a = await openTask(page, A, 't1');
  expect((await daw(page, a.key)).project.id).toBe('ref-e2e-song');
  await setDawNotes(page, a.key, [60, 62, 64, 67].map((m, i) => ({ midi: m, startTick: i * 480, durationTicks: 480, velocity: 0.8 })), 1);
  await a.section.getByRole('button', { name: 'Submit' }).click();
  await expect(a.section.locator('.feedback.ok')).toBeVisible();
  await expect.poll(async () => ((await serverProject(api, 'ref-e2e-song'))?.tracks[0].clips as { notes: Note[] }[] | undefined)?.flatMap((c) => c.notes).length ?? 0).toBe(4);

  const b = await openTask(page, B, 't2');
  const pb = (await daw(page, b.key)).project;
  expect(pb.id).toBe('ref-e2e-song');
  expect(pb.tracks[0]!.clips.flatMap((c) => c.notes).map((x) => x.midi), 'melody from the first task').toEqual([60, 62, 64, 67]);
  // add a bass track through the embed's UI, notes through the store
  await b.section.getByLabel('New track instrument').selectOption('bass');
  await b.section.getByRole('button', { name: '+ Track' }).click();
  await expect(b.section.locator('.daw-track-head')).toHaveCount(2);
  await dawDo(page, `st.mutate((p) => { p.tracks[1].clips = [{ id: 'cb', name: 'Bass', startTick: 0, lengthTicks: 1920, notes: [{ midi: 36, startTick: 0, durationTicks: 1920, velocity: 0.8 }] }]; })`, b.key);
  await b.section.getByRole('button', { name: 'Check', exact: true }).click();
  const list = b.section.getByRole('list', { name: 'Check results' });
  await expect(list.locator('li')).toHaveCount(2); // custom checks are self-checks, not listed
  await expect(list.locator('li.ok')).toHaveCount(2);
  // the self-check is part of the score: Submit without ticking it → not all passed
  await expect(b.section.getByText('2/3 checks passed')).toBeVisible();
  await b.section.getByRole('checkbox', { name: 'I listened to the whole song' }).check();
  await b.section.getByRole('button', { name: 'Submit' }).click();
  await expect(b.section.locator('.feedback.ok')).toHaveText('All 3 checks passed — nice work!');
  await expect.poll(async () => (await serverProject(api, 'ref-e2e-song'))?.tracks.length).toBe(2);

  // back in the first lesson, the shared project has the bass track too
  const a2 = await openTask(page, A, 't1');
  await expect.poll(async () => (await daw(page, a2.key)).project.tracks.map((t) => t.instrument)).toEqual(['piano', 'bass']);
});

test('timerMin: countdown from 2:00, "Time\'s up" at zero, restart', async ({ page }) => {
  await page.clock.install({ time: new Date('2026-09-25T10:00:00Z') });
  const { section } = await openTask(page, 'w01-l9-e2e-daw-continue', 't2');
  const timer = section.getByRole('timer');
  await expect(timer).toContainText(/(2:00|1:59)/);
  await page.clock.fastForward('00:30');
  await expect(timer).toContainText(/1:(30|29)/);
  await page.clock.fastForward('01:00');
  await expect(timer).toContainText(/0:(30|29)/);
  await expect(timer).toHaveClass(/soon/);
  await page.clock.fastForward('00:35');
  await expect(timer).toContainText("Time's up — wrap up and submit");
  await expect(timer).toHaveClass(/done/);
  // submitting is still allowed after the time is up
  await expect(section.getByRole('button', { name: 'Submit' })).toBeEnabled();
  await timer.getByRole('button', { name: 'restart' }).click();
  await expect(timer).toContainText(/(2:00|1:59)/);
  // the start time is kept per task across reloads
  await page.clock.fastForward('00:10');
  await page.reload();
  await expect(exerciseLocator(page, 't2').getByRole('timer')).toContainText(/1:(50|49|48)/);
});

test('every daw-task in the curriculum renders its embed and template without errors (sample of 6 lessons)', async ({ page }) => {
  const uses = lessons().flatMap((l) => l.exercises.filter((e) => e.type === 'daw-task').map((e) => ({ l, e })));
  const step = Math.max(1, Math.floor(uses.length / 6));
  for (const { l, e } of uses.filter((_, i) => i % step === 0).slice(0, 6)) {
    const { section, key } = await openTask(page, l.id, e.id);
    const s = await daw(page, key);
    expect(s.project.tracks.length, `${l.id}#${e.id} template tracks`).toBeGreaterThan(0);
    await section.getByRole('button', { name: 'Check', exact: true }).click();
    await expect(section.getByText(/\d+\/\d+ checks passed/)).toBeVisible();
  }
});
