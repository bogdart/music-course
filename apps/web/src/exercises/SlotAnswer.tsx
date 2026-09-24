import { useEffect, useState } from 'react';
import type { Choice } from '@music/core';
import { useExerciseNoteInput } from './focus';

export interface SlotAnswerProps {
  count: number;
  palette: Choice[];
  onSubmit(values: string[]): void;
  /** Per-slot correctness from the last evaluation */
  resultSlots?: boolean[] | undefined;
  disabled: boolean;
  /** Text shown above each slot (e.g. chord symbols) */
  captions?: string[] | undefined;
  /** Correct values, shown under the slots when `showSolution` */
  solution?: string[] | undefined;
  showSolution?: boolean;
  /** Map a played note to a palette value (answer by playing) */
  fromMidi?: ((midi: number) => string | null) | undefined;
  /** Item identity: resets the slots when it changes */
  resetKey?: unknown;
}

/** Fill N answer slots from a palette (roman numerals, degrees…). Wrong slots stay editable after "Check". */
export function SlotAnswer({ count, palette, onSubmit, resultSlots, disabled, captions, solution, showSolution, fromMidi, resetKey }: SlotAnswerProps) {
  const [values, setValues] = useState<(string | null)[]>(() => new Array<string | null>(count).fill(null));
  const [cursor, setCursor] = useState(0);
  useEffect(() => {
    setValues(new Array<string | null>(count).fill(null));
    setCursor(0);
  }, [resetKey, count]);
  // after a check, jump to the first wrong slot
  useEffect(() => {
    if (!resultSlots) return;
    const i = resultSlots.findIndex((ok) => !ok);
    if (i >= 0) setCursor(i);
  }, [resultSlots]);

  const put = (v: string) => {
    if (disabled) return;
    setValues((vals) => {
      const n = [...vals];
      n[cursor] = v;
      // next empty (or next wrong) slot
      let next = cursor;
      for (let k = 1; k <= count; k++) {
        const j = (cursor + k) % count;
        if (n[j] === null || (resultSlots && resultSlots[j] === false && j !== cursor)) {
          next = j;
          break;
        }
      }
      setCursor(next);
      return n;
    });
  };
  useExerciseNoteInput((e) => {
    if (e.type !== 'on' || !fromMidi) return;
    const v = fromMidi(e.midi);
    if (v && palette.some((p) => p.value === v)) put(v);
  }, !!fromMidi && !disabled);

  const label = (v: string | null) => (v === null ? '?' : palette.find((p) => p.value === v)?.label ?? v);
  const complete = values.every((v) => v !== null);
  return (
    <div className="slot-answer">
      <div className="slots" role="list">
        {values.map((v, i) => {
          const st = resultSlots?.[i] === undefined ? '' : resultSlots[i] ? 'ok' : 'bad';
          return (
            <button
              key={i}
              type="button"
              role="listitem"
              className={`slot ${i === cursor && !disabled ? 'current' : ''} ${st}`}
              onClick={() => setCursor(i)}
              disabled={disabled}
              aria-label={`Slot ${i + 1}: ${v ?? 'empty'}`}
            >
              {captions?.[i] && <span className="slot-caption">{captions[i]}</span>}
              <span className="slot-value">{label(v)}</span>
              {showSolution && solution?.[i] !== undefined && <span className="slot-solution">{label(solution[i]!)}</span>}
            </button>
          );
        })}
      </div>
      {!disabled && (
        <>
          <div className="palette" role="group" aria-label="Choices">
            {palette.map((p) => (
              <button key={p.value} type="button" className="choice small-choice" onClick={() => put(p.value)}>
                {p.label}
              </button>
            ))}
          </div>
          <div className="row">
            <button type="button" className="btn ghost" onClick={() => { setValues(new Array<string | null>(count).fill(null)); setCursor(0); }}>
              Clear
            </button>
            <button type="button" className="btn primary" disabled={!complete} onClick={() => onSubmit(values as string[])}>
              Check
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default SlotAnswer;
