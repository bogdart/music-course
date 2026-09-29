import { Hono } from 'hono';
import type { ExerciseBlock, SrsCardDTO, SrsDueDTO } from '@music/core';
import { dueCards, review } from '@music/core';
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
    // The current content version of the exercise wins (content fixes reach existing cards); the stored copy is only
    // a fallback for exercises that were removed or replaced by a different type
    const current = content.exercise(row.lesson_id, row.exercise_id);
    const block: ExerciseBlock = current && current.type === row.type ? current : (JSON.parse(row.block) as ExerciseBlock);
    return {
      id: row.id, key: row.key, type: row.type, lessonId: row.lesson_id, exerciseId: row.exercise_id, block,
      ease: row.ease, interval: row.interval, reps: row.reps, lapses: row.lapses, dueSession: row.due_session,
    };
  };

  /** A card is live while its exercise still exists in the content (same lesson, id and type). */
  const live = (row: CardRow) => content.exercise(row.lesson_id, row.exercise_id)?.type === row.type;

  /**
   * Due cards. With `newLimit`, reviewed cards and new cards (never reviewed) are balanced: at most `newLimit` new
   * cards, interleaved one new after every two reviews; new cards may be pulled in even if not yet due.
   */
  r.get('/due', (c) => {
    const limit = Math.max(1, Math.min(100, Number(c.req.query('limit') ?? 20) || 20));
    const newLimitRaw = c.req.query('newLimit');
    const session = sessions.touch();
    if (newLimitRaw === undefined) {
      const rows = (db.prepare('SELECT * FROM srs_cards WHERE suspended = 0 AND due_session <= ?').all(session) as unknown as CardRow[]).filter(live);
      const due = dueCards(rows.map((r) => ({ ...r, dueSession: r.due_session })), session, limit);
      const dto: SrsDueDTO = { session, cards: due.map(toDto) };
      return c.json(dto);
    }
    const newLimit = Math.max(0, Math.min(limit, Number(newLimitRaw) || 0));
    const reviewRows = (db.prepare('SELECT * FROM srs_cards WHERE suspended = 0 AND last_session IS NOT NULL AND due_session <= ?').all(session) as unknown as CardRow[]).filter(live);
    const reviews = dueCards(reviewRows.map((r) => ({ ...r, dueSession: r.due_session })), session, limit);
    const newRows = (db.prepare('SELECT * FROM srs_cards WHERE suspended = 0 AND last_session IS NULL ORDER BY due_session, id').all() as unknown as CardRow[]).filter(live).slice(0, newLimit);
    const fresh = newRows.slice(0, Math.max(0, Math.min(newLimit, limit - Math.min(reviews.length, limit - newLimit))));
    const mixed: CardRow[] = [];
    let ri = 0;
    let ni = 0;
    while (mixed.length < limit && (ri < reviews.length || ni < fresh.length)) {
      if (ri < reviews.length && (mixed.length % 3 !== 2 || ni >= fresh.length)) mixed.push(reviews[ri++]!);
      else if (ni < fresh.length) mixed.push(fresh[ni++]!);
    }
    const dto: SrsDueDTO = { session, cards: mixed.map(toDto) };
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
