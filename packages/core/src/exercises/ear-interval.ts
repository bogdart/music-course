import { isIntervalId, INTERVAL_NAMES, INTERVAL_SEMITONES, type IntervalId } from '../theory/intervals.js';
import { midiToNote, noteToMidi, rangeToMidi } from '../theory/notes.js';
import type { ExerciseDefinition } from './types.js';
import { harmonic, melodic, pickInRange } from './util.js';

export const earInterval: ExerciseDefinition<'ear-interval'> = {
  type: 'ear-interval',
  implemented: true,
  generate(block, rng) {
    const s = block.spec;
    const ids = s.intervals.filter(isIntervalId) as IntervalId[];
    if (ids.length === 0) throw new Error('ear-interval: no valid intervals');
    const interval = rng.pick(ids);
    const st = INTERVAL_SEMITONES[interval];
    const dirSpec = s.direction ?? 'asc';
    const direction = dirSpec === 'mixed' ? rng.pick(['asc', 'desc', 'harmonic'] as const) : dirSpec;
    const [lo, hi] = rangeToMidi(s.range ?? ['C3', 'C5']);
    let root: number;
    if (s.root && s.root !== 'random') root = noteToMidi(s.root);
    else root = direction === 'desc' ? pickInRange(rng, lo + st, hi) : pickInRange(rng, lo, hi - st);
    const other = direction === 'desc' ? root - st : root + st;
    const midis: [number, number] = [root, other];
    const instrument = s.instrument ?? 'piano';
    const audio = direction === 'harmonic' ? harmonic(midis, { instrument }) : melodic(midis, { instrument, beats: 1 });
    const dirText = direction === 'harmonic' ? 'together' : direction === 'asc' ? 'ascending' : 'descending';
    return {
      type: 'ear-interval', interval, direction, midis, answer: interval,
      prompt: `Name the interval (${dirText}).`,
      audio,
      choices: ids.map((id) => ({ value: id, label: `${id} · ${INTERVAL_NAMES[id]}` })),
      solution: `${INTERVAL_NAMES[interval]} (${midiToNote(midis[0])}–${midiToNote(midis[1])})`,
    };
  },
  evaluate(item, answer) {
    const a = String(answer ?? '').trim();
    // enharmonic equivalents by semitones (e.g. "TT" only one id, but compound P8 vs P1 are distinct)
    const correct = a === item.interval || (isIntervalId(a) && INTERVAL_SEMITONES[a] === INTERVAL_SEMITONES[item.interval as IntervalId]);
    return {
      correct, score: correct ? 1 : 0,
      feedback: correct ? 'Correct!' : `Not quite — it was a ${item.solution}.`,
      expected: item.solution,
    };
  },
};
