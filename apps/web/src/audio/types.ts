import type { InstrumentId, NoteEvent, Project, Snippet } from '@music/core';

export type Playable = Snippet | Project;

export interface ScheduleOptions {
  /** Loop the whole snippet/project (or project.loop range) */
  loop?: boolean;
  /** Called on every beat (UI thread, synced with audio via Tone.Draw). beat/bar are 0-based */
  onBeat?: (beat: number, bar: number) => void;
  /** Called when a note starts (UI thread). `index` = index of the event in its track's (sorted) events */
  onNote?: (ev: NoteEvent, trackIndex: number, index: number) => void;
  /** Called when playback ends naturally or is stopped */
  onEnd?: () => void;
  /** Bars of metronome count-in before the music */
  countIn?: number;
  /** Play the metronome along */
  metronome?: boolean;
  /** Override tempo */
  bpm?: number;
  /** Exact length in ticks (loop length / end of playback) instead of the end of the last note (DAW loop regions, recording) */
  lengthTicks?: number;
}

export interface PlaybackHandle {
  stop(): void;
  /** Resolves when playback ended or was stopped */
  done: Promise<void>;
  /** Transport time (seconds, AudioContext clock) at which the first music tick sounds */
  startTime: number;
}

export interface AudioEngineApi {
  readonly started: boolean;
  readonly sampledPiano: boolean;
  start(): Promise<void>;
  playNote(instrument: InstrumentId, midi: number, velocity?: number, durationSec?: number): void;
  noteOn(midi: number, velocity?: number, instrument?: InstrumentId): void;
  noteOff(midi: number, instrument?: InstrumentId): void;
  allNotesOff(): void;
  schedule(source: Playable, opts?: ScheduleOptions): PlaybackHandle;
  /** Play several snippets back to back (e.g. cadence then question) */
  playSequence(parts: Playable[], opts?: { gapSec?: number; onEnd?: () => void }): PlaybackHandle;
  stop(): void;
  setBpm(bpm: number): void;
  setVolume(v: number): void;
  setLiveInstrument(id: InstrumentId): void;
  readonly liveInstrument: InstrumentId;
  /** AudioContext time now (seconds) — use to timestamp input for timing exercises */
  now(): number;
  /** performance.now() ms at which audio scheduled at AudioContext time `t` is heard */
  audioTimeToPerf(t: number): number;
  metronome: { on(): void; off(): void; readonly enabled: boolean; setVolume(v: number): void };
}
