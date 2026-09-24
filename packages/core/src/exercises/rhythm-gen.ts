import { PPQ, parseTimeSig, type NoteEvent, type Snippet, type TimeSig } from '../model.js';
import { ticksPerBar } from '../rhythm.js';
import type { Rng } from '../rng.js';
import { parseSeqDetailed } from '../seq/seq.js';
import type { PerfTarget } from '../performance.js';

export type Subdivision = 'q' | '8' | '16' | '8t';

/** A rhythm cell: tokens (hits `x` and rests `r`) filling one beat group. `level` = finest subdivision used. */
interface Cell {
  toks: string[];
  level: Subdivision;
  rest?: boolean;
}

const LEVEL_ORDER: Subdivision[] = ['q', '8', '8t', '16'];
const allowed = (cell: Cell, sub: Subdivision) =>
  sub === '8t' ? cell.level === 'q' || cell.level === '8' || cell.level === '8t' : cell.level !== '8t' && LEVEL_ORDER.indexOf(cell.level) <= LEVEL_ORDER.indexOf(sub);

/** Cells for one quarter-note beat. */
const QUARTER: Cell[] = [
  { toks: ['x:q'], level: 'q' },
  { toks: ['r:q'], level: 'q', rest: true },
  { toks: ['x:8', 'x:8'], level: '8' },
  { toks: ['r:8', 'x:8'], level: '8', rest: true },
  { toks: ['x:8', 'r:8'], level: '8', rest: true },
  { toks: ['x:16', 'x:16', 'x:16', 'x:16'], level: '16' },
  { toks: ['x:8', 'x:16', 'x:16'], level: '16' },
  { toks: ['x:16', 'x:16', 'x:8'], level: '16' },
  { toks: ['x:8.', 'x:16'], level: '16' },
  { toks: ['x:16', 'x:8.'], level: '16' },
  { toks: ['r:16', 'x:16', 'x:8'], level: '16', rest: true },
  { toks: ['x:8t', 'x:8t', 'x:8t'], level: '8t' },
  { toks: ['x:8t', 'r:8t', 'x:8t'], level: '8t', rest: true },
  { toks: ['x:qt', 'x:8t'], level: '8t' },
];
/** Cells spanning two quarter beats. */
const HALF: Cell[] = [
  { toks: ['x:h'], level: 'q' },
  { toks: ['x:q.', 'x:8'], level: '8' },
  { toks: ['x:8', 'x:q', 'x:8'], level: '8' },
];
/** Cells for a group of two eighths (compound / odd meters). */
const EIGHTHS2: Cell[] = [
  { toks: ['x:q'], level: 'q' },
  { toks: ['x:8', 'x:8'], level: '8' },
  { toks: ['x:8', 'r:8'], level: '8', rest: true },
  { toks: ['r:8', 'x:8'], level: '8', rest: true },
  { toks: ['x:16', 'x:16', 'x:8'], level: '16' },
  { toks: ['x:8', 'x:16', 'x:16'], level: '16' },
];
/** Cells for a group of three eighths. */
const EIGHTHS3: Cell[] = [
  { toks: ['x:q.'], level: 'q' },
  { toks: ['x:q', 'x:8'], level: '8' },
  { toks: ['x:8', 'x:8', 'x:8'], level: '8' },
  { toks: ['x:8', 'x:q'], level: '8' },
  { toks: ['x:q', 'r:8'], level: '8', rest: true },
  { toks: ['x:8', 'r:8', 'x:8'], level: '8', rest: true },
  { toks: ['x:16', 'x:16', 'x:8', 'x:8'], level: '16' },
  { toks: ['x:8', 'x:8', 'x:16', 'x:16'], level: '16' },
];

/** Beat groups (in eighths) for x/8 meters: 6/8 → [3,3], 7/8 → [2,2,3], 5/8 → [2,3]. */
export function eighthGroups(num: number): number[] {
  const table: Record<number, number[]> = { 1: [1], 2: [2], 3: [3], 4: [2, 2], 5: [2, 3], 6: [3, 3], 7: [2, 2, 3], 8: [3, 3, 2], 9: [3, 3, 3], 10: [2, 3, 2, 3], 11: [2, 2, 3, 2, 2], 12: [3, 3, 3, 3] };
  if (table[num]) return table[num]!;
  const out: number[] = [];
  let left = num;
  while (left > 3) {
    out.push(2);
    left -= 2;
  }
  out.push(left);
  return out;
}

function pickCell(rng: Rng, pool: Cell[], sub: Subdivision, rests: boolean, first: boolean): Cell {
  let cands = pool.filter((c) => allowed(c, sub) && (rests || !c.rest) && !(first && c.toks[0]!.startsWith('r')));
  if (cands.length === 0) cands = pool.filter((c) => c.level === 'q' && !c.rest);
  // weight: cells at the requested level are favoured so the rhythm actually uses it
  const weighted: Cell[] = [];
  for (const c of cands) {
    const w = c.level === sub ? 3 : c.rest ? 1 : 2;
    for (let i = 0; i < w; i++) weighted.push(c);
  }
  return rng.pick(weighted);
}

export interface RhythmOptions {
  timeSig?: string | TimeSig;
  bars?: number;
  subdivision?: Subdivision;
  rests?: boolean;
}

/** Random rhythm as a seq of `x` hits and rests. Starts with a hit; uses the requested subdivision at least once. */
export function randomRhythm(rng: Rng, opts: RhythmOptions = {}): string {
  const ts = parseTimeSig(opts.timeSig);
  const bars = Math.max(1, opts.bars ?? 1);
  const sub = opts.subdivision ?? '8';
  const rests = opts.rests ?? false;
  for (let attempt = 0; attempt < 20; attempt++) {
    const out: string[] = [];
    const levels: Subdivision[] = [];
    for (let b = 0; b < bars; b++) {
      if (b > 0) out.push('|');
      if (ts.den === 8 || ts.den === 16) {
        const groups = ts.den === 8 ? eighthGroups(ts.num) : eighthGroups(Math.max(1, Math.round(ts.num / 2)));
        groups.forEach((g, gi) => {
          const first = b === 0 && gi === 0;
          if (g === 1) return void out.push('x:8');
          const c = pickCell(rng, g === 2 ? EIGHTHS2 : EIGHTHS3, sub === '8t' ? '8' : sub, rests, first);
          out.push(...c.toks);
          levels.push(c.level);
        });
      } else {
        // quarter-note beats (x/2 meters counted in quarters)
        const beats = ts.den === 2 ? ts.num * 2 : ts.den === 1 ? ts.num * 4 : ts.num;
        let beat = 0;
        while (beat < beats) {
          const first = b === 0 && beat === 0;
          const useHalf = beats - beat >= 2 && beat % 2 === 0 && sub !== '16' && rng.chance(0.2);
          const c = pickCell(rng, useHalf ? HALF : QUARTER, sub, rests, first);
          out.push(...c.toks);
          levels.push(c.level);
          beat += useHalf ? 2 : 1;
        }
      }
    }
    const usesLevel = sub === 'q' || levels.includes(sub) || (ts.den === 8 && sub === '8t');
    if (usesLevel || attempt === 19) return out.join(' ');
  }
  return 'x:q';
}

/** Hits (non-rest start ticks) of a rhythm seq. */
export function rhythmTargets(seq: string, timeSig: string | TimeSig = '4/4', loops = 1): PerfTarget[] {
  const ts = parseTimeSig(timeSig);
  const parsed = parseSeqDetailed(seq, { timeSig: ts });
  const len = rhythmLength(seq, ts);
  const out: PerfTarget[] = [];
  for (let l = 0; l < loops; l++) {
    for (const e of parsed.events) out.push({ midi: null, startTick: e.startTick + l * len, durationTicks: e.durationTicks });
  }
  // de-duplicate simultaneous hits (drum chords count once)
  const seen = new Set<number>();
  return out.filter((t) => (seen.has(t.startTick) ? false : (seen.add(t.startTick), true)));
}

/** Length of a rhythm rounded up to whole bars. */
export function rhythmLength(seq: string, timeSig: string | TimeSig = '4/4'): number {
  const ts = parseTimeSig(timeSig);
  const parsed = parseSeqDetailed(seq, { timeSig: ts });
  const bar = ticksPerBar(ts);
  return Math.max(bar, Math.ceil(parsed.totalTicks / bar) * bar);
}

/** Beat clicks (hi-hat, downbeat accented) for `lengthTicks`. */
export function beatClicks(ts: TimeSig, lengthTicks: number, velocity = 0.35): NoteEvent[] {
  const beat = (PPQ * 4) / ts.den;
  const out: NoteEvent[] = [];
  for (let t = 0, i = 0; t < lengthTicks; t += beat, i++) out.push({ midi: 42, startTick: t, durationTicks: beat / 2, velocity: i % ts.num === 0 ? velocity * 1.6 : velocity });
  return out;
}

/** Playable snippet of a rhythm: hits on a click/woodblock sound with quiet beat clicks underneath. */
export function rhythmSnippet(seq: string, timeSig: string | TimeSig, bpm: number, opts: { clicks?: boolean; loops?: number } = {}): Snippet {
  const ts = parseTimeSig(timeSig);
  const len = rhythmLength(seq, ts);
  const loops = opts.loops ?? 1;
  const hits: NoteEvent[] = [];
  const events = parseSeqDetailed(seq, { timeSig: ts }).events;
  for (let l = 0; l < loops; l++) for (const e of events) hits.push({ ...e, startTick: e.startTick + l * len, velocity: Math.max(e.velocity, 0.9) });
  return {
    bpm, timeSig: ts,
    tracks: [
      { instrument: 'drums', events: hits },
      ...(opts.clicks === false ? [] : [{ instrument: 'drums' as const, events: beatClicks(ts, len * loops) }]),
    ],
  };
}
