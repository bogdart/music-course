import { chordMidi, CHORD_QUALITY_NAMES, isChordQuality, type ChordQuality } from '../theory/chords.js';
import { isNoteName, midiToNote, pcToName, pitchClass, rangeToMidi } from '../theory/notes.js';
import type { ExerciseDefinition } from './types.js';
import { PPQ } from '../model.js';
import { ev, harmonic, ordinal, pickInRange, pitchClassChoices, snippet } from './util.js';

/** Hear a chord, play or name its root (pitch class; any octave). `inversions` puts the 3rd/5th/7th in the bass. */
export const earChordRoot: ExerciseDefinition<'ear-chord-root'> = {
  type: 'ear-chord-root',
  implemented: true,
  generate(block, rng) {
    const s = block.spec;
    const qualities = s.qualities.filter(isChordQuality) as ChordQuality[];
    if (qualities.length === 0) throw new Error('ear-chord-root: no valid qualities');
    const quality = rng.pick(qualities);
    const size = chordMidi(60, quality).length;
    const invs = (s.inversions?.length ? s.inversions : [0]).filter((i) => i < size);
    const inversion = rng.pick(invs.length ? invs : [0]);
    const [lo, hi] = rangeToMidi(s.range ?? ['C3', 'C5']);
    const shape = chordMidi(0, quality, inversion);
    const root = pickInRange(rng, lo - Math.min(...shape), hi - Math.max(...shape));
    const midis = chordMidi(root, quality, inversion);
    const rootPc = pitchClass(root);
    const flats = [1, 3, 8, 10].includes(rootPc) && rng.chance(0.5);
    const rootName = pcToName(rootPc, { flats });
    const answerKind = s.answer ?? 'play';
    const instrument = s.instrument ?? 'piano';
    return {
      type: 'ear-chord-root', quality, inversion, midis, rootPc, rootName, answerKind,
      prompt: answerKind === 'play' ? 'Play the root of this chord (any octave).' : 'What is the root of this chord?',
      audio: harmonic(midis, { instrument, beats: 3 }),
      ...(answerKind === 'name' ? { choices: pitchClassChoices(flats) } : {}),
      solution: `${rootName} — ${CHORD_QUALITY_NAMES[quality]}${inversion ? `, ${ordinal(inversion)}` : ''} (${midis.map((m) => midiToNote(m, { flats })).join(' ')})`,
      // the chord, then its root alone an octave below
      solutionAudio: snippet([
        ...midis.map((m) => ev(m, 0, 2 * PPQ, 0.6)),
        ev(root - 12 >= 28 ? root - 12 : root, 2 * PPQ, 2 * PPQ, 0.9),
      ], instrument, 80),
    };
  },
  evaluate(item, answer) {
    let pc: number | null = null;
    if (typeof answer === 'number' && Number.isFinite(answer)) pc = pitchClass(answer);
    else if (typeof answer === 'string' && isNoteName(answer.trim())) pc = pitchClass(answer.trim());
    else if (typeof answer === 'string' && /^\d+$/.test(answer.trim())) pc = pitchClass(Number(answer));
    const correct = pc === item.rootPc;
    const inChord = pc !== null && item.midis.some((m) => pitchClass(m) === pc);
    return {
      correct, score: correct ? 1 : 0,
      feedback: correct ? 'Correct — that is the root!' : inChord ? `That note is in the chord, but it is not the root — the root is ${item.rootName}.` : `Not quite — the root is ${item.rootName}.`,
      expected: item.solution,
      ...(pc !== null ? { details: { given: pcToName(pc) } } : {}),
    };
  },
};
