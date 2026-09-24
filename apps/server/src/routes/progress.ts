import { Hono } from 'hono';
import { badRequest, bool, jsonBody, num, str } from '../http.js';
import type { ProgressService } from '../progress.js';

export function progressRoutes(progress: ProgressService): Hono {
  const r = new Hono();

  r.get('/', (c) => c.json(progress.summary()));

  r.post('/attempts', async (c) => {
    const b = await jsonBody(c.req);
    const source = b.source === undefined ? 'lesson' : b.source;
    if (source !== 'lesson' && source !== 'practice') badRequest('"source" must be "lesson" or "practice"');
    const id = progress.recordAttempt({
      lessonId: str(b, 'lessonId', { max: 200 }),
      exerciseId: str(b, 'exerciseId', { max: 200 }),
      type: str(b, 'type', { max: 50 }),
      correct: bool(b, 'correct'),
      score: num(b, 'score', { min: 0, max: 1 })!,
      answer: b.answer,
      ...(b.durationMs !== undefined ? { durationMs: Math.round(num(b, 'durationMs', { min: 0 })!) } : {}),
      ...(b.itemIndex !== undefined ? { itemIndex: Math.round(num(b, 'itemIndex', { min: 0 })!) } : {}),
      source,
    });
    return c.json({ ok: true, id }, 201);
  });

  r.post('/exercises/complete', async (c) => {
    const b = await jsonBody(c.req);
    const res = progress.completeExercise({
      lessonId: str(b, 'lessonId', { max: 200 }),
      exerciseId: str(b, 'exerciseId', { max: 200 }),
      type: str(b, 'type', { max: 50 }),
      score: num(b, 'score', { min: 0, max: 1 })!,
      passed: bool(b, 'passed'),
    });
    return c.json({ ok: true, ...res });
  });

  r.post('/lessons/:id/complete', (c) => {
    const lesson = progress.completeLesson(c.req.param('id'));
    return c.json({ ok: true, lesson });
  });

  return r;
}
