import { noteToMidi, pcToName, samePitchClass, isNoteName } from '../theory/notes.js';
import { degreeEquals, degreeToNoteName, degreeToSemitones, parseKey, SOLFEGE } from '../theory/keys.js';
import type { ExerciseDefinition, Choice } from './types.js';
import { cadence, melodic, tonicReference } from './util.js';

const ALL_DEGREES = { major: ['1', 'b2', '2', 'b3', '3', '4', '#4', '5', 'b6', '6', 'b7', '7'], minor: ['1', 'b2', '2', '3', '#3', '4', '#4', '5', '6', '#6', '7', '#7'] };

export const earNote: ExerciseDefinition<'ear-note'> = {
  type: 'ear-note',
  implemented: true,
  generate(block, rng) {
    const s = block.spec;
    const k = parseKey(s.key, s.mode);
    const mode = k.mode;
    const degrees = s.degrees.map(String);
    if (degrees.length === 0) throw new Error('ear-note: degrees must not be empty');
    const degree = rng.pick(degrees);
    const octave = rng.pick(s.octaves?.length ? s.octaves : [4]);
    const tonicMidi = noteToMidi(`${k.tonic}${octave}`);
    const midi = tonicMidi + degreeToSemitones(degree, mode);
    const instrument = s.instrument ?? 'piano';
    const reference = s.reference ?? 'cadence';
    const answerKind = s.answer ?? 'degree';
    const pool = s.chromatic ? ALL_DEGREES[mode] : [...new Set(degrees)].sort((a, b) => degreeToSemitones(a, mode) - degreeToSemitones(b, mode));
    const choices: Choice[] = pool.map((d) => {
      if (answerKind === 'name') {
        const n = degreeToNoteName(k.tonic, d, mode);
        return { value: n, label: n };
      }
      const solf = mode === 'major' ? SOLFEGE[d] : undefined;
      return { value: d, label: solf ? `${d} (${solf})` : d };
    });
    const answer = answerKind === 'name' ? degreeToNoteName(k.tonic, degree, mode) : degree;
    return {
      type: 'ear-note',
      prompt: answerKind === 'name' ? `Which note is this in ${k.name}?` : `Which scale degree is this in ${k.name}?`,
      key: k.tonic, mode, midi, answerKind, answer,
      audio: melodic([midi], { instrument, beats: 2 }),
      ...(reference === 'cadence' ? { reference: cadence(k.tonic, mode, instrument) } : {}),
      ...(reference === 'tonic' ? { reference: tonicReference(k.tonic, mode, instrument) } : {}),
      choices,
      solution: answerKind === 'name' ? answer : `${degree} (${degreeToNoteName(k.tonic, degree, mode)})`,
    };
  },
  evaluate(item, answer) {
    const a = String(answer ?? '').trim();
    let correct: boolean;
    if (item.answerKind === 'name') correct = isNoteName(a) && samePitchClass(a, item.answer);
    else correct = degreeEquals(a, item.answer, item.mode);
    return {
      correct,
      score: correct ? 1 : 0,
      feedback: correct ? 'Correct!' : `Not quite — it was ${item.solution}.`,
      expected: item.solution,
      ...(correct ? {} : { details: { heard: pcToName(item.midi) } }),
    };
  },
};
