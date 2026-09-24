/** Test helper: the ideal answer for any generated item (used to check generate/evaluate consistency). */
import { tickSeconds, type Item, type PerformanceSpec } from '../src/index.js';

export function perfAnswer(p: PerformanceSpec, shiftSec = 0) {
  return { notes: p.targets.map((t) => ({ midi: t.midi ?? 60, time: p.timed ? tickSeconds(t.startTick, p.bpm) + shiftSec : tickSeconds(t.startTick, 120) })) };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function solve(item: Item): any {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const it = item as any;
  switch (item.type) {
    case 'ear-note': case 'ear-octave': case 'ear-chord': case 'ear-scale': case 'ear-meter': case 'key-signature':
      return it.answer;
    case 'ear-interval': return it.interval;
    case 'ear-chord-root': return it.answerKind === 'play' ? 48 + it.rootPc : it.rootName;
    case 'ear-progression': case 'roman-analysis': return it.slots;
    case 'ear-melody': return it.answerKind === 'play' ? it.midis.map((m: number) => m + 12) : it.slots;
    case 'ear-bass': return it.answerKind === 'play' ? it.midis.map((m: number) => m + 24) : it.slots;
    case 'ear-rhythm': return it.mode === 'tap' ? perfAnswer(it.performance) : it.mode === 'grid' ? { grid: it.grid } : it.answer;
    case 'ear-tempo': return it.bpm;
    case 'play-notes': return it.midis;
    case 'play-scale': case 'play-melody': case 'rhythm-tap': case 'read-rhythm': return perfAnswer(it.performance);
    case 'play-chord': return it.midis;
    case 'build-chord': case 'build-scale': return it.pitchClasses;
    case 'build-interval': return it.target;
    case 'quiz': return it.multi ? it.correct : it.correct[0];
    case 'quiz-input': return it.accepted[0];
    case 'read-note': return it.intervalMode ? it.interval : it.answerKind === 'play' ? it.midi : it.solution;
    case 'listen': return it.question ? (it.question.multi ? it.question.correct : it.question.correct[0]) : 'done';
    case 'reflect': return Array.from({ length: it.minWords + 1 }, () => 'word').join(' ');
    default: return undefined;
  }
}
