import { PPQ, type TimeSig } from '../model.js';
import { performanceFeedback, scorePerformance, scoreSequence, type PerfTarget, type PerformanceSpec, type PitchMode } from '../performance.js';
import { midiToNote } from '../theory/notes.js';
import type { EvalResult, PerformanceAnswer } from './types.js';

export function perfSpec(p: Partial<PerformanceSpec> & { targets: PerfTarget[]; bpm: number; timeSig: TimeSig }): PerformanceSpec {
  const end = p.targets.reduce((a, t) => Math.max(a, t.startTick + t.durationTicks), 0);
  const bar = (PPQ * 4 * p.timeSig.num) / p.timeSig.den;
  return {
    timed: p.timed ?? true,
    bpm: p.bpm,
    timeSig: p.timeSig,
    countIn: p.countIn ?? 1,
    metronome: p.metronome ?? true,
    targets: p.targets,
    lengthTicks: p.lengthTicks ?? Math.max(bar, Math.ceil(end / bar) * bar),
    pitchMode: p.pitchMode ?? 'exact',
    input: p.input ?? 'notes',
    tolerance: p.tolerance ?? 0.25,
  };
}

function notesOf(answer: unknown): { midi: number; time: number }[] {
  const a = answer as Partial<PerformanceAnswer> | null;
  if (!a || !Array.isArray(a.notes)) return [];
  return a.notes.filter((n) => n && typeof n.midi === 'number' && typeof n.time === 'number');
}

/** Evaluate a PerformanceAnswer against a PerformanceSpec (timed → scorePerformance, untimed → scoreSequence). */
export function evaluatePerformance(spec: PerformanceSpec, answer: unknown, solution: string): EvalResult {
  const played = notesOf(answer);
  if (!spec.timed) {
    // untimed: pitches in order; simultaneous targets (chords / both hands) are flattened low→high
    const targets = [...spec.targets].sort((a, b) => a.startTick - b.startTick || (a.midi ?? 0) - (b.midi ?? 0)).map((t) => t.midi);
    const seq = scoreSequence(targets, [...played].sort((a, b) => a.time - b.time).map((n) => n.midi), spec.pitchMode as PitchMode);
    const wrong = seq.extras.map((i) => midiToNote(played[i]!.midi));
    return {
      correct: seq.correct, score: seq.correct ? 1 : seq.score,
      feedback: seq.correct ? 'Well played!' : `${seq.hits.filter(Boolean).length}/${targets.length} notes in order${wrong.length ? ` (off: ${wrong.join(', ')})` : ''}. Target: ${solution}.`,
      expected: solution,
      details: { sequence: seq },
    };
  }
  const r = scorePerformance(spec.targets, played, { bpm: spec.bpm, timeSig: spec.timeSig, tolerance: spec.tolerance, pitchMode: spec.pitchMode });
  return {
    correct: r.correct, score: r.score,
    feedback: performanceFeedback(r, { taps: spec.input === 'taps' }),
    expected: solution,
    details: { performance: r },
  };
}
