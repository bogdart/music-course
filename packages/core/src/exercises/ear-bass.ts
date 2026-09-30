import { midiToNote, pitchClass } from '../theory/notes.js';
import { parseKey, pcToDegree, degreeEquals, degreeToNoteName } from '../theory/keys.js';
import { scoreSequence } from '../performance.js';
import type { Choice, ExerciseDefinition } from './types.js';
import { cadence, evaluateSlots } from './util.js';
import { lineOf, mixSnippet, partTrack } from './example-mix.js';
import { pickProgression, progressionSnippet, resolveKey, voiceProgression } from './harmony.js';

const DEGREES = ['1', '2', '3', '4', '5', '6', '7'];
const DEGREES_CHROMATIC = { major: ['1', 'b2', '2', 'b3', '3', '4', '#4', '5', 'b6', '6', 'b7', '7'], minor: ['1', 'b2', '2', '3', '#3', '4', '#4', '5', '6', '#6', '7', '#7'] };

/**
 * Hear chords (bass prominent) and play — or name as scale degrees — the bass note of each chord. The bass is the
 * root unless `inversions` puts the 3rd/5th/7th in the bass. Pitch-class matching, any octave.
 * With `example` the bass line of the attached mix is transcribed.
 */
export const earBass: ExerciseDefinition<'ear-bass'> = {
  type: 'ear-bass',
  implemented: true,
  naturalCount(block) {
    return block.spec.example ? 1 : undefined;
  },
  generate(block, rng) {
    const s = block.spec;
    const k = s.key === 'random' ? null : parseKey(s.key, s.mode);
    const { tonic, mode } = resolveKey(rng, s.key, s.mode);
    let numerals: string[] = [];
    let midis: number[];
    let audio;
    if (s.example) {
      audio = mixSnippet(s.example);
      const t = partTrack(s.example, s.track, 'bass');
      midis = lineOf(audio, t, 'lowest');
      if (midis.length === 0) throw new Error('ear-bass: example bass track has no notes');
    } else {
      numerals = pickProgression(rng, [...new Set(s.chords)], s.length ?? 4, tonic, mode);
      const voiced = voiceProgression(numerals, tonic, mode, s.inversions?.length ? s.inversions : [0], rng);
      midis = voiced.map((v) => v.bass);
      audio = progressionSnippet(voiced, s.style === 'band' ? { style: 'band', bpm: s.bpm ?? 96 } : { style: 'bass-focus', bpm: s.bpm ?? 72 });
    }
    const answerKind = s.answer ?? 'play';
    const degrees = midis.map((m) => pcToDegree(m, tonic, mode));
    const names = degrees.map((d) => degreeToNoteName(tonic, d, mode));
    const chromatic = degrees.some((d) => !DEGREES.includes(d));
    const pal = chromatic ? DEGREES_CHROMATIC[mode] : DEGREES;
    const palette: Choice[] = pal.map((d) => ({ value: d, label: `${d} (${degreeToNoteName(tonic, d, mode)})` }));
    return {
      type: 'ear-bass', key: tonic, mode, answerKind, numerals, midis, names,
      prompt: answerKind === 'play'
        ? `Key of ${k && k.tonic === tonic ? k.name : `${tonic} ${mode}`}: play the ${midis.length} bass notes you hear (any octave).`
        : `Key of ${tonic} ${mode}: name the bass note of each chord as a scale degree.`,
      reference: cadence(tonic, mode),
      audio,
      ...(answerKind === 'name' ? { slots: degrees, palette } : {}),
      solution: names.map((n, i) => `${n}${numerals[i] ? ` (${numerals[i]})` : ''}`).join(' – '),
    };
  },
  evaluate(item, answer) {
    if (item.answerKind === 'name') {
      return evaluateSlots(item.slots ?? [], answer, (g, e) => (degreeEquals(g, e, item.mode) ? 1 : 0), item.solution, 'bass line');
    }
    const played = (Array.isArray(answer) ? answer : []).filter((n): n is number => typeof n === 'number');
    const seq = scoreSequence(item.midis, played, 'pitch-class');
    const wrong = seq.extras.map((i) => midiToNote(played[i]!));
    return {
      correct: seq.correct, score: seq.correct ? 1 : seq.score,
      feedback: seq.correct ? 'Correct — you heard the bass line!' : `${seq.hits.filter(Boolean).length}/${item.midis.length} bass notes right${wrong.length ? ` (off: ${wrong.join(', ')})` : ''}. It was ${item.solution}.`,
      expected: item.solution,
      details: { sequence: seq, slots: seq.hits, played: played.map((m) => pitchClass(m)) },
    };
  },
};
