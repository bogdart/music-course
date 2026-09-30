/**
 * Ear ladders end to end: a lesson's ```ladder block opens rungs and drills the current rung; answers are recorded
 * per rung; 20 good answers master a rung and the next one becomes current; the Practice page runs a ladder session
 * at the current rungs (then the remaining SRS review cards); the lesson warm-up offers the skill furthest behind,
 * is skippable, done once per lesson visit, and owns note input.
 * Every test starts from a fresh DB (the file's server is restarted per test via `freshDb`).
 */
import type { APIRequestContext } from '@playwright/test';
import { test, expect } from './fixtures';
import { goto, midi } from './helpers/app';
import { lessons } from './helpers/content';
import { completeSet, currentItem, exerciseLocator } from './helpers/exercises';

test.use({ isolated: true });

interface SkillState { skill: string; unlocked: number; current: number | null; behind: number; rungs: { id: string; attempts: number; mastered: boolean }[] }

async function ladder(api: APIRequestContext): Promise<SkillState[]> {
  return (await (await api.get('/api/ladder')).json()).skills;
}
const skill = async (api: APIRequestContext, s: string) => (await ladder(api)).find((k) => k.skill === s)!;

/** First lesson (in course order) with a ```ladder block for `skillName`. */
function lessonWithLadder(skillName: string) {
  const l = lessons().find((x) => x.ladders.some((b) => b.skill === skillName));
  if (!l) throw new Error(`no lesson has a ${skillName} ladder block`);
  return l;
}

test.beforeEach(async ({ server }) => {
  await server.handle!.restart({ freshDb: true });
});

test('lesson ladder block → practice session: 20 good answers master rung 1, rung 2 becomes current', async ({ page, api }) => {
  test.setTimeout(150_000);
  const l = lessonWithLadder('pitch');
  await goto(page, `/lesson/${l.id}`);
  const skip = page.getByTestId('warmup').getByRole('button', { name: 'Skip' });
  if (await skip.isVisible()) await skip.click();
  const block = page.locator('[data-testid="ladder"][data-skill="pitch"]').first();
  await block.scrollIntoViewIfNeeded();
  await expect(block).toContainText('rung 1 of');
  await expect.poll(async () => (await skill(api, 'pitch')).unlocked).toBeGreaterThanOrEqual(1);
  // one lesson set of rung 1, all correct
  expect(await completeSet(page, 'pitch-1')).toContain('Passed ✓');
  await expect.poll(async () => (await skill(api, 'pitch')).rungs[0]!.attempts).toBe(10);
  // Practice: the ladder session starts with pitch rung 1 (the only open ladder), 10 more correct answers
  await goto(page, '/practice');
  await expect(page.getByText(/Set 1 of \d+/)).toBeVisible();
  await expect(page.getByText(/Pitch · rung 1/)).toBeVisible();
  await completeSet(page, 'pitch-1');
  // 20/20 in one session ≥ 95% → mastered; the current rung moves on
  await expect.poll(async () => (await skill(api, 'pitch')).rungs[0]!.mastered).toBe(true);
  const st = await skill(api, 'pitch');
  expect(st.current).toBe(st.unlocked >= 2 ? 2 : 1);
  // ladder answers are not lesson attempts
  const p = await (await api.get('/api/progress')).json();
  expect(p.lastLessonId === 'ladder').toBe(false);
});

test('Practice with nothing open says so; the review-card stage is reachable', async ({ page }) => {
  await goto(page, '/practice');
  await expect(page.getByText(/No ear-training ladders are open yet/)).toBeVisible();
  await page.getByRole('button', { name: 'Review cards' }).click();
  await expect(page.getByText(/Nothing due right now/)).toBeVisible();
});

test('lesson warm-up: hidden with no open ladder; offers the skill furthest behind; Skip; Start; done once', async ({ page, api }) => {
  test.setTimeout(90_000);
  const lessonB = lessons().find((l) => l.id === 'w01-l1-welcome-and-setup')!;
  await goto(page, `/lesson/${lessonB.id}`);
  await page.waitForTimeout(300);
  await expect(page.getByTestId('warmup'), 'no open ladder → no warm-up').toHaveCount(0);
  await api.post('/api/ladder/unlock', { data: { skill: 'octave', unlocks: 2 } });
  await goto(page, `/lesson/${lessonB.id}`);
  const warm = page.getByTestId('warmup');
  await expect(warm).toContainText('Octaves, rung 1');
  await warm.getByRole('button', { name: 'Skip' }).click();
  await expect(warm).toHaveCount(0);
  await page.reload();
  await page.getByTestId('warmup').getByRole('button', { name: 'Start warm-up' }).click();
  const { total } = await currentItem(page, 'octave-1');
  expect(total).toBe(5);
  await completeSet(page, 'octave-1');
  await expect(page.getByTestId('warmup')).toHaveCount(0, { timeout: 5000 });
  await expect.poll(async () => (await skill(api, 'octave')).rungs[0]!.attempts).toBe(5);
  await page.reload();
  await page.waitForLoadState('networkidle');
  await expect(page.getByTestId('warmup')).toHaveCount(0);
});

test('warm-up owns note input: MIDI answers the warm-up melody echo, not the lesson’s keyboard exercises', async ({ page, api }) => {
  test.setTimeout(90_000);
  await api.post('/api/ladder/unlock', { data: { skill: 'melody', unlocks: 1 } });
  const lessonB = lessons().find((l) => l.id === 'w01-l1-welcome-and-setup')!;
  const playNotes = lessonB.exercises.filter((e) => e.type === 'play-notes');
  await goto(page, `/lesson/${lessonB.id}`);
  await page.getByTestId('warmup').getByRole('button', { name: 'Start warm-up' }).click();
  const section = page.getByTestId('warmup').locator('section.exercise');
  await expect(section).toHaveClass(/input-active/);
  const { item } = await currentItem(page, 'melody-1');
  for (const m of item.midis as number[]) {
    await midi.noteOn(page, m, 100);
    await midi.noteOff(page, m);
  }
  await expect(section.locator('.feedback.ok')).toBeVisible();
  for (const e of playNotes) await expect(exerciseLocator(page, e.id).getByText(/Played: 0\//)).toBeVisible();
  const prog = await (await api.get('/api/progress')).json();
  for (const e of playNotes) expect(prog.exercises[lessonB.id]?.[e.id], `${e.id} got no attempt`).toBeUndefined();
  await page.getByTestId('warmup').getByRole('button', { name: 'end warm-up' }).click();
  await expect(page.getByTestId('warmup')).toHaveCount(0);
  const first = exerciseLocator(page, playNotes[0]!.id);
  await first.locator('.exercise-head h3').click();
  await expect(first).toHaveClass(/input-active/);
});
