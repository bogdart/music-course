import { useEffect, useState } from 'react';
import { wordCount } from '@music/core';
import { api } from '../api/client';
import { useLesson } from '../lesson/LessonContext';
import type { ExerciseComponentProps } from './types';

/** reflect: free text saved to the journal (the attempt answer); passes at `minWords`. Shows the last entry. */
export function Reflect({ item, block, onAnswer, disabled }: ExerciseComponentProps<'reflect'>) {
  const { lessonId, record } = useLesson();
  const [text, setText] = useState('');
  const [previous, setPrevious] = useState<{ text: string; at: string } | null>(null);
  useEffect(() => {
    if (!record) return;
    let cancel = false;
    api
      .journal(lessonId, block.id)
      .then((entries) => {
        const e = entries.find((x) => typeof x.answer === 'string' && x.answer.trim());
        if (!cancel && e) setPrevious({ text: e.answer as string, at: e.createdAt });
      })
      .catch(() => {});
    return () => {
      cancel = true;
    };
  }, [lessonId, block.id, record]);
  const words = wordCount(text);
  const enough = words >= Math.max(1, item.minWords);
  return (
    <div className="reflect">
      {previous && (
        <details className="previous">
          <summary className="muted small">Your last entry ({new Date(previous.at).toLocaleDateString()})</summary>
          <p className="journal-text">{previous.text}</p>
          {!text && !disabled && (
            <button type="button" className="btn link" onClick={() => setText(previous.text)}>
              start from it
            </button>
          )}
        </details>
      )}
      <textarea
        className="text-input journal"
        rows={6}
        value={text}
        disabled={disabled}
        aria-label="Your reflection"
        placeholder="Write in your own words…"
        onChange={(e) => setText(e.target.value)}
      />
      <div className="row wrap">
        <span className={`small ${enough ? 'ok-text' : 'muted'}`}>
          {words}{item.minWords ? ` / ${item.minWords}` : ''} words
        </span>
        {!disabled && (
          <button type="button" className="btn primary" disabled={!enough} onClick={() => onAnswer(text.trim())}>
            Save to journal
          </button>
        )}
      </div>
    </div>
  );
}

export default Reflect;
