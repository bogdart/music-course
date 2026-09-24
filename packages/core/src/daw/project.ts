/**
 * Project utilities for the micro-DAW (pure, no DOM): creation, normalisation, template/envelope → project,
 * note editing helpers (quantize, transpose, chord stamp) and flattened views used by the predicates.
 */
import {
  INSTRUMENT_IDS, PPQ, isInstrumentId, parseTimeSig, type Clip, type InstrumentId, type NoteEvent, type Project,
  type Snippet, type SnippetEnvelope, type TimeSig, type Track,
} from '../model.js';
import { quantizeTick, ticksPerBar, ticksPerBeat } from '../rhythm.js';
import { parseSeq } from '../seq/seq.js';
import { chordMidi, tryParseChordSymbol } from '../theory/chords.js';
import { tryRomanToChord } from '../theory/roman.js';
import { isValidKey } from '../theory/keys.js';

let idCounter = 0;
/** Short unique id (not cryptographic). */
export function newId(prefix = ''): string {
  idCounter = (idCounter + 1) % 1_000_000;
  return `${prefix}${Date.now().toString(36)}${Math.floor(Math.random() * 1e6).toString(36)}${idCounter.toString(36)}`;
}

export const INSTRUMENT_LABELS: Record<InstrumentId, string> = {
  piano: 'Piano', epiano: 'E-Piano', bass: 'Bass', pad: 'Pad', lead: 'Lead', pluck: 'Pluck', strings: 'Strings', guitar: 'Guitar', drums: 'Drums',
};

/** Drum lanes shown in the piano roll of a drum track (top to bottom). */
export const DRUM_LANES: { name: string; midi: number }[] = [
  { name: 'crash', midi: 49 }, { name: 'ride', midi: 51 }, { name: 'ohat', midi: 46 }, { name: 'hihat', midi: 42 },
  { name: 'tom', midi: 45 }, { name: 'clap', midi: 39 }, { name: 'snare', midi: 38 }, { name: 'kick', midi: 36 },
];

export function createTrack(instrument: InstrumentId = 'piano', patch: Partial<Track> = {}): Track {
  return {
    id: newId('t'), name: INSTRUMENT_LABELS[instrument], instrument, clips: [], volume: 0.8, pan: 0, mute: false, solo: false,
    ...patch,
  };
}

export function createClip(startTick: number, lengthTicks: number, notes: NoteEvent[] = [], name = 'Clip'): Clip {
  return { id: newId('c'), name, startTick, lengthTicks, notes };
}

export function createProject(patch: Partial<Project> = {}): Project {
  return {
    id: newId('p'), name: 'Untitled', bpm: 100, timeSig: { num: 4, den: 4 }, key: 'C',
    tracks: [createTrack('piano')], ...patch,
  };
}

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
const num = (v: unknown, d: number) => (typeof v === 'number' && Number.isFinite(v) ? v : d);

function normNote(n: Partial<NoteEvent>): NoteEvent | null {
  if (typeof n.midi !== 'number' || typeof n.startTick !== 'number') return null;
  return {
    midi: clamp(Math.round(n.midi), 0, 127),
    startTick: Math.max(0, Math.round(n.startTick)),
    durationTicks: Math.max(1, Math.round(num(n.durationTicks, PPQ))),
    velocity: clamp(num(n.velocity, 0.8), 0, 1),
  };
}

/**
 * Fill defaults and repair a project loaded from storage/JSON (tolerant: missing ids, fields, bad values).
 * Never throws for object input.
 */
export function normalizeProject(raw: unknown): Project {
  const r = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>;
  let timeSig: TimeSig = { num: 4, den: 4 };
  try {
    timeSig = parseTimeSig(r.timeSig as string | TimeSig | undefined);
  } catch {
    /* default */
  }
  const tracks = (Array.isArray(r.tracks) ? r.tracks : []).map((t0): Track => {
    const t = (t0 && typeof t0 === 'object' ? t0 : {}) as Record<string, unknown>;
    const instrument = isInstrumentId(t.instrument) ? t.instrument : 'piano';
    const clips = (Array.isArray(t.clips) ? t.clips : []).map((c0): Clip => {
      const c = (c0 && typeof c0 === 'object' ? c0 : {}) as Record<string, unknown>;
      const notes = (Array.isArray(c.notes) ? c.notes : []).map((n) => normNote(n as Partial<NoteEvent>)).filter((n): n is NoteEvent => !!n);
      const end = notes.reduce((a, n) => Math.max(a, n.startTick + n.durationTicks), 0);
      return {
        id: typeof c.id === 'string' && c.id ? c.id : newId('c'),
        name: typeof c.name === 'string' ? c.name : 'Clip',
        startTick: Math.max(0, Math.round(num(c.startTick, 0))),
        lengthTicks: Math.max(1, Math.round(num(c.lengthTicks, Math.max(end, ticksPerBar(timeSig))))),
        notes,
      };
    });
    return {
      id: typeof t.id === 'string' && t.id ? t.id : newId('t'),
      name: typeof t.name === 'string' && t.name ? t.name : INSTRUMENT_LABELS[instrument],
      instrument, clips,
      volume: clamp(num(t.volume, 0.8), 0, 1), pan: clamp(num(t.pan, 0), -1, 1),
      mute: t.mute === true, solo: t.solo === true,
    };
  });
  const p: Project = {
    id: typeof r.id === 'string' && r.id ? r.id : newId('p'),
    name: typeof r.name === 'string' && r.name.trim() ? r.name : 'Untitled',
    bpm: clamp(num(r.bpm, 100), 20, 400),
    timeSig, tracks,
  };
  if (typeof r.key === 'string' && isValidKey(r.key)) p.key = r.key;
  const loop = r.loop as { startTick?: unknown; endTick?: unknown } | undefined;
  if (Array.isArray(r.markers)) {
    const markers = (r.markers as { bar?: unknown; name?: unknown }[])
      .filter((m) => m && typeof m.bar === 'number' && m.bar >= 1 && typeof m.name === 'string')
      .map((m) => ({ bar: Math.round(m.bar as number), name: String(m.name) }))
      .sort((a, b) => a.bar - b.bar);
    if (markers.length) p.markers = markers;
  }
  if (loop && typeof loop.startTick === 'number' && typeof loop.endTick === 'number' && loop.endTick > loop.startTick) {
    p.loop = { startTick: Math.max(0, loop.startTick), endTick: loop.endTick };
  }
  return p;
}

export interface FromEnvelopeOptions {
  name?: string;
  id?: string;
  /** Make every track's clip at least this many bars long (e.g. a task's minBars) */
  minBars?: number;
}

/** Is this object a full Project (tracks with clips) rather than a seq envelope? */
export function isProjectLike(v: unknown): boolean {
  const t = (v as { tracks?: unknown[] } | null)?.tracks;
  return Array.isArray(t) && t.length > 0 && t.every((x) => x && typeof x === 'object' && Array.isArray((x as { clips?: unknown }).clips));
}

/**
 * Build a project from a content envelope `{bpm,timeSig,key,tracks:[{instrument,seq,volume?}]}` (also accepts
 * a full Project, which is normalised). Each envelope track becomes one track with one clip at bar 1, as long
 * as its content (rounded up to bars) and at least `minBars`.
 */
export function projectFromEnvelope(env: SnippetEnvelope | Record<string, unknown>, opts: FromEnvelopeOptions = {}): Project {
  if (isProjectLike(env)) {
    const p = normalizeProject(env);
    if (opts.id) p.id = opts.id;
    if (opts.name) p.name = opts.name;
    return p;
  }
  const e = env as SnippetEnvelope & { title?: string; name?: string };
  let timeSig: TimeSig = { num: 4, den: 4 };
  try {
    timeSig = parseTimeSig(e.timeSig);
  } catch {
    /* default */
  }
  const bar = ticksPerBar(timeSig);
  const tracks: Track[] = (Array.isArray(e.tracks) ? e.tracks : []).map((t) => {
    const instrument = isInstrumentId(t.instrument) ? t.instrument : 'piano';
    let notes: NoteEvent[] = [];
    try {
      notes = t.seq ? parseSeq(t.seq, { timeSig }) : [];
    } catch {
      notes = [];
    }
    const end = notes.reduce((a, n) => Math.max(a, n.startTick + n.durationTicks), 0);
    const bars = Math.max(opts.minBars ?? 1, Math.ceil(end / bar) || 1);
    return createTrack(instrument, {
      ...(typeof t.volume === 'number' ? { volume: clamp(t.volume, 0, 1) } : {}),
      clips: [createClip(0, bars * bar, notes, INSTRUMENT_LABELS[instrument])],
    });
  });
  const p: Project = {
    id: opts.id ?? newId('p'),
    name: opts.name ?? e.name ?? e.title ?? 'Snippet',
    bpm: clamp(num(e.bpm, 100), 20, 400),
    timeSig,
    tracks: tracks.length ? tracks : [createTrack('piano', { clips: [createClip(0, (opts.minBars ?? 4) * bar)] })],
  };
  if (typeof e.key === 'string' && isValidKey(e.key)) p.key = e.key;
  const markers = (env as { markers?: unknown }).markers;
  if (Array.isArray(markers)) {
    const n = normalizeProject({ tracks: [], markers }).markers;
    if (n) p.markers = n;
  }
  return p;
}

/** Project → snippet envelope-like playable Snippet (all tracks, ignoring mute/solo). */
export function projectToPlainSnippet(p: Project): Snippet {
  return { bpm: p.bpm, timeSig: p.timeSig, ...(p.key ? { key: p.key } : {}), tracks: p.tracks.map((t) => ({ instrument: t.instrument, events: trackNotes(t), volume: t.volume })) };
}

/** A track's notes in absolute ticks (clip offsets applied, notes past the clip end dropped), sorted. */
export function trackNotes(track: Track): NoteEvent[] {
  const out: NoteEvent[] = [];
  for (const c of track.clips) {
    for (const n of c.notes) {
      if (n.startTick < 0 || n.startTick >= c.lengthTicks) continue;
      out.push({ ...n, startTick: n.startTick + c.startTick, durationTicks: Math.min(n.durationTicks, c.lengthTicks - n.startTick) });
    }
  }
  return out.sort((a, b) => a.startTick - b.startTick || a.midi - b.midi);
}

/** End tick of the last note in the project (0 if empty). */
export function contentEndTick(p: Project): number {
  let end = 0;
  for (const t of p.tracks) for (const n of trackNotes(t)) end = Math.max(end, n.startTick + n.durationTicks);
  return end;
}

/** End tick of the last clip (arrangement length). */
export function clipsEndTick(p: Project): number {
  let end = 0;
  for (const t of p.tracks) for (const c of t.clips) end = Math.max(end, c.startTick + c.lengthTicks);
  return end;
}

/**
 * Length of the music in bars: last note end rounded up to a bar, with a 32nd-note tolerance so a note held a
 * hair past the bar line does not count as an extra bar.
 */
export function projectBars(p: Project): number {
  const end = contentEndTick(p);
  if (end <= 0) return 0;
  const bar = ticksPerBar(p.timeSig);
  return Math.max(1, Math.ceil((end - PPQ / 8) / bar));
}

export function cloneProject<T extends Project>(p: T): T {
  return structuredClone(p);
}

// ---------------- note editing ----------------

/** Quantize note starts (and optionally ends) to a grid in ticks, with strength 0..1. Returns new notes. */
export function quantizeNotes(notes: NoteEvent[], grid: number, strength = 1, opts: { ends?: boolean } = {}): NoteEvent[] {
  if (grid <= 0) return notes.map((n) => ({ ...n }));
  return notes.map((n) => {
    const start = Math.max(0, quantizeTick(n.startTick, grid, strength));
    let dur = n.durationTicks;
    if (opts.ends) {
      const end = quantizeTick(n.startTick + n.durationTicks, grid, strength);
      dur = Math.max(Math.round(grid * (1 - strength)) || 1, end - start);
    }
    return { ...n, startTick: start, durationTicks: Math.max(1, dur) };
  });
}

export function transposeNotes(notes: NoteEvent[], semitones: number): NoteEvent[] {
  return notes.map((n) => ({ ...n, midi: clamp(n.midi + semitones, 0, 127) }));
}

/**
 * MIDI notes of a chord given as a symbol ("Am7", "C/E") or a roman numeral in `key` ("vi", "V7/V"), voiced in
 * close position with the root in the octave starting at `rootOctaveMidi` (default C4 = 60 → root 60..71, lowered
 * an octave above G). Returns null for unknown chords.
 */
export function chordStampMidis(chord: string, key = 'C', rootOctaveMidi = 60): { midis: number[]; symbol: string } | null {
  const s = chord.trim();
  if (!s) return null;
  const parsed = tryParseChordSymbol(s) ?? tryRomanToChord(s, key);
  if (!parsed) return null;
  let rootMidi = rootOctaveMidi + ((parsed.pitchClasses[0]! - (rootOctaveMidi % 12) + 12) % 12);
  if (rootMidi - rootOctaveMidi >= 7) rootMidi -= 12;
  const inversion = 'inversion' in parsed ? Number((parsed as { inversion?: number }).inversion ?? 0) : 0;
  let midis = chordMidi(rootMidi, parsed.quality, inversion);
  if (parsed.bass && inversion === 0) {
    const bassPc = (tryParseChordSymbol(parsed.bass)?.pitchClasses[0]) ?? null;
    if (bassPc !== null) {
      let b = rootMidi - 12 + ((bassPc - (rootMidi % 12) + 12) % 12);
      if (b >= Math.min(...midis)) b -= 12;
      midis = [b, ...midis];
    }
  }
  return { midis, symbol: parsed.symbol };
}

/** Grid sizes offered by the editor (ticks). */
export const GRID_OPTIONS: { label: string; ticks: number }[] = [
  { label: '1 bar', ticks: 0 },
  { label: '1/2', ticks: PPQ * 2 },
  { label: '1/4', ticks: PPQ },
  { label: '1/8', ticks: PPQ / 2 },
  { label: '1/16', ticks: PPQ / 4 },
  { label: '1/32', ticks: PPQ / 8 },
  { label: '1/4T', ticks: (PPQ * 2) / 3 },
  { label: '1/8T', ticks: PPQ / 3 },
  { label: '1/16T', ticks: PPQ / 6 },
];

/** Snap a tick down/nearest to a grid (0 = bar grid of `ts`). */
export function snapTick(tick: number, grid: number, ts: TimeSig, mode: 'nearest' | 'floor' = 'nearest'): number {
  const g = grid > 0 ? grid : ticksPerBar(ts);
  return (mode === 'floor' ? Math.floor(tick / g) : Math.round(tick / g)) * g;
}

export { ticksPerBar, ticksPerBeat, INSTRUMENT_IDS };
