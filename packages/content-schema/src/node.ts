/** Node-only content loading and validation (fs). */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import type { GlossaryTerm } from '@music/core';
import { generateSet, isExerciseType, isImplemented } from '@music/core';
import { glossaryIndex, lookupTerm, mergeGlossaries, parseGlossary } from './glossary.js';
import { parseLesson, type ParsedLesson } from './parse.js';
import { LESSON_ID_RE } from './primitives.js';
import { curriculumSchema, formatIssues, type CurriculumJson } from './schemas.js';

export type Severity = 'error' | 'warning';

export interface Problem {
  severity: Severity;
  file: string;
  message: string;
}

export interface LoadedContent {
  dir: string;
  curriculum: CurriculumJson | null;
  lessons: Map<string, ParsedLesson & { dir: string; file: string }>;
  glossary: GlossaryTerm[];
  problems: Problem[];
  /** lesson ids in curriculum order */
  order: string[];
}

const EAR = (t: string) => t.startsWith('ear-');
const KEYBOARD_TYPES = new Set(['play-notes', 'play-scale', 'play-chord', 'play-melody', 'rhythm-tap', 'build-chord', 'build-scale',
  'build-interval', 'read-note', 'read-rhythm', 'ear-melody', 'ear-bass', 'ear-chord-root', 'daw-task']);

function readJson(file: string): unknown {
  return JSON.parse(readFileSync(file, 'utf8'));
}

/** Load glossary.md plus glossary/*.md fragments. */
export function loadGlossary(dir: string, problems: Problem[] = []): GlossaryTerm[] {
  const parts: GlossaryTerm[][] = [];
  const main = join(dir, 'glossary.md');
  if (existsSync(main)) parts.push(parseGlossary(readFileSync(main, 'utf8')));
  const fragDir = join(dir, 'glossary');
  if (existsSync(fragDir) && statSync(fragDir).isDirectory()) {
    for (const f of readdirSync(fragDir).filter((f) => f.endsWith('.md')).sort()) {
      parts.push(parseGlossary(readFileSync(join(fragDir, f), 'utf8')));
    }
  }
  const merged = mergeGlossaries(parts);
  for (const d of merged.duplicates) problems.push({ severity: 'warning', file: 'glossary', message: `duplicate glossary term "${d}" (first definition kept)` });
  return merged.terms;
}

export interface LoadOptions {
  /** Only these lesson folders (ids) */
  only?: string[];
}

/** Load and validate everything under a content dir. Never throws for content errors. */
export function loadContent(contentDir: string, opts: LoadOptions = {}): LoadedContent {
  const dir = resolve(contentDir);
  const problems: Problem[] = [];
  const rel = (p: string) => relative(process.cwd(), p) || p;
  const err = (file: string, message: string) => problems.push({ severity: 'error', file: rel(file), message });
  const warn = (file: string, message: string) => problems.push({ severity: 'warning', file: rel(file), message });

  // curriculum
  let curriculum: CurriculumJson | null = null;
  const curFile = join(dir, 'curriculum.json');
  const order: string[] = [];
  const position = new Map<string, { week: number; order: number }>();
  if (!existsSync(curFile)) err(curFile, 'missing curriculum.json');
  else {
    try {
      const r = curriculumSchema.safeParse(readJson(curFile));
      if (!r.success) for (const m of formatIssues(r.error)) err(curFile, m);
      else curriculum = r.data;
    } catch (e) {
      err(curFile, `invalid JSON: ${(e as Error).message}`);
    }
  }
  const phaseIds = new Set<string>();
  if (curriculum) {
    const weeks = new Set<number>();
    for (const p of curriculum.phases) {
      if (phaseIds.has(p.id)) err(curFile, `duplicate phase id ${p.id}`);
      phaseIds.add(p.id);
      if (p.weeks[0] > p.weeks[1]) err(curFile, `phase ${p.id}: weeks range reversed`);
    }
    for (const w of curriculum.weeks) {
      if (weeks.has(w.week)) err(curFile, `duplicate week ${w.week}`);
      weeks.add(w.week);
      if (!curriculum.phases.some((p) => w.week >= p.weeks[0] && w.week <= p.weeks[1])) err(curFile, `week ${w.week} is not in any phase`);
      w.lessons.forEach((id, i) => {
        if (position.has(id)) err(curFile, `lesson ${id} listed twice`);
        position.set(id, { week: w.week, order: i + 1 });
        order.push(id);
        const wk = Number(/^w(\d{2})/.exec(id)?.[1]);
        if (wk !== w.week) err(curFile, `lesson ${id} is listed under week ${w.week} but its id says week ${wk}`);
      });
    }
  }

  const glossary = loadGlossary(dir, problems);
  const gIndex = glossaryIndex(glossary);

  // lessons
  const lessons: LoadedContent['lessons'] = new Map();
  const lessonsDir = join(dir, 'lessons');
  const folders = existsSync(lessonsDir)
    ? readdirSync(lessonsDir).filter((f) => statSync(join(lessonsDir, f)).isDirectory() && !f.startsWith('.') && !f.startsWith('_')).sort()
    : [];
  for (const folder of folders) {
    if (opts.only && !opts.only.includes(folder)) continue;
    const ldir = join(lessonsDir, folder);
    const file = join(ldir, 'lesson.md');
    if (!LESSON_ID_RE.test(folder)) err(ldir, `folder name "${folder}" is not a lesson id (wNN-lM-slug)`);
    if (!existsSync(file)) {
      err(ldir, 'missing lesson.md');
      continue;
    }
    const lesson = parseLesson(readFileSync(file, 'utf8'), { id: folder });
    for (const p of lesson.problems) err(file, p);
    for (const w of lesson.warnings) warn(file, w);
    const fm = lesson.frontmatter;
    if (curriculum) {
      const pos = position.get(folder);
      if (!pos) err(file, `lesson "${folder}" is not listed in curriculum.json`);
      else {
        if (typeof fm.week === 'number' && fm.week !== pos.week) err(file, `front matter week ${fm.week} ≠ curriculum week ${pos.week}`);
        if (typeof fm.order === 'number' && fm.order !== pos.order) warn(file, `front matter order ${fm.order} ≠ position ${pos.order} in curriculum week ${pos.week}`);
        const phase = curriculum.phases.find((p) => pos.week >= p.weeks[0] && pos.week <= p.weeks[1]);
        if (phase && typeof fm.phase === 'string' && fm.phase !== phase.id) err(file, `front matter phase ${fm.phase} ≠ ${phase.id} (week ${pos.week})`);
      }
      if (typeof fm.phase === 'string' && !phaseIds.has(fm.phase)) err(file, `unknown phase "${fm.phase}"`);
      for (const pre of fm.prerequisites ?? []) if (!position.has(pre)) err(file, `prerequisite "${pre}" is not in curriculum.json`);
    }
    // links to other lessons: ../wNN-lM-slug/
    for (const m of lesson.body.matchAll(/\]\(\.\.\/(w\d{2}-l\d{1,2}-[a-z0-9-]+)\/?\)/g)) {
      if (curriculum && !position.has(m[1]!)) err(file, `link to unknown lesson "${m[1]}"`);
    }
    for (const t of lesson.refs.terms) if (!lookupTerm(gIndex, t.term)) warn(file, `line ${t.line}: [[${t.term}]] is not in the glossary`);
    // authoring rules
    const types = lesson.blocks.filter((b) => b.lang === 'exercise').map((b) => String((b.data as { type?: unknown } | null)?.type ?? ''));
    for (const t of types) if (t && !isExerciseType(t)) err(file, `unknown exercise type "${t}"`);
    if (types.length === 0) warn(file, 'no exercises');
    else {
      if (!types.some(EAR)) warn(file, 'no ear-* exercise (authoring rule 2)');
      if (!types.some((t) => KEYBOARD_TYPES.has(t))) warn(file, 'no keyboard exercise (authoring rule 2)');
    }
    // implemented exercise types must generate items without errors
    for (const ex of lesson.exercises) {
      if (!isImplemented(ex.type)) continue;
      try {
        for (const seed of [1, 2, 3]) generateSet(ex, seed);
      } catch (e) {
        err(file, `exercise "${ex.id}" (${ex.type}) cannot generate items: ${(e as Error).message}`);
      }
    }
    // assets referenced
    for (const m of lesson.body.matchAll(/\]\((?:\.\/)?(assets\/[^)\s]+)\)/g)) {
      if (!existsSync(join(ldir, m[1]!))) err(file, `missing asset ${m[1]}`);
    }
    lessons.set(folder, Object.assign(lesson, { dir: ldir, file }));
  }
  return { dir, curriculum, lessons, glossary, problems, order };
}

export function formatProblems(problems: Problem[], opts: { warnings?: boolean } = {}): string {
  return problems
    .filter((p) => opts.warnings !== false || p.severity === 'error')
    .map((p) => `${p.severity === 'error' ? 'ERROR' : 'warn '} ${p.file}: ${p.message}`)
    .join('\n');
}
