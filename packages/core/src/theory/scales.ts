import { Note, Scale } from 'tonal';
import type { Midi } from '../model.js';
import { cleanNoteName, noteToMidi, pitchClass } from './notes.js';

/** Scale ids from CONTENT_SCHEMA `ear-scale` (plus `major`/`minor` aliases). */
export const SCALE_IDS = [
  'major', 'natural-minor', 'harmonic-minor', 'melodic-minor', 'dorian', 'mixolydian', 'lydian', 'phrygian',
  'locrian', 'major-pentatonic', 'minor-pentatonic', 'blues', 'whole-tone', 'diminished', 'chromatic',
] as const;
export type ScaleId = (typeof SCALE_IDS)[number];

/** Semitone steps from the root (ascending, within one octave). */
export const SCALE_INTERVALS: Record<ScaleId, number[]> = {
  major: [0, 2, 4, 5, 7, 9, 11],
  'natural-minor': [0, 2, 3, 5, 7, 8, 10],
  'harmonic-minor': [0, 2, 3, 5, 7, 8, 11],
  'melodic-minor': [0, 2, 3, 5, 7, 9, 11],
  dorian: [0, 2, 3, 5, 7, 9, 10],
  mixolydian: [0, 2, 4, 5, 7, 9, 10],
  lydian: [0, 2, 4, 6, 7, 9, 11],
  phrygian: [0, 1, 3, 5, 7, 8, 10],
  locrian: [0, 1, 3, 5, 6, 8, 10],
  'major-pentatonic': [0, 2, 4, 7, 9],
  'minor-pentatonic': [0, 3, 5, 7, 10],
  blues: [0, 3, 5, 6, 7, 10],
  'whole-tone': [0, 2, 4, 6, 8, 10],
  /** whole-half diminished */
  diminished: [0, 2, 3, 5, 6, 8, 9, 11],
  chromatic: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
};

export const SCALE_NAMES: Record<ScaleId, string> = {
  major: 'Major', 'natural-minor': 'Natural minor', 'harmonic-minor': 'Harmonic minor',
  'melodic-minor': 'Melodic minor', dorian: 'Dorian', mixolydian: 'Mixolydian', lydian: 'Lydian',
  phrygian: 'Phrygian', locrian: 'Locrian', 'major-pentatonic': 'Major pentatonic',
  'minor-pentatonic': 'Minor pentatonic', blues: 'Blues', 'whole-tone': 'Whole tone',
  diminished: 'Diminished (W-H)', chromatic: 'Chromatic',
};

const TONAL_SCALE: Record<ScaleId, string> = {
  major: 'major', 'natural-minor': 'minor', 'harmonic-minor': 'harmonic minor', 'melodic-minor': 'melodic minor',
  dorian: 'dorian', mixolydian: 'mixolydian', lydian: 'lydian', phrygian: 'phrygian', locrian: 'locrian',
  'major-pentatonic': 'major pentatonic', 'minor-pentatonic': 'minor pentatonic', blues: 'blues',
  'whole-tone': 'whole tone', diminished: 'diminished', chromatic: 'chromatic',
};

const ALIASES: Record<string, ScaleId> = { minor: 'natural-minor', ionian: 'major', aeolian: 'natural-minor' };

export function isScaleId(v: unknown): v is ScaleId {
  return typeof v === 'string' && (SCALE_IDS as readonly string[]).includes(v);
}

/** Resolve scale id or alias ("minor" → "natural-minor"). */
export function resolveScaleId(v: string): ScaleId {
  if (isScaleId(v)) return v;
  const a = ALIASES[v];
  if (a) return a;
  throw new Error(`Unknown scale "${v}"`);
}

/** Spelled pitch-class names of a scale ("D","major" → D E F# G A B C#). */
export function scaleNotes(root: string, scale: ScaleId | string): string[] {
  const id = resolveScaleId(scale);
  const r = Note.pitchClass(cleanNoteName(root));
  const s = Scale.get(`${r} ${TONAL_SCALE[id]}`);
  if (s.empty || s.notes.length !== SCALE_INTERVALS[id].length) {
    // fallback to sharps spelling
    return SCALE_INTERVALS[id].map((st) => Note.pitchClass(Note.fromMidiSharps(60 + pitchClass(r) + st)));
  }
  return s.notes;
}

/** Pitch classes (0..11) of a scale. */
export function scalePitchClasses(root: string | number, scale: ScaleId | string): number[] {
  const id = resolveScaleId(scale);
  const r = typeof root === 'number' ? root % 12 : pitchClass(root);
  return SCALE_INTERVALS[id].map((s) => (r + s) % 12);
}

/**
 * MIDI notes of a scale starting on `root` (a note with octave or a MIDI number) for `octaves` octaves,
 * including the top root. direction "asc-desc" appends the descent.
 */
export function scaleMidi(root: string | Midi, scale: ScaleId | string, octaves = 1,
  direction: 'asc' | 'desc' | 'asc-desc' = 'asc'): Midi[] {
  const id = resolveScaleId(scale);
  const r = typeof root === 'number' ? root : noteToMidi(root);
  const up: Midi[] = [];
  for (let o = 0; o < octaves; o++) for (const s of SCALE_INTERVALS[id]) up.push(r + o * 12 + s);
  up.push(r + octaves * 12);
  if (direction === 'asc') return up;
  const down = [...up].reverse();
  if (direction === 'desc') return down;
  return [...up, ...down.slice(1)];
}

/** Is the pitch class in the scale? */
export function inScale(note: Midi | string, root: string | number, scale: ScaleId | string): boolean {
  const pc = typeof note === 'number' ? ((note % 12) + 12) % 12 : pitchClass(note);
  return scalePitchClasses(root, scale).includes(pc);
}
