import { chordMidi, CHORD_INTERVALS, parseChordSymbol, tryParseChordSymbol, type ParsedChord } from '../theory/chords.js';
import { midiToNote, pcToName, pitchClass } from '../theory/notes.js';
import { chordToRoman, tryRomanToChord } from '../theory/roman.js';
import { parseKey } from '../theory/keys.js';
import type { ExerciseDefinition, PlayChordItem } from './types.js';
import { harmonic, ordinal, setOrder } from './util.js';

/** Parse a chord symbol, or a roman numeral when a key is given. */
export function chordFromSpec(c: string, key?: string): ParsedChord & { label: string } {
  const sym = tryParseChordSymbol(c);
  if (sym) return { ...sym, label: sym.symbol };
  if (key) {
    const r = tryRomanToChord(c, key);
    if (r) return { ...r, label: `${c} (${r.symbol})` };
  }
  return { ...parseChordSymbol(c), label: c };
}

/** Pitch class of a chord degree ("3", "b7", 9, "13") within a parsed chord, if the chord has it. */
export function chordDegreePc(chord: Pick<ParsedChord, 'quality' | 'pitchClasses'>, degree: string | number): number | null {
  const d = String(degree).replace(/^[b#♭♯]/, '');
  const ivs = CHORD_INTERVALS[chord.quality];
  const rootPc = chord.pitchClasses[0]!;
  const want: Record<string, number[]> = { '1': [0], '2': [1, 2, 3], '3': [3, 4, 2, 5], '4': [5, 6], '5': [6, 7, 8], '6': [8, 9], '7': [10, 11, 9], '9': [13, 14, 15], '11': [17, 18], '13': [20, 21] };
  for (const iv of want[d] ?? []) if (ivs.includes(iv)) return (rootPc + iv) % 12;
  // 9th / 13th on a 7th chord that does not list them (rootless voicings): major 9th / major 13th
  if (d === '9') return (rootPc + 2) % 12;
  if (d === '13') return (rootPc + 9) % 12;
  return null;
}

function requirements(chord: ParsedChord, voicing: PlayChordItem['voicing'], required?: (string | number)[]): { required: number[]; allowed: number[]; forbidden: number[] } {
  const pcs = chord.pitchClasses;
  const ivs = CHORD_INTERVALS[chord.quality];
  const rootPc = pcs[0]!;
  const allowed = new Set(pcs);
  if (required?.length) {
    const req = required.map((d) => chordDegreePc(chord, d)).filter((p): p is number => p !== null);
    for (const p of req) allowed.add(p);
    return { required: [...new Set(req)], allowed: [...allowed], forbidden: [] };
  }
  const third = chordDegreePc(chord, '3');
  const seventh = ivs.some((i) => i === 9 || i === 10 || i === 11) ? chordDegreePc(chord, '7') : null;
  if (voicing === 'shell') {
    const req = [rootPc, third, seventh ?? chordDegreePc(chord, '5')].filter((p): p is number => p !== null);
    return { required: [...new Set(req)], allowed: [...allowed], forbidden: [] };
  }
  if (voicing.startsWith('rootless')) {
    const ninth = (rootPc + (ivs.includes(13) ? 1 : ivs.includes(15) ? 3 : 2)) % 12;
    const thirteenth = (rootPc + (ivs.includes(20) ? 8 : 9)) % 12;
    allowed.add(ninth);
    allowed.add(thirteenth);
    allowed.delete(rootPc);
    const req = [third, seventh, ninth].filter((p): p is number => p !== null);
    return { required: [...new Set(req)], allowed: [...allowed], forbidden: [rootPc] };
  }
  // full: every chord tone; the 5th (and 11th of 13th chords) may be omitted in chords of 5+ notes
  let req = [...pcs];
  if (pcs.length >= 5) req = req.filter((p, i) => !(ivs[i] === 7 || (ivs[i] === 17 && ivs.includes(21))));
  return { required: [...new Set(req)], allowed: [...allowed], forbidden: [] };
}

/** Play a chord (all tones together). Inversion ("root", "any" or 0–3), slash bass and voicing rules are checked. */
export const playChord: ExerciseDefinition<'play-chord'> = {
  type: 'play-chord',
  implemented: true,
  naturalCount(block) {
    return block.spec.chords.length;
  },
  generate(block, rng, ctx) {
    const s = block.spec;
    if (!s.chords.length) throw new Error('play-chord: chords must not be empty');
    const pos = s.sequence ? ctx.index % s.chords.length : setOrder(rng, s.chords.length, ctx.index);
    const chord = chordFromSpec(s.chords[pos]!, s.key);
    const voicing: PlayChordItem['voicing'] = s.required?.length ? 'required' : (s.voicing ?? 'full');
    const req = requirements(chord, voicing, s.required);
    const inv = s.inversion ?? 'any';
    let bassPc: number | null = null;
    if (chord.bass) bassPc = pitchClass(chord.bass);
    else if (inv === 'root') bassPc = chord.pitchClasses[0]!;
    else if (typeof inv === 'number') bassPc = chord.pitchClasses[Math.min(inv, chord.pitchClasses.length - 1)]!;
    if (voicing === 'rootless-a') bassPc = chordDegreePc(chord, '3');
    if (voicing === 'rootless-b') bassPc = chordDegreePc(chord, '7');
    const rootMidi = 48 + chord.pitchClasses[0]!;
    let midis = chordMidi(rootMidi + 12 > 64 ? rootMidi : rootMidi + 12, chord.quality, typeof inv === 'number' ? inv : 0);
    if (voicing !== 'full') midis = midis.filter((m) => req.allowed.includes(pitchClass(m)) && !req.forbidden.includes(pitchClass(m)));
    if (bassPc !== null && pitchClass(Math.min(...midis)) !== bassPc) midis = [48 + bassPc - (48 + bassPc > 55 ? 12 : 0), ...midis];
    let flats = false;
    try {
      flats = s.key ? parseKey(s.key).prefersFlats : /b/.test(chord.root);
    } catch {
      /* ignore */
    }
    const invText = chord.bass ? ` with ${chord.bass} in the bass` : inv === 'root' ? ' in root position' : typeof inv === 'number' ? ` in ${ordinal(inv)}` : '';
    const vText = voicing === 'shell' ? ' as a shell voicing (root, 3rd, 7th)' : voicing.startsWith('rootless') ? ` as a rootless voicing${voicing === 'rootless-a' ? ' (3rd at the bottom)' : voicing === 'rootless-b' ? ' (7th at the bottom)' : ''}` : voicing === 'required' ? ` (must include ${s.required!.join(', ')})` : '';
    const roman = s.key ? (() => {
      try {
        return chordToRoman(chord.symbol.split('/')[0]!, s.key!);
      } catch {
        return null;
      }
    })() : null;
    const display = chord.label + (roman && !chord.label.includes('(') ? ` (${roman})` : '');
    return {
      type: 'play-chord', symbol: chord.symbol, rootPc: chord.pitchClasses[0]!, pitchClasses: chord.pitchClasses, bassPc,
      required: req.required, allowed: req.allowed, forbidden: req.forbidden, voicing, display, midis,
      ...(s.sequence ? { position: pos, sequence: s.chords } : {}),
      prompt: `Play ${display}${invText}${vText}. Hold the notes together.`,
      solution: `${chord.symbol}: ${midis.map((m) => midiToNote(m, { flats })).join(' ')}`,
      solutionAudio: harmonic(midis, { beats: 3, bpm: s.bpm ?? 80 }),
    };
  },
  evaluate(item, answer) {
    const played = (Array.isArray(answer) ? answer : []).filter((n): n is number => typeof n === 'number');
    if (played.length === 0) return { correct: false, score: 0, feedback: 'No notes played.', expected: item.solution };
    const pcs = [...new Set(played.map(pitchClass))];
    const missing = item.required.filter((p) => !pcs.includes(p));
    const wrong = pcs.filter((p) => !item.allowed.includes(p) || item.forbidden.includes(p));
    const bassOk = item.bassPc === null || pitchClass(Math.min(...played)) === item.bassPc;
    const notesOk = missing.length === 0 && wrong.length === 0;
    const correct = notesOk && bassOk;
    const toneScore = (item.required.length - missing.length) / Math.max(1, item.required.length) - 0.25 * wrong.length;
    const score = correct ? 1 : notesOk ? 0.5 : Math.max(0, Math.round(toneScore * 0.8 * 100) / 100);
    const name = (p: number) => pcToName(p);
    let feedback = 'Correct!';
    if (!correct) {
      const parts: string[] = [];
      if (missing.length) parts.push(`missing ${missing.map(name).join(', ')}`);
      if (wrong.length) parts.push(`${wrong.map(name).join(', ')} ${wrong.length > 1 ? "don't" : "doesn't"} belong`);
      if (notesOk && !bassOk) parts.push(`right notes, but the lowest note should be ${name(item.bassPc!)}`);
      else if (!bassOk) parts.push(`the lowest note should be ${name(item.bassPc!)}`);
      feedback = `Not quite — ${parts.join('; ')}.`;
    }
    return { correct, score, feedback, expected: item.solution, details: { missing, wrong, bassOk } };
  },
};
