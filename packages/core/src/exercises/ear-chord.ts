import { chordMidi, CHORD_QUALITY_NAMES, isChordQuality, type ChordQuality } from '../theory/chords.js';
import { midiToNote, rangeToMidi } from '../theory/notes.js';
import type { ExerciseDefinition, Choice } from './types.js';
import { harmonic, ordinal, pickInRange } from './util.js';

function parseAnswer(a: unknown): { quality: string; inversion?: number } {
  if (a && typeof a === 'object') {
    const o = a as { quality?: unknown; inversion?: unknown };
    return { quality: String(o.quality ?? ''), ...(typeof o.inversion === 'number' ? { inversion: o.inversion } : {}) };
  }
  const [q, inv] = String(a ?? '').split(':');
  return { quality: (q ?? '').trim(), ...(inv !== undefined && inv !== '' ? { inversion: Number(inv) } : {}) };
}

export const earChord: ExerciseDefinition<'ear-chord'> = {
  type: 'ear-chord',
  implemented: true,
  generate(block, rng) {
    const s = block.spec;
    const qualities = s.qualities.filter(isChordQuality) as ChordQuality[];
    if (qualities.length === 0) throw new Error('ear-chord: no valid qualities');
    const inversions = s.inversions?.length ? s.inversions : [0];
    const quality = rng.pick(qualities);
    const size = chordMidi(60, quality).length;
    const validInv = inversions.filter((i) => i < size);
    const inversion = rng.pick(validInv.length ? validInv : [0]);
    const voicing = s.voicing === 'mixed' ? rng.pick(['close', 'open'] as const) : (s.voicing ?? 'close');
    const [lo, hi] = rangeToMidi(s.range ?? ['C3', 'C5']);
    const shape = chordMidi(0, quality, inversion, voicing);
    const minOff = Math.min(...shape);
    const maxOff = Math.max(...shape);
    const root = pickInRange(rng, lo - minOff, hi - maxOff);
    const midis = chordMidi(root, quality, inversion, voicing);
    const askInversion = inversions.length > 1;
    const choices: Choice[] = [];
    for (const q of qualities) {
      if (!askInversion) choices.push({ value: q, label: CHORD_QUALITY_NAMES[q] });
      else for (const i of inversions) if (i < chordMidi(0, q).length) choices.push({ value: `${q}:${i}`, label: `${CHORD_QUALITY_NAMES[q]} · ${ordinal(i)}` });
    }
    const answer = askInversion ? `${quality}:${inversion}` : quality;
    return {
      type: 'ear-chord', quality, inversion, askInversion, midis, answer,
      prompt: askInversion ? 'What chord quality and inversion is this?' : 'What chord quality is this?',
      audio: harmonic(midis, { instrument: s.instrument ?? 'piano', beats: 3 }),
      choices,
      solution: `${CHORD_QUALITY_NAMES[quality]}${askInversion ? ', ' + ordinal(inversion) : ''} (${midis.map((m) => midiToNote(m)).join(' ')})`,
    };
  },
  evaluate(item, answer) {
    const a = parseAnswer(answer);
    const qOk = a.quality === item.quality;
    const iOk = !item.askInversion || a.inversion === item.inversion;
    const correct = qOk && iOk;
    const score = correct ? 1 : qOk ? 0.5 : 0;
    return {
      correct, score,
      feedback: correct ? 'Correct!' : qOk ? `Right quality, wrong inversion — ${item.solution}.` : `Not quite — it was ${item.solution}.`,
      expected: item.solution,
    };
  },
};
