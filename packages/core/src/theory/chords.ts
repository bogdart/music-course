import { Note } from 'tonal';
import type { Midi } from '../model.js';
import { cleanNoteName, noteToMidi, pitchClass } from './notes.js';

/** Chord quality ids from CONTENT_SCHEMA `ear-chord` (plus a few extras used by symbols). */
export const CHORD_QUALITIES = [
  'maj', 'min', 'dim', 'aug', 'maj7', 'min7', 'dom7', 'm7b5', 'sus2', 'sus4',
  'dim7', 'minmaj7', 'maj6', 'min6', 'dom9', 'maj9', 'min9', 'add9', 'dom7sus4', 'power',
  'madd9', 'six9', 'dom9sus4', 'dom11', 'min11', 'dom13', 'maj13', 'min13', 'dom7b9', 'dom7s9', 'dom7s11',
  'dom7b13', 'dom7s5', 'dom7b5', 'alt', 'maj7s11', 'maj7s5', 'dom13sus4',
] as const;
export type ChordQuality = (typeof CHORD_QUALITIES)[number];

/** Semitones from root. */
export const CHORD_INTERVALS: Record<ChordQuality, number[]> = {
  maj: [0, 4, 7], min: [0, 3, 7], dim: [0, 3, 6], aug: [0, 4, 8],
  maj7: [0, 4, 7, 11], min7: [0, 3, 7, 10], dom7: [0, 4, 7, 10], m7b5: [0, 3, 6, 10],
  sus2: [0, 2, 7], sus4: [0, 5, 7], dim7: [0, 3, 6, 9], minmaj7: [0, 3, 7, 11],
  maj6: [0, 4, 7, 9], min6: [0, 3, 7, 9], dom9: [0, 4, 7, 10, 14], maj9: [0, 4, 7, 11, 14],
  min9: [0, 3, 7, 10, 14], add9: [0, 4, 7, 14], dom7sus4: [0, 5, 7, 10], power: [0, 7],
  madd9: [0, 3, 7, 14], six9: [0, 4, 7, 9, 14], dom9sus4: [0, 5, 7, 10, 14], dom11: [0, 4, 7, 10, 14, 17],
  min11: [0, 3, 7, 10, 14, 17], dom13: [0, 4, 7, 10, 14, 21], maj13: [0, 4, 7, 11, 14, 21],
  min13: [0, 3, 7, 10, 14, 21], dom7b9: [0, 4, 7, 10, 13], dom7s9: [0, 4, 7, 10, 15], dom7s11: [0, 4, 7, 10, 18],
  dom7b13: [0, 4, 7, 10, 20], dom7s5: [0, 4, 8, 10], dom7b5: [0, 4, 6, 10], alt: [0, 4, 10, 13, 15, 20],
  maj7s11: [0, 4, 7, 11, 18], maj7s5: [0, 4, 8, 11], dom13sus4: [0, 5, 7, 10, 14, 21],
};

/** Interval spelling (tonal names) for spelled chord tones. */
const CHORD_SPELLING: Record<ChordQuality, string[]> = {
  maj: ['1P', '3M', '5P'], min: ['1P', '3m', '5P'], dim: ['1P', '3m', '5d'], aug: ['1P', '3M', '5A'],
  maj7: ['1P', '3M', '5P', '7M'], min7: ['1P', '3m', '5P', '7m'], dom7: ['1P', '3M', '5P', '7m'],
  m7b5: ['1P', '3m', '5d', '7m'], sus2: ['1P', '2M', '5P'], sus4: ['1P', '4P', '5P'],
  dim7: ['1P', '3m', '5d', '7d'], minmaj7: ['1P', '3m', '5P', '7M'], maj6: ['1P', '3M', '5P', '6M'],
  min6: ['1P', '3m', '5P', '6M'], dom9: ['1P', '3M', '5P', '7m', '9M'], maj9: ['1P', '3M', '5P', '7M', '9M'],
  min9: ['1P', '3m', '5P', '7m', '9M'], add9: ['1P', '3M', '5P', '9M'], dom7sus4: ['1P', '4P', '5P', '7m'],
  power: ['1P', '5P'],
  madd9: ['1P', '3m', '5P', '9M'], six9: ['1P', '3M', '5P', '6M', '9M'], dom9sus4: ['1P', '4P', '5P', '7m', '9M'],
  dom11: ['1P', '3M', '5P', '7m', '9M', '11P'], min11: ['1P', '3m', '5P', '7m', '9M', '11P'],
  dom13: ['1P', '3M', '5P', '7m', '9M', '13M'], maj13: ['1P', '3M', '5P', '7M', '9M', '13M'],
  min13: ['1P', '3m', '5P', '7m', '9M', '13M'], dom7b9: ['1P', '3M', '5P', '7m', '9m'], dom7s9: ['1P', '3M', '5P', '7m', '9A'],
  dom7s11: ['1P', '3M', '5P', '7m', '11A'], dom7b13: ['1P', '3M', '5P', '7m', '13m'], dom7s5: ['1P', '3M', '5A', '7m'],
  dom7b5: ['1P', '3M', '5d', '7m'], alt: ['1P', '3M', '7m', '9m', '9A', '13m'], maj7s11: ['1P', '3M', '5P', '7M', '11A'],
  maj7s5: ['1P', '3M', '5A', '7M'], dom13sus4: ['1P', '4P', '5P', '7m', '9M', '13M'],
};

export const CHORD_QUALITY_NAMES: Record<ChordQuality, string> = {
  maj: 'Major', min: 'Minor', dim: 'Diminished', aug: 'Augmented', maj7: 'Major 7th', min7: 'Minor 7th',
  dom7: 'Dominant 7th', m7b5: 'Half-diminished (m7♭5)', sus2: 'Sus2', sus4: 'Sus4', dim7: 'Diminished 7th',
  minmaj7: 'Minor-major 7th', maj6: 'Major 6th', min6: 'Minor 6th', dom9: 'Dominant 9th', maj9: 'Major 9th',
  min9: 'Minor 9th', add9: 'Add 9', dom7sus4: '7sus4', power: 'Power chord (5)',
  madd9: 'Minor add 9', six9: '6/9', dom9sus4: '9sus4', dom11: 'Dominant 11th', min11: 'Minor 11th',
  dom13: 'Dominant 13th', maj13: 'Major 13th', min13: 'Minor 13th', dom7b9: '7♭9', dom7s9: '7♯9', dom7s11: '7♯11',
  dom7b13: '7♭13', dom7s5: '7♯5', dom7b5: '7♭5', alt: 'Altered dominant', maj7s11: 'Maj7♯11', maj7s5: 'Maj7♯5',
  dom13sus4: '13sus4',
};

/** Canonical symbol suffix per quality. */
export const QUALITY_SUFFIX: Record<ChordQuality, string> = {
  maj: '', min: 'm', dim: 'dim', aug: 'aug', maj7: 'maj7', min7: 'm7', dom7: '7', m7b5: 'm7b5',
  sus2: 'sus2', sus4: 'sus4', dim7: 'dim7', minmaj7: 'mMaj7', maj6: '6', min6: 'm6', dom9: '9', maj9: 'maj9',
  min9: 'm9', add9: 'add9', dom7sus4: '7sus4', power: '5',
  madd9: 'madd9', six9: '6/9', dom9sus4: '9sus4', dom11: '11', min11: 'm11', dom13: '13', maj13: 'maj13', min13: 'm13',
  dom7b9: '7b9', dom7s9: '7#9', dom7s11: '7#11', dom7b13: '7b13', dom7s5: '7#5', dom7b5: '7b5', alt: '7alt',
  maj7s11: 'maj7#11', maj7s5: 'maj7#5', dom13sus4: '13sus4',
};

/** Accepted suffix spellings → quality. Longest match wins. */
const SUFFIX_ALIASES: [string, ChordQuality][] = (
  [
    ['', 'maj'], ['M', 'maj'], ['maj', 'maj'], ['major', 'maj'], ['Δ', 'maj7'],
    ['m', 'min'], ['min', 'min'], ['-', 'min'], ['minor', 'min'],
    ['dim', 'dim'], ['°', 'dim'], ['o', 'dim'], ['aug', 'aug'], ['+', 'aug'],
    ['maj7', 'maj7'], ['M7', 'maj7'], ['Maj7', 'maj7'], ['Δ7', 'maj7'], ['^7', 'maj7'],
    ['m7', 'min7'], ['min7', 'min7'], ['-7', 'min7'],
    ['7', 'dom7'], ['dom7', 'dom7'],
    ['m7b5', 'm7b5'], ['min7b5', 'm7b5'], ['ø', 'm7b5'], ['ø7', 'm7b5'], ['-7b5', 'm7b5'],
    ['sus2', 'sus2'], ['sus4', 'sus4'], ['sus', 'sus4'],
    ['dim7', 'dim7'], ['°7', 'dim7'], ['o7', 'dim7'],
    ['mMaj7', 'minmaj7'], ['mmaj7', 'minmaj7'], ['m(maj7)', 'minmaj7'], ['minmaj7', 'minmaj7'], ['-Δ7', 'minmaj7'],
    ['6', 'maj6'], ['maj6', 'maj6'], ['m6', 'min6'], ['min6', 'min6'],
    ['9', 'dom9'], ['maj9', 'maj9'], ['M9', 'maj9'], ['m9', 'min9'], ['min9', 'min9'],
    ['add9', 'add9'], ['add2', 'add9'], ['7sus4', 'dom7sus4'], ['7sus', 'dom7sus4'], ['5', 'power'],
    ['madd9', 'madd9'], ['m(add9)', 'madd9'], ['minadd9', 'madd9'], ['6/9', 'six9'], ['69', 'six9'], ['6add9', 'six9'],
    ['9sus4', 'dom9sus4'], ['9sus', 'dom9sus4'], ['11', 'dom11'], ['m11', 'min11'], ['min11', 'min11'], ['-11', 'min11'],
    ['13', 'dom13'], ['maj13', 'maj13'], ['M13', 'maj13'], ['m13', 'min13'], ['min13', 'min13'], ['-13', 'min13'],
    ['7b9', 'dom7b9'], ['7(b9)', 'dom7b9'], ['7#9', 'dom7s9'], ['7(#9)', 'dom7s9'], ['7#11', 'dom7s11'], ['7(#11)', 'dom7s11'],
    ['7b13', 'dom7b13'], ['7(b13)', 'dom7b13'], ['7#5', 'dom7s5'], ['7+5', 'dom7s5'], ['aug7', 'dom7s5'], ['+7', 'dom7s5'],
    ['7b5', 'dom7b5'], ['7alt', 'alt'], ['alt', 'alt'], ['maj7#11', 'maj7s11'], ['M7#11', 'maj7s11'], ['maj7(#11)', 'maj7s11'],
    ['maj7#5', 'maj7s5'], ['maj7+5', 'maj7s5'], ['13sus4', 'dom13sus4'], ['13sus', 'dom13sus4'], ['m7-5', 'm7b5'],
    ['mM7', 'minmaj7'],
  ] as [string, ChordQuality][]
).sort((a, b) => b[0].length - a[0].length);

export function isChordQuality(v: unknown): v is ChordQuality {
  return typeof v === 'string' && (CHORD_QUALITIES as readonly string[]).includes(v);
}

export interface ParsedChord {
  /** Spelled root pitch class ("F#") */
  root: string;
  quality: ChordQuality;
  /** Slash bass pitch class, if any */
  bass?: string;
  /** Canonical symbol ("F#m7b5", "C/E") */
  symbol: string;
  /** Spelled pitch-class names of chord tones (root position, bass not included) */
  notes: string[];
  /** Pitch classes 0..11 of chord tones (root position) */
  pitchClasses: number[];
}

const ROOT_RE = /^([A-Ga-g])(##|#|bb|b|♯|♭)?/;

/** Parse a chord symbol: "C", "Cmaj7", "Dm", "G7", "F#m7b5", "Bb/D", "Ebdim7". */
export function parseChordSymbol(symbol: string): ParsedChord {
  const s = symbol.trim();
  const [main, bassRaw] = splitSlash(s);
  const m = ROOT_RE.exec(main);
  if (!m) throw new Error(`Invalid chord symbol "${symbol}"`);
  const root = cleanNoteName(m[0]);
  const rest = main.slice(m[0].length);
  const match = SUFFIX_ALIASES.find(([suf]) => suf === rest);
  if (!match) throw new Error(`Unknown chord quality "${rest}" in "${symbol}"`);
  const quality = match[1];
  let bass: string | undefined;
  if (bassRaw !== undefined) {
    if (!/^[A-Ga-g](##|#|bb|b|♯|♭)?$/.test(bassRaw)) throw new Error(`Invalid slash bass in "${symbol}"`);
    bass = cleanNoteName(bassRaw);
  }
  return buildChord(root, quality, bass);
}

function splitSlash(s: string): [string, string | undefined] {
  const i = s.lastIndexOf('/');
  // "6/9" is a quality, not a slash chord
  if (i <= 0 || /6\/9$/.test(s)) return [s, undefined];
  return [s.slice(0, i), s.slice(i + 1)];
}

export function tryParseChordSymbol(symbol: string): ParsedChord | null {
  try {
    return parseChordSymbol(symbol);
  } catch {
    return null;
  }
}

/** Build a chord from spelled root + quality. */
export function buildChord(root: string, quality: ChordQuality, bass?: string): ParsedChord {
  const r = Note.pitchClass(cleanNoteName(root));
  if (!r) throw new Error(`Invalid chord root "${root}"`);
  const notes = CHORD_SPELLING[quality].map((iv) => {
    const n = Note.transpose(r, iv);
    return /##|bb/.test(n) ? Note.simplify(n) : n;
  });
  const rpc = pitchClass(r);
  return {
    root: r,
    quality,
    ...(bass ? { bass } : {}),
    symbol: chordSymbol(r, quality, bass),
    notes: notes.map((n) => Note.pitchClass(n)),
    pitchClasses: CHORD_INTERVALS[quality].map((i) => (rpc + i) % 12),
  };
}

export function chordSymbol(root: string, quality: ChordQuality, bass?: string): string {
  return `${root}${QUALITY_SUFFIX[quality]}${bass ? '/' + bass : ''}`;
}

export type Voicing = 'close' | 'open';

/**
 * MIDI notes for a chord. `root` is a note with octave (or MIDI number) for the root position root.
 * inversion 0 = root position, 1 = first inversion... Open voicing drops the 2nd voice from the top an octave
 * (drop-2) for 4-note chords, or spreads the third up an octave for triads.
 */
export function chordMidi(root: string | Midi, quality: ChordQuality, inversion = 0, voicing: Voicing = 'close'): Midi[] {
  const r = typeof root === 'number' ? root : noteToMidi(root);
  let notes = CHORD_INTERVALS[quality].map((i) => r + i);
  const inv = Math.max(0, Math.min(inversion, notes.length - 1));
  for (let i = 0; i < inv; i++) {
    const low = notes.shift()!;
    notes.push(low + 12);
  }
  if (voicing === 'open') {
    if (notes.length >= 4) {
      const idx = notes.length - 2;
      const n = notes[idx]!;
      notes.splice(idx, 1);
      notes.unshift(n - 12);
    } else if (notes.length === 3) {
      notes = [notes[0]!, notes[2]!, notes[1]! + 12];
    }
  }
  return notes.sort((a, b) => a - b);
}

/** Identify a chord from a set of MIDI notes (pitch-class set match, any inversion). */
export function identifyChord(midis: Midi[]): { rootPc: number; quality: ChordQuality; inversion: number } | null {
  const pcs = [...new Set(midis.map((m) => ((m % 12) + 12) % 12))];
  if (pcs.length < 2) return null;
  const bassPc = ((Math.min(...midis) % 12) + 12) % 12;
  // prefer common qualities first
  for (const q of CHORD_QUALITIES) {
    const ivs = CHORD_INTERVALS[q].map((i) => i % 12);
    if (new Set(ivs).size !== pcs.length) continue;
    for (const rootPc of pcs) {
      const set = new Set(ivs.map((i) => (rootPc + i) % 12));
      if (pcs.every((p) => set.has(p))) {
        const order = CHORD_INTERVALS[q].map((i) => (rootPc + i) % 12);
        const inversion = Math.max(0, order.indexOf(bassPc));
        return { rootPc, quality: q, inversion };
      }
    }
  }
  return null;
}
