import type { Snippet } from '../model.js';
import { snippetFromEnvelope } from '../seq/seq.js';
import type { ExampleEnvelope } from './types.js';

/** Parse an attached example mix (envelope) into a snippet. */
export function mixSnippet(env: ExampleEnvelope): Snippet {
  return snippetFromEnvelope(env);
}

/** Index of the track holding the part to transcribe: explicit, else first track of `instrument`, else 0. */
export function partTrack(env: ExampleEnvelope, explicit: number | undefined, instrument?: string): number {
  if (explicit !== undefined) {
    if (explicit < 0 || explicit >= env.tracks.length) throw new Error(`track ${explicit} does not exist in example`);
    return explicit;
  }
  if (instrument) {
    const i = env.tracks.findIndex((t) => t.instrument === instrument);
    if (i >= 0) return i;
  }
  const pitched = env.tracks.findIndex((t) => t.instrument !== 'drums');
  return pitched >= 0 ? pitched : 0;
}

/** Monophonic line of a snippet track: the lowest note at each onset (for bass) or highest (for melody). */
export function lineOf(s: Snippet, track: number, pick: 'lowest' | 'highest'): number[] {
  const events = [...(s.tracks[track]?.events ?? [])].sort((a, b) => a.startTick - b.startTick || a.midi - b.midi);
  const byStart = new Map<number, number[]>();
  for (const e of events) byStart.set(e.startTick, [...(byStart.get(e.startTick) ?? []), e.midi]);
  return [...byStart.values()].map((ms) => (pick === 'lowest' ? Math.min(...ms) : Math.max(...ms)));
}
