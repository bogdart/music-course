import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { loadContent } from '../src/node.js';

function fixture(): string {
  const dir = mkdtempSync(join(tmpdir(), 'content-'));
  writeFileSync(join(dir, 'curriculum.json'), JSON.stringify({
    phases: [{ id: 'p1', title: 'Foundations', weeks: [1, 8], goal: 'g' }],
    weeks: [{ week: 1, title: 'Week 1', lessons: ['w01-l1-welcome', 'w01-l2-octaves', 'w01-l3-missing'] }],
  }));
  writeFileSync(join(dir, 'glossary.md'), '# Glossary\n\n## Octave\nSame note, double frequency.\n');
  mkdirSync(join(dir, 'glossary'));
  writeFileSync(join(dir, 'glossary', 'extra.md'), '## Pitch\nHow high or low.\n');
  const lesson = (id: string, week: number, order: number, body: string) => {
    mkdirSync(join(dir, 'lessons', id), { recursive: true });
    writeFileSync(join(dir, 'lessons', id, 'lesson.md'), `---\nid: ${id}\ntitle: T\nweek: ${week}\norder: ${order}\nphase: p1\nduration_min: 30\ngoals: [g]\n---\n${body}`);
  };
  const ex = (id: string, type: string, spec: object) => '```exercise\n' + JSON.stringify({ id, type, spec }) + '\n```\n';
  lesson('w01-l1-welcome', 1, 1, `See [[octave]] and [[pitch]].\n\n${ex('e1', 'ear-octave', { notes: ['C'], octaves: [3, 4], mode: 'same-or-different' })}${ex('e2', 'play-notes', { notes: ['C4'] })}`);
  lesson('w01-l2-octaves', 2, 2, `[[nope]] [Next](../w09-l1-unknown/)\n\n${ex('e1', 'ear-interval', { intervals: ['P8'], range: ['C4', 'D4'] })}`);
  return dir;
}

describe('loadContent', () => {
  it('loads curriculum, glossary fragments and lessons, and reports cross-file problems', () => {
    const c = loadContent(fixture());
    expect(c.order).toEqual(['w01-l1-welcome', 'w01-l2-octaves', 'w01-l3-missing']);
    expect(c.glossary.map((t) => t.term)).toEqual(['Octave', 'Pitch']);
    expect([...c.lessons.keys()]).toEqual(['w01-l1-welcome', 'w01-l2-octaves']);
    const msgs = c.problems.map((p) => `${p.severity}:${p.message}`);
    expect(msgs.filter((m) => m.includes('w01-l1'))).toEqual([]);
    expect(c.problems.filter((p) => p.file.includes('w01-l1-welcome'))).toEqual([]);
    expect(msgs).toContain('error:front matter week 2 ≠ curriculum week 1');
    expect(msgs).toContain('error:link to unknown lesson "w09-l1-unknown"');
    expect(msgs.some((m) => m.startsWith('warning:') && m.includes('[[nope]]'))).toBe(true);
    expect(msgs.some((m) => m.startsWith('warning:') && m.includes('no keyboard exercise'))).toBe(true);
  });
});
