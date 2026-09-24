import { describe, expect, it } from 'vitest';
import {
  createRng, evaluate, generate, generateSet, getExercise, implementedTypes, isImplemented, isSrsEligible, itemCount,
  NotImplementedError, notImplemented, srsKey, summarise, EXERCISE_TYPES, type ExerciseBlock, type ExerciseBlockOf, type Item,
  noteToMidi, pitchClass, INTERVAL_SEMITONES, type IntervalId, CHORD_INTERVALS, type ChordQuality, identifyChord,
} from '../src/index.js';

function block<T extends ExerciseBlock['type']>(type: T, spec: ExerciseBlockOf<T>['spec'], extra: Partial<ExerciseBlockOf<T>> = {}): ExerciseBlockOf<T> {
  return { id: 'e1', type, spec, ...extra } as ExerciseBlockOf<T>;
}

function many<T extends ExerciseBlock['type']>(b: ExerciseBlockOf<T>, n = 50): Item<T>[] {
  const rng = createRng(123);
  return Array.from({ length: n }, (_, i) => generate(b, rng, { index: i, count: n }));
}

describe('registry', () => {
  it('registers every catalogue type', () => {
    for (const t of EXERCISE_TYPES) expect(getExercise(t).type).toBe(t);
    expect(implementedTypes().sort()).toEqual([...EXERCISE_TYPES].sort());
  });
  it('stubs throw a clear error', () => {
    const stub = notImplemented('ear-scale');
    expect(stub.implemented).toBe(false);
    expect(() => stub.generate(block('ear-scale', { scales: ['major'] }), createRng(1), { index: 0, count: 1 })).toThrow(NotImplementedError);
    expect(() => stub.generate(block('ear-scale', { scales: ['major'] }), createRng(1), { index: 0, count: 1 })).toThrow(/ear-scale.*not implemented/);
    expect(isImplemented('nonsense')).toBe(false);
  });
  it('is deterministic for a seed', () => {
    const b = block('ear-interval', { intervals: ['M2', 'M3', 'P5'], direction: 'mixed' });
    expect(generateSet(b, 42).items).toEqual(generateSet(b, 42).items);
    expect(generateSet({ ...b, seed: 7 }, 42).seed).toBe(7);
    expect(generateSet(b, 42).items).toHaveLength(10);
  });
  it('item counts, SRS keys, summary', () => {
    expect(itemCount(block('quiz', { questions: [{ q: 'a', choices: ['1', '2'], answer: 0 }, { q: 'b', choices: ['1', '2'], answer: 1 }] }))).toBe(2);
    expect(itemCount(block('ear-note', { key: 'C', degrees: [1] }, { count: 6 }))).toBe(6);
    expect(itemCount(block('ear-note', { key: 'C', degrees: [1] }))).toBe(10);
    expect(itemCount(block('reflect', { prompt: 'x' }))).toBe(1);
    expect(itemCount(block('play-melody', { seq: 'C4:q' }))).toBe(1);
    expect(isSrsEligible({ type: 'ear-note' })).toBe(true);
    expect(isSrsEligible({ type: 'quiz' })).toBe(false);
    expect(isSrsEligible({ type: 'quiz', srs: true })).toBe(true);
    expect(isSrsEligible({ type: 'ear-note', srs: false })).toBe(false);
    const k1 = srsKey({ type: 'ear-note', spec: { key: 'C', degrees: [1, 2] } });
    const k2 = srsKey({ type: 'ear-note', spec: { degrees: [1, 2], key: 'C' } });
    expect(k1).toBe(k2);
    expect(k1).toMatch(/^ear-note:/);
    expect(summarise([{ score: 1, correct: true }, { score: 0.5, correct: false }], 0.7)).toMatchObject({ score: 0.75, passed: true, correct: 1 });
  });
});

describe('ear-note', () => {
  const b = block('ear-note', { key: 'G', mode: 'major', degrees: [1, 3, 5], reference: 'cadence', octaves: [3, 4] });
  it('generates notes of the requested degrees with cadence reference', () => {
    for (const item of many(b)) {
      expect(['1', '3', '5']).toContain(item.answer);
      const expectedPc = { '1': 7, '3': 11, '5': 2 }[item.answer]!;
      expect(pitchClass(item.midi)).toBe(expectedPc);
      expect(item.reference?.tracks[0]!.events.length).toBeGreaterThan(4);
      expect(item.choices!.map((c) => c.value)).toEqual(['1', '3', '5']);
    }
  });
  it('evaluates degree answers', () => {
    const item = many(b, 1)[0]!;
    expect(evaluate(item, item.answer).correct).toBe(true);
    expect(evaluate(item, item.answer === '1' ? '5' : '1')).toMatchObject({ correct: false, score: 0 });
  });
  it('supports note-name answers (enharmonic aware) and chromatic choices', () => {
    const nb = block('ear-note', { key: 'F', degrees: [4], answer: 'name', reference: 'none' });
    const item = many(nb, 1)[0]!;
    expect(item.answer).toBe('Bb');
    expect(item.reference).toBeUndefined();
    expect(evaluate(item, 'A#').correct).toBe(true);
    expect(evaluate(item, 'B').correct).toBe(false);
    const cb = block('ear-note', { key: 'C', degrees: ['b3', 3], chromatic: true });
    const ci = many(cb, 1)[0]!;
    expect(ci.choices).toHaveLength(12);
    expect(evaluate(ci, ci.answer === 'b3' ? '#2' : '3').correct).toBe(true);
  });
});

describe('ear-octave', () => {
  it('same-or-different', () => {
    const b = block('ear-octave', { notes: ['C', 'G'], octaves: [2, 3, 4, 5], mode: 'same-or-different' });
    const items = many(b, 60);
    expect(items.some((i) => i.answer === 'same')).toBe(true);
    expect(items.some((i) => i.answer === 'different')).toBe(true);
    for (const i of items) {
      const same = pitchClass(i.midis[0]!) === pitchClass(i.midis[1]!);
      expect(i.answer).toBe(same ? 'same' : 'different');
      if (same) expect(i.midis[0]).not.toBe(i.midis[1]);
      expect(evaluate(i, i.answer).correct).toBe(true);
      expect(evaluate(i, i.answer === 'same' ? 'different' : 'same').correct).toBe(false);
    }
  });
  it('higher-or-lower', () => {
    const b = block('ear-octave', { notes: ['C', 'E', 'G'], octaves: [3, 4], mode: 'higher-or-lower' });
    for (const i of many(b, 30)) {
      expect(i.midis[0]).not.toBe(i.midis[1]);
      expect(i.answer).toBe(i.midis[1]! > i.midis[0]! ? 'higher' : 'lower');
      expect(evaluate(i, i.answer).correct).toBe(true);
    }
  });
  it('which-octave', () => {
    const b = block('ear-octave', { notes: ['C'], octaves: [3, 4, 5], mode: 'which-octave' });
    for (const i of many(b, 20)) {
      expect(i.midis[0]).toBe(noteToMidi(`C${i.answer}`));
      expect(evaluate(i, Number(i.answer)).correct).toBe(true);
      expect(i.reference).toBeDefined();
    }
  });
});

describe('ear-interval', () => {
  it('generates intervals inside the range', () => {
    const b = block('ear-interval', { intervals: ['m3', 'M3', 'P5', 'P8'], direction: 'mixed', range: ['C3', 'C5'] });
    for (const i of many(b, 100)) {
      const [a, c] = i.midis;
      expect(Math.abs(c - a)).toBe(INTERVAL_SEMITONES[i.interval as IntervalId]);
      expect(Math.min(a, c)).toBeGreaterThanOrEqual(48);
      expect(Math.max(a, c)).toBeLessThanOrEqual(72);
      if (i.direction === 'desc') expect(c).toBeLessThan(a);
      if (i.direction === 'asc') expect(c).toBeGreaterThan(a);
      expect(evaluate(i, i.interval).correct).toBe(true);
    }
  });
  it('fixed root and wrong answers', () => {
    const b = block('ear-interval', { intervals: ['M2', 'M3'], direction: 'asc', root: 'C4' });
    const i = many(b, 1)[0]!;
    expect(i.midis[0]).toBe(60);
    expect(evaluate(i, i.interval === 'M2' ? 'M3' : 'M2')).toMatchObject({ correct: false, score: 0 });
  });
});

describe('ear-chord', () => {
  it('generates chords of the requested qualities within range', () => {
    const b = block('ear-chord', { qualities: ['maj', 'min', 'dom7'], range: ['C3', 'C5'] });
    for (const i of many(b, 60)) {
      expect(i.midis.length).toBe(CHORD_INTERVALS[i.quality as ChordQuality].length);
      expect(identifyChord(i.midis)?.quality).toBe(i.quality);
      expect(Math.min(...i.midis)).toBeGreaterThanOrEqual(48);
      expect(Math.max(...i.midis)).toBeLessThanOrEqual(72);
      expect(evaluate(i, i.quality).correct).toBe(true);
    }
  });
  it('asks for inversions when several are allowed', () => {
    const b = block('ear-chord', { qualities: ['maj', 'min'], inversions: [0, 1, 2] });
    for (const i of many(b, 30)) {
      expect(i.askInversion).toBe(true);
      expect(identifyChord(i.midis)?.inversion).toBe(i.inversion);
      expect(evaluate(i, `${i.quality}:${i.inversion}`).correct).toBe(true);
      expect(evaluate(i, { quality: i.quality, inversion: i.inversion }).correct).toBe(true);
      const wrongInv = evaluate(i, `${i.quality}:${(i.inversion + 1) % 3}`);
      expect(wrongInv).toMatchObject({ correct: false, score: 0.5 });
    }
  });
});

describe('play-notes', () => {
  it('ordered exact', () => {
    const i = many(block('play-notes', { notes: ['C4', 'E4', 'G4'], ordered: true }), 1)[0]!;
    expect(i.midis).toEqual([60, 64, 67]);
    expect(evaluate(i, [60, 64, 67]).correct).toBe(true);
    expect(evaluate(i, [64, 60, 67])).toMatchObject({ correct: false });
    expect(evaluate(i, [60, 64, 67]).score).toBe(1);
    expect(evaluate(i, [60, 64, 68]).score).toBeCloseTo(2 / 3, 2);
    expect(evaluate(i, [72, 76, 79]).correct).toBe(false);
  });
  it('unordered and any-octave', () => {
    const i = many(block('play-notes', { notes: ['C', 'E', 'G'], ordered: false }), 1)[0]!;
    expect(i.octave).toBe('any');
    expect(evaluate(i, [67, 48, 76]).correct).toBe(true);
    expect(evaluate(i, [67, 48]).correct).toBe(false);
    const d = many(block('play-notes', { notes: ['D4', 'F#4'], prompt: 'degrees', key: 'D' }), 1)[0]!;
    expect(d.labels).toEqual(['1', '3']);
  });
  it('multiple sets cycle by index', () => {
    const b = block('play-notes', { notes: [['C4'], ['D4'], ['E4']] });
    expect(itemCount(b)).toBe(3);
    expect(generateSet(b, 1).items.map((i) => i.midis[0])).toEqual([60, 62, 64]);
  });
});

describe('quiz', () => {
  const b = block('quiz', {
    questions: [
      { q: 'Half steps in a perfect fifth?', choices: ['5', '6', '7', '8'], answer: 2, explain: 'P5 = 7.' },
      { q: 'Which are major triads?', choices: ['C E G', 'D F A', 'F A C'], answers: [0, 2] },
    ],
  });
  it('single answer', () => {
    const i = generateSet(b, 1).items[0]!;
    expect(i.choices).toHaveLength(4);
    expect(evaluate(i, 2)).toMatchObject({ correct: true, score: 1 });
    expect(evaluate(i, 1)).toMatchObject({ correct: false, score: 0 });
    expect(evaluate(i, 2).feedback).toContain('P5 = 7.');
  });
  it('multiple answers with partial credit', () => {
    const i = generateSet(b, 1).items[1]!;
    expect(i.multi).toBe(true);
    expect(evaluate(i, [0, 2]).correct).toBe(true);
    expect(evaluate(i, [0]).score).toBe(0.5);
    expect(evaluate(i, [0, 1]).score).toBe(0);
  });
});

describe('quiz-input', () => {
  const b = block('quiz-input', {
    questions: [
      { q: 'Name the 5th degree of D major', answer: ['A'], kind: 'note' },
      { q: 'Half steps in a major third?', answer: 4, kind: 'number' },
      { q: 'What do we call the first note of a scale?', answer: ['tonic', 'root'], kind: 'text' },
      { q: 'Which black key is between C and D?', answer: ['C#'], kind: 'note' },
    ],
  });
  const items = generateSet(b, 1).items;
  it('note answers are enharmonic-aware', () => {
    expect(evaluate(items[0]!, 'a').correct).toBe(true);
    expect(evaluate(items[0]!, 'G##').correct).toBe(true);
    expect(evaluate(items[0]!, 'B').correct).toBe(false);
    expect(evaluate(items[3]!, 'Db').correct).toBe(true);
    expect(evaluate(items[3]!, 'C sharp').correct).toBe(true);
    expect(evaluate(items[3]!, 'D flat').correct).toBe(true);
  });
  it('number and text answers are normalised', () => {
    expect(evaluate(items[1]!, ' 4 ').correct).toBe(true);
    expect(evaluate(items[1]!, '5').correct).toBe(false);
    expect(evaluate(items[1]!, '').correct).toBe(false);
    expect(evaluate(items[2]!, '  The Tonic ').correct).toBe(false);
    expect(evaluate(items[2]!, 'Tonic.').correct).toBe(true);
    expect(evaluate(items[2]!, 'ROOT').correct).toBe(true);
  });
});

describe('read-note', () => {
  it('generates natural notes in range for treble', () => {
    const b = block('read-note', { clef: 'treble', range: ['C4', 'G5'], answer: 'name' });
    for (const i of many(b, 50)) {
      expect(i.midi).toBeGreaterThanOrEqual(60);
      expect(i.midi).toBeLessThanOrEqual(79);
      expect(i.note).not.toMatch(/[#b]/);
      expect(i.choices).toHaveLength(7);
      expect(evaluate(i, i.note.replace(/\d+$/, '')).correct).toBe(true);
    }
  });
  it('both clefs split around middle C; accidentals; play answers', () => {
    const b = block('read-note', { clef: 'both', range: ['C2', 'C6'], accidentals: true, answer: 'play' });
    for (const i of many(b, 60)) {
      if (i.clef === 'treble') expect(i.midi).toBeGreaterThanOrEqual(60);
      else expect(i.midi).toBeLessThanOrEqual(60);
      expect(evaluate(i, i.midi).correct).toBe(true);
      expect(evaluate(i, i.midi + 12)).toMatchObject({ correct: false, score: 0.5 });
      expect(evaluate(i, i.midi + 1).score).toBe(0);
    }
  });
});
