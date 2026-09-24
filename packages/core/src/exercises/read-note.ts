import { isBlackKey, midiToNote, noteToMidi, pitchClassName, rangeToMidi, samePitchClass, isNoteName, cleanNoteName } from '../theory/notes.js';
import { INTERVAL_IDS, INTERVAL_NAMES, INTERVAL_SEMITONES, isIntervalId, transposeNote, type IntervalId } from '../theory/intervals.js';
import type { ExerciseDefinition, Choice } from './types.js';
import { harmonic, melodic } from './util.js';

const NATURALS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const WITH_ACC = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'];
const DEFAULT_RANGE: Record<'treble' | 'bass', [string, string]> = { treble: ['C4', 'G5'], bass: ['E2', 'C4'] };

export const readNote: ExerciseDefinition<'read-note'> = {
  type: 'read-note',
  implemented: true,
  generate(block, rng) {
    const s = block.spec;
    const clef = s.clef === 'both' ? rng.pick(['treble', 'bass'] as const) : s.clef;
    if (s.mode === 'interval') {
      const ids = (s.intervals?.length ? s.intervals.filter(isIntervalId) : INTERVAL_IDS.slice(1, 13)) as IntervalId[];
      if (!ids.length) throw new Error('read-note: no valid intervals');
      const interval = rng.pick(ids);
      const st = INTERVAL_SEMITONES[interval];
      const [lo, hi] = rangeToMidi(s.range ?? DEFAULT_RANGE[clef]);
      const roots: number[] = [];
      for (let m = lo; m + st <= hi; m++) if (!isBlackKey(m)) roots.push(m);
      if (!roots.length) throw new Error('read-note: range too small for the intervals');
      const root = rng.pick(roots);
      const n1 = midiToNote(root);
      const n2 = transposeNote(n1, interval);
      const m2 = noteToMidi(n2);
      const harmonicMode = s.harmonic ?? false;
      return {
        type: 'read-note', clef, note: n1, midi: root, answerKind: 'name', timed: s.timed ?? 0,
        intervalMode: true, interval, midis: [root, m2],
        seq: harmonicMode ? `[${n1} ${n2}]:w` : `${n1}:h ${n2}:h`,
        prompt: 'Name the interval shown on the staff.',
        choices: ids.map((id) => ({ value: id, label: `${id} · ${INTERVAL_NAMES[id]}` })),
        solution: `${INTERVAL_NAMES[interval]} (${n1}–${n2})`,
        solutionAudio: harmonicMode ? harmonic([root, m2]) : melodic([root, m2], { beats: 1 }),
      };
    }
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
    if (item.intervalMode && item.interval) {
      const a = String(answer ?? '').trim();
      const correct = a === item.interval || (isIntervalId(a) && INTERVAL_SEMITONES[a] === INTERVAL_SEMITONES[item.interval as IntervalId]);
      return { correct, score: correct ? 1 : 0, feedback: correct ? 'Correct!' : `Not quite — it is a ${item.solution}.`, expected: item.solution };
    }
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
