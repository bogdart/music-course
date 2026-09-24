/** Core domain model (see docs/ARCHITECTURE.md). Pitches are MIDI numbers, time is ticks at PPQ 480. */

export const PPQ = 480;

export type Midi = number;
export type NoteName = string;
export type Bars = number;
export type Beats = number;
export type Ticks = number;

export interface TimeSig {
  num: number;
  den: number;
}

export interface NoteEvent {
  midi: Midi;
  startTick: number;
  durationTicks: number;
  /** 0..1 */
  velocity: number;
}

export const INSTRUMENT_IDS = ['piano', 'epiano', 'bass', 'pad', 'lead', 'pluck', 'strings', 'drums'] as const;
export type InstrumentId = (typeof INSTRUMENT_IDS)[number];

export function isInstrumentId(v: unknown): v is InstrumentId {
  return typeof v === 'string' && (INSTRUMENT_IDS as readonly string[]).includes(v);
}

export interface Clip {
  id: string;
  name: string;
  startTick: number;
  lengthTicks: number;
  notes: NoteEvent[];
}

export interface Track {
  id: string;
  name: string;
  instrument: InstrumentId;
  clips: Clip[];
  volume: number;
  pan: number;
  mute: boolean;
  solo: boolean;
}

export interface Project {
  id: string;
  name: string;
  bpm: number;
  timeSig: TimeSig;
  key?: string;
  tracks: Track[];
  loop?: { startTick: number; endTick: number };
}

/**
 * A playable, already-parsed snippet: what exercises produce for audio and what
 * `example` blocks become after parsing. `AudioEngine.schedule()` accepts this or a Project.
 */
export interface Snippet {
  bpm: number;
  timeSig: TimeSig;
  key?: string;
  tracks: SnippetTrack[];
}

export interface SnippetTrack {
  instrument: InstrumentId;
  events: NoteEvent[];
  /** 0..1, default 1 */
  volume?: number;
}

/** JSON envelope used in content (`example` blocks, templates): tracks carry `seq` strings. */
export interface SnippetEnvelope {
  bpm?: number;
  timeSig?: string;
  key?: string;
  tracks: { instrument: InstrumentId; seq: string; volume?: number }[];
}

/** Drum map (General MIDI) — drum names usable in seq strings on drum tracks. */
export const DRUM_MAP = {
  kick: 36,
  snare: 38,
  clap: 39,
  hh: 42,
  hihat: 42,
  ohat: 46,
  tom: 45,
  crash: 49,
  ride: 51,
} as const satisfies Record<string, number>;
export type DrumName = keyof typeof DRUM_MAP;

/** MIDI number used for the generic rhythm hit `x` in seq strings. */
export const RHYTHM_HIT_MIDI = 76;

export function parseTimeSig(ts: string | TimeSig | undefined): TimeSig {
  if (!ts) return { num: 4, den: 4 };
  if (typeof ts !== 'string') return ts;
  const m = /^(\d+)\s*\/\s*(\d+)$/.exec(ts.trim());
  if (!m) throw new Error(`Invalid time signature "${ts}"`);
  const num = Number(m[1]);
  const den = Number(m[2]);
  if (num < 1 || ![1, 2, 4, 8, 16, 32].includes(den)) throw new Error(`Invalid time signature "${ts}"`);
  return { num, den };
}

export function formatTimeSig(ts: TimeSig): string {
  return `${ts.num}/${ts.den}`;
}
