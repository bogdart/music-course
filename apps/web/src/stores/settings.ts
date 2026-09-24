import { create } from 'zustand';
import { DEFAULT_SETTINGS, type Settings } from '@music/core';
import { api } from '../api/client';
import { useAudioStore } from './audio';

const LS_KEY = 'music-course.settings';

function readLocal(): Settings {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) return { ...DEFAULT_SETTINGS, ...(JSON.parse(raw) as Partial<Settings>) };
  } catch {
    /* ignore */
  }
  return { ...DEFAULT_SETTINGS };
}

function writeLocal(s: Settings) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(s));
  } catch {
    /* ignore */
  }
}

export interface SettingsState {
  settings: Settings;
  /** Loaded from server at least once */
  loaded: boolean;
  load(): Promise<void>;
  /** Optimistic local update + PUT /api/settings (falls back to localStorage when offline) */
  update(patch: Partial<Settings>): Promise<void>;
}

export const useSettingsStore = create<SettingsState>((set, get) => ({
  settings: readLocal(),
  loaded: false,
  async load() {
    try {
      const s = await api.settings();
      const merged = { ...DEFAULT_SETTINGS, ...s };
      writeLocal(merged);
      set({ settings: merged, loaded: true });
      useAudioStore.getState().setServer(true);
    } catch (e) {
      useAudioStore.getState().setServer(false, (e as Error).message);
      set({ loaded: true });
    }
  },
  async update(patch) {
    const next = { ...get().settings, ...patch };
    set({ settings: next });
    writeLocal(next);
    try {
      const saved = await api.saveSettings(patch);
      set({ settings: { ...DEFAULT_SETTINGS, ...saved } });
    } catch {
      /* kept locally */
    }
  },
}));
