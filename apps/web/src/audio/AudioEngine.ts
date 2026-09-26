import * as Tone from 'tone';
import { PPQ, snippetLength, ticksToSeconds, type InstrumentId, type PianoSound, type NoteEvent, type Project, type Snippet } from '@music/core';
import { createInstrument, createSampledPiano, type Instrument } from './instruments';
import { Metronome } from './metronome';
import { e2eAudio } from '../testHooks';
import type { AudioEngineApi, Playable, PlaybackHandle, ScheduleOptions } from './types';

const SAMPLE_BASE = '/samples/piano/';

/** Convert a Project (tracks → clips) into a flat Snippet honouring mute/solo/volume. */
export function projectToSnippet(p: Project): Snippet {
  const anySolo = p.tracks.some((t) => t.solo);
  return {
    bpm: p.bpm,
    timeSig: p.timeSig,
    ...(p.key ? { key: p.key } : {}),
    tracks: p.tracks
      .filter((t) => !t.mute && (!anySolo || t.solo))
      .map((t) => ({
        instrument: t.instrument,
        volume: t.volume,
        events: t.clips.flatMap((c) =>
          c.notes
            .filter((n) => n.startTick < c.lengthTicks)
            .map((n) => ({ ...n, startTick: n.startTick + c.startTick })),
        ),
      })),
  };
}

export function toSnippet(src: Playable): Snippet {
  return 'id' in src && 'name' in src && Array.isArray((src as Project).tracks) && (src as Project).tracks.every((t) => 'clips' in t)
    ? projectToSnippet(src as Project)
    : (src as Snippet);
}

type EndReason = 'ended' | 'stopped';

interface Current {
  finish: (reason: EndReason) => void;
}

/**
 * Singleton audio engine (docs/ARCHITECTURE.md). Tone.Transport runs at PPQ 480. Playback voices and live
 * voices are separate instrument instances so stopping playback never cuts notes the learner is holding.
 */
export class AudioEngine implements AudioEngineApi {
  private static instance: AudioEngine | null = null;
  static get(): AudioEngine {
    if (!AudioEngine.instance) AudioEngine.instance = new AudioEngine();
    return AudioEngine.instance;
  }

  private master: Tone.Volume;
  private playback = new Map<InstrumentId, Instrument>();
  private live = new Map<InstrumentId, Instrument>();
  private current: Current | null = null;
  private _started = false;
  private _sampled = false;
  /** Loaded sampled pianos [playback, live]; kept across piano-sound switches */
  private samplers: [Instrument, Instrument] | null = null;
  private _pianoSound: PianoSound = 'warm';
  private _liveInstrument: InstrumentId = 'piano';
  private held = new Map<number, InstrumentId>();
  private metro: Metronome;

  metronome: AudioEngineApi['metronome'];

  private constructor() {
    Tone.setContext(new Tone.Context({ latencyHint: 'interactive', lookAhead: 0.01, updateInterval: 0.01 }));
    const transport = Tone.getTransport();
    transport.PPQ = PPQ;
    this.master = new Tone.Volume(Tone.gainToDb(0.8)).toDestination();
    this.metro = new Metronome(this.master);
    const metro = this.metro;
    this.metronome = {
      on: () => metro.on(),
      off: () => metro.off(),
      get enabled() {
        return metro.enabled;
      },
      setVolume: (v: number) => metro.setVolume(v),
    };
  }

  get started() {
    return this._started;
  }
  get sampledPiano() {
    return this._sampled;
  }
  get liveInstrument() {
    return this._liveInstrument;
  }

  /** Unlock audio (must be called from a user gesture). Also loads the sampled piano if 'grand' is chosen. */
  async start(): Promise<void> {
    if (this._started) return;
    await Tone.start();
    this._started = true;
    // warm up the live instrument so the first key press is instant
    this.getLive(this._liveInstrument);
    if (this._pianoSound === 'grand') void this.tryLoadSampledPiano();
  }

  private samplersLoading = false;

  private async tryLoadSampledPiano(): Promise<void> {
    if (this.samplers || this.samplersLoading) return;
    this.samplersLoading = true;
    try {
      // the server says whether samples are installed (probing C4.mp3 directly logs a 404 when they are not)
      const health = (await (await fetch('/api/health')).json()) as { pianoSamples?: boolean };
      if (!health.pianoSamples) return;
      this.samplers = await Promise.all([createSampledPiano(SAMPLE_BASE), createSampledPiano(SAMPLE_BASE)]);
      this._sampled = true;
      if (this._pianoSound === 'grand') this.dropPianos();
    } catch {
      /* synth piano stays */
    } finally {
      this.samplersLoading = false;
    }
  }

  /** Forget the current `piano` instances (samplers are kept, synths disposed); they are rebuilt on next use. */
  private dropPianos(): void {
    for (const map of [this.playback, this.live]) {
      const cur = map.get('piano');
      if (!cur) continue;
      map.delete('piano');
      cur.releaseAll();
      if (this.samplers?.includes(cur)) cur.output.disconnect();
      else setTimeout(() => cur.dispose(), 3000); // let release tails ring out
    }
  }

  get pianoSound() {
    return this._pianoSound;
  }

  /** Switch what `piano` sounds like: 'warm' synth or 'grand' (sampled when loaded, else the synth piano). */
  setPianoSound(s: PianoSound): void {
    if (s === this._pianoSound) return;
    this._pianoSound = s;
    if (this._started) this.stop();
    this.dropPianos();
    if (this._started) {
      this.getLive(this._liveInstrument);
      if (s === 'grand') void this.tryLoadSampledPiano();
    }
  }

  private getFrom(map: Map<InstrumentId, Instrument>, id: InstrumentId): Instrument {
    let inst = map.get(id);
    if (!inst) {
      const sampler = this.samplers?.[map === this.playback ? 0 : 1];
      inst = id === 'piano' && this._pianoSound === 'grand' && sampler ? sampler : createInstrument(id, this._pianoSound);
      inst.output.connect(this.master);
      map.set(id, inst);
    }
    return inst;
  }

  /** Playback instrument instance */
  getInstrument(id: InstrumentId): Instrument {
    return this.getFrom(this.playback, id);
  }

  private getLive(id: InstrumentId): Instrument {
    return this.getFrom(this.live, id);
  }

  /**
   * Map an AudioContext time (s) to a performance.now() timestamp (ms) at which that audio is *heard*
   * (uses getOutputTimestamp, so output latency is accounted for). Used to align input events with playback.
   */
  audioTimeToPerf(t: number): number {
    const ctx = Tone.getContext().rawContext as AudioContext;
    const ts = typeof ctx.getOutputTimestamp === 'function' ? ctx.getOutputTimestamp() : null;
    if (ts && ts.performanceTime && ts.contextTime !== undefined) return ts.performanceTime + (t - ts.contextTime) * 1000;
    const out = (ctx.outputLatency ?? 0) + (ctx.baseLatency ?? 0);
    return performance.now() + (t - ctx.currentTime + out) * 1000;
  }

  now(): number {
    return Tone.now();
  }

  playNote(instrument: InstrumentId, midi: number, velocity = 0.8, durationSec = 0.6): void {
    if (!this._started) return;
    e2eAudio({ kind: 'playNote', instrument, midi, velocity });
    this.getLive(instrument).attackRelease(midi, durationSec, Tone.immediate(), velocity);
  }

  noteOn(midi: number, velocity = 0.8, instrument: InstrumentId = this._liveInstrument): void {
    if (!this._started) return;
    const prev = this.held.get(midi);
    if (prev) this.getLive(prev).release(midi, Tone.immediate());
    this.held.set(midi, instrument);
    e2eAudio({ kind: 'noteOn', instrument, midi, velocity });
    this.getLive(instrument).attack(midi, Tone.immediate(), Math.max(0.05, velocity));
  }

  noteOff(midi: number, instrument?: InstrumentId): void {
    const id = instrument ?? this.held.get(midi);
    this.held.delete(midi);
    if (!id || !this._started) return;
    e2eAudio({ kind: 'noteOff', instrument: id, midi });
    this.getLive(id).release(midi, Tone.immediate());
  }

  allNotesOff(): void {
    this.held.clear();
    for (const i of this.live.values()) i.releaseAll();
    for (const i of this.playback.values()) i.releaseAll();
  }

  setLiveInstrument(id: InstrumentId): void {
    this._liveInstrument = id;
    e2eAudio({ kind: 'liveInstrument', instrument: id });
    if (this._started) this.getLive(id);
  }

  setBpm(bpm: number): void {
    Tone.getTransport().bpm.value = bpm;
  }

  setVolume(v: number): void {
    e2eAudio({ kind: 'volume', value: v });
    this.master.volume.value = v <= 0 ? -Infinity : Tone.gainToDb(Math.min(1, v));
  }

  stop(): void {
    this.current?.finish('stopped');
  }

  private resetTransport() {
    const transport = Tone.getTransport();
    transport.stop();
    transport.cancel(0);
    transport.loop = false;
    transport.position = 0;
    for (const i of this.playback.values()) i.releaseAll();
  }

  schedule(source: Playable, opts: ScheduleOptions = {}): PlaybackHandle {
    return this.scheduleInternal(source, opts, () => {});
  }

  private scheduleInternal(source: Playable, opts: ScheduleOptions, onInternalEnd: (r: EndReason) => void): PlaybackHandle {
    this.stop();
    const snippet = toSnippet(source);
    e2eAudio({ kind: 'schedule', notes: snippet.tracks.reduce((n, t) => n + t.events.length, 0) });
    const transport = Tone.getTransport();
    this.resetTransport();
    const bpm = opts.bpm ?? snippet.bpm;
    transport.bpm.cancelScheduledValues(0);
    transport.bpm.value = bpm;
    const { num, den } = snippet.timeSig;
    transport.timeSignature = [num, den];
    this.metro.beatsPerBar = num;
    this.metro.beatUnit = `${den}n`;
    const beatTicks = (PPQ * 4) / den;
    const barTicks = beatTicks * num;
    const offset = Math.max(0, opts.countIn ?? 0) * barTicks;
    const length = Math.max(opts.lengthTicks ?? snippetLength(snippet), 1);
    const draw = Tone.getDraw();

    let resolveDone!: () => void;
    const done = new Promise<void>((r) => (resolveDone = r));
    const tempMetronome = opts.metronome && !this.metro.enabled;

    let finished = false;
    const finish = (reason: EndReason) => {
      if (finished) return;
      finished = true;
      if (this.current === cur) this.current = null;
      this.resetTransport();
      if (tempMetronome) this.metro.off();
      if (temp.length) setTimeout(() => temp.forEach((n) => n.dispose()), 4000);
      opts.onEnd?.();
      onInternalEnd(reason);
      resolveDone();
    };
    const cur: Current = { finish };
    this.current = cur;

    // tempo changes (snippet.tempoChanges, ignored when the caller overrides bpm)
    const changes = opts.bpm === undefined ? [...(snippet.tempoChanges ?? [])].sort((a, b) => a.tick - b.tick) : [];
    const bpmAt = (tick: number) => {
      let v = bpm;
      for (const c of changes) if (c.tick <= tick) v = c.bpm;
      return v;
    };
    for (const c of changes) transport.schedule((time) => transport.bpm.setValueAtTime(c.bpm, time), `${offset + c.tick}i`);

    // count-in clicks (the metronome, when on, already clicks through the count-in: never trigger the click twice)
    const metronomeWillClick = !!opts.metronome || this.metro.enabled;
    for (let i = 0; !metronomeWillClick && i < (opts.countIn ?? 0) * num; i++) {
      transport.schedule((t) => this.metro.click(t, i % num === 0), `${i * beatTicks}i`);
    }

    // panned tracks get their own instrument instance → panner (disposed after playback)
    const temp: { dispose(): void }[] = [];
    snippet.tracks.forEach((track, ti) => {
      let inst = this.getInstrument(track.instrument);
      if (track.pan) {
        const own = createInstrument(track.instrument, this._pianoSound);
        const panner = new Tone.Panner(Math.max(-1, Math.min(1, track.pan))).connect(this.master);
        own.output.connect(panner);
        temp.push(own, panner);
        inst = own;
      }
      const vol = track.volume ?? 1;
      const events: NoteEvent[] = [...track.events].sort((a, b) => a.startTick - b.startTick || a.midi - b.midi);
      events.forEach((ev, idx) => {
        const dur = Math.max(0.03, ticksToSeconds(ev.durationTicks, bpmAt(ev.startTick)) * 0.98);
        transport.schedule((time) => {
          inst.attackRelease(ev.midi, dur, time, Math.max(0.02, ev.velocity * vol));
          e2eAudio({ kind: 'scheduled', instrument: track.instrument, midi: ev.midi });
          if (opts.onNote) draw.schedule(() => opts.onNote?.(ev, ti, idx), time);
        }, `${offset + ev.startTick}i`);
      });
    });

    if (opts.onBeat) {
      const beats = Math.ceil(length / beatTicks);
      for (let b = 0; b < beats; b++) {
        transport.schedule((time) => draw.schedule(() => opts.onBeat?.(b % num, Math.floor(b / num)), time), `${offset + b * beatTicks}i`);
      }
    }

    if (opts.metronome) this.metro.on();
    else this.metro.refresh();

    if (opts.loop) {
      const loopLen = opts.lengthTicks ? length : Math.ceil(length / barTicks) * barTicks;
      transport.loop = true;
      transport.loopStart = `${offset}i`;
      transport.loopEnd = `${offset + loopLen}i`;
    } else {
      transport.schedule((time) => draw.schedule(() => finish('ended'), time + 0.25), `${offset + length}i`);
    }

    const lead = 0.05;
    const startTime = Tone.now() + lead + ticksToSeconds(offset, bpm);
    transport.start(`+${lead}`);
    return { stop: () => finish('stopped'), done, startTime };
  }

  playSequence(parts: Playable[], opts: { gapSec?: number; onEnd?: () => void } = {}): PlaybackHandle {
    let stopped = false;
    let resolveDone!: () => void;
    const done = new Promise<void>((r) => (resolveDone = r));
    let handle: PlaybackHandle | null = null;
    let timer: ReturnType<typeof setTimeout> | null = null;
    const end = () => {
      opts.onEnd?.();
      resolveDone();
    };
    const run = (i: number) => {
      if (stopped) return;
      if (i >= parts.length) return end();
      handle = this.scheduleInternal(parts[i]!, {}, (reason) => {
        if (reason === 'stopped') {
          if (!stopped) {
            stopped = true;
            end();
          }
          return;
        }
        timer = setTimeout(() => run(i + 1), (opts.gapSec ?? 0.3) * 1000);
      });
    };
    run(0);
    return {
      stop: () => {
        if (stopped) return;
        stopped = true;
        if (timer) clearTimeout(timer);
        handle?.stop();
        end();
      },
      done,
      startTime: handle ? (handle as PlaybackHandle).startTime : Tone.now(),
    };
  }
}
