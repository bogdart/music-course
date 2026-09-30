import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRung, LADDER_LESSON_ID, LADDERS, LADDER_SKILLS, MASTERY, type LadderSkill } from '@music/core';
import { ExerciseShell } from '../exercises/ExerciseShell';
import { useLadderStore } from '../stores/ladder';

/**
 * Placement: skip what you already hear. For one skill, sets of 10 run up the ladder from the first rung not yet
 * mastered; 10 out of 10 masters a rung (MASTERY.placement) and moves on, the first miss stops — that rung is where
 * lessons and practice will work. Rungs beyond what lessons have opened can be placed out of too.
 */
export function Placement() {
  const state = useLadderStore((s) => s.state);
  const load = useLadderStore((s) => s.load);
  const [skill, setSkill] = useState<LadderSkill | null>(null);
  const [n, setN] = useState<number | null>(null);
  const [log, setLog] = useState<{ n: number; ok: boolean }[]>([]);
  const [run, setRun] = useState(0);
  useEffect(() => {
    void load();
  }, [load]);

  const start = (s: LadderSkill) => {
    const st = useLadderStore.getState().skill(s);
    const first = st?.rungs.find((r) => !r.mastered)?.n ?? 1;
    setSkill(s);
    setN(first);
    setLog([]);
    setRun((r) => r + 1);
  };

  if (!skill || n === null) {
    return (
      <div className="page placement">
        <h1>Placement: skip what you already hear</h1>
        <p>
          Pick a skill. You get sets of {MASTERY.placement} questions, starting at your first rung not yet mastered. Answer all {MASTERY.placement} right
          and that rung counts as mastered — the next one starts. The first set with a miss stops the test: that's your level, and lessons and
          practice pick up from there. Don't guess to get through; a miss is useful information.
        </p>
        <ul className="skill-list">
          {LADDER_SKILLS.map((s) => {
            const st = state?.skills.find((k) => k.skill === s);
            const mastered = st?.rungs.filter((r) => r.mastered).length ?? 0;
            return (
              <li key={s}>
                <span>
                  <strong>{LADDERS[s].title}</strong> <span className="muted small">— {LADDERS[s].purpose}</span>
                </span>
                <span className="muted small">
                  {mastered}/{LADDERS[s].rungs.length} mastered{' '}
                  <button type="button" className="btn" onClick={() => start(s)}>
                    Test me
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
        <Link to="/" className="btn ghost">
          Dashboard
        </Link>
      </div>
    );
  }

  const rung = getRung(`${skill}-${n}`);
  const stop = (text: string) => (
    <div className="page placement">
      <h1>Placement: {LADDERS[skill].title}</h1>
      <p>{text}</p>
      <ul>{log.map((l) => <li key={l.n}>Rung {l.n} “{LADDERS[skill].rungs[l.n - 1]!.title}”: {l.ok ? 'mastered ✓' : 'your level — keep practising here'}</li>)}</ul>
      <div className="row">
        <button type="button" className="btn primary" onClick={() => setSkill(null)}>
          Test another skill
        </button>
        <Link to="/practice" className="btn">
          Practice
        </Link>
      </div>
    </div>
  );
  if (!rung) return stop('You placed out of the whole ladder.');
  if (log.length && !log[log.length - 1]!.ok) return stop(`Your level in ${LADDERS[skill].title}: rung ${n} — “${rung.title}”.`);

  return (
    <div className="page placement">
      <h1>Placement: {LADDERS[skill].title}</h1>
      <p className="muted small">
        Rung {n} of {LADDERS[skill].rungs.length}: {rung.title} — {rung.step} All {MASTERY.placement} right to move on.
      </p>
      <details className="ladder-how">
        <summary>How to do it</summary>
        <p className="small">{rung.how}</p>
      </details>
      <ExerciseShell
        key={`${rung.id}-${run}`}
        block={rung.block}
        lessonId={LADDER_LESSON_ID}
        mode="practice"
        count={MASTERY.placement}
        onComplete={async (s) => {
          const ok = s.correct === s.total;
          await load();
          setLog((l) => [...l, { n, ok }]);
          if (ok) setTimeout(() => setN(n + 1), 600);
        }}
      />
      <button type="button" className="btn link" onClick={() => setSkill(null)}>
        stop the test
      </button>
    </div>
  );
}

export default Placement;
