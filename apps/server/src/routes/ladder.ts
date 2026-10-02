import { Hono } from 'hono';
import { getRung, isLadderSkill, LADDER_LESSON_ID, LADDER_SKILLS, skillState, type LadderStateDTO, type RungResult } from '@music/core';
import type { ContentStore } from '../content.js';
import { nowIso, type Db } from '../db.js';
import { badRequest, jsonBody, num, str } from '../http.js';
import type { Sessions } from '../session.js';

/**
 * Ear-training ladders: how far lessons have unlocked each skill, and — from the recorded first answers of every
 * rung (attempts with lesson id "ladder") — which rungs are mastered and which one is current.
 */
export function ladderRoutes(db: Db, content: ContentStore, sessions: Sessions): Hono {
  const r = new Hono();

  const state = (): LadderStateDTO => {
    const unlocks = new Map((db.prepare('SELECT skill, unlocked FROM ladder_unlocks').all() as { skill: string; unlocked: number }[]).map((u) => [u.skill, u.unlocked]));
    // lessons already started or finished count as reached, even if their ladder block was never rendered
    const started = db.prepare('SELECT lesson_id FROM lesson_progress').all() as { lesson_id: string }[];
    for (const { lesson_id } of started) {
      for (const u of content.ladderUnlocks(lesson_id)) unlocks.set(u.skill, Math.max(unlocks.get(u.skill) ?? 0, u.unlocks));
    }
    const rows = db.prepare('SELECT exercise_id, correct, session FROM attempts WHERE lesson_id = ? ORDER BY id').all(LADDER_LESSON_ID) as {
      exercise_id: string; correct: number; session: number;
    }[];
    const results: Record<string, RungResult[]> = {};
    for (const a of rows) (results[a.exercise_id] ??= []).push({ correct: !!a.correct, session: a.session });
    const known = new Set((db.prepare('SELECT rung_id FROM ladder_known').all() as { rung_id: string }[]).map((k) => k.rung_id));
    return { session: sessions.current(), skills: LADDER_SKILLS.map((s) => skillState(s, unlocks.get(s) ?? 0, results, known)) };
  };

  r.get('/', (c) => c.json(state()));

  /** A lesson's ```ladder block was reached: rungs 1…unlocks of the skill are open from now on (never lowered). */
  r.post('/unlock', async (c) => {
    const b = await jsonBody(c.req);
    const skill = str(b, 'skill', { max: 40 });
    if (!isLadderSkill(skill)) badRequest(`Unknown ladder skill "${skill}"`);
    const unlocks = Math.round(num(b, 'unlocks', { min: 1, max: 100 })!);
    db.prepare(`INSERT INTO ladder_unlocks (skill, unlocked, updated_at) VALUES (?, ?, ?)
      ON CONFLICT(skill) DO UPDATE SET unlocked = MAX(unlocked, excluded.unlocked), updated_at = excluded.updated_at`).run(skill, unlocks, nowIso());
    return c.json(state());
  });

  /**
   * Record rungs the learner already has (their teacher knows it — no test needed): they count as mastered from the
   * start. `{ rungs: ["pitch-1", …], note? }`; `{ rungs: [...], remove: true }` takes them back.
   */
  r.post('/known', async (c) => {
    const b = await jsonBody(c.req);
    const rungs = Array.isArray(b.rungs) ? b.rungs.map(String) : [];
    if (!rungs.length || rungs.some((id: string) => !getRung(id))) badRequest('"rungs" must be a non-empty list of rung ids');
    for (const id of rungs) {
      if (b.remove === true) db.prepare('DELETE FROM ladder_known WHERE rung_id = ?').run(id);
      else db.prepare('INSERT INTO ladder_known (rung_id, note, created_at) VALUES (?, ?, ?) ON CONFLICT(rung_id) DO UPDATE SET note = excluded.note').run(id, typeof b.note === 'string' ? b.note : null, nowIso());
    }
    return c.json(state());
  });

  return r;
}
