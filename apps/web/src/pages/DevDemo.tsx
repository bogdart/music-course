import { useMemo } from 'react';
import { LessonView } from '../lesson/LessonView';
import { loadDemoLesson } from '../lesson/demo';

/** /dev/demo — renders the fixture lesson client-side (no server needed, progress not recorded). */
export function DevDemo() {
  const lesson = useMemo(() => loadDemoLesson(), []);
  return <LessonView lesson={lesson} record={false} />;
}
export default DevDemo;
