import * as Tone from 'tone';

/** Metronome click synced to the Transport. Downbeat is accented. */
export class Metronome {
  private synth: Tone.MembraneSynth;
  private vol: Tone.Volume;
  private eventId: number | null = null;
  enabled = false;
  beatsPerBar = 4;
  /** Beat unit as a Transport time (e.g. "4n") */
  beatUnit = '4n';

  constructor(destination: Tone.ToneAudioNode) {
    this.vol = new Tone.Volume(-6).connect(destination);
    this.synth = new Tone.MembraneSynth({ pitchDecay: 0.004, octaves: 1.5, envelope: { attack: 0.001, decay: 0.06, sustain: 0 } }).connect(this.vol);
  }

  click(time: number, accent: boolean) {
    this.synth.triggerAttackRelease(accent ? 'C6' : 'G5', '32n', time, accent ? 1 : 0.6);
  }

  private attach() {
    const transport = Tone.getTransport();
    if (this.eventId !== null) transport.clear(this.eventId);
    this.eventId = transport.scheduleRepeat((time) => {
      const ticks = transport.getTicksAtTime(time);
      const beatTicks = Tone.Time(this.beatUnit).toTicks();
      const beat = Math.round(ticks / beatTicks) % this.beatsPerBar;
      this.click(time, beat === 0);
    }, this.beatUnit, 0);
  }

  on() {
    this.enabled = true;
    this.attach();
  }

  off() {
    this.enabled = false;
    if (this.eventId !== null) Tone.getTransport().clear(this.eventId);
    this.eventId = null;
  }

  /** Re-attach after Transport.cancel() */
  refresh() {
    if (this.enabled) this.attach();
  }

  setVolume(v: number) {
    this.vol.volume.value = v <= 0 ? -Infinity : Tone.gainToDb(v);
  }
}
