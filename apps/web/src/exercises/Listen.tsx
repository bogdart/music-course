import { useEffect, useState } from 'react';
import { ExampleBlock, type ExampleData } from '../lesson/blocks/ExampleBlock';
import { ChoiceButtons } from './ChoiceButtons';
import type { ExerciseComponentProps } from './types';

/** listen: one or more playable examples, then an optional question (one item per question). */
export function Listen({ item, onAnswer, result, disabled, revealed }: ExerciseComponentProps<'listen'>) {
  const [selected, setSelected] = useState<string[]>([]);
  const [wrong, setWrong] = useState<string[]>([]);
  const [last, setLast] = useState<string | null>(null);
  useEffect(() => {
    setSelected([]);
    setWrong([]);
    setLast(null);
  }, [item]);
  useEffect(() => {
    if (result && !result.correct && last && !item.question?.multi) setWrong((w) => [...new Set([...w, last])]);
  }, [result, last, item.question]);
  const q = item.question;
  const correct = q && disabled && (revealed || result?.correct) ? q.correct.map(String) : null;
  return (
    <div className="listen">
      {item.examples.map((ex, i) => (
        <ExampleBlock key={i} data={{ ...(ex as ExampleData), title: ex.title ?? (item.examples.length > 1 ? `Example ${i + 1}` : 'Listen') }} />
      ))}
      {q ? (
        <>
          {q.multi && <p className="muted small">Select all that apply.</p>}
          <ChoiceButtons
            choices={item.choices ?? []}
            onChoose={(v) => {
              if (q.multi) return setSelected((s) => (s.includes(v) ? s.filter((x) => x !== v) : [...s, v]));
              setLast(v);
              onAnswer(Number(v));
            }}
            wrong={wrong}
            correct={correct}
            disabled={disabled}
            {...(q.multi ? { selected } : {})}
          />
          {q.multi && !disabled && (
            <button type="button" className="btn primary" disabled={!selected.length} onClick={() => onAnswer(selected.map(Number))}>
              Check
            </button>
          )}
        </>
      ) : (
        !disabled && (
          <button type="button" className="btn primary" onClick={() => onAnswer('done')}>
            ✓ I've listened
          </button>
        )
      )}
    </div>
  );
}

export default Listen;
