import { PPQ, type InstrumentId, type NoteEvent, type Snippet } from '../model.js';
import type { Rng } from '../rng.js';
import { CHORD_INTERVALS, type ChordQuality } from '../theory/chords.js';
import { parseKey, type Mode } from '../theory/keys.js';
import { romanToChord, type RomanChord } from '../theory/roman.js';

export const MAJOR_KEYS = ['C', 'G', 'D', 'A', 'F', 'Bb', 'Eb', 'E'];
export const MINOR_KEYS = ['A', 'E', 'D', 'B', 'G', 'C', 'F#'];

/** Resolve "random" / key strings to a key + mode. With `keys`, "random" picks from that list only. */
export function resolveKey(rng: Rng, key: string | undefined, mode?: Mode, keys?: string[]): { tonic: string; mode: Mode } {
  if (!key || key === 'random') {
    const m: Mode = mode ?? 'major';
    if (keys?.length) {
      const k = parseKey(rng.pick(keys), m);
      return { tonic: k.tonic, mode: k.mode };
    }
    return { tonic: rng.pick(m === 'major' ? MAJOR_KEYS : MINOR_KEYS), mode: m };
  }
  const k = parseKey(key, mode);
  return { tonic: k.tonic, mode: k.mode };
}

export function isTonicNumeral(roman: string, tonic: string, mode: Mode): boolean {
  try {
    const c = romanToChord(roman, tonic, mode);
    return !c.secondaryOf && c.pitchClasses[0] === parseKey(tonic, mode).tonicPc && c.inversion === 0;
  } catch {
    return false;
  }
}

/**
 * Random progression of `length` numerals from `pool`: with 3+ chords it starts on the tonic when the pool has one
 * and avoids immediate repeats; with 1–2 chords every combination is possible.
 */
export function pickProgression(rng: Rng, pool: string[], length: number, tonic: string, mode: Mode): string[] {
  if (pool.length === 0) throw new Error('no chords to choose from');
  const out: string[] = [];
  // with only two chords (e.g. "I or V?") start-on-tonic + no-repeat would leave exactly one possible answer
  if (pool.length < 3) {
    for (let i = 0; i < length; i++) out.push(rng.pick(pool));
    return out;
  }
  const tonics = pool.filter((r) => isTonicNumeral(r, tonic, mode));
  for (let i = 0; i < length; i++) {
    if (i === 0 && tonics.length) {
      out.push(rng.pick(tonics));
      continue;
    }
    const prev = out[i - 1];
    const cands = pool.length > 1 ? pool.filter((r) => r !== prev) : pool;
    out.push(rng.pick(cands));
  }
  return out;
}

/** Chord tones of a quality in semitones, reduced to one octave for voicing extended chords compactly. */
function toneSet(quality: ChordQuality): number[] {
  return CHORD_INTERVALS[quality];
}

/**
 * Close voicing of the upper structure (root position shape rotated through inversions) whose centre is nearest to
 * `center` (MIDI). Returns ascending MIDI notes.
 */
export function voiceUpper(rootPc: number, quality: ChordQuality, center = 64, prev?: number[]): number[] {
  const iv = toneSet(quality);
  let best: number[] = [];
  let bestCost = Infinity;
  for (let inv = 0; inv < iv.length; inv++) {
    for (let oct = 3; oct <= 5; oct++) {
      const root = (oct + 1) * 12 + rootPc;
      const notes = iv.map((i) => root + i);
      for (let k = 0; k < inv; k++) notes.push(notes.shift()! + 12);
      notes.sort((a, b) => a - b);
      const mid = (notes[0]! + notes[notes.length - 1]!) / 2;
      let cost = Math.abs(mid - center);
      if (prev?.length) {
        const pm = prev.reduce((a, b) => a + b, 0) / prev.length;
        const nm = notes.reduce((a, b) => a + b, 0) / notes.length;
        cost = Math.abs(nm - pm) * 1.5 + Math.abs(mid - center) * 0.5;
      }
      if (notes[0]! < 52 || notes[notes.length - 1]! > 84) cost += 20;
      if (cost < bestCost) {
        bestCost = cost;
        best = notes;
      }
    }
  }
  return best;
}

/** Bass note (MIDI, E1..D3 region) of a chord in the given inversion (0 = root, 1 = 3rd, 2 = 5th, 3 = 7th). */
export function bassNote(chord: Pick<RomanChord, 'pitchClasses'>, inversion = 0): number {
  const pc = chord.pitchClasses[Math.min(inversion, chord.pitchClasses.length - 1)]!;
  let m = 36 + pc; // C2..B2
  if (m < 40) m += 12; // keep ≥ E2
  return m;
}

export interface VoicedChord {
  roman: string;
  chord: RomanChord;
  inversion: number;
  bass: number;
  upper: number[];
}

/** Voice a numeral progression with smooth upper voices and a bass line (root or inversion bass). */
export function voiceProgression(numerals: string[], tonic: string, mode: Mode, inversions: number[] = [0], rng?: Rng): VoicedChord[] {
  const out: VoicedChord[] = [];
  let prev: number[] | undefined;
  for (const r of numerals) {
    const chord = romanToChord(r, tonic, mode);
    const valid = inversions.filter((i) => i < chord.pitchClasses.length);
    // figured-bass numerals (V6, I64) carry their own inversion
    const inversion = chord.inversion > 0 ? chord.inversion : rng && valid.length ? rng.pick(valid) : (valid[0] ?? 0);
    const upper = voiceUpper(chord.pitchClasses[0]!, chord.quality, 65, prev);
    prev = upper;
    out.push({ roman: r, chord, inversion, bass: bassNote(chord, inversion), upper });
  }
  return out;
}

export type ProgressionStyle = 'block' | 'arpeggio' | 'pad-bass' | 'bass-focus' | 'band';

/** Render voiced chords to a snippet. Each chord lasts `beats` quarter notes. */
export function progressionSnippet(chords: VoicedChord[], opts: { style?: ProgressionStyle; bpm?: number; beats?: number; instrument?: InstrumentId } = {}): Snippet {
  const style = opts.style ?? 'block';
  if (style === 'band') return bandSnippet(chords, opts.bpm ?? 96, opts.beats ?? 4);
  const len = Math.round((opts.beats ?? 2) * PPQ);
  const upperEv: NoteEvent[] = [];
  const bassEv: NoteEvent[] = [];
  chords.forEach((c, i) => {
    const t = i * len;
    if (style === 'arpeggio') {
      const notes = [c.bass + 12, ...c.upper];
      const step = len / Math.max(4, notes.length);
      notes.forEach((m, k) => upperEv.push({ midi: m, startTick: Math.round(t + k * step), durationTicks: Math.round(len - k * step), velocity: 0.7 }));
    } else {
      for (const m of c.upper) upperEv.push({ midi: m, startTick: t, durationTicks: len, velocity: style === 'bass-focus' ? 0.45 : 0.65 });
      bassEv.push({ midi: c.bass, startTick: t, durationTicks: len, velocity: style === 'bass-focus' ? 0.9 : 0.7 });
    }
  });
  const upperInst: InstrumentId = style === 'pad-bass' ? 'pad' : (opts.instrument ?? 'piano');
  const bassInst: InstrumentId = style === 'pad-bass' || style === 'bass-focus' ? 'bass' : (opts.instrument ?? 'piano');
  return {
    bpm: opts.bpm ?? 72,
    timeSig: { num: 4, den: 4 },
    tracks: [
      { instrument: upperInst, events: upperEv },
      ...(bassEv.length ? [{ instrument: bassInst, events: bassEv }] : []),
    ],
  };
}

/**
 * A small band: soft pad chords, a bass playing the chord's bass note on beats 1, 2 and the "and" of 3, a basic
 * rock beat (kick 1 & 3, snare 2 & 4, eighth hi-hats) and a lead line that moves between chord tones on the beat —
 * the "full mix" the learner must hear the bass and the harmony through.
 */
function bandSnippet(chords: VoicedChord[], bpm: number, beats: number): Snippet {
  const len = Math.round(beats * PPQ);
  const pad: NoteEvent[] = [];
  const bass: NoteEvent[] = [];
  const drums: NoteEvent[] = [];
  const lead: NoteEvent[] = [];
  const e8 = PPQ / 2;
  chords.forEach((c, i) => {
    const t = i * len;
    for (const m of c.upper) pad.push({ midi: m, startTick: t, durationTicks: len, velocity: 0.35 });
    const b = c.bass >= 48 ? c.bass - 12 : c.bass;
    for (const [at, dur] of [[0, PPQ], [PPQ, PPQ * 1.5], [PPQ * 2.5, PPQ * 1.5]] as const) {
      if (at < len) bass.push({ midi: b, startTick: t + at, durationTicks: Math.min(dur, len - at), velocity: 0.85 });
    }
    for (let k = 0; k < beats * 2; k++) {
      const at = t + k * e8;
      drums.push({ midi: 42, startTick: at, durationTicks: e8, velocity: k % 2 ? 0.35 : 0.5 });
      if (k % 4 === 0) drums.push({ midi: 36, startTick: at, durationTicks: e8, velocity: 0.9 });
      if (k % 4 === 2) drums.push({ midi: 38, startTick: at, durationTicks: e8, velocity: 0.8 });
    }
    // lead: chord tones an octave above the pad, stepping through them beat by beat
    const tones = [...c.upper].sort((x, y) => x - y).map((m) => m + 12);
    for (let k = 0; k < beats; k++) {
      const m = tones[(i + k) % tones.length]!;
      lead.push({ midi: m, startTick: t + k * PPQ, durationTicks: PPQ, velocity: 0.55 });
    }
  });
  return {
    bpm,
    timeSig: { num: 4, den: 4 },
    tracks: [
      { instrument: 'pad', events: pad },
      { instrument: 'bass', events: bass },
      { instrument: 'drums', events: drums },
      { instrument: 'lead', events: lead },
    ],
  };
}
