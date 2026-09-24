import { cleanNoteName, midiToNote, noteToMidi, pitchClass, pitchClassName, octaveOf } from '../theory/notes.js';
import type { ExerciseDefinition } from './types.js';
import { melodic } from './util.js';

export const earOctave: ExerciseDefinition<'ear-octave'> = {
  type: 'ear-octave',
  implemented: true,
  generate(block, rng) {
    const s = block.spec;
    const notes = s.notes.map((n) => pitchClassName(cleanNoteName(n)));
    const octaves = s.octaves.length ? s.octaves : [3, 4, 5];
    const instrument = s.instrument ?? 'piano';
    if (s.mode === 'which-octave') {
      const note = rng.pick(notes);
      const octave = rng.pick(octaves);
      const midi = noteToMidi(`${note}${octave}`);
      return {
        type: 'ear-octave', mode: 'which-octave', midis: [midi], answer: String(octave),
        prompt: `Middle C (C4) plays first. Which octave is the ${note}?`,
        reference: melodic([60], { instrument, beats: 2 }),
        audio: melodic([midi], { instrument, beats: 2 }),
        choices: [...octaves].sort((a, b) => a - b).map((o) => ({ value: String(o), label: `${note}${o}` })),
        solution: `${note}${octave}`,
      };
    }
    if (s.mode === 'higher-or-lower') {
      const pool = [...new Set(notes.flatMap((n) => octaves.map((o) => noteToMidi(`${n}${o}`))))];
      if (pool.length < 2) throw new Error('ear-octave higher-or-lower needs at least two distinct pitches');
      const a = rng.pick(pool);
      const b = rng.pick(pool.filter((m) => m !== a));
      const answer = b > a ? 'higher' : 'lower';
      return {
        type: 'ear-octave', mode: 'higher-or-lower', midis: [a, b], answer,
        prompt: 'Is the second note higher or lower than the first?',
        audio: melodic([a, b], { instrument, beats: 1.5 }),
        choices: [{ value: 'lower', label: 'Lower' }, { value: 'higher', label: 'Higher' }],
        solution: `${answer === 'higher' ? 'Higher' : 'Lower'} — ${midiToNote(a)} then ${midiToNote(b)}`,
      };
    }
    const first = rng.pick(notes);
    const o1 = rng.pick(octaves);
    const same = rng.chance(0.5);
    let secondName: string;
    let o2: number;
    if (same) {
      secondName = first;
      const others = octaves.filter((o) => o !== o1);
      o2 = others.length ? rng.pick(others) : o1;
    } else {
      const otherNotes = notes.filter((n) => pitchClass(n) !== pitchClass(first));
      secondName = otherNotes.length ? rng.pick(otherNotes) : rng.pick(['C', 'D', 'E', 'F', 'G', 'A', 'B'].filter((n) => pitchClass(n) !== pitchClass(first)));
      o2 = rng.pick(octaves);
    }
    const m1 = noteToMidi(`${first}${o1}`);
    const m2 = noteToMidi(`${secondName}${o2}`);
    return {
      type: 'ear-octave', mode: 'same-or-different', midis: [m1, m2], answer: same ? 'same' : 'different',
      prompt: 'Two notes: are they the same note (maybe in different octaves) or different notes?',
      audio: melodic([m1, m2], { instrument, beats: 1.5 }),
      choices: [{ value: 'same', label: 'Same note' }, { value: 'different', label: 'Different notes' }],
      solution: `${same ? 'Same' : 'Different'} — ${first}${o1} then ${secondName}${o2}`,
    };
  },
  evaluate(item, answer) {
    const a = String(answer ?? '').trim().toLowerCase();
    const correct = a === item.answer;
    const octNote = item.mode === 'which-octave' ? octaveOf(item.midis[0]!) : undefined;
    return {
      correct, score: correct ? 1 : 0,
      feedback: correct ? 'Correct!' : `Not quite — ${item.solution}.`,
      expected: item.solution,
      ...(octNote !== undefined ? { details: { octave: octNote } } : {}),
    };
  },
};
