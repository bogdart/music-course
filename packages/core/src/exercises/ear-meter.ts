import { PPQ, parseTimeSig, type NoteEvent, type Snippet } from '../model.js';
import type { Rng } from '../rng.js';
import { eighthGroups } from './rhythm-gen.js';
import type { ExerciseDefinition } from './types.js';

/** Pulse groups in eighth notes for a meter: 4/4 → [2,2,2,2], 3/4 → [2,2,2], 6/8 → [3,3], 7/8 → [2,2,3]. */
function groups(num: number, den: number): number[] {
  if (den === 8) return eighthGroups(num);
  if (den === 2) return new Array<number>(num).fill(4);
  return new Array<number>(num).fill(2);
}

function meterSnippet(rng: Rng, meter: string, bpm: number, bars: number, style: 'drums' | 'piano' | 'mixed'): Snippet {
  const ts = parseTimeSig(meter);
  const eighth = PPQ / 2;
  const gs = groups(ts.num, ts.den);
  const barLen = gs.reduce((a, b) => a + b, 0) * eighth;
  const drums: NoteEvent[] = [];
  const piano: NoteEvent[] = [];
  const bassLine = [48, 53, 55, 48];
  const chords = [[60, 64, 67], [60, 65, 69], [59, 62, 67], [60, 64, 67]];
  const useDrums = style !== 'piano';
  const usePiano = style !== 'drums';
  for (let bar = 0; bar < bars; bar++) {
    let t = bar * barLen;
    gs.forEach((g, gi) => {
      const down = gi === 0;
      if (useDrums) {
        drums.push({ midi: down ? 36 : gi % 2 === 1 && ts.den !== 8 ? 38 : 36, startTick: t, durationTicks: eighth, velocity: down ? 1 : 0.6 });
        for (let k = 0; k < g; k++) drums.push({ midi: 42, startTick: t + k * eighth, durationTicks: eighth, velocity: k === 0 ? 0.55 : 0.3 });
      }
      if (usePiano) {
        const c = chords[bar % chords.length]!;
        if (down) piano.push({ midi: bassLine[bar % bassLine.length]!, startTick: t, durationTicks: g * eighth, velocity: 0.9 });
        else for (const m of c) piano.push({ midi: m, startTick: t, durationTicks: g * eighth * 0.9, velocity: 0.45 });
      }
      t += g * eighth;
    });
  }
  void rng;
  return {
    bpm,
    timeSig: ts,
    tracks: [...(drums.length ? [{ instrument: 'drums' as const, events: drums }] : []), ...(piano.length ? [{ instrument: 'piano' as const, events: piano }] : [])],
  };
}

/** Hear a groove and identify its meter (downbeats accented). */
export const earMeter: ExerciseDefinition<'ear-meter'> = {
  type: 'ear-meter',
  implemented: true,
  generate(block, rng) {
    const s = block.spec;
    const meters = [...new Set(s.meters)];
    if (meters.length === 0) throw new Error('ear-meter: meters must not be empty');
    for (const m of meters) parseTimeSig(m);
    const meter = rng.pick(meters);
    return {
      type: 'ear-meter', meter, answer: meter,
      prompt: 'Count along: what is the meter (time signature)?',
      audio: meterSnippet(rng, meter, s.bpm ?? 96, s.bars ?? 4, s.style ?? 'mixed'),
      choices: meters.map((m) => ({ value: m, label: m })),
      solution: meter,
    };
  },
  evaluate(item, answer) {
    const a = String(answer ?? '').replace(/\s+/g, '');
    const correct = a === item.meter;
    return { correct, score: correct ? 1 : 0, feedback: correct ? 'Correct!' : `Not quite — it was ${item.meter}. Count the beats from one strong beat to the next.`, expected: item.solution };
  },
};
