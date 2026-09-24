import { useEffect } from 'react';
import { configureEngine } from '../audio/engine';
import { useSettingsStore } from '../stores/settings';
import { deleteSelection, duplicateSelection, moveSelection, selectAll, transposeSelection } from './actions';
import { findTrack, getActiveDaw, type DawStore } from './store';
import { stop, togglePlay, toggleRecord } from './transport';

function isTyping(t: EventTarget | null): boolean {
  if (!(t instanceof HTMLElement)) return false;
  const tag = t.tagName;
  if (tag === 'INPUT') {
    const type = (t as HTMLInputElement).type;
    return !['range', 'checkbox', 'button', 'radio'].includes(type);
  }
  return tag === 'TEXTAREA' || tag === 'SELECT' || t.isContentEditable;
}

/**
 * Keyboard shortcuts for the active DAW workspace (capture phase, so R does not also play a QWERTY note):
 * Space play/stop · R record · Del/Backspace delete · Ctrl+Z undo · Ctrl+Y / Ctrl+Shift+Z redo ·
 * Ctrl+D duplicate · Ctrl+A select all · ↑/↓ transpose (Shift = octave) · ←/→ move by grid · Esc deselect.
 */
export function useDawShortcuts(store: DawStore, enabled = true): void {
  useEffect(() => {
    if (!enabled) return;
    const onKey = (e: KeyboardEvent) => {
      const st = store.getState();
      if (getActiveDaw() !== st.key) return;
      if (isTyping(e.target)) return;
      const mod = e.ctrlKey || e.metaKey;
      const k = e.key;
      const handled = () => {
        e.preventDefault();
        e.stopImmediatePropagation();
      };
      if (k === ' ' && !mod) {
        handled();
        togglePlay(store);
      } else if ((k === 'r' || k === 'R') && !mod && !e.altKey) {
        if (e.repeat) return handled();
        handled();
        toggleRecord(store);
      } else if ((k === 'Delete' || k === 'Backspace') && !mod) {
        handled();
        deleteSelection(store);
      } else if (mod && (k === 'z' || k === 'Z')) {
        handled();
        if (e.shiftKey) st.redo();
        else st.undo();
      } else if (mod && (k === 'y' || k === 'Y')) {
        handled();
        st.redo();
      } else if (mod && (k === 'd' || k === 'D')) {
        handled();
        duplicateSelection(store);
      } else if (mod && (k === 'a' || k === 'A') && st.openClipId) {
        handled();
        selectAll(store);
      } else if ((k === 'ArrowUp' || k === 'ArrowDown') && st.selectedNotes.length) {
        handled();
        transposeSelection(store, (k === 'ArrowUp' ? 1 : -1) * (e.shiftKey ? 12 : 1));
      } else if ((k === 'ArrowLeft' || k === 'ArrowRight') && st.selectedNotes.length) {
        handled();
        moveSelection(store, k === 'ArrowRight' ? 1 : -1);
      } else if (k === 'Escape') {
        st.set({ selectedNotes: [], selectedClipId: null });
      } else if (k === 'Enter' && !mod) {
        handled();
        stop();
        st.set({ playhead: 0 });
      }
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [store, enabled]);
}

/** While mounted, live notes (MIDI/QWERTY/screen) sound through the armed or selected track's instrument. */
export function useLiveInstrument(store: DawStore): void {
  useEffect(() => {
    const apply = () => {
      const s = store.getState();
      const t = findTrack(s.project, s.armedTrackId) ?? findTrack(s.project, s.selectedTrackId);
      if (t) void configureEngine({ liveInstrument: t.instrument });
    };
    apply();
    const unsub = store.subscribe((s, prev) => {
      if (s.armedTrackId !== prev.armedTrackId || s.selectedTrackId !== prev.selectedTrackId || s.project.tracks !== prev.project.tracks) apply();
    });
    return () => {
      unsub();
      void configureEngine({ liveInstrument: useSettingsStore.getState().settings.liveInstrument });
    };
  }, [store]);
}

/** Stop the transport when the workspace unmounts. */
export function useStopOnUnmount(store: DawStore): void {
  useEffect(() => () => {
    if (store.getState().playing) stop();
  }, [store]);
}
