/**
 * Opt-in hooks for the Playwright e2e suite (e2e/, docs/QA_REPORT.md). Inert unless a test defines
 * `window.__MC_E2E__ = { audio: [], items: {} }` before the app loads (page.addInitScript). No behaviour change.
 *  - `audio`: every note the AudioEngine actually triggers ({kind, midi, instrument, ...}), every schedule() start,
 *    plus volume/instrument changes.
 *  - `items[exerciseId]`: the item currently shown by an <ExerciseShell> (so tests can answer right or wrong).
 *  - `daw[storeKey]`: the DAW zustand stores ("main", "task:<lesson>:<exercise>") — read the project, or build a
 *    daw-task solution through the store's own actions.
 *  - `perf`: clock of the running performance capture (timed exercises): `t0` = performance.now() of tick 0
 *    (after the count-in), so tests can play notes "in time".
 *  - `transport`: clock of the running DAW playback/recording: `startPerf` = performance.now() of the start tick.
 */
export interface E2EHook {
  audio?: Record<string, unknown>[];
  items?: Record<string, { index: number; total: number; item: unknown }>;
  daw?: Record<string, unknown>;
  perf?: { t0: number | null; phase: string; bpm: number; startedAt: number };
  transport?: { startPerf: number; bpm: number; fromTick: number; recording: boolean };
}

export function e2eHook(): E2EHook | undefined {
  return (globalThis as { __MC_E2E__?: E2EHook }).__MC_E2E__;
}

export function e2eAudio(entry: Record<string, unknown>): void {
  const h = e2eHook();
  if (h) (h.audio ??= []).push({ t: Date.now(), ...entry });
}
