/**
 * 4. Every exercise type in the catalogue, data-driven over content/.
 *
 * For each type the first lesson using it is opened. If the type renders "coming soon" the tests are
 * skipped with a `coming-soon` annotation (reported, not failed) — so they light up automatically when the
 * type is implemented. Generic checks (render, reveal, next/skip, finish) work for any implemented type;
 * answer-driven checks need an entry in helpers/exercises.ts ANSWERERS (skipped with `no-answerer` otherwise).
 */
import type { APIRequestContext, Page } from '@playwright/test';
import { test, expect } from './fixtures';
import { clearAudio, expectSound, goto, midi, unlockAudio } from './helpers/app';
import { CATALOGUE_TYPES, lessons, type SourceExercise, type SourceLesson } from './helpers/content';
import { answer, canAnswer, completeSet, currentItem, exerciseLocator, next, revealAll, waitForIndex } from './helpers/exercises';

test.use({ isolated: true });
test.describe.configure({ mode: 'parallel' });

function find(type: string, pred: (e: SourceExercise, l: SourceLesson) => boolean = () => true) {
  for (const l of lessons()) for (const e of l.exercises) if (e.type === type && pred(e, l)) return { lesson: l, exercise: e };
  return null;
}

async function progress(api: APIRequestContext) {
  const r = await api.get('/api/progress');
  expect(r.ok()).toBe(true);
  return r.json();
}

async function exProgress(api: APIRequestContext, lessonId: string, exId: string) {
  return ((await progress(api)).exercises[lessonId] ?? {})[exId] as { attempts: number; correct: number; bestScore: number; passed: boolean } | undefined;
}

/** Open the lesson and return the exercise section, or skip when the type is "coming soon". */
async function openExercise(page: Page, lessonId: string, ex: SourceExercise) {
  await goto(page, `/lesson/${lessonId}`);
  const anchor = page.locator(`[id="ex-${ex.id}"]`);
  await expect(anchor).toBeAttached();
  if (await anchor.getByTestId('coming-soon').count()) {
    test.info().annotations.push({ type: 'coming-soon', description: `${ex.type} (${lessonId}#${ex.id})` });
    test.skip(true, `${ex.type} is "coming soon"`);
  }
  const section = exerciseLocator(page, ex.id);
  await expect(section).toBeVisible();
  await expect(section).toHaveAttribute('data-type', ex.type);
  return section;
}

function requireAnswerer(type: string) {
  if (!canAnswer(type)) {
    test.info().annotations.push({ type: 'no-answerer', description: `add ${type} to ANSWERERS in e2e/helpers/exercises.ts` });
    test.skip(true, `no answerer for ${type}`);
  }
}

for (const type of CATALOGUE_TYPES) {
  test.describe(`exercise ${type}`, () => {
    const use = find(type);
    test.skip(!use, `no lesson uses ${type}`);
    if (!use) return;
    const { lesson, exercise: ex } = use;

    test('renders; Skip disabled before answering; Reveal shows the solution; Next advances', async ({ page, api }) => {
      const section = await openExercise(page, lesson.id, ex);
      const { total, item } = await currentItem(page, ex.id);
      await expect(section.getByLabel('progress')).toHaveText(`1 / ${total}`);
      await expect(section.locator('.progress-dots .dot')).toHaveCount(total);
      await expect(section.locator('.prompt')).toHaveText(item.prompt);
      const nextBtn = section.locator('.exercise-foot button.primary');
      if (total > 1) {
        await expect(nextBtn).toHaveText(/Skip/);
        await expect(nextBtn).toBeDisabled();
      }
      const before = await exProgress(api, lesson.id, ex.id);
      await section.getByRole('button', { name: 'Reveal' }).click();
      await expect(section.locator('.feedback.bad')).toHaveText(`Answer: ${item.solution}`);
      await expect(section.getByRole('button', { name: 'Reveal' })).toHaveCount(0);
      if (item.choices?.length) await expect(section.locator('.choice-correct').first()).toBeVisible();
      await expect(nextBtn).toBeEnabled();
      // a reveal counts as a wrong first attempt
      await expect.poll(async () => (await exProgress(api, lesson.id, ex.id))?.attempts ?? 0).toBe((before?.attempts ?? 0) + 1);
      if (total > 1) {
        await next(page, ex.id);
        await waitForIndex(page, ex.id, 1);
        await expect(section.getByLabel('progress')).toHaveText(`2 / ${total}`);
        await expect(section.locator('.feedback')).toHaveCount(0);
        await expect(section.locator('.progress-dots .dot').first()).toHaveClass(/bad/);
      }
    });

    test('revealing every item finishes the set as not passed', async ({ page, api }) => {
      await openExercise(page, lesson.id, ex);
      const before = await exProgress(api, lesson.id, ex.id);
      const text = await revealAll(page, ex.id);
      if (text !== null) {
        // summary card (hidden on lesson pages by BUG-03; asserted when it shows, e.g. after the fix)
        expect(text).toContain('0%');
        expect(text).toMatch(/Need \d+% to pass/);
      }
      await expect.poll(async () => (await exProgress(api, lesson.id, ex.id))?.passed).toBe(before?.passed ?? false);
      await expect.poll(async () => (await exProgress(api, lesson.id, ex.id))?.bestScore ?? -1).toBe(before?.bestScore ?? 0);
    });

    test('correct answer → positive feedback, attempt stored as correct', async ({ page, api }) => {
      await openExercise(page, lesson.id, ex);
      requireAnswerer(type);
      const before = await exProgress(api, lesson.id, ex.id);
      await answer(page, ex.id, true);
      const section = exerciseLocator(page, ex.id);
      await expect(section.locator('.feedback.ok')).not.toBeEmpty();
      await expect(section.getByRole('button', { name: 'Reveal' })).toHaveCount(0);
      await expect(section.locator('.progress-dots .dot').first()).toHaveClass(/ok/);
      await expect(section.getByText('Attempts: 1')).toBeVisible();
      await expect
        .poll(async () => {
          const p = await exProgress(api, lesson.id, ex.id);
          return [p?.attempts ?? 0, p?.correct ?? 0];
        })
        .toEqual([(before?.attempts ?? 0) + 1, (before?.correct ?? 0) + 1]);
      const prog = await progress(api);
      expect(prog.lessons[lesson.id]?.status).toBe('in-progress');
      expect(prog.lastLessonId).toBe(lesson.id);
    });

    test('wrong answer → negative feedback; retry allowed; only the first attempt is scored', async ({ page, api }) => {
      await openExercise(page, lesson.id, ex);
      requireAnswerer(type);
      const before = await exProgress(api, lesson.id, ex.id);
      await answer(page, ex.id, false);
      const section = exerciseLocator(page, ex.id);
      await expect(section.locator('.feedback.bad')).toBeVisible();
      await expect(section.getByRole('button', { name: 'Reveal' })).toBeVisible();
      await expect(section.locator('.exercise-foot button.primary')).toBeEnabled();
      await answer(page, ex.id, true);
      await expect(section.getByText('Attempts: 2')).toBeVisible();
      await expect(section.locator('.progress-dots .dot').first()).toHaveClass(/bad/);
      await expect
        .poll(async () => {
          const p = await exProgress(api, lesson.id, ex.id);
          return [p?.attempts ?? 0, p?.correct ?? 0];
        })
        .toEqual([(before?.attempts ?? 0) + 1, before?.correct ?? 0]);
    });

    test('completing the set with all answers correct marks it passed (and SRS card for eligible types)', async ({ page, api }) => {
      await openExercise(page, lesson.id, ex);
      requireAnswerer(type);
      const text = await completeSet(page, ex.id);
      if (text !== null) {
        expect(text).toContain('100%');
        expect(text).toContain('Passed ✓');
      }
      await expect.poll(async () => (await exProgress(api, lesson.id, ex.id))?.passed).toBe(true);
      expect((await exProgress(api, lesson.id, ex.id))?.bestScore).toBe(1);
      await expect(page.locator(`aside.rail li.rail-item:has(a[href="#ex-${ex.id}"])`)).toHaveClass(/\bpassed\b/);
      const cards = (await (await api.get('/api/srs/cards')).json()).cards as { lessonId: string; exerciseId: string; type: string }[];
      const card = cards.find((c) => c.lessonId === lesson.id && c.exerciseId === ex.id);
      const eligible = ex.srs ?? type.startsWith('ear-');
      if (eligible) expect(card, 'SRS card created').toMatchObject({ type });
      else expect(card, 'no SRS card for non-eligible type').toBeUndefined();
    });

    test('failing the set (all wrong) is recorded as not passed', async ({ page, api }) => {
      await openExercise(page, lesson.id, ex);
      requireAnswerer(type);
      const text = await completeSet(page, ex.id, () => false);
      if (text !== null) expect(text).toContain('Need');
      await expect.poll(async () => (await exProgress(api, lesson.id, ex.id))?.passed ?? null).toBe(false);
    });

    test('replay / autoplay play the item audio', async ({ page }) => {
      const section = await openExercise(page, lesson.id, ex);
      const { item } = await currentItem(page, ex.id);
      const hasAudio = !!(item.audio || item.reference);
      if (!hasAudio) {
        await expect(section.locator('.audio-row')).toHaveCount(0);
        test.skip(true, `${type} items have no audio`);
      }
      const expected: number[] = Array.isArray(item.midis) ? item.midis : typeof item.midi === 'number' ? [item.midi] : [];
      await unlockAudio(page);
      await page.waitForTimeout(500);
      await clearAudio(page);
      await section.locator('.audio-row button').first().click();
      await expectSound(page, { kinds: ['scheduled'], ...(expected.length ? { midi: expected } : {}), timeout: 15_000, message: `replay of ${type} item plays ${expected}` });
      if (item.reference) {
        await clearAudio(page);
        await section.getByRole('button', { name: 'Question only' }).click();
        await expectSound(page, { kinds: ['scheduled'], ...(expected.length ? { midi: expected } : {}), timeout: 8000 });
      }
      // autoplay: moving to the next item plays it without pressing Replay
      const { total } = await currentItem(page, ex.id);
      if (total > 1) {
        await section.getByRole('button', { name: 'Reveal' }).click();
        await next(page, ex.id);
        const n = await waitForIndex(page, ex.id, 1);
        await clearAudio(page);
        const exp2: number[] = Array.isArray(n.item.midis) ? n.item.midis : typeof n.item.midi === 'number' ? [n.item.midi] : [];
        await expectSound(page, { kinds: ['scheduled'], ...(exp2.length ? { midi: exp2 } : {}), timeout: 15_000, message: 'autoplay of next item' });
      }
    });
  });
}

test.describe('exercise shell details', () => {
  test('finishing a set shows the score summary with "Practice again"', async ({ page }) => {
    // BUG-03 (docs/QA_REPORT.md#bug-03): LessonRenderer re-creates its react-markdown `components` on every render,
    // so when LessonView re-renders (onExerciseComplete) every block is remounted: the summary disappears and the
    // exercise restarts with a new random set.
    test.fail();
    const use = find('quiz')!;
    await openExercise(page, use.lesson.id, use.exercise);
    const text = await completeSet(page, use.exercise.id);
    expect(text).toContain('100%');
    await exerciseLocator(page, use.exercise.id).getByRole('button', { name: 'Practice again' }).click();
    await waitForIndex(page, use.exercise.id, 0);
  });

  test('finishing one exercise does not reset progress in the other exercises of the lesson', async ({ page }) => {
    // BUG-03: every exercise block on the page is remounted when any exercise is finished.
    test.fail();
    const lesson = lessons().find((l) => l.exercises.filter((e) => e.type === 'quiz').length >= 1 && l.exercises.filter((e) => canAnswer(e.type) && e.type !== 'quiz').length >= 1)!;
    const quiz = lesson.exercises.find((e) => e.type === 'quiz')!;
    const other = lesson.exercises.find((e) => canAnswer(e.type) && e.type !== 'quiz')!;
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
      await section.getByRole('button', { name: 'Reveal' }).click();
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
    // BUG-07 (docs/QA_REPORT.md#bug-07): every <ExerciseShell> autoplays its current item as soon as audio is
    // unlocked, so N ear exercises start N sequences at once; each cancels the previous and the learner hears the
    // exercise furthest down the page.
    test.fail();
    const lesson = lessons().find((l) => l.exercises.filter((e) => ['ear-octave', 'ear-note', 'ear-interval', 'ear-chord'].includes(e.type)).length >= 3)!;
    await goto(page, `/lesson/${lesson.id}`);
    await clearAudio(page);
    await unlockAudio(page);
    await page.waitForTimeout(1500);
    const starts = (await page.evaluate(() => (window as any).__MC_E2E__.audio as { kind: string }[])).filter((e) => e.kind === 'schedule');
    expect(starts.length, 'sequences started right after unlocking audio').toBeLessThanOrEqual(1);
  });

  test('quiz-input (note answers) can be filled by playing a key', async ({ page }) => {
    const use = find('quiz-input', (e) => ((e.spec.questions as { kind?: string }[]) ?? [])[0]?.kind === 'note');
    test.skip(!use, 'no quiz-input starting with a note question');
    const { lesson, exercise: ex } = use!;
    const section = await openExercise(page, lesson.id, ex);
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
      const { clickKey } = await import('./helpers/app');
      await clickKey(page, section, item.midis[0]);
      await expect(section.getByText(`Played: 1/${item.midis.length}`)).toBeVisible();
      await expect(section.locator(`[data-midi="${item.midis[0]}"]`)).toHaveClass(/mark_correct/);
      await section.getByRole('button', { name: 'reset' }).click();
      await expect(section.getByText(`Played: 0/${item.midis.length}`)).toBeVisible();
    }
  });
});
