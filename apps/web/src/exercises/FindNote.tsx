import { useEffect, useState } from 'react';
import { midiToNote } from '@music/core';
import { Keyboard, type KeyMark } from '../components/Keyboard/Keyboard';
import { useExerciseNoteInput } from './focus';

/**
 * "Find the note" answer: play keys freely (each one sounds, nothing is scored), then press Check to answer with the
 * last key played. Searching by ear for the key that matches is the skill being trained.
 */
export function FindNote({ onAnswer, disabled, range, marks: extra, hint, reset }: {
  onAnswer: (midi: number) => void;
  disabled: boolean;
  range: [number, number];
  marks?: Record<number, KeyMark>;
  hint: string;
  /** changes per item: clears the selection */
  reset: unknown;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const [checked, setChecked] = useState<number | null>(null);
  useEffect(() => {
    setPicked(null);
    setChecked(null);
  }, [reset]);
  useExerciseNoteInput((e) => {
    if (e.type !== 'on' || disabled) return;
    setPicked(e.midi);
  }, !disabled);
  const marks: Record<number, KeyMark> = { ...(extra ?? {}) };
  if (picked !== null && !disabled && marks[picked] === undefined) marks[picked] = 'target';
  return (
    <div className="find-note">
      <p className="muted small">{hint}</p>
      <Keyboard range={range} marks={marks} showQwerty height={150} />
      <div className="row">
        <button
          type="button"
          className="btn primary"
          disabled={disabled || picked === null || picked === checked}
          onClick={() => {
            if (picked === null) return;
            setChecked(picked);
            onAnswer(picked);
          }}
        >
          {picked === null ? 'Play a key, then Check' : `Check ${midiToNote(picked)}`}
        </button>
      </div>
    </div>
  );
}
