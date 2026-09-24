import { PPQ, type InstrumentId, type NoteEvent, type Snippet } from '../model.js';
import { chordMidi, CHORD_INTERVALS } from '../theory/chords.js';
import { parseKey, type Mode } from '../theory/keys.js';
import { createRng, type Rng } from '../rng.js';
import type { Choice, EvalResult } from './types.js';

export function snippet(events: NoteEvent[], instrument: InstrumentId = 'piano', bpm = 90): Snippet {
  return { bpm, timeSig: { num: 4, den: 4 }, tracks: [{ instrument, events }] };
}

export function ev(midi: number, startTick: number, durationTicks: number, velocity = 0.8): NoteEvent {
  return { midi, startTick, durationTicks, velocity };
}

/** Sequential notes, each `beats` long. */
export function melodic(midis: number[], opts: { instrument?: InstrumentId; bpm?: number; beats?: number } = {}): Snippet {
  const d = Math.round((opts.beats ?? 1) * PPQ);
  return snippet(midis.map((m, i) => ev(m, i * d, d)), opts.instrument, opts.bpm ?? 80);
}

/** Notes together, `beats` long. */
export function harmonic(midis: number[], opts: { instrument?: InstrumentId; bpm?: number; beats?: number } = {}): Snippet {
  const d = Math.round((opts.beats ?? 2) * PPQ);
  return snippet(midis.map((m) => ev(m, 0, d)), opts.instrument, opts.bpm ?? 80);
}

/** I–IV–V–I (i–iv–V–i in minor) cadence establishing a key, voiced around middle C, plus tonic in the bass. */
export function cadence(key: string, mode?: Mode, instrument: InstrumentId = 'piano'): Snippet {
  const k = parseKey(key, mode);
  const tonic = 48 + k.tonicPc; // octave 3
  const root = (st: number) => {
    let r = tonic + st;
    while (r > 55) r -= 12;
    return r + 12; // chord roots between C4-ish and G4
  };
  const minor = k.mode === 'minor';
  const chords: number[][] = [
    chordMidi(root(0), minor ? 'min' : 'maj', 0),
    chordMidi(root(5), minor ? 'min' : 'maj', 0),
    chordMidi(root(7), 'maj', 0),
    chordMidi(root(0), minor ? 'min' : 'maj', 0),
  ];
  const bassSt = [0, 5, 7, 0];
  const events: NoteEvent[] = [];
  chords.forEach((c, i) => {
    const t = i * PPQ;
    const dur = i === 3 ? PPQ * 2 : PPQ;
    for (const m of c) events.push(ev(m, t, dur, 0.6));
    events.push(ev(tonic - 12 + bassSt[i]!, t, dur, 0.6));
  });
  return snippet(events, instrument, 100);
}

export function tonicReference(key: string, mode?: Mode, instrument: InstrumentId = 'piano'): Snippet {
  const k = parseKey(key, mode);
  return harmonic([60 + ((k.tonicPc + 6) % 12) - 6], { instrument, beats: 2 });
}

/** Chord span in semitones for a quality (for fitting in a range). */
export function chordSpan(quality: keyof typeof CHORD_INTERVALS): number {
  const iv = CHORD_INTERVALS[quality];
  return iv[iv.length - 1]!;
}

/** Pick an integer in [lo, hi]; if lo > hi, return lo. */
export function pickInRange(rng: Rng, lo: number, hi: number): number {
  return hi < lo ? lo : rng.int(lo, hi);
}

export function normaliseText(s: string): string {
  return s
    .normalize('NFKC')
    .replace(/♯/g, '#')
    .replace(/♭/g, 'b')
    .toLowerCase()
    .replace(/[“”"'`.,!?;:()]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function ordinal(n: number): string {
  return ['root position', '1st inversion', '2nd inversion', '3rd inversion'][n] ?? `${n}th inversion`;
}

/**
 * Deterministic walk through `n` list entries in a per-set shuffled order: item `index` of a set gets entry
 * `order[index % n]`. The permutation is derived from the set's seed (`rng.seed`), so every set is freshly
 * shuffled yet all entries appear before any repeats.
 */
export function setOrder(rng: Rng, n: number, index: number, salt = 0): number {
  if (n <= 1) return 0;
  const perm = createRng((rng.seed ^ (0x9e3779b9 + salt)) >>> 0).shuffle(Array.from({ length: n }, (_, i) => i));
  const round = Math.floor(index / n);
  if (round === 0) return perm[index % n]!;
  // later rounds: reshuffle so the order differs
  const p2 = createRng((rng.seed + round * 7919 + salt) >>> 0).shuffle(perm);
  return p2[index % n]!;
}

/** Choice buttons for the 12 pitch classes, spelled for a key preference. */
export function pitchClassChoices(flats = false): Choice[] {
  const sharp = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const flat = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
  return sharp.map((s, i) => ({ value: flats ? flat[i]! : s, label: s === flat[i] ? s : flats ? `${flat[i]}/${s}` : `${s}/${flat[i]}` }));
}

/** Evaluate slot answers: per-slot credit function → EvalResult with details.slots. */
export function evaluateSlots(expected: string[], given: unknown, credit: (given: string, expected: string, i: number) => number, solution: string, what = 'answer'): EvalResult {
  const arr = Array.isArray(given) ? given.map((g) => String(g ?? '')) : [];
  const credits = expected.map((e, i) => (arr[i] !== undefined && arr[i] !== '' ? credit(arr[i]!, e, i) : 0));
  const score = expected.length ? Math.round((credits.reduce((a, b) => a + b, 0) / expected.length) * 100) / 100 : 0;
  const correct = credits.every((c) => c >= 1) && arr.length === expected.length;
  const nRight = credits.filter((c) => c >= 1).length;
  return {
    correct, score: correct ? 1 : score,
    feedback: correct ? 'Correct!' : `${nRight}/${expected.length} right — the ${what} was ${solution}.`,
    expected: solution,
    details: { slots: credits.map((c) => c >= 1) },
  };
}
