import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { ParsedLessonDTO } from '@music/core';
import { api } from '../api/client';
import { LessonView } from '../lesson/LessonView';
import { useProgressStore } from '../stores/progress';

export function LessonPage() {
  const { id = '' } = useParams();
  const [lesson, setLesson] = useState<ParsedLessonDTO | null>(null);
  const [error, setError] = useState<string | null>(null);
  const summary = useProgressStore((s) => s.summary);
  const refresh = useProgressStore((s) => s.refresh);
  useEffect(() => {
    let cancel = false;
    setLesson(null);
    setError(null);
    api
      .lesson(id)
      .then((l) => !cancel && setLesson(l))
      .catch((e: Error) => !cancel && setError(e.message));
    if (!summary) void refresh();
    return () => {
      cancel = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  if (error)
    return (
      <div className="page">
        <h1>Lesson unavailable</h1>
        <p className="muted">{error}</p>
        <Link to="/curriculum">Back to curriculum</Link>
      </div>
    );
  if (!lesson) return <div className="page">Loading lesson…</div>;
  return <LessonView lesson={lesson} />;
}
export default LessonPage;
