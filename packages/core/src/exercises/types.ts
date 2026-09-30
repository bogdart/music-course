import type { InstrumentId, Snippet, SnippetEnvelope } from '../model.js';
import type { PerformanceResult, PerformanceSpec, SequenceResult } from '../performance.js';
import type { Rng } from '../rng.js';

/** Example envelope as used inside exercise specs (`listen`, `example` mixes). */
export type ExampleEnvelope = SnippetEnvelope & { title?: string; hidden?: boolean; loop?: boolean; show?: string[]; [k: string]: unknown };

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

/** How a key is set before a key-relative question: chord cadence, melodic 1-2-3-4-5-4-3-2-1 run, tonic alone, or nothing. */
export type KeyReferenceKind = 'cadence' | 'scale' | 'tonic' | 'none';

export interface SpecMap {
  // ---- ear training ----
  'ear-note': {
    key: string; mode?: 'major' | 'minor'; degrees: (number | string)[];
    reference?: KeyReferenceKind; octaves?: number[]; instrument?: InstrumentId;
    chromatic?: boolean; answer?: 'degree' | 'name';
    /** Hold the tonic (an octave below) under the question note */
    drone?: boolean;
  };
  'ear-octave': {
    notes: string[]; octaves: number[]; mode: EarOctaveMode; instrument?: InstrumentId;
    /** Octave distances (1 or 2) between the two compared notes (`same-or-different`, `together`, `match`) */
    gap?: number[];
    /** Semitone distances (1–11, pitch class) of the "different" note from the first; default: another name from `notes` */
    foils?: number[];
  };
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
    style?: 'block' | 'arpeggio' | 'pad-bass' | 'band'; bpm?: number; inversions?: number[];
    /** Attached mix: play this instead of a generated progression; `progression` is then the answer, in order */
    example?: ExampleEnvelope; progression?: string[]; instrument?: InstrumentId;
  };
  'ear-melody': {
    key: string; mode?: 'major' | 'minor'; degrees: (number | string)[]; length?: number;
    rhythm?: 'quarters' | 'simple' | 'free'; answer?: 'play' | 'degrees'; bpm?: number; instrument?: InstrumentId;
    /** Key reference played first (default `cadence`) */
    reference?: KeyReferenceKind;
    /** chromatic passing/neighbour tones and a 12-degree answer palette */
    chromatic?: boolean;
    /** Harmony played under the melody: roman numerals spread evenly across it */
    backing?: string[];
    /** Largest leap in semitones between consecutive notes */
    maxLeap?: number;
    /** Attached mix: the melody is track `track` (default 0) of this example */
    example?: ExampleEnvelope; track?: number;
  };
  'ear-rhythm': {
    timeSig?: string; bars?: number; subdivision?: 'q' | '8' | '16' | '8t'; rests?: boolean; answer?: 'tap' | 'choose'; bpm?: number;
    choices?: number;
    /** Multi-voice drum dictation: fill a step grid per voice */
    voices?: string[];
  };
  'ear-bass': {
    key: string; mode?: 'major' | 'minor'; chords: string[]; answer?: 'play' | 'name'; length?: number; bpm?: number; inversions?: number[];
    /** `bass-focus` (default): chords with a prominent bass; `band`: a full mix (pad, bass, drums, lead) */
    style?: 'bass-focus' | 'band';
    /** Attached mix: the bass line is track `track` (default: first bass track) of this example */
    example?: ExampleEnvelope; track?: number;
  };
  'ear-tempo': { range?: [number, number]; tolerance?: number; style?: 'click' | 'drums' | 'groove'; timeSig?: string; bars?: number };
  'ear-meter': { meters: string[]; bpm?: number; bars?: number; style?: 'drums' | 'piano' | 'mixed' };
  // ---- keyboard ----
  'play-notes': {
    prompt?: 'names' | 'staff' | 'degrees'; notes?: string[] | string[][]; ordered?: boolean; key?: string;
    /** "exact" (default when notes carry octaves) or "any" octave */
    octave?: 'exact' | 'any'; clef?: 'treble' | 'bass';
    /** Alternative to an array-of-arrays `notes`: one note set per item */
    sets?: string[][];
  };
  'play-scale': {
    root?: string; scale: string; octaves?: number; direction?: 'asc' | 'desc' | 'asc-desc';
    hands?: 'right' | 'left' | 'both'; tempo?: number; metronome?: boolean;
  };
  'play-chord': {
    chords: string[]; inversion?: 'any' | 'root' | number; sequence?: boolean; bpm?: number; key?: string;
    /** "full" (default: every chord tone), "shell" (1-3-7), "rootless" (3-7-9 [+5/13], no root; -a: 3rd in the bass, -b: 7th in the bass) */
    voicing?: 'full' | 'shell' | 'rootless' | 'rootless-a' | 'rootless-b';
    /** Chord degrees that must sound (e.g. ["3","7"]); other chord tones optional */
    required?: (string | number)[];
  };
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
    /** "interval": two notes on the staff, name the interval */
    mode?: 'note' | 'interval'; intervals?: string[]; harmonic?: boolean;
  };
  'read-rhythm': { timeSig?: string; bars?: number; subdivision?: 'q' | '8' | '16' | '8t'; bpm?: number; rests?: boolean; countIn?: number };
  quiz: { questions: QuizQuestion[]; shuffle?: boolean };
  'quiz-input': { questions: QuizInputQuestion[] };
  'key-signature': { keys: string[]; prompt?: 'staff' | 'name'; answer?: 'name' | 'count'; mode?: 'major' | 'minor' };
  'roman-analysis': {
    /** answer buttons: the key's chords only, or plus common chromatic numerals (default: chromatic when an answer is) */
    palette?: 'diatonic' | 'chromatic'; key: string; mode?: 'major' | 'minor'; chords: string[]; prompt?: 'symbols' | 'play' };
  // ---- DAW / composition ----
  'daw-task': {
    template?: Record<string, unknown>; task: string; checks?: DawCheck[]; minBars?: number; maxBars?: number;
  };
  listen: { example?: ExampleEnvelope; examples?: ExampleEnvelope[]; questions?: QuizQuestion[] };
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
  'ear-melody', 'ear-rhythm', 'ear-bass', 'ear-tempo', 'ear-meter', 'play-notes', 'play-scale', 'play-chord', 'play-melody', 'rhythm-tap',
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
  /** Extra listening aids offered after the first answer (e.g. "both together", "the real octave") */
  compare?: { label: string; audio: Snippet }[];
  /** Played automatically once the item is done (answered correctly or revealed), e.g. a scale degree walking home */
  afterAnswer?: Snippet;
}

export interface EarNoteItem extends ItemBase<'ear-note'> {
  key: string; mode: 'major' | 'minor'; midi: number; answerKind: 'degree' | 'name'; answer: string;
}
export type EarOctaveMode = 'same-or-different' | 'together' | 'match' | 'find' | 'which-octave' | 'higher-or-lower' | 'same-pitch' | 'seek';
export interface EarOctaveItem extends ItemBase<'ear-octave'> {
  mode: EarOctaveMode; midis: number[]; answer: string;
  /** seek: the keys offered for searching (lowest, highest MIDI) */
  range?: [number, number];
  /** seek: a search that finds the note within this many keys counts as correct */
  limit?: number;
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
export interface ReadNoteItem extends ItemBase<'read-note'>, ReadIntervalFields {
  clef: 'treble' | 'bass'; note: string; midi: number; answerKind: 'play' | 'name'; seq: string; timed: number;
}

export interface ReadIntervalFields {
  /** read-note mode "interval": the two notes and the interval id */
  intervalMode?: boolean; interval?: string; midis?: [number, number];
}

export interface EarChordRootItem extends ItemBase<'ear-chord-root'> {
  quality: string; inversion: number; midis: number[]; rootPc: number; rootName: string; answerKind: 'play' | 'name';
}
export interface EarScaleItem extends ItemBase<'ear-scale'> { scale: string; root: string; midis: number[]; answer: string }
/** Common shape of "fill the slots" answers (progressions, roman analysis, degrees, bass names). */
export interface SlotItemFields {
  /** Correct value per slot */
  slots: string[];
  /** Palette of values for the slot buttons */
  palette: Choice[];
}
export interface EarProgressionItem extends ItemBase<'ear-progression'>, SlotItemFields {
  key: string; mode: 'major' | 'minor'; numerals: string[]; symbols: string[];
}
export interface EarMelodyItem extends ItemBase<'ear-melody'>, Partial<SlotItemFields> {
  key: string; mode: 'major' | 'minor'; answerKind: 'play' | 'degrees'; midis: number[]; degrees: string[]; names: string[];
}
export interface EarRhythmItem extends ItemBase<'ear-rhythm'> {
  mode: 'tap' | 'choose' | 'grid'; seq: string; timeSig: string; bpm: number;
  performance?: PerformanceSpec;
  /** grid mode */
  voices?: string[]; steps?: number; stepTicks?: number; grid?: Record<string, boolean[]>;
  answer?: string;
}
export interface EarBassItem extends ItemBase<'ear-bass'>, Partial<SlotItemFields> {
  key: string; mode: 'major' | 'minor'; answerKind: 'play' | 'name'; numerals: string[]; midis: number[]; names: string[];
}
export interface EarTempoItem extends ItemBase<'ear-tempo'> { bpm: number; tolerance: number; range: [number, number] }
export interface EarMeterItem extends ItemBase<'ear-meter'> { meter: string; answer: string }

/** Items of timing/performance types carry a PerformanceSpec plus display hints. */
export interface PerformanceItemFields {
  performance: PerformanceSpec;
  /** Seq for notation (main voice) */
  seq?: string;
  clef?: 'treble' | 'bass' | 'percussion';
  keySig?: string;
  timeSigStr: string;
  showStaff: boolean;
  showKeyboard: boolean;
  /** Snippet played along during the take (backing / other parts) */
  backing?: Snippet;
}
export interface PlayScaleItem extends ItemBase<'play-scale'>, PerformanceItemFields { root: string; scale: string; midis: number[] }
export interface PlayMelodyItem extends ItemBase<'play-melody'>, PerformanceItemFields {}
export interface RhythmTapItem extends ItemBase<'rhythm-tap'>, PerformanceItemFields {}
export interface ReadRhythmItem extends ItemBase<'read-rhythm'>, PerformanceItemFields {}

export interface PlayChordItem extends ItemBase<'play-chord'> {
  symbol: string; rootPc: number; pitchClasses: number[]; bassPc: number | null;
  /** Required pitch classes and all allowed pitch classes */
  required: number[]; allowed: number[]; forbidden: number[];
  voicing: 'full' | 'shell' | 'rootless' | 'rootless-a' | 'rootless-b' | 'required';
  /** Current position in the progression (sequence mode) */
  position?: number; sequence?: string[];
  display: string; midis: number[];
}
export interface BuildItem<T extends 'build-chord' | 'build-scale'> extends ItemBase<T> {
  pitchClasses: number[]; names: string[]; givenRoot: number | null; display: string; rootPc: number;
}
export interface BuildIntervalItem extends ItemBase<'build-interval'> { root: number; target: number; interval: string; direction: 'asc' | 'desc' }
export interface KeySignatureItem extends ItemBase<'key-signature'> {
  key: string; mode: 'major' | 'minor'; promptKind: 'staff' | 'name'; answerKind: 'name' | 'count'; vexKey: string; answer: string;
}
export interface RomanAnalysisItem extends ItemBase<'roman-analysis'>, SlotItemFields { key: string; mode: 'major' | 'minor'; chords: string[]; promptKind: 'symbols' | 'play' }
export interface ListenItem extends ItemBase<'listen'> {
  examples: ExampleEnvelope[];
  /** Question (quiz-like) or null for "just listen" */
  question: { q: string; choices: string[]; correct: number[]; multi: boolean; explain?: string } | null;
  questionIndex: number;
}
export interface ReflectItem extends ItemBase<'reflect'> { minWords: number }

export interface ItemMap {
  'ear-note': EarNoteItem;
  'ear-octave': EarOctaveItem;
  'ear-interval': EarIntervalItem;
  'ear-chord': EarChordItem;
  'ear-chord-root': EarChordRootItem;
  'ear-scale': EarScaleItem;
  'ear-progression': EarProgressionItem;
  'ear-melody': EarMelodyItem;
  'ear-rhythm': EarRhythmItem;
  'ear-bass': EarBassItem;
  'ear-tempo': EarTempoItem;
  'ear-meter': EarMeterItem;
  'play-notes': PlayNotesItem;
  'play-scale': PlayScaleItem;
  'play-chord': PlayChordItem;
  'play-melody': PlayMelodyItem;
  'rhythm-tap': RhythmTapItem;
  'build-chord': BuildItem<'build-chord'>;
  'build-scale': BuildItem<'build-scale'>;
  'build-interval': BuildIntervalItem;
  quiz: QuizItem;
  'quiz-input': QuizInputItem;
  'read-note': ReadNoteItem;
  'read-rhythm': ReadRhythmItem;
  'key-signature': KeySignatureItem;
  'roman-analysis': RomanAnalysisItem;
  listen: ListenItem;
  reflect: ReflectItem;
}
export type ImplementedType = keyof ItemMap;

/** Answer of performance types: notes with times in seconds from the first music tick. */
export interface PerformanceAnswer {
  notes: { midi: number; time: number }[];
}

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
  /** note name (for answer "name") or MIDI number (for answer "play"); interval id in interval mode */
  'read-note': string | number;
  /** note name or MIDI number (any octave) */
  'ear-chord-root': string | number;
  'ear-scale': string;
  /** roman numerals, one per chord */
  'ear-progression': string[];
  /** MIDI notes played (answer "play") or degree strings (answer "degrees") */
  'ear-melody': (number | string)[];
  /** tap: taps; choose: the chosen seq; grid: steps per voice */
  'ear-rhythm': PerformanceAnswer | string | { grid: Record<string, boolean[]> };
  /** MIDI notes (answer "play") or degree strings (answer "name") */
  'ear-bass': (number | string)[];
  /** bpm */
  'ear-tempo': number | string;
  'ear-meter': string;
  'play-scale': PerformanceAnswer;
  /** MIDI notes sounding together */
  'play-chord': number[];
  'play-melody': PerformanceAnswer;
  'rhythm-tap': PerformanceAnswer;
  /** selected MIDI notes or pitch classes */
  'build-chord': number[];
  'build-scale': number[];
  /** MIDI note of the second note */
  'build-interval': number;
  'read-rhythm': PerformanceAnswer;
  /** key name ("D", "Bm") or count label ("2#", "3b", "0") */
  'key-signature': string;
  'roman-analysis': string[];
  /** choice index/indices, or "done" for listen-only items */
  listen: number | number[] | 'done';
  /** free text */
  reflect: string;
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
  details?: Record<string, unknown> & {
    performance?: PerformanceResult;
    sequence?: SequenceResult;
    /** per-slot correctness for slot answers */
    slots?: boolean[];
  };
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
