import { useMemo } from 'react';
import type { DawTaskItem } from '@music/core';
import { DawEmbed } from '../daw/DawEmbed';
import { useLesson } from '../lesson/LessonContext';
import type { ExerciseComponentProps } from './types';

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '');

/** `daw-task`: a compact DAW with the task's template; Submit sends {project, selfChecks} to the shell. */
export function DawTask({ item, block, onAnswer, disabled, revealed }: ExerciseComponentProps<'daw-task'>) {
  const { lessonId, record } = useLesson();
  const it = item as unknown as DawTaskItem;
  const projectId = useMemo(() => (it.projectRef ? `ref-${slug(it.projectRef)}` : `task-${slug(lessonId)}-${slug(block.id)}`), [it.projectRef, lessonId, block.id]);
  return (
    <div className="daw-task">
      <DawEmbed
        storeKey={`task:${lessonId}:${block.id}`}
        projectId={projectId}
        template={it.template}
        checks={it.checks}
        {...(it.key ? { defaultKey: it.key } : {})}
        {...(it.timerMin ? { timerMin: it.timerMin } : {})}
        persist={record}
        disabled={disabled}
        onSubmit={(answer) => onAnswer(answer as never)}
      />
      {revealed && <p className="muted small">There is no single right answer: any project that passes the checks is a solution.</p>}
    </div>
  );
}
export default DawTask;
