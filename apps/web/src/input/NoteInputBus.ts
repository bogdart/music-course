export type NoteSource = 'midi' | 'screen' | 'qwerty';

export interface NoteInputEvent {
  type: 'on' | 'off';
  midi: number;
  /** 0..1 */
  velocity: number;
  source: NoteSource;
  /** performance.now() ms at the time of the event */
  time: number;
}

export type NoteListener = (e: NoteInputEvent) => void;

/**
 * Unified note input bus: MIDI, on-screen keyboard and QWERTY all emit here; exercises, live-thru audio
 * and the DAW subscribe. Tracks held notes (per source, so the same note from two sources is handled).
 */
export class NoteInputBus {
  private listeners = new Set<NoteListener>();
  private heldBySource = new Map<number, Set<NoteSource>>();

  subscribe(fn: NoteListener): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  emit(e: Omit<NoteInputEvent, 'time'> & { time?: number }): void {
    const ev: NoteInputEvent = { ...e, time: e.time ?? performance.now() };
    const set = this.heldBySource.get(ev.midi) ?? new Set<NoteSource>();
    if (ev.type === 'on') {
      set.add(ev.source);
      this.heldBySource.set(ev.midi, set);
    } else {
      set.delete(ev.source);
      if (set.size === 0) this.heldBySource.delete(ev.midi);
    }
    for (const l of [...this.listeners]) {
      try {
        l(ev);
      } catch (err) {
        console.error('NoteInputBus listener failed', err);
      }
    }
  }

  noteOn(midi: number, velocity: number, source: NoteSource): void {
    this.emit({ type: 'on', midi, velocity, source });
  }

  noteOff(midi: number, source: NoteSource): void {
    this.emit({ type: 'off', midi, velocity: 0, source });
  }

  /** Currently held MIDI notes, ascending */
  held(): number[] {
    return [...this.heldBySource.keys()].sort((a, b) => a - b);
  }

  /** Release everything (e.g. on window blur) */
  releaseAll(source?: NoteSource): void {
    for (const [midi, set] of [...this.heldBySource]) {
      for (const s of [...set]) if (!source || s === source) this.noteOff(midi, s);
    }
  }
}

/** App-wide bus instance. */
export const noteInputBus = new NoteInputBus();
