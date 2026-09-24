import { describe, expect, it } from 'vitest';
import {
  applySwing, createRng, evaluate, generate, generateSet, parseSeq, pitchClass, randomRhythm, rhythmTargets, romanToChord,
  scorePerformance, scoreSequence, snippetFromEnvelope, tickSeconds, parseSeqDetailed, PPQ, EXERCISE_TYPES,
  type ExerciseBlock, type ExerciseBlockOf, type Item, type PerfTarget,
} from '../src/index.js';
import { perfAnswer, solve } from './solve.js';

function block<T extends ExerciseBlock['type']>(type: T, spec: ExerciseBlockOf<T>['spec'], extra: Partial<ExerciseBlockOf<T>> = {}): ExerciseBlockOf<T> {
  return { id: 'e1', type, spec, ...extra } as ExerciseBlockOf<T>;
}
function many<T extends ExerciseBlock['type']>(b: ExerciseBlockOf<T>, n = 40): Item<T>[] {
  const rng = createRng(99);
  return Array.from({ length: n }, (_, i) => generate(b, rng, { index: i, count: n }));
}
/** Every generated item is solved by its ideal answer, and deterministic per seed. */
function selfCheck(b: ExerciseBlock, n = 30) {
  const a = generateSet(b, 5).items;
  expect(generateSet(b, 5).items).toEqual(a);
  for (const it of many(b, n)) {
    const r = evaluate(it, solve(it));
    expect(r.correct, `${b.type}: ${r.feedback}`).toBe(true);
    expect(r.score).toBe(1);
  }
}

// ---------------------------------------------------------------- timing scorer

describe('scorePerformance', () => {
  const q = (i: number, midi: number | null = 60): PerfTarget => ({ midi, startTick: i * PPQ, durationTicks: PPQ });
  const targets = [q(0, 60), q(1, 62), q(2, 64), q(3, 65)];
  const at = (beat: number, midi: number) => ({ midi, time: tickSeconds(beat * PPQ, 60) });

  it('perfect performance scores 1', () => {
    const r = scorePerformance(targets, [at(0, 60), at(1, 62), at(2, 64), at(3, 65)], { bpm: 60 });
    expect(r.score).toBe(1);
    expect(r.correct).toBe(true);
    expect(r.notes.every((n) => n.status === 'ok')).toBe(true);
  });
  it('tolerance scales with tempo (±25% of a beat)', () => {
    const slow = scorePerformance([q(0)], [{ midi: 60, time: 0.2 }], { bpm: 60 }); // tol 250 ms
    expect(slow.notes[0]!.status).toBe('ok');
    const fast = scorePerformance([q(0)], [{ midi: 60, time: 0.2 }], { bpm: 150 }); // tol 100 ms
    expect(fast.notes[0]!.status).toBe('late');
    expect(fast.toleranceSec).toBeCloseTo(0.1);
  });
  it('early/late get partial credit and are reported', () => {
    const r = scorePerformance(targets, [at(0, 60), at(1.4, 62), at(1.65, 64), at(3, 65)], { bpm: 60 });
    const st = r.notes.map((n) => n.status);
    expect(st).toEqual(['ok', 'late', 'early', 'ok']);
    expect(r.score).toBeGreaterThan(0.5);
    expect(r.score).toBeLessThan(1);
    expect(r.counts.late).toBe(1);
  });
  it('wrong notes, octave errors, misses and extras', () => {
    const r = scorePerformance(targets, [at(0, 72), at(1, 61), at(3, 65), at(3.5, 67)], { bpm: 60 });
    expect(r.notes.map((n) => n.status)).toEqual(['octave', 'wrong', 'missed', 'ok']);
    expect(r.extras).toEqual([3]);
    expect(r.correct).toBe(false);
    // pitch-class mode forgives the octave
    const pc = scorePerformance(targets, [at(0, 72), at(1, 62), at(2, 64), at(3, 65)], { bpm: 60, pitchMode: 'pitch-class' });
    expect(pc.correct).toBe(true);
  });
  it('taps ignore pitch; tight rhythms shrink the tolerance', () => {
    const t16: PerfTarget[] = [0, 1, 2, 3].map((i) => ({ midi: null, startTick: (i * PPQ) / 4, durationTicks: PPQ / 4 }));
    const r = scorePerformance(t16, [0, 0.125, 0.25, 0.375].map((t) => ({ midi: 36, time: t })), { bpm: 120, pitchMode: 'none' });
    expect(r.correct).toBe(true);
    expect(r.toleranceSec).toBeLessThanOrEqual(0.125 * 0.45 + 1e-9);
  });
  it('chords: simultaneous targets match by pitch', () => {
    const chord: PerfTarget[] = [60, 64, 67].map((m) => ({ midi: m, startTick: 0, durationTicks: PPQ }));
    const r = scorePerformance(chord, [{ midi: 67, time: 0.01 }, { midi: 60, time: 0.02 }, { midi: 64, time: 0 }], { bpm: 90 });
    expect(r.correct).toBe(true);
  });
  it('keeps order: consistently late taps on 8ths are "late", not shifted to the next note', () => {
    const eighths: PerfTarget[] = [0, 1, 2, 3].map((i) => ({ midi: null, startTick: (i * PPQ) / 2, durationTicks: PPQ / 2 }));
    // 90 BPM: 8th = 333 ms, tolerance = 150 ms; every tap 200 ms late (= 133 ms *early* for the next 8th)
    const taps = [0, 1, 2, 3].map((i) => ({ midi: 76, time: i / 3 + 0.2 }));
    const r = scorePerformance(eighths, taps, { bpm: 90, pitchMode: 'none' });
    expect(r.notes.map((n) => n.status)).toEqual(['late', 'late', 'late', 'late']);
    expect(r.extras).toEqual([]);
  });
  it('a genuinely missing note is skipped without shifting the rest', () => {
    const r = scorePerformance(targets, [at(0, 60), at(2, 64), at(3, 65)], { bpm: 60 });
    expect(r.notes.map((n) => n.status)).toEqual(['ok', 'missed', 'ok', 'ok']);
  });
  it('reports a consistent offset', () => {
    const r = scorePerformance(targets, [at(0.15, 60), at(1.15, 62), at(2.15, 64), at(3.15, 65)], { bpm: 60 });
    expect(r.meanOffsetSec).toBeCloseTo(0.15, 2);
    expect(r.correct).toBe(true);
  });
});

describe('scoreSequence', () => {
  it('aligns with LCS and is octave-lenient by default', () => {
    const r = scoreSequence([60, 62, 64], [72, 62, 64]);
    expect(r.correct).toBe(true);
    const r2 = scoreSequence([60, 62, 64, 65], [60, 63, 64, 65]);
    expect(r2.hits).toEqual([true, false, true, true]);
    expect(r2.score).toBe(0.75);
    const r3 = scoreSequence([60, 62], [60, 61, 62]);
    expect(r3.extras).toEqual([1]);
    expect(r3.correct).toBe(false);
    expect(scoreSequence([60], [72], 'exact').correct).toBe(false);
  });
});

describe('swing and tempo changes', () => {
  it('delays off-beat eighths', () => {
    const ev = applySwing(parseSeq('C4:8 D4:8 E4:q'), 1);
    expect(ev[0]!.durationTicks).toBe(PPQ / 2 + PPQ / 6);
    expect(ev[1]!.startTick).toBe(PPQ / 2 + PPQ / 6);
    expect(ev[1]!.startTick + ev[1]!.durationTicks).toBe(PPQ);
    expect(ev[2]!.startTick).toBe(PPQ);
    expect(applySwing(ev, 0)).toBe(ev);
  });
  it('envelopes carry swing, pan and tempo changes', () => {
    const s = snippetFromEnvelope({ bpm: 100, swing: 0.5, tempoChanges: [{ bar: 3, bpm: 120 }], tracks: [{ instrument: 'guitar', seq: 'C4:8 D4:8', pan: -0.5 }] });
    expect(s.tracks[0]!.pan).toBe(-0.5);
    expect(s.tracks[0]!.events[1]!.startTick).toBe(PPQ / 2 + PPQ / 12);
    expect(s.tempoChanges).toEqual([{ tick: 2 * 4 * PPQ, bpm: 120 }]);
  });
});

describe('roman numerals (M2 additions)', () => {
  it('parses 7sus4, 13, 11, maj9 and minor-key numerals', () => {
    expect(romanToChord('V7sus4', 'C').symbol).toBe('G7sus4');
    expect(romanToChord('V13', 'C').symbol).toBe('G13');
    expect(romanToChord('ii11', 'C').symbol).toBe('Dm11');
    expect(romanToChord('Imaj9', 'C').symbol).toBe('Cmaj9');
    expect(romanToChord('VI7', 'Am').symbol).toBe('F7');
    expect(romanToChord('v7', 'Em').symbol).toBe('Bm7');
    expect(romanToChord('bVI', 'C').symbol).toBe('Ab');
  });
});

describe('rhythm generator', () => {
  it('fills whole bars, starts with a hit and uses the subdivision', () => {
    const rng = createRng(3);
    for (const [ts, sub] of [['4/4', '8'], ['3/4', '16'], ['6/8', '8'], ['7/8', '8'], ['5/4', '8t'], ['4/4', 'q']] as const) {
      for (let i = 0; i < 20; i++) {
        const seq = randomRhythm(rng, { timeSig: ts, bars: 2, subdivision: sub, rests: true });
        const p = parseSeqDetailed(seq, { timeSig: ts });
        expect(p.bars, `${ts} ${seq}`).toBeCloseTo(2, 5);
        expect(p.items[0]!.kind).toBe('hit');
      }
    }
  });
  it('rhythm targets repeat with loops', () => {
    expect(rhythmTargets('x:q x:q r:h', '4/4', 2).map((t) => t.startTick)).toEqual([0, 480, 1920, 2400]);
  });
});

// ---------------------------------------------------------------- evaluators (every type)

describe('every implemented type: ideal answers pass', () => {
  const specs: ExerciseBlock[] = [
    block('ear-chord-root', { qualities: ['maj', 'min', 'dom7'], answer: 'play', inversions: [0, 1, 2] }),
    block('ear-chord-root', { qualities: ['maj', 'min'], answer: 'name' }),
    block('ear-scale', { scales: ['major', 'dorian', 'blues'], play: 'melody' }),
    block('ear-scale', { scales: ['major', 'natural-minor'], play: 'asc-desc', root: 'D' }),
    block('ear-progression', { key: 'random', chords: ['I', 'IV', 'V', 'vi', 'V7/V'], length: 4, style: 'arpeggio', inversions: [0, 1] }),
    block('ear-progression', { key: 'Am', chords: ['i', 'iv', 'V7', 'bVI', 'VII'], style: 'pad-bass' }),
    block('ear-melody', { key: 'G', degrees: [1, 2, 3, 5, 6], length: 6, rhythm: 'simple', answer: 'play', maxLeap: 5 }),
    block('ear-melody', { key: 'random', degrees: [1, 2, 3, 4, 5], length: 5, rhythm: 'free', answer: 'degrees', chromatic: true, backing: ['I', 'V'] }),
    block('ear-rhythm', { timeSig: '4/4', subdivision: '16', answer: 'choose', choices: 3 }),
    block('ear-rhythm', { timeSig: '6/8', subdivision: '8', answer: 'tap', rests: true }),
    block('ear-rhythm', { voices: ['kick', 'snare', 'hihat'], subdivision: '8', bars: 1 }),
    block('ear-bass', { key: 'F', chords: ['I', 'IV', 'V', 'vi'], answer: 'play', inversions: [0, 1] }),
    block('ear-bass', { key: 'Dm', chords: ['i', 'iv', 'V'], answer: 'name' }),
    block('ear-tempo', { range: [70, 140], tolerance: 5 }),
    block('ear-meter', { meters: ['3/4', '4/4', '6/8', '7/8'] }),
    block('play-scale', { root: 'random', scale: 'harmonic-minor', octaves: 2, direction: 'asc-desc', tempo: 80, hands: 'both' }),
    block('play-scale', { root: 'Eb', scale: 'major' }),
    block('play-chord', { chords: ['C', 'Am7', 'G7/B', 'F#m7b5'], inversion: 'any' }),
    block('play-chord', { chords: ['C', 'F', 'G'], inversion: 1, sequence: true }),
    block('play-chord', { chords: ['Dm7', 'G7', 'Cmaj7'], voicing: 'shell' }),
    block('play-chord', { chords: ['Dm9', 'G13', 'Cmaj9'], voicing: 'rootless-a' }),
    block('play-chord', { chords: ['G7'], required: ['3', '7'] }),
    block('play-melody', { bpm: 90, seq: 'C4:q E4:8 G4:8 C5:h | [C4 E4]:w', tracks: [{ instrument: 'piano', seq: 'C3:w | G2:w' }], swing: 0.6, backing: { instrument: 'pad', seq: '[C3 G3]:w | [C3 G3]:w' } }),
    block('rhythm-tap', { bpm: 100, seq: 'x:q x:8 x:8 r:q x:q', loops: 2 }),
    block('read-rhythm', { timeSig: '3/4', bars: 2, subdivision: '8' }),
    block('build-chord', { chords: ['Cmaj7', 'F#m7b5', 'Bb/D'], root: 'given' }),
    block('build-chord', { chords: ['ii7', 'V7', 'Imaj7'], prompt: 'roman', key: 'Eb' }),
    block('build-scale', { roots: ['D', 'Bb', 'F#'], scale: 'dorian' }),
    block('build-interval', { intervals: ['M3', 'P5', 'm7', 'M9'], direction: 'asc' }),
    block('build-interval', { intervals: ['m3', 'P4'], direction: 'desc', root: 'E4' }),
    block('read-note', { clef: 'treble', mode: 'interval', intervals: ['M2', 'M3', 'P5'] }),
    block('key-signature', { keys: ['G', 'D', 'F', 'Bb'], prompt: 'staff', answer: 'name' }),
    block('key-signature', { keys: ['A', 'Eb', 'Em'], prompt: 'name', answer: 'count' }),
    block('key-signature', { keys: ['C', 'G'], prompt: 'name', answer: 'name' }),
    block('roman-analysis', { key: 'G', chords: ['G', 'Em7', 'C', 'D7', 'A7', 'Eb'] }),
    block('roman-analysis', { key: 'Am', chords: ['Am', 'Dm', 'E7', 'F', 'G'], prompt: 'play' }),
    block('listen', { example: { tracks: [{ instrument: 'piano', seq: 'C4:q' }] }, questions: [{ q: 'a?', choices: ['x', 'y'], answer: 1 }, { q: 'b?', choices: ['x', 'y', 'z'], answers: [0, 2] }] }),
    block('listen', { examples: [{ tracks: [{ instrument: 'piano', seq: 'C4:q' }] }, { tracks: [{ instrument: 'bass', seq: 'C2:q' }] }] }),
    block('reflect', { prompt: 'Why?', minWords: 5 }),
    block('play-notes', { sets: [['C4', 'E4'], ['D4', 'F4']] }),
  ];
  for (const b of specs) it(`${b.type} ${JSON.stringify(b.spec).slice(0, 60)}`, () => selfCheck(b));
  it('covers every catalogue type except daw-task', () => {
    const covered = new Set(specs.map((b) => b.type));
    for (const t of EXERCISE_TYPES) if (t !== 'daw-task' && !['ear-note', 'ear-octave', 'ear-interval', 'ear-chord', 'quiz', 'quiz-input'].includes(t)) expect(covered.has(t), t).toBe(true);
  });
});

describe('evaluator details', () => {
  const one = <T extends ExerciseBlock['type']>(b: ExerciseBlockOf<T>, seed = 1): Item<T> => generateSet(b, seed).items[0]!;

  it('ear-chord-root: any octave, chord tone that is not the root gets a hint', () => {
    const it = one(block('ear-chord-root', { qualities: ['maj'], answer: 'play' }));
    expect(evaluate(it, it.rootPc + 72).correct).toBe(true);
    const third = evaluate(it, it.rootPc + 4 + 60);
    expect(third.correct).toBe(false);
    expect(third.feedback).toMatch(/in the chord, but it is not the root/);
    expect(evaluate({ ...it, answerKind: 'name' }, it.rootName).correct).toBe(true);
  });
  it('ear-progression: partial credit per chord, root-only half credit', () => {
    const it = one(block('ear-progression', { key: 'C', chords: ['I', 'IV', 'V', 'vi'], length: 4 }));
    expect(it.numerals[0]).toBe('I');
    const wrong = [...it.slots];
    wrong[1] = wrong[1] === 'IV' ? 'V' : 'IV';
    const r = evaluate(it, wrong);
    expect(r.score).toBe(0.75);
    expect(r.details!.slots).toEqual([true, false, true, true]);
    expect(evaluate({ ...it, slots: ['V7'] }, ['V']).score).toBe(0.5);
    // minor numerals compare by chord: VII ≡ bVII in minor
    const m = one(block('ear-progression', { key: 'Am', chords: ['i', 'VII'], length: 2 }));
    expect(evaluate(m, m.slots.map((s) => (s === 'VII' ? 'bVII' : s))).correct).toBe(true);
  });
  it('ear-progression with an attached mix uses `progression` as the answer', () => {
    const b = block('ear-progression', { key: 'C', chords: ['I', 'IV', 'V'], progression: ['I', 'V', 'vi', 'IV'], example: { bpm: 90, tracks: [{ instrument: 'piano', seq: '[C4 E4 G4]:w' }] } });
    const set = generateSet(b, 1).items;
    expect(set).toHaveLength(1);
    expect(set[0]!.slots).toEqual(['I', 'V', 'vi', 'IV']);
    expect(set[0]!.palette.map((p) => p.value)).toContain('vi');
  });
  it('ear-bass: inversions put the 3rd in the bass; mix transcription takes the bass track', () => {
    const items = generateSet(block('ear-bass', { key: 'C', chords: ['I'], inversions: [1], length: 2 }), 2).items;
    expect(pitchClass(items[0]!.midis[0]!)).toBe(4); // E
    const mix = one(block('ear-bass', { key: 'C', chords: ['I'], example: { tracks: [{ instrument: 'piano', seq: '[C4 E4]:h' }, { instrument: 'bass', seq: 'C2:q G2:q A2:q F2:q' }] } }));
    expect(mix.midis.map(pitchClass)).toEqual([0, 7, 9, 5]);
    expect(evaluate(mix, [48, 55, 57, 53]).correct).toBe(true);
    expect(evaluate(mix, [48, 55, 57]).score).toBe(0.75);
  });
  it('ear-melody: maxLeap, chromatic palette, degrees answers', () => {
    for (const it of many(block('ear-melody', { key: 'C', degrees: [1, 2, 3, 4, 5, 6, 7], length: 8, maxLeap: 4 }), 30)) {
      for (let i = 1; i < it.midis.length; i++) expect(Math.abs(it.midis[i]! - it.midis[i - 1]!)).toBeLessThanOrEqual(4);
    }
    const c = one(block('ear-melody', { key: 'C', degrees: [1, 3, 5], chromatic: true, answer: 'degrees' }));
    expect(c.palette!.length).toBe(12);
    const d = one(block('ear-melody', { key: 'D', degrees: [1, 2, 3], answer: 'degrees', length: 3 }));
    expect(evaluate(d, ['1', '1', '1']).correct).toBe(d.degrees.every((x) => x === '1'));
  });
  it('ear-rhythm: choose compares onsets; grid scores per cell', () => {
    const it = one(block('ear-rhythm', { subdivision: '8', answer: 'choose' }));
    expect(it.choices!.length).toBe(4);
    expect(new Set(it.choices!.map((c) => c.value)).size).toBe(4);
    expect(evaluate(it, it.answer!).correct).toBe(true);
    const g = one(block('ear-rhythm', { voices: ['kick', 'snare'], subdivision: '8' }));
    const flipped = { kick: g.grid!.kick!.map((b, i) => (i === 0 ? !b : b)), snare: g.grid!.snare! };
    const r = evaluate(g, { grid: flipped });
    expect(r.correct).toBe(false);
    expect(r.score).toBeCloseTo(1 - 1 / 16);
  });
  it('ear-rhythm tap mode scores timing', () => {
    const it = one(block('ear-rhythm', { subdivision: 'q', answer: 'tap', bpm: 60 }));
    const late = perfAnswer(it.performance!, 0.3);
    const r = evaluate(it, late);
    expect(r.correct).toBe(false);
    expect(r.details!.performance!.counts.late).toBeGreaterThan(0);
  });
  it('ear-tempo: tolerance, half-time hint and partial credit', () => {
    const it = one(block('ear-tempo', { range: [100, 100], tolerance: 4 }));
    expect(evaluate(it, 103).correct).toBe(true);
    expect(evaluate(it, '96 bpm').correct).toBe(true);
    expect(evaluate(it, 50).feedback).toMatch(/half\/double/);
    const near = evaluate(it, 108);
    expect(near.correct).toBe(false);
    expect(near.score).toBeGreaterThan(0.5);
    expect(evaluate(it, 'abc').score).toBe(0);
  });
  it('play-chord: inversion, slash bass, extra/missing notes, voicings', () => {
    const c = one(block('play-chord', { chords: ['C'], inversion: 'root' }));
    expect(evaluate(c, [48, 64, 67, 72]).correct).toBe(true); // doubled root fine
    expect(evaluate(c, [52, 55, 60]).score).toBe(0.5); // right notes, wrong bass
    expect(evaluate(c, [60, 64]).correct).toBe(false);
    expect(evaluate(c, [60, 63, 67]).feedback).toMatch(/missing E/);
    const inv = one(block('play-chord', { chords: ['F'], inversion: 2 }));
    expect(evaluate(inv, [60, 65, 69]).correct).toBe(true);
    const slash = one(block('play-chord', { chords: ['G/B'] }));
    expect(evaluate(slash, [47, 55, 62]).correct).toBe(true);
    expect(evaluate(slash, [43, 59, 62]).correct).toBe(false);
    const shell = one(block('play-chord', { chords: ['G7'], voicing: 'shell' }));
    expect(evaluate(shell, [43, 53, 59]).correct).toBe(true); // G F B
    const rootless = one(block('play-chord', { chords: ['G7'], voicing: 'rootless-b' }));
    expect(evaluate(rootless, [53, 57, 59, 64]).correct).toBe(true); // F A B E (7 9 3 13)
    expect(evaluate(rootless, [53, 57, 59, 67]).correct).toBe(false); // root not allowed
    const req = one(block('play-chord', { chords: ['Cmaj7'], required: ['3', '7'] }));
    expect(evaluate(req, [64, 71]).correct).toBe(true);
    expect(evaluate(req, [60, 64]).correct).toBe(false);
  });
  it('build-*: set comparison with partial credit; interval octave half credit', () => {
    const bc = one(block('build-chord', { chords: ['Dm7'] }));
    expect(evaluate(bc, [2, 5, 9, 0]).correct).toBe(true);
    expect(evaluate(bc, [2, 5, 9]).score).toBe(0.75);
    const bs = one(block('build-scale', { roots: ['G'], scale: 'major' }));
    expect(evaluate(bs, [67, 69, 71, 72, 74, 76, 78]).correct).toBe(true);
    expect(evaluate(bs, [7, 9, 11, 0, 2, 4, 5]).feedback).toMatch(/F doesn't belong|missing F#/);
    const bi = one(block('build-interval', { intervals: ['P5'], root: 'C4' }));
    expect(evaluate(bi, 67).correct).toBe(true);
    expect(evaluate(bi, 79).score).toBe(0.5);
    expect(evaluate(bi, 66).score).toBe(0);
  });
  it('key-signature: names, counts, relatives', () => {
    const ks = one(block('key-signature', { keys: ['D'], answer: 'count' }));
    expect(evaluate(ks, '2#').correct).toBe(true);
    expect(evaluate(ks, '2 sharps').correct).toBe(true);
    expect(evaluate(ks, '2b').correct).toBe(false);
    const rel = one(block('key-signature', { keys: ['F'], prompt: 'name', answer: 'name' }));
    expect(evaluate(rel, 'Dm').correct).toBe(true);
    expect(evaluate(rel, 'D minor').correct).toBe(true);
    const nm = one(block('key-signature', { keys: ['Eb'] }));
    expect(nm.choices!.length).toBeGreaterThanOrEqual(3);
    expect(evaluate(nm, 'D#').correct).toBe(true); // enharmonic tonic accepted
  });
  it('roman-analysis: secondary dominants and borrowed chords in the palette', () => {
    const it = one(block('roman-analysis', { key: 'C', chords: ['C', 'D7', 'G', 'Ab'] }));
    expect(it.slots).toEqual(['I', 'V7/V', 'V', 'bVI']);
    const vals = it.palette.map((p) => p.value);
    for (const s of it.slots) expect(vals).toContain(s);
    expect(evaluate(it, ['I', 'II7', 'V', 'bVI']).correct).toBe(true); // same chord, other spelling
    expect(evaluate(it, ['I', 'ii', 'V', 'bVI']).score).toBe(0.88);
  });
  it('listen: listen-only auto-passes; questions like quiz', () => {
    const l = one(block('listen', { example: { tracks: [{ instrument: 'piano', seq: 'C4:q' }] } }));
    expect(evaluate(l, 'done').correct).toBe(true);
    const q = one(block('listen', { example: { tracks: [{ instrument: 'piano', seq: 'C4:q' }] }, questions: [{ q: '?', choices: ['a', 'b'], answer: 1 }] }));
    expect(evaluate(q, 0).correct).toBe(false);
    expect(evaluate(q, 1).correct).toBe(true);
  });
  it('reflect: min words', () => {
    const r = one(block('reflect', { prompt: 'p', minWords: 3 }));
    expect(evaluate(r, 'too short').correct).toBe(false);
    expect(evaluate(r, 'long enough — three words').correct).toBe(true);
  });
  it('read-note interval mode spells the second note', () => {
    for (const it of many(block('read-note', { clef: 'treble', mode: 'interval', intervals: ['M3'] }), 20)) {
      expect(it.midis![1] - it.midis![0]).toBe(4);
      expect(it.seq).toMatch(/:h .*:h/);
    }
  });
  it('play-melody: multi-voice targets, swing, backing', () => {
    const it = one(block('play-melody', { seq: 'C4:8 D4:8 E4:h.', tracks: [{ instrument: 'piano', seq: 'C3:w' }], swing: 1, backing: { instrument: 'bass', seq: 'C2:w' } }));
    const p = it.performance;
    expect(p.targets.filter((t) => t.voice === 1).map((t) => t.midi)).toEqual([48]);
    expect(p.targets[1]!.startTick).toBe(PPQ / 2 + PPQ / 6);
    expect(it.backing!.tracks[0]!.instrument).toBe('bass');
    const sloppy = perfAnswer(p);
    sloppy.notes[0]!.midi = 61;
    expect(evaluate(it, sloppy).correct).toBe(false);
  });
  it('play-scale without tempo checks pitch order only', () => {
    const it = one(block('play-scale', { root: 'C', scale: 'major', direction: 'asc' }));
    expect(it.performance.timed).toBe(false);
    const notes = it.midis.map((m, i) => ({ midi: m + 12, time: i * 3.7 }));
    expect(evaluate(it, { notes }).correct).toBe(true);
    expect(evaluate(it, { notes: notes.slice(0, 4) }).correct).toBe(false);
  });
});
