import { useEffect, useRef } from 'react';
import { noteInputBus, type NoteInputEvent } from './NoteInputBus';

/** Subscribe to the note input bus while mounted (and `enabled`). The latest handler is always used. */
export function useNoteInput(handler: (e: NoteInputEvent) => void, enabled = true): void {
  const ref = useRef(handler);
  ref.current = handler;
  useEffect(() => {
    if (!enabled) return;
    return noteInputBus.subscribe((e) => ref.current(e));
  }, [enabled]);
}
