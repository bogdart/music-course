/**
 * `daw-task` predicates (docs/CONTENT_SCHEMA.md "daw-task.checks"). Pure functions over a Project.
 *
 * Conventions
 * - `track` (0-based index into project.tracks) is honoured by every predicate. Without it, "line" predicates
 *   (ends-on, starts-on, max/min-leap, contour, repetition, has-rest, syncopation, voice-leading) use the first
 *   non-drum track that has notes; note-set predicates (in-key, range, chord-has-seventh, uses-chord) use all
 *   non-drum tracks; note-count uses all tracks; drum-pattern uses the first drum track.
 * - Positions tolerate ±1/32 note (60 ticks) so lightly unquantized recordings still pass.
 * - Keys: a check's `key` wins, `"project"` means the learner's project key, else the project key, else the
 *   task template key, else C.
 */
import { DRUM_MAP, PPQ, type NoteEvent, type Project, type SnippetEnvelope, type Track } from '../model.js';
import { ticksPerBar, ticksPerBeat, ticksToSeconds } from '../rhythm.js';
import { durationToTicks } from '../seq/seq.js';
import { CHORD_INTERVALS, identifyChord, tryParseChordSymbol } from '../theory/chords.js';
import { degreeToPc, parseKey, type Mode } from '../theory/keys.js';
import { midiToNote, noteToMidi, pcToName } from '../theory/notes.js';
import { tryRomanToChord } from '../theory/roman.js';
import { resolveScaleId, SCALE_INTERVALS } from '../theory/scales.js';
import { projectBars, projectFromEnvelope, trackNotes } from './project.js';

export interface DawCheckSpec {
  kind: string;
  track?: number;
  [arg: string]: unknown;
}

export interface CheckContext {
  /** Key used when a check has no `key` (template key); the project key wins over it */
  defaultKey?: string;
  /** Answers to `custom` checks (by check `id`, or by index as a string) */
  selfChecks?: Record<string, boolean>;
}

export interface CheckResult {
  index: number;
  kind: string;
  /** Short human description of what is checked */
  label: string;
  passed: boolean;
  /** Helpful explanation (why it passed / what to fix) */
  message: string;
  /** `custom` checks are self-checked by the learner */
  custom?: boolean;
  id?: string;
  /** Partial measure 0..1 where meaningful (ratio, similarity) */
  value?: number;
}

export interface ChecksSummary {
  results: CheckResult[];
  passed: number;
  total: number;
  /** passed / total (1 when there are no checks) */
  score: number;
  allPassed: boolean;
}

export const TOL = PPQ / 8;

export const CHECK_KINDS = [
  'in-key', 'note-count', 'range', 'bars', 'ends-on', 'starts-on', 'chord-tones-on-beats', 'uses-rhythm', 'max-leap',
  'has-tracks', 'drum-pattern', 'no-parallel-fifths', 'repetition', 'contour', 'custom',
  'has-rest', 'min-leap', 'plays-progression', 'is-transposition', 'voice-leading', 'chord-has-seventh', 'uses-chord',
  'tempo', 'syncopation', 'matches-reference', 'duration-seconds', 'sections',
] as const;
export type CheckKind = (typeof CHECK_KINDS)[number];

// ---------------- helpers ----------------

const isDrum = (t: Track) => t.instrument === 'drums';
const nm = (m: number) => midiToNote(m);
const trackLabel = (i: number, p: Project) => `track ${i + 1}${p.tracks[i] ? ` (${p.tracks[i]!.name})` : ''}`;

function pos(tick: number, p: Project): string {
  const bar = ticksPerBar(p.timeSig);
  const beat = ticksPerBeat(p.timeSig);
  const b = Math.floor(tick / bar);
  const bt = (tick - b * bar) / beat;
  const beatStr = Number.isInteger(bt) ? String(bt + 1) : (bt + 1).toFixed(2).replace(/0+$/, '');
  return `bar ${b + 1} beat ${beatStr}`;
}

function listSome(xs: string[], n = 4): string {
  return xs.length <= n ? xs.join(', ') : `${xs.slice(0, n).join(', ')} … (+${xs.length - n} more)`;
}

class CheckError extends Error {
  constructor(message: string, readonly label?: string) {
    super(message);
  }
}

interface Sel {
  notes: NoteEvent[];
  label: string;
  tracks: Track[];
  index?: number;
}

function selectTrack(p: Project, c: DawCheckSpec, def: 'line' | 'melodic-all' | 'all' | 'drums'): Sel {
  if (typeof c.track === 'number') {
    const t = p.tracks[c.track];
    if (!t) throw new CheckError(`Track ${c.track + 1} doesn't exist — keep the template's tracks in order.`);
    return { notes: trackNotes(t), label: trackLabel(c.track, p), tracks: [t], index: c.track };
  }
  if (def === 'drums') {
    const i = p.tracks.findIndex((t) => isDrum(t));
    if (i < 0) throw new CheckError('Add a drum track.');
    return { notes: trackNotes(p.tracks[i]!), label: trackLabel(i, p), tracks: [p.tracks[i]!], index: i };
  }
  if (def === 'line') {
    const i = p.tracks.findIndex((t) => !isDrum(t) && trackNotes(t).length > 0);
    const j = i >= 0 ? i : p.tracks.findIndex((t) => !isDrum(t));
    if (j < 0) throw new CheckError('Add a melodic (non-drum) track.');
    return { notes: trackNotes(p.tracks[j]!), label: trackLabel(j, p), tracks: [p.tracks[j]!], index: j };
  }
  const tracks = def === 'all' ? p.tracks : p.tracks.filter((t) => !isDrum(t));
  const notes = tracks.flatMap((t) => trackNotes(t)).sort((a, b) => a.startTick - b.startTick || a.midi - b.midi);
  return { notes, label: def === 'all' ? 'the project' : 'the melodic tracks', tracks };
}

function requireNotes(sel: Sel, label: string, what = 'notes'): void {
  if (sel.notes.length === 0) throw new CheckError(`No ${what} in ${sel.label} yet.`, label);
}

/** Group notes whose starts are within TOL of the group's first note. */
export function onsetGroups(notes: NoteEvent[]): NoteEvent[][] {
  const sorted = [...notes].sort((a, b) => a.startTick - b.startTick || a.midi - b.midi);
  const groups: NoteEvent[][] = [];
  for (const n of sorted) {
    const g = groups[groups.length - 1];
    if (g && n.startTick - g[0]!.startTick <= TOL / 2) g.push(n);
    else groups.push([n]);
  }
  return groups;
}

/** Melody ("skyline"): highest note of each onset group. */
export function topLine(notes: NoteEvent[]): NoteEvent[] {
  return onsetGroups(notes).map((g) => g.reduce((a, b) => (b.midi > a.midi ? b : a)));
}

/** Lowest note of each onset group. */
export function bottomLine(notes: NoteEvent[]): NoteEvent[] {
  return onsetGroups(notes).map((g) => g.reduce((a, b) => (b.midi < a.midi ? b : a)));
}

function soundingAt(notes: NoteEvent[], t: number): NoteEvent[] {
  return notes.filter((n) => n.startTick <= t + TOL && n.startTick + n.durationTicks > t + TOL);
}

function keyOf(p: Project, c: DawCheckSpec, ctx: CheckContext): { key: string; tonicPc: number; mode: Mode; name: string } {
  const raw = typeof c.key === 'string' ? c.key : undefined;
  const key = raw && raw !== 'project' ? raw : (p.key ?? ctx.defaultKey ?? 'C');
  const k = parseKey(key);
  return { key, tonicPc: k.tonicPc, mode: k.mode, name: k.name };
}

function degreeLabel(midi: number, tonicPc: number, mode: Mode): string {
  const st = (((midi % 12) - tonicPc) % 12 + 12) % 12;
  const labels = mode === 'major'
    ? ['1', 'b2', '2', 'b3', '3', '4', '#4', '5', 'b6', '6', 'b7', '7']
    : ['1', 'b2', '2', '3', '#3', '4', '#4', '5', '6', '#6', '7', '#7'];
  return labels[st]!;
}

function chordFor(symbolOrRoman: string, key: string): { pcs: number[]; symbol: string; rootPc: number } | null {
  const c = tryRomanToChord(symbolOrRoman, key) ?? tryParseChordSymbol(symbolOrRoman);
  return c ? { pcs: c.pitchClasses, symbol: c.symbol, rootPc: c.pitchClasses[0]! } : null;
}

const numArg = (v: unknown, d: number) => (typeof v === 'number' && Number.isFinite(v) ? v : d);
const strArr = (v: unknown): string[] => (Array.isArray(v) ? v.map(String) : typeof v === 'string' ? [v] : []);
const numArr = (v: unknown): number[] => (Array.isArray(v) ? v.map(Number).filter((x) => Number.isFinite(x)) : typeof v === 'number' ? [v] : []);

function durTicks(tok: string): number | null {
  try {
    return durationToTicks(tok.trim());
  } catch {
    return null;
  }
}

const DRUM_ALIASES: Record<string, string> = { hh: 'hihat', hat: 'hihat', 'closed-hat': 'hihat', 'open-hat': 'ohat', openhat: 'ohat', bd: 'kick', sd: 'snare' };
function drumMidi(name: string): number | null {
  const n = name.toLowerCase().trim();
  const canon = DRUM_ALIASES[n] ?? n;
  const m = (DRUM_MAP as Record<string, number>)[canon];
  return m ?? null;
}

// ---------------- matching (transposition / reference) ----------------

interface MatchOpts {
  /** added to b's pitch before comparing */
  semitones?: number;
  /** added to b's ticks before comparing */
  offset?: number;
  pitch: 'exact' | 'pc';
  tol: number;
}

/** Greedy one-to-one matching of notes a ↔ b; returns number of matched pairs. */
export function matchNotes(a: NoteEvent[], b: NoteEvent[], o: MatchOpts): number {
  const used = new Set<number>();
  let matched = 0;
  const semi = o.semitones ?? 0;
  const off = o.offset ?? 0;
  for (const x of a) {
    let best = -1;
    let bestD = Infinity;
    b.forEach((y, j) => {
      if (used.has(j)) return;
      const py = y.midi + semi;
      const same = o.pitch === 'exact' ? py === x.midi : ((py - x.midi) % 12 + 12) % 12 === 0;
      if (!same) return;
      const d = Math.abs(y.startTick + off - x.startTick);
      if (d <= o.tol && d < bestD) {
        bestD = d;
        best = j;
      }
    });
    if (best >= 0) {
      used.add(best);
      matched++;
    }
  }
  return matched;
}

function similarity(a: NoteEvent[], b: NoteEvent[], o: MatchOpts): number {
  const n = Math.max(a.length, b.length);
  return n === 0 ? 1 : matchNotes(a, b, o) / n;
}

// ---------------- predicate implementations ----------------

type Impl = (p: Project, c: DawCheckSpec, ctx: CheckContext) => { passed: boolean; message: string; label: string; value?: number };

const impls: Record<CheckKind, Impl> = {
  'in-key': (p, c, ctx) => {
    const k = keyOf(p, c, ctx);
    const scaleId = typeof c.scale === 'string' ? resolveScaleId(c.scale) : k.mode === 'minor' ? 'natural-minor' : 'major';
    const pcs = new Set(SCALE_INTERVALS[scaleId].map((i) => (k.tonicPc + i) % 12));
    const sel = selectTrack(p, c, 'melodic-all');
    const label = `Only ${pcToName(k.tonicPc)} ${scaleId.replace('-', ' ')} notes in ${sel.label}${c.allowPassing ? ' (short passing notes allowed)' : ''}`;
    requireNotes(sel, label);
    const inKey = (m: number) => pcs.has(((m % 12) + 12) % 12);
    // passing tone: ≤ 1 beat long, stepwise (≤ 2 semitones) between in-key neighbours of the same line
    const line = [...sel.notes].sort((a, b) => a.startTick - b.startTick || a.midi - b.midi);
    const bad: string[] = [];
    line.forEach((n, i) => {
      if (inKey(n.midi)) return;
      if (c.allowPassing) {
        const prev = line[i - 1];
        const next = line[i + 1];
        const passing = n.durationTicks <= ticksPerBeat(p.timeSig) + TOL && !!prev && !!next && inKey(prev.midi) && inKey(next.midi)
          && Math.abs(prev.midi - n.midi) <= 2 && Math.abs(next.midi - n.midi) <= 2;
        if (passing) return;
      }
      bad.push(`${nm(n.midi)} at ${pos(n.startTick, p)}`);
    });
    return bad.length === 0
      ? { passed: true, label, message: `All ${sel.notes.length} notes fit ${k.key === p.key ? 'your key' : pcToName(k.tonicPc)} ${scaleId.replace('-', ' ')}.` }
      : { passed: false, label, message: `${bad.length} note${bad.length > 1 ? 's are' : ' is'} outside the scale: ${listSome(bad)}.` };
  },

  'note-count': (p, c) => {
    const sel = selectTrack(p, c, 'all');
    const min = numArg(c.min, 0);
    const max = numArg(c.max, Infinity);
    const n = sel.notes.length;
    const label = `${min === max ? `Exactly ${min}` : Number.isFinite(max) ? `${min}–${max}` : `At least ${min}`} notes in ${sel.label}`;
    if (n < min) return { passed: false, label, message: `${n} note${n === 1 ? '' : 's'} so far — add at least ${min - n} more.` };
    if (n > max) return { passed: false, label, message: `${n} notes — that's ${n - max} too many (max ${max}). Simplify.` };
    return { passed: true, label, message: `${n} notes. ✓` };
  },

  range: (p, c) => {
    const sel = selectTrack(p, c, 'melodic-all');
    const low = typeof c.low === 'string' ? noteToMidi(c.low) : 0;
    const high = typeof c.high === 'string' ? noteToMidi(c.high) : 127;
    const label = `Notes between ${nm(low)} and ${nm(high)} in ${sel.label}`;
    requireNotes(sel, label);
    const below = sel.notes.filter((n) => n.midi < low);
    const above = sel.notes.filter((n) => n.midi > high);
    if (!below.length && !above.length) return { passed: true, label, message: 'All notes are in range.' };
    const parts: string[] = [];
    if (below.length) parts.push(`${below.length} below ${nm(low)} (lowest ${nm(Math.min(...below.map((n) => n.midi)))})`);
    if (above.length) parts.push(`${above.length} above ${nm(high)} (highest ${nm(Math.max(...above.map((n) => n.midi)))})`);
    return { passed: false, label, message: `Out of range: ${parts.join('; ')}. Try transposing by an octave.` };
  },

  bars: (p, c) => {
    const min = numArg(c.min, 1);
    const max = numArg(c.max, Infinity);
    const bars = projectBars(p);
    const label = Number.isFinite(max) ? (min === max ? `Exactly ${min} bars long` : `${min}–${max} bars long`) : `At least ${min} bars long`;
    if (bars < min) return { passed: false, label, message: bars === 0 ? 'The project is empty.' : `The music lasts ${bars} bar${bars > 1 ? 's' : ''}; it needs ${min}.` };
    if (bars > max) return { passed: false, label, message: `The music lasts ${bars} bars; the limit is ${max}. Delete or shorten the extra bars.` };
    return { passed: true, label, message: `${bars} bars. ✓` };
  },

  'ends-on': (p, c, ctx) => {
    const k = keyOf(p, c, ctx);
    const sel = selectTrack(p, c, 'line');
    const deg = c.degree ?? 1;
    const target = degreeToPc(k.key, deg as string | number);
    const label = `${sel.label} ends on degree ${deg} (${pcToName(target)})`;
    requireNotes(sel, label);
    const last = onsetGroups(sel.notes).at(-1)!;
    const cands = [Math.max(...last.map((n) => n.midi)), Math.min(...last.map((n) => n.midi))];
    const ok = cands.some((m) => ((m % 12) + 12) % 12 === target);
    return ok
      ? { passed: true, label, message: `Ends on ${pcToName(target)}. ✓` }
      : { passed: false, label, message: `The last note is ${nm(cands[0]!)} (degree ${degreeLabel(cands[0]!, k.tonicPc, k.mode)}); end on ${pcToName(target)} instead.` };
  },

  'starts-on': (p, c, ctx) => {
    const k = keyOf(p, c, ctx);
    const sel = selectTrack(p, c, 'line');
    const degs = (Array.isArray(c.degrees) ? c.degrees : [c.degree ?? 1]) as (string | number)[];
    const targets = degs.map((d) => degreeToPc(k.key, d));
    const label = `${sel.label} starts on degree ${degs.join('/')}`;
    requireNotes(sel, label);
    const first = onsetGroups(sel.notes)[0]!;
    const cands = [Math.max(...first.map((n) => n.midi)), Math.min(...first.map((n) => n.midi))];
    const ok = cands.some((m) => targets.includes(((m % 12) + 12) % 12));
    return ok
      ? { passed: true, label, message: 'Good starting note. ✓' }
      : { passed: false, label, message: `It starts on ${nm(cands[0]!)} (degree ${degreeLabel(cands[0]!, k.tonicPc, k.mode)}); start on ${targets.map((t) => pcToName(t)).join(' or ')}.` };
  },

  'chord-tones-on-beats': (p, c, ctx) => {
    const k = keyOf(p, c, ctx);
    const sel = selectTrack(p, c, 'line');
    const beats = numArr(c.beats).length ? numArr(c.beats) : [1];
    const prog = strArr(c.progression);
    const per = Math.max(1, numArg(c.barsPerChord, 1));
    const minRatio = numArg(c.minRatio, 0.75);
    const label = `Chord tones on beat${beats.length > 1 ? 's' : ''} ${beats.join(', ')} over ${prog.join('–')} (${sel.label})`;
    if (!prog.length) throw new CheckError('No progression given.');
    requireNotes(sel, label);
    const chords = prog.map((r) => chordFor(r, k.key));
    const barT = ticksPerBar(p.timeSig);
    const beatT = ticksPerBeat(p.timeSig);
    const bars = Math.max(projectBars(p), 1);
    let good = 0;
    let total = 0;
    const off: string[] = [];
    for (let b = 0; b < bars; b++) {
      const ci = Math.floor(b / per) % prog.length; // progression loops
      const ch = chords[ci];
      if (!ch) continue;
      for (const beat of beats) {
        const t = b * barT + (beat - 1) * beatT;
        for (const n of soundingAt(sel.notes, t)) {
          total++;
          if (ch.pcs.includes(((n.midi % 12) + 12) % 12)) good++;
          else off.push(`${nm(n.midi)} at ${pos(t, p)} over ${ch.symbol}`);
        }
      }
    }
    if (total === 0) return { passed: false, label, message: `No notes sound on beats ${beats.join(', ')}.`, value: 0 };
    const ratio = good / total;
    const pct = Math.round(ratio * 100);
    return ratio >= minRatio
      ? { passed: true, label, message: `${good}/${total} (${pct}%) are chord tones. ✓`, value: ratio }
      : { passed: false, label, message: `${good}/${total} (${pct}%) are chord tones; need ${Math.round(minRatio * 100)}%. Not in the chord: ${listSome(off)}.`, value: ratio };
  },

  'uses-rhythm': (p, c) => {
    const sel = selectTrack(p, c, 'line');
    const values = strArr(c.values);
    const minDistinct = numArg(c.minDistinct, 1);
    const label = values.length === 1 ? `Uses ${values[0]} notes (${sel.label})` : `Uses ${minDistinct >= values.length ? 'all of' : `${minDistinct}+ of`} ${values.join(' ')} rhythms (${sel.label})`;
    requireNotes(sel, label);
    const groups = onsetGroups(sel.notes);
    const measured: number[] = [];
    groups.forEach((g, i) => {
      measured.push(Math.min(...g.map((n) => n.durationTicks)));
      const next = groups[i + 1];
      if (next) measured.push(next[0]!.startTick - g[0]!.startTick);
    });
    const found = values.filter((v) => {
      const t = durTicks(v);
      if (!t) return false;
      const tol = Math.max(10, t * 0.08);
      return measured.some((m) => Math.abs(m - t) <= tol);
    });
    const missing = values.filter((v) => !found.includes(v));
    return found.length >= minDistinct
      ? { passed: true, label, message: `Found ${found.join(' ')}. ✓` }
      : { passed: false, label, message: `Found ${found.length ? found.join(' ') : 'none'}; add ${missing.slice(0, minDistinct - found.length).join(' / ')} note values.` };
  },

  'max-leap': (p, c) => {
    const sel = selectTrack(p, c, 'line');
    const max = numArg(c.semitones, 7);
    const label = `No leap bigger than ${max} semitones (${sel.label})`;
    requireNotes(sel, label);
    const line = topLine(sel.notes);
    const bad: string[] = [];
    for (let i = 1; i < line.length; i++) {
      const d = Math.abs(line[i]!.midi - line[i - 1]!.midi);
      if (d > max) bad.push(`${nm(line[i - 1]!.midi)}→${nm(line[i]!.midi)} (${d}) at ${pos(line[i]!.startTick, p)}`);
    }
    return bad.length === 0
      ? { passed: true, label, message: 'Smooth enough. ✓' }
      : { passed: false, label, message: `Too-wide leaps: ${listSome(bad, 3)}.` };
  },

  'min-leap': (p, c) => {
    const sel = selectTrack(p, c, 'line');
    const min = numArg(c.semitones, 5);
    const count = numArg(c.min ?? c.count, 1);
    const label = `At least ${count} leap${count > 1 ? 's' : ''} of ${min}+ semitones (${sel.label})`;
    requireNotes(sel, label);
    const line = topLine(sel.notes);
    let n = 0;
    for (let i = 1; i < line.length; i++) if (Math.abs(line[i]!.midi - line[i - 1]!.midi) >= min) n++;
    return n >= count
      ? { passed: true, label, message: `${n} leap${n > 1 ? 's' : ''} found. ✓` }
      : { passed: false, label, message: `${n} leap${n === 1 ? '' : 's'} of ${min}+ semitones; add ${count - n} (e.g. jump a ${min >= 7 ? 'fifth' : 'fourth'}).` };
  },

  'has-tracks': (p, c) => {
    const want = strArr(c.instruments);
    const label = `Tracks with notes: ${want.join(', ')}`;
    const avail = p.tracks.filter((t) => trackNotes(t).length > 0).map((t) => t.instrument as string);
    const missing: string[] = [];
    for (const w of want) {
      const i = avail.indexOf(w);
      if (i >= 0) avail.splice(i, 1);
      else missing.push(w);
    }
    return missing.length === 0
      ? { passed: true, label, message: 'All required parts have notes. ✓' }
      : { passed: false, label, message: `Missing (or empty): ${missing.join(', ')}.` };
  },

  'drum-pattern': (p, c) => {
    const sel = selectTrack(p, c, 'drums');
    const requires = strArr(c.requires);
    const mode = c.mode === 'exact' ? 'exact' : 'at-least';
    const minRatio = numArg(c.minRatio, 0.75);
    const barT = ticksPerBar(p.timeSig);
    const beatT = ticksPerBeat(p.timeSig);
    // expectations: drum → beats (1-based, fractional allowed) or grid token
    const on: Record<string, number[] | string> = {};
    const addOn = (drum: string, v: unknown) => {
      if (v === undefined) return;
      on[drum] = typeof v === 'string' ? v : numArr(v);
    };
    addOn('kick', c.kickOnBeats);
    addOn('snare', c.snareOnBeats);
    addOn('clap', c.clapOn ?? c.clapOnBeats);
    addOn('hihat', c.hatOn ?? c.hatOnBeats);
    if (c.on && typeof c.on === 'object') for (const [d, v] of Object.entries(c.on as Record<string, unknown>)) addOn(d, v);
    const forbid = (c.forbid && typeof c.forbid === 'object' ? c.forbid : {}) as Record<string, unknown>;
    const parts = [requires.length ? `has ${requires.join(', ')}` : '', ...Object.entries(on).map(([d, v]) => `${d} on ${Array.isArray(v) ? v.join(',') : v}`),
      ...Object.entries(forbid).map(([d, v]) => `no ${d} on ${numArr(v).join(',')}`)].filter(Boolean);
    const label = `Drums (${sel.label}): ${parts.join('; ')}${mode === 'exact' ? ' (exactly)' : ''}`;
    requireNotes(sel, label, 'drum hits');
    const hitsOf = (drum: string) => {
      const m = drumMidi(drum);
      if (m === null) throw new CheckError(`Unknown drum "${drum}".`);
      // hihat accepts open hat too for "requires"-style presence only when asked for "hat"
      return sel.notes.filter((n) => n.midi === m);
    };
    const errors: string[] = [];
    for (const r of requires) if (hitsOf(r).length === 0) errors.push(`no ${r}`);

    let from = 0;
    let to = Math.max(projectBars(p), 1) - 1;
    const range = numArr(c.bars);
    if (range.length === 2) {
      from = Math.max(0, range[0]! - 1);
      to = Math.max(from, range[1]! - 1);
    }
    const barsWithDrums: number[] = [];
    for (let b = from; b <= to; b++) if (sel.notes.some((n) => n.startTick >= b * barT - TOL && n.startTick < (b + 1) * barT - TOL)) barsWithDrums.push(b);
    const positionsFor = (spec: number[] | string): number[] => {
      if (Array.isArray(spec)) return spec.map((bt) => (bt - 1) * beatT);
      const grid = spec === 'offbeats' ? beatT : (durTicks(spec) ?? beatT);
      const out: number[] = [];
      for (let t = spec === 'offbeats' ? beatT / 2 : 0; t < barT - 1; t += grid) out.push(t);
      return out;
    };
    const has = (hits: NoteEvent[], t: number) => hits.some((n) => Math.abs(n.startTick - t) <= TOL);
    for (const [drum, spec] of Object.entries(on)) {
      const hits = hitsOf(drum);
      const offs = positionsFor(spec);
      let okBars = 0;
      const badBars: number[] = [];
      for (const b of barsWithDrums) {
        const base = b * barT;
        let ok = offs.every((o) => has(hits, base + o));
        if (ok && mode === 'exact') {
          const inBar = hits.filter((n) => n.startTick >= base - TOL && n.startTick < base + barT - TOL);
          ok = inBar.every((n) => offs.some((o) => Math.abs(n.startTick - base - o) <= TOL));
        }
        if (ok) okBars++;
        else badBars.push(b + 1);
      }
      const ratio = barsWithDrums.length ? okBars / barsWithDrums.length : 0;
      if (ratio < minRatio) errors.push(`${drum} ${mode === 'exact' ? 'only ' : ''}on ${Array.isArray(spec) ? `beat ${spec.join(' & ')}` : spec} is missing in bar${badBars.length > 1 ? 's' : ''} ${listSome(badBars.map(String), 6)}`);
    }
    for (const [drum, v] of Object.entries(forbid)) {
      const hits = hitsOf(drum);
      const offs = numArr(v).map((bt) => (bt - 1) * beatT);
      const badBars = barsWithDrums.filter((b) => offs.some((o) => has(hits, b * barT + o))).map((b) => b + 1);
      if (badBars.length) errors.push(`${drum} should not play on beat ${numArr(v).join(' & ')} (bar ${listSome(badBars.map(String), 6)})`);
    }
    return errors.length === 0
      ? { passed: true, label, message: 'Groove matches. ✓' }
      : { passed: false, label, message: `${errors.join('; ')}.` };
  },

  'no-parallel-fifths': (p, c) => {
    const ts = numArr(c.tracks);
    const ia = ts[0] ?? c.track ?? 0;
    const ib = ts[1] ?? ts[0] ?? 1;
    const ta = p.tracks[ia as number];
    const tb = p.tracks[ib];
    const label = `No parallel fifths between track ${Number(ia) + 1} and track ${ib + 1}${c.octaves ? ' (or octaves)' : ''}`;
    if (!ta || !tb) throw new CheckError('Both tracks must exist.');
    const na = trackNotes(ta);
    const nb = trackNotes(tb);
    if (!na.length || !nb.length) throw new CheckError('Both tracks need notes.');
    const times = [...new Set([...na, ...nb].map((n) => n.startTick))].sort((a, b) => a - b);
    const pairs: { t: number; a: number; b: number }[] = [];
    for (const t of times) {
      const sa = soundingAt(na, t - TOL + 1);
      const sb = soundingAt(nb, t - TOL + 1);
      if (!sa.length || !sb.length) continue;
      const a = Math.max(...sa.map((n) => n.midi));
      const b = Math.min(...sb.map((n) => n.midi));
      const prev = pairs[pairs.length - 1];
      if (prev && prev.a === a && prev.b === b) continue;
      pairs.push({ t, a, b });
    }
    const bad: string[] = [];
    const perfect = (x: number) => {
      const iv = ((x % 12) + 12) % 12;
      return iv === 7 || (c.octaves === true && iv === 0);
    };
    for (let i = 1; i < pairs.length; i++) {
      const p0 = pairs[i - 1]!;
      const p1 = pairs[i]!;
      const da = p1.a - p0.a;
      const db = p1.b - p0.b;
      if (da === 0 || db === 0 || Math.sign(da) !== Math.sign(db)) continue;
      if (perfect(p0.a - p0.b) && perfect(p1.a - p1.b)) bad.push(`${pos(p1.t, p)} (${nm(p0.b)}/${nm(p0.a)} → ${nm(p1.b)}/${nm(p1.a)})`);
    }
    return bad.length === 0
      ? { passed: true, label, message: 'No parallel fifths. ✓' }
      : { passed: false, label, message: `Parallel fifths at ${listSome(bad, 3)}. Move one voice in contrary motion.` };
  },

  repetition: (p, c) => {
    const sel = selectTrack(p, c, 'line');
    const motifBars = Math.max(1, numArg(c.motifBars, 1));
    const minRepeats = numArg(c.minRepeats, 2);
    const transposed = c.allowTransposed === true;
    const minSim = numArg(c.minSimilarity, 0.8);
    const label = `A ${motifBars}-bar motif heard ${minRepeats}+ times${transposed ? ' (transposition OK)' : ''} (${sel.label})`;
    requireNotes(sel, label);
    const len = motifBars * ticksPerBar(p.timeSig);
    const chunks: NoteEvent[][] = [];
    const nChunks = Math.ceil(projectBars(p) / motifBars);
    for (let i = 0; i < nChunks; i++) {
      const s = i * len;
      chunks.push(sel.notes.filter((n) => n.startTick >= s - TOL / 2 && n.startTick < s + len - TOL / 2).map((n) => ({ ...n, startTick: n.startTick - s })));
    }
    const same = (a: NoteEvent[], b: NoteEvent[]) => {
      if (!a.length || !b.length) return false;
      const shifts = transposed ? Array.from({ length: 25 }, (_, i) => i - 12) : [0];
      return shifts.some((s) => similarity(a, b, { semitones: s, pitch: 'exact', tol: TOL }) >= minSim);
    };
    let best = 0;
    let bestAt = -1;
    chunks.forEach((a, i) => {
      if (!a.length) return;
      const n = chunks.filter((b) => same(a, b)).length;
      if (n > best) {
        best = n;
        bestAt = i;
      }
    });
    return best >= minRepeats
      ? { passed: true, label, message: `The motif from bar ${bestAt * motifBars + 1} appears ${best} times. ✓` }
      : { passed: false, label, message: `The most-repeated ${motifBars}-bar idea appears ${best}×; repeat it at least ${minRepeats}× (copy it with Ctrl+D${transposed ? ', optionally transposed' : ''}).` };
  },

  contour: (p, c) => {
    const sel = selectTrack(p, c, 'line');
    const shape = String(c.shape ?? 'arch');
    const label = `Melodic shape: ${shape} (${sel.label})`;
    requireNotes(sel, label);
    const ps: number[] = [];
    for (const n of topLine(sel.notes)) if (ps[ps.length - 1] !== n.midi) ps.push(n.midi);
    if (ps.length < 3) return { passed: false, label, message: 'Too few different notes to have a shape.' };
    const first = ps[0]!;
    const last = ps[ps.length - 1]!;
    const hi = Math.max(...ps);
    const lo = Math.min(...ps);
    const iHi = ps.indexOf(hi);
    const iLo = ps.indexOf(lo);
    const n = ps.length;
    // least-squares slope over note index
    const mx = (n - 1) / 2;
    const my = ps.reduce((a, b) => a + b, 0) / n;
    const slope = ps.reduce((a, y, i) => a + (i - mx) * (y - my), 0) / ps.reduce((a, _, i) => a + (i - mx) ** 2, 0);
    let changes = 0;
    let dir = 0;
    for (let i = 1; i < n; i++) {
      const d = Math.sign(ps[i]! - ps[i - 1]!);
      if (d && dir && d !== dir) changes++;
      if (d) dir = d;
    }
    const interior = (i: number) => i > 0 && i < n - 1 && i >= Math.floor(n * 0.15) && i <= Math.ceil(n * 0.85);
    let ok = false;
    let hint = '';
    switch (shape) {
      case 'ascending':
        ok = last - first >= 3 && slope > 0;
        hint = `It goes from ${nm(first)} to ${nm(last)}; let the line climb overall and finish higher.`;
        break;
      case 'descending':
        ok = first - last >= 3 && slope < 0;
        hint = `It goes from ${nm(first)} to ${nm(last)}; let the line fall overall and finish lower.`;
        break;
      case 'arch':
        ok = interior(iHi) && hi - first >= 2 && hi - last >= 2;
        hint = `The highest note (${nm(hi)}) should come in the middle, above both the first and last notes.`;
        break;
      case 'valley':
      case 'inverted-arch':
        ok = interior(iLo) && first - lo >= 2 && last - lo >= 2;
        hint = `The lowest note (${nm(lo)}) should come in the middle.`;
        break;
      case 'wave':
        ok = changes >= 3;
        hint = `The line changes direction ${changes}×; a wave goes up and down at least twice.`;
        break;
      default:
        throw new CheckError(`Unknown shape "${shape}".`);
    }
    return ok ? { passed: true, label, message: `Shape looks ${shape}. ✓` } : { passed: false, label, message: hint };
  },

  custom: (_p, c) => ({ passed: false, label: String(c.note ?? c.id ?? 'Self-check'), message: 'Self-check: tick the box when you are satisfied.' }),

  'has-rest': (p, c) => {
    const sel = selectTrack(p, c, 'line');
    const minDur = durTicks(String(c.minDuration ?? '8')) ?? PPQ / 2;
    const count = numArg(c.min, 1);
    const label = `At least ${count} rest${count > 1 ? 's' : ''} (${sel.label})`;
    requireNotes(sel, label);
    const sorted = [...sel.notes].sort((a, b) => a.startTick - b.startTick);
    let covered = sorted[0]!.startTick;
    let rests = 0;
    for (const n of sorted) {
      if (n.startTick - covered >= minDur - TOL) rests++;
      covered = Math.max(covered, n.startTick + n.durationTicks);
    }
    const end = Math.max(projectBars(p), 1) * ticksPerBar(p.timeSig);
    if (end - covered >= minDur - TOL) rests++;
    return rests >= count
      ? { passed: true, label, message: `${rests} rest${rests > 1 ? 's' : ''} — the music breathes. ✓` }
      : { passed: false, label, message: `No gap of at least ${String(c.minDuration ?? '8')} found; leave some silence between phrases.` };
  },

  'plays-progression': (p, c, ctx) => {
    const k = keyOf(p, c, ctx);
    const sel = selectTrack(p, c, 'line');
    const prog = strArr(c.progression);
    const per = Math.max(1, numArg(c.barsPerChord, 1));
    const minRatio = numArg(c.minRatio, 0.75);
    const mode = c.mode === 'roots' || c.mode === 'chords' ? c.mode : sel.tracks[0]?.instrument === 'bass' ? 'roots' : 'chords';
    const label = `${sel.label} plays ${prog.join('–')}${mode === 'roots' ? ' (roots in the bass)' : ''}`;
    if (!prog.length) throw new CheckError('No progression given.');
    requireNotes(sel, label);
    const chords = prog.map((r) => chordFor(r, k.key));
    const segT = per * ticksPerBar(p.timeSig);
    const nSeg = Math.max(prog.length, Math.ceil(projectBars(p) / per));
    let ok = 0;
    const bad: string[] = [];
    for (let s = 0; s < nSeg; s++) {
      const ch = chords[s % prog.length];
      if (!ch) continue;
      const t0 = s * segT;
      const inSeg = sel.notes.filter((n) => (n.startTick >= t0 - TOL && n.startTick < t0 + segT - TOL) || (n.startTick < t0 && n.startTick + n.durationTicks > t0 + TOL));
      const pcs = new Set(inSeg.map((n) => ((n.midi % 12) + 12) % 12));
      let pass: boolean;
      if (mode === 'roots') {
        const first = inSeg.length ? inSeg.reduce((a, b) => (b.startTick < a.startTick || (b.startTick === a.startTick && b.midi < a.midi) ? b : a)) : null;
        pass = !!first && ((first.midi % 12) + 12) % 12 === ch.rootPc;
      } else {
        const tones = ch.pcs.filter((x) => pcs.has(x)).length;
        pass = pcs.has(ch.rootPc) && tones >= Math.min(3, ch.pcs.length);
      }
      if (pass) ok++;
      else bad.push(`bar ${s * per + 1} (${ch.symbol})`);
    }
    const ratio = ok / nSeg;
    return ratio >= minRatio
      ? { passed: true, label, message: `${ok}/${nSeg} chords played. ✓`, value: ratio }
      : { passed: false, label, message: `${ok}/${nSeg} chords found; check ${listSome(bad)}${mode === 'roots' ? ' — start each chord with its root' : ' — play root, third and fifth'}.`, value: ratio };
  },

  'is-transposition': (p, c) => {
    const ofIdx = numArg(c.of ?? c.source, 0);
    const src = p.tracks[ofIdx];
    const sel = selectTrack(p, { ...c, track: typeof c.track === 'number' ? c.track : 1 }, 'line');
    const minRatio = numArg(c.minRatio, 0.9);
    const want = typeof c.semitones === 'number' ? c.semitones : null;
    const octaveAny = c.octave === 'any';
    const label = `${sel.label} is a transposition of track ${ofIdx + 1}${want !== null ? ` by ${want} semitones` : ''}`;
    if (!src) throw new CheckError(`Track ${ofIdx + 1} doesn't exist.`);
    const a = trackNotes(src);
    if (!a.length) throw new CheckError(`Track ${ofIdx + 1} has no notes.`);
    requireNotes(sel, label);
    const b = sel.notes;
    const offset = c.sameTime === true ? 0 : a[0]!.startTick - b[0]!.startTick;
    // candidate semitone shifts: requested, else the first-note difference (and its octave neighbours)
    const base = a[0]!.midi - b[0]!.midi; // b + base ≈ a
    const shifts = want !== null ? [-want] : [base, base - 12, base + 12];
    let best = 0;
    let bestShift = shifts[0]!;
    for (const s of shifts) {
      const sim = similarity(a, b, { semitones: s, offset, pitch: octaveAny ? 'pc' : 'exact', tol: TOL });
      if (sim > best) {
        best = sim;
        bestShift = s;
      }
    }
    const semis = -bestShift;
    if (want === null && semis === 0 && c.allowSame !== true && best >= minRatio) {
      return { passed: false, label, message: 'It is an exact copy — move it to another key.', value: best };
    }
    return best >= minRatio
      ? { passed: true, label, message: `Same melody moved ${semis > 0 ? 'up' : 'down'} ${Math.abs(semis)} semitones (${Math.round(best * 100)}% match). ✓`, value: best }
      : { passed: false, label, message: `Only ${Math.round(best * 100)}% of the notes match a transposed copy of track ${ofIdx + 1}; keep the same rhythm and intervals.`, value: best };
  },

  'voice-leading': (p, c) => {
    const sel = selectTrack(p, c, 'line');
    const maxMove = numArg(c.maxMove, 2);
    const minRatio = numArg(c.minRatio, 1);
    const label = `Smooth voice leading: voices move ≤ ${maxMove} semitones (${sel.label})`;
    requireNotes(sel, label);
    const chords = onsetGroups(sel.notes).filter((g) => g.length >= 2).map((g) => [...new Set(g.map((n) => n.midi))].sort((a, b) => a - b));
    if (chords.length < 2) throw new CheckError(`Play at least two chords in ${sel.label}.`);
    let ok = 0;
    let total = 0;
    const bad: string[] = [];
    const groups = onsetGroups(sel.notes).filter((g) => g.length >= 2);
    for (let i = 1; i < chords.length; i++) {
      const a = chords[i - 1]!;
      const b = chords[i]!;
      if (a.join() === b.join()) continue;
      total++;
      let move: number;
      if (a.length === b.length) move = Math.max(...a.map((x, j) => Math.abs(b[j]! - x)));
      else move = Math.max(...b.map((x) => Math.min(...a.map((y) => Math.abs(x - y)))));
      if (move <= maxMove) ok++;
      else bad.push(`${pos(groups[i]![0]!.startTick, p)} (a voice jumps ${move})`);
    }
    if (total === 0) return { passed: true, label, message: 'Chords never change.' };
    const ratio = ok / total;
    return ratio >= minRatio
      ? { passed: true, label, message: `${ok}/${total} chord changes are smooth. ✓`, value: ratio }
      : { passed: false, label, message: `Jumpy changes at ${listSome(bad, 3)}. Use inversions to keep common tones.`, value: ratio };
  },

  'chord-has-seventh': (p, c) => {
    const sel = selectTrack(p, c, 'melodic-all');
    const min = numArg(c.min, 1);
    const label = `At least ${min} seventh chord${min > 1 ? 's' : ''} (${sel.label})`;
    requireNotes(sel, label);
    const sevenths = new Set<number>();
    for (const g of onsetGroups(sel.notes)) {
      const snd = soundingAt(sel.notes, g[0]!.startTick);
      const midis = snd.map((n) => n.midi);
      const pcs = [...new Set(midis.map((m) => ((m % 12) + 12) % 12))];
      if (pcs.length < 3) continue;
      const id = identifyChord(midis);
      const hasSev = id
        ? CHORD_INTERVALS[id.quality].some((iv) => iv % 12 === 10 || iv % 12 === 11) || id.quality === 'dim7'
        : pcs.some((r) => (pcs.includes((r + 3) % 12) || pcs.includes((r + 4) % 12)) && (pcs.includes((r + 10) % 12) || pcs.includes((r + 11) % 12)));
      if (hasSev) sevenths.add(g[0]!.startTick);
    }
    return sevenths.size >= min
      ? { passed: true, label, message: `${sevenths.size} seventh chord${sevenths.size > 1 ? 's' : ''} found. ✓` }
      : { passed: false, label, message: `${sevenths.size} found; add the 7th above the root (e.g. Cmaj7 = C E G B) with the chord stamp.` };
  },

  'uses-chord': (p, c, ctx) => {
    const k = keyOf(p, c, ctx);
    const sel = selectTrack(p, c, 'melodic-all');
    const names = strArr(c.roman ?? c.chord ?? c.chords);
    const min = numArg(c.min, 1);
    const label = `Uses ${names.join(' / ')}${min > 1 ? ` ${min}×` : ''} (${sel.label})`;
    if (!names.length) throw new CheckError('No chord given.');
    requireNotes(sel, label);
    const targets = names.map((n) => chordFor(n, k.key));
    if (targets.some((t) => !t)) throw new CheckError(`Unknown chord in ${names.join(', ')}.`);
    let hits = 0;
    let found = '';
    for (const g of onsetGroups(sel.notes)) {
      const pcs = new Set(soundingAt(sel.notes, g[0]!.startTick).map((n) => ((n.midi % 12) + 12) % 12));
      const t = targets.find((t) => t!.pcs.slice(0, 4).every((x) => pcs.has(x)));
      if (t) {
        hits++;
        found ||= `${t.symbol} at ${pos(g[0]!.startTick, p)}`;
      }
    }
    const want = targets.map((t) => `${t!.symbol} (${t!.pcs.map((x) => pcToName(x, { flats: parseKey(k.key).prefersFlats })).join(' ')})`).join(' or ');
    return hits >= min
      ? { passed: true, label, message: `Found ${found}. ✓` }
      : { passed: false, label, message: `Didn't hear ${want} — all its notes must sound together.` };
  },

  tempo: (p, c) => {
    const min = numArg(c.min, 0);
    const max = numArg(c.max, Infinity);
    const label = Number.isFinite(max) ? `Tempo ${min}–${max} BPM` : `Tempo ≥ ${min} BPM`;
    return p.bpm >= min && p.bpm <= max
      ? { passed: true, label, message: `${p.bpm} BPM. ✓` }
      : { passed: false, label, message: `Tempo is ${p.bpm} BPM; set it ${p.bpm < min ? `to at least ${min}` : `to at most ${max}`} in the transport bar.` };
  },

  syncopation: (p, c) => {
    const sel = selectTrack(p, c, 'line');
    const minRatio = numArg(c.minOffbeatRatio ?? c.minRatio, 0.25);
    const label = `Syncopated: ≥ ${Math.round(minRatio * 100)}% of onsets off the beat (${sel.label})`;
    requireNotes(sel, label);
    const beatT = ticksPerBeat(p.timeSig);
    const onsets = onsetGroups(sel.notes).map((g) => g[0]!.startTick);
    const off = onsets.filter((t) => {
      const r = t % beatT;
      return r > TOL && beatT - r > TOL;
    }).length;
    const ratio = off / onsets.length;
    return ratio >= minRatio
      ? { passed: true, label, message: `${Math.round(ratio * 100)}% of notes start off the beat. ✓`, value: ratio }
      : { passed: false, label, message: `Only ${Math.round(ratio * 100)}% start between beats; push some notes to the "and" (an 8th early/late).`, value: ratio };
  },

  'matches-reference': (p, c) => {
    const ref = (c.reference ?? c.example) as SnippetEnvelope | undefined;
    const minSim = numArg(c.minSimilarity, 0.7);
    if (!ref || !Array.isArray((ref as SnippetEnvelope).tracks)) throw new CheckError('No reference given.');
    const refProject = projectFromEnvelope(ref as SnippetEnvelope);
    const pitch = c.octave === 'exact' ? 'exact' : 'pc';
    const offset = (numArg(c.startBar, 1) - 1) * ticksPerBar(p.timeSig);
    const tol = durTicks(String(c.tolerance ?? '16')) ?? PPQ / 4;
    const pairs: [number, number][] = typeof c.track === 'number'
      ? [[c.track, numArg(c.refTrack, 0)]]
      : refProject.tracks.map((_, i) => [i, i]);
    const label = `Matches the reference${typeof c.track === 'number' ? ` (${trackLabel(c.track, p)})` : ''} ≥ ${Math.round(minSim * 100)}%`;
    const per: string[] = [];
    let sum = 0;
    for (const [li, ri] of pairs) {
      const rt = refProject.tracks[ri];
      if (!rt) throw new CheckError(`Reference track ${ri + 1} doesn't exist.`);
      const lt = p.tracks[li];
      const a = trackNotes(rt);
      const b = lt ? trackNotes(lt) : [];
      const drums = rt.instrument === 'drums';
      let best = 0;
      const shifts = c.transpose === true && !drums ? Array.from({ length: 12 }, (_, i) => i) : [0];
      for (const s of shifts) best = Math.max(best, similarity(a, b, { semitones: s, offset: -offset, pitch: drums ? 'exact' : pitch, tol }));
      sum += best;
      per.push(`${lt ? lt.name : `track ${li + 1}`} ${Math.round(best * 100)}%`);
    }
    const sim = pairs.length ? sum / pairs.length : 0;
    return sim >= minSim
      ? { passed: true, label, message: `Similarity ${Math.round(sim * 100)}% (${per.join(', ')}). ✓`, value: sim }
      : { passed: false, label, message: `Similarity ${Math.round(sim * 100)}% (${per.join(', ')}); compare with the reference by ear and fix wrong pitches/rhythms.`, value: sim };
  },

  'duration-seconds': (p, c) => {
    const min = numArg(c.min, 0);
    const max = numArg(c.max, Infinity);
    const end = Math.max(projectBars(p), 0) * ticksPerBar(p.timeSig);
    const secs = ticksToSeconds(end, p.bpm);
    const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`;
    const label = Number.isFinite(max) ? `Length ${fmt(min)}–${fmt(max)}` : `At least ${fmt(min)} long`;
    return secs >= min - 0.5 && secs <= max + 0.5
      ? { passed: true, label, message: `${fmt(secs)} at ${p.bpm} BPM. ✓` }
      : { passed: false, label, message: `The song lasts ${fmt(secs)}; ${secs < min ? `add ${Math.ceil(min - secs)} s more (more bars or sections)` : `trim ${Math.ceil(secs - max)} s`}.` };
  },

  sections: (p, c) => {
    const markers = p.markers ?? [];
    const names = strArr(c.names);
    const min = numArg(c.min, names.length || 1);
    const label = `Section markers${names.length ? `: ${names.join(', ')}` : ` (${min}+)`}`;
    const have = markers.map((m) => m.name.toLowerCase().trim());
    const missing = names.filter((n) => !have.some((h) => h === n.toLowerCase() || h.startsWith(n.toLowerCase())));
    if (missing.length) return { passed: false, label, message: `Add marker${missing.length > 1 ? 's' : ''} for ${missing.join(', ')} (click the ruler with the marker tool).` };
    if (markers.length < min) return { passed: false, label, message: `${markers.length} marker${markers.length === 1 ? '' : 's'}; label at least ${min} sections.` };
    return { passed: true, label, message: `${markers.length} sections marked. ✓` };
  },
};

export function isCheckKind(k: unknown): k is CheckKind {
  return typeof k === 'string' && (CHECK_KINDS as readonly string[]).includes(k);
}

/** Run one check. Never throws: problems are reported as a failed result. */
export function runCheck(project: Project, check: DawCheckSpec, index = 0, ctx: CheckContext = {}): CheckResult {
  const base = { index, kind: check.kind, ...(typeof check.id === 'string' ? { id: check.id } : {}) };
  if (check.kind === 'custom') {
    const id = typeof check.id === 'string' ? check.id : String(index);
    const passed = ctx.selfChecks?.[id] === true || ctx.selfChecks?.[String(index)] === true;
    return {
      ...base, custom: true, passed, label: String(check.note ?? check.id ?? 'Self-check'),
      message: passed ? 'Self-checked ✓' : 'Self-check: listen back, then tick the box if you did this.',
    };
  }
  if (!isCheckKind(check.kind)) return { ...base, label: check.kind, passed: false, message: `Unknown check "${check.kind}" (ask the course author).` };
  try {
    const r = impls[check.kind](project, check, ctx);
    return { ...base, ...r, label: cap(r.label) };
  } catch (e) {
    const msg = e instanceof CheckError ? e.message : `Could not check: ${(e as Error).message}`;
    return { ...base, label: cap((e instanceof CheckError && e.label) || defaultLabel(check)), passed: false, message: msg };
  }
}

const cap = (x: string) => x.charAt(0).toUpperCase() + x.slice(1);

function defaultLabel(c: DawCheckSpec): string {
  return `${c.kind}${typeof c.track === 'number' ? ` (track ${c.track + 1})` : ''}`;
}

export interface TaskChecksInput {
  checks?: DawCheckSpec[];
  minBars?: number;
  maxBars?: number;
}

/**
 * The effective check list of a daw-task: `checks`, plus a `bars` check from `minBars`/`maxBars` when the
 * author did not write one.
 */
export function taskChecks(spec: TaskChecksInput): DawCheckSpec[] {
  const checks = [...(spec.checks ?? [])];
  if ((spec.minBars || spec.maxBars) && !checks.some((c) => c.kind === 'bars')) {
    checks.unshift({ kind: 'bars', ...(spec.minBars ? { min: spec.minBars } : {}), ...(spec.maxBars ? { max: spec.maxBars } : {}) });
  }
  return checks;
}

/** Run all checks; score = passed / total (custom checks count, via self-check answers). */
export function runChecks(project: Project, checks: DawCheckSpec[], ctx: CheckContext = {}): ChecksSummary {
  const results = checks.map((c, i) => runCheck(project, c, i, ctx));
  const passed = results.filter((r) => r.passed).length;
  const total = results.length;
  return { results, passed, total, score: total ? passed / total : 1, allPassed: passed === total };
}
