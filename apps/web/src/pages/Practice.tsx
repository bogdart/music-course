import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { SetSummary, SrsCardDTO, SrsDueDTO } from '@music/core';
import { api } from '../api/client';
import { ExerciseShell } from '../exercises/ExerciseShell';
import { adaptedBlock, levelLabel, recordScores, reviewCard } from '../practice/srsSession';
import { useProgressStore } from '../stores/progress';

const ITEMS_PER_CARD = 5;
const SESSION_LIMIT = 20;
const NEW_PER_SESSION = 5;

interface Reviewed {
  card: SrsCardDTO;
  score: number;
  grade: number;
  from: number;
  to: number;
}

/**
 * SRS practice session: due review cards interleaved with a few new cards (`/api/srs/due?newLimit=`), each card
 * regenerated fresh at its adaptive difficulty level, then a session summary.
 */
export function Practice() {
  const [due, setDue] = useState<SrsDueDTO | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pos, setPos] = useState(0);
  const [done, setDone] = useState<Reviewed[]>([]);
  const [startedAt, setStartedAt] = useState(Date.now());
  const scores = useRef<number[]>([]);
  const refresh = useProgressStore((s) => s.refresh);
  const curriculum = useProgressStore((s) => s.curriculum);
  const titleOf = (id: string) => curriculum?.weeks?.flatMap((w) => w.lessons).find((l) => l.id === id)?.title ?? id;

  const load = () => {
    setError(null);
    setDue(null);
    api
      .srsDue(SESSION_LIMIT, NEW_PER_SESSION)
      .then((d) => {
        setDue(d);
        setPos(0);
        setDone([]);
        setStartedAt(Date.now());
      })
      .catch((e: Error) => setError(e.message));
  };
  useEffect(load, []);

  const card = due?.cards[pos];
  const adapted = useMemo(() => (card ? adaptedBlock(card) : null), [card]);

  if (error) return <div className="page"><h1>Practice</h1><p className="muted">Could not load review cards: {error}</p></div>;
  if (!due) return <div className="page">Loading…</div>;

  if (!card || !adapted) {
    return (
      <div className="page practice">
        <h1>Practice</h1>
        {due.cards.length === 0 ? (
          <p>Nothing due right now. Ear-training exercises from your lessons join the deck automatically. 🎧</p>
        ) : (
          <SessionSummary reviewed={done} minutes={(Date.now() - startedAt) / 60000} />
        )}
        <div className="row">
          <button type="button" className="btn" onClick={load}>
            {due.cards.length ? 'Practice more' : 'Check again'}
          </button>
          <Link to="/" className="btn ghost">
            Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const onComplete = async (s: SetSummary) => {
    const lv = recordScores(card, scores.current);
    scores.current = [];
    const grade = await reviewCard(card, s);
    setDone((d) => [...d, { card, score: s.score, grade, from: lv.from, to: lv.to }]);
    setTimeout(() => {
      setPos((p) => p + 1);
      if (pos + 1 >= due.cards.length) void refresh();
    }, 1200);
  };
  const isNew = card.reps === 0 && card.lapses === 0;

  return (
    <div className="page practice">
      <h1>Practice</h1>
      <div className="bar" aria-hidden>
        <span style={{ width: `${(pos / due.cards.length) * 100}%` }} />
      </div>
      <p className="muted small">
        Card {pos + 1} of {due.cards.length} · session {due.session} · from <Link to={`/lesson/${card.lessonId}`}>{titleOf(card.lessonId)}</Link>
        {isNew && <span className="tag new">new</span>}
        <span className={`tag level ${adapted.level > 0 ? 'up' : adapted.level < 0 ? 'down' : ''}`} title={adapted.changes.join('\n')}>
          {levelLabel(adapted.level)}
        </span>
      </p>
      <ExerciseShell
        key={card.id}
        block={adapted.block}
        lessonId={card.lessonId}
        mode="practice"
        count={Math.min(ITEMS_PER_CARD, card.block.count ?? ITEMS_PER_CARD)}
        onItemResult={(r) => scores.current.push(r.score)}
        onComplete={(s) => void onComplete(s)}
      />
    </div>
  );
}

export function SessionSummary({ reviewed, minutes }: { reviewed: Reviewed[]; minutes: number }) {
  if (!reviewed.length) return <p>Session ended.</p>;
  const avg = reviewed.reduce((a, r) => a + r.score, 0) / reviewed.length;
  const byType = new Map<string, number[]>();
  for (const r of reviewed) byType.set(r.card.type, [...(byType.get(r.card.type) ?? []), r.score]);
  const ups = reviewed.filter((r) => r.to > r.from).length;
  const downs = reviewed.filter((r) => r.to < r.from).length;
  const lapses = reviewed.filter((r) => r.grade < 3).length;
  return (
    <div className="card session-summary" data-testid="session-summary">
      <div className="summary-score">{Math.round(avg * 100)}%</div>
      <p>
        Session done — {reviewed.length} card(s) reviewed in {Math.max(1, Math.round(minutes))} min
        {lapses ? ` · ${lapses} to repeat next session` : ' · all remembered'}
        {ups ? ` · ${ups} got harder ↑` : ''}
        {downs ? ` · ${downs} made easier ↓` : ''}
      </p>
      <table className="summary-table">
        <thead>
          <tr><th>Type</th><th>Cards</th><th>Accuracy</th></tr>
        </thead>
        <tbody>
          {[...byType.entries()].map(([t, s]) => (
            <tr key={t}>
              <td>{t}</td>
              <td>{s.length}</td>
              <td>{Math.round((s.reduce((a, b) => a + b, 0) / s.length) * 100)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Practice;
