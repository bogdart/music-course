/**
 * Aggregates the per-lesson exercise render stats written by lessons.spec.ts into
 * e2e/artifacts/render-stats.json and prints a per-type table (real component vs "coming soon").
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

export default function globalTeardown(): void {
  const root = join(fileURLToPath(new URL('.', import.meta.url)), 'artifacts');
  const dir = join(root, 'render-stats');
  if (!existsSync(dir)) return;
  const files = readdirSync(dir).filter((f) => f.endsWith('.json'));
  if (!files.length) return;
  const byType: Record<string, { real: number; 'coming-soon': number; error: number; missing: number; lessons: number }> = {};
  for (const f of files) {
    const { exercises } = JSON.parse(readFileSync(join(dir, f), 'utf8')) as { exercises: { type: string; status: string }[] };
    const seen = new Set<string>();
    for (const e of exercises) {
      const t = (byType[e.type] ??= { real: 0, 'coming-soon': 0, error: 0, missing: 0, lessons: 0 });
      t[e.status as 'real']++;
      if (!seen.has(e.type)) t.lessons++;
      seen.add(e.type);
    }
  }
  const rows = Object.entries(byType).sort((a, b) => b[1].real + b[1]['coming-soon'] - (a[1].real + a[1]['coming-soon']));
  const total = rows.reduce((a, [, r]) => ({ real: a.real + r.real, soon: a.soon + r['coming-soon'], err: a.err + r.error + r.missing }), { real: 0, soon: 0, err: 0 });
  writeFileSync(join(root, 'render-stats.json'), JSON.stringify({ lessons: files.length, total, byType: Object.fromEntries(rows) }, null, 2));
  const lines = [
    `\nExercise render stats over ${files.length} lessons: ${total.real} real, ${total.soon} coming soon, ${total.err} broken`,
    'type                 real  soon  broken  lessons',
    ...rows.map(([t, r]) => `${t.padEnd(20)} ${String(r.real).padStart(4)}  ${String(r['coming-soon']).padStart(4)}  ${String(r.error + r.missing).padStart(6)}  ${String(r.lessons).padStart(7)}`),
  ];
  console.log(lines.join('\n'));
}
