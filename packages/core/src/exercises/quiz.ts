import type { ExerciseDefinition } from './types.js';

function correctOf(q: { answer?: number; answers?: number[] }): number[] {
  if (q.answers && q.answers.length) return [...q.answers];
  if (typeof q.answer === 'number') return [q.answer];
  return [];
}

export const quiz: ExerciseDefinition<'quiz'> = {
  type: 'quiz',
  implemented: true,
  naturalCount(block) {
    return block.spec.questions.length;
  },
  generate(block, _rng, ctx) {
    const qs = block.spec.questions;
    if (qs.length === 0) throw new Error('quiz: no questions');
    const questionIndex = ctx.index % qs.length;
    const q = qs[questionIndex]!;
    const correct = correctOf(q);
    return {
      type: 'quiz',
      prompt: q.q,
      question: q.q,
      questionIndex,
      choices: q.choices.map((c, i) => ({ value: String(i), label: c })),
      correct,
      multi: (q.answers?.length ?? 0) > 1,
      ...(q.explain ? { explain: q.explain } : {}),
      solution: correct.map((i) => q.choices[i]).join(', '),
    };
  },
  evaluate(item, answer) {
    const chosen = (Array.isArray(answer) ? answer : [answer]).map(Number).filter((n) => Number.isInteger(n));
    const set = new Set(item.correct);
    const right = chosen.filter((c) => set.has(c)).length;
    const wrong = chosen.filter((c) => !set.has(c)).length;
    const correct = right === set.size && wrong === 0;
    const score = correct ? 1 : Math.max(0, (right - wrong) / Math.max(1, set.size));
    const explain = item.explain ? ` ${item.explain}` : '';
    return {
      correct, score,
      feedback: correct ? `Correct!${explain}` : `Not quite — answer: ${item.solution}.${explain}`,
      expected: item.solution,
    };
  },
};
