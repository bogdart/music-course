import { useState } from 'react';
import { api } from '../api/client';
import { useLadderStore } from '../stores/ladder';
import { useProgressStore } from '../stores/progress';

/** Forget remembered exercise sets of the given lessons in this browser (a restarted lesson starts fresh). */
function forgetSets(lessonIds: string[]) {
  try {
    const drop: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && lessonIds.some((id) => k.startsWith(`mc:set:${id}:`))) drop.push(k);
    }
    for (const k of drop) localStorage.removeItem(k);
  } catch {
    /* storage unavailable */
  }
}

/**
 * Settings: start the course again from a lesson. That lesson and all later ones become not-started; the answer
 * history and ear-ladder mastery stay.
 */
export function RestartCourse() {
  const curriculum = useProgressStore((s) => s.curriculum);
  const refresh = useProgressStore((s) => s.refresh);
  const loadLadder = useLadderStore((s) => s.load);
  const lessons = curriculum?.weeks.flatMap((w) => w.lessons.filter((l) => l.exists).map((l) => ({ ...l, week: w.week }))) ?? [];
  const [from, setFrom] = useState('');
  const [armed, setArmed] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const target = from || lessons[0]?.id || '';
  const restart = async () => {
    try {
      const r = await api.restart(target);
      forgetSets(r.lessonIds);
      setMsg(`Done — ${r.reset} lessons are ready to be done again, starting with “${lessons.find((l) => l.id === target)?.title ?? target}”.`);
      setArmed(false);
      void refresh();
      void loadLadder();
    } catch (e) {
      setMsg(`Could not restart: ${(e as Error).message}`);
    }
  };
  return (
    <section className="card form" aria-labelledby="restart-h">
      <h2 id="restart-h">Start again from a lesson</h2>
      <p className="muted small">
        If lessons were marked done but didn't really land, start again from one of them. It and every later lesson become
        not-started; your answer history and ear-ladder progress are kept.
      </p>
      <label>
        From lesson
        <select value={target} onChange={(e) => { setFrom(e.target.value); setArmed(false); }}>
          {lessons.map((l) => (
            <option key={l.id} value={l.id}>
              Week {l.week} · {l.title}{l.status === 'completed' ? ' ✓' : ''}
            </option>
          ))}
        </select>
      </label>
      <div className="row">
        {!armed ? (
          <button type="button" className="btn" onClick={() => setArmed(true)} disabled={!target}>
            Start again from here…
          </button>
        ) : (
          <>
            <button type="button" className="btn primary" onClick={() => void restart()}>
              Yes, restart from this lesson
            </button>
            <button type="button" className="btn ghost" onClick={() => setArmed(false)}>
              Cancel
            </button>
          </>
        )}
      </div>
      {msg && <p className="small" role="status">{msg}</p>}
    </section>
  );
}

export default RestartCourse;
