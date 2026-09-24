import { PPQ, type InstrumentId, type NoteEvent, type Snippet } from '../model.js';
import { chordMidi, CHORD_INTERVALS } from '../theory/chords.js';
import { parseKey, type Mode } from '../theory/keys.js';
import type { Rng } from '../rng.js';

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
