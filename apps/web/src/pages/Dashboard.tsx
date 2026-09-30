import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LADDERS } from '@music/core';
import { useProgressStore } from '../stores/progress';
import { useLadderStore } from '../stores/ladder';

/** Open-but-not-mastered rungs in one skill from which the dashboard asks for practice before new lessons. */
export const LAG_LIMIT = 3;

export function Dashboard() {
  const { summary, curriculum, refresh, error } = useProgressStore();
  const ladder = useLadderStore((s) => s.state);
  const loadLadder = useLadderStore((s) => s.load);
  useEffect(() => {
    void refresh();
    void loadLadder();
  }, [refresh, loadLadder]);
  const open = ladder?.skills.filter((s) => s.unlocked > 0) ?? [];
  const lagging = open.filter((s) => s.behind >= LAG_LIMIT).sort((a, b) => b.behind - a.behind);
  // resume the lesson last worked on unless it is finished; otherwise the first unfinished lesson
  const last = summary?.lastLessonId ?? null;
  const resuming = !!last && summary?.lessons[last]?.status !== 'completed';
  const nextId = (resuming ? last : null) ?? summary?.nextLessonId ?? last ?? curriculum?.weeks.flatMap((w) => w.lessons).find((l) => l.exists)?.id;
  const next = curriculum?.weeks.flatMap((w) => w.lessons.map((l) => ({ ...l, week: w.week }))).find((l) => l.id === nextId);
  const t = summary?.totals;
  return (
    <div className="page dashboard">
      <h1>Welcome back 🎹</h1>
      {error && !summary && <p className="muted">Progress unavailable ({error}). You can still try the <Link to="/dev/demo">demo lesson</Link>.</p>}
      <div className="grid cards">
        <div className="card hero">
          <div className="muted small">Continue</div>
          {next ? (
            <>
              <h2>{next.title}</h2>
              <div className="muted small">Week {next.week}</div>
              {lagging.length > 0 && (
                <p className="lag-warning small" data-testid="lag-warning">
                  Your ear is behind the lessons: {lagging.map((s) => `${LADDERS[s.skill].title} (${s.behind} rungs)`).join(', ')}. Practise before
                  starting new material — the lessons will wait.
                </p>
              )}
              <div className="row">
                {lagging.length > 0 && (
                  <Link className="btn primary big" to="/practice">
                    Practise first →
                  </Link>
                )}
                <Link className={`btn ${lagging.length ? '' : 'primary big'}`} to={`/lesson/${next.id}`}>
                  {last ? 'Continue lesson' : 'Start lesson'} →
                </Link>
              </div>
            </>
          ) : (
            <p>No lessons available yet.</p>
          )}
        </div>
        <div className="card ear-skills" data-testid="ear-skills">
          <div className="muted small">Ear skills</div>
          {open.length === 0 ? (
            <p className="small">Ear ladders open as you go through the lessons.</p>
          ) : (
            <ul className="skill-list">
              {open.map((s) => {
                const mastered = s.rungs.filter((r) => r.mastered).length;
                const total = LADDERS[s.skill].rungs.length;
                return (
                  <li key={s.skill} className={s.behind >= LAG_LIMIT ? 'behind' : ''}>
                    <span>{LADDERS[s.skill].title}</span>
                    <span className="muted small">
                      rung {s.current} · {mastered}/{s.unlocked} open mastered
                    </span>
                    <div className="bar" title={`${mastered} mastered, ${s.unlocked} open, ${total} in total`}>
                      <span style={{ width: `${(100 * mastered) / total}%` }} />
                      <span className="open" style={{ width: `${(100 * (s.unlocked - mastered)) / total}%` }} />
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          <div className="row">
            <Link className="btn" to="/practice">
              Practice
            </Link>
            <Link className="btn ghost" to="/placement" title="Skip rungs you already hear">
              Placement test
            </Link>
          </div>
          {(summary?.srs.due ?? 0) > 0 && <div className="muted small">+ {summary?.srs.due} review card(s) due</div>}
        </div>
        <div className="card">
          <div className="muted small">Progress</div>
          <h2>
            {t?.lessonsCompleted ?? 0} / {t?.lessonsTotal ?? curriculum?.weeks.reduce((a, w) => a + w.lessons.length, 0) ?? 0}
          </h2>
          <div className="muted small">lessons completed</div>
          <div className="bar">
            <span style={{ width: `${t && t.lessonsTotal ? (100 * t.lessonsCompleted) / t.lessonsTotal : 0}%` }} />
          </div>
          <div className="muted small">
            {t?.attempts ?? 0} answers · {Math.round((t?.accuracy ?? 0) * 100)}% accuracy · {t?.streakDays ?? 0}-day streak
          </div>
        </div>
      </div>
      {curriculum && (
        <section>
          <h2>Phases</h2>
          <div className="grid cards">
            {curriculum.phases.map((p) => {
              const lessons = curriculum.weeks.filter((w) => w.week >= p.weeks[0] && w.week <= p.weeks[1]).flatMap((w) => w.lessons);
              const done = lessons.filter((l) => l.status === 'completed').length;
              return (
                <Link key={p.id} to={`/curriculum#${p.id}`} className="card phase-card">
                  <strong>{p.title}</strong>
                  <div className="muted small">
                    Weeks {p.weeks[0]}–{p.weeks[1]} · {done}/{lessons.length}
                  </div>
                  <div className="bar">
                    <span style={{ width: `${lessons.length ? (100 * done) / lessons.length : 0}%` }} />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
export default Dashboard;
