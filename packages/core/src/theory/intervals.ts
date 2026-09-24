import { Interval, Note } from 'tonal';
import type { Midi } from '../model.js';
import { cleanNoteName } from './notes.js';

/** Interval ids used by content (CONTENT_SCHEMA `ear-interval`, `build-interval`). */
export const INTERVAL_IDS = ['P1', 'm2', 'M2', 'm3', 'M3', 'P4', 'TT', 'P5', 'm6', 'M6', 'm7', 'M7', 'P8',
  'm9', 'M9', 'm10', 'M10', 'P11', 'P12', 'm13', 'M13'] as const;
export type IntervalId = (typeof INTERVAL_IDS)[number];

export const INTERVAL_SEMITONES: Record<IntervalId, number> = {
  P1: 0, m2: 1, M2: 2, m3: 3, M3: 4, P4: 5, TT: 6, P5: 7, m6: 8, M6: 9, m7: 10, M7: 11, P8: 12,
  m9: 13, M9: 14, m10: 15, M10: 16, P11: 17, P12: 19, m13: 20, M13: 21,
};

export const INTERVAL_NAMES: Record<IntervalId, string> = {
  P1: 'Unison', m2: 'Minor 2nd', M2: 'Major 2nd', m3: 'Minor 3rd', M3: 'Major 3rd', P4: 'Perfect 4th',
  TT: 'Tritone', P5: 'Perfect 5th', m6: 'Minor 6th', M6: 'Major 6th', m7: 'Minor 7th', M7: 'Major 7th',
  P8: 'Octave', m9: 'Minor 9th', M9: 'Major 9th', m10: 'Minor 10th', M10: 'Major 10th', P11: 'Perfect 11th',
  P12: 'Perfect 12th', m13: 'Minor 13th', M13: 'Major 13th',
};

/** tonal interval names for spelling-aware transposition. TT is spelled as augmented 4th. */
const TONAL_NAME: Record<IntervalId, string> = {
  P1: '1P', m2: '2m', M2: '2M', m3: '3m', M3: '3M', P4: '4P', TT: '4A', P5: '5P', m6: '6m', M6: '6M',
  m7: '7m', M7: '7M', P8: '8P', m9: '9m', M9: '9M', m10: '10m', M10: '10M', P11: '11P', P12: '12P',
  m13: '13m', M13: '13M',
};

export function isIntervalId(v: unknown): v is IntervalId {
  return typeof v === 'string' && (INTERVAL_IDS as readonly string[]).includes(v);
}

export function intervalSemitones(id: IntervalId): number {
  return INTERVAL_SEMITONES[id];
}

/** Interval id for a semitone distance (0..21). Tritone → "TT". Compound values past M13 return null. */
export function semitonesToInterval(semitones: number): IntervalId | null {
  const abs = Math.abs(semitones);
  const found = (Object.entries(INTERVAL_SEMITONES) as [IntervalId, number][]).find(([, s]) => s === abs);
  if (found) return found[0];
  if (abs === 18) return null;
  return null;
}

/** Simple (within an octave) interval id between two MIDI notes, direction ignored; octaves reduce to P8 only if exactly 12. */
export function intervalBetween(a: Midi, b: Midi): IntervalId | null {
  const d = Math.abs(b - a);
  if (d === 0) return 'P1';
  if (d % 12 === 0) return 'P8';
  return semitonesToInterval(d > 12 ? d % 12 : d);
}

/** Transpose a spelled note name by an interval id ("C4","M3" → "E4"); descending with dir -1. */
export function transposeNote(note: string, id: IntervalId, dir: 1 | -1 = 1): string {
  const name = TONAL_NAME[id];
  const res = Note.transpose(cleanNoteName(note), dir === 1 ? name : '-' + name);
  if (!res) throw new Error(`Cannot transpose ${note} by ${id}`);
  return res;
}

/** Spelled interval between two note names (tonal format → our ids when possible). */
export function spelledInterval(from: string, to: string): string {
  return Interval.distance(cleanNoteName(from), cleanNoteName(to));
}
