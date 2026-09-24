import { z } from 'zod';
import {
  bpm, chordQuality, chordSymbol, degree, durationToken, instrument, intervalId, key, keyOrRandom, lessonId, mode,
  noteName, noteWithOctave, range, romanNumeral, scaleId, seq, timeSig,
} from './primitives.js';

// Objects are "loose": unknown fields pass through (writers work in parallel); known fields are strictly typed.
const obj = z.looseObject;

// ---------------- curriculum ----------------

export const phaseSchema = obj({
  id: z.string().regex(/^p\d+$/, 'phase id like p1'),
  title: z.string().min(1),
  weeks: z.tuple([z.number().int().min(1), z.number().int().min(1)]),
  goal: z.string(),
});

export const weekSchema = obj({
  week: z.number().int().min(1).max(60),
  title: z.string().min(1),
  lessons: z.array(lessonId),
});

export const curriculumSchema = obj({
  phases: z.array(phaseSchema).min(1),
  weeks: z.array(weekSchema).min(1),
});

// ---------------- front matter ----------------

export const songRefSchema = obj({
  title: z.string().min(1),
  composer: z.string().optional(),
  artist: z.string().optional(),
  public_domain: z.boolean().optional(),
  year: z.union([z.number(), z.string()]).optional(),
  key: z.string().optional(),
});

export const frontmatterSchema = obj({
  id: lessonId,
  title: z.string().min(1),
  week: z.number().int().min(1).max(60),
  order: z.number().int().min(1).max(9),
  phase: z.string().regex(/^p\d+$/, 'phase id like p1'),
  duration_min: z.number().int().min(5).max(180),
  goals: z.array(z.string().min(1)).min(1),
  prerequisites: z.array(lessonId).optional(),
  tags: z.array(z.string()).optional(),
  songs: z.array(songRefSchema).optional(),
});

// ---------------- display blocks ----------------

export const envelopeTrackSchema = obj({
  instrument,
  seq,
  volume: z.number().min(0).max(1).optional(),
});

export const envelopeSchema = obj({
  bpm: bpm.optional(),
  /** 0 = straight, 1 = full triplet swing of 8ths (playback support pending) */
  swing: z.number().min(0).max(1).optional(),
  timeSig: timeSig.optional(),
  key: key.optional(),
  tracks: z.array(envelopeTrackSchema).min(1),
});

export const exampleBlockSchema = envelopeSchema.extend({
  title: z.string().optional(),
  show: z.array(z.enum(['staff', 'keyboard', 'pianoroll'])).optional(),
  loop: z.boolean().optional(),
  clef: z.enum(['treble', 'bass']).optional(),
  caption: z.string().optional(),
});

const colorRole = z.enum(['root', 'third', 'fifth', 'seventh', 'other']);

export const keyboardBlockSchema = obj({
  range,
  highlight: z.array(noteName).optional(),
  labels: z.enum(['names', 'degrees', 'none']).optional(),
  key: key.optional(),
  colors: z.record(z.string(), colorRole).optional(),
  title: z.string().optional(),
}).superRefine((b, ctx) => {
  if (b.labels === 'degrees' && !b.key) ctx.addIssue({ code: 'custom', message: 'labels "degrees" requires "key"', path: ['key'] });
  for (const n of Object.keys(b.colors ?? {})) {
    if (!noteName.safeParse(n).success) ctx.addIssue({ code: 'custom', message: `colors: "${n}" is not a note name`, path: ['colors', n] });
  }
});

export const staffBlockSchema = obj({
  clef: z.enum(['treble', 'bass']),
  key: key.optional(),
  timeSig: timeSig.optional(),
  seq,
  title: z.string().optional(),
  play: z.boolean().optional(),
  bpm: bpm.optional(),
});

/** A bar may hold one chord or several separated by spaces ("C G"); "%" repeats the previous bar; "N.C." = no chord. */
const chordBar = z.string().superRefine((bar, ctx) => {
  const parts = bar.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) ctx.addIssue({ code: 'custom', message: 'empty bar' });
  for (const p of parts) {
    if (p === '%' || p === 'N.C.' || p === '-') continue;
    if (!chordSymbol.safeParse(p).success) ctx.addIssue({ code: 'custom', message: `invalid chord symbol "${p}"` });
  }
});

export const chordsBlockSchema = obj({
  key,
  mode: mode.optional(),
  bars: z.array(chordBar).min(1),
  roman: z.boolean().optional(),
  play: z.boolean().optional(),
  bpm: bpm.optional(),
  timeSig: timeSig.optional(),
  instrument: instrument.optional(),
  title: z.string().optional(),
});

// ---------------- exercises ----------------

const quizQuestion = obj({
  q: z.string().min(1),
  choices: z.array(z.string()).min(2),
  answer: z.number().int().min(0).optional(),
  answers: z.array(z.number().int().min(0)).min(1).optional(),
  explain: z.string().optional(),
}).superRefine((q, ctx) => {
  const idx = q.answers ?? (q.answer !== undefined ? [q.answer] : []);
  if (idx.length === 0) ctx.addIssue({ code: 'custom', message: 'quiz question needs "answer" (index) or "answers"' });
  for (const i of idx) if (i >= q.choices.length) ctx.addIssue({ code: 'custom', message: `answer index ${i} out of range (${q.choices.length} choices)` });
});

const quizInputQuestion = obj({
  q: z.string().min(1),
  answer: z.union([z.array(z.union([z.string(), z.number()])).min(1), z.string(), z.number()]),
  kind: z.enum(['note', 'text', 'number']).optional(),
  explain: z.string().optional(),
}).superRefine((q, ctx) => {
  if (q.kind === 'note') {
    const arr = Array.isArray(q.answer) ? q.answer : [q.answer];
    for (const a of arr) if (!noteName.safeParse(String(a)).success) ctx.addIssue({ code: 'custom', message: `"${a}" is not a note name (kind: note)` });
  }
});

export const DAW_CHECK_KINDS = [
  'in-key', 'note-count', 'range', 'bars', 'ends-on', 'starts-on', 'chord-tones-on-beats', 'uses-rhythm', 'max-leap',
  'has-tracks', 'drum-pattern', 'no-parallel-fifths', 'repetition', 'contour', 'custom',
  // proposed in docs/SCHEMA_GAPS.md #8 (accepted by the validator; predicates implemented with the DAW milestone)
  'has-rest', 'min-leap', 'plays-progression', 'is-transposition', 'voice-leading', 'chord-has-seventh', 'uses-chord',
  'tempo', 'syncopation',
] as const;

export const dawCheckSchema = obj({
  kind: z.enum(DAW_CHECK_KINDS),
  track: z.number().int().min(0).optional(),
}).superRefine((c, ctx) => {
  const a = c as Record<string, unknown>;
  const check = (field: string, schema: z.ZodType) => {
    if (a[field] === undefined) return;
    const r = schema.safeParse(a[field]);
    if (!r.success) ctx.addIssue({ code: 'custom', message: `${c.kind}.${field}: ${r.error.issues[0]?.message}`, path: [field] });
  };
  check('key', key);
  check('scale', scaleId);
  check('low', noteWithOctave);
  check('high', noteWithOctave);
  check('degree', degree);
  check('degrees', z.array(degree));
  check('progression', z.array(romanNumeral));
  check('values', z.array(durationToken));
  check('instruments', z.array(instrument));
  check('shape', z.enum(['arch', 'ascending', 'descending', 'wave']));
  check('requires', z.array(z.string()));
  if (c.kind === 'custom' && typeof a.id !== 'string') ctx.addIssue({ code: 'custom', message: 'custom check needs an "id"' });
});

export const specSchemas = {
  'ear-note': obj({
    key, mode: mode.optional(), degrees: z.array(degree).min(1),
    reference: z.enum(['cadence', 'tonic', 'none']).optional(), octaves: z.array(z.number().int().min(0).max(8)).min(1).optional(),
    instrument: instrument.optional(), chromatic: z.boolean().optional(), answer: z.enum(['degree', 'name']).optional(),
  }),
  'ear-octave': obj({
    notes: z.array(noteName).min(1), octaves: z.array(z.number().int().min(0).max(8)).min(1),
    mode: z.enum(['same-or-different', 'which-octave', 'higher-or-lower']), instrument: instrument.optional(),
  }),
  'ear-interval': obj({
    intervals: z.array(intervalId).min(1), direction: z.enum(['asc', 'desc', 'harmonic', 'mixed']).optional(),
    root: z.union([z.literal('random'), noteWithOctave]).optional(), range: range.optional(), instrument: instrument.optional(),
  }),
  'ear-chord': obj({
    qualities: z.array(chordQuality).min(1), inversions: z.array(z.number().int().min(0).max(3)).min(1).optional(),
    voicing: z.enum(['close', 'open', 'mixed']).optional(), range: range.optional(), instrument: instrument.optional(),
  }),
  'ear-chord-root': obj({
    qualities: z.array(chordQuality).min(1), answer: z.enum(['play', 'name']).optional(), range: range.optional(),
    instrument: instrument.optional(), inversions: z.array(z.number().int().min(0).max(3)).min(1).optional(),
  }),
  'ear-scale': obj({
    scales: z.array(scaleId).min(1), play: z.enum(['asc', 'asc-desc', 'melody']).optional(),
    root: z.union([z.literal('random'), noteName]).optional(), instrument: instrument.optional(),
  }),
  'ear-progression': obj({
    key: keyOrRandom.optional(), mode: mode.optional(), length: z.number().int().min(1).max(16).optional(),
    chords: z.array(romanNumeral).min(1), style: z.enum(['block', 'arpeggio', 'pad-bass']).optional(), bpm: bpm.optional(),
    inversions: z.array(z.number().int().min(0).max(3)).min(1).optional(),
  }),
  'ear-melody': obj({
    key, mode: mode.optional(), degrees: z.array(degree).min(1), length: z.number().int().min(1).max(32).optional(),
    rhythm: z.enum(['quarters', 'simple', 'free']).optional(), answer: z.enum(['play', 'degrees']).optional(),
    bpm: bpm.optional(), instrument: instrument.optional(),
  }),
  'ear-rhythm': obj({
    timeSig: timeSig.optional(), bars: z.number().int().min(1).max(8).optional(), subdivision: z.enum(['q', '8', '16', '8t']).optional(),
    rests: z.boolean().optional(), answer: z.enum(['tap', 'choose']).optional(), bpm: bpm.optional(),
    choices: z.number().int().min(2).max(4).optional(),
  }),
  'ear-bass': obj({
    key, mode: mode.optional(), chords: z.array(romanNumeral).min(1), answer: z.enum(['play', 'name']).optional(),
    length: z.number().int().min(1).max(16).optional(), bpm: bpm.optional(),
    inversions: z.array(z.number().int().min(0).max(3)).min(1).optional(),
  }),
  'play-notes': obj({
    prompt: z.enum(['names', 'staff', 'degrees']).optional(),
    notes: z.union([z.array(noteName).min(1), z.array(z.array(noteName).min(1)).min(1)]),
    ordered: z.boolean().optional(), key: key.optional(), octave: z.enum(['exact', 'any']).optional(),
    clef: z.enum(['treble', 'bass']).optional(),
  }).superRefine((s, ctx) => {
    if (s.prompt === 'degrees' && !s.key) ctx.addIssue({ code: 'custom', message: 'prompt "degrees" requires "key"', path: ['key'] });
  }),
  'play-scale': obj({
    root: z.union([z.literal('random'), noteName]).optional(), scale: scaleId, octaves: z.number().int().min(1).max(3).optional(),
    direction: z.enum(['asc', 'desc', 'asc-desc']).optional(), hands: z.enum(['right', 'left', 'both']).optional(),
    tempo: bpm.optional(), metronome: z.boolean().optional(),
  }),
  'play-chord': obj({
    chords: z.array(chordSymbol).min(1), inversion: z.union([z.enum(['any', 'root']), z.number().int().min(0).max(3)]).optional(), sequence: z.boolean().optional(),
    bpm: bpm.optional(), key: key.optional(),
  }),
  'play-melody': obj({
    bpm: bpm.optional(), timeSig: timeSig.optional(), key: key.optional(), seq, showStaff: z.boolean().optional(),
    showKeyboard: z.boolean().optional(), countIn: z.number().int().min(0).max(4).optional(),
    backing: obj({ instrument, seq }).optional(), instrument: instrument.optional(),
  }),
  'rhythm-tap': obj({
    bpm: bpm.optional(), timeSig: timeSig.optional(), seq, showNotation: z.boolean().optional(),
    countIn: z.number().int().min(0).max(4).optional(), loops: z.number().int().min(1).max(8).optional(),
  }),
  'build-chord': obj({
    /** Chord symbols (the answer). With prompt "roman" they are displayed as numerals in `key`; numerals are accepted too. */
    chords: z.array(z.string().min(1)).min(1), root: z.enum(['given', 'any']).optional(),
    prompt: z.enum(['symbol', 'roman']).optional(), key: key.optional(),
  }).superRefine((s, ctx) => {
    if (s.prompt === 'roman' && !s.key) ctx.addIssue({ code: 'custom', message: 'prompt "roman" requires "key"', path: ['key'] });
    s.chords.forEach((c, i) => {
      if (!chordSymbol.safeParse(c).success && !romanNumeral.safeParse(c).success) {
        ctx.addIssue({ code: 'custom', message: `"${c}" is neither a chord symbol nor a roman numeral`, path: ['chords', i] });
      }
    });
  }),
  'build-scale': obj({ roots: z.array(noteName).min(1), scale: scaleId, prompt: z.enum(['name']).optional() }),
  'build-interval': obj({
    intervals: z.array(intervalId).min(1), direction: z.enum(['asc', 'desc']).optional(),
    root: z.union([z.literal('random'), noteWithOctave]).optional(), range: range.optional(),
  }),
  'read-note': obj({
    clef: z.enum(['treble', 'bass', 'both']), range: range.optional(), accidentals: z.boolean().optional(),
    answer: z.enum(['play', 'name']).optional(), timed: z.number().min(0).optional(),
  }),
  'read-rhythm': obj({
    timeSig: timeSig.optional(), bars: z.number().int().min(1).max(8).optional(), subdivision: z.enum(['8', '16', '8t']).optional(),
    bpm: bpm.optional(),
  }),
  quiz: obj({ questions: z.array(quizQuestion).min(1), shuffle: z.boolean().optional() }),
  'quiz-input': obj({ questions: z.array(quizInputQuestion).min(1) }),
  'key-signature': obj({
    keys: z.array(key).min(1), prompt: z.enum(['staff', 'name']).optional(), answer: z.enum(['name', 'count']).optional(),
    mode: mode.optional(),
  }),
  'roman-analysis': obj({
    key, mode: mode.optional(), chords: z.array(chordSymbol).min(1), prompt: z.enum(['symbols', 'play']).optional(),
  }),
  'daw-task': obj({
    template: z.record(z.string(), z.unknown()).optional(), task: z.string().min(1), checks: z.array(dawCheckSchema).optional(),
    minBars: z.number().int().min(1).optional(), maxBars: z.number().int().min(1).optional(),
  }).superRefine((s, ctx) => {
    const tracks = (s.template as { tracks?: unknown } | undefined)?.tracks;
    if (Array.isArray(tracks)) {
      tracks.forEach((t, i) => {
        const r = obj({ instrument, seq: seq.optional() }).safeParse(t);
        if (!r.success) ctx.addIssue({ code: 'custom', message: `template.tracks[${i}]: ${r.error.issues[0]?.message}`, path: ['template', 'tracks', i] });
      });
    }
  }),
  listen: obj({
    example: exampleBlockSchema.optional(), examples: z.array(exampleBlockSchema).min(1).optional(),
    questions: z.array(quizQuestion).optional(),
  }).superRefine((s, ctx) => {
    if (!s.example && !s.examples) ctx.addIssue({ code: 'custom', message: 'listen needs "example" or "examples"' });
  }),
  reflect: obj({ prompt: z.string().min(1), minWords: z.number().int().min(0).optional() }),
} as const;

export type ExerciseTypeId = keyof typeof specSchemas;
export const EXERCISE_TYPE_IDS = Object.keys(specSchemas) as ExerciseTypeId[];

export const exerciseCommonSchema = obj({
  id: z.string().regex(/^[A-Za-z0-9][A-Za-z0-9_-]*$/, 'exercise id: letters, digits, - and _'),
  type: z.enum(EXERCISE_TYPE_IDS as [ExerciseTypeId, ...ExerciseTypeId[]]),
  title: z.string().optional(),
  instructions: z.string().optional(),
  count: z.number().int().min(1).max(50).optional(),
  passScore: z.number().min(0).max(1).optional(),
  srs: z.boolean().optional(),
  seed: z.number().int().optional(),
  hints: z.array(z.string()).optional(),
  spec: z.record(z.string(), z.unknown()),
});

/** Full exercise block: common fields + spec validated by its type. */
export const exerciseBlockSchema = exerciseCommonSchema.superRefine((b, ctx) => {
  const schema = specSchemas[b.type];
  const r = schema.safeParse(b.spec);
  if (!r.success) {
    for (const issue of r.error.issues) ctx.addIssue({ code: 'custom', message: issue.message, path: ['spec', ...issue.path.map((p) => (typeof p === 'symbol' ? String(p) : p))] });
  }
});

export const blockSchemas = {
  example: exampleBlockSchema,
  exercise: exerciseBlockSchema,
  keyboard: keyboardBlockSchema,
  staff: staffBlockSchema,
  chords: chordsBlockSchema,
} as const;

export const BLOCK_LANGS = Object.keys(blockSchemas) as (keyof typeof blockSchemas)[];

export type CurriculumJson = z.infer<typeof curriculumSchema>;
export type Frontmatter = z.infer<typeof frontmatterSchema>;
export type ExampleBlock = z.infer<typeof exampleBlockSchema>;
export type KeyboardBlock = z.infer<typeof keyboardBlockSchema>;
export type StaffBlock = z.infer<typeof staffBlockSchema>;
export type ChordsBlock = z.infer<typeof chordsBlockSchema>;

/** Known keys of each schema, for unknown-field warnings. */
export function knownKeys(schema: unknown): string[] | null {
  const s = schema as { shape?: Record<string, unknown>; def?: { in?: unknown; schema?: unknown } };
  if (s && typeof s === 'object' && s.shape) return Object.keys(s.shape);
  // superRefine/pipe wrappers
  const inner = s?.def?.in ?? s?.def?.schema;
  return inner ? knownKeys(inner) : null;
}

/** Format zod issues as "path: message" strings. */
export function formatIssues(err: z.ZodError): string[] {
  return err.issues.map((i) => {
    const path = i.path.map((p) => (typeof p === 'number' ? `[${p}]` : `.${String(p)}`)).join('').replace(/^\./, '');
    return path ? `${path}: ${i.message}` : i.message;
  });
}
