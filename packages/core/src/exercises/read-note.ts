import { isBlackKey, midiToNote, noteToMidi, pitchClassName, rangeToMidi, samePitchClass, isNoteName, cleanNoteName } from '../theory/notes.js';
import type { ExerciseDefinition, Choice } from './types.js';
import { melodic } from './util.js';

const NATURALS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const WITH_ACC = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'];
const DEFAULT_RANGE: Record<'treble' | 'bass', [string, string]> = { treble: ['C4', 'G5'], bass: ['E2', 'C4'] };

export const readNote: ExerciseDefinition<'read-note'> = {
  type: 'read-note',
  implemented: true,
  generate(block, rng) {
    const s = block.spec;
    const clef = s.clef === 'both' ? rng.pick(['treble', 'bass'] as const) : s.clef;
    const [lo0, hi0] = rangeToMidi(s.range ?? DEFAULT_RANGE[clef]);
    let lo = lo0;
    let hi = hi0;
    if (s.clef === 'both') {
      // keep notes on the natural side of middle C for the chosen clef
      if (clef === 'treble') lo = Math.max(lo0, 60);
      else hi = Math.min(hi0, 60);
      if (lo > hi) [lo, hi] = [lo0, hi0];
    }
    const pool: number[] = [];
    for (let m = lo; m <= hi; m++) if (s.accidentals || !isBlackKey(m)) pool.push(m);
    if (pool.length === 0) throw new Error('read-note: empty range');
    const midi = rng.pick(pool);
    const note = isBlackKey(midi) ? midiToNote(midi, { flats: rng.chance(0.5) }) : midiToNote(midi);
    const answerKind = s.answer ?? 'name';
    const choices: Choice[] | undefined = answerKind === 'name'
      ? (s.accidentals ? WITH_ACC : NATURALS).map((n) => ({ value: n, label: n }))
      : undefined;
    return {
      type: 'read-note', clef, note, midi, answerKind, seq: `${note}:w`, timed: s.timed ?? 0,
      prompt: answerKind === 'play' ? 'Play the note shown on the staff.' : 'Name the note shown on the staff.',
      ...(choices ? { choices } : {}),
      solution: answerKind === 'play' ? note : pitchClassName(note),
      solutionAudio: melodic([midi], { beats: 2 }),
    };
  },
  evaluate(item, answer) {
    if (item.answerKind === 'play') {
      const m = typeof answer === 'number' ? answer : isNoteName(String(answer), true) ? noteToMidi(String(answer)) : NaN;
      const correct = m === item.midi;
      const pcOk = Number.isFinite(m) && samePitchClass(m, item.midi);
      return {
        correct, score: correct ? 1 : pcOk ? 0.5 : 0,
        feedback: correct ? 'Correct!' : pcOk ? `Right note, wrong octave — it was ${item.note}.` : `Not quite — it was ${item.note}.`,
        expected: item.note,
      };
    }
    const a = cleanNoteName(String(answer ?? ''));
    const correct = isNoteName(a) && samePitchClass(a, item.midi);
    const exactSpelling = correct && pitchClassName(a) === pitchClassName(item.note);
    return {
      correct, score: correct ? 1 : 0,
      feedback: correct ? (exactSpelling ? 'Correct!' : `Correct (written as ${pitchClassName(item.note)}).`) : `Not quite — it was ${pitchClassName(item.note)}.`,
      expected: pitchClassName(item.note),
    };
  },
};
