import { describe, expect, it } from 'vitest';
import { LADDER_SKILLS, skillState, type LadderStateDTO, type RungResult } from '@music/core';
import { planSession, warmupEntry } from './ladderPlan';

const perfect: RungResult[] = Array.from({ length: 20 }, () => ({ correct: true, session: 1 }));
const state = (unlocked: Record<string, number>, results: Record<string, RungResult[]> = {}): LadderStateDTO => ({
  session: 1, skills: LADDER_SKILLS.map((k) => skillState(k, unlocked[k] ?? 0, results)),
});

describe('practice plan', () => {
  it('learns the skills furthest behind first, then reviews mastered rungs', () => {
    const plan = planSession(state({ octave: 5, degrees: 2, intervals: 1 }, { 'octave-1': perfect, 'degrees-1': perfect }), { random: () => 0 });
    expect(plan.filter((p) => p.kind === 'learn').map((p) => p.rung.id)).toEqual(['octave-2', 'intervals-1', 'degrees-2']);
    expect(plan.filter((p) => p.kind === 'review').map((p) => p.rung.id).sort()).toEqual(['degrees-1', 'octave-1']);
    expect(plan.every((p) => p.count === (p.kind === 'learn' ? 10 : 5))).toBe(true);
  });
  it('is empty with nothing unlocked; the warm-up takes the top entry', () => {
    expect(planSession(state({}))).toEqual([]);
    expect(warmupEntry(state({}))).toBeNull();
    expect(warmupEntry(state({ octave: 4, melody: 1 }))).toMatchObject({ count: 5, rung: { id: 'octave-1' } });
  });
});

describe('warm-up skips what the lesson drills', () => {
  it('leaves skills of the lesson\'s own ladder blocks to the lesson', () => {
    expect(warmupEntry(state({ octave: 4, pitch: 2 }), ['octave'])).toMatchObject({ rung: { id: 'pitch-1' } });
  });
});
