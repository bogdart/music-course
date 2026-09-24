/**
 * Adaptive difficulty for practice (SRS) sessions: a card's exercise block is widened or narrowed by a signed
 * `level` (…-2 -1 0 +1 +2…). Each step changes one dimension (option set, octaves, inversions, length…). Pure.
 */
import type { ExerciseBlock, SpecMap } from './exercises/types.js';
import { INTERVAL_IDS } from './theory/intervals.js';

export const MAX_LEVEL = 3;
export const MIN_LEVEL = -2;

/** Accuracy thresholds (rolling, over the last `window` items). */
export const ADAPT = { widenAbove: 0.85, narrowBelow: 0.6, window: 10, minItems: 5 } as const;

/** Next level from the rolling accuracy of recent items. */
export function nextLevel(level: number, recentScores: number[]): number {
  const recent = recentScores.slice(-ADAPT.window);
  if (recent.length < ADAPT.minItems) return level;
  const acc = recent.reduce((a, b) => a + b, 0) / recent.length;
  if (acc > ADAPT.widenAbove) return Math.min(MAX_LEVEL, level + 1);
  if (acc < ADAPT.narrowBelow) return Math.max(MIN_LEVEL, level - 1);
  return level;
}

const QUALITY_LADDER = ['maj', 'min', 'dim', 'aug', 'dom7', 'maj7', 'min7', 'm7b5', 'sus2', 'sus4', 'dim7', 'maj6', 'min6', 'add9', 'dom9'];
const SCALE_LADDER = ['major', 'natural-minor', 'harmonic-minor', 'melodic-minor', 'dorian', 'mixolydian', 'lydian', 'phrygian', 'major-pentatonic', 'minor-pentatonic', 'blues', 'locrian', 'whole-tone', 'diminished'];
const DEGREE_LADDER = ['1', '5', '3', '2', '4', '6', '7'];
const SIMPLE_INTERVALS = INTERVAL_IDS.slice(1, 13) as readonly string[];

function addFrom<T>(list: T[], ladder: readonly T[], min = 1): T[] | null {
  const next = ladder.find((x) => !list.includes(x));
  return next === undefined ? null : [...list, next].slice(0, Math.max(min, list.length + 1));
}
function dropLast<T>(list: T[], min = 2): T[] | null {
  return list.length > min ? list.slice(0, -1) : null;
}
function withInversions(inv: number[] | undefined, widen: boolean): number[] | null {
  const cur = inv?.length ? inv : [0];
  if (widen) return cur.length >= 3 ? null : [0, 1, 2].slice(0, cur.length + 1);
  return cur.length > 1 ? cur.slice(0, -1) : null;
}

type Step = (spec: Record<string, unknown>, widen: boolean) => Record<string, unknown> | null;

/** Ordered adjustment steps per type (first applicable wins for each level step). */
const STEPS: { [T in keyof SpecMap]?: Step[] } = {
  'ear-note': [
    (s, w) => {
      const d = (s.degrees as (string | number)[]).map(String);
      const n = w ? addFrom(d, DEGREE_LADDER) : dropLast(d);
      return n ? { ...s, degrees: n } : null;
    },
    (s, w) => {
      const o = (s.octaves as number[] | undefined) ?? [4];
      if (w) return o.length >= 3 ? null : { ...s, octaves: [...new Set([...o, o.includes(3) ? 5 : 3])].sort() };
      return o.length > 1 ? { ...s, octaves: o.slice(0, 1) } : null;
    },
  ],
  'ear-octave': [
    (s, w) => {
      const o = s.octaves as number[];
      if (w) {
        const next = [2, 3, 4, 5, 6].find((x) => !o.includes(x));
        return next === undefined ? null : { ...s, octaves: [...o, next].sort() };
      }
      return o.length > 2 ? { ...s, octaves: o.slice(0, -1) } : null;
    },
  ],
  'ear-interval': [
    (s, w) => {
      const iv = s.intervals as string[];
      const n = w ? addFrom(iv, SIMPLE_INTERVALS) : dropLast(iv);
      return n ? { ...s, intervals: n } : null;
    },
    (s, w) => (w && s.direction !== 'mixed' ? { ...s, direction: 'mixed' } : null),
  ],
  'ear-chord': [
    (s, w) => {
      const q = s.qualities as string[];
      const n = w ? addFrom(q, QUALITY_LADDER) : dropLast(q);
      return n ? { ...s, qualities: n } : null;
    },
    (s, w) => {
      const n = withInversions(s.inversions as number[] | undefined, w);
      return n ? { ...s, inversions: n } : null;
    },
    (s, w) => (w && s.voicing !== 'mixed' ? { ...s, voicing: 'mixed' } : null),
  ],
  'ear-chord-root': [
    (s, w) => {
      const n = withInversions(s.inversions as number[] | undefined, w);
      return n ? { ...s, inversions: n } : null;
    },
    (s, w) => {
      const q = s.qualities as string[];
      const n = w ? addFrom(q, QUALITY_LADDER) : dropLast(q, 1);
      return n ? { ...s, qualities: n } : null;
    },
  ],
  'ear-scale': [
    (s, w) => {
      const sc = s.scales as string[];
      const n = w ? addFrom(sc, SCALE_LADDER) : dropLast(sc);
      return n ? { ...s, scales: n } : null;
    },
    (s, w) => (w && s.play !== 'melody' ? { ...s, play: 'melody' } : null),
  ],
  'ear-progression': [
    (s, w) => {
      const n = withInversions(s.inversions as number[] | undefined, w);
      return n ? { ...s, inversions: n } : null;
    },
    (s, w) => {
      const len = (s.length as number | undefined) ?? 4;
      if (w) return len >= 8 ? null : { ...s, length: len + 1 };
      return len > 2 ? { ...s, length: len - 1 } : null;
    },
  ],
  'ear-bass': [
    (s, w) => {
      const len = (s.length as number | undefined) ?? 4;
      if (w) return len >= 8 ? null : { ...s, length: len + 1 };
      return len > 2 ? { ...s, length: len - 1 } : null;
    },
    (s, w) => {
      const n = withInversions(s.inversions as number[] | undefined, w);
      return n ? { ...s, inversions: n } : null;
    },
  ],
  'ear-melody': [
    (s, w) => {
      const len = (s.length as number | undefined) ?? 4;
      if (w) return len >= 10 ? null : { ...s, length: len + 1 };
      return len > 2 ? { ...s, length: len - 1 } : null;
    },
    (s, w) => {
      const d = (s.degrees as (string | number)[]).map(String);
      const n = w ? addFrom(d, DEGREE_LADDER) : dropLast(d, 3);
      return n ? { ...s, degrees: n } : null;
    },
  ],
  'ear-rhythm': [
    (s, w) => {
      const order = ['q', '8', '16'];
      const cur = (s.subdivision as string | undefined) ?? '8';
      const i = order.indexOf(cur);
      if (i < 0) return null;
      if (w) return i < order.length - 1 ? { ...s, subdivision: order[i + 1] } : null;
      return i > 0 ? { ...s, subdivision: order[i - 1] } : null;
    },
    (s, w) => {
      const b = (s.bars as number | undefined) ?? 1;
      if (w) return b >= 2 ? null : { ...s, bars: b + 1 };
      return b > 1 ? { ...s, bars: b - 1 } : null;
    },
  ],
  'ear-tempo': [
    (s, w) => {
      const t = (s.tolerance as number | undefined) ?? 4;
      if (w) return t <= 2 ? null : { ...s, tolerance: t - 1 };
      return t >= 10 ? null : { ...s, tolerance: t + 2 };
    },
  ],
};

/** Apply `level` adjustment steps (positive = harder). Blocks without adjustable fields are returned unchanged. */
export function adaptBlock<B extends ExerciseBlock>(block: B, level: number): B {
  if (!level || block.type === 'daw-task') return block;
  const steps = STEPS[block.type];
  if (!steps?.length) return block;
  let spec = { ...(block.spec as Record<string, unknown>) };
  const widen = level > 0;
  let remaining = Math.abs(level);
  let i = 0;
  let stuck = 0;
  while (remaining > 0 && stuck < steps.length) {
    const next = steps[i % steps.length]!(spec, widen);
    i++;
    if (next) {
      spec = next;
      remaining--;
      stuck = 0;
    } else stuck++;
  }
  return { ...block, spec } as B;
}

/** Short human description of how an adapted block differs from the original. */
export function describeAdaptation(original: ExerciseBlock, adapted: ExerciseBlock): string[] {
  const a = original.spec as Record<string, unknown>;
  const b = adapted.spec as Record<string, unknown>;
  const out: string[] = [];
  for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) {
    const x = JSON.stringify(a[k]);
    const y = JSON.stringify(b[k]);
    if (x !== y) out.push(`${k}: ${y ?? '—'}`);
  }
  return out;
}
