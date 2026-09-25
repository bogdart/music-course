import { create } from 'zustand';

export interface MidiInputInfo {
  id: string;
  name: string;
  manufacturer: string;
  state: 'connected' | 'disconnected';
}

/** Input devices + currently held notes (from any source). */
/**
 * Why MIDI is or is not available:
 * - insecure: page opened over plain http on a non-localhost address (browsers hide Web MIDI there)
 * - unsupported: browser has no Web MIDI
 * - denied: the user (or browser policy) blocked MIDI for this site
 */
export type MidiStatus = 'unknown' | 'requesting' | 'ready' | 'insecure' | 'unsupported' | 'denied' | 'error';

export interface InputState {
  midiStatus: MidiStatus;
  midiSupported: boolean | null;
  midiError: string | null;
  midiInputs: MidiInputInfo[];
  /** Currently held MIDI notes (all sources) */
  held: number[];
  /** QWERTY base octave (mirrors settings.qwertyOctave; changed with -/=) */
  qwertyOctave: number;
  lastSource: 'midi' | 'screen' | 'qwerty' | null;
  setMidi(p: Partial<Pick<InputState, 'midiStatus' | 'midiSupported' | 'midiError' | 'midiInputs'>>): void;
  setHeld(held: number[], source: InputState['lastSource']): void;
  setQwertyOctave(o: number): void;
}

export const useInputStore = create<InputState>((set) => ({
  midiStatus: 'unknown',
  midiSupported: null,
  midiError: null,
  midiInputs: [],
  held: [],
  qwertyOctave: 4,
  lastSource: null,
  setMidi: (p) => set(p),
  setHeld: (held, lastSource) => set({ held, lastSource }),
  setQwertyOctave: (qwertyOctave) => set({ qwertyOctave: Math.max(0, Math.min(7, qwertyOctave)) }),
}));
