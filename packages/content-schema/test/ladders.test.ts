import { describe, expect, it } from 'vitest';
import { LADDERS, LADDER_SKILLS } from '@music/core';
import { exerciseBlockSchema } from '../src/schemas.js';

describe('ladder rungs', () => {
  it('every rung block is a valid exercise block', () => {
    for (const s of LADDER_SKILLS) {
      for (const r of LADDERS[s].rungs) {
        const res = exerciseBlockSchema.safeParse(r.block);
        expect(res.success, `${r.id}: ${res.success ? '' : JSON.stringify(res.error.issues)}`).toBe(true);
      }
    }
  });
});
