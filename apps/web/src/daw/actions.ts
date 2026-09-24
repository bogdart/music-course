/** Editing commands shared by toolbars and keyboard shortcuts. */
import { PPQ, chordStampMidis, quantizeNotes, ticksPerBar, type NoteEvent } from '@music/core';
import { edits, findClip, type DawStore } from './store';

export function gridTicks(store: DawStore): number {
  const s = store.getState();
  return s.grid > 0 ? s.grid : ticksPerBar(s.project.timeSig);
}

function withClip(store: DawStore, fn: (notes: NoteEvent[], sel: number[]) => { notes: NoteEvent[]; sel?: number[]; grow?: number } | void) {
  const s = store.getState();
  const f = findClip(s.project, s.openClipId);
  if (!f) return;
  let newSel: number[] | undefined;
  s.mutate((d) => {
    const c = findClip(d, s.openClipId)!.clip;
    const r = fn(c.notes, s.selectedNotes);
    if (!r) return;
    c.notes = r.notes;
    newSel = r.sel;
    const end = c.notes.reduce((a, n) => Math.max(a, n.startTick + n.durationTicks), 0);
    const bar = ticksPerBar(d.timeSig);
    if (end > c.lengthTicks) c.lengthTicks = Math.ceil(end / bar) * bar;
  });
  if (newSel) s.set({ selectedNotes: newSel });
}

export function deleteSelection(store: DawStore): void {
  const s = store.getState();
  if (s.openClipId && s.selectedNotes.length) {
    const del = new Set(s.selectedNotes);
    withClip(store, (notes) => ({ notes: notes.filter((_, i) => !del.has(i)), sel: [] }));
    return;
  }
  if (s.selectedClipId) {
    const id = s.selectedClipId;
    s.mutate((d) => edits.removeClip(d, id));
    s.set({ selectedClipId: null, ...(s.openClipId === id ? { openClipId: null, selectedNotes: [] } : {}) });
  }
}

export function duplicateSelection(store: DawStore): void {
  const s = store.getState();
  if (s.openClipId && s.selectedNotes.length) {
    const g = gridTicks(store);
    withClip(store, (notes, sel) => {
      const picked = sel.map((i) => notes[i]!).filter(Boolean);
      const start = Math.min(...picked.map((n) => n.startTick));
      const end = Math.max(...picked.map((n) => n.startTick + n.durationTicks));
      const span = Math.max(g, Math.ceil((end - start) / g) * g);
      const copies = picked.map((n) => ({ ...n, startTick: n.startTick + span }));
      return { notes: [...notes, ...copies], sel: copies.map((_, i) => notes.length + i) };
    });
    return;
  }
  const clipId = s.selectedClipId ?? (s.openClipId && !s.selectedNotes.length ? s.openClipId : null);
  if (clipId) {
    let newId: string | undefined;
    s.mutate((d) => {
      newId = edits.duplicateClip(d, clipId)?.id;
    });
    if (newId) s.set({ selectedClipId: newId });
  }
}

export function selectAll(store: DawStore): void {
  const s = store.getState();
  const f = findClip(s.project, s.openClipId);
  if (f) s.set({ selectedNotes: f.clip.notes.map((_, i) => i) });
}

export function transposeSelection(store: DawStore, semis: number): void {
  withClip(store, (notes, sel) => {
    const set = new Set(sel.length ? sel : notes.map((_, i) => i));
    return { notes: notes.map((n, i) => (set.has(i) ? { ...n, midi: Math.max(0, Math.min(127, n.midi + semis)) } : n)) };
  });
}

export function moveSelection(store: DawStore, dir: number): void {
  const g = gridTicks(store);
  withClip(store, (notes, sel) => {
    const set = new Set(sel);
    const minStart = Math.min(...sel.map((i) => notes[i]?.startTick ?? 0));
    const delta = Math.max(-minStart, dir * g);
    return { notes: notes.map((n, i) => (set.has(i) ? { ...n, startTick: n.startTick + delta } : n)) };
  });
}

/** Quantize the selection (or the whole clip) to the current grid. */
export function quantizeSelection(store: DawStore, strength: number): void {
  const g = gridTicks(store);
  withClip(store, (notes, sel) => {
    const set = new Set(sel.length ? sel : notes.map((_, i) => i));
    const q = quantizeNotes(notes, g, strength);
    return { notes: notes.map((n, i) => (set.has(i) ? q[i]! : n)) };
  });
}

export function setVelocity(store: DawStore, velocity: number, indices?: number[]): void {
  withClip(store, (notes, sel) => {
    const set = new Set(indices ?? sel);
    return { notes: notes.map((n, i) => (set.has(i) ? { ...n, velocity } : n)) };
  });
}

/** Insert the chord from the chord-stamp field at `tick` (clip-relative), root near `rootOctaveMidi`. */
export function stampChord(store: DawStore, tick: number, rootOctaveMidi: number, length?: number): string | null {
  const s = store.getState();
  const chord = chordStampMidis(s.chordText, s.project.key ?? 'C', rootOctaveMidi);
  if (!chord) return `Unknown chord "${s.chordText}" — try C, Am7, F/A or a numeral like vi, V7.`;
  const len = length ?? (s.noteLength > 0 ? s.noteLength : gridTicks(store) || PPQ);
  withClip(store, (notes) => {
    const added = chord.midis.map((midi) => ({ midi, startTick: tick, durationTicks: len, velocity: 0.8 }));
    return { notes: [...notes, ...added], sel: added.map((_, i) => notes.length + i) };
  });
  return null;
}
