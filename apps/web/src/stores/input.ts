import { create } from 'zustand';

export interface MidiInputInfo {
  id: string;
  name: string;
  manufacturer: string;
  state: 'connected' | 'disconnected';
}

/** Input devices + currently held notes (from any source). */
export interface InputState {
  midiSupported: boolean | null;
  midiError: string | null;
  midiInputs: MidiInputInfo[];
  /** Currently held MIDI notes (all sources) */
  held: number[];
  /** QWERTY base octave (mirrors settings.qwertyOctave; changed with -/=) */
  qwertyOctave: number;
  lastSource: 'midi' | 'screen' | 'qwerty' | null;
  setMidi(p: Partial<Pick<InputState, 'midiSupported' | 'midiError' | 'midiInputs'>>): void;
  setHeld(held: number[], source: InputState['lastSource']): void;
  setQwertyOctave(o: number): void;
}

export const useInputStore = create<InputState>((set) => ({
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
