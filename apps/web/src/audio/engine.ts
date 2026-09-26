/**
 * Lazy facade over the AudioEngine singleton. Components import from here, never from './AudioEngine'
 * directly, so Tone.js is code-split and tests can mock this module (see src/test/fakeEngine.ts).
 */
import type { InstrumentId, PianoSound } from '@music/core';
import type { AudioEngine } from './AudioEngine';
import type { Playable, PlaybackHandle, ScheduleOptions } from './types';
import { useAudioStore } from '../stores/audio';

type EngineModule = typeof import('./AudioEngine');

let mod: EngineModule | null = null;
let modLoading: Promise<EngineModule> | null = null;
let loaded: AudioEngine | null = null;
type EngineConfig = { volume?: number; liveInstrument?: InstrumentId; metronomeVolume?: number; pianoSound?: PianoSound };
let pending: EngineConfig = {};

/** Load Tone.js + the engine module without creating an AudioContext (call early, e.g. on app start). */
export function preloadAudio(): Promise<EngineModule> {
  if (mod) return Promise.resolve(mod);
  modLoading ??= import('./AudioEngine').then((m) => (mod = m));
  return modLoading;
}

function construct(m: EngineModule): AudioEngine {
  if (!loaded) {
    loaded = m.AudioEngine.get();
    applyConfig(loaded, pending);
  }
  return loaded;
}

function applyConfig(e: AudioEngine, c: typeof pending) {
  if (c.volume !== undefined) e.setVolume(c.volume);
  if (c.pianoSound) e.setPianoSound(c.pianoSound);
  if (c.liveInstrument) e.setLiveInstrument(c.liveInstrument);
  if (c.metronomeVolume !== undefined) e.metronome.setVolume(c.metronomeVolume);
}

/** The engine singleton (creates the AudioContext; prefer calling from a user gesture). */
export function loadEngine(): Promise<AudioEngine> {
  return mod ? Promise.resolve(construct(mod)) : preloadAudio().then(construct);
}

/** The engine if already created and started (synchronous; for low-latency live input). */
export function getLoadedEngine(): AudioEngine | null {
  return loaded && loaded.started ? loaded : null;
}

/**
 * Unlock audio from a user gesture. If the module is preloaded, the engine is created and the
 * AudioContext resumed synchronously inside the gesture, which iOS Safari requires.
 */
export function startAudio(): Promise<void> {
  const run = async (e: AudioEngine) => {
    await e.start();
    useAudioStore.getState().setStarted(true);
    // sampled piano loads in the background
    setTimeout(() => useAudioStore.getState().setSampledPiano(e.sampledPiano), 4000);
  };
  return mod ? run(construct(mod)) : loadEngine().then(run);
}

const idle: PlaybackHandle = { stop() {}, done: Promise.resolve(), startTime: 0 };

/** Schedule a snippet/project. Starts audio if needed (call from a gesture handler). */
export async function play(source: Playable, opts: ScheduleOptions = {}): Promise<PlaybackHandle> {
  const e = await loadEngine();
  if (!e.started) await startAudio();
  return e.schedule(source, opts);
}

export async function playSequence(parts: Playable[], opts: { gapSec?: number; onEnd?: () => void } = {}): Promise<PlaybackHandle> {
  if (parts.length === 0) return idle;
  const e = await loadEngine();
  if (!e.started) await startAudio();
  return e.playSequence(parts, opts);
}

export function stopPlayback(): void {
  loaded?.stop();
}

export async function playNote(instrument: InstrumentId, midi: number, velocity = 0.8, durationSec = 0.8): Promise<void> {
  const e = await loadEngine();
  if (!e.started) await startAudio();
  e.playNote(instrument, midi, velocity, durationSec);
}

export function liveNoteOn(midi: number, velocity: number): void {
  getLoadedEngine()?.noteOn(midi, velocity);
}

export function liveNoteOff(midi: number): void {
  getLoadedEngine()?.noteOff(midi);
}

/** Apply volume / live instrument / metronome volume / piano sound now, or when the engine is created. */
export async function configureEngine(opts: EngineConfig): Promise<void> {
  pending = { ...pending, ...opts };
  if (loaded) applyConfig(loaded, opts);
}

/** performance.now() timestamp (ms) at which audio scheduled at AudioContext time `t` will be heard. */
export function audioTimeToPerf(t: number): number {
  return loaded ? loaded.audioTimeToPerf(t) : performance.now();
}

export function audioNow(): number {
  return loaded?.now() ?? performance.now() / 1000;
}
