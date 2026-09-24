import { isIntervalId, INTERVAL_NAMES, INTERVAL_SEMITONES, type IntervalId } from '../theory/intervals.js';
import { midiToNote, noteToMidi, pcToName, pitchClass, pitchClassName, rangeToMidi } from '../theory/notes.js';
import { chordToRoman } from '../theory/roman.js';
import { CHORD_INTERVALS, tryParseChordSymbol } from '../theory/chords.js';
import { resolveScaleId, SCALE_NAMES, scaleNotes, scalePitchClasses } from '../theory/scales.js';
import type { EvalResult, ExerciseDefinition } from './types.js';
import { chordFromSpec } from './play-chord.js';
import { harmonic, melodic, pickInRange, setOrder } from './util.js';

function evaluatePcSet(target: number[], answer: unknown, solution: string, names: string[]): EvalResult {
  const given = [...new Set((Array.isArray(answer) ? answer : []).filter((n): n is number => typeof n === 'number').map(pitchClass))];
  const t = new Set(target);
  const hit = given.filter((p) => t.has(p)).length;
  const extra = given.filter((p) => !t.has(p));
  const missing = target.filter((p) => !given.includes(p));
  const union = new Set([...target, ...given]).size;
  const correct = missing.length === 0 && extra.length === 0;
  const score = correct ? 1 : Math.round((hit / Math.max(1, union)) * 100) / 100;
  const parts: string[] = [];
  if (missing.length) parts.push(`missing ${missing.map((p) => names[target.indexOf(p)] ?? pcToName(p)).join(', ')}`);
  if (extra.length) parts.push(`${extra.map((p) => pcToName(p)).join(', ')} ${extra.length > 1 ? "don't" : "doesn't"} belong`);
  return {
    correct, score,
    feedback: correct ? 'Correct!' : `Not quite — ${parts.join('; ')}. Answer: ${solution}.`,
    expected: solution,
    details: { missing, extra },
  };
}

/** Select/play the pitch classes of a chord shown as a symbol or roman numeral. */
export const buildChord: ExerciseDefinition<'build-chord'> = {
  type: 'build-chord',
  implemented: true,
  generate(block, rng, ctx) {
    const s = block.spec;
    if (!s.chords.length) throw new Error('build-chord: chords must not be empty');
    const raw = s.chords[setOrder(rng, s.chords.length, ctx.index)]!;
    const chord = chordFromSpec(raw, s.key);
    const isRoman = tryParseChordSymbol(raw) === null;
    let display = chord.symbol;
    if (s.prompt === 'roman' && s.key) display = isRoman ? raw : chordToRoman(chord.symbol, s.key);
    const givenRoot = (s.root ?? 'given') === 'given' ? chord.pitchClasses[0]! : null;
    const pcs = [...new Set([...chord.pitchClasses, ...(chord.bass ? [pitchClass(chord.bass)] : [])])];
    const names = [...chord.notes, ...(chord.bass && !chord.notes.some((n) => pitchClass(n) === pitchClass(chord.bass!)) ? [chord.bass] : [])];
    return {
      type: 'build-chord', pitchClasses: pcs, names, givenRoot, display, rootPc: chord.pitchClasses[0]!,
      prompt: `Build ${display}${s.prompt === 'roman' && s.key ? ` in ${s.key}` : ''}: select every note of the chord${givenRoot !== null ? ' (the root is marked)' : ''}.`,
      solution: `${chord.symbol}: ${names.join(' ')}`,
      solutionAudio: harmonic(CHORD_INTERVALS[chord.quality].map((i) => 48 + chord.pitchClasses[0]! + (chord.pitchClasses[0]! > 6 ? 0 : 12) + i)),
    };
  },
  evaluate(item, answer) {
    return evaluatePcSet(item.pitchClasses, answer, item.solution, item.names);
  },
};

/** Select/play the notes of a scale. */
export const buildScale: ExerciseDefinition<'build-scale'> = {
  type: 'build-scale',
  implemented: true,
  generate(block, rng, ctx) {
    const s = block.spec;
    if (!s.roots.length) throw new Error('build-scale: roots must not be empty');
    const scale = resolveScaleId(s.scale);
    const root = pitchClassName(s.roots[setOrder(rng, s.roots.length, ctx.index)]!);
    const pcs = scalePitchClasses(root, scale);
    const names = scaleNotes(root, scale);
    const rootMidi = 60 + pitchClass(root) - (pitchClass(root) > 6 ? 12 : 0);
    return {
      type: 'build-scale', pitchClasses: pcs, names, givenRoot: pitchClass(root), display: `${root} ${SCALE_NAMES[scale].toLowerCase()}`,
      rootPc: pitchClass(root),
      prompt: `Select the ${pcs.length} notes of ${root} ${SCALE_NAMES[scale].toLowerCase()} (the root is marked).`,
      solution: names.join(' '),
      solutionAudio: melodic([...pcs.map((p) => rootMidi + ((p - pitchClass(root) + 12) % 12)), rootMidi + 12], { beats: 0.5, bpm: 100 }),
    };
  },
  evaluate(item, answer) {
    return evaluatePcSet(item.pitchClasses, answer, item.solution, item.names);
  },
};

/** Given a root, play the note a given interval above (or below). Exact pitch; right note in the wrong octave = half. */
export const buildInterval: ExerciseDefinition<'build-interval'> = {
  type: 'build-interval',
  implemented: true,
  generate(block, rng) {
    const s = block.spec;
    const ids = s.intervals.filter(isIntervalId) as IntervalId[];
    if (!ids.length) throw new Error('build-interval: no valid intervals');
    const interval = rng.pick(ids);
    const st = INTERVAL_SEMITONES[interval];
    const direction = s.direction ?? 'asc';
    const [lo, hi] = rangeToMidi(s.range ?? ['C3', 'C6']);
    let root: number;
    if (s.root && s.root !== 'random') root = noteToMidi(s.root);
    else {
      const whites = (a: number, b: number) => {
        const out: number[] = [];
        for (let m = a; m <= b; m++) if (![1, 3, 6, 8, 10].includes(pitchClass(m))) out.push(m);
        return out;
      };
      const cands = direction === 'asc' ? whites(Math.max(lo, 48), Math.min(hi - st, 72)) : whites(Math.max(lo + st, 55), Math.min(hi, 79));
      root = cands.length ? rng.pick(cands) : pickInRange(rng, lo, hi - st);
    }
    const target = direction === 'asc' ? root + st : root - st;
    return {
      type: 'build-interval', root, target, interval, direction,
      prompt: `Play the note a ${INTERVAL_NAMES[interval].toLowerCase()} ${direction === 'asc' ? 'above' : 'below'} ${midiToNote(root)}.`,
      solution: `${midiToNote(target)} (${INTERVAL_NAMES[interval]} ${direction === 'asc' ? 'above' : 'below'} ${midiToNote(root)})`,
      solutionAudio: melodic([root, target], { beats: 1 }),
    };
  },
  evaluate(item, answer) {
    const m = typeof answer === 'number' ? answer : Number(answer);
    const correct = m === item.target;
    const pcOk = Number.isFinite(m) && pitchClass(m) === pitchClass(item.target);
    return {
      correct, score: correct ? 1 : pcOk ? 0.5 : 0,
      feedback: correct ? 'Correct!' : pcOk ? `Right note, wrong octave — it was ${item.solution}.` : Number.isFinite(m) ? `${midiToNote(m)} is a ${Math.abs(m - item.root)}-semitone step; the answer was ${item.solution}.` : `Answer: ${item.solution}.`,
      expected: item.solution,
    };
  },
};
