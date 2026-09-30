import { PPQ, type InstrumentId, type NoteEvent, type Snippet } from '../model.js';
import { CHORD_INTERVALS } from '../theory/chords.js';
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

/**
 * MIDI note of a key's tonic in "octave 4" as every key-based reference and question uses it: C4–G4 for C…G,
 * A♭3–B3 for A♭…B (so the whole key sits around middle C). `octave` shifts it by whole octaves.
 */
export function tonicMidiOf(tonicPc: number, octave = 4): number {
  const pc = ((tonicPc % 12) + 12) % 12;
  return 60 + pc - (pc > 7 ? 12 : 0) + 12 * (octave - 4);
}

/**
 * I–IV–V–I (i–iv–V–i in minor) cadence establishing a key: smooth close voicing on the tonic of `tonicMidiOf` (the
 * top voices barely move: 1-3-5 → 1-4-6 → 7-2-5 → 1-3-5) plus the chord roots one octave below the tonic (C3 F3 G3 C3).
 */
export function cadence(key: string, mode?: Mode, instrument: InstrumentId = 'piano', octave = 4): Snippet {
  const k = parseKey(key, mode);
  const t = tonicMidiOf(k.tonicPc, octave);
  const minor = k.mode === 'minor';
  const third = minor ? 3 : 4;
  const sixth = minor ? 8 : 9;
  const chords: number[][] = [
    [t, t + third, t + 7],
    [t, t + 5, t + sixth],
    [t - 1, t + 2, t + 7],
    [t, t + third, t + 7],
  ];
  // bass one octave under the tonic: 1 → 4 → 5 → 1 (C3 F3 G3 C3 in C) — close to the chords, never down in octave 2
  const bass = [0, 5, 7, 0].map((st) => t - 12 + st);
  const events: NoteEvent[] = [];
  chords.forEach((c, i) => {
    const tick = i * PPQ;
    const dur = i === 3 ? PPQ * 2 : PPQ;
    for (const m of c) events.push(ev(m, tick, dur, 0.6));
    events.push(ev(bass[i]!, tick, dur, 0.6));
  });
  return snippet(events, instrument, 100);
}

/** Melodic key reference without chords: 1 2 3 4 5 4 3 2 1 in the key (tonic from `tonicMidiOf`), last note long. */
export function scaleReference(key: string, mode?: Mode, instrument: InstrumentId = 'piano', octave = 4): Snippet {
  const k = parseKey(key, mode);
  const t = tonicMidiOf(k.tonicPc, octave);
  const steps = k.mode === 'minor' ? [0, 2, 3, 5, 7, 5, 3, 2, 0] : [0, 2, 4, 5, 7, 5, 4, 2, 0];
  const d = PPQ / 2;
  return snippet(steps.map((st, i) => ev(t + st, i * d, i === steps.length - 1 ? PPQ * 2 : d, 0.7)), instrument, 100);
}

/**
 * How a note "walks home" in its key: step by step along the scale to the tonic — degrees up to 5 fall to 1, 6 and 7
 * rise to the upper 1. A chromatic note first steps to its nearest scale neighbour in that direction.
 */
export function resolutionPath(midi: number, tonicMidi: number, mode: Mode = 'major'): number[] {
  const steps = mode === 'minor' ? [0, 2, 3, 5, 7, 8, 10] : [0, 2, 4, 5, 7, 9, 11];
  const rel = (((midi - tonicMidi) % 12) + 12) % 12;
  const base = midi - rel; // the tonic at or below the note
  const up = rel >= 8; // 6 and 7 (and chromatic notes near them) rise
  const target = up ? base + 12 : base;
  const scale = [...steps.map((s) => base + s), base + 12];
  const path = [midi];
  let cur = midi;
  while (cur !== target) {
    const next = up ? scale.find((m) => m > cur) : [...scale].reverse().find((m) => m < cur);
    if (next === undefined) break;
    path.push(next);
    cur = next;
  }
  return path;
}

/** The key's tonic alone (same register as `cadence` and `scaleReference`). */
export function tonicReference(key: string, mode?: Mode, instrument: InstrumentId = 'piano', octave = 4): Snippet {
  const k = parseKey(key, mode);
  return harmonic([tonicMidiOf(k.tonicPc, octave)], { instrument, beats: 2 });
}

/** Key reference by kind (`none` → undefined). */
export function keyReference(kind: 'cadence' | 'scale' | 'tonic' | 'none', key: string, mode?: Mode, instrument: InstrumentId = 'piano', octave = 4): Snippet | undefined {
  if (kind === 'cadence') return cadence(key, mode, instrument, octave);
  if (kind === 'scale') return scaleReference(key, mode, instrument, octave);
  if (kind === 'tonic') return tonicReference(key, mode, instrument, octave);
  return undefined;
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
