import { Hono } from 'hono';
import type { ExerciseBlock, SrsCardDTO, SrsDueDTO } from '@music/core';
import { dueCards, review, srsKey } from '@music/core';
import type { ContentStore } from '../content.js';
import { nowIso, type Db } from '../db.js';
import { jsonBody, notFound, num } from '../http.js';
import type { Sessions } from '../session.js';

interface CardRow {
  id: number; key: string; type: string; lesson_id: string; exercise_id: string; block: string; ease: number; interval: number;
  reps: number; lapses: number; due_session: number; last_session: number | null;
}

export function srsRoutes(db: Db, content: ContentStore, sessions: Sessions): Hono {
  const r = new Hono();

  const toDto = (row: CardRow): SrsCardDTO => {
    // Prefer the current content version of the exercise when its spec is unchanged (same key)
    const current = content.exercise(row.lesson_id, row.exercise_id);
    const block: ExerciseBlock = current && srsKey(current) === row.key ? current : (JSON.parse(row.block) as ExerciseBlock);
    return {
      id: row.id, key: row.key, type: row.type, lessonId: row.lesson_id, exerciseId: row.exercise_id, block,
      ease: row.ease, interval: row.interval, reps: row.reps, lapses: row.lapses, dueSession: row.due_session,
    };
  };

  r.get('/due', (c) => {
    const limit = Math.max(1, Math.min(100, Number(c.req.query('limit') ?? 20) || 20));
    const session = sessions.touch();
    const rows = db.prepare('SELECT * FROM srs_cards WHERE suspended = 0 AND due_session <= ?').all(session) as unknown as CardRow[];
    const due = dueCards(rows.map((r) => ({ ...r, dueSession: r.due_session })), session, limit);
    const dto: SrsDueDTO = { session, cards: due.map(toDto) };
    return c.json(dto);
  });

  r.get('/cards', (c) => {
    const rows = db.prepare('SELECT * FROM srs_cards ORDER BY due_session').all() as unknown as CardRow[];
    return c.json({ session: sessions.current(), cards: rows.map(toDto) });
  });

  r.post('/review', async (c) => {
    const b = await jsonBody(c.req);
    const cardId = num(b, 'cardId', { min: 1 })!;
    const grade = num(b, 'grade', { min: 0, max: 5 })!;
    const row = db.prepare('SELECT * FROM srs_cards WHERE id = ?').get(cardId) as CardRow | undefined;
    if (!row) notFound(`Unknown card ${cardId}`);
    const session = sessions.touch();
    const next = review(
      { ease: row.ease, interval: row.interval, reps: row.reps, lapses: row.lapses, dueSession: row.due_session, lastSession: row.last_session },
      grade, session,
    );
    const now = nowIso();
    db.prepare('UPDATE srs_cards SET ease = ?, interval = ?, reps = ?, lapses = ?, due_session = ?, last_session = ?, updated_at = ? WHERE id = ?')
      .run(next.ease, next.interval, next.reps, next.lapses, next.dueSession, next.lastSession, now, cardId);
    db.prepare('INSERT INTO srs_reviews (card_id, grade, session, created_at) VALUES (?, ?, ?, ?)').run(cardId, Math.round(grade), session, now);
    const updated = db.prepare('SELECT * FROM srs_cards WHERE id = ?').get(cardId) as unknown as CardRow;
    return c.json({ card: toDto(updated) });
  });

  return r;
}
