/**
 * DAW state (zustand, vanilla store per workspace). A workspace is keyed: "main" for the /daw page,
 * "task:<lesson>:<exercise>" for daw-task embeds. Stores live for the browser session (undo history survives
 * navigating away and back). Project edits go through `mutate()` which clones the project (structural sharing
 * is not needed at this scale) and records undo history; drags call `beginGesture()` once, then
 * `mutate(fn, {history: false})` on every move.
 */
import { createContext, useContext } from 'react';
import { createStore, useStore, type StoreApi } from 'zustand';
import {
  PPQ, createClip, createProject, createTrack, normalizeProject, ticksPerBar,
  type Clip, type InstrumentId, type NoteEvent, type Project, type Track,
} from '@music/core';

export type Tool = 'draw' | 'select' | 'chord';
export type SaveState = 'idle' | 'dirty' | 'saving' | 'saved' | 'error' | 'offline';

export interface DawState {
  key: string;
  project: Project;
  past: Project[];
  future: Project[];
  // ---- selection / view ----
  selectedTrackId: string | null;
  selectedClipId: string | null;
  openClipId: string | null;
  /** indices into the open clip's notes */
  selectedNotes: number[];
  tool: Tool;
  /** grid in ticks (0 = bar) */
  grid: number;
  snap: boolean;
  /** new note length in ticks (0 = grid) */
  noteLength: number;
  chordText: string;
  /** arrangement px per beat */
  zoomX: number;
  /** piano roll px per beat / per semitone row */
  rollZoomX: number;
  rollRowH: number;
  // ---- transport ----
  playhead: number;
  playing: boolean;
  recording: boolean;
  /** true while counting in */
  countingIn: boolean;
  loopOn: boolean;
  metronome: boolean;
  countIn: number;
  /** input quantize grid in ticks (0 = off) */
  inputQuantize: number;
  quantizeStrength: number;
  masterVolume: number;
  armedTrackId: string | null;
  // ---- persistence ----
  saveState: SaveState;
  saveError: string | null;
  /** loaded from/saved to the server under project.id */
  persistent: boolean;

  // ---- actions ----
  set(patch: Partial<DawState>): void;
  load(project: Project, opts?: { keepHistory?: boolean; persistent?: boolean }): void;
  mutate(fn: (p: Project) => void, opts?: { history?: boolean }): void;
  beginGesture(): void;
  undo(): void;
  redo(): void;
}

const HISTORY = 100;

function initial(key: string): Omit<DawState, 'set' | 'load' | 'mutate' | 'beginGesture' | 'undo' | 'redo'> {
  const project = createProject({ name: 'Untitled' });
  const firstTrack = project.tracks[0]!;
  firstTrack.clips.push(createClip(0, 4 * ticksPerBar(project.timeSig), [], 'Clip'));
  return {
    key, project, past: [], future: [],
    selectedTrackId: firstTrack.id, selectedClipId: null, openClipId: null, selectedNotes: [],
    tool: 'draw', grid: PPQ / 4, snap: true, noteLength: PPQ, chordText: 'C',
    zoomX: 28, rollZoomX: 64, rollRowH: 14,
    playhead: 0, playing: false, recording: false, countingIn: false, loopOn: false, metronome: true, countIn: 1,
    inputQuantize: 0, quantizeStrength: 1, masterVolume: 0.9, armedTrackId: firstTrack.id,
    saveState: 'idle', saveError: null, persistent: false,
  };
}

export type DawStore = StoreApi<DawState>;

export function createDawStore(key: string): DawStore {
  return createStore<DawState>()((set, get) => ({
    ...initial(key),
    set: (patch) => set(patch),
    load(project, opts = {}) {
      const p = normalizeProject(project);
      const first = p.tracks[0] ?? null;
      set({
        project: p,
        ...(opts.keepHistory ? {} : { past: [], future: [] }),
        selectedTrackId: first?.id ?? null,
        armedTrackId: first?.id ?? null,
        selectedClipId: null,
        openClipId: null,
        selectedNotes: [],
        playhead: 0,
        loopOn: !!p.loop,
        persistent: opts.persistent ?? get().persistent,
        saveState: 'idle',
        saveError: null,
      });
    },
    mutate(fn, opts = {}) {
      const s = get();
      const next = structuredClone(s.project);
      fn(next);
      const history = opts.history ?? true;
      set({
        project: next,
        ...(history ? { past: [...s.past, s.project].slice(-HISTORY), future: [] } : {}),
      });
    },
    beginGesture() {
      const s = get();
      set({ past: [...s.past, s.project].slice(-HISTORY), future: [] });
    },
    undo() {
      const s = get();
      const prev = s.past[s.past.length - 1];
      if (!prev) return;
      set({ project: prev, past: s.past.slice(0, -1), future: [s.project, ...s.future].slice(0, HISTORY), selectedNotes: [] });
      fixSelection(get, set);
    },
    redo() {
      const s = get();
      const next = s.future[0];
      if (!next) return;
      set({ project: next, future: s.future.slice(1), past: [...s.past, s.project].slice(-HISTORY), selectedNotes: [] });
      fixSelection(get, set);
    },
  }));
}

/** After undo/redo, drop references to tracks/clips that no longer exist. */
function fixSelection(get: () => DawState, set: (p: Partial<DawState>) => void) {
  const s = get();
  const trackIds = new Set(s.project.tracks.map((t) => t.id));
  const clipIds = new Set(s.project.tracks.flatMap((t) => t.clips.map((c) => c.id)));
  set({
    selectedTrackId: s.selectedTrackId && trackIds.has(s.selectedTrackId) ? s.selectedTrackId : (s.project.tracks[0]?.id ?? null),
    armedTrackId: s.armedTrackId && trackIds.has(s.armedTrackId) ? s.armedTrackId : null,
    selectedClipId: s.selectedClipId && clipIds.has(s.selectedClipId) ? s.selectedClipId : null,
    openClipId: s.openClipId && clipIds.has(s.openClipId) ? s.openClipId : null,
  });
}

// ---------------- registry + React glue ----------------

const stores = new Map<string, DawStore>();

export function getDawStore(key: string): DawStore {
  let s = stores.get(key);
  if (!s) {
    s = createDawStore(key);
    stores.set(key, s);
  }
  return s;
}

/** The workspace that last received a pointer/focus event: keyboard shortcuts go there. */
let activeKey: string | null = null;
export const setActiveDaw = (key: string) => (activeKey = key);
export const getActiveDaw = () => activeKey;

export const DawContext = createContext<DawStore | null>(null);

export function useDawStore(): DawStore {
  const s = useContext(DawContext);
  if (!s) throw new Error('DAW components must be inside <DawContext.Provider>');
  return s;
}

export function useDaw<T>(selector: (s: DawState) => T): T {
  return useStore(useDawStore(), selector);
}

// ---------------- selectors / pure helpers ----------------

export function findTrack(p: Project, id: string | null): Track | undefined {
  return id ? p.tracks.find((t) => t.id === id) : undefined;
}

export function findClip(p: Project, clipId: string | null): { track: Track; clip: Clip; trackIndex: number } | undefined {
  if (!clipId) return undefined;
  for (let i = 0; i < p.tracks.length; i++) {
    const clip = p.tracks[i]!.clips.find((c) => c.id === clipId);
    if (clip) return { track: p.tracks[i]!, clip, trackIndex: i };
  }
  return undefined;
}

// ---------------- common edits (operate on a draft project) ----------------

export const edits = {
  addTrack(p: Project, instrument: InstrumentId): Track {
    const t = createTrack(instrument);
    const same = p.tracks.filter((x) => x.instrument === instrument).length;
    if (same) t.name = `${t.name} ${same + 1}`;
    p.tracks.push(t);
    return t;
  },
  removeTrack(p: Project, id: string) {
    p.tracks = p.tracks.filter((t) => t.id !== id);
  },
  patchTrack(p: Project, id: string, patch: Partial<Track>) {
    const t = findTrack(p, id);
    if (t) Object.assign(t, patch);
  },
  addClip(p: Project, trackId: string, startTick: number, lengthTicks: number, notes: NoteEvent[] = []): Clip | undefined {
    const t = findTrack(p, trackId);
    if (!t) return undefined;
    const c = createClip(startTick, lengthTicks, notes, t.name);
    t.clips.push(c);
    t.clips.sort((a, b) => a.startTick - b.startTick);
    return c;
  },
  removeClip(p: Project, clipId: string) {
    for (const t of p.tracks) t.clips = t.clips.filter((c) => c.id !== clipId);
  },
  duplicateClip(p: Project, clipId: string): Clip | undefined {
    const f = findClip(p, clipId);
    if (!f) return undefined;
    const t = p.tracks[f.trackIndex]!;
    const end = f.clip.startTick + f.clip.lengthTicks;
    const c = createClip(end, f.clip.lengthTicks, structuredClone(f.clip.notes), f.clip.name);
    t.clips.push(c);
    t.clips.sort((a, b) => a.startTick - b.startTick);
    return c;
  },
};
