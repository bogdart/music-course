/**
 * Reads content/ straight from disk (independently of the server) so specs can be data-driven over every
 * lesson: expected block counts, exercise types, inline refs.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from './server';

export const BLOCK_LANGS = ['example', 'exercise', 'keyboard', 'staff', 'chords'] as const;
export type BlockLang = (typeof BLOCK_LANGS)[number];

export interface SourceExercise {
  id: string;
  type: string;
  title?: string;
  count?: number;
  srs?: boolean;
  passScore?: number;
  hints?: string[];
  spec: Record<string, unknown>;
}

export interface SourceLesson {
  id: string;
  week: number;
  title: string;
  goals: string[];
  blocks: Record<BlockLang, number>;
  exercises: SourceExercise[];
  /** [[term]] / [[term|label]] occurrences in prose (outside code) */
  terms: string[];
  notes: string[];
  chords: string[];
}

export interface Curriculum {
  phases: { id: string; title: string; weeks: [number, number] }[];
  weeks: { week: number; title: string; lessons: string[] }[];
}

const CONTENT = join(ROOT, 'content');

export function curriculum(): Curriculum {
  return JSON.parse(readFileSync(join(CONTENT, 'curriculum.json'), 'utf8')) as Curriculum;
}

let cache: SourceLesson[] | null = null;

/** Every lesson in curriculum order that exists on disk. */
export function lessons(): SourceLesson[] {
  if (cache) return cache;
  const out: SourceLesson[] = [];
  for (const w of curriculum().weeks) {
    for (const id of w.lessons) {
      const file = join(CONTENT, 'lessons', id, 'lesson.md');
      if (!existsSync(file)) continue;
      out.push(parse(id, w.week, readFileSync(file, 'utf8')));
    }
  }
  cache = out;
  return out;
}

export function lessonDirs(): string[] {
  return readdirSync(join(CONTENT, 'lessons')).filter((d) => existsSync(join(CONTENT, 'lessons', d, 'lesson.md')));
}

export function parse(id: string, week: number, src: string): SourceLesson {
  const fm = /^---\n([\s\S]*?)\n---\n/.exec(src);
  const front = fm?.[1] ?? '';
  const body = fm ? src.slice(fm[0].length) : src;
  const title = /^title:\s*(.+)$/m.exec(front)?.[1]?.trim().replace(/^["']|["']$/g, '') ?? id;
  const goalsBlock = /^goals:\s*\n((?:\s+-.*\n?)+)/m.exec(front)?.[1] ?? '';
  const goals = goalsBlock.split('\n').map((l) => l.replace(/^\s*-\s*/, '').trim()).filter(Boolean);
  const blocks = Object.fromEntries(BLOCK_LANGS.map((l) => [l, 0])) as Record<BlockLang, number>;
  const exercises: SourceExercise[] = [];
  // strip fenced code (any lang) for inline-ref scanning, counting our block langs on the way
  let prose = '';
  const lines = body.split('\n');
  let inFence: { marker: string; lang: string; buf: string[] } | null = null;
  for (const line of lines) {
    const m = /^(\s*)(`{3,}|~{3,})\s*([A-Za-z-]*)/.exec(line);
    if (!inFence && m) {
      inFence = { marker: m[2]!, lang: m[3] ?? '', buf: [] };
      continue;
    }
    if (inFence && new RegExp(`^\\s*${inFence.marker[0]}{${inFence.marker.length},}\\s*$`).test(line)) {
      if ((BLOCK_LANGS as readonly string[]).includes(inFence.lang)) {
        blocks[inFence.lang as BlockLang]++;
        if (inFence.lang === 'exercise') {
          try {
            exercises.push(JSON.parse(inFence.buf.join('\n')) as SourceExercise);
          } catch {
            exercises.push({ id: '?', type: '?invalid-json', spec: {} });
          }
        }
      }
      inFence = null;
      continue;
    }
    if (inFence) inFence.buf.push(line);
    else prose += line + '\n';
  }
  prose = prose.replace(/`[^`\n]*`/g, '');
  const terms = [...prose.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)].map((m) => m[1]!.trim());
  const notes = [...prose.matchAll(/\{\{\s*note\s*:\s*([^}]+?)\s*\}\}/g)].map((m) => m[1]!);
  const chords = [...prose.matchAll(/\{\{\s*chord\s*:\s*([^}]+?)\s*\}\}/g)].map((m) => m[1]!);
  return { id, week, title, goals, blocks, exercises, terms, notes, chords };
}

/** All exercise types used in content, with the first lesson/exercise using each. */
export function firstUseOfEachType(): Map<string, { lesson: SourceLesson; exercise: SourceExercise }> {
  const m = new Map<string, { lesson: SourceLesson; exercise: SourceExercise }>();
  for (const l of lessons()) for (const e of l.exercises) if (!m.has(e.type)) m.set(e.type, { lesson: l, exercise: e });
  return m;
}

/** Every type in the content schema catalogue (docs/CONTENT_SCHEMA.md). */
export const CATALOGUE_TYPES = [
  'ear-note', 'ear-octave', 'ear-interval', 'ear-chord', 'ear-chord-root', 'ear-scale', 'ear-progression',
  'ear-melody', 'ear-rhythm', 'ear-bass', 'play-notes', 'play-scale', 'play-chord', 'play-melody', 'rhythm-tap',
  'build-chord', 'build-scale', 'build-interval', 'read-note', 'read-rhythm', 'quiz', 'quiz-input',
  'key-signature', 'roman-analysis', 'daw-task', 'listen', 'reflect', 'ear-tempo', 'ear-meter',
] as const;

/** The /dev/demo fixture lesson (exercises every type client-side, nothing recorded). */
export function demoLesson(): SourceLesson {
  return parse('w01-l9-dev-demo', 1, readFileSync(join(ROOT, 'apps/web/src/lesson/__fixtures__/demo-lesson.md'), 'utf8'));
}

const PC: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
/** Pitch class of a note name ("C#", "Bb4", "E#"), or NaN. */
export function pcOf(name: string): number {
  const m = /^([A-Ga-g])(#{1,2}|b{1,2}|♯|♭)?(-?\d+)?$/.exec(name.trim());
  if (!m) return NaN;
  let pc = PC[m[1]!.toUpperCase()]!;
  const acc = m[2] ?? '';
  for (const ch of acc) pc += ch === '#' || ch === '♯' ? 1 : -1;
  return ((pc % 12) + 12) % 12;
}
export function noteToMidi(name: string): number {
  const m = /^([A-Ga-g])(#{1,2}|b{1,2})?(-?\d+)$/.exec(name.trim());
  if (!m) return NaN;
  return (Number(m[3]) + 1) * 12 + PC[m[1]!.toUpperCase()]! + [...(m[2] ?? '')].reduce((a, c) => a + (c === '#' ? 1 : -1), 0);
}
