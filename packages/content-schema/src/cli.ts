#!/usr/bin/env node
/**
 * validate-content [contentDir] [--only <lesson-id>...] [--quiet] [--strict]
 * Walks content/, validates curriculum.json, glossary, every lesson.md and its fenced blocks.
 * Exit 1 on errors (or on warnings with --strict).
 */
import { resolve } from 'node:path';
import { formatProblems, loadContent } from './node.js';

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith('--')));
const positional = args.filter((a) => !a.startsWith('--'));
let dir = 'content';
const only: string[] = [];
for (const p of positional) {
  const m = /(?:^|\/)(w\d{2}-l\d{1,2}-[a-z0-9-]+)\/?(?:lesson\.md)?$/.exec(p);
  if (m) only.push(m[1]!);
  else dir = p;
}
if (flags.has('--help')) {
  console.log('Usage: validate-content [contentDir] [lesson-id|lesson-path ...] [--quiet] [--strict]');
  process.exit(0);
}
const content = loadContent(resolve(dir), only.length ? { only } : {});
const errors = content.problems.filter((p) => p.severity === 'error');
const warnings = content.problems.filter((p) => p.severity === 'warning');
const out = formatProblems(content.problems, { warnings: !flags.has('--quiet') });
if (out) console.log(out);
const listed = content.order.length;
console.log(
  `\n${content.lessons.size} lesson(s) checked (${listed} listed in curriculum, ${listed - [...content.lessons.keys()].filter((id) => content.order.includes(id)).length} not written yet), ` +
    `${content.glossary.length} glossary terms — ${errors.length} error(s), ${warnings.length} warning(s)`,
);
process.exit(errors.length > 0 || (flags.has('--strict') && warnings.length > 0) ? 1 : 0);
