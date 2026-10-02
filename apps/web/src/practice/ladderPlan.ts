import { getRung, LADDERS, type LadderStateDTO, type Rung } from '@music/core';

export interface PlanEntry {
  rung: Rung;
  /** Items in this set */
  count: number;
  /** Working on the current rung, or reviewing a mastered one */
  kind: 'learn' | 'review';
}

/**
 * A practice session: the current rung of up to `learn` skills — the ones furthest behind the lessons first — with 10
 * items each, then short reviews (5 items) of `review` mastered rungs, preferring the most recently reached ones.
 * `random` picks among review candidates (injectable for tests).
 */
export function planSession(state: LadderStateDTO, opts: { learn?: number; review?: number; random?: () => number } = {}): PlanEntry[] {
  const learnN = opts.learn ?? 3;
  const reviewN = opts.review ?? 2;
  const rnd = opts.random ?? Math.random;
  const learning = state.skills
    .filter((s) => s.current !== null && !s.complete)
    .sort((a, b) => b.behind - a.behind || a.unlocked - b.unlocked)
    .slice(0, learnN)
    .map((s) => ({ rung: getRung(`${s.skill}-${s.current}`)!, count: 10, kind: 'learn' as const }));
  const mastered = state.skills.flatMap((s) =>
    s.rungs
      .filter((r) => r.mastered && r.n <= s.unlocked)
      // the top mastered rungs of each skill are worth most
      .map((r) => ({ id: r.id, weight: r.n / Math.max(1, s.unlocked) + rnd() * 0.5 })),
  );
  const review = mastered
    .sort((a, b) => b.weight - a.weight)
    .filter((r) => !learning.some((l) => l.rung.id === r.id))
    .slice(0, reviewN)
    .map((r) => ({ rung: getRung(r.id)!, count: 5, kind: 'review' as const }));
  return [...learning, ...review];
}

/**
 * The single most useful set for a lesson warm-up (the skill furthest behind), or null. Skills in `exclude` (the ones
 * the lesson itself drills further down the page) are left to the lesson.
 */
export function warmupEntry(state: LadderStateDTO, exclude: readonly string[] = []): PlanEntry | null {
  const others = { ...state, skills: state.skills.filter((s) => !exclude.includes(s.skill)) };
  const first = planSession(others, { learn: 1, review: 1 })[0];
  return first ? { ...first, count: 5 } : null;
}

export const skillTitle = (skill: string) => (LADDERS as Record<string, { title: string }>)[skill]?.title ?? skill;
