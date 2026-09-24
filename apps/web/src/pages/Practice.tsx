import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { gradeFromScore, type SetSummary, type SrsDueDTO } from '@music/core';
import { api } from '../api/client';
import { ExerciseShell } from '../exercises/ExerciseShell';
import { useProgressStore } from '../stores/progress';

const ITEMS_PER_CARD = 5;

export function Practice() {
  const [due, setDue] = useState<SrsDueDTO | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pos, setPos] = useState(0);
  const [grades, setGrades] = useState<number[]>([]);
  const refresh = useProgressStore((s) => s.refresh);

  const load = () => {
    setError(null);
    api
      .srsDue(20)
      .then((d) => {
        setDue(d);
        setPos(0);
        setGrades([]);
      })
      .catch((e: Error) => setError(e.message));
  };
  useEffect(load, []);

  if (error) return <div className="page"><h1>Practice</h1><p className="muted">Could not load review cards: {error}</p></div>;
  if (!due) return <div className="page">Loading…</div>;
  const card = due.cards[pos];
  if (!card) {
    return (
      <div className="page practice">
        <h1>Practice</h1>
        {due.cards.length === 0 ? (
          <p>Nothing due right now. Ear-training exercises from your lessons join the deck automatically. 🎧</p>
        ) : (
          <p>
            Session done — {grades.length} card(s) reviewed, average grade {(grades.reduce((a, b) => a + b, 0) / Math.max(1, grades.length)).toFixed(1)} / 5.
          </p>
        )}
        <div className="row">
          <button type="button" className="btn" onClick={load}>
            Check again
          </button>
          <Link to="/" className="btn ghost">
            Dashboard
          </Link>
        </div>
      </div>
    );
  }
  const onComplete = async (s: SetSummary) => {
    const grade = gradeFromScore(s.score);
    setGrades((g) => [...g, grade]);
    try {
      await api.srsReview(card.id, grade);
    } catch {
      /* ignore */
    }
    setTimeout(() => {
      setPos((p) => p + 1);
      if (pos + 1 >= due.cards.length) void refresh();
    }, 1200);
  };
  return (
    <div className="page practice">
      <h1>Practice</h1>
      <p className="muted small">
        Card {pos + 1} of {due.cards.length} · session {due.session} · from <Link to={`/lesson/${card.lessonId}`}>{card.lessonId}</Link>
      </p>
      <ExerciseShell key={card.id} block={card.block} lessonId={card.lessonId} mode="practice" count={Math.min(ITEMS_PER_CARD, card.block.count ?? ITEMS_PER_CARD)} onComplete={(s) => void onComplete(s)} />
    </div>
  );
}
export default Practice;
