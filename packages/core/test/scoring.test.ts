import { describe, expect, it } from 'vitest';
import { scoringOf, summarise } from '../src/index.js';

describe('scoringOf', () => {
  it('scores performance exercises by best take and recognition exercises by first answer', () => {
    for (const t of ['play-melody', 'rhythm-tap', 'read-rhythm', 'play-scale', 'play-chord', 'daw-task']) expect(scoringOf(t)).toBe('best');
    for (const t of ['ear-note', 'ear-interval', 'quiz', 'quiz-input', 'build-chord', 'read-note', 'play-notes']) expect(scoringOf(t)).toBe('first');
  });
  it('a single perfect best take passes', () => {
    expect(summarise([{ correct: true, score: 1 }], 0.7)).toMatchObject({ score: 1, passed: true, correct: 1, total: 1 });
  });
});
