import { useEffect, useMemo, useRef, useState } from 'react';
import { pitchClass } from '@music/core';
import { Keyboard, type KeyMark } from '../components/Keyboard/Keyboard';
import { Staff } from '../components/Staff/Staff';
import { useNoteInput } from '../input/useNoteInput';
import type { ExerciseComponentProps } from './types';

/** Play the listed notes (names / staff / degrees). Collects note-ons until as many notes as targets are played. */
export function PlayNotes({ item, onAnswer, result, disabled, revealed }: ExerciseComponentProps<'play-notes'>) {
  const [played, setPlayedState] = useState<number[]>([]);
  // ref mirror: several note-ons can arrive before React re-renders (chords, fast MIDI)
  const playedRef = useRef<number[]>([]);
  const awaitingRetry = useRef(false);
  const setPlayed = (v: number[]) => {
    playedRef.current = v;
    setPlayedState(v);
  };
  useEffect(() => {
    setPlayed([]);
    awaitingRetry.current = false;
  }, [item]);
  // after a wrong answer, the next note starts a fresh try
  useEffect(() => {
    if (result && !result.correct) awaitingRetry.current = true;
  }, [result]);

  const matches = (m: number, t: number) => (item.octave === 'any' ? pitchClass(m) === pitchClass(t) : m === t);

  useNoteInput((e) => {
    if (e.type !== 'on' || disabled) return;
    const base = awaitingRetry.current ? [] : playedRef.current;
    awaitingRetry.current = false;
    const next = [...base, e.midi];
    setPlayed(next);
    const done = item.ordered
      ? next.length >= item.midis.length
      : new Set(next.map((m) => (item.octave === 'any' ? pitchClass(m) : m))).size >= new Set(item.octave === 'any' ? item.pitchClasses : item.midis).size;
    if (done) onAnswer(next);
  }, !disabled);

  const marks = useMemo(() => {
    const m: Record<number, KeyMark> = {};
    if (revealed || item.display === 'names' || item.display === 'degrees') {
      if (revealed) item.midis.forEach((t) => (m[t] = 'target'));
    }
    played.forEach((p, i) => {
      const ok = item.ordered ? item.midis[i] !== undefined && matches(p, item.midis[i]!) : item.midis.some((t) => matches(p, t));
      m[p] = ok ? 'correct' : 'wrong';
    });
    return m;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [played, item, revealed]);

  const lo = Math.min(...item.midis);
  const hi = Math.max(...item.midis);
  const range: [number, number] = item.octave === 'any' ? [48, 84] : [Math.min(lo - (lo % 12), 60), Math.max(hi + (11 - (hi % 12)), 71)];

  return (
    <div className="play-notes">
      {item.display === 'staff' ? (
        <Staff seq={item.seq} clef={item.clef} {...(item.key ? { keySig: item.key } : {})} />
      ) : (
        <div className="target-notes" aria-label="Notes to play">
          {item.labels.map((l, i) => {
            const p = played[i];
            const state = p === undefined || !item.ordered ? '' : matches(p, item.midis[i]!) ? 'ok' : 'bad';
            return (
              <span key={i} className={`target-note ${state}`}>
                {l}
              </span>
            );
          })}
        </div>
      )}
      <p className="muted small">
        Played: {played.length}/{item.midis.length}
        {played.length > 0 && !disabled && (
          <button type="button" className="btn link" onClick={() => setPlayed([])}>
            reset
          </button>
        )}
      </p>
      <Keyboard range={range} marks={marks} {...(item.key ? { keyName: item.key } : {})} showQwerty />
    </div>
  );
}

export default PlayNotes;
