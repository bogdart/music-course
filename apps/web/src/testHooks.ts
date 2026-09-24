/**
 * Opt-in hooks for the Playwright e2e suite (e2e/, docs/QA_REPORT.md). Inert unless a test defines
 * `window.__MC_E2E__ = { audio: [], items: {} }` before the app loads (page.addInitScript). No behaviour change.
 *  - `audio`: every note the AudioEngine actually triggers ({kind, midi, instrument, ...}), every schedule() start,
 *    plus volume/instrument changes.
 *  - `items[exerciseId]`: the item currently shown by an <ExerciseShell> (so tests can answer right or wrong).
 */
export interface E2EHook {
  audio?: Record<string, unknown>[];
  items?: Record<string, { index: number; total: number; item: unknown }>;
}

export function e2eHook(): E2EHook | undefined {
  return (globalThis as { __MC_E2E__?: E2EHook }).__MC_E2E__;
}

export function e2eAudio(entry: Record<string, unknown>): void {
  const h = e2eHook();
  if (h) (h.audio ??= []).push({ t: Date.now(), ...entry });
}
