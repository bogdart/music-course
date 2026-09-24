import { Key, Note } from 'tonal';
import { cleanNoteName, pitchClass, pcToName } from './notes.js';
import { SCALE_INTERVALS } from './scales.js';

export type Mode = 'major' | 'minor';

export interface KeyInfo {
  /** Spelled tonic pitch class ("F#", "Bb") */
  tonic: string;
  mode: Mode;
  /** Pitch class of the tonic */
  tonicPc: number;
  /** Number of sharps (positive) or flats (negative) in the key signature */
  alteration: number;
  sharps: number;
  flats: number;
  /** Accidentals in the key signature in order ("F#","C#"...) */
  accidentals: string[];
  /** Whether black keys should be spelled with flats */
  prefersFlats: boolean;
  /** Spelled scale (7 pitch classes) */
  scale: string[];
  /** Display name: "G major", "E minor" */
  name: string;
  /** VexFlow key spec: "G", "Em" */
  vexKey: string;
}

const SHARP_ORDER = ['F#', 'C#', 'G#', 'D#', 'A#', 'E#', 'B#'];
const FLAT_ORDER = ['Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb', 'Fb'];

/**
 * Parse a key: "C", "G major", "Am", "A minor", "F#m", "Bb", "Ebmin". A separate `mode` wins over the suffix
 * only if the string has no suffix.
 */
export function parseKey(key: string, mode?: Mode): KeyInfo {
  const k = key.trim();
  const m = /^([A-Ga-g](?:##|#|bb|b|♯|♭)?)\s*(m|min|minor|maj|major|M)?$/.exec(k);
  if (!m) throw new Error(`Invalid key "${key}"`);
  const tonic = Note.pitchClass(cleanNoteName(m[1]!));
  if (!tonic) throw new Error(`Invalid key "${key}"`);
  const suffix = m[2];
  const md: Mode = suffix ? (['m', 'min', 'minor'].includes(suffix) ? 'minor' : 'major') : (mode ?? 'major');
  const alteration = md === 'major' ? Key.majorKey(tonic).alteration : Key.minorKey(tonic).alteration;
  const scale = md === 'major' ? [...Key.majorKey(tonic).scale] : [...Key.minorKey(tonic).natural.scale];
  const sharps = Math.max(0, alteration);
  const flats = Math.max(0, -alteration);
  const accidentals = alteration > 0 ? SHARP_ORDER.slice(0, sharps) : FLAT_ORDER.slice(0, flats);
  const prefersFlats = alteration < 0 || (alteration === 0 && md === 'minor' && ['D', 'G', 'C', 'F'].includes(tonic));
  return {
    tonic, mode: md, tonicPc: pitchClass(tonic), alteration, sharps, flats, accidentals, prefersFlats, scale,
    name: `${tonic} ${md}`, vexKey: md === 'minor' ? `${tonic}m` : tonic,
  };
}

export function isValidKey(key: string): boolean {
  try {
    const k = parseKey(key);
    return Math.abs(k.alteration) <= 7;
  } catch {
    return false;
  }
}

/** Key signature summary for key-signature exercises: "3#", "2b", "0". */
export function keySignatureLabel(key: string, mode?: Mode): string {
  const k = parseKey(key, mode);
  if (k.alteration === 0) return '0';
  return k.alteration > 0 ? `${k.alteration}#` : `${-k.alteration}b`;
}

/** Major/minor key names that have a given alteration (e.g. -2 → Bb major / G minor). */
export function keysForAlteration(alteration: number): { major: string; minor: string } {
  const majors = ['Cb', 'Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F', 'C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#'];
  const major = majors[alteration + 7];
  if (!major) throw new Error(`Invalid alteration ${alteration}`);
  return { major, minor: Key.majorKey(major).minorRelative };
}

/** The relative major/minor. */
export function relativeKey(key: string, mode?: Mode): string {
  const k = parseKey(key, mode);
  return k.mode === 'major' ? Key.majorKey(k.tonic).minorRelative + 'm' : Key.minorKey(k.tonic).relativeMajor;
}

// ---------- scale degrees ----------

/** Degree labels by semitone offset from the tonic, for each mode (chromatic degrees included). */
const DEGREE_LABELS: Record<Mode, string[]> = {
  major: ['1', 'b2', '2', 'b3', '3', '4', '#4', '5', 'b6', '6', 'b7', '7'],
  minor: ['1', 'b2', '2', '3', '#3', '4', '#4', '5', '6', '#6', '7', '#7'],
};

function modeIntervals(mode: Mode): number[] {
  return mode === 'major' ? SCALE_INTERVALS.major : SCALE_INTERVALS['natural-minor'];
}

/** Semitone offset from tonic for a degree string ("1".."7", with optional b/# prefix, e.g. "b3", "#4"). */
export function degreeToSemitones(degree: string | number, mode: Mode = 'major'): number {
  const m = /^([b#♭♯]*)([1-7])$/.exec(String(degree).trim());
  if (!m) throw new Error(`Invalid scale degree "${degree}"`);
  const base = modeIntervals(mode)[Number(m[2]) - 1]!;
  let alt = 0;
  for (const c of m[1]!) alt += c === '#' || c === '♯' ? 1 : -1;
  return base + alt;
}

export function isDegree(v: string | number): boolean {
  return /^[b#♭♯]?[1-7]$/.test(String(v).trim());
}

/** Pitch class for a degree in a key. */
export function degreeToPc(key: string, degree: string | number, mode?: Mode): number {
  const k = parseKey(key, mode);
  return (k.tonicPc + degreeToSemitones(degree, k.mode) + 120) % 12;
}

/** Spelled pitch-class name for a degree in a key. */
export function degreeToNoteName(key: string, degree: string | number, mode?: Mode): string {
  const k = parseKey(key, mode);
  const d = String(degree).trim();
  const m = /^([b#♭♯]*)([1-7])$/.exec(d);
  if (!m) throw new Error(`Invalid scale degree "${degree}"`);
  let n = k.scale[Number(m[2]) - 1]!;
  for (const c of m[1]!) n = Note.transpose(n, c === '#' || c === '♯' ? '1A' : '-1A');
  return Note.simplify(n) || pcToName(degreeToPc(key, degree, mode), { flats: k.prefersFlats });
}

/** Degree label of a pitch (MIDI or name) relative to a key; chromatic notes get b/# labels. */
export function pcToDegree(note: number | string, key: string, mode?: Mode): string {
  const k = parseKey(key, mode);
  const pc = typeof note === 'number' ? ((note % 12) + 12) % 12 : pitchClass(note);
  return DEGREE_LABELS[k.mode][(pc - k.tonicPc + 12) % 12]!;
}

/** Normalise a degree answer so enharmonic labels compare equal ("#1" vs "b2") → semitone offset. */
export function degreeEquals(a: string | number, b: string | number, mode: Mode = 'major'): boolean {
  try {
    return ((degreeToSemitones(a, mode) % 12) + 12) % 12 === ((degreeToSemitones(b, mode) % 12) + 12) % 12;
  } catch {
    return false;
  }
}

/** Solfège syllable (movable do) for major-mode degree labels. */
export const SOLFEGE: Record<string, string> = {
  '1': 'do', b2: 'ra', '2': 're', b3: 'me', '3': 'mi', '4': 'fa', '#4': 'fi', '5': 'sol', b6: 'le',
  '6': 'la', b7: 'te', '7': 'ti',
};
