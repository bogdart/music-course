import { PPQ, parseTimeSig, type NoteEvent, type Snippet } from '../model.js';
import type { ExerciseDefinition } from './types.js';

function groove(bpm: number, tsStr: string, bars: number, style: 'click' | 'drums' | 'groove'): Snippet {
  const ts = parseTimeSig(tsStr);
  const beat = (PPQ * 4) / ts.den;
  const drums: NoteEvent[] = [];
  const bass: NoteEvent[] = [];
  const total = bars * ts.num;
  for (let b = 0; b < total; b++) {
    const t = b * beat;
    const inBar = b % ts.num;
    if (style === 'click') {
      drums.push({ midi: 76, startTick: t, durationTicks: beat / 2, velocity: inBar === 0 ? 1 : 0.7 });
      continue;
    }
    drums.push({ midi: 42, startTick: t, durationTicks: beat / 2, velocity: 0.5 });
    drums.push({ midi: 42, startTick: t + beat / 2, durationTicks: beat / 2, velocity: 0.35 });
    if (inBar % 2 === 0) drums.push({ midi: 36, startTick: t, durationTicks: beat, velocity: 0.9 });
    else drums.push({ midi: 38, startTick: t, durationTicks: beat, velocity: 0.8 });
    if (style === 'groove' && inBar % 2 === 0) bass.push({ midi: [36, 36, 41, 43][Math.floor(b / ts.num) % 4]!, startTick: t, durationTicks: beat, velocity: 0.8 });
  }
  return { bpm, timeSig: ts, tracks: [{ instrument: 'drums', events: drums }, ...(bass.length ? [{ instrument: 'bass' as const, events: bass }] : [])] };
}

/** Hear a beat and estimate its tempo in BPM (± `tolerance`, default 4). A tap-tempo helper is offered in the UI. */
export const earTempo: ExerciseDefinition<'ear-tempo'> = {
  type: 'ear-tempo',
  implemented: true,
  generate(block, rng) {
    const s = block.spec;
    const [a, b] = s.range ?? [60, 160];
    const lo = Math.max(30, Math.min(a, b));
    const hi = Math.min(260, Math.max(a, b));
    const bpm = rng.int(lo, hi);
    const tolerance = s.tolerance ?? 4;
    return {
      type: 'ear-tempo', bpm, tolerance, range: [lo, hi],
      prompt: `What is the tempo in BPM? (between ${lo} and ${hi}; within ±${tolerance} counts as correct)`,
      audio: groove(bpm, s.timeSig ?? '4/4', s.bars ?? 2, s.style ?? 'drums'),
      solution: `${bpm} BPM`,
    };
  },
  evaluate(item, answer) {
    const n = typeof answer === 'number' ? answer : Number(String(answer ?? '').replace(',', '.').replace(/[^\d.]/g, ''));
    if (!Number.isFinite(n) || n <= 0) return { correct: false, score: 0, feedback: 'Enter a number of beats per minute.', expected: item.solution };
    const err = Math.abs(n - item.bpm);
    const correct = err <= item.tolerance;
    const score = correct ? 1 : Math.max(0, Math.round((1 - (err - item.tolerance) / (item.tolerance * 3)) * 100) / 100);
    const half = Math.abs(n * 2 - item.bpm) <= item.tolerance || Math.abs(n / 2 - item.bpm) <= item.tolerance;
    return {
      correct, score: correct ? 1 : Math.min(0.9, score),
      feedback: correct ? `Correct — it was ${item.bpm} BPM.` : half ? `You counted half/double time — it was ${item.bpm} BPM.` : `It was ${item.bpm} BPM (you said ${n}, ${n < item.bpm ? 'too slow' : 'too fast'}).`,
      expected: item.solution,
    };
  },
};
