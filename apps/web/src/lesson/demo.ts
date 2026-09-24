import { parseLesson } from '@music/content-schema';
import type { ParsedLessonDTO } from '@music/core';
import demoMarkdown from './__fixtures__/demo-lesson.md?raw';

export { demoMarkdown };

/** The dev fixture parsed exactly like the server does. */
export function loadDemoLesson(): ParsedLessonDTO {
  const parsed = parseLesson(demoMarkdown, { id: 'w01-l9-dev-demo' });
  return { ...parsed, prev: null, next: null };
}
