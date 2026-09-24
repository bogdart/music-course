import { Note } from 'tonal';
import type { Midi } from '../model.js';

export const SHARP_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'] as const;
export const FLAT_NAMES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'] as const;
export const LETTERS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'] as const;

const NOTE_RE = /^([A-Ga-g])(#{1,2}|b{1,2}|x|♯|♭)?(-?\d+)?$/;

/** Normalise user/content spelling: unicode accidentals, lower-case letter, `x` double sharp. */
export function cleanNoteName(name: string): string {
  const t = name.trim().replace(/♯/g, '#').replace(/♭/g, 'b');
  const m = NOTE_RE.exec(t);
  if (!m) return t;
  const acc = m[2] === 'x' ? '##' : (m[2] ?? '');
  return m[1]!.toUpperCase() + acc + (m[3] ?? '');
}

/** True if the string is a note name, with or without octave ("C#4", "Bb", "e"). */
export function isNoteName(name: string, requireOctave = false): boolean {
  const m = NOTE_RE.exec(name.trim().replace(/♯/g, '#').replace(/♭/g, 'b'));
  if (!m) return false;
  return requireOctave ? m[3] !== undefined : true;
}

/** "C#4" → 61. Throws on invalid input or when the octave is missing. */
export function noteToMidi(name: string): Midi {
  const clean = cleanNoteName(name);
  if (!isNoteName(clean, true)) throw new Error(`Invalid note name "${name}" (expected e.g. C4, F#3, Bb5)`);
  const m = Note.midi(clean);
  if (m === null || m < 0 || m > 127) throw new Error(`Note "${name}" is outside MIDI range`);
  return m;
}

/** Like noteToMidi but returns null instead of throwing. */
export function tryNoteToMidi(name: string): Midi | null {
  try {
    return noteToMidi(name);
  } catch {
    return null;
  }
}

export interface SpellOptions {
  /** Use flats for black keys (default false → sharps). */
  flats?: boolean;
}

/** 61 → "C#4" (or "Db4" with {flats:true}). */
export function midiToNote(midi: Midi, opts: SpellOptions = {}): string {
  const pc = ((midi % 12) + 12) % 12;
  const octave = Math.floor(midi / 12) - 1;
  return (opts.flats ? FLAT_NAMES : SHARP_NAMES)[pc] + String(octave);
}

/** Pitch class number 0..11 of a MIDI number or note name (with or without octave). */
export function pitchClass(note: Midi | string): number {
  if (typeof note === 'number') return ((note % 12) + 12) % 12;
  const chroma = Note.chroma(cleanNoteName(note));
  if (chroma === undefined || Number.isNaN(chroma)) throw new Error(`Invalid note "${note}"`);
  return chroma;
}

/** Pitch-class name ("F#4" → "F#"). Keeps the given spelling. */
export function pitchClassName(note: string): string {
  const pc = Note.pitchClass(cleanNoteName(note));
  if (!pc) throw new Error(`Invalid note "${note}"`);
  return pc;
}

/** Name for a pitch class number. */
export function pcToName(pc: number, opts: SpellOptions = {}): string {
  return (opts.flats ? FLAT_NAMES : SHARP_NAMES)[((pc % 12) + 12) % 12]!;
}

export function octaveOf(midi: Midi): number {
  return Math.floor(midi / 12) - 1;
}

/**
 * Enharmonic normalisation: return the simplest common spelling
 * (E#→F, Cb→B, C##→D, keeps single sharps/flats as given). Works with or without octave.
 */
export function normaliseNote(name: string): string {
  const clean = cleanNoteName(name);
  const simple = Note.simplify(clean);
  if (!simple) throw new Error(`Invalid note "${name}"`);
  // tonal keeps E#→F, Cb→B etc.; ensure no double accidentals remain
  return simple;
}

/** Are two notes the same pitch class (enharmonic-aware), ignoring octave? */
export function samePitchClass(a: string | Midi, b: string | Midi): boolean {
  return pitchClass(a) === pitchClass(b);
}

/** Are two notes enharmonically the same sounding pitch (octave-aware)? */
export function sameNote(a: string | Midi, b: string | Midi): boolean {
  const ma = typeof a === 'number' ? a : noteToMidi(a);
  const mb = typeof b === 'number' ? b : noteToMidi(b);
  return ma === mb;
}

/** Whether MIDI note is a black key. */
export function isBlackKey(midi: Midi): boolean {
  return [1, 3, 6, 8, 10].includes(pitchClass(midi));
}

/** Frequency in Hz (A4 = 440). */
export function midiToFreq(midi: Midi, a4 = 440): number {
  return a4 * Math.pow(2, (midi - 69) / 12);
}

/** Inclusive MIDI range from two note names. */
export function rangeToMidi(range: [string, string] | readonly [string, string]): [Midi, Midi] {
  const lo = noteToMidi(range[0]);
  const hi = noteToMidi(range[1]);
  return lo <= hi ? [lo, hi] : [hi, lo];
}

/** Choose the flat/sharp spelling of a MIDI number appropriate for a key. */
export function spellInKey(midi: Midi, keyPrefersFlats: boolean): string {
  return midiToNote(midi, { flats: keyPrefersFlats });
}
