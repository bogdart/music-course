import type { NoteInputBus } from './NoteInputBus';
import type { MidiInputInfo } from '../stores/input';

/**
 * Web MIDI manager: enumerates inputs, handles hot-plug, routes note on/off from the selected input
 * ("all" = every input) to the NoteInputBus. Sustain pedal (CC64) holds note-offs until released.
 */
export class MidiManager {
  private access: MIDIAccess | null = null;
  private selected = 'all';
  private sustain = false;
  private sustained = new Set<number>();

  constructor(
    private bus: NoteInputBus,
    private onInputs: (inputs: MidiInputInfo[]) => void,
  ) {}

  static supported(): boolean {
    return typeof navigator !== 'undefined' && typeof navigator.requestMIDIAccess === 'function';
  }

  async init(): Promise<void> {
    if (!MidiManager.supported()) throw new Error('Web MIDI is not supported in this browser (try Chrome/Edge, and HTTPS or localhost).');
    this.access = await navigator.requestMIDIAccess({ sysex: false });
    this.access.onstatechange = () => this.refresh();
    this.refresh();
  }

  select(id: string): void {
    this.selected = id || 'all';
    this.refresh();
  }

  private refresh(): void {
    if (!this.access) return;
    const infos: MidiInputInfo[] = [];
    this.access.inputs.forEach((input) => {
      infos.push({ id: input.id, name: input.name ?? 'MIDI input', manufacturer: input.manufacturer ?? '', state: input.state });
      const active = this.selected === 'all' || this.selected === input.id;
      input.onmidimessage = active ? (e) => this.handle(e) : null;
    });
    this.onInputs(infos);
  }

  private handle(e: MIDIMessageEvent): void {
    const data = e.data;
    if (!data || data.length < 2) return;
    const status = data[0]! & 0xf0;
    const d1 = data[1]!;
    const d2 = data[2] ?? 0;
    if (status === 0x90 && d2 > 0) {
      this.sustained.delete(d1);
      this.bus.noteOn(d1, d2 / 127, 'midi');
    } else if (status === 0x80 || (status === 0x90 && d2 === 0)) {
      if (this.sustain) this.sustained.add(d1);
      else this.bus.noteOff(d1, 'midi');
    } else if (status === 0xb0 && d1 === 64) {
      this.sustain = d2 >= 64;
      if (!this.sustain) {
        for (const n of this.sustained) this.bus.noteOff(n, 'midi');
        this.sustained.clear();
      }
    } else if (status === 0xb0 && (d1 === 123 || d1 === 120)) {
      this.bus.releaseAll('midi');
    }
  }

  dispose(): void {
    if (!this.access) return;
    this.access.onstatechange = null;
    this.access.inputs.forEach((i) => (i.onmidimessage = null));
    this.access = null;
  }
}
