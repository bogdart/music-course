/**
 * SRS scheduler — SM-2 variant counted in *sessions* rather than days (docs/ARCHITECTURE.md).
 * With the default ease 2.5 successful reviews give intervals 1, 2, 4, 8, 16… sessions.
 * Ease adapts per SM-2 (min 1.3); a lapse (grade < 3) resets the interval to 1 session.
 */

export interface SrsCardState {
  /** Ease factor (SM-2 EF), default 2.5 */
  ease: number;
  /** Current interval in sessions */
  interval: number;
  /** Consecutive successful reviews */
  reps: number;
  lapses: number;
  /** Session number at/after which the card is due */
  dueSession: number;
  lastSession: number | null;
}

export const DEFAULT_EASE = 2.5;
export const MIN_EASE = 1.3;

export function newCardState(currentSession: number, dueIn = 1): SrsCardState {
  return { ease: DEFAULT_EASE, interval: 0, reps: 0, lapses: 0, dueSession: currentSession + dueIn, lastSession: null };
}

/** Grade 0..5 (SM-2): 5 perfect, 4 correct with hesitation, 3 correct with difficulty, <3 fail. */
export function review(card: SrsCardState, grade: number, currentSession: number): SrsCardState {
  const g = Math.max(0, Math.min(5, Math.round(grade)));
  let ease = card.ease + (0.1 - (5 - g) * (0.08 + (5 - g) * 0.02));
  ease = Math.max(MIN_EASE, Math.round(ease * 100) / 100);
  if (g < 3) {
    return { ease, interval: 1, reps: 0, lapses: card.lapses + 1, dueSession: currentSession + 1, lastSession: currentSession };
  }
  const reps = card.reps + 1;
  let interval: number;
  if (reps === 1) interval = 1;
  else if (reps === 2) interval = 2;
  else interval = Math.max(card.interval + 1, Math.round(card.interval * ease * 0.8));
  return { ease, interval, reps, lapses: card.lapses, dueSession: currentSession + interval, lastSession: currentSession };
}

export function isDue(card: Pick<SrsCardState, 'dueSession'>, currentSession: number): boolean {
  return card.dueSession <= currentSession;
}

/** Due cards, most overdue first, then lowest ease. */
export function dueCards<C extends Pick<SrsCardState, 'dueSession' | 'ease'>>(cards: C[], currentSession: number, limit = 20): C[] {
  return cards
    .filter((c) => isDue(c, currentSession))
    .sort((a, b) => a.dueSession - b.dueSession || a.ease - b.ease)
    .slice(0, limit);
}

/** Map a set/item result to an SM-2 grade. */
export function gradeFromScore(score: number, opts: { slow?: boolean } = {}): number {
  if (score >= 0.95) return opts.slow ? 4 : 5;
  if (score >= 0.8) return 4;
  if (score >= 0.6) return 3;
  if (score >= 0.4) return 2;
  if (score > 0) return 1;
  return 0;
}

/** Session numbering: a new session starts after `gapMs` of inactivity (default 2h). */
export function nextSessionNumber(current: number, lastActivity: number | null, now: number, gapMs = 2 * 3600_000): number {
  if (lastActivity === null) return Math.max(1, current);
  return now - lastActivity >= gapMs ? current + 1 : current;
}
