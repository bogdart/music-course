import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProgressStore } from '../stores/progress';

const STATUS_ICON = { 'not-started': '○', 'in-progress': '◐', completed: '●' } as const;

export function Curriculum() {
  const { curriculum, refresh, error, loading } = useProgressStore();
  useEffect(() => {
    void refresh();
  }, [refresh]);
  if (!curriculum) return <div className="page">{loading ? 'Loading…' : `Curriculum unavailable${error ? `: ${error}` : ''}`}</div>;
  return (
    <div className="page curriculum">
      <h1>Curriculum</h1>
      {curriculum.problemCount > 0 && <p className="muted small">{curriculum.problemCount} content problem(s) reported by the validator.</p>}
      {curriculum.phases.map((p) => (
        <section key={p.id} id={p.id} className="phase">
          <h2>{p.title}</h2>
          <p className="muted">{p.goal}</p>
          <div className="weeks">
            {curriculum.weeks
              .filter((w) => w.week >= p.weeks[0] && w.week <= p.weeks[1])
              .map((w) => (
                <div key={w.week} className="card week">
                  <div className="week-head">
                    <span className="muted small">Week {w.week}</span>
                    <strong>{w.title}</strong>
                  </div>
                  <ul>
                    {w.lessons.map((l) => (
                      <li key={l.id} className={`lesson-row ${l.status} ${l.exists ? '' : 'missing'}`}>
                        <span className="status" title={l.status}>
                          {STATUS_ICON[l.status]}
                        </span>
                        {l.exists ? <Link to={`/lesson/${l.id}`}>{l.title}</Link> : <span className="muted">{l.title || l.id} (coming soon)</span>}
                        {l.bestScore !== undefined && <span className="muted small"> {Math.round(l.bestScore * 100)}%</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
export default Curriculum;
