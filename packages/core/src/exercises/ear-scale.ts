import { noteToMidi, pitchClassName } from '../theory/notes.js';
import { resolveScaleId, SCALE_INTERVALS, SCALE_NAMES, scaleMidi, type ScaleId } from '../theory/scales.js';
import type { ExerciseDefinition } from './types.js';
import { melodic } from './util.js';

const ROOTS = ['C', 'D', 'E', 'F', 'G', 'A', 'Bb', 'Eb'];

/** Hear a scale (ascending, up-and-down, or a melody built from it) and name it. */
export const earScale: ExerciseDefinition<'ear-scale'> = {
  type: 'ear-scale',
  implemented: true,
  generate(block, rng) {
    const s = block.spec;
    const ids = [...new Set(s.scales.map(resolveScaleId))] as ScaleId[];
    if (ids.length === 0) throw new Error('ear-scale: no scales');
    const scale = rng.pick(ids);
    const root = !s.root || s.root === 'random' ? rng.pick(ROOTS) : pitchClassName(s.root);
    let rootMidi = noteToMidi(`${root}4`);
    if (rootMidi > 67) rootMidi -= 12;
    const play = s.play ?? 'asc';
    const up = scaleMidi(rootMidi, scale, 1, 'asc');
    let midis: number[];
    if (play === 'asc') midis = up;
    else if (play === 'asc-desc') midis = scaleMidi(rootMidi, scale, 1, 'asc-desc');
    else {
      // melody: a stepwise-ish random walk over the scale that starts and ends on the tonic and touches every degree
      const n = SCALE_INTERVALS[scale].length;
      const pool = scaleMidi(rootMidi, scale, 1, 'asc');
      let idx = 0;
      midis = [pool[0]!];
      const seen = new Set<number>([0]);
      let guard = 0;
      while ((seen.size < n || midis.length < 8) && guard++ < 40) {
        const step = rng.pick([-1, 1, 1, 2, -2]);
        idx = Math.max(0, Math.min(pool.length - 1, idx + step));
        midis.push(pool[idx]!);
        seen.add(idx % n);
      }
      midis.push(pool[rng.chance(0.5) ? 0 : pool.length - 1]!);
    }
    const instrument = s.instrument ?? 'piano';
    return {
      type: 'ear-scale', scale, root, midis, answer: scale,
      prompt: play === 'melody' ? 'Which scale is this melody built from?' : 'Which scale is this?',
      audio: melodic(midis, { instrument, beats: play === 'melody' ? 0.75 : 0.5, bpm: 90 }),
      choices: ids.map((id) => ({ value: id, label: SCALE_NAMES[id] })),
      solution: `${root} ${SCALE_NAMES[scale].toLowerCase()}`,
    };
  },
  evaluate(item, answer) {
    let a = String(answer ?? '').trim();
    try {
      a = resolveScaleId(a);
    } catch {
      /* keep */
    }
    const correct = a === item.scale;
    return { correct, score: correct ? 1 : 0, feedback: correct ? 'Correct!' : `Not quite — it was ${item.solution}.`, expected: item.solution };
  },
};
