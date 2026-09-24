/**
 * Shared HTTP API shapes between apps/server and apps/web (docs/ARCHITECTURE.md "Server API").
 * Pure types — no runtime code.
 */
import type { ExerciseBlock } from './exercises/types.js';
import type { InstrumentId, Project } from './model.js';

// ---------- content ----------

export interface LessonFrontmatter {
  id: string;
  title: string;
  week: number;
  order: number;
  phase: string;
  duration_min: number;
  goals: string[];
  prerequisites?: string[];
  tags?: string[];
  songs?: { title: string; composer?: string; artist?: string; public_domain?: boolean; [k: string]: unknown }[];
  [k: string]: unknown;
}

export type BlockLang = 'example' | 'exercise' | 'keyboard' | 'staff' | 'chords';

export interface LessonBlock {
  /** 0-based index among interactive fenced blocks in document order */
  index: number;
  lang: BlockLang;
  /** Parsed JSON (validated if `valid`) */
  data: unknown;
  /** Raw block text */
  raw: string;
  /** 1-based line of the opening fence in lesson.md */
  line: number;
  valid: boolean;
  error?: string;
}

export interface LessonSection {
  title: string;
  depth: number;
  line: number;
  /** Indices (LessonBlock.index) of blocks inside this section */
  blocks: number[];
}

export interface ParsedLessonDTO {
  id: string;
  frontmatter: LessonFrontmatter;
  /** Markdown body without front matter — render with remark/rehype; fenced blocks keep their lang tag */
  body: string;
  blocks: LessonBlock[];
  /** Valid exercise blocks in order */
  exercises: ExerciseBlock[];
  sections: LessonSection[];
  /** Validation problems (lesson still renders) */
  problems: string[];
  /** Neighbouring lessons in curriculum order */
  prev?: string | null;
  next?: string | null;
}

export interface CurriculumPhase {
  id: string;
  title: string;
  weeks: [number, number];
  goal: string;
}

export type LessonStatus = 'not-started' | 'in-progress' | 'completed';

export interface CurriculumLessonDTO {
  id: string;
  /** false while content is not written yet */
  exists: boolean;
  title: string;
  order?: number;
  duration_min?: number;
  status: LessonStatus;
  bestScore?: number;
}

export interface CurriculumDTO {
  phases: CurriculumPhase[];
  weeks: { week: number; title: string; lessons: CurriculumLessonDTO[] }[];
  problemCount: number;
}

export interface GlossaryTerm {
  term: string;
  /** lower-case slug used by [[term]] links */
  slug: string;
  aliases: string[];
  /** Markdown definition */
  definition: string;
}

// ---------- progress ----------

export interface AttemptInput {
  lessonId: string;
  exerciseId: string;
  type: string;
  correct: boolean;
  score: number;
  answer?: unknown;
  durationMs?: number;
  itemIndex?: number;
  /** "lesson" (default) or "practice" (SRS session) */
  source?: 'lesson' | 'practice';
}

export interface ExerciseCompleteInput {
  lessonId: string;
  exerciseId: string;
  type: string;
  score: number;
  passed: boolean;
  correct: number;
  total: number;
}

export interface ExerciseProgress {
  attempts: number;
  correct: number;
  bestScore: number;
  passed: boolean;
  lastScore?: number;
  updatedAt: string;
}

export interface LessonProgress {
  status: LessonStatus;
  bestScore?: number;
  completedAt?: string | null;
  updatedAt: string;
}

export interface ProgressSummaryDTO {
  lessons: Record<string, LessonProgress>;
  exercises: Record<string, Record<string, ExerciseProgress>>;
  totals: { lessonsCompleted: number; lessonsTotal: number; attempts: number; accuracy: number; streakDays: number };
  lastLessonId: string | null;
  nextLessonId: string | null;
  srs: { due: number; total: number; session: number };
}

// ---------- SRS ----------

export interface SrsCardDTO {
  id: number;
  key: string;
  type: string;
  lessonId: string;
  exerciseId: string;
  /** Exercise block to regenerate items from */
  block: ExerciseBlock;
  ease: number;
  interval: number;
  reps: number;
  lapses: number;
  dueSession: number;
}

export interface SrsDueDTO {
  session: number;
  cards: SrsCardDTO[];
}

/** A recorded attempt (journal entries of `reflect` exercises are attempts whose answer is the text). */
export interface JournalEntryDTO {
  id: number;
  lessonId: string;
  exerciseId: string;
  type: string;
  answer: unknown;
  score: number;
  createdAt: string;
}

export interface SrsReviewInput {
  cardId: number;
  /** 0..5 */
  grade: number;
}

// ---------- projects ----------

export interface ProjectSummaryDTO {
  id: string;
  name: string;
  updatedAt: string;
  createdAt: string;
}

export type ProjectDTO = Project;

// ---------- settings ----------

export interface Settings {
  /** Web MIDI input id, or "all" */
  midiInput: string;
  keyboardRange: [string, string];
  /** Master volume 0..1 */
  volume: number;
  liveInstrument: InstrumentId;
  keyLabels: 'names' | 'degrees' | 'none';
  metronomeVolume: number;
  /** QWERTY base octave (lower row starts at C of this octave) */
  qwertyOctave: number;
}

export const DEFAULT_SETTINGS: Settings = {
  midiInput: 'all',
  keyboardRange: ['C3', 'C5'],
  volume: 0.8,
  liveInstrument: 'piano',
  keyLabels: 'names',
  metronomeVolume: 0.6,
  qwertyOctave: 4,
};
