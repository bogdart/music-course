/** Test double for src/audio/engine.ts (jsdom has no Web Audio). Records calls for assertions. */
import { vi } from 'vitest';
import type { PlaybackHandle } from '../audio/types';

const handle = (): PlaybackHandle => ({ stop: vi.fn(), done: Promise.resolve(), startTime: 0 });

export const calls: { type: string; args: unknown[] }[] = [];
const rec = (type: string) => (...args: unknown[]) => {
  calls.push({ type, args });
};

export const loadEngine = vi.fn(async () => ({}));
export const preloadAudio = vi.fn(async () => ({}));
export const getLoadedEngine = vi.fn(() => null);
export const startAudio = vi.fn(async () => {});
export const play = vi.fn(async (...args: unknown[]) => {
  rec('play')(...args);
  return handle();
});
export const playSequence = vi.fn(async (...args: unknown[]) => {
  rec('playSequence')(...args);
  return handle();
});
export const stopPlayback = vi.fn();
export const playNote = vi.fn(async (...args: unknown[]) => rec('playNote')(...args));
export const liveNoteOn = vi.fn((...args: unknown[]) => rec('liveNoteOn')(...args));
export const liveNoteOff = vi.fn((...args: unknown[]) => rec('liveNoteOff')(...args));
export const configureEngine = vi.fn(async () => {});
export const audioNow = () => performance.now() / 1000;
