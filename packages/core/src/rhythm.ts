import { PPQ, type TimeSig } from './model.js';

/** Ticks in one beat (the time signature's denominator unit). */
export function ticksPerBeat(ts: TimeSig, ppq = PPQ): number {
  return (ppq * 4) / ts.den;
}

export function ticksPerBar(ts: TimeSig, ppq = PPQ): number {
  return ticksPerBeat(ts, ppq) * ts.num;
}

export function barsToTicks(bars: number, ts: TimeSig, ppq = PPQ): number {
  return bars * ticksPerBar(ts, ppq);
}

export function beatsToTicks(beats: number, ts: TimeSig, ppq = PPQ): number {
  return beats * ticksPerBeat(ts, ppq);
}

export function ticksToBeats(ticks: number, ts: TimeSig, ppq = PPQ): number {
  return ticks / ticksPerBeat(ts, ppq);
}

export function ticksToBars(ticks: number, ts: TimeSig, ppq = PPQ): number {
  return ticks / ticksPerBar(ts, ppq);
}

/** Seconds per tick at a given tempo (bpm counts quarter notes). */
export function ticksToSeconds(ticks: number, bpm: number, ppq = PPQ): number {
  return (ticks / ppq) * (60 / bpm);
}

export function secondsToTicks(seconds: number, bpm: number, ppq = PPQ): number {
  return (seconds * bpm * ppq) / 60;
}

/** Position of a tick as 1-based bar/beat plus leftover ticks ("bars:beats:ticks"). */
export function tickToPosition(tick: number, ts: TimeSig, ppq = PPQ): { bar: number; beat: number; tick: number } {
  const tpb = ticksPerBar(ts, ppq);
  const tpbeat = ticksPerBeat(ts, ppq);
  const bar = Math.floor(tick / tpb);
  const inBar = tick - bar * tpb;
  const beat = Math.floor(inBar / tpbeat);
  return { bar: bar + 1, beat: beat + 1, tick: Math.round(inBar - beat * tpbeat) };
}

export function positionToTick(pos: { bar: number; beat?: number; tick?: number }, ts: TimeSig, ppq = PPQ): number {
  return (pos.bar - 1) * ticksPerBar(ts, ppq) + ((pos.beat ?? 1) - 1) * ticksPerBeat(ts, ppq) + (pos.tick ?? 0);
}

/** Snap a tick to a grid (grid given in ticks), with optional strength 0..1. */
export function quantizeTick(tick: number, grid: number, strength = 1): number {
  const target = Math.round(tick / grid) * grid;
  return Math.round(tick + (target - tick) * strength);
}
