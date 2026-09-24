import { useEffect, useRef, useState } from 'react';
import { midiToNote } from '@music/core';
import { useNoteInput } from '../input/useNoteInput';
import type { ExerciseComponentProps } from './types';

export function QuizInput({ item, onAnswer, disabled }: ExerciseComponentProps<'quiz-input'>) {
  const [value, setValue] = useState('');
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setValue('');
    ref.current?.focus({ preventScroll: true });
  }, [item]);
  // For note answers, playing a key fills in its name
  useNoteInput((e) => {
    if (e.type === 'on') setValue(midiToNote(e.midi).replace(/-?\d+$/, ''));
  }, item.kind === 'note' && !disabled);
  return (
    <form
      className="quiz-input"
      onSubmit={(e) => {
        e.preventDefault();
        if (value.trim()) onAnswer(value);
      }}
    >
      <p className="question">{item.question}</p>
      <div className="row">
        <input
          ref={ref}
          className="text-input"
          value={value}
          disabled={disabled}
          inputMode={item.kind === 'number' ? 'decimal' : 'text'}
          placeholder={item.kind === 'note' ? 'e.g. F# (or play it)' : item.kind === 'number' ? 'number' : 'your answer'}
          aria-label="Answer"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="btn primary" disabled={disabled || !value.trim()}>
          Check
        </button>
      </div>
    </form>
  );
}

export default QuizInput;
