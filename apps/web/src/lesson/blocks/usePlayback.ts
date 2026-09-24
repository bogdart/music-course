import { useCallback, useEffect, useRef, useState } from 'react';
import { ticksToSeconds, type NoteEvent, type Snippet } from '@music/core';
import { play } from '../../audio/engine';
import type { PlaybackHandle, ScheduleOptions } from '../../audio/types';

/** Play/stop a snippet, tracking the currently sounding notes and the latest note per track. */
export function usePlayback() {
  const [playing, setPlaying] = useState(false);
  const [sounding, setSounding] = useState<number[]>([]);
  const [current, setCurrent] = useState<{ track: number; ev: NoteEvent } | null>(null);
  const handle = useRef<PlaybackHandle | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clear = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setSounding([]);
    setCurrent(null);
  };

  const stop = useCallback(() => {
    handle.current?.stop();
    handle.current = null;
    setPlaying(false);
    clear();
  }, []);

  const start = useCallback(async (snippet: Snippet, opts: ScheduleOptions = {}) => {
    handle.current?.stop();
    clear();
    setPlaying(true);
    handle.current = await play(snippet, {
      ...opts,
      onNote: (ev, ti, idx) => {
        setCurrent({ track: ti, ev });
        setSounding((s) => [...s, ev.midi]);
        timers.current.push(
          setTimeout(() => setSounding((s) => {
            const i = s.indexOf(ev.midi);
            return i < 0 ? s : [...s.slice(0, i), ...s.slice(i + 1)];
          }), ticksToSeconds(ev.durationTicks, opts.bpm ?? snippet.bpm) * 1000),
        );
        opts.onNote?.(ev, ti, idx);
      },
      onEnd: () => {
        setPlaying(false);
        clear();
        opts.onEnd?.();
      },
    });
  }, []);

  useEffect(() => () => handle.current?.stop(), []);
  return { playing, sounding, current, start, stop };
}
