import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { evaluate, generateSet, isImplemented } from '@music/core';
import { loadContent } from '../src/node.js';
import { solve } from '../../core/test/solve.js';

const CONTENT = fileURLToPath(new URL('../../../content', import.meta.url));

/**
 * Engine consistency over the real curriculum: every generated item of every exercise in content/ (daw-task excluded:
 * its answer is a project) accepts its ideal answer with full score.
 */
describe('content exercises: generated items accept their ideal answers', () => {
  it('all lessons', { timeout: 60_000 }, () => {
    const c = loadContent(CONTENT);
    const failures: string[] = [];
    let n = 0;
    for (const [id, l] of c.lessons) {
      for (const e of l.exercises) {
        if (!isImplemented(e.type) || e.type === 'daw-task') continue;
        for (const seed of [11, 12]) {
          for (const item of generateSet(e, seed).items) {
            n++;
            const r = evaluate(item, solve(item));
            if (!r.correct || r.score !== 1) failures.push(`${id}/${e.id} (${e.type}, seed ${seed}): ${r.feedback}`);
          }
        }
      }
    }
    expect(n).toBeGreaterThan(5000);
    expect(failures.slice(0, 10)).toEqual([]);
  });
});
