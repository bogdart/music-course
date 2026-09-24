import type { InstrumentId, Snippet, SnippetEnvelope } from '../model.js';
import type { Rng } from '../rng.js';

/**
 * Exercise specs, typed per docs/CONTENT_SCHEMA.md. An `ExerciseBlock` is the whole ```exercise JSON;
 * `spec` is type-specific. Zod schemas live in @music/content-schema and must stay in sync.
 */

export interface ExerciseCommon {
  id: string;
  title?: string;
  instructions?: string;
  /** Number of items in the set (default 10) */
  count?: number;
  /** Fraction required to pass (default 0.7) */
  passScore?: number;
  /** Add to SRS deck (default true for ear-* types) */
  srs?: boolean;
  seed?: number;
  hints?: string[];
}

type Range = [string, string];

export interface SpecMap {
  // ---- ear training ----
  'ear-note': {
    key: string; mode?: 'major' | 'minor'; degrees: (number | string)[];
    reference?: 'cadence' | 'tonic' | 'none'; octaves?: number[]; instrument?: InstrumentId;
    chromatic?: boolean; answer?: 'degree' | 'name';
  };
  'ear-octave': { notes: string[]; octaves: number[]; mode: 'same-or-different' | 'which-octave' | 'higher-or-lower'; instrument?: InstrumentId };
  'ear-interval': {
    intervals: string[]; direction?: 'asc' | 'desc' | 'harmonic' | 'mixed'; root?: string; range?: Range;
    instrument?: InstrumentId;
  };
  'ear-chord': {
    qualities: string[]; inversions?: number[]; voicing?: 'close' | 'open' | 'mixed'; range?: Range;
    instrument?: InstrumentId;
  };
  'ear-chord-root': { qualities: string[]; answer?: 'play' | 'name'; range?: Range; instrument?: InstrumentId; inversions?: number[] };
  'ear-scale': { scales: string[]; play?: 'asc' | 'asc-desc' | 'melody'; root?: string; instrument?: InstrumentId };
  'ear-progression': {
    key?: string; mode?: 'major' | 'minor'; length?: number; chords: string[];
    style?: 'block' | 'arpeggio' | 'pad-bass'; bpm?: number; inversions?: number[];
  };
  'ear-melody': {
    key: string; mode?: 'major' | 'minor'; degrees: (number | string)[]; length?: number;
    rhythm?: 'quarters' | 'simple' | 'free'; answer?: 'play' | 'degrees'; bpm?: number; instrument?: InstrumentId;
  };
  'ear-rhythm': {
    timeSig?: string; bars?: number; subdivision?: 'q' | '8' | '16' | '8t'; rests?: boolean; answer?: 'tap' | 'choose'; bpm?: number;
    choices?: number;
  };
  'ear-bass': { key: string; mode?: 'major' | 'minor'; chords: string[]; answer?: 'play' | 'name'; length?: number; bpm?: number; inversions?: number[] };
  // ---- keyboard ----
  'play-notes': {
    prompt?: 'names' | 'staff' | 'degrees'; notes: string[] | string[][]; ordered?: boolean; key?: string;
    /** "exact" (default when notes carry octaves) or "any" octave */
    octave?: 'exact' | 'any'; clef?: 'treble' | 'bass';
  };
  'play-scale': {
    root?: string; scale: string; octaves?: number; direction?: 'asc' | 'desc' | 'asc-desc';
    hands?: 'right' | 'left' | 'both'; tempo?: number; metronome?: boolean;
  };
  'play-chord': { chords: string[]; inversion?: 'any' | 'root' | number; sequence?: boolean; bpm?: number; key?: string };
  'play-melody': {
    bpm?: number; timeSig?: string; key?: string; seq: string; showStaff?: boolean; showKeyboard?: boolean;
    countIn?: number; backing?: { instrument: InstrumentId; seq: string }; instrument?: InstrumentId;
    tracks?: { instrument: InstrumentId; seq: string }[]; swing?: number;
  };
  'rhythm-tap': { bpm?: number; timeSig?: string; seq: string; showNotation?: boolean; countIn?: number; loops?: number };
  'build-chord': { chords: string[]; root?: 'given' | 'any'; prompt?: 'symbol' | 'roman'; key?: string };
  'build-scale': { roots: string[]; scale: string; prompt?: 'name' };
  'build-interval': { intervals: string[]; direction?: 'asc' | 'desc'; root?: string; range?: Range };
  // ---- reading & theory ----
  'read-note': {
    clef: 'treble' | 'bass' | 'both'; range?: Range; accidentals?: boolean; answer?: 'play' | 'name'; timed?: number;
  };
  'read-rhythm': { timeSig?: string; bars?: number; subdivision?: '8' | '16' | '8t'; bpm?: number };
  quiz: { questions: QuizQuestion[]; shuffle?: boolean };
  'quiz-input': { questions: QuizInputQuestion[] };
  'key-signature': { keys: string[]; prompt?: 'staff' | 'name'; answer?: 'name' | 'count'; mode?: 'major' | 'minor' };
  'roman-analysis': { key: string; mode?: 'major' | 'minor'; chords: string[]; prompt?: 'symbols' | 'play' };
  // ---- DAW / composition ----
  'daw-task': {
    template?: Record<string, unknown>; task: string; checks?: DawCheck[]; minBars?: number; maxBars?: number;
  };
  listen: { example?: SnippetEnvelope & Record<string, unknown>; examples?: (SnippetEnvelope & Record<string, unknown>)[]; questions?: QuizQuestion[] };
  reflect: { prompt: string; minWords?: number };
}

export interface QuizQuestion {
  q: string;
  choices: string[];
  answer?: number;
  answers?: number[];
  explain?: string;
}

export interface QuizInputQuestion {
  q: string;
  answer: (string | number)[] | string | number;
  kind?: 'note' | 'text' | 'number';
  explain?: string;
}

export interface DawCheck {
  kind: string;
  track?: number;
  [arg: string]: unknown;
}

export type ExerciseType = keyof SpecMap;

export const EXERCISE_TYPES = [
  'ear-note', 'ear-octave', 'ear-interval', 'ear-chord', 'ear-chord-root', 'ear-scale', 'ear-progression',
  'ear-melody', 'ear-rhythm', 'ear-bass', 'play-notes', 'play-scale', 'play-chord', 'play-melody', 'rhythm-tap',
  'build-chord', 'build-scale', 'build-interval', 'read-note', 'read-rhythm', 'quiz', 'quiz-input',
  'key-signature', 'roman-analysis', 'daw-task', 'listen', 'reflect',
] as const satisfies readonly ExerciseType[];

export function isExerciseType(v: unknown): v is ExerciseType {
  return typeof v === 'string' && (EXERCISE_TYPES as readonly string[]).includes(v);
}

/** The ```exercise block, discriminated by `type`. */
export type ExerciseBlock = { [T in ExerciseType]: ExerciseCommon & { type: T; spec: SpecMap[T] } }[ExerciseType];
export type ExerciseBlockOf<T extends ExerciseType> = ExerciseCommon & { type: T; spec: SpecMap[T] };

/** Legacy alias used in docs: the spec union. */
export type ExerciseSpec = ExerciseBlock;

// ---------------- instances & answers ----------------

/** A choice button in the UI. `value` is what is sent back as the answer. */
export interface Choice {
  value: string;
  label: string;
}

/** Fields every generated item has. `T` = exercise type. */
export interface ItemBase<T extends ExerciseType> {
  type: T;
  /** Short prompt text shown to the learner */
  prompt: string;
  /** Audio to play for the question (Replay button). */
  audio?: Snippet;
  /** Reference audio played before the question (e.g. cadence) */
  reference?: Snippet;
  /** Multiple-choice options, if the item is answered by choosing */
  choices?: Choice[];
  /** Human-readable correct answer (for reveal) */
  solution: string;
  /** Audio of the solution (for reveal), if different from `audio` */
  solutionAudio?: Snippet;
}

export interface EarNoteItem extends ItemBase<'ear-note'> {
  key: string; mode: 'major' | 'minor'; midi: number; answerKind: 'degree' | 'name'; answer: string;
}
export interface EarOctaveItem extends ItemBase<'ear-octave'> {
  mode: 'same-or-different' | 'which-octave' | 'higher-or-lower'; midis: number[]; answer: string;
}
export interface EarIntervalItem extends ItemBase<'ear-interval'> {
  interval: string; direction: 'asc' | 'desc' | 'harmonic'; midis: [number, number]; answer: string;
}
export interface EarChordItem extends ItemBase<'ear-chord'> {
  quality: string; inversion: number; askInversion: boolean; midis: number[]; answer: string;
}
export interface PlayNotesItem extends ItemBase<'play-notes'> {
  /** Target MIDI notes (when octave is exact) */
  midis: number[];
  /** Target pitch classes */
  pitchClasses: number[];
  ordered: boolean;
  octave: 'exact' | 'any';
  display: 'names' | 'staff' | 'degrees';
  /** Labels to show (note names or degrees) */
  labels: string[];
  /** Seq for staff display */
  seq: string;
  clef: 'treble' | 'bass';
  key?: string;
}
export interface QuizItem extends ItemBase<'quiz'> {
  question: string; correct: number[]; multi: boolean; explain?: string; questionIndex: number;
}
export interface QuizInputItem extends ItemBase<'quiz-input'> {
  question: string; accepted: string[]; kind: 'note' | 'text' | 'number'; explain?: string; questionIndex: number;
}
export interface ReadNoteItem extends ItemBase<'read-note'> {
  clef: 'treble' | 'bass'; note: string; midi: number; answerKind: 'play' | 'name'; seq: string; timed: number;
}

export interface ItemMap {
  'ear-note': EarNoteItem;
  'ear-octave': EarOctaveItem;
  'ear-interval': EarIntervalItem;
  'ear-chord': EarChordItem;
  'play-notes': PlayNotesItem;
  quiz: QuizItem;
  'quiz-input': QuizInputItem;
  'read-note': ReadNoteItem;
}
export type ImplementedType = keyof ItemMap;

/** Answer payloads per type. Types without an entry accept `unknown`. */
export interface AnswerMap {
  'ear-note': string;
  /** 'same' | 'different' | 'higher' | 'lower' | octave number */
  'ear-octave': string | number;
  'ear-interval': string;
  /** "maj" or "maj:1" (quality:inversion) or {quality, inversion} */
  'ear-chord': string | { quality: string; inversion?: number };
  /** MIDI notes played, in order */
  'play-notes': number[];
  quiz: number | number[];
  'quiz-input': string;
  /** note name (for answer "name") or MIDI number (for answer "play") */
  'read-note': string | number;
}

export type Item<T extends ExerciseType = ExerciseType> = T extends ImplementedType ? ItemMap[T] : ItemBase<T> & Record<string, unknown>;
export type Answer<T extends ExerciseType = ExerciseType> = T extends keyof AnswerMap ? AnswerMap[T] : unknown;

export interface EvalResult {
  correct: boolean;
  /** 0..1 */
  score: number;
  feedback: string;
  /** Correct answer, human-readable */
  expected?: string;
  details?: Record<string, unknown>;
}

export interface GenerateContext {
  /** Index of the item within the set (0-based) */
  index: number;
  /** Total items in the set */
  count: number;
}

export interface ExerciseDefinition<T extends ExerciseType> {
  type: T;
  implemented: boolean;
  /** Build one item. Deterministic given rng state. */
  generate(block: ExerciseBlockOf<T>, rng: Rng, ctx: GenerateContext): Item<T>;
  evaluate(item: Item<T>, answer: Answer<T>): EvalResult;
  /** Optional natural item count (e.g. number of quiz questions) */
  naturalCount?(block: ExerciseBlockOf<T>): number | undefined;
}
