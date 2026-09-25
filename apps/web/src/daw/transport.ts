/**
 * Playback + recording for a DAW store, through the audio facade (audio/engine.ts).
 * - Playback builds a Snippet from the project honouring mute/solo, track volume × master volume, the loop
 *   region (when on) or the playhead position; a rAF loop moves the playhead from the AudioContext clock.
 * - Recording counts in, plays the project (metronome on if enabled), and captures noteInputBus events into a
 *   clip on the armed track (overdub into the clip under the start position, else a new clip), with optional
 *   input quantize. Live monitoring goes through the track's instrument (live instrument switched while
 *   the DAW is mounted, see useLiveInstrument).
 */
import {
  PPQ, quantizeTick, ticksPerBar, trackNotes, type NoteEvent, type Project, type Snippet,
} from '@music/core';
import { audioNow, audioTimeToPerf, play as enginePlay, stopPlayback } from '../audio/engine';
import { e2eHook } from '../testHooks';
import type { PlaybackHandle } from '../audio/types';
import { noteInputBus, type NoteInputEvent } from '../input/NoteInputBus';
import { findTrack, type DawStore } from './store';

interface Session {
  store: DawStore;
  handle: PlaybackHandle | null;
  raf: number;
  startTick: number;
  loopLen: number | null;
  bpm: number;
  unsub?: () => void;
  stopped: boolean;
  finishRecording?: () => void;
}

let current: Session | null = null;

export function isPlaying(store: DawStore): boolean {
  return current?.store === store && !current.stopped;
}

/** Snippet of the project from `from` (ticks) to `to`, shifted so `from` = 0. */
export function buildSnippet(p: Project, opts: { from: number; to?: number; master?: number; exclude?: string | null } = { from: 0 }): Snippet {
  const anySolo = p.tracks.some((t) => t.solo);
  const master = opts.master ?? 1;
  const to = opts.to ?? Infinity;
  return {
    bpm: p.bpm,
    timeSig: p.timeSig,
    ...(p.key ? { key: p.key } : {}),
    tracks: p.tracks
      .filter((t) => !t.mute && (!anySolo || t.solo) && t.id !== opts.exclude)
      .map((t) => ({
        instrument: t.instrument,
        volume: Math.max(0, Math.min(1, t.volume * master)),
        events: trackNotes(t)
          .filter((n) => n.startTick >= opts.from && n.startTick < to)
          .map((n) => ({ ...n, startTick: n.startTick - opts.from, durationTicks: Math.min(n.durationTicks, to - n.startTick) })),
      })),
  };
}

export function projectEnd(p: Project): number {
  let end = 0;
  for (const t of p.tracks) {
    for (const c of t.clips) end = Math.max(end, c.startTick + c.lengthTicks);
    for (const n of trackNotes(t)) end = Math.max(end, n.startTick + n.durationTicks);
  }
  return end;
}

function tickNow(s: Session): number {
  if (!s.handle) return s.startTick;
  const elapsed = audioNow() - s.handle.startTime;
  let t = (elapsed * s.bpm * PPQ) / 60;
  if (s.loopLen) t = ((t % s.loopLen) + s.loopLen) % s.loopLen;
  return s.startTick + t;
}

function startRaf(s: Session) {
  const step = () => {
    if (s.stopped) return;
    const t = tickNow(s);
    const st = s.store.getState();
    const counting = !!s.handle && audioNow() < s.handle.startTime;
    st.set({ playhead: Math.max(s.startTick, t), ...(st.countingIn !== counting ? { countingIn: counting } : {}) });
    s.raf = requestAnimationFrame(step);
  };
  s.raf = requestAnimationFrame(step);
}

/** Stop playback/recording of whatever is running. Keeps the playhead where it stopped. */
export function stop(): void {
  const s = current;
  if (!s) return;
  s.stopped = true;
  cancelAnimationFrame(s.raf);
  s.finishRecording?.();
  s.unsub?.();
  s.handle?.stop();
  stopPlayback();
  s.store.getState().set({ playing: false, recording: false, countingIn: false });
  current = null;
}

function range(store: DawStore): { from: number; to: number | undefined; loopLen: number | null } {
  const st = store.getState();
  const p = st.project;
  if (st.loopOn && p.loop && p.loop.endTick > p.loop.startTick) {
    return { from: p.loop.startTick, to: p.loop.endTick, loopLen: p.loop.endTick - p.loop.startTick };
  }
  const end = projectEnd(p);
  const from = st.playhead >= end ? 0 : st.playhead;
  return { from, to: undefined, loopLen: null };
}

export async function play(store: DawStore): Promise<void> {
  stop();
  const st = store.getState();
  const p = st.project;
  const r = range(store);
  const end = Math.max(projectEnd(p), r.from + PPQ);
  const snippet = buildSnippet(p, { from: r.from, ...(r.to !== undefined ? { to: r.to } : {}), master: st.masterVolume });
  const s: Session = { store, handle: null, raf: 0, startTick: r.from, loopLen: r.loopLen, bpm: p.bpm, stopped: false };
  current = s;
  st.set({ playing: true, playhead: r.from });
  const handle = await enginePlay(snippet, {
    loop: !!r.loopLen,
    lengthTicks: r.loopLen ?? end - r.from,
    metronome: st.metronome,
    onEnd: () => {
      if (current === s && !s.stopped) {
        s.stopped = true;
        cancelAnimationFrame(s.raf);
        store.getState().set({ playing: false, playhead: 0 });
        current = null;
      }
    },
  });
  if (s.stopped) {
    handle.stop();
    return;
  }
  s.handle = handle;
  exposeClock(s, false);
  startRaf(s);
}

function exposeClock(s: Session, recording: boolean) {
  const h = e2eHook();
  if (h && s.handle) h.transport = { startPerf: audioTimeToPerf(s.handle.startTime), bpm: s.bpm, fromTick: s.startTick, recording };
}

export function togglePlay(store: DawStore): void {
  if (isPlaying(store)) stop();
  else void play(store);
}

/** Start recording on the armed (or selected) track. */
export async function record(store: DawStore): Promise<void> {
  stop();
  const st = store.getState();
  const p = st.project;
  const trackId = st.armedTrackId ?? st.selectedTrackId ?? p.tracks[0]?.id ?? null;
  const track = findTrack(p, trackId);
  if (!track || !trackId) return;
  if (!st.armedTrackId) st.set({ armedTrackId: trackId });
  const bar = ticksPerBar(p.timeSig);
  const r = range(store);
  const from = r.loopLen ? r.from : Math.floor(r.from / bar) * bar;
  const RECORD_BARS = 256;
  const snippet = buildSnippet(p, { from, ...(r.to !== undefined ? { to: r.to } : {}), master: st.masterVolume });

  // target clip: the armed track's clip under the start position (overdub), else a new one
  st.beginGesture();
  let clipId = track.clips.find((c) => c.startTick <= from && from < c.startTick + c.lengthTicks)?.id ?? null;
  if (!clipId) {
    st.mutate((d) => {
      const t = findTrack(d, trackId)!;
      const id = `c${Date.now().toString(36)}`;
      t.clips.push({ id, name: `Take`, startTick: from, lengthTicks: r.loopLen ?? bar, notes: [] });
      t.clips.sort((a, b) => a.startTick - b.startTick);
      clipId = id;
    }, { history: false });
  }

  const s: Session = { store, handle: null, raf: 0, startTick: from, loopLen: r.loopLen, bpm: p.bpm, stopped: false };
  current = s;
  st.set({ playing: true, recording: true, playhead: from, openClipId: st.openClipId ?? clipId, selectedTrackId: trackId });

  const pending = new Map<number, { tick: number; velocity: number }>();
  const commit = (midi: number, start: number, end: number, velocity: number) => {
    const q = store.getState().inputQuantize;
    const strength = store.getState().quantizeStrength;
    let startT = q > 0 ? quantizeTick(start, q, strength) : Math.round(start);
    let dur = end - start;
    if (r.loopLen && dur < 0) dur += r.loopLen;
    dur = Math.max(PPQ / 16, Math.round(dur));
    if (startT < from) startT = from;
    store.getState().mutate((d) => {
      const t = findTrack(d, trackId);
      const c = t?.clips.find((x) => x.id === clipId);
      if (!t || !c) return;
      const rel = startT - c.startTick;
      if (rel < 0) return;
      const note: NoteEvent = { midi, startTick: rel, durationTicks: dur, velocity };
      c.notes.push(note);
      const needed = Math.ceil((rel + dur) / bar) * bar;
      if (needed > c.lengthTicks) c.lengthTicks = needed;
    }, { history: false });
  };
  const onInput = (e: NoteInputEvent) => {
    if (s.stopped || !s.handle) return;
    const early = s.handle.startTime - audioNow();
    if (early > (60 / s.bpm) / 4) return; // during count-in (more than a 16th early): ignore
    const t = Math.max(from, tickNow(s));
    if (e.type === 'on') pending.set(e.midi, { tick: t, velocity: e.velocity });
    else {
      const o = pending.get(e.midi);
      if (!o) return;
      pending.delete(e.midi);
      commit(e.midi, o.tick, t, o.velocity);
    }
  };
  s.unsub = noteInputBus.subscribe(onInput);
  s.finishRecording = () => {
    const t = tickNow(s);
    for (const [midi, o] of pending) commit(midi, o.tick, t, o.velocity);
    pending.clear();
  };
  const handle = await enginePlay(snippet, {
    loop: !!r.loopLen,
    lengthTicks: r.loopLen ?? RECORD_BARS * bar,
    countIn: st.countIn,
    metronome: st.metronome,
    onEnd: () => {
      if (current === s && !s.stopped) stop();
    },
  });
  if (s.stopped) {
    handle.stop();
    return;
  }
  s.handle = handle;
  exposeClock(s, true);
  startRaf(s);
}

export function toggleRecord(store: DawStore): void {
  if (current?.store === store && current.finishRecording) stop();
  else void record(store);
}
