/**
 * Performance scoring shared by timing-based exercises (play-melody, rhythm-tap, read-rhythm, ear-rhythm tap mode,
 * play-scale with tempo) and untimed sequence scoring (ear-melody / ear-bass "play" answers, play-scale without tempo).
 *
 * Times are in seconds relative to the first music tick (tick 0, i.e. after the count-in). Pure functions, no DOM.
 */
import { PPQ, type TimeSig } from './model.js';
import { pitchClass } from './theory/notes.js';

export interface PerfTarget {
  /** Expected MIDI note; null = any note / tap (rhythm only) */
  midi: number | null;
  startTick: number;
  durationTicks: number;
  /** Voice/track index (multi-voice play-melody) */
  voice?: number;
}

export interface PlayedNote {
  midi: number;
  /** seconds relative to music start (tick 0); negative = during the count-in */
  time: number;
}

/** "exact": octave matters (octave errors get half pitch credit); "pitch-class": octave-lenient; "none": taps. */
export type PitchMode = 'exact' | 'pitch-class' | 'none';

export type NoteStatus = 'ok' | 'early' | 'late' | 'octave' | 'wrong' | 'missed';

export interface PerformanceSpec {
  /** false = only pitches in order are checked (no count-in, no clock) */
  timed: boolean;
  bpm: number;
  timeSig: TimeSig;
  /** bars of count-in */
  countIn: number;
  metronome: boolean;
  targets: PerfTarget[];
  /** total length of the take in ticks (excl. count-in) */
  lengthTicks: number;
  pitchMode: PitchMode;
  input: 'notes' | 'taps';
  /** timing tolerance as a fraction of a beat (default 0.25) */
  tolerance: number;
}

export interface PerfOptions {
  bpm: number;
  timeSig?: TimeSig;
  ppq?: number;
  /** fraction of a beat (default 0.25) */
  tolerance?: number;
  pitchMode?: PitchMode;
}

export interface PerfNoteResult {
  target: number;
  played: number | null;
  status: NoteStatus;
  /** played − expected, seconds (matched notes only) */
  deltaSec?: number;
  /** played − expected in beats */
  deltaBeats?: number;
  score: number;
}

export interface PerformanceResult {
  score: number;
  correct: boolean;
  /** per target, in target order */
  notes: PerfNoteResult[];
  /** indices of played notes that matched nothing */
  extras: number[];
  toleranceSec: number;
  /** mean signed offset of matched notes (s); positive = late */
  meanOffsetSec: number;
  counts: Record<NoteStatus | 'extra', number>;
}

/** Seconds per beat (the time signature's denominator unit; bpm counts quarter notes). */
export function beatSeconds(bpm: number, timeSig: TimeSig = { num: 4, den: 4 }): number {
  return (60 / bpm) * (4 / timeSig.den);
}

export function tickSeconds(tick: number, bpm: number, ppq = PPQ): number {
  return (tick / ppq) * (60 / bpm);
}

function pitchCredit(target: number | null, played: number, mode: PitchMode): { credit: number; status: 'ok' | 'octave' | 'wrong' } {
  if (target === null || mode === 'none') return { credit: 1, status: 'ok' };
  if (played === target) return { credit: 1, status: 'ok' };
  if (pitchClass(played) === pitchClass(target)) return mode === 'pitch-class' ? { credit: 1, status: 'ok' } : { credit: 0.5, status: 'octave' };
  return { credit: 0, status: 'wrong' };
}

const MISS_COST = 3.5;
const EXTRA_COST = 2.5;

/**
 * Order-preserving alignment of played notes to targets. Targets are grouped by onset (chords); played notes (sorted
 * by time) are assigned to groups monotonically — a run of consecutive notes per group, any leftover note is an
 * extra — minimising Σ(|Δt|/tol + pitch penalty) + misses·3.5 + extras·2.5 by dynamic programming. Inside a group
 * notes are paired greedily (so chord tones may arrive in any order). Returns target index → played index.
 */
function alignPerformance(targets: PerfTarget[], played: PlayedNote[], times: number[], tol: number, window: number, mode: PitchMode): Map<number, number> {
  const groupMap = new Map<number, number[]>();
  targets.forEach((t, i) => groupMap.set(t.startTick, [...(groupMap.get(t.startTick) ?? []), i]));
  const groups = [...groupMap.entries()].sort((a, b) => a[0] - b[0]).map(([, idx]) => idx);
  const order = played.map((_, i) => i).sort((a, b) => played[a]!.time - played[b]!.time || a - b);
  const G = groups.length;
  const M = order.length;
  const matchGroup = (g: number[], run: number[]) => {
    const pairs: { t: number; p: number; cost: number }[] = [];
    for (const ti of g) {
      for (const pi of run) {
        const dt = played[pi]!.time - times[ti]!;
        if (Math.abs(dt) > window) continue;
        const pc = pitchCredit(targets[ti]!.midi, played[pi]!.midi, mode);
        pairs.push({ t: ti, p: pi, cost: Math.abs(dt) / tol + (pc.status === 'wrong' ? 3 : pc.status === 'octave' ? 1 : 0) });
      }
    }
    pairs.sort((a, b) => a.cost - b.cost || a.t - b.t || a.p - b.p);
    const tU = new Set<number>();
    const pU = new Set<number>();
    const out: [number, number][] = [];
    let cost = 0;
    for (const pr of pairs) {
      if (tU.has(pr.t) || pU.has(pr.p)) continue;
      tU.add(pr.t);
      pU.add(pr.p);
      out.push([pr.t, pr.p]);
      cost += pr.cost;
    }
    cost += (g.length - tU.size) * MISS_COST + (run.length - pU.size) * EXTRA_COST;
    return { cost, pairs: out };
  };
  const dp: number[][] = Array.from({ length: G + 1 }, () => new Array<number>(M + 1).fill(Infinity));
  const back: ({ pi: number; pj: number; pairs: [number, number][] } | null)[][] = Array.from({ length: G + 1 }, () => new Array(M + 1).fill(null));
  dp[0]![0] = 0;
  for (let i = 0; i <= G; i++) {
    for (let j = 0; j <= M; j++) {
      const cur = dp[i]![j]!;
      if (cur === Infinity) continue;
      // note j is an extra (not assigned to any group)
      if (j < M && cur + EXTRA_COST < dp[i]![j + 1]!) {
        dp[i]![j + 1] = cur + EXTRA_COST;
        back[i]![j + 1] = { pi: i, pj: j, pairs: [] };
      }
      if (i === G) continue;
      const g = groups[i]!;
      const maxRun = Math.min(M - j, g.length + 2);
      for (let r = 0; r <= maxRun; r++) {
        const m = matchGroup(g, order.slice(j, j + r));
        if (cur + m.cost < dp[i + 1]![j + r]!) {
          dp[i + 1]![j + r] = cur + m.cost;
          back[i + 1]![j + r] = { pi: i, pj: j, pairs: m.pairs };
        }
      }
    }
  }
  const result = new Map<number, number>();
  let i = G;
  let j = M;
  while (i > 0 || j > 0) {
    const b = back[i]![j];
    if (!b) break;
    for (const [t, p] of b.pairs) result.set(t, p);
    i = b.pi;
    j = b.pj;
  }
  return result;
}

/**
 * Score a timed performance. Played notes are aligned to targets in order (see alignPerformance; window 3
 * tolerances). Per target:
 * timing credit 1 within ±tol, 0.5 within ±2·tol, 0.2 beyond; score = timing (taps) or pitch × (0.5 + 0.5·timing).
 * Unmatched played notes count half a target against the total. Tolerance = `tolerance` × beat, capped at 45% of
 * the shortest gap between target onsets, and at least 40 ms.
 */
export function scorePerformance(targets: PerfTarget[], played: PlayedNote[], opts: PerfOptions): PerformanceResult {
  const ppq = opts.ppq ?? PPQ;
  const mode = opts.pitchMode ?? 'exact';
  const beat = beatSeconds(opts.bpm, opts.timeSig);
  const times = targets.map((t) => tickSeconds(t.startTick, opts.bpm, ppq));
  const onsets = [...new Set(times.map((t) => Math.round(t * 1000)))].sort((a, b) => a - b);
  let minGap = Infinity;
  for (let i = 1; i < onsets.length; i++) minGap = Math.min(minGap, (onsets[i]! - onsets[i - 1]!) / 1000);
  const tol = Math.max(0.04, Math.min((opts.tolerance ?? 0.25) * beat, minGap * 0.45));
  const window = tol * 3;

  const tUsed = alignPerformance(targets, played, times, tol, window, mode);

  const counts: PerformanceResult['counts'] = { ok: 0, early: 0, late: 0, octave: 0, wrong: 0, missed: 0, extra: 0 };
  const offsets: number[] = [];
  const notes: PerfNoteResult[] = targets.map((tg, ti) => {
    const pi = tUsed.get(ti);
    if (pi === undefined) {
      counts.missed++;
      return { target: ti, played: null, status: 'missed', score: 0 };
    }
    const pl = played[pi]!;
    const dt = pl.time - times[ti]!;
    offsets.push(dt);
    const pc = pitchCredit(tg.midi, pl.midi, mode);
    const a = Math.abs(dt);
    const timing = a <= tol ? 1 : a <= 2 * tol ? 0.5 : 0.2;
    const score = mode === 'none' || tg.midi === null ? timing : pc.credit * (0.5 + 0.5 * timing);
    const status: NoteStatus = pc.status !== 'ok' ? pc.status : a <= tol ? 'ok' : dt < 0 ? 'early' : 'late';
    counts[status]++;
    return { target: ti, played: pi, status, deltaSec: dt, deltaBeats: dt / beat, score };
  });
  const pUsed = new Set(tUsed.values());
  const extras = played.map((_, i) => i).filter((i) => !pUsed.has(i));
  counts.extra = extras.length;
  const total = targets.length + extras.length * 0.5;
  const raw = total > 0 ? notes.reduce((a, n) => a + n.score, 0) / total : played.length === 0 ? 1 : 0;
  const score = Math.round(raw * 100) / 100;
  const meanOffsetSec = offsets.length ? offsets.reduce((a, b) => a + b, 0) / offsets.length : 0;
  const correct = score >= 0.85 && counts.missed === 0 && counts.wrong === 0;
  return { score, correct, notes, extras, toleranceSec: tol, meanOffsetSec, counts };
}

export interface SequenceResult {
  score: number;
  correct: boolean;
  /** per target: index of the played note aligned to it, or null */
  aligned: (number | null)[];
  /** per target: matched? */
  hits: boolean[];
  extras: number[];
}

/**
 * Untimed sequence scoring (order matters, timing ignored): longest-common-subsequence alignment of played notes to
 * targets. score = matches / max(targets, played). `pitchMode` as for performances ("none" matches anything).
 */
export function scoreSequence(targets: (number | null)[], played: number[], pitchMode: PitchMode = 'pitch-class'): SequenceResult {
  const eq = (t: number | null, p: number) => t === null || pitchMode === 'none' || (pitchMode === 'exact' ? t === p : pitchClass(t) === pitchClass(p));
  const n = targets.length;
  const m = played.length;
  const L: number[][] = Array.from({ length: n + 1 }, () => new Array<number>(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      L[i]![j] = eq(targets[i]!, played[j]!) ? 1 + L[i + 1]![j + 1]! : Math.max(L[i + 1]![j]!, L[i]![j + 1]!);
    }
  }
  const aligned: (number | null)[] = new Array<number | null>(n).fill(null);
  const usedP = new Set<number>();
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (eq(targets[i]!, played[j]!) && L[i]![j] === 1 + L[i + 1]![j + 1]!) {
      aligned[i] = j;
      usedP.add(j);
      i++;
      j++;
    } else if (L[i + 1]![j]! >= L[i]![j + 1]!) i++;
    else j++;
  }
  const matches = L[0]![0]!;
  const denom = Math.max(n, m, 1);
  const score = Math.round((matches / denom) * 100) / 100;
  return {
    score, correct: matches === n && m === n, aligned, hits: aligned.map((a) => a !== null),
    extras: played.map((_, k) => k).filter((k) => !usedP.has(k)),
  };
}

/** Human feedback for a timed performance. */
export function performanceFeedback(r: PerformanceResult, opts: { taps?: boolean } = {}): string {
  const n = r.notes.length;
  if (r.correct && r.counts.early + r.counts.late === 0 && r.counts.extra === 0) return opts.taps ? 'Right in time!' : 'Well played — right notes, right time!';
  const parts: string[] = [];
  if (r.counts.missed) parts.push(`${r.counts.missed} missed`);
  if (r.counts.wrong) parts.push(`${r.counts.wrong} wrong note${r.counts.wrong > 1 ? 's' : ''}`);
  if (r.counts.octave) parts.push(`${r.counts.octave} in the wrong octave`);
  if (r.counts.early) parts.push(`${r.counts.early} early`);
  if (r.counts.late) parts.push(`${r.counts.late} late`);
  if (r.counts.extra) parts.push(`${r.counts.extra} extra`);
  let msg = `${Math.round(r.score * 100)}% — ${n - r.counts.missed}/${n} ${opts.taps ? 'hits' : 'notes'} caught${parts.length ? ` (${parts.join(', ')})` : ''}.`;
  const ms = Math.round(r.meanOffsetSec * 1000);
  if (Math.abs(ms) >= Math.max(35, r.toleranceSec * 500)) msg += ` On average you were ${Math.abs(ms)} ms ${ms > 0 ? 'late' : 'early'}.`;
  return msg;
}
