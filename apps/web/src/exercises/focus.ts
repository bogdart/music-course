import { createContext, useContext } from 'react';
import { create } from 'zustand';
import type { NoteInputEvent } from '../input/NoteInputBus';
import { useNoteInput } from '../input/useNoteInput';

/**
 * Note-input focus: a lesson page holds many exercises, but only one should react to MIDI / QWERTY / on-screen
 * notes. <ExerciseShell> claims focus when mounted first, and whenever the learner clicks or focuses inside it;
 * components gate their `useNoteInput` with `useInputActive()`.
 */
interface FocusState {
  active: string | null;
  /** Mounted exercise shells, in mount order */
  ids: string[];
  setActive(id: string | null): void;
  register(id: string, claim?: boolean): void;
  unregister(id: string): void;
}

export const useExerciseFocus = create<FocusState>((set, get) => ({
  active: null,
  ids: [],
  setActive: (id) => set({ active: id }),
  register: (id, claim = false) => {
    const { ids, active } = get();
    set({ ids: ids.includes(id) ? ids : [...ids, id], active: claim || !active ? id : active });
  },
  unregister: (id) => {
    const ids = get().ids.filter((x) => x !== id);
    // hand focus to the first remaining exercise (e.g. after the warm-up finishes)
    set({ ids, active: get().active === id ? (ids[0] ?? null) : get().active });
  },
}));

/** Id of the enclosing exercise shell (null outside a shell → always active). */
export const ExerciseIdContext = createContext<string | null>(null);

export function useInputActive(): boolean {
  const id = useContext(ExerciseIdContext);
  const active = useExerciseFocus((s) => s.active);
  return id === null || active === id;
}

/**
 * `useNoteInput` for exercise components: the handler only runs while this exercise has input focus. Focus is checked
 * when the event arrives (not at render time), so the very first click on a newly focused exercise's keyboard counts.
 */
export function useExerciseNoteInput(handler: (e: NoteInputEvent) => void, enabled = true): void {
  const id = useContext(ExerciseIdContext);
  useNoteInput((e) => {
    if (id !== null && useExerciseFocus.getState().active !== id) return;
    handler(e);
  }, enabled);
}
