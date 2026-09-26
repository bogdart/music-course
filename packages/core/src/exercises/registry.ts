import { createRng, hashString, stableStringify, type Rng } from '../rng.js';
import { earChord } from './ear-chord.js';
import { earInterval } from './ear-interval.js';
import { earNote } from './ear-note.js';
import { earOctave } from './ear-octave.js';
import { playNotes } from './play-notes.js';
import { quiz } from './quiz.js';
import { quizInput } from './quiz-input.js';
import { readNote } from './read-note.js';
import { earChordRoot } from './ear-chord-root.js';
import { earScale } from './ear-scale.js';
import { earProgression } from './ear-progression.js';
import { earMelody } from './ear-melody.js';
import { earRhythm } from './ear-rhythm.js';
import { earBass } from './ear-bass.js';
import { earTempo } from './ear-tempo.js';
import { earMeter } from './ear-meter.js';
import { playScale, playMelody, rhythmTap, readRhythm } from './perform.js';
import { playChord } from './play-chord.js';
import { buildChord, buildScale, buildInterval } from './build.js';
import { keySignature, romanAnalysis, listen, reflect } from './theory-types.js';
import {
  EXERCISE_TYPES, type Answer, type EvalResult, type ExerciseBlock, type ExerciseBlockOf, type ExerciseDefinition,
  type ExerciseType, type GenerateContext, type Item,
} from './types.js';

export class NotImplementedError extends Error {
  constructor(public readonly exerciseType: string) {
    super(`Exercise type "${exerciseType}" is not implemented yet`);
    this.name = 'NotImplementedError';
  }
}

export function notImplemented<T extends ExerciseType>(type: T): ExerciseDefinition<T> {
  return {
    type,
    implemented: false,
    generate() {
      throw new NotImplementedError(type);
    },
    evaluate() {
      throw new NotImplementedError(type);
    },
  };
}

type Registry = { [T in ExerciseType]: ExerciseDefinition<T> };

const registry = Object.fromEntries(EXERCISE_TYPES.map((t) => [t, notImplemented(t)])) as unknown as Registry;

/** Register (or replace) an exercise implementation. Used by core itself and future type modules. */
export function registerExercise<T extends ExerciseType>(def: ExerciseDefinition<T>): void {
  (registry as unknown as Record<string, ExerciseDefinition<ExerciseType>>)[def.type] = def as unknown as ExerciseDefinition<ExerciseType>;
}

for (const def of [
  earNote, earOctave, earInterval, earChord, earChordRoot, earScale, earProgression, earMelody, earRhythm, earBass, earTempo,
  earMeter, playNotes, playScale, playChord, playMelody, rhythmTap, buildChord, buildScale, buildInterval, quiz, quizInput,
  readNote, readRhythm, keySignature, romanAnalysis, listen, reflect,
]) {
  registerExercise(def as ExerciseDefinition<ExerciseType>);
}

export function getExercise<T extends ExerciseType>(type: T): ExerciseDefinition<T> {
  const d = registry[type];
  if (!d) throw new Error(`Unknown exercise type "${type}"`);
  return d;
}

export function isImplemented(type: string): boolean {
  return (registry as Record<string, ExerciseDefinition<ExerciseType> | undefined>)[type]?.implemented ?? false;
}

export function implementedTypes(): ExerciseType[] {
  return EXERCISE_TYPES.filter((t) => registry[t].implemented);
}

/** Generate one item for an exercise block. */
export function generate<T extends ExerciseType>(block: ExerciseBlockOf<T>, rng: Rng, ctx: Partial<GenerateContext> = {}): Item<T> {
  const def = getExercise(block.type as T);
  return def.generate(block, rng, { index: ctx.index ?? 0, count: ctx.count ?? itemCount(block as ExerciseBlock) });
}

/** Evaluate an answer for an item. */
export function evaluate<T extends ExerciseType>(item: Item<T>, answer: Answer<T>): EvalResult {
  const def = getExercise(item.type as T);
  return def.evaluate(item, answer);
}

/** Types that are a single task unless `count` says otherwise. */
export const SINGLE_ITEM_TYPES: readonly ExerciseType[] = ['play-melody', 'rhythm-tap', 'daw-task', 'listen', 'reflect', 'play-scale'];

/** Number of items in a set: explicit `count`, else natural count (quiz questions, note sets), else 1 for single-task types, else 10. */
export function itemCount(block: ExerciseBlock): number {
  if (block.count && block.count > 0) return block.count;
  const def = getExercise(block.type);
  const n = (def.naturalCount as ((b: ExerciseBlock) => number | undefined) | undefined)?.(block);
  if (n !== undefined) return n;
  return SINGLE_ITEM_TYPES.includes(block.type) ? 1 : 10;
}

/**
 * Performance exercises (play in time, tap a rhythm, build in the DAW) are learned by retrying, so a set item counts
 * its best take. Recognition/recall exercises (ear-*, quizzes, theory) count the first answer, because a retry
 * after seeing the feedback is a guess, not a skill.
 */
export const BEST_TAKE_TYPES: readonly string[] = ['play-scale', 'play-chord', 'play-melody', 'rhythm-tap', 'read-rhythm', 'daw-task', 'reflect'];

export function scoringOf(type: string): 'best' | 'first' {
  return BEST_TAKE_TYPES.includes(type) ? 'best' : 'first';
}

export function passScoreOf(block: ExerciseBlock): number {
  return block.passScore ?? 0.7;
}

/**
 * Generate a whole set deterministically from a seed (block.seed wins). A set never repeats a *fixed* item: when the
 * exercise has nothing random in it (a given melody, rhythm, scale, note list or progression — every item comes out
 * the same from differently seeded generators), `count` can't make identical copies; retrying happens within an item.
 * Randomised exercises keep their count and may repeat an item by chance.
 */
export function generateSet<T extends ExerciseType>(block: ExerciseBlockOf<T>, seed?: number): { seed: number; items: Item<T>[] } {
  const s = block.seed ?? seed ?? Math.floor(Math.random() * 0xffffffff);
  const count = itemCount(block as ExerciseBlock);
  const run = (sd: number) => {
    const rng = createRng(sd);
    return Array.from({ length: count }, (_, i) => generate(block, rng, { index: i, count }));
  };
  const items = run(s);
  if (count < 2) return { seed: s, items };
  const keys = items.map((it) => JSON.stringify(it));
  const fixed = [0x9e3779b9, 0x85ebca6b, 0xc2b2ae35].every((salt) => run((s ^ salt) >>> 0).every((it, i) => JSON.stringify(it) === keys[i]));
  return { seed: s, items: fixed ? items.filter((_, i) => keys.indexOf(keys[i]!) === i) : items };
}

/** Whether an exercise feeds the SRS deck (default: all ear-* types). */
export function isSrsEligible(block: Pick<ExerciseBlock, 'type' | 'srs'>): boolean {
  return block.srs ?? block.type.startsWith('ear-');
}

/** Stable SRS card key `(type, spec-hash)`. */
export function srsKey(block: Pick<ExerciseBlock, 'type' | 'spec'>): string {
  return `${block.type}:${hashString(stableStringify(block.spec)).toString(36)}`;
}

export interface SetSummary {
  score: number;
  correct: number;
  total: number;
  passed: boolean;
}

export function summarise(results: Pick<EvalResult, 'score' | 'correct'>[], passScore = 0.7): SetSummary {
  const total = results.length;
  const score = total ? results.reduce((a, r) => a + r.score, 0) / total : 0;
  return { score, correct: results.filter((r) => r.correct).length, total, passed: total > 0 && score >= passScore };
}
