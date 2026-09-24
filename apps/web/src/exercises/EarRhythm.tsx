import { useEffect, useState } from 'react';
import { Staff } from '../components/Staff/Staff';
import { Perform } from './perf/Perform';
import type { ExerciseComponentProps } from './types';

const VOICE_LABEL: Record<string, string> = { kick: 'Kick', snare: 'Snare', clap: 'Clap', hh: 'Hi-hat', hihat: 'Hi-hat', ohat: 'Open hat', tom: 'Tom', ride: 'Ride', crash: 'Crash' };

/** ear-rhythm: choose the notation, tap it back, or fill a drum grid (multi-voice). */
export function EarRhythm(props: ExerciseComponentProps<'ear-rhythm'>) {
  const { item } = props;
  if (item.mode === 'tap' && item.performance) {
    return (
      <Perform spec={item.performance} onAnswer={props.onAnswer} result={props.result} disabled={props.disabled} revealed={props.revealed}
        {...(props.revealed || props.result ? { seq: item.seq } : {})} clef="percussion" timeSigStr={item.timeSig} showKeyboard={false} startLabel="Tap it back" />
    );
  }
  if (item.mode === 'grid') return <DrumGrid {...props} />;
  return <RhythmChoices {...props} />;
}

function RhythmChoices({ item, onAnswer, result, disabled, revealed }: ExerciseComponentProps<'ear-rhythm'>) {
  const [wrong, setWrong] = useState<string[]>([]);
  const [last, setLast] = useState<string | null>(null);
  useEffect(() => {
    setWrong([]);
    setLast(null);
  }, [item]);
  useEffect(() => {
    if (result && !result.correct && last) setWrong((w) => (w.includes(last) ? w : [...w, last]));
  }, [result, last]);
  const showAnswer = disabled && (revealed || result?.correct);
  return (
    <div className="rhythm-choices">
      {(item.choices ?? []).map((c) => {
        const cls = ['rhythm-choice', showAnswer && c.value === item.answer ? 'choice-correct' : '', wrong.includes(c.value) ? 'choice-wrong' : ''].join(' ');
        return (
          <button key={c.value} type="button" className={cls} disabled={disabled || wrong.includes(c.value)} onClick={() => { setLast(c.value); onAnswer(c.value); }} aria-label={`Rhythm ${c.label}`}>
            <span className="rhythm-letter">{c.label}</span>
            <Staff seq={c.value} clef="percussion" timeSig={item.timeSig} />
          </button>
        );
      })}
    </div>
  );
}

function DrumGrid({ item, onAnswer, result, disabled, revealed }: ExerciseComponentProps<'ear-rhythm'>) {
  const voices = item.voices ?? [];
  const steps = item.steps ?? 8;
  const [grid, setGrid] = useState<Record<string, boolean[]>>({});
  useEffect(() => {
    setGrid(Object.fromEntries(voices.map((v) => [v, new Array<boolean>(steps).fill(false)])));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);
  const cells = result?.details?.cells as Record<string, boolean[]> | undefined;
  const beatEvery = (() => {
    const ts = item.timeSig.split('/').map(Number);
    const beatTicks = (480 * 4) / (ts[1] || 4);
    return Math.max(1, Math.round(beatTicks / (item.stepTicks ?? 240)));
  })();
  const show = revealed || !!result?.correct;
  const toggle = (v: string, i: number) => {
    if (disabled) return;
    setGrid((g) => ({ ...g, [v]: g[v]!.map((b, k) => (k === i ? !b : b)) }));
  };
  return (
    <div className="drum-grid-wrap">
      <table className="drum-grid">
        <tbody>
          {voices.map((v) => (
            <tr key={v}>
              <th scope="row">{VOICE_LABEL[v] ?? v}</th>
              {Array.from({ length: steps }, (_, i) => {
                const on = show ? !!item.grid?.[v]?.[i] : !!grid[v]?.[i];
                const st = cells && !show ? (cells[v]?.[i] ? '' : 'bad') : '';
                return (
                  <td key={i} className={i % beatEvery === 0 ? 'beat' : ''}>
                    <button type="button" className={`cell ${on ? 'on' : ''} ${st}`} aria-pressed={on} aria-label={`${v} step ${i + 1}`} disabled={disabled} onClick={() => toggle(v, i)} />
                  </td>
                );
              })}
            </tr>
          ))}
          <tr className="counts">
            <th />
            {Array.from({ length: steps }, (_, i) => (
              <td key={i} className="muted small">{i % beatEvery === 0 ? i / beatEvery + 1 : beatEvery === 2 ? '&' : beatEvery === 3 ? (i % 3 === 1 ? 'la' : 'li') : ['', 'e', '&', 'a'][i % beatEvery]}</td>
            ))}
          </tr>
        </tbody>
      </table>
      {!disabled && (
        <button type="button" className="btn primary" onClick={() => onAnswer({ grid })}>
          Check
        </button>
      )}
    </div>
  );
}

export default EarRhythm;
