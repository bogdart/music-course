import { createContext, useContext } from 'react';
import type { LessonBlock, SetSummary } from '@music/core';

export interface LessonContextValue {
  lessonId: string;
  blocks: LessonBlock[];
  /** Record progress on the server */
  record: boolean;
  /** Lesson key (front matter / first example) for degree labels */
  keyName?: string;
  onExerciseComplete?: (exerciseId: string, summary: SetSummary) => void;
}

export const LessonContext = createContext<LessonContextValue>({ lessonId: 'unknown', blocks: [], record: false });

export function useLesson(): LessonContextValue {
  return useContext(LessonContext);
}
