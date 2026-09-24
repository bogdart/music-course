import { cleanNoteName, isNoteName, samePitchClass, sameNote } from '../theory/notes.js';
import type { ExerciseDefinition } from './types.js';
import { normaliseText } from './util.js';

/** Turn "C sharp", "c#", "D flat", "Bb" into a clean note name if possible. */
export function normaliseNoteAnswer(s: string): string {
  const t = s.trim().replace(/♯/g, '#').replace(/♭/g, 'b')
    .replace(/\s*(sharp|diesis)\s*/i, '#').replace(/\s*flat\s*/i, 'b').replace(/\s+/g, '');
  return cleanNoteName(t);
}

export function noteAnswersMatch(given: string, accepted: string): boolean {
  const g = normaliseNoteAnswer(given);
  const a = normaliseNoteAnswer(accepted);
  if (!isNoteName(g) || !isNoteName(a)) return false;
  if (isNoteName(a, true)) return isNoteName(g, true) && sameNote(g, a);
  return samePitchClass(g, a);
}

export const quizInput: ExerciseDefinition<'quiz-input'> = {
  type: 'quiz-input',
  implemented: true,
  naturalCount(block) {
    return block.spec.questions.length;
  },
  generate(block, _rng, ctx) {
    const qs = block.spec.questions;
    if (qs.length === 0) throw new Error('quiz-input: no questions');
    const questionIndex = ctx.index % qs.length;
    const q = qs[questionIndex]!;
    const accepted = (Array.isArray(q.answer) ? q.answer : [q.answer]).map(String);
    return {
      type: 'quiz-input',
      prompt: q.q,
      question: q.q,
      questionIndex,
      accepted,
      kind: q.kind ?? 'text',
      ...(q.explain ? { explain: q.explain } : {}),
      solution: accepted[0] ?? '',
    };
  },
  evaluate(item, answer) {
    const given = String(answer ?? '');
    let correct = false;
    if (item.kind === 'note') correct = item.accepted.some((a) => noteAnswersMatch(given, a));
    else if (item.kind === 'number') {
      const n = Number(given.replace(',', '.').replace(/\s+/g, ''));
      correct = given.trim() !== '' && Number.isFinite(n) && item.accepted.some((a) => Math.abs(Number(a) - n) < 1e-9);
    } else {
      const g = normaliseText(given);
      correct = g !== '' && item.accepted.some((a) => normaliseText(a) === g);
    }
    const explain = item.explain ? ` ${item.explain}` : '';
    return {
      correct, score: correct ? 1 : 0,
      feedback: correct ? `Correct!${explain}` : `Not quite — answer: ${item.solution}.${explain}`,
      expected: item.solution,
    };
  },
};
