import { useEffect, useRef, useState } from 'react';
import type { SetSummary, SrsCardDTO } from '@music/core';
import { api } from '../api/client';
import { ExerciseShell } from '../exercises/ExerciseShell';
import { adaptedBlock, recordScores, reviewCard } from '../practice/srsSession';

const WARMUP_SEC = 120;
const ITEMS = 3;

function doneKey(lessonId: string) {
  return `mc.warmup.${lessonId}`;
}

/**
 * Automatic 2-minute SRS warm-up at the top of every lesson (inserted by the runner, never authored). Uses due cards
 * (plus at most one new card); hidden when the deck has nothing to offer. Skipping is always possible.
 */
export function Warmup({ lessonId }: { lessonId: string }) {
  const [cards, setCards] = useState<SrsCardDTO[] | null>(null);
  const [phase, setPhase] = useState<'offer' | 'running' | 'done' | 'skipped'>(() => {
    try {
      return sessionStorage.getItem(doneKey(lessonId)) ? 'done' : 'offer';
    } catch {
      return 'offer';
    }
  });
  const [pos, setPos] = useState(0);
  const [left, setLeft] = useState(WARMUP_SEC);
  const [reviewed, setReviewed] = useState(0);
  const scores = useRef<number[]>([]);

  useEffect(() => {
    let cancel = false;
    api
      .srsDue(6, 1)
      .then((d) => !cancel && setCards(d.cards))
      .catch(() => !cancel && setCards([]));
    return () => {
      cancel = true;
    };
  }, [lessonId]);

  useEffect(() => {
    if (phase !== 'running') return;
    if (left <= 0) return;
    const t = setTimeout(() => setLeft((l) => l - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, left]);

  const finish = () => {
    setPhase('done');
    try {
      sessionStorage.setItem(doneKey(lessonId), '1');
    } catch {
      /* ignore */
    }
  };

  if (!cards || cards.length === 0 || phase === 'skipped') return null;
  if (phase === 'done') {
    return reviewed > 0 ? <div className="card warmup done small" data-testid="warmup">✓ Warm-up done — {reviewed} card{reviewed > 1 ? 's' : ''} reviewed.</div> : null;
  }
  if (phase === 'offer') {
    return (
      <div className="card warmup" data-testid="warmup">
        <div>
          <strong>🔥 2-minute warm-up</strong>
          <p className="muted small">{cards.length === 1 ? 'One review card is' : `${cards.length} review cards are`} waiting. A quick review before new material helps them stick.</p>
        </div>
        <div className="row">
          <button type="button" className="btn primary" onClick={() => setPhase('running')}>
            Start warm-up
          </button>
          <button type="button" className="btn ghost" onClick={() => setPhase('skipped')}>
            Skip
          </button>
        </div>
      </div>
    );
  }
  const card = cards[pos];
  if (!card) return null;
  const { block } = adaptedBlock(card);
  const onComplete = async (s: SetSummary) => {
    recordScores(card, scores.current);
    scores.current = [];
    await reviewCard(card, s);
    setReviewed((r) => r + 1);
    setTimeout(() => {
      if (left <= 0 || pos + 1 >= cards.length) finish();
      else setPos((p) => p + 1);
    }, 900);
  };
  return (
    <div className="card warmup running" data-testid="warmup">
      <div className="row wrap">
        <strong>🔥 Warm-up</strong>
        <span className={`muted small ${left <= 0 ? 'bad-text' : ''}`}>
          {left > 0 ? `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')} left` : 'time — finish this card'} · card {pos + 1}/{cards.length}
        </span>
        <button type="button" className="btn link" onClick={finish}>
          end warm-up
        </button>
      </div>
      <ExerciseShell
        key={card.id}
        block={block}
        lessonId={card.lessonId}
        mode="practice"
        count={ITEMS}
        onItemResult={(r) => scores.current.push(r.score)}
        onComplete={(s) => void onComplete(s)}
      />
    </div>
  );
}

export default Warmup;
