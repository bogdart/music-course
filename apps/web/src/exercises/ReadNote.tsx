import { useEffect, useState } from 'react';
import { Keyboard } from '../components/Keyboard/Keyboard';
import { Staff } from '../components/Staff/Staff';
import { useExerciseNoteInput } from './focus';
import { ChoiceButtons } from './ChoiceButtons';
import type { ExerciseComponentProps } from './types';

export function ReadNote({ item, onAnswer, result, disabled, revealed }: ExerciseComponentProps<'read-note'>) {
  const [wrong, setWrong] = useState<string[]>([]);
  const [last, setLast] = useState<string | null>(null);
  const [left, setLeft] = useState(item.timed);
  useEffect(() => {
    setWrong([]);
    setLast(null);
    setLeft(item.timed);
  }, [item]);
  useEffect(() => {
    if (result && !result.correct && last) setWrong((w) => [...w, last]);
  }, [result, last]);
  useEffect(() => {
    if (!item.timed || disabled) return;
    if (left <= 0) {
      onAnswer(item.answerKind === 'play' ? -1 : '');
      return;
    }
    const t = setTimeout(() => setLeft((l) => l - 1), 1000);
    return () => clearTimeout(t);
  }, [left, item, disabled, onAnswer]);

  useExerciseNoteInput((e) => {
    if (e.type === 'on' && item.answerKind === 'play' && !disabled) onAnswer(e.midi);
  }, item.answerKind === 'play' && !disabled);

  const range: [string, string] = item.clef === 'bass' ? ['C2', 'C5'] : ['C4', 'C6'];
  return (
    <div className="read-note">
      <div className="read-note-staff">
        <Staff seq={item.seq} clef={item.clef} />
      </div>
      {item.timed > 0 && !disabled && <p className="muted small">⏱ {left}s</p>}
      {item.answerKind === 'name' ? (
        <ChoiceButtons
          choices={item.choices ?? []}
          onChoose={(v) => {
            setLast(v);
            onAnswer(v);
          }}
          wrong={wrong}
          correct={disabled && (revealed || result?.correct) ? (item.intervalMode ? item.interval ?? null : item.solution) : null}
          disabled={disabled}
        />
      ) : (
        <Keyboard range={range} {...(revealed ? { marks: { [item.midi]: 'target' as const } } : {})} showQwerty />
      )}
    </div>
  );
}

export default ReadNote;
