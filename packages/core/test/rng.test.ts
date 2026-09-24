import { describe, expect, it } from 'vitest';
import { createRng, hashString, stableStringify } from '../src/index.js';

describe('rng', () => {
  it('is deterministic and in range', () => {
    const a = createRng(99);
    const b = createRng(99);
    const xs = Array.from({ length: 100 }, () => a.next());
    expect(xs).toEqual(Array.from({ length: 100 }, () => b.next()));
    expect(xs.every((x) => x >= 0 && x < 1)).toBe(true);
    const r = createRng(1);
    for (let i = 0; i < 200; i++) {
      const n = r.int(3, 5);
      expect(n).toBeGreaterThanOrEqual(3);
      expect(n).toBeLessThanOrEqual(5);
    }
    expect(createRng(5).shuffle([1, 2, 3, 4, 5]).sort()).toEqual([1, 2, 3, 4, 5]);
  });
  it('hashes stably', () => {
    expect(stableStringify({ b: 1, a: [1, { d: 2, c: 3 }] })).toBe('{"a":[1,{"c":3,"d":2}],"b":1}');
    expect(hashString('abc')).toBe(hashString('abc'));
    expect(hashString('abc')).not.toBe(hashString('abd'));
  });
});
