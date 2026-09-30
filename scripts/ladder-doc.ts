/**
 * Regenerates the generated part of docs/EAR_LADDERS.md (everything from "## Unlock schedule") from the real sources:
 * the ```ladder blocks in content/ (in curriculum order) and the rung definitions in packages/core/src/ladders.ts.
 * Run: npm run docs:ladders
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { LADDERS, LADDER_SKILLS } from '../packages/core/src/index.ts';
import { loadContent } from '../packages/content-schema/src/node.ts';

const root = join(import.meta.dirname, '..');
const doc = join(root, 'docs/EAR_LADDERS.md');
const content = loadContent(join(root, 'content'));
const top = new Map<string, number>();
const rows = new Map<number, string[][]>();
for (const id of content.order) {
  const l = content.lessons.get(id);
  if (!l) continue;
  const week = Number(/^w(\d+)/.exec(id)![1]);
  const slot = Number(/-l(\d+)/.exec(id)![1]);
  const cells: string[] = [];
  for (const b of l.blocks) {
    if (b.lang !== 'ladder' || !b.valid) continue;
    const d = b.data as { skill: string; unlocks: number };
    const prev = top.get(d.skill) ?? 0;
    if (d.unlocks > prev) {
      cells.push(`**${d.skill} ${d.unlocks}**`);
      top.set(d.skill, d.unlocks);
    } else cells.push(`${d.skill} ${d.unlocks}`);
  }
  const w = rows.get(week) ?? [];
  w[slot - 1] = cells;
  rows.set(week, w);
}
const maxSlots = Math.max(...[...rows.values()].map((w) => w.length));
let out = '## Unlock schedule (generated from the lessons)\n\n';
out += 'Per lesson: the ```ladder blocks in order; **bold** = opens new rungs (the value is the highest rung open\n';
out += 'afterwards), plain = review of rungs already open. Regenerate with `npm run docs:ladders`.\n\n';
out += `| Week | ${Array.from({ length: maxSlots }, (_, i) => `l${i + 1}`).join(' | ')} |\n|---|${'---|'.repeat(maxSlots)}\n`;
for (const [week, w] of [...rows.entries()].sort((a, b) => a[0] - b[0])) {
  out += `| ${week} | ${Array.from({ length: maxSlots }, (_, i) => (w[i] === undefined ? '' : w[i]!.length ? w[i]!.join(', ') : '—')).join(' | ')} |\n`;
}
out += '\n## Rungs\n';
for (const s of LADDER_SKILLS) {
  const L = LADDERS[s];
  out += `\n### \`${s}\` — ${L.title} (${L.rungs.length} rungs)\n\n${L.purpose}\n\n| # | Rung | What changes |\n|---|---|---|\n`;
  for (const r of L.rungs) out += `| ${r.n} | ${r.title} | ${r.step} |\n`;
}
const cur = readFileSync(doc, 'utf8');
const i = cur.indexOf('## Unlock schedule');
writeFileSync(doc, (i >= 0 ? cur.slice(0, i) : cur + '\n') + out);
console.log(`docs/EAR_LADDERS.md: schedule for ${rows.size} weeks, ${LADDER_SKILLS.length} ladders`);
