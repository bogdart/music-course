import { describe, expect, it } from 'vitest';
import { dueCards, gradeFromScore, isDue, newCardState, nextSessionNumber, review, MIN_EASE } from '../src/index.js';

describe('SRS (sessions)', () => {
  it('new cards are due next session', () => {
    const c = newCardState(5);
    expect(c.dueSession).toBe(6);
    expect(isDue(c, 5)).toBe(false);
    expect(isDue(c, 6)).toBe(true);
  });
  it('intervals grow 1, 2, 4, 8 with steady good grades', () => {
    let c = newCardState(0);
    const intervals: number[] = [];
    let session = 1;
    for (let i = 0; i < 5; i++) {
      c = review(c, 4, session);
      intervals.push(c.interval);
      session = c.dueSession;
    }
    expect(intervals).toEqual([1, 2, 4, 8, 16]);
  });
  it('perfect grades grow faster, lapses reset', () => {
    let c = newCardState(0);
    for (let s = 1; s <= 4; s++) c = review(c, 5, s);
    expect(c.ease).toBeGreaterThan(2.5);
    const before = c.interval;
    expect(before).toBeGreaterThan(4);
    c = review(c, 1, 10);
    expect(c).toMatchObject({ interval: 1, reps: 0, lapses: 1, dueSession: 11 });
    expect(c.ease).toBeLessThan(2.9);
  });
  it('ease never drops below the minimum', () => {
    let c = newCardState(0);
    for (let s = 1; s < 30; s++) c = review(c, 0, s);
    expect(c.ease).toBe(MIN_EASE);
  });
  it('sorts due cards and grades scores', () => {
    const cards = [
      { id: 1, dueSession: 3, ease: 2.5 },
      { id: 2, dueSession: 1, ease: 2.5 },
      { id: 3, dueSession: 3, ease: 1.5 },
      { id: 4, dueSession: 9, ease: 2.5 },
    ];
    expect(dueCards(cards, 5).map((c) => c.id)).toEqual([2, 3, 1]);
    expect(dueCards(cards, 5, 1).map((c) => c.id)).toEqual([2]);
    expect(gradeFromScore(1)).toBe(5);
    expect(gradeFromScore(0.85)).toBe(4);
    expect(gradeFromScore(0.5)).toBe(2);
    expect(gradeFromScore(0)).toBe(0);
  });
  it('session numbering by inactivity gap', () => {
    const h = 3600_000;
    expect(nextSessionNumber(0, null, 0)).toBe(1);
    expect(nextSessionNumber(3, 0, 1 * h)).toBe(3);
    expect(nextSessionNumber(3, 0, 3 * h)).toBe(4);
  });
});
