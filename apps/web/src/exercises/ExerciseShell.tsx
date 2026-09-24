import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  evaluate, generateSet, isExerciseType, passScoreOf, summarise,
  type Answer, type EvalResult, type ExerciseBlock, type ExerciseType, type Item, type SetSummary, type Snippet,
} from '@music/core';
import { api } from '../api/client';
import { playSequence, stopPlayback } from '../audio/engine';
import type { PlaybackHandle } from '../audio/types';
import { useAudioStore } from '../stores/audio';
import { ComingSoon } from './ComingSoon';
import { getExerciseComponent } from './registry';

export interface ExerciseShellProps {
  block: ExerciseBlock;
  lessonId: string;
  /** "practice" = SRS session */
  mode?: 'lesson' | 'practice';
  /** POST attempts/completion to the server (default true) */
  record?: boolean;
  /** Override number of items */
  count?: number;
  seed?: number;
  /** Autoplay item audio when a new item appears (default true, requires unlocked audio) */
  autoplay?: boolean;
  onComplete?: (summary: SetSummary) => void;
}

interface ItemState {
  result: EvalResult | null;
  attempts: number;
  revealed: boolean;
  firstResult: EvalResult | null;
  startedAt: number;
}

const freshItemState = (): ItemState => ({ result: null, attempts: 0, revealed: false, firstResult: null, startedAt: Date.now() });

export function ExerciseShell(props: ExerciseShellProps) {
  const { block, lessonId, mode = 'lesson', record = true, autoplay = true } = props;
  const [run, setRun] = useState(0);
  const Component = isExerciseType(block.type) ? getExerciseComponent(block.type) : null;

  const set = useMemo(() => {
    if (!Component) return null;
    try {
      const b = props.count ? { ...block, count: props.count } : block;
      return { ...generateSet(b as ExerciseBlock, props.seed !== undefined ? props.seed + run : undefined), error: null as string | null };
    } catch (e) {
      return { seed: 0, items: [] as Item[], error: (e as Error).message };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [block, run, props.count, props.seed, Component]);

  const [index, setIndex] = useState(0);
  const [st, setSt] = useState<ItemState>(freshItemState);
  const [firsts, setFirsts] = useState<(EvalResult | null)[]>([]);
  const [hints, setHints] = useState(0);
  const [summary, setSummary] = useState<SetSummary | null>(null);
  const audioStarted = useAudioStore((s) => s.started);
  const playing = useRef<PlaybackHandle | null>(null);

  useEffect(() => {
    setIndex(0);
    setSt(freshItemState());
    setFirsts([]);
    setHints(0);
    setSummary(null);
  }, [set]);

  const item = set?.items[index] as Item | undefined;

  const playParts = useCallback(async (parts: (Snippet | undefined)[]) => {
    const list = parts.filter((p): p is Snippet => !!p);
    if (!list.length) return;
    playing.current?.stop();
    playing.current = await playSequence(list, { gapSec: 0.4 });
  }, []);

  const replay = useCallback(() => {
    if (item) void playParts([item.reference, item.audio]);
  }, [item, playParts]);

  // autoplay each new item
  useEffect(() => {
    if (!item || !autoplay || !audioStarted || summary) return;
    if (!item.audio && !item.reference) return;
    const t = setTimeout(replay, 250);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, audioStarted]);

  useEffect(() => () => playing.current?.stop(), []);

  const post = (fn: () => Promise<unknown>) => {
    if (record) fn().catch(() => {});
  };

  const onAnswer = useCallback(
    (answer: Answer<ExerciseType>) => {
      if (!item || st.revealed || st.result?.correct) return;
      let result: EvalResult;
      try {
        result = evaluate(item, answer as never);
      } catch (e) {
        result = { correct: false, score: 0, feedback: `Could not check answer: ${(e as Error).message}` };
      }
      const first = st.attempts === 0;
      setSt((s) => ({ ...s, result, attempts: s.attempts + 1, firstResult: s.firstResult ?? result }));
      if (first) {
        setFirsts((f) => {
          const n = [...f];
          n[index] = result;
          return n;
        });
        post(() =>
          api.attempt({
            lessonId, exerciseId: block.id, type: block.type, correct: result.correct, score: result.score,
            answer, durationMs: Date.now() - st.startedAt, itemIndex: index, source: mode,
          }),
        );
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [item, st, index, block, lessonId, mode],
  );

  const reveal = () => {
    if (!item) return;
    const r: EvalResult = { correct: false, score: 0, feedback: `Answer: ${item.solution}`, expected: item.solution };
    if (st.attempts === 0) {
      setFirsts((f) => {
        const n = [...f];
        n[index] = r;
        return n;
      });
      post(() => api.attempt({ lessonId, exerciseId: block.id, type: block.type, correct: false, score: 0, answer: '(revealed)', durationMs: Date.now() - st.startedAt, itemIndex: index, source: mode }));
    }
    setSt((s) => ({ ...s, revealed: true, result: s.result?.correct ? s.result : r }));
    if (item.solutionAudio) void playParts([item.solutionAudio]);
  };

  const next = () => {
    if (!set) return;
    stopPlayback();
    if (index + 1 < set.items.length) {
      setIndex(index + 1);
      setSt(freshItemState());
      return;
    }
    const results = set.items.map((_, i) => firsts[i] ?? { correct: false, score: 0 });
    const sum = summarise(results, passScoreOf(block));
    setSummary(sum);
    post(() => api.exerciseComplete({ lessonId, exerciseId: block.id, type: block.type, score: sum.score, passed: sum.passed, correct: sum.correct, total: sum.total }));
    props.onComplete?.(sum);
  };

  const title = block.title ?? defaultTitle(block.type);

  if (!Component) return <ComingSoon type={block.type} title={title} />;
  if (!set || set.error || !item) {
    return (
      <div className="card error-card">
        <strong>{title}</strong>
        <p>This exercise could not be generated: {set?.error ?? 'no items'}.</p>
      </div>
    );
  }

  const done = st.revealed || !!st.result?.correct;
  const total = set.items.length;
  const hintList = block.hints ?? [];

  if (summary) {
    return (
      <section className="card exercise" data-testid={`exercise-${block.id}`}>
        <header className="exercise-head">
          <h3>{title}</h3>
        </header>
        <div className={`summary ${summary.passed ? 'passed' : 'failed'}`} data-testid="exercise-summary">
          <div className="summary-score">{Math.round(summary.score * 100)}%</div>
          <div>
            {summary.correct}/{summary.total} correct first time · {summary.passed ? 'Passed ✓' : `Need ${Math.round(passScoreOf(block) * 100)}% to pass`}
          </div>
          <button type="button" className="btn" onClick={() => setRun((r) => r + 1)}>
            {summary.passed ? 'Practice again' : 'Try again'}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="card exercise" data-testid={`exercise-${block.id}`} data-type={block.type}>
      <header className="exercise-head">
        <h3>{title}</h3>
        <span className="muted small" aria-label="progress">
          {index + 1} / {total}
        </span>
      </header>
      {block.instructions && <p className="instructions">{block.instructions}</p>}
      <div className="progress-dots" aria-hidden>
        {set.items.map((_, i) => (
          <span key={i} className={`dot ${i === index ? 'current' : ''} ${firsts[i] ? (firsts[i]!.correct ? 'ok' : 'bad') : ''}`} />
        ))}
      </div>
      <p className="prompt">{item.prompt}</p>
      {(item.audio || item.reference) && (
        <div className="row audio-row">
          <button type="button" className="btn" onClick={replay}>
            ▶ {st.attempts === 0 && !audioStarted ? 'Play' : 'Replay'}
          </button>
          {item.reference && (
            <button type="button" className="btn ghost" onClick={() => void playParts([item.reference])}>
              Reference
            </button>
          )}
          {item.audio && item.reference && (
            <button type="button" className="btn ghost" onClick={() => void playParts([item.audio])}>
              Question only
            </button>
          )}
        </div>
      )}
      <Component
        key={`${run}-${index}`}
        item={item as never}
        block={block as never}
        onAnswer={onAnswer as never}
        result={st.result}
        attempts={st.attempts}
        revealed={st.revealed}
        disabled={done}
      />
      {st.result && (
        <div className={`feedback ${st.result.correct ? 'ok' : 'bad'}`} role="status">
          {st.result.feedback}
        </div>
      )}
      {hints > 0 && (
        <ul className="hints">
          {hintList.slice(0, hints).map((h, i) => (
            <li key={i}>💡 {h}</li>
          ))}
        </ul>
      )}
      <footer className="exercise-foot">
        <span className="muted small">Attempts: {st.attempts}</span>
        <div className="row">
          {hints < hintList.length && !done && (
            <button type="button" className="btn ghost" onClick={() => setHints((h) => h + 1)}>
              Hint ({hintList.length - hints})
            </button>
          )}
          {!done && (
            <button type="button" className="btn ghost" onClick={reveal}>
              Reveal
            </button>
          )}
          {item.solutionAudio && done && (
            <button type="button" className="btn ghost" onClick={() => void playParts([item.solutionAudio])}>
              ▶ Solution
            </button>
          )}
          <button type="button" className="btn primary" disabled={!done && st.attempts === 0} onClick={next}>
            {index + 1 < total ? (done ? 'Next →' : 'Skip →') : 'Finish'}
          </button>
        </div>
      </footer>
    </section>
  );
}

function defaultTitle(type: string): string {
  const names: Record<string, string> = {
    'ear-note': 'Hear the scale degree', 'ear-octave': 'Octaves', 'ear-interval': 'Hear the interval',
    'ear-chord': 'Hear the chord', 'play-notes': 'Play the notes', quiz: 'Quiz', 'quiz-input': 'Quick questions',
    'read-note': 'Read the note',
  };
  return names[type] ?? type;
}


export default ExerciseShell;
