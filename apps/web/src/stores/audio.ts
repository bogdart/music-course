import { create } from 'zustand';

/** Audio/UI runtime state (not persisted). */
export interface AudioState {
  /** AudioEngine.start() has succeeded (user gesture happened) */
  started: boolean;
  sampledPiano: boolean;
  /** Server reachable? null = unknown */
  serverOk: boolean | null;
  serverError: string | null;
  setStarted(v: boolean): void;
  setSampledPiano(v: boolean): void;
  setServer(ok: boolean, error?: string | null): void;
}

export const useAudioStore = create<AudioState>((set) => ({
  started: false,
  sampledPiano: false,
  serverOk: null,
  serverError: null,
  setStarted: (started) => set({ started }),
  setSampledPiano: (sampledPiano) => set({ sampledPiano }),
  setServer: (serverOk, serverError = null) => set({ serverOk, serverError }),
}));
