import { romanEquals, romanToChord } from '../theory/roman.js';
import type { ExerciseDefinition } from './types.js';
import { cadence } from './util.js';
import { mixSnippet } from './example-mix.js';
import { pickProgression, progressionSnippet, resolveKey, voiceProgression } from './harmony.js';
import { evaluateSlots } from './util.js';

function symbolOf(r: string, tonic: string, mode: 'major' | 'minor'): string {
  return romanToChord(r, tonic, mode).symbol;
}

/**
 * Hear a chord progression and write its roman numerals. With `inversions` the bass may take the 3rd/5th (answers
 * are still plain numerals, compared by the chord they produce). With `example` the attached mix is played and
 * `progression` (in order) is the answer; `chords` is the button palette.
 */
export const earProgression: ExerciseDefinition<'ear-progression'> = {
  type: 'ear-progression',
  implemented: true,
  naturalCount(block) {
    return block.spec.example ? 1 : undefined;
  },
  generate(block, rng) {
    const s = block.spec;
    const { tonic, mode } = resolveKey(rng, s.example?.key && (!s.key || s.key === 'random') ? s.example.key : s.key, s.mode);
    const pool = [...new Set(s.chords)];
    let numerals: string[];
    let audio;
    if (s.example) {
      if (!s.progression?.length) throw new Error('ear-progression with "example" needs "progression" (the answer, in order)');
      numerals = s.progression;
      audio = mixSnippet(s.example);
      for (const r of numerals) if (!pool.includes(r)) pool.push(r);
    } else {
      numerals = pickProgression(rng, pool, s.length ?? 4, tonic, mode);
      const voiced = voiceProgression(numerals, tonic, mode, s.inversions?.length ? s.inversions : [0], rng);
      audio = progressionSnippet(voiced, { style: s.style ?? 'block', bpm: s.bpm ?? (s.style === 'band' ? 96 : 72), ...(s.instrument ? { instrument: s.instrument } : {}) });
    }
    const symbols = numerals.map((r) => symbolOf(r, tonic, mode));
    const keyName = `${tonic} ${mode}`;
    return {
      type: 'ear-progression', key: tonic, mode, numerals, symbols,
      prompt: `Key of ${keyName}: write the ${numerals.length} chords you hear as roman numerals.`,
      reference: cadence(tonic, mode),
      audio,
      slots: numerals,
      palette: pool.map((r) => ({ value: r, label: r })),
      solution: numerals.map((r, i) => `${r} (${symbols[i]})`).join(' – '),
    };
  },
  evaluate(item, answer) {
    return evaluateSlots(item.slots, answer, (g, e) => {
      if (romanEquals(g, e, item.key, item.mode)) return 1;
      // right root, wrong quality → half credit
      try {
        const a = romanToChord(g, item.key, item.mode);
        const b = romanToChord(e, item.key, item.mode);
        return a.pitchClasses[0] === b.pitchClasses[0] ? 0.5 : 0;
      } catch {
        return 0;
      }
    }, item.solution, 'progression');
  },
};

