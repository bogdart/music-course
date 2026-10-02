import { useEffect, useState } from 'react';
import { getRung, LADDER_LESSON_ID, LADDERS, MASTERY, type LadderSkill } from '@music/core';
import { ExerciseShell } from '../../exercises/ExerciseShell';
import { useLadderStore } from '../../stores/ladder';

export interface LadderData {
  skill: LadderSkill;
  unlocks: number;
  intro?: string;
}

/**
 * ```ladder block: opens rungs 1…`unlocks` of a skill when reached, then drills the learner's CURRENT rung of that
 * skill (the lowest unlocked rung not yet mastered) — never a fixed difficulty. Explains where the learner stands.
 */
export function LadderBlock({ data, record = true }: { data: LadderData; record?: boolean }) {
  const ladder = LADDERS[data.skill];
  const unlock = useLadderStore((s) => s.unlock);
  const load = useLadderStore((s) => s.load);
  const st = useLadderStore((s) => s.state?.skills.find((k) => k.skill === data.skill));
  const [practise, setPractise] = useState(false);

  useEffect(() => {
    if (record) void unlock(data.skill, data.unlocks);
    else void load();
  }, [data.skill, data.unlocks, record, unlock, load]);

  const target = ladder.rungs[Math.min(data.unlocks, ladder.rungs.length) - 1]!;
  // offline / demo: no server state → drill this lesson's top rung
  const n = st?.current ?? (record ? null : data.unlocks);
  if (n === null) return <div className="card ladder" data-testid="ladder">Loading your ear-training level…</div>;
  const rung = getRung(`${data.skill}-${n}`)!;
  const status = st?.rungs[n - 1];
  const review = !!st?.complete;
  const mastered = st ? st.rungs.filter((r) => r.mastered && r.n <= st.unlocked).length : 0;
  // every rung this block opens is already the learner's (mastered or recorded as known): nothing to drill here
  const already = !!st && st.rungs.slice(0, data.unlocks).every((r) => r.mastered);
  if (already && !practise) {
    return (
      <div className="card ladder done" data-testid="ladder" data-skill={data.skill}>
        <div className="ladder-head">
          <strong>🎧 {ladder.title}</strong>
          <span className="muted small">✓ already yours — rungs 1–{data.unlocks}</span>
        </div>
        <p className="small muted">
          {data.unlocks === 1 ? `“${target.title}”` : `Up to “${target.title}”`}: you have this already, so there's nothing to drill here.{' '}
          <button type="button" className="btn link" onClick={() => setPractise(true)}>
            practise anyway
          </button>
        </p>
      </div>
    );
  }

  return (
    <div className="card ladder" data-testid="ladder" data-skill={data.skill}>
      <div className="ladder-head">
        <strong>🎧 {ladder.title}</strong>
        <span className="muted small">
          rung {n} of {ladder.rungs.length} · {mastered} mastered
        </span>
      </div>
      {data.intro && <p className="small">{data.intro}</p>}
      <div className="ladder-track" aria-hidden>
        {ladder.rungs.map((r) => {
          const s = st?.rungs[r.n - 1];
          const cls = s?.mastered ? 'ok' : r.n === n ? 'current' : r.n <= (st?.unlocked ?? data.unlocks) ? 'open' : '';
          return <span key={r.id} className={`rung ${cls}`} title={`${r.n}. ${r.title}`} />;
        })}
      </div>
      {n < data.unlocks && !review && (
        <p className="muted small">
          This lesson opens the ladder up to rung {data.unlocks} (“{target.title}”). You're on rung {n} — the drill below is at <em>your</em> level. The
          next rungs come once this one is solid: {Math.round(MASTERY.need * 100)}% over the last {MASTERY.window} answers, across two sessions.
        </p>
      )}
      {review && <p className="muted small">Every rung opened so far is mastered — this is a review of rung {n}.</p>}
      <p className="small">
        <strong>Now:</strong> {rung.title} — <span className="muted">{rung.step}</span>
        {status && status.attempts > 0 && status.recent !== null && !status.mastered && (
          <span className="muted"> · last {Math.min(status.attempts, MASTERY.window)}: {Math.round(status.recent * 100)}%</span>
        )}
      </p>
      <details className="ladder-how" open={!status || status.attempts < 20}>
        <summary>How to do it</summary>
        <p className="small">{rung.how}</p>
      </details>
      <ExerciseShell key={rung.id} block={rung.block} lessonId={LADDER_LESSON_ID} record={record} onComplete={() => void load()} />
    </div>
  );
}

export default LadderBlock;
