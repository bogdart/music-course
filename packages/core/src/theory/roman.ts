import { Key, Note } from 'tonal';
import { buildChord, parseChordSymbol, type ChordQuality, type ParsedChord } from './chords.js';
import { parseKey, type Mode } from './keys.js';
import { pcToName } from './notes.js';
import { SCALE_INTERVALS } from './scales.js';

export interface RomanChord extends ParsedChord {
  /** The numeral as given/normalised ("V7", "bVII", "V/V") */
  roman: string;
  /** Scale degree 1..7 of the root (of the target key for secondaries) */
  degree: number;
  /** 0 root position, 1 first inversion... (from figured bass 6, 64, 65, 43, 42) */
  inversion: number;
  /** Numeral of the tonicised chord for secondary chords ("V" in "V/V") */
  secondaryOf?: string;
}

const NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
const ROMAN_RE = /^([b#♭♯]?)(VII|VI|V|IV|III|II|I|vii|vi|v|iv|iii|ii|i)(°|o|ø|\+|dim|aug)?(maj9|maj7|M7|Δ7|7sus4|sus4|sus2|add9|13|11|7|9|65|64|6|43|42|2)?$/;

interface ParsedNumeral {
  acc: number;
  degree: number;
  upper: boolean;
  modifier: string;
  figure: string;
}

function parseNumeral(n: string): ParsedNumeral {
  const m = ROMAN_RE.exec(n.trim());
  if (!m) throw new Error(`Invalid roman numeral "${n}"`);
  const accStr = m[1]!;
  const acc = accStr === '' ? 0 : accStr === 'b' || accStr === '♭' ? -1 : 1;
  const num = m[2]!;
  return { acc, degree: NUMERALS.indexOf(num.toUpperCase()) + 1, upper: num === num.toUpperCase(), modifier: m[3] ?? '', figure: m[4] ?? '' };
}

function qualityOf(p: ParsedNumeral): { quality: ChordQuality; inversion: number } {
  const mod = p.modifier;
  const dim = mod === '°' || mod === 'o' || mod === 'dim';
  const half = mod === 'ø';
  const aug = mod === '+' || mod === 'aug';
  const f = p.figure;
  const seventh = ['7', '65', '43', '42', '2'].includes(f);
  const inversion = { '': 0, '7': 0, '6': 1, '64': 2, '65': 1, '43': 2, '42': 3, '2': 3 }[f] ?? 0;
  let quality: ChordQuality;
  if (f === 'maj7' || f === 'M7' || f === 'Δ7') quality = p.upper ? 'maj7' : 'minmaj7';
  else if (f === 'maj9') quality = p.upper ? 'maj9' : 'min9';
  else if (f === '7sus4') quality = 'dom7sus4';
  else if (f === '13') quality = p.upper ? 'dom13' : 'min13';
  else if (f === '11') quality = p.upper ? 'dom11' : 'min11';
  else if (f === 'sus4') quality = 'sus4';
  else if (f === 'sus2') quality = 'sus2';
  else if (f === 'add9') quality = p.upper ? 'add9' : 'min9';
  else if (f === '9') quality = p.upper ? 'dom9' : 'min9';
  else if (half) quality = 'm7b5';
  else if (dim) quality = seventh ? 'dim7' : 'dim';
  else if (aug) quality = 'aug';
  else if (seventh) quality = p.upper ? 'dom7' : 'min7';
  else quality = p.upper ? 'maj' : 'min';
  return { quality, inversion };
}

/** Root pitch-class name for a numeral degree in a key (see docs: `b` is relative to the major scale; `#` raises the mode's degree). */
function degreeRoot(tonic: string, mode: Mode, p: ParsedNumeral): string {
  const majorSt = SCALE_INTERVALS.major[p.degree - 1]!;
  const modeSt = (mode === 'major' ? SCALE_INTERVALS.major : SCALE_INTERVALS['natural-minor'])[p.degree - 1]!;
  let st: number;
  if (p.acc === -1) st = majorSt - 1;
  else if (p.acc === 1) st = modeSt + 1;
  else st = modeSt;
  // leading-tone diminished chords in minor (vii°, vii°7, viiø7) use the raised 7th
  if (mode === 'minor' && p.acc === 0 && p.degree === 7 && !p.upper) st = 11;
  let name = Key.majorKey(tonic).scale[p.degree - 1] ?? tonic;
  const diff = st - majorSt;
  for (let i = 0; i < Math.abs(diff); i++) name = Note.transpose(name, diff > 0 ? '1A' : '-1A');
  const pc = Note.pitchClass(/##|bb/.test(name) ? Note.simplify(name) : name);
  return pc || pcToName((parseKey(tonic).tonicPc + st) % 12);
}

/**
 * Roman numeral → chord in a key. Supports case for quality, °/ø/+, 7/maj7/sus/9 suffixes, figured-bass
 * inversions (6, 64, 65, 43, 42), accidentals (bVII, bIII, #iv°) and secondary chords (V/V, V7/ii, vii°/V).
 */
export function romanToChord(roman: string, key: string, mode?: Mode): RomanChord {
  const k = parseKey(key, mode);
  const trimmed = roman.trim();
  const slash = trimmed.indexOf('/');
  if (slash > 0) {
    const head = trimmed.slice(0, slash);
    const target = trimmed.slice(slash + 1);
    const t = romanToChord(target, k.tonic, k.mode);
    // tonicised chord is treated as a major key (minor targets: dominant family still major-based)
    const tMode: Mode = t.quality === 'min' || t.quality === 'min7' ? 'minor' : 'major';
    const inner = romanToChord(head, t.root, tMode);
    return { ...inner, roman: `${head}/${target}`, degree: t.degree, secondaryOf: target };
  }
  const p = parseNumeral(trimmed);
  const { quality, inversion } = qualityOf(p);
  const root = degreeRoot(k.tonic, k.mode, p);
  const chord = buildChord(root, quality);
  const bass = inversion > 0 ? chord.notes[inversion] : undefined;
  const withBass = bass ? buildChord(root, quality, bass) : chord;
  return { ...withBass, roman: trimmed, degree: p.degree, inversion };
}

export function tryRomanToChord(roman: string, key: string, mode?: Mode): RomanChord | null {
  try {
    return romanToChord(roman, key, mode);
  } catch {
    return null;
  }
}

export function isRomanNumeral(roman: string): boolean {
  return tryRomanToChord(roman, 'C') !== null;
}

const MAJOR_DEGREE_BY_ST: Record<number, [string, number]> = {
  0: ['', 1], 1: ['b', 2], 2: ['', 2], 3: ['b', 3], 4: ['', 3], 5: ['', 4], 6: ['#', 4], 7: ['', 5],
  8: ['b', 6], 9: ['', 6], 10: ['b', 7], 11: ['', 7],
};
const MINOR_DEGREE_BY_ST: Record<number, [string, number]> = {
  0: ['', 1], 1: ['b', 2], 2: ['', 2], 3: ['', 3], 4: ['#', 3], 5: ['', 4], 6: ['#', 4], 7: ['', 5],
  8: ['', 6], 9: ['#', 6], 10: ['', 7], 11: ['#', 7],
};

function numeralFor(acc: string, degree: number, quality: ChordQuality): string {
  const base = NUMERALS[degree - 1]!;
  const lower = ['min', 'dim', 'min7', 'm7b5', 'dim7', 'minmaj7', 'min6', 'min9', 'min11', 'min13'].includes(quality);
  const n = acc + (lower ? base.toLowerCase() : base);
  const suffix: Partial<Record<ChordQuality, string>> = {
    dim: '°', aug: '+', maj7: 'maj7', min7: '7', dom7: '7', m7b5: 'ø7', dim7: '°7', minmaj7: 'maj7',
    sus2: 'sus2', sus4: 'sus4', dom9: '9', min9: '9', add9: 'add9', maj9: 'maj9', dom7sus4: '7sus4', dom13: '13', min13: '13',
    dom11: '11', min11: '11',
  };
  return n + (suffix[quality] ?? '');
}

/** Chord symbol → roman numeral in a key ("G7" in C → "V7", "D7" in C → "V7/V", "Bb" in C → "bVII"). */
export function chordToRoman(symbol: string, key: string, mode?: Mode): string {
  const k = parseKey(key, mode);
  const c = parseChordSymbol(symbol);
  const st = (c.pitchClasses[0]! - k.tonicPc + 12) % 12;
  const table = k.mode === 'major' ? MAJOR_DEGREE_BY_ST : MINOR_DEGREE_BY_ST;
  const [acc, degree] = table[st]!;
  const direct = numeralFor(acc, degree, c.quality);
  // Secondary dominants: major/dom7 chord a fifth above a diatonic non-tonic chord, when not itself diatonic.
  const diatonic = isDiatonic(c, k.tonicPc, k.mode);
  if (!diatonic && (c.quality === 'maj' || c.quality === 'dom7')) {
    for (let d = 2; d <= 6; d++) {
      const targetSt = (k.mode === 'major' ? SCALE_INTERVALS.major : SCALE_INTERVALS['natural-minor'])[d - 1]!;
      if ((targetSt + 7) % 12 === st) {
        const targetQuality = diatonicTriadQuality(k.mode, d);
        if (targetQuality === 'dim') continue;
        return `${c.quality === 'dom7' ? 'V7' : 'V'}/${numeralFor('', d, targetQuality)}`;
      }
    }
  }
  return direct;
}

function diatonicTriadQuality(mode: Mode, degree: number): ChordQuality {
  const major: ChordQuality[] = ['maj', 'min', 'min', 'maj', 'maj', 'min', 'dim'];
  const minor: ChordQuality[] = ['min', 'dim', 'maj', 'min', 'min', 'maj', 'maj'];
  return (mode === 'major' ? major : minor)[degree - 1]!;
}

function isDiatonic(c: ParsedChord, tonicPc: number, mode: Mode): boolean {
  const scale = (mode === 'major' ? SCALE_INTERVALS.major : SCALE_INTERVALS['natural-minor']).map((s) => (tonicPc + s) % 12);
  const harmonic = mode === 'minor' ? SCALE_INTERVALS['harmonic-minor'].map((s) => (tonicPc + s) % 12) : [];
  return c.pitchClasses.every((pc) => scale.includes(pc)) || (harmonic.length > 0 && c.pitchClasses.every((pc) => harmonic.includes(pc)));
}

/** Diatonic triads (or 7th chords) of a key, degree 1..7. */
export function diatonicChords(key: string, mode?: Mode, sevenths = false): RomanChord[] {
  const k = parseKey(key, mode);
  const out: RomanChord[] = [];
  const iv = k.mode === 'major' ? SCALE_INTERVALS.major : SCALE_INTERVALS['natural-minor'];
  for (let d = 1; d <= 7; d++) {
    const pcs = [0, 2, 4, ...(sevenths ? [6] : [])].map((o) => {
      const idx = (d - 1 + o) % 7;
      return (iv[idx]! + (d - 1 + o >= 7 ? 12 : 0));
    });
    const rel = pcs.map((p) => p - pcs[0]!);
    const q = matchQuality(rel);
    const numeral = numeralFor('', d, q);
    out.push(romanToChord(numeral === 'vii°' && k.mode === 'minor' ? 'VII' : numeral, k.tonic, k.mode));
  }
  return out;
}

function matchQuality(rel: number[]): ChordQuality {
  const key = rel.join(',');
  const map: Record<string, ChordQuality> = {
    '0,4,7': 'maj', '0,3,7': 'min', '0,3,6': 'dim', '0,4,8': 'aug', '0,4,7,11': 'maj7', '0,3,7,10': 'min7',
    '0,4,7,10': 'dom7', '0,3,6,10': 'm7b5', '0,3,6,9': 'dim7',
  };
  return map[key] ?? 'maj';
}

/** Compare two numerals by the chord they produce in a key (root pc + quality), so "VII" ≡ "bVII" in minor. */
export function romanEquals(a: string, b: string, key: string, mode?: Mode): boolean {
  const ca = tryRomanToChord(a, key, mode);
  const cb = tryRomanToChord(b, key, mode);
  if (!ca || !cb) return false;
  return ca.pitchClasses[0] === cb.pitchClasses[0] && ca.quality === cb.quality;
}
