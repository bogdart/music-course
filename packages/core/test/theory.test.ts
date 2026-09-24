import { describe, expect, it } from 'vitest';
import {
  buildChord, chordMidi, chordToRoman, degreeToNoteName, degreeToPc, diatonicChords, identifyChord, intervalBetween,
  isNoteName, keySignatureLabel, midiToNote, noteToMidi, normaliseNote, parseChordSymbol, parseKey, pcToDegree, pitchClass,
  relativeKey, romanEquals, romanToChord, sameNote, samePitchClass, scaleMidi, scaleNotes, scalePitchClasses, SCALE_IDS,
  semitonesToInterval, transposeNote, CHORD_QUALITIES, CHORD_INTERVALS, tryParseChordSymbol, INTERVAL_SEMITONES,
} from '../src/index.js';

describe('notes', () => {
  it('converts note names to MIDI and back', () => {
    expect(noteToMidi('C4')).toBe(60);
    expect(noteToMidi('A4')).toBe(69);
    expect(noteToMidi('C#4')).toBe(61);
    expect(noteToMidi('Db4')).toBe(61);
    expect(noteToMidi('Bb3')).toBe(58);
    expect(noteToMidi('B#3')).toBe(60);
    expect(noteToMidi('Cb4')).toBe(59);
    expect(noteToMidi('c4')).toBe(60);
    expect(noteToMidi('F♯3')).toBe(54);
    expect(noteToMidi('C-1')).toBe(0);
    expect(midiToNote(61)).toBe('C#4');
    expect(midiToNote(61, { flats: true })).toBe('Db4');
    expect(midiToNote(21)).toBe('A0');
    for (let m = 0; m < 128; m++) expect(noteToMidi(midiToNote(m))).toBe(m);
  });
  it('rejects invalid names', () => {
    expect(() => noteToMidi('H4')).toThrow();
    expect(() => noteToMidi('C')).toThrow(/octave|Invalid/);
    expect(isNoteName('C')).toBe(true);
    expect(isNoteName('C', true)).toBe(false);
    expect(isNoteName('X#')).toBe(false);
  });
  it('pitch classes and enharmonics', () => {
    expect(pitchClass('F#4')).toBe(6);
    expect(pitchClass('Gb')).toBe(6);
    expect(pitchClass(61)).toBe(1);
    expect(samePitchClass('C#', 'Db5')).toBe(true);
    expect(samePitchClass('E#', 'F')).toBe(true);
    expect(sameNote('B#3', 'C4')).toBe(true);
    expect(sameNote('C3', 'C4')).toBe(false);
    expect(normaliseNote('E#4')).toBe('F4');
    expect(normaliseNote('Cb')).toBe('B');
    expect(normaliseNote('C##')).toBe('D');
    expect(normaliseNote('F#')).toBe('F#');
  });
});

describe('intervals', () => {
  it('semitones and ids', () => {
    expect(INTERVAL_SEMITONES.P5).toBe(7);
    expect(INTERVAL_SEMITONES.TT).toBe(6);
    expect(semitonesToInterval(4)).toBe('M3');
    expect(semitonesToInterval(12)).toBe('P8');
    expect(intervalBetween(60, 67)).toBe('P5');
    expect(intervalBetween(67, 60)).toBe('P5');
    expect(intervalBetween(60, 72)).toBe('P8');
    expect(intervalBetween(60, 76)).toBe('M3');
  });
  it('transposes with correct spelling', () => {
    expect(transposeNote('C4', 'M3')).toBe('E4');
    expect(transposeNote('E4', 'm3')).toBe('G4');
    expect(transposeNote('D4', 'M3')).toBe('F#4');
    expect(transposeNote('C4', 'P5', -1)).toBe('F3');
    expect(transposeNote('C4', 'TT')).toBe('F#4');
  });
});

describe('scales', () => {
  it('knows all scale ids from CONTENT_SCHEMA', () => {
    for (const id of ['major', 'natural-minor', 'harmonic-minor', 'melodic-minor', 'dorian', 'mixolydian', 'lydian', 'phrygian', 'locrian', 'major-pentatonic', 'minor-pentatonic', 'blues', 'whole-tone', 'diminished']) {
      expect(SCALE_IDS).toContain(id);
      expect(scaleNotes('C', id).length).toBeGreaterThan(4);
    }
  });
  it('spells scales', () => {
    expect(scaleNotes('D', 'major')).toEqual(['D', 'E', 'F#', 'G', 'A', 'B', 'C#']);
    expect(scaleNotes('F', 'major')).toEqual(['F', 'G', 'A', 'Bb', 'C', 'D', 'E']);
    expect(scaleNotes('A', 'natural-minor')).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
    expect(scaleNotes('A', 'harmonic-minor')).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G#']);
    expect(scaleNotes('D', 'dorian')).toEqual(['D', 'E', 'F', 'G', 'A', 'B', 'C']);
    expect(scaleNotes('A', 'minor-pentatonic')).toEqual(['A', 'C', 'D', 'E', 'G']);
    expect(scaleNotes('A', 'minor')).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
  });
  it('builds MIDI runs', () => {
    expect(scaleMidi('C4', 'major')).toEqual([60, 62, 64, 65, 67, 69, 71, 72]);
    expect(scaleMidi('C4', 'major', 1, 'asc-desc')).toHaveLength(15);
    expect(scaleMidi('C4', 'major-pentatonic', 2)).toHaveLength(11);
    expect(scalePitchClasses('G', 'major')).toEqual([7, 9, 11, 0, 2, 4, 6]);
    expect(scalePitchClasses('C', 'blues')).toEqual([0, 3, 5, 6, 7, 10]);
    expect(scalePitchClasses('C', 'whole-tone')).toEqual([0, 2, 4, 6, 8, 10]);
    expect(scalePitchClasses('C', 'diminished')).toEqual([0, 2, 3, 5, 6, 8, 9, 11]);
  });
});

describe('chords', () => {
  it('has intervals for all ear-chord qualities', () => {
    for (const q of ['maj', 'min', 'dim', 'aug', 'maj7', 'min7', 'dom7', 'm7b5', 'sus2', 'sus4']) {
      expect(CHORD_QUALITIES).toContain(q);
    }
    for (const q of CHORD_QUALITIES) expect(CHORD_INTERVALS[q].length).toBeGreaterThanOrEqual(2);
  });
  it('parses chord symbols', () => {
    expect(parseChordSymbol('Cmaj7')).toMatchObject({ root: 'C', quality: 'maj7', notes: ['C', 'E', 'G', 'B'] });
    expect(parseChordSymbol('Dm')).toMatchObject({ root: 'D', quality: 'min', notes: ['D', 'F', 'A'] });
    expect(parseChordSymbol('G7')).toMatchObject({ root: 'G', quality: 'dom7', notes: ['G', 'B', 'D', 'F'] });
    expect(parseChordSymbol('F#m7b5')).toMatchObject({ root: 'F#', quality: 'm7b5', notes: ['F#', 'A', 'C', 'E'] });
    expect(parseChordSymbol('Bb')).toMatchObject({ root: 'Bb', quality: 'maj', notes: ['Bb', 'D', 'F'] });
    expect(parseChordSymbol('C/E')).toMatchObject({ root: 'C', quality: 'maj', bass: 'E', symbol: 'C/E' });
    expect(parseChordSymbol('Ebdim7').quality).toBe('dim7');
    expect(parseChordSymbol('Bø7').quality).toBe('m7b5');
    expect(parseChordSymbol('Csus4').quality).toBe('sus4');
    expect(parseChordSymbol('Caug').notes).toEqual(['C', 'E', 'G#']);
    expect(parseChordSymbol('G13').quality).toBe('dom13');
    expect(parseChordSymbol('C6/9').quality).toBe('six9');
    expect(parseChordSymbol('A7b9').quality).toBe('dom7b9');
    expect(tryParseChordSymbol('Cfoo')).toBeNull();
    expect(tryParseChordSymbol('H7')).toBeNull();
  });
  it('voices chords in MIDI with inversions', () => {
    expect(chordMidi('C4', 'maj')).toEqual([60, 64, 67]);
    expect(chordMidi('C4', 'maj', 1)).toEqual([64, 67, 72]);
    expect(chordMidi('C4', 'maj', 2)).toEqual([67, 72, 76]);
    expect(chordMidi('C4', 'dom7', 3)).toEqual([70, 72, 76, 79]);
    const open = chordMidi('C4', 'maj7', 0, 'open');
    expect(open).toHaveLength(4);
    expect(Math.max(...open) - Math.min(...open)).toBeGreaterThan(12);
  });
  it('identifies chords from notes', () => {
    expect(identifyChord([60, 64, 67])).toEqual({ rootPc: 0, quality: 'maj', inversion: 0 });
    expect(identifyChord([64, 67, 72])).toEqual({ rootPc: 0, quality: 'maj', inversion: 1 });
    expect(identifyChord([57, 60, 64])).toMatchObject({ rootPc: 9, quality: 'min' });
    expect(identifyChord([67, 71, 74, 77])).toMatchObject({ rootPc: 7, quality: 'dom7' });
    expect(buildChord('D', 'dom7').symbol).toBe('D7');
  });
});

describe('keys', () => {
  it('parses keys and signatures', () => {
    expect(parseKey('G')).toMatchObject({ tonic: 'G', mode: 'major', sharps: 1, accidentals: ['F#'] });
    expect(parseKey('Bb')).toMatchObject({ flats: 2, accidentals: ['Bb', 'Eb'], prefersFlats: true });
    expect(parseKey('Am')).toMatchObject({ tonic: 'A', mode: 'minor', alteration: 0 });
    expect(parseKey('F# minor')).toMatchObject({ mode: 'minor', sharps: 3 });
    expect(parseKey('E', 'minor')).toMatchObject({ mode: 'minor', sharps: 1, vexKey: 'Em' });
    expect(keySignatureLabel('D')).toBe('2#');
    expect(keySignatureLabel('Eb')).toBe('3b');
    expect(keySignatureLabel('C')).toBe('0');
    expect(relativeKey('C')).toBe('Am');
    expect(relativeKey('Em')).toBe('G');
    expect(() => parseKey('H')).toThrow();
  });
  it('maps degrees', () => {
    expect(degreeToPc('C', 5)).toBe(7);
    expect(degreeToPc('G', '7')).toBe(6);
    expect(degreeToPc('C', 'b3')).toBe(3);
    expect(degreeToPc('A', '3', 'minor')).toBe(0);
    expect(degreeToNoteName('D', '5')).toBe('A');
    expect(degreeToNoteName('F', '4')).toBe('Bb');
    expect(degreeToNoteName('C', 'b7')).toBe('Bb');
    expect(pcToDegree('F#', 'D')).toBe('3');
    expect(pcToDegree('Eb4', 'C')).toBe('b3');
    expect(pcToDegree(63, 'C', 'minor')).toBe('3');
  });
});

describe('roman numerals', () => {
  const sym = (r: string, k: string, m?: 'major' | 'minor') => romanToChord(r, k, m).symbol;
  it('major keys', () => {
    expect(sym('I', 'C')).toBe('C');
    expect(sym('ii', 'C')).toBe('Dm');
    expect(sym('iii', 'C')).toBe('Em');
    expect(sym('IV', 'C')).toBe('F');
    expect(sym('V', 'C')).toBe('G');
    expect(sym('V7', 'C')).toBe('G7');
    expect(sym('vi', 'C')).toBe('Am');
    expect(sym('vii°', 'C')).toBe('Bdim');
    expect(sym('viiø7', 'C')).toBe('Bm7b5');
    expect(sym('Imaj7', 'F')).toBe('Fmaj7');
    expect(sym('bVII', 'C')).toBe('Bb');
    expect(sym('bVI', 'C')).toBe('Ab');
    expect(sym('bIII', 'C')).toBe('Eb');
    expect(sym('iv', 'C')).toBe('Fm');
    expect(sym('V', 'D')).toBe('A');
    expect(sym('IV', 'Bb')).toBe('Eb');
    expect(sym('bVII', 'G')).toBe('F');
  });
  it('minor keys', () => {
    expect(sym('i', 'A', 'minor')).toBe('Am');
    expect(sym('iv', 'Am')).toBe('Dm');
    expect(sym('V', 'Am')).toBe('E');
    expect(sym('V7', 'Am')).toBe('E7');
    expect(sym('III', 'Am')).toBe('C');
    expect(sym('VI', 'Am')).toBe('F');
    expect(sym('VII', 'Am')).toBe('G');
    expect(sym('bVII', 'Am')).toBe('G');
    expect(sym('bVI', 'Am')).toBe('F');
    expect(sym('ii°', 'Am')).toBe('Bdim');
    expect(sym('vii°7', 'Am')).toBe('G#dim7');
    expect(sym('i', 'C', 'minor')).toBe('Cm');
    expect(sym('bIII', 'Cm')).toBe('Eb');
  });
  it('secondary dominants and inversions', () => {
    expect(sym('V/V', 'C')).toBe('D');
    expect(sym('V7/V', 'C')).toBe('D7');
    expect(sym('V7/ii', 'C')).toBe('A7');
    expect(sym('V/vi', 'C')).toBe('E');
    expect(sym('V7/IV', 'C')).toBe('C7');
    expect(sym('vii°/V', 'C')).toBe('F#dim');
    expect(sym('V/V', 'G')).toBe('A');
    expect(romanToChord('I6', 'C')).toMatchObject({ inversion: 1, bass: 'E' });
    expect(romanToChord('V65', 'C')).toMatchObject({ quality: 'dom7', inversion: 1, bass: 'B' });
    expect(() => romanToChord('X', 'C')).toThrow();
  });
  it('chord → roman', () => {
    expect(chordToRoman('C', 'C')).toBe('I');
    expect(chordToRoman('Dm', 'C')).toBe('ii');
    expect(chordToRoman('G7', 'C')).toBe('V7');
    expect(chordToRoman('Bdim', 'C')).toBe('vii°');
    expect(chordToRoman('D7', 'C')).toBe('V7/V');
    expect(chordToRoman('D', 'C')).toBe('V/V');
    expect(chordToRoman('A7', 'C')).toBe('V7/ii');
    expect(chordToRoman('E', 'C')).toBe('V/vi');
    expect(chordToRoman('Bb', 'C')).toBe('bVII');
    expect(chordToRoman('Fm', 'C')).toBe('iv');
    expect(chordToRoman('Ab', 'C')).toBe('bVI');
    expect(chordToRoman('Em', 'G')).toBe('vi');
    expect(chordToRoman('D7', 'G')).toBe('V7');
    expect(chordToRoman('E', 'Am')).toBe('V');
    expect(chordToRoman('G', 'Am')).toBe('VII');
    expect(chordToRoman('Cmaj7', 'C')).toBe('Imaj7');
  });
  it('round-trips diatonic chords and compares by sound', () => {
    for (const k of ['C', 'G', 'F', 'Bb', 'E']) {
      for (const c of diatonicChords(k)) expect(romanToChord(chordToRoman(c.symbol, k), k).symbol).toBe(c.symbol);
    }
    expect(diatonicChords('C').map((c) => c.symbol)).toEqual(['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim']);
    expect(diatonicChords('C', 'major', true).map((c) => c.symbol)).toEqual(['Cmaj7', 'Dm7', 'Em7', 'Fmaj7', 'G7', 'Am7', 'Bm7b5']);
    expect(diatonicChords('A', 'minor').map((c) => c.symbol)).toEqual(['Am', 'Bdim', 'C', 'Dm', 'Em', 'F', 'G']);
    expect(romanEquals('VII', 'bVII', 'A', 'minor')).toBe(true);
    expect(romanEquals('V', 'v', 'A', 'minor')).toBe(false);
  });
});
