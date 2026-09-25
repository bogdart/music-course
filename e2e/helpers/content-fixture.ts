/**
 * A copy of content/ plus the e2e fixture lessons in e2e/fixture-content/ (listed in week 1 of the copied
 * curriculum.json). Specs opt in with `test.use({ isolated: true, contentFixture: true })`: their server gets
 * CONTENT_DIR pointing here. Used for features the real curriculum does not use yet (daw-task projectRef / timerMin).
 */
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { ROOT } from './server';

export const FIXTURE_LESSONS = readdirSync(join(ROOT, 'e2e/fixture-content'));

export function e2eContentDir(): string {
  const dir = join(process.env.E2E_TMP ?? tmpdir(), `content-fixture-${process.pid}`);
  if (existsSync(join(dir, '.ready'))) return dir;
  mkdirSync(dir, { recursive: true });
  cpSync(join(ROOT, 'content'), dir, { recursive: true });
  const cur = JSON.parse(readFileSync(join(dir, 'curriculum.json'), 'utf8')) as { weeks: { week: number; lessons: string[] }[] };
  for (const id of FIXTURE_LESSONS) {
    cpSync(join(ROOT, 'e2e/fixture-content', id), join(dir, 'lessons', id), { recursive: true });
    const week = Number(/^w(\d+)/.exec(id)![1]);
    const w = cur.weeks.find((x) => x.week === week)!;
    if (!w.lessons.includes(id)) w.lessons.push(id);
  }
  writeFileSync(join(dir, 'curriculum.json'), JSON.stringify(cur, null, 2));
  writeFileSync(join(dir, '.ready'), '1');
  return dir;
}
