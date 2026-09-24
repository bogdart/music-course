import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProgressStore } from '../stores/progress';

export function Dashboard() {
  const { summary, curriculum, refresh, error } = useProgressStore();
  useEffect(() => {
    void refresh();
  }, [refresh]);
  const nextId = summary?.nextLessonId ?? summary?.lastLessonId ?? curriculum?.weeks.flatMap((w) => w.lessons).find((l) => l.exists)?.id;
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
              <Link className="btn primary big" to={`/lesson/${next.id}`}>
                {summary?.lastLessonId ? 'Continue lesson' : 'Start lesson'} →
              </Link>
            </>
          ) : (
            <p>No lessons available yet.</p>
          )}
        </div>
        <div className="card">
          <div className="muted small">Ear-training review</div>
          <h2>{summary?.srs.due ?? 0} due</h2>
          <div className="muted small">{summary?.srs.total ?? 0} cards in your deck · session {summary?.srs.session ?? '–'}</div>
          <Link className="btn" to="/practice">
            Practice
          </Link>
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
