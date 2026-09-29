import { srsKey, type EvalResult, type ExerciseBlock, type SetSummary } from '@music/core';

/**
 * Per-device memory of a lesson exercise set, so a page refresh resumes it: the set's seed (the same seed regenerates
 * the same items), the current item, the results so far and the final summary. Dropped when the exercise's spec
 * changes. Browser storage can be missing or throw (private mode, blocked site data): every access is guarded.
 */
export interface SavedSet {
  key: string;
  seed: number;
  index: number;
  firsts: (EvalResult | null)[];
  bests: (EvalResult | null)[];
  summary: SetSummary | null;
}

const storageKey = (lessonId: string, exerciseId: string) => `mc:set:${lessonId}:${exerciseId}`;

export function loadSet(lessonId: string, block: ExerciseBlock): SavedSet | null {
  try {
    const raw = localStorage.getItem(storageKey(lessonId, block.id));
    if (!raw) return null;
    const s = JSON.parse(raw) as SavedSet;
    return s.key === srsKey(block) && Number.isFinite(s.seed) ? s : null;
  } catch {
    return null;
  }
}

export function saveSet(lessonId: string, block: ExerciseBlock, s: Omit<SavedSet, 'key'>): void {
  try {
    localStorage.setItem(storageKey(lessonId, block.id), JSON.stringify({ ...s, key: srsKey(block) }));
  } catch {
    /* storage unavailable */
  }
}
