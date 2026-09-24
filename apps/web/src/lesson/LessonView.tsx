import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import type { ParsedLessonDTO, SetSummary } from '@music/core';
import { api } from '../api/client';
import { useProgressStore } from '../stores/progress';
import { LessonContext, type LessonContextValue } from './LessonContext';
import { LessonRenderer } from './LessonRenderer';
import { Warmup } from './Warmup';

export interface LessonViewProps {
  lesson: ParsedLessonDTO;
  /** Record progress on the server (false for /dev/demo) */
  record?: boolean;
}

/** Full lesson layout: header, goals, exercise rail, rendered body, completion. */
export function LessonView({ lesson, record = true }: LessonViewProps) {
  const fm = lesson.frontmatter;
  const summary = useProgressStore((s) => s.summary);
  const refresh = useProgressStore((s) => s.refresh);
  const [local, setLocal] = useState<Record<string, SetSummary>>({});
  const [completed, setCompleted] = useState(false);
  useEffect(() => {
    setLocal({});
    setCompleted(false);
    window.scrollTo?.(0, 0);
  }, [lesson.id]);

  const server = summary?.exercises[lesson.id] ?? {};
  const lessonDone = completed || summary?.lessons[lesson.id]?.status === 'completed';

  const rail = useMemo(
    () =>
      lesson.blocks
        .filter((b) => b.lang === 'exercise')
        .map((b) => {
          const d = (b.data ?? {}) as { id?: string; type?: string; title?: string };
          return { id: d.id ?? `#${b.index}`, type: d.type ?? '?', title: d.title ?? d.type ?? 'exercise' };
        }),
    [lesson.blocks],
  );

  // stable context value: consumers (every lesson block) must not re-render on progress updates
  const ctx: LessonContextValue = useMemo(
    () => ({
      lessonId: lesson.id,
      blocks: lesson.blocks,
      record,
      ...(typeof fm.key === 'string' ? { keyName: fm.key } : {}),
      onExerciseComplete: (id: string, s: SetSummary) => setLocal((l) => ({ ...l, [id]: s })),
    }),
    [lesson.id, lesson.blocks, record, fm.key],
  );

  const status = (id: string) => {
    const l = local[id];
    if (l) return l.passed ? 'passed' : 'tried';
    const s = server[id];
    if (s) return s.passed ? 'passed' : 'tried';
    return 'todo';
  };
  const passedCount = rail.filter((r) => status(r.id) === 'passed').length;

  const complete = async () => {
    setCompleted(true);
    if (!record) return;
    try {
      await api.lessonComplete(lesson.id);
      void refresh();
    } catch {
      /* offline */
    }
  };

  return (
    <LessonContext.Provider value={ctx}>
      <div className="lesson-layout">
        <aside className="rail" aria-label="Exercises">
          <div className="rail-title">
            Exercises <span className="muted small">{passedCount}/{rail.length}</span>
          </div>
          <ol>
            {rail.map((r) => (
              <li key={r.id} className={`rail-item ${status(r.id)}`}>
                <a
                  href={`#ex-${r.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(`ex-${r.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  <span className="rail-dot" aria-hidden />
                  {r.title}
                </a>
              </li>
            ))}
          </ol>
        </aside>
        <article className="lesson">
          <header className="lesson-header">
            <div className="muted small">
              Week {fm.week} · Lesson {fm.order} · {fm.duration_min} min
            </div>
            <h1>{fm.title}</h1>
            {fm.goals?.length > 0 && (
              <ul className="goals">
                {fm.goals.map((g, i) => (
                  <li key={i}>{g}</li>
                ))}
              </ul>
            )}
            {lesson.problems.length > 0 && (
              <details className="problems">
                <summary>{lesson.problems.length} content problem(s)</summary>
                <ul>
                  {lesson.problems.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </details>
            )}
          </header>
          {record && <Warmup lessonId={lesson.id} />}
          <LessonRenderer body={lesson.body} />
          <footer className="lesson-footer card">
            {lessonDone ? <p>✓ Lesson complete. Nice work!</p> : <p>Finished the exercises? Mark the lesson complete.</p>}
            <div className="row">
              {lesson.prev && (
                <Link className="btn ghost" to={`/lesson/${lesson.prev}`}>
                  ← Previous
                </Link>
              )}
              {!lessonDone && (
                <button type="button" className="btn primary" onClick={() => void complete()}>
                  Complete lesson
                </button>
              )}
              {lesson.next && (
                <Link className="btn" to={`/lesson/${lesson.next}`}>
                  Next lesson →
                </Link>
              )}
            </div>
          </footer>
        </article>
      </div>
    </LessonContext.Provider>
  );
}
