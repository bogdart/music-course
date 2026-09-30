import { useEffect, useState } from 'react';
import { LADDER_LESSON_ID } from '@music/core';
import { ExerciseShell } from '../exercises/ExerciseShell';
import { skillTitle, warmupEntry, type PlanEntry } from '../practice/ladderPlan';
import { useLadderStore } from '../stores/ladder';

function doneKey(lessonId: string) {
  return `mc.warmup.${lessonId}`;
}

/**
 * Warm-up at the top of every lesson (inserted by the runner, never authored): one short set at the learner's current
 * rung of the ear skill furthest behind the lessons. Hidden when no ladder is open yet; skipping is always possible.
 */
export function Warmup({ lessonId }: { lessonId: string }) {
  const load = useLadderStore((s) => s.load);
  const [entry, setEntry] = useState<PlanEntry | null | undefined>(undefined);
  const [phase, setPhase] = useState<'offer' | 'running' | 'done' | 'skipped'>(() => {
    try {
      return sessionStorage.getItem(doneKey(lessonId)) ? 'done' : 'offer';
    } catch {
      return 'offer';
    }
  });

  useEffect(() => {
    let cancel = false;
    void load().then(() => {
      const st = useLadderStore.getState().state;
      if (!cancel) setEntry(st ? warmupEntry(st) : null);
    });
    return () => {
      cancel = true;
    };
  }, [lessonId, load]);

  const finish = () => {
    setPhase('done');
    try {
      sessionStorage.setItem(doneKey(lessonId), '1');
    } catch {
      /* ignore */
    }
  };

  if (!entry || phase === 'skipped' || phase === 'done') return null;
  if (phase === 'offer') {
    return (
      <div className="card warmup" data-testid="warmup">
        <div>
          <strong>🔥 Warm-up</strong>
          <p className="muted small">
            {entry.count} quick questions at your level: {skillTitle(entry.rung.skill)}, rung {entry.rung.n} — {entry.rung.title}.
          </p>
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
  return (
    <div className="card warmup running" data-testid="warmup">
      <div className="row wrap">
        <strong>🔥 Warm-up · {skillTitle(entry.rung.skill)}</strong>
        <button type="button" className="btn link" onClick={finish}>
          end warm-up
        </button>
      </div>
      <ExerciseShell
        key={entry.rung.id}
        block={entry.rung.block}
        lessonId={LADDER_LESSON_ID}
        mode="practice"
        count={entry.count}
        onComplete={() => {
          void load();
          setTimeout(finish, 900);
        }}
      />
    </div>
  );
}

export default Warmup;
