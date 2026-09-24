import { DRUM_MAP, PPQ, RHYTHM_HIT_MIDI, parseTimeSig, type NoteEvent, type Snippet, type SnippetEnvelope, type TimeSig } from '../model.js';
import { cleanNoteName, midiToNote, noteToMidi } from '../theory/notes.js';
import { ticksPerBar } from '../rhythm.js';

/**
 * Seq mini-language (docs/ARCHITECTURE.md):
 *   C4:q  [C4 E4 G4]:w  r:8  C4:q.  C4:8t  C4:q~ C4:q  kick:q  x:8  | bar lines ignored |
 * If `:duration` is omitted, the previous duration is reused (initially `q`).
 * A leading `>` marks an accent (velocity = `accentVelocity`, default 1): `>kick:q`, `>[C4 E4]:h`.
 */

export interface ParseSeqOptions {
  ppq?: number;
  timeSig?: TimeSig | string;
  /** default velocity 0..1 (default 0.8) */
  velocity?: number;
  /** Start tick offset (default 0) */
  offset?: number;
  /** velocity for accented (`>`) tokens (default 1) */
  accentVelocity?: number;
}

export type SeqItemKind = 'note' | 'chord' | 'rest' | 'hit' | 'drum';

export interface SeqItem {
  kind: SeqItemKind;
  /** Written pitches (note names as written, drum names, or "x"); empty for rests */
  names: string[];
  midis: number[];
  startTick: number;
  durationTicks: number;
  /** The duration token as written/implied ("q", "8.", "8t") */
  duration: string;
  /** Tied into the next item */
  tie: boolean;
  /** Accented with a leading `>` */
  accent: boolean;
  /** 0-based index of the token in the source */
  index: number;
}

export interface ParsedSeq {
  items: SeqItem[];
  events: NoteEvent[];
  totalTicks: number;
  /** Number of bars (fractional if incomplete) for the given time signature */
  bars: number;
}

export class SeqParseError extends Error {
  constructor(message: string, public readonly token: string, public readonly position: number) {
    super(`${message} (token "${token}" at ${position})`);
    this.name = 'SeqParseError';
  }
}

const BASE_TICKS: Record<string, number> = { w: 4, h: 2, q: 1, '8': 0.5, '16': 0.25, '32': 0.125, '64': 0.0625 };
const DUR_RE = /^(w|h|q|8|16|32|64)(\.{0,2})(t?)$/;

/** Ticks for a duration token ("q", "q.", "8t", "h.."). Throws on invalid tokens. */
export function durationToTicks(dur: string, ppq = PPQ): number {
  const m = DUR_RE.exec(dur);
  if (!m) throw new Error(`Invalid duration "${dur}" (use w h q 8 16 32 with optional . or t)`);
  let t = BASE_TICKS[m[1]!]! * ppq;
  if (m[2] === '.') t *= 1.5;
  else if (m[2] === '..') t *= 1.75;
  if (m[3] === 't') t = (t * 2) / 3;
  return Math.round(t);
}

export function isDurationToken(dur: string): boolean {
  return DUR_RE.test(dur);
}

interface RawToken {
  text: string;
  pos: number;
}

function tokenize(seq: string): RawToken[] {
  const out: RawToken[] = [];
  let i = 0;
  while (i < seq.length) {
    const c = seq[i]!;
    if (/\s/.test(c) || c === '|') {
      i++;
      continue;
    }
    const start = i;
    if (c === '[' || (c === '>' && seq[i + 1] === '[')) {
      const close = seq.indexOf(']', i);
      if (close < 0) throw new SeqParseError('Unclosed "["', seq.slice(i), i);
      i = close + 1;
      while (i < seq.length && !/\s/.test(seq[i]!) && seq[i] !== '|') i++;
    } else {
      while (i < seq.length && !/\s/.test(seq[i]!) && seq[i] !== '|') i++;
    }
    out.push({ text: seq.slice(start, i), pos: start });
  }
  return out;
}

function resolvePitch(name: string, tok: RawToken): { midi: number; kind: 'note' | 'drum' | 'hit' } {
  const lower = name.toLowerCase();
  if (lower === 'x') return { midi: RHYTHM_HIT_MIDI, kind: 'hit' };
  if (lower in DRUM_MAP) return { midi: DRUM_MAP[lower as keyof typeof DRUM_MAP], kind: 'drum' };
  try {
    const hasOctave = /-?\d$/.test(name);
    return { midi: noteToMidi(hasOctave ? name : name + '4'), kind: 'note' };
  } catch {
    throw new SeqParseError(`Unknown note or drum "${name}"`, tok.text, tok.pos);
  }
}

/** Parse a seq string into items (for notation) and merged events (ties joined). */
export function parseSeqDetailed(seq: string, opts: ParseSeqOptions = {}): ParsedSeq {
  const ppq = opts.ppq ?? PPQ;
  const ts = parseTimeSig(opts.timeSig);
  const velocity = opts.velocity ?? 0.8;
  let tick = opts.offset ?? 0;
  let lastDur = 'q';
  const items: SeqItem[] = [];
  const events: NoteEvent[] = [];
  /** events awaiting a tie continuation, keyed by midi */
  let pendingTies = new Map<number, NoteEvent>();

  tokenize(seq).forEach((tok, index) => {
    let text = tok.text;
    let tie = false;
    let accent = false;
    if (text.startsWith('>')) {
      accent = true;
      text = text.slice(1);
    }
    if (text.endsWith('~')) {
      tie = true;
      text = text.slice(0, -1);
    }
    let head = text;
    let dur = lastDur;
    const colon = text.lastIndexOf(':');
    if (colon >= 0 && colon > text.lastIndexOf(']')) {
      head = text.slice(0, colon);
      dur = text.slice(colon + 1);
      if (!DUR_RE.test(dur)) throw new SeqParseError(`Invalid duration "${dur}"`, tok.text, tok.pos);
    }
    if (!head) throw new SeqParseError('Missing pitch', tok.text, tok.pos);
    lastDur = dur;
    const durationTicks = durationToTicks(dur, ppq);

    let names: string[];
    let kind: SeqItemKind;
    if (head.startsWith('[')) {
      if (!head.endsWith(']')) throw new SeqParseError('Malformed chord', tok.text, tok.pos);
      names = head.slice(1, -1).trim().split(/\s+/).filter(Boolean);
      if (names.length === 0) throw new SeqParseError('Empty chord', tok.text, tok.pos);
      kind = 'chord';
    } else if (head === 'r' || head === 'R') {
      names = [];
      kind = 'rest';
    } else {
      names = [head];
      kind = 'note';
    }

    const midis: number[] = [];
    for (const n of names) {
      const r = resolvePitch(n, tok);
      midis.push(r.midi);
      if (kind === 'note' && r.kind !== 'note') kind = r.kind;
    }
    if (kind === 'rest' && tie) throw new SeqParseError('Rests cannot be tied', tok.text, tok.pos);

    items.push({
      kind,
      names: names.map((n) => (/^[a-gA-G]/.test(n) && !(n.toLowerCase() in DRUM_MAP) && n.toLowerCase() !== 'x' ? cleanNoteName(n) : n.toLowerCase())),
      midis, startTick: tick, durationTicks, duration: dur, tie, accent, index,
    });

    const nextTies = new Map<number, NoteEvent>();
    for (const midi of midis) {
      const pending = pendingTies.get(midi);
      let ev: NoteEvent;
      if (pending && pending.startTick + pending.durationTicks === tick) {
        pending.durationTicks += durationTicks;
        ev = pending;
      } else {
        ev = { midi, startTick: tick, durationTicks, velocity: accent ? (opts.accentVelocity ?? 1) : velocity };
        events.push(ev);
      }
      if (tie) nextTies.set(midi, ev);
    }
    pendingTies = nextTies;
    tick += durationTicks;
  });

  const start = opts.offset ?? 0;
  const totalTicks = tick - start;
  events.sort((a, b) => a.startTick - b.startTick || a.midi - b.midi);
  return { items, events, totalTicks, bars: totalTicks / ticksPerBar(ts, ppq) };
}

/** Parse a seq string into NoteEvents (ties merged). */
export function parseSeq(seq: string, opts: ParseSeqOptions = {}): NoteEvent[] {
  return parseSeqDetailed(seq, opts).events;
}

/** Validate a seq; returns an error message or null. */
export function checkSeq(seq: string): string | null {
  try {
    parseSeqDetailed(seq);
    return null;
  } catch (e) {
    return (e as Error).message;
  }
}

// ---------------- toSeq ----------------

export interface ToSeqOptions {
  ppq?: number;
  /** Spell black keys with flats */
  flats?: boolean;
  /** Use drum names where possible (drum tracks) */
  drums?: boolean;
  /** Treat all events as generic hits "x" (rhythm-only) */
  rhythm?: boolean;
  /** Insert bar lines for this time signature */
  timeSig?: TimeSig | string;
}

/** Duration tokens from longest to shortest (plain, dotted, triplet) with their tick values at `ppq`. */
function durationTable(ppq: number): [string, number][] {
  const toks = ['w', 'h.', 'h', 'q.', 'q', '8.', '8', '16.', '16', '32', 'ht', 'qt', '8t', '16t', '32t', 'w.', 'h..', 'q..'];
  return toks.map((t) => [t, durationToTicks(t, ppq)] as [string, number]).sort((a, b) => b[1] - a[1]);
}

/** Split a tick duration into duration tokens (tied), preferring an exact single token. */
export function ticksToDurations(ticks: number, ppq = PPQ): string[] {
  const table = durationTable(ppq);
  const exact = table.find(([, t]) => t === ticks);
  if (exact) return [exact[0]];
  const plain = table.filter(([tok]) => !tok.endsWith('t') && !tok.includes('..'));
  const out: string[] = [];
  let rest = ticks;
  const min = durationToTicks('32t', ppq);
  while (rest >= min) {
    const fit = plain.find(([, t]) => t <= rest) ?? table.find(([, t]) => t <= rest);
    if (!fit) break;
    out.push(fit[0]);
    rest -= fit[1];
  }
  return out.length ? out : ['32'];
}

const DRUM_BY_MIDI: Record<number, string> = { 36: 'kick', 38: 'snare', 39: 'clap', 42: 'hh', 46: 'ohat', 45: 'tom', 49: 'crash', 51: 'ride' };

/**
 * Serialise events back to a seq string. Supports monophonic lines and block chords (events sharing
 * start and duration). Overlapping events with different durations are emitted as a chord using the
 * shortest duration (polyphony is not representable in the mini-language).
 */
export function toSeq(events: NoteEvent[], opts: ToSeqOptions = {}): string {
  const ppq = opts.ppq ?? PPQ;
  const barTicks = opts.timeSig ? ticksPerBar(parseTimeSig(opts.timeSig), ppq) : 0;
  const sorted = [...events].sort((a, b) => a.startTick - b.startTick || a.midi - b.midi);
  const groups: NoteEvent[][] = [];
  for (const e of sorted) {
    const g = groups[groups.length - 1];
    if (g && g[0]!.startTick === e.startTick) g.push(e);
    else groups.push([e]);
  }
  const tokens: string[] = [];
  let cursor = 0;
  let lastBar = 0;
  const pushBar = (tick: number) => {
    if (!barTicks) return;
    const bar = Math.floor(tick / barTicks);
    while (bar > lastBar) {
      tokens.push('|');
      lastBar++;
    }
  };
  const name = (midi: number) => {
    if (opts.rhythm) return 'x';
    if (opts.drums && DRUM_BY_MIDI[midi]) return DRUM_BY_MIDI[midi]!;
    return midiToNote(midi, { flats: opts.flats ?? false });
  };
  const emit = (head: string, ticks: number, isRest: boolean, start: number, accent = false) => {
    const durs = ticksToDurations(ticks, ppq);
    let t = start;
    durs.forEach((d, i) => {
      pushBar(t);
      const tie = !isRest && i < durs.length - 1 ? '~' : '';
      tokens.push(`${accent && i === 0 ? '>' : ''}${head}:${d}${tie}`);
      t += durationToTicks(d, ppq);
    });
  };
  for (const g of groups) {
    const start = g[0]!.startTick;
    if (start > cursor) emit('r', start - cursor, true, cursor);
    const dur = Math.min(...g.map((e) => e.durationTicks));
    const uniq = [...new Set(g.map((e) => e.midi))];
    const head = opts.rhythm ? 'x' : uniq.length === 1 ? name(uniq[0]!) : `[${uniq.map(name).join(' ')}]`;
    emit(head, dur, false, start, g.some((e) => e.velocity > 0.9));
    cursor = start + dur;
  }
  return tokens.join(' ');
}

// ---------------- envelopes ----------------

/** Parse a content envelope `{bpm,timeSig,key,tracks:[{instrument,seq}]}` into a playable Snippet. */
export function snippetFromEnvelope(env: SnippetEnvelope, ppq = PPQ): Snippet {
  const timeSig = parseTimeSig(env.timeSig);
  return {
    bpm: env.bpm ?? 90,
    timeSig,
    ...(env.key ? { key: env.key } : {}),
    tracks: env.tracks.map((t) => ({
      instrument: t.instrument,
      events: parseSeq(t.seq, { ppq, timeSig }),
      ...(t.volume !== undefined ? { volume: t.volume } : {}),
    })),
  };
}

/** Length in ticks of a snippet (end of last event). */
export function snippetLength(s: Snippet): number {
  let end = 0;
  for (const t of s.tracks) for (const e of t.events) end = Math.max(end, e.startTick + e.durationTicks);
  return end;
}

/** Build a single-track snippet from MIDI notes played one after another (or together when `chord`). */
export function notesToSnippet(midis: number[][], opts: { bpm?: number; instrument?: Snippet['tracks'][number]['instrument']; durationTicks?: number; gapTicks?: number; velocity?: number } = {}): Snippet {
  const dur = opts.durationTicks ?? PPQ;
  const gap = opts.gapTicks ?? 0;
  const events: NoteEvent[] = [];
  let t = 0;
  for (const step of midis) {
    for (const midi of step) events.push({ midi, startTick: t, durationTicks: dur, velocity: opts.velocity ?? 0.8 });
    t += dur + gap;
  }
  return { bpm: opts.bpm ?? 90, timeSig: { num: 4, den: 4 }, tracks: [{ instrument: opts.instrument ?? 'piano', events }] };
}

/** Concatenate snippets in time (same bpm as the first); tracks are appended. */
export function concatSnippets(parts: Snippet[], gapTicks = 0): Snippet {
  const first = parts[0];
  if (!first) return { bpm: 90, timeSig: { num: 4, den: 4 }, tracks: [] };
  const tracks: Snippet['tracks'] = [];
  let offset = 0;
  for (const p of parts) {
    for (const t of p.tracks) tracks.push({ ...t, events: t.events.map((e) => ({ ...e, startTick: e.startTick + offset })) });
    offset += snippetLength(p) + gapTicks;
  }
  return { ...first, tracks };
}
