import type { NoteInputBus } from './NoteInputBus';

/**
 * QWERTY map (docs/ARCHITECTURE.md): lower row `z x c v b n m ,` = white keys C..C, `s d g h j` = black keys;
 * upper row `q w e r t y u i` = the next octave's white keys, `2 3 5 6 7` its black keys. `-`/`=` shift octave.
 * Offsets are semitones from C of the base octave.
 */
export const QWERTY_MAP: Record<string, number> = {
  z: 0, s: 1, x: 2, d: 3, c: 4, v: 5, g: 6, b: 7, h: 8, n: 9, j: 10, m: 11, ',': 12, l: 13, '.': 14, ';': 15, '/': 16,
  q: 12, '2': 13, w: 14, '3': 15, e: 16, r: 17, '5': 18, t: 19, '6': 20, y: 21, '7': 22, u: 23, i: 24, '9': 25, o: 26, '0': 27, p: 28,
};

/** MIDI note for a key at a base octave (C of `octave` = lower row "z"), or null. */
export function qwertyToMidi(key: string, octave: number): number | null {
  const off = QWERTY_MAP[key.toLowerCase()];
  if (off === undefined) return null;
  const midi = (octave + 1) * 12 + off;
  return midi >= 0 && midi <= 127 ? midi : null;
}

/** Key label for a MIDI note at the given octave (for on-screen hints), lower row preferred. */
export function midiToQwerty(midi: number, octave: number): string | null {
  const off = midi - (octave + 1) * 12;
  const lower = Object.entries(QWERTY_MAP).find(([k, v]) => v === off && 'zsxdcvgbhnjm,l.;/'.includes(k));
  const any = lower ?? Object.entries(QWERTY_MAP).find(([, v]) => v === off);
  return any ? any[0] : null;
}

function isTypingTarget(t: EventTarget | null): boolean {
  if (!(t instanceof HTMLElement)) return false;
  const tag = t.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || t.isContentEditable;
}

export interface QwertyOptions {
  getOctave(): number;
  setOctave(o: number): void;
  velocity?: number;
}

/** Attach QWERTY listeners to window; returns a detach function. */
export function attachQwerty(bus: NoteInputBus, opts: QwertyOptions, target: Window = window): () => void {
  const down = new Map<string, number>();
  const onDown = (e: KeyboardEvent) => {
    if (e.metaKey || e.ctrlKey || e.altKey || isTypingTarget(e.target)) return;
    const key = e.key.toLowerCase();
    if (key === '-' || key === '=') {
      opts.setOctave(opts.getOctave() + (key === '-' ? -1 : 1));
      e.preventDefault();
      return;
    }
    if (e.repeat) {
      if (down.has(key)) e.preventDefault();
      return;
    }
    const midi = qwertyToMidi(key, opts.getOctave());
    if (midi === null || down.has(key)) return;
    e.preventDefault();
    down.set(key, midi);
    bus.noteOn(midi, opts.velocity ?? 0.8, 'qwerty');
  };
  const onUp = (e: KeyboardEvent) => {
    const key = e.key.toLowerCase();
    const midi = down.get(key);
    if (midi === undefined) return;
    down.delete(key);
    bus.noteOff(midi, 'qwerty');
  };
  const onBlur = () => {
    for (const midi of down.values()) bus.noteOff(midi, 'qwerty');
    down.clear();
  };
  target.addEventListener('keydown', onDown);
  target.addEventListener('keyup', onUp);
  target.addEventListener('blur', onBlur);
  return () => {
    target.removeEventListener('keydown', onDown);
    target.removeEventListener('keyup', onUp);
    target.removeEventListener('blur', onBlur);
    onBlur();
  };
}
