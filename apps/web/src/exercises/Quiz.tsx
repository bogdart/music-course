import { useEffect, useState } from 'react';
import { ChoiceButtons } from './ChoiceButtons';
import type { ExerciseComponentProps } from './types';

export function Quiz({ item, onAnswer, result, disabled, revealed }: ExerciseComponentProps<'quiz'>) {
  const [selected, setSelected] = useState<string[]>([]);
  const [wrong, setWrong] = useState<string[]>([]);
  const [last, setLast] = useState<string[]>([]);
  useEffect(() => {
    setSelected([]);
    setWrong([]);
    setLast([]);
  }, [item]);
  useEffect(() => {
    if (result && !result.correct && !item.multi) setWrong((w) => [...new Set([...w, ...last])]);
  }, [result, last, item.multi]);

  const correct = disabled && (revealed || result?.correct) ? item.correct.map(String) : null;
  const choose = (v: string) => {
    if (item.multi) {
      setSelected((s) => (s.includes(v) ? s.filter((x) => x !== v) : [...s, v]));
      return;
    }
    setLast([v]);
    onAnswer(Number(v));
  };
  return (
    <div className="quiz">
      <p className="question">{item.question}</p>
      {item.multi && <p className="muted small">Select all that apply.</p>}
      <ChoiceButtons
        choices={item.choices ?? []}
        onChoose={choose}
        wrong={wrong}
        correct={correct}
        disabled={disabled}
        {...(item.multi ? { selected } : {})}
      />
      {item.multi && !disabled && (
        <button type="button" className="btn primary" disabled={selected.length === 0} onClick={() => onAnswer(selected.map(Number))}>
          Check
        </button>
      )}
    </div>
  );
}

export default Quiz;
