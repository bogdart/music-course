/**
 * 4. Every exercise type in the catalogue, data-driven over content/.
 *
 * For each type the first lesson using it is opened and the full set of checks runs: render, reveal, next/skip,
 * finish, correct answer, wrong answer + retry, full correct set → passed (+ SRS card for eligible types), all-wrong
 * set → not passed, replay/autoplay. Every *answer mode* of a type (e.g. ear-rhythm choose / tap / grid, ear-bass
 * play / name, read-note name / play / interval, timed vs untimed play-scale) that content uses gets its own
 * correct / wrong / full-set checks as well. Answers go through the real UI (choices, palettes, fake MIDI, taps,
 * timed performances against the count-in clock, the DAW store for daw-task) — see helpers/exercises.ts ANSWERERS.
 * Types not used by any lesson (ear-tempo, ear-meter) and every block of the /dev/demo fixture are answered right
 * and wrong on /dev/demo at the end of this file.
 */
import type { APIRequestContext, Page } from '@playwright/test';
import { test, expect } from './fixtures';
import { clearAudio, expectSound, goto, midi, unlockAudio } from './helpers/app';
import { CATALOGUE_TYPES, demoLesson, lessons, type SourceExercise, type SourceLesson } from './helpers/content';
import {
  answer, canAnswer, canAnswerWrong, claimFocus, completeSet, currentItem, exerciseLocator, isTimed, lateShiftBeats, next, perform, revealAll,
  waitForIndex, type PerfSpec,
} from './helpers/exercises';

test.use({ isolated: true });
test.describe.configure({ mode: 'parallel' });

function find(type: string, pred: (e: SourceExercise, l: SourceLesson) => boolean = () => true) {
  for (const l of lessons()) for (const e of l.exercises) if (e.type === type && pred(e, l)) return { lesson: l, exercise: e };
  return null;
}

/** Answer mode of an exercise block (distinct UI / evaluation paths of the same type). */
const VARIANT: Record<string, (s: Record<string, any>) => string> = {
  'ear-note': (s) => s.answer ?? 'degree',
  'ear-octave': (s) => s.mode,
  'ear-chord-root': (s) => s.answer ?? 'play',
  'ear-progression': (s) => (s.example ? 'attached-mix' : 'generated'),
  'ear-melody': (s) => `${s.answer ?? 'play'}${s.example ? '+mix' : ''}`,
  'ear-bass': (s) => `${s.answer ?? 'play'}${s.example ? '+mix' : ''}`,
  'ear-rhythm': (s) => (s.voices ? 'grid' : (s.answer ?? 'choose')),
  'read-note': (s) => (s.mode === 'interval' ? 'interval' : (s.answer ?? 'name')),
  'play-scale': (s) => (s.tempo !== undefined ? 'timed' : 'untimed'),
  'play-melody': (s) => (s.tracks ? 'multi-voice' : s.backing ? 'backing' : 'solo'),
  'play-chord': (s) => (s.sequence ? 'sequence' : (s.voicing ?? 'full')),
  'rhythm-tap': (s) => (s.showNotation === false ? 'dictation' : 'notation'),
  'key-signature': (s) => `${s.prompt ?? 'staff'}/${s.answer ?? 'name'}`,
  listen: (s) => (s.questions?.length ? 'questions' : 'just-listen'),
  'build-chord': (s) => s.prompt ?? 'symbol',
};

/** Types answered by timed performances: their smallest block of each mode is used (short takes). */
const TIMED_TYPES = new Set(['play-melody', 'play-scale', 'rhythm-tap', 'read-rhythm', 'ear-rhythm']);

/** Rough size of an exercise (smaller spec ≈ shorter melody / fewer items) — keeps timed takes short. */
const weight = (e: SourceExercise) => JSON.stringify(e.spec).length + 40 * (e.count ?? 0);

/** Smallest use of `type` matching `pred`. */
function smallest(type: string, pred: (e: SourceExercise) => boolean = () => true) {
  let best: { lesson: SourceLesson; exercise: SourceExercise } | null = null;
  for (const l of lessons()) for (const e of l.exercises) if (e.type === type && pred(e) && (!best || weight(e) < weight(best.exercise))) best = { lesson: l, exercise: e };
  return best;
}

/**
 * One use per answer mode of `type` (first use; for timed types the smallest block of that mode). The first entry is
 * the type's primary use: the mode of the first lesson that uses the type.
 */
function variantsOf(type: string): { lesson: SourceLesson; exercise: SourceExercise; variant: string }[] {
  const out = new Map<string, { lesson: SourceLesson; exercise: SourceExercise; variant: string }>();
  const fn = VARIANT[type] ?? (() => 'default');
  for (const l of lessons()) for (const e of l.exercises) if (e.type === type) {
    const v = fn(e.spec);
    const cur = out.get(v);
    if (!cur || (TIMED_TYPES.has(type) && weight(e) < weight(cur.exercise))) out.set(v, { lesson: l, exercise: e, variant: v });
  }
  const first = find(type);
  const primary = first ? fn(first.exercise.spec) : null;
  return [...out.values()].sort((a, b) => (a.variant === primary ? -1 : b.variant === primary ? 1 : 0));
}

async function progress(api: APIRequestContext) {
  const r = await api.get('/api/progress');
  expect(r.ok()).toBe(true);
  return r.json();
}

async function exProgress(api: APIRequestContext, lessonId: string, exId: string) {
  return ((await progress(api)).exercises[lessonId] ?? {})[exId] as { attempts: number; correct: number; bestScore: number; lastScore: number; passed: boolean } | undefined;
}

/** Scores of the recorded first attempts of an exercise, newest first. */
async function attemptScores(api: APIRequestContext, lessonId: string, exId: string): Promise<number[]> {
  const r = await api.get(`/api/progress/attempts?lessonId=${lessonId}&exerciseId=${exId}&limit=50`);
  return ((await r.json()) as { score: number }[]).map((a) => a.score);
}

/** Open the lesson and return the exercise section. */
async function openExercise(page: Page, lessonId: string, ex: SourceExercise) {
  await goto(page, `/lesson/${lessonId}`);
  const anchor = page.locator(`[id="ex-${ex.id}"]`);
  await expect(anchor).toBeAttached();
  await expect(anchor.getByTestId('coming-soon'), `${ex.type} must be implemented`).toHaveCount(0);
  const section = exerciseLocator(page, ex.id);
  await section.scrollIntoViewIfNeeded();
  await expect(section).toBeVisible();
  await expect(section).toHaveAttribute('data-type', ex.type);
  // timed performances (count-in + playing along) take real time per item
  const { item } = await currentItem(page, ex.id);
  if (isTimed(item)) test.slow();
  return section;
}

function requireAnswerer(type: string) {
  expect(canAnswer(type), `ANSWERERS in e2e/helpers/exercises.ts has an entry for ${type}`).toBe(true);
}

async function requireWrongPossible(page: Page, id: string) {
  const { item } = await currentItem(page, id);
  if (!canAnswerWrong(item)) {
    test.info().annotations.push({ type: 'no-wrong-answer', description: `${item.type} items always pass (see "shell details")` });
    test.skip(true, `${item.type}: no wrong answer possible`);
  }
}

async function correctAnswerTest(page: Page, api: APIRequestContext, lesson: SourceLesson, ex: SourceExercise) {
  await openExercise(page, lesson.id, ex);
  requireAnswerer(ex.type);
  const before = await exProgress(api, lesson.id, ex.id);
  await answer(page, ex.id, true);
  const section = exerciseLocator(page, ex.id);
  await expect(section.locator('.feedback.ok')).not.toBeEmpty();
  await expect(section.getByRole('button', { name: 'Reveal', exact: true })).toHaveCount(0);
  await expect(section.locator('.progress-dots .dot').first()).toHaveClass(/ok/);
  await expect(section.getByText('Attempts: 1')).toBeVisible();
  await expect
    .poll(async () => {
      const p = await exProgress(api, lesson.id, ex.id);
      return [p?.attempts ?? 0, p?.correct ?? 0];
    })
    .toEqual([(before?.attempts ?? 0) + 1, (before?.correct ?? 0) + 1]);
  expect((await attemptScores(api, lesson.id, ex.id))[0], 'first attempt scored 100%').toBe(1);
  const prog = await progress(api);
  expect(prog.lessons[lesson.id]?.status).toMatch(/in-progress|completed/);
  expect(prog.lastLessonId).toBe(lesson.id);
}

/** Independent oracle for packages/core scoringOf: performance types count the best take, the rest the first answer. */
const BEST_TAKE = new Set(['play-scale', 'play-chord', 'play-melody', 'rhythm-tap', 'read-rhythm', 'daw-task', 'reflect']);
const scoringOf = (type: string) => (BEST_TAKE.has(type) ? 'best' : 'first');

async function wrongAnswerTest(page: Page, api: APIRequestContext, lesson: SourceLesson, ex: SourceExercise) {
  await openExercise(page, lesson.id, ex);
  requireAnswerer(ex.type);
  await requireWrongPossible(page, ex.id);
  const before = await exProgress(api, lesson.id, ex.id);
  await answer(page, ex.id, false);
  const section = exerciseLocator(page, ex.id);
  await expect(section.locator('.feedback.bad')).toBeVisible();
  await expect(section.getByRole('button', { name: 'Reveal', exact: true })).toBeVisible();
  await expect(section.locator('.exercise-foot button.primary')).toBeEnabled();
  await expect.poll(async () => (await exProgress(api, lesson.id, ex.id))?.attempts ?? 0).toBe((before?.attempts ?? 0) + 1);
  expect((await attemptScores(api, lesson.id, ex.id))[0], 'wrong first attempt scores below 100%').toBeLessThan(1);
  // retry with the right answer. Recognition types: the item stays scored as wrong (first attempt counts).
  // Performance types (play in time, tap, DAW…): the best take counts, so the item turns green and the set can pass.
  await answer(page, ex.id, true);
  await expect(section.getByText('Attempts: 2')).toBeVisible();
  const bestTake = scoringOf(ex.type) === 'best';
  await expect(section.locator('.progress-dots .dot').first()).toHaveClass(bestTake ? /\bok\b/ : /bad/);
  await page.waitForTimeout(300);
  const p = await exProgress(api, lesson.id, ex.id);
  // the per-attempt log records only the first attempt either way
  expect([p?.attempts ?? 0, p?.correct ?? 0]).toEqual([(before?.attempts ?? 0) + 1, before?.correct ?? 0]);
  const { total } = await currentItem(page, ex.id);
  if (total === 1) {
    await section.locator('.exercise-foot button.primary').click();
    const summary = section.getByTestId('exercise-summary');
    if (bestTake) {
      // regression: a wrong first take followed by a perfect one used to summarise as 0%
      await expect(summary).toContainText('100%');
      await expect(summary).toContainText('Best take');
      await expect(summary).toContainText('Passed ✓');
    } else {
      await expect(summary).toContainText('0%');
      await expect(summary).toContainText('correct first time');
    }
  }
}

async function fullSetTest(page: Page, api: APIRequestContext, lesson: SourceLesson, ex: SourceExercise) {
  await openExercise(page, lesson.id, ex);
  requireAnswerer(ex.type);
  const text = await completeSet(page, ex.id);
  expect(text, 'summary card after Finish').not.toBeNull();
  expect(text).toContain('100%');
  expect(text).toContain('Passed ✓');
  await expect.poll(async () => (await exProgress(api, lesson.id, ex.id))?.passed).toBe(true);
  expect((await exProgress(api, lesson.id, ex.id))?.bestScore).toBe(1);
  await expect(page.locator(`aside.rail li.rail-item:has(a[href="#ex-${ex.id}"])`)).toHaveClass(/\bpassed\b/);
  const cards = (await (await api.get('/api/srs/cards')).json()).cards as { lessonId: string; exerciseId: string; type: string }[];
  const card = cards.find((c) => c.lessonId === lesson.id && c.exerciseId === ex.id);
  const eligible = ex.srs ?? ex.type.startsWith('ear-');
  if (eligible) expect(card, 'SRS card created').toMatchObject({ type: ex.type });
  else expect(card, 'no SRS card for non-eligible type').toBeUndefined();
}

for (const type of CATALOGUE_TYPES) {
  const uses = variantsOf(type);
  test.describe(`exercise ${type}`, () => {
    const use = uses[0];
    test.skip(!use, `no lesson uses ${type} (covered on /dev/demo below)`);
    if (!use) return;
    const { lesson, exercise: ex } = use;

    test('renders; Skip disabled before answering; Reveal shows the solution; Next advances', async ({ page, api }) => {
      const section = await openExercise(page, lesson.id, ex);
      const { total, item } = await currentItem(page, ex.id);
      const progressLabel = section.getByLabel('progress', { exact: true });
      await expect(progressLabel).toHaveText(`1 / ${total}`);
      await expect(section.locator('.progress-dots .dot')).toHaveCount(total);
      await expect(section.locator('.prompt')).toHaveText(item.prompt);
      const nextBtn = section.locator('.exercise-foot button.primary');
      if (total > 1) {
        await expect(nextBtn).toHaveText(/Skip/);
        await expect(nextBtn).toBeDisabled();
      }
      const before = await exProgress(api, lesson.id, ex.id);
      await section.getByRole('button', { name: 'Reveal', exact: true }).click();
      await expect(section.locator('.feedback.bad')).toHaveText(`Answer: ${item.solution}`);
      await expect(section.getByRole('button', { name: 'Reveal', exact: true })).toHaveCount(0);
      if (item.choices?.length) await expect(section.locator('.choice-correct').first()).toBeVisible();
      await expect(nextBtn).toBeEnabled();
      // a reveal counts as a wrong first attempt
      await expect.poll(async () => (await exProgress(api, lesson.id, ex.id))?.attempts ?? 0).toBe((before?.attempts ?? 0) + 1);
      if (total > 1) {
        await next(page, ex.id);
        await waitForIndex(page, ex.id, 1);
        await expect(progressLabel).toHaveText(`2 / ${total}`);
        await expect(section.locator('.feedback')).toHaveCount(0);
        await expect(section.locator('.progress-dots .dot').first()).toHaveClass(/bad/);
      }
    });

    test('revealing every item finishes the set as not passed', async ({ page, api }) => {
      await openExercise(page, lesson.id, ex);
      const before = await exProgress(api, lesson.id, ex.id);
      const text = await revealAll(page, ex.id);
      expect(text, 'summary card after Finish').not.toBeNull();
      expect(text).toContain('0%');
      expect(text).toMatch(/Need \d+% to pass/);
      await expect.poll(async () => (await exProgress(api, lesson.id, ex.id))?.lastScore ?? -1).toBe(0);
      await expect.poll(async () => (await exProgress(api, lesson.id, ex.id))?.passed).toBe(before?.passed ?? false);
      expect((await exProgress(api, lesson.id, ex.id))?.bestScore).toBe(before?.bestScore ?? 0);
    });

    test('correct answer → positive feedback, attempt stored as correct', async ({ page, api }) => {
      await correctAnswerTest(page, api, lesson, ex);
    });

    test('wrong answer → negative feedback; retry allowed; first attempt scored (best take for performance types)', async ({ page, api }) => {
      await wrongAnswerTest(page, api, lesson, ex);
    });

    test('completing the set with all answers correct marks it passed (and SRS card for eligible types)', async ({ page, api }) => {
      await fullSetTest(page, api, lesson, ex);
    });

    test('failing the set (all wrong) is recorded as not passed', async ({ page, api }) => {
      await openExercise(page, lesson.id, ex);
      requireAnswerer(type);
      await requireWrongPossible(page, ex.id);
      const text = await completeSet(page, ex.id, () => false);
      expect(text).toContain('Need');
      expect(text).not.toContain('Passed');
      // passed/bestScore are sticky (best ever); the latest completion is what this set recorded
      await expect.poll(async () => (await exProgress(api, lesson.id, ex.id))?.lastScore ?? -1).toBeLessThan((ex.passScore ?? 0.7));
    });

    test('replay / autoplay play the item audio', async ({ page }) => {
      const section = await openExercise(page, lesson.id, ex);
      const { item } = await currentItem(page, ex.id);
      const hasAudio = !!(item.audio || item.reference);
      if (!hasAudio) {
        await expect(section.locator('.audio-row')).toHaveCount(0);
        test.skip(true, `${type} items have no audio`);
      }
      // the opening notes are enough to identify the item's audio (long transcription mixes schedule later notes
      // only as playback reaches them)
      const expected: number[] = (Array.isArray(item.midis) ? item.midis : typeof item.midi === 'number' ? [item.midi] : []).slice(0, 3);
      await unlockAudio(page);
      await page.waitForTimeout(500);
      await clearAudio(page);
      await section.locator('.audio-row button').first().click();
      await expectSound(page, { kinds: ['scheduled'], ...(expected.length ? { midi: expected } : {}), timeout: 15_000, message: `replay of ${type} item plays ${expected}` });
      if (item.reference && item.audio) {
        await clearAudio(page);
        await section.getByRole('button', { name: 'Question only' }).click();
        await expectSound(page, { kinds: ['scheduled'], ...(expected.length ? { midi: expected } : {}), timeout: 8000 });
      }
      // autoplay: moving to the next item plays it without pressing Replay (the learner has engaged with it)
      const { total } = await currentItem(page, ex.id);
      if (total > 1) {
        await section.getByRole('button', { name: 'Reveal', exact: true }).click();
        await next(page, ex.id);
        const n = await waitForIndex(page, ex.id, 1);
        await clearAudio(page);
        const exp2: number[] = Array.isArray(n.item.midis) ? n.item.midis : typeof n.item.midi === 'number' ? [n.item.midi] : [];
        await expectSound(page, { kinds: ['scheduled'], ...(exp2.length ? { midi: exp2 } : {}), timeout: 15_000, message: 'autoplay of next item' });
      }
    });
  });

  for (const v of uses.slice(1)) {
    test.describe(`exercise ${type} [${v.variant}] (${v.lesson.id}#${v.exercise.id})`, () => {
      test('correct answer is accepted', async ({ page, api }) => {
        await correctAnswerTest(page, api, v.lesson, v.exercise);
      });
      test('wrong answer is rejected; retry allowed', async ({ page, api }) => {
        await wrongAnswerTest(page, api, v.lesson, v.exercise);
      });
      test('full correct set passes', async ({ page, api }) => {
        await fullSetTest(page, api, v.lesson, v.exercise);
      });
    });
  }
}

test.describe('timing: late / sloppy performances score lower than in-time ones', () => {
  // one timed use per type (rhythm-tap, play-melody, read-rhythm, timed play-scale, ear-rhythm tap)
  const timedUses = [
    smallest('rhythm-tap'),
    smallest('play-melody', (e) => !e.spec.tracks),
    smallest('read-rhythm'),
    smallest('play-scale', (e) => e.spec.tempo !== undefined),
    smallest('ear-rhythm', (e) => e.spec.answer === 'tap'),
  ].filter((x): x is NonNullable<typeof x> => !!x);
  for (const { lesson, exercise: ex } of timedUses) {
    test(`${ex.type} (${lesson.id}#${ex.id}): in time scores 100%, late (outside the tolerance) scores less`, async ({ page, api }) => {
      test.setTimeout(120_000);
      const scores: number[] = [];
      for (const late of [false, true]) {
        const section = await openExercise(page, lesson.id, ex);
        const { item } = await currentItem(page, ex.id);
        const spec = item.performance as PerfSpec;
        expect(isTimed(item), 'timed performance').toBe(true);
        const n = (await attemptScores(api, lesson.id, ex.id)).length;
        await perform(page, section, spec, { shiftBeats: late ? lateShiftBeats(spec) : 0, waitForEnd: true });
        await expect(section.locator('.feedback')).toHaveClass(late ? /\bbad\b/ : /\bok\b/);
        await expect.poll(async () => (await attemptScores(api, lesson.id, ex.id)).length).toBe(n + 1);
        scores.push((await attemptScores(api, lesson.id, ex.id))[0]!);
        if (late) await expect(section.getByTestId('perf-strip')).toBeVisible();
      }
      test.info().annotations.push({ type: 'scores', description: scores.map((s) => s.toFixed(2)).join(' → ') });
      expect(scores[0], 'in time').toBe(1);
      expect(scores[1], `late performance scores lower (${scores})`).toBeLessThan(0.85);
    });
  }

  test('rhythm-tap: leaving out half the taps scores lower', async ({ page, api }) => {
    const use = smallest('rhythm-tap')!;
    const section = await openExercise(page, use.lesson.id, use.exercise);
    const { item } = await currentItem(page, use.exercise.id);
    const spec = item.performance as PerfSpec;
    await perform(page, section, spec, { only: (i) => i % 2 === 0 });
    await expect(section.locator('.feedback.bad')).toBeVisible();
    await expect.poll(async () => (await attemptScores(api, use.lesson.id, use.exercise.id))[0] ?? 1).toBeLessThan(0.8);
  });

  test('wrong pitches in time score lower than right pitches (play-melody)', async ({ page, api }) => {
    const use = smallest('play-melody', (e) => !e.spec.tracks)!;
    const section = await openExercise(page, use.lesson.id, use.exercise);
    const { item } = await currentItem(page, use.exercise.id);
    await perform(page, section, item.performance as PerfSpec, { transpose: 1 });
    await expect(section.locator('.feedback.bad')).toBeVisible();
    await expect.poll(async () => (await attemptScores(api, use.lesson.id, use.exercise.id))[0] ?? 1).toBeLessThan(0.5);
  });
});

test.describe('exercise shell details', () => {
  test('finishing a set shows the score summary with "Practice again"', async ({ page }) => {
    // Regression for BUG-03 (fixed): LessonRenderer used to re-create its react-markdown `components` on every
    // render, remounting every block when an exercise finished (summary never shown, exercise restarted).
    const use = find('quiz')!;
    await openExercise(page, use.lesson.id, use.exercise);
    const text = await completeSet(page, use.exercise.id);
    expect(text).toContain('100%');
    await exerciseLocator(page, use.exercise.id).getByRole('button', { name: 'Practice again' }).click();
    await waitForIndex(page, use.exercise.id, 0);
  });

  test('finishing one exercise does not reset progress in the other exercises of the lesson', async ({ page }) => {
    // Regression for BUG-03 (fixed): every exercise block on the page was remounted when any exercise finished.
    // `other` must have several distinct items: a fixed exercise (given melody, note list…) is a single-item set
    const multi = (e: { type: string; spec: Record<string, unknown> }) => canAnswer(e.type) && e.type.startsWith('ear-') && !e.spec.example;
    const lesson = lessons().find((l) => l.exercises.some((e) => e.type === 'quiz') && l.exercises.some(multi))!;
    const quiz = lesson.exercises.find((e) => e.type === 'quiz')!;
    const other = lesson.exercises.find(multi)!;
    await openExercise(page, lesson.id, other);
    await answer(page, other.id, true);
    await next(page, other.id);
    const before = await waitForIndex(page, other.id, 1);
    await completeSet(page, quiz.id);
    await page.waitForTimeout(500);
    const after = await currentItem(page, other.id);
    expect(after.index, `exercise ${other.id} was reset`).toBe(1);
    expect(after.item).toEqual(before.item);
  });

  test('hints are revealed one by one and the button counts down', async ({ page }) => {
    const use = find('ear-octave', (e) => (e.hints?.length ?? 0) > 0) ?? lessons().flatMap((l) => l.exercises.map((e) => ({ lesson: l, exercise: e }))).find((x) => (x.exercise.hints?.length ?? 0) > 1 && canAnswer(x.exercise.type));
    test.skip(!use, 'no implemented exercise with hints');
    const { lesson, exercise: ex } = use!;
    const section = await openExercise(page, lesson.id, ex);
    const hints = ex.hints!;
    for (let i = 0; i < hints.length; i++) {
      await section.getByRole('button', { name: `Hint (${hints.length - i})` }).click();
      await expect(section.locator('ul.hints li')).toHaveCount(i + 1);
      await expect(section.locator('ul.hints li').nth(i)).toContainText(hints[i]!);
    }
    await expect(section.getByRole('button', { name: /^Hint/ })).toHaveCount(0);
  });

  test('ear-note (degree answers) can be answered by playing the note on a MIDI keyboard', async ({ page, api }) => {
    const use = find('ear-note', (e) => (e.spec.answer ?? 'degree') === 'degree');
    test.skip(!use, 'no degree ear-note');
    const { lesson, exercise: ex } = use!;
    const section = await openExercise(page, lesson.id, ex);
    await expect(section.getByText(/answer by playing the note/)).toBeVisible();
    const { item } = await currentItem(page, ex.id);
    await claimFocus(section);
    await midi.noteOn(page, item.midi, 100);
    await midi.noteOff(page, item.midi);
    await expect(section.locator('.feedback.ok')).toBeVisible();
    await expect.poll(async () => (await exProgress(api, lesson.id, ex.id))?.correct ?? 0).toBeGreaterThan(0);
  });

  test('quiz-input accepts equivalent spellings (case / enharmonic for notes)', async ({ page }) => {
    const use = find('quiz-input', (e) => ((e.spec.questions as { kind?: string }[]) ?? []).some((q) => q.kind === 'note'));
    test.skip(!use, 'no note quiz-input');
    const { lesson, exercise: ex } = use!;
    const section = await openExercise(page, lesson.id, ex);
    const qs = ex.spec.questions as { kind?: string }[];
    const noteIdx = qs.findIndex((q) => q.kind === 'note');
    for (let i = 0; i < noteIdx; i++) {
      await section.getByRole('button', { name: 'Reveal', exact: true }).click();
      await next(page, ex.id);
      await waitForIndex(page, ex.id, i + 1);
    }
    const { item } = await currentItem(page, ex.id);
    const acc: string = item.accepted[0];
    const enh: Record<string, string> = { 'C#': 'db', Db: 'c sharp', 'D#': 'eb', Eb: 'D#', 'F#': 'gb', Gb: 'F sharp', 'G#': 'ab', Ab: 'g#', 'A#': 'bb', Bb: 'A#' };
    const variant = enh[acc.replace(/\d+$/, '')] ?? acc.toLowerCase();
    await section.getByLabel('Answer').fill(variant);
    await section.getByRole('button', { name: 'Check' }).click();
    await expect(section.locator('.feedback.ok')).toBeVisible();
  });

  test('unlocking audio on a lesson autoplays at most one exercise (not every ear exercise at once)', async ({ page }) => {
    // Regression for BUG-07 (fixed): every <ExerciseShell> used to autoplay its current item as soon as audio was
    // unlocked, so N ear exercises started N sequences at once.
    // ear drills live in ```ladder blocks now: a lesson with three of them
    const lesson = lessons().find((l) => l.ladders.length >= 3)!;
    await goto(page, `/lesson/${lesson.id}`);
    const drills = page.locator('[data-testid="ladder"] section.exercise');
    await expect.poll(() => drills.count()).toBeGreaterThanOrEqual(3);
    await clearAudio(page);
    await unlockAudio(page);
    await page.waitForTimeout(1500);
    const starts = (await page.evaluate(() => (window as any).__MC_E2E__.audio as { kind: string }[])).filter((e) => e.kind === 'schedule');
    expect(starts.length, 'sequences started right after unlocking audio (nothing autoplays merely because audio got unlocked)').toBe(0);
    // engaging with one exercise: Next autoplays only that exercise's next item
    const target = { id: (await drills.nth(1).getAttribute('data-testid'))!.replace('exercise-', '') };
    const section = exerciseLocator(page, target.id);
    await section.scrollIntoViewIfNeeded();
    await section.getByRole('button', { name: 'Reveal', exact: true }).click();
    await next(page, target.id);
    const n = await waitForIndex(page, target.id, 1);
    await clearAudio(page);
    await page.waitForTimeout(1500);
    const log = await page.evaluate(() => (window as any).__MC_E2E__.audio as { kind: string; midi?: number }[]);
    expect(log.filter((e) => e.kind === 'schedule').length, 'one autoplay').toBeLessThanOrEqual(1);
    const heard = log.filter((e) => e.kind === 'scheduled').map((e) => e.midi);
    const exp: number[] = Array.isArray(n.item.midis) ? n.item.midis : [n.item.midi];
    expect(heard.length).toBeGreaterThan(0);
    // the first note is enough to tell whose audio started (melodies continue after the wait)
    expect(heard, `autoplayed notes belong to ${target.id}`).toContain(exp[0]);
  });

  test('quiz-input (note answers) can be filled by playing a key', async ({ page }) => {
    const use = find('quiz-input', (e) => ((e.spec.questions as { kind?: string }[]) ?? [])[0]?.kind === 'note');
    test.skip(!use, 'no quiz-input starting with a note question');
    const { lesson, exercise: ex } = use!;
    const section = await openExercise(page, lesson.id, ex);
    await claimFocus(section);
    await midi.noteOn(page, 66, 100);
    await midi.noteOff(page, 66);
    await expect(section.getByLabel('Answer')).toHaveValue(/^(F#|Gb)$/);
  });

  test('play-notes shows correct/wrong marks on the keyboard while playing', async ({ page }) => {
    const use = find('play-notes', (e) => e.spec.prompt !== 'staff');
    test.skip(!use, 'no play-notes');
    const { lesson, exercise: ex } = use!;
    const section = await openExercise(page, lesson.id, ex);
    const { item } = await currentItem(page, ex.id);
    await expect(section.getByText(`Played: 0/${item.midis.length}`)).toBeVisible();
    if (item.midis.length > 1) {
      await claimFocus(section);
      const { clickKey } = await import('./helpers/app');
      await clickKey(page, section, item.midis[0]);
      await expect(section.getByText(`Played: 1/${item.midis.length}`)).toBeVisible();
      await expect(section.locator(`[data-midi="${item.midis[0]}"]`)).toHaveClass(/mark_correct/);
      await section.getByRole('button', { name: 'reset' }).click();
      await expect(section.getByText(`Played: 0/${item.midis.length}`)).toBeVisible();
    }
  });

  test('reflect: Save stays disabled until the minimum word count; the entry is shown next time', async ({ page }) => {
    const use = find('reflect', (e) => ((e.spec.minWords as number | undefined) ?? 0) >= 3)!;
    const section = await openExercise(page, use.lesson.id, use.exercise);
    const min = use.exercise.spec.minWords as number;
    const save = section.getByRole('button', { name: 'Save to journal' });
    await section.getByLabel('Your reflection').fill(Array.from({ length: min - 1 }, (_, i) => `w${i}`).join(' '));
    await expect(save).toBeDisabled();
    await expect(section.getByText(`${min - 1} / ${min} words`)).toBeVisible();
    const text = Array.from({ length: min }, (_, i) => `thought${i}`).join(' ');
    await section.getByLabel('Your reflection').fill(text);
    await save.click();
    await expect(section.locator('.feedback.ok')).toBeVisible();
    await page.reload();
    await page.waitForLoadState('networkidle');
    const again = exerciseLocator(page, use.exercise.id);
    await again.getByText(/Your last entry/).click();
    await expect(again.locator('.journal-text')).toHaveText(text);
  });

  test('listen without questions: "I\'ve listened" passes; the examples play', async ({ page }) => {
    const use = find('listen', (e) => !(e.spec.questions as unknown[] | undefined)?.length);
    test.skip(!use, 'every listen block has questions');
    const section = await openExercise(page, use!.lesson.id, use!.exercise);
    await unlockAudio(page);
    await clearAudio(page);
    await section.getByTestId('example-block').first().getByRole('button', { name: 'Play' }).click();
    await expectSound(page, { kinds: ['scheduled'] });
    await section.getByRole('button', { name: "✓ I've listened" }).click();
    await expect(section.locator('.feedback.ok')).toBeVisible();
  });

  test('play-chord waits for the chord to settle: arpeggiating the notes one by one still counts once all are held', async ({ page }) => {
    const use = find('play-chord', (e) => !e.spec.sequence)!;
    const section = await openExercise(page, use.lesson.id, use.exercise);
    const { item } = await currentItem(page, use.exercise.id);
    await claimFocus(section);
    const notes = item.midis as number[];
    for (const n of notes) {
      await midi.noteOn(page, n, 90);
      await page.waitForTimeout(100);
    }
    await expect(section.locator('.feedback.ok')).toBeVisible();
    for (const n of notes) await midi.noteOff(page, n);
  });

  test('build-chord: selection toggles, Clear empties it, octave does not matter', async ({ page }) => {
    const use = find('build-chord')!;
    const section = await openExercise(page, use.lesson.id, use.exercise);
    const { item } = await currentItem(page, use.exercise.id);
    await claimFocus(section);
    const pcs = item.pitchClasses as number[];
    await midi.noteOn(page, 60 + pcs[0]!, 90);
    await midi.noteOff(page, 60 + pcs[0]!);
    await expect(section.getByText(/Selected: \S/)).toBeVisible();
    await section.getByRole('button', { name: 'Clear' }).click();
    await expect(section.getByText('Selected: —')).toBeVisible();
    // pitch classes in mixed octaves
    for (const [i, pc] of pcs.entries()) {
      const n = (i % 2 ? 72 : 48) + pc;
      await midi.noteOn(page, n, 90);
      await midi.noteOff(page, n);
    }
    await section.locator('.build-notes').getByRole('button', { name: 'Check' }).click();
    await expect(section.locator('.feedback.ok')).toBeVisible();
  });
});

test.describe('/dev/demo: every exercise block answers right and wrong (incl. types no lesson uses yet)', () => {
  const demo = demoLesson();
  for (const ex of demo.exercises) {
    test(`${ex.id} ${ex.type}: correct then (fresh page) wrong`, async ({ page }) => {
      test.setTimeout(90_000);
      requireAnswerer(ex.type);
      await goto(page, '/dev/demo');
      const section = exerciseLocator(page, ex.id);
      await section.scrollIntoViewIfNeeded();
      await expect(section).toHaveAttribute('data-type', ex.type);
      await answer(page, ex.id, true);
      const { item } = await currentItem(page, ex.id);
      if (!canAnswerWrong(item)) return;
      await goto(page, '/dev/demo');
      await exerciseLocator(page, ex.id).scrollIntoViewIfNeeded();
      await answer(page, ex.id, false);
    });
  }
});
