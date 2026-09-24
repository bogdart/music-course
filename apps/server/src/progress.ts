import type { ExerciseProgress, JournalEntryDTO, LessonProgress, LessonStatus, ProgressSummaryDTO } from '@music/core';
import { isSrsEligible, newCardState, srsKey } from '@music/core';
import type { ContentStore } from './content.js';
import { nowIso, type Db } from './db.js';
import { notFound } from './http.js';
import type { Sessions } from './session.js';

/** Progress + SRS persistence logic shared by routes. */
export class ProgressService {
  constructor(private readonly db: Db, private readonly content: ContentStore, private readonly sessions: Sessions) {}

  /** Throws 404 unless the lesson (and exercise, when given) exists in the loaded content. */
  assertKnown(lessonId: string, exerciseId?: string): void {
    if (!this.content.hasLesson(lessonId)) notFound(`Unknown lesson "${lessonId}"`);
    if (exerciseId !== undefined && !this.content.exercise(lessonId, exerciseId)) notFound(`Unknown exercise "${exerciseId}" in lesson "${lessonId}"`);
  }

  lessonStatus(id: string): LessonProgress | undefined {
    const r = this.db.prepare('SELECT status, best_score, completed_at, updated_at FROM lesson_progress WHERE lesson_id = ?').get(id) as
      | { status: LessonStatus; best_score: number | null; completed_at: string | null; updated_at: string }
      | undefined;
    if (!r) return undefined;
    return { status: r.status, ...(r.best_score !== null ? { bestScore: r.best_score } : {}), completedAt: r.completed_at, updatedAt: r.updated_at };
  }

  allLessons(): Record<string, LessonProgress> {
    const rows = this.db.prepare('SELECT lesson_id, status, best_score, completed_at, updated_at FROM lesson_progress').all() as {
      lesson_id: string; status: LessonStatus; best_score: number | null; completed_at: string | null; updated_at: string;
    }[];
    return Object.fromEntries(rows.map((r) => [r.lesson_id, { status: r.status, ...(r.best_score !== null ? { bestScore: r.best_score } : {}), completedAt: r.completed_at, updatedAt: r.updated_at }]));
  }

  private markInProgress(lessonId: string): void {
    this.db.prepare(`INSERT INTO lesson_progress (lesson_id, status, updated_at) VALUES (?, 'in-progress', ?)
      ON CONFLICT(lesson_id) DO UPDATE SET updated_at = excluded.updated_at`).run(lessonId, nowIso());
  }

  recordAttempt(a: { lessonId: string; exerciseId: string; type: string; correct: boolean; score: number; answer?: unknown; durationMs?: number; itemIndex?: number; source?: string }): number {
    const session = this.sessions.touch();
    const res = this.db.prepare(`INSERT INTO attempts (lesson_id, exercise_id, type, correct, score, answer, duration_ms, item_index, source, session)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`).run(
      a.lessonId, a.exerciseId, a.type, a.correct ? 1 : 0, a.score, a.answer === undefined ? null : JSON.stringify(a.answer),
      a.durationMs ?? null, a.itemIndex ?? null, a.source ?? 'lesson', session,
    );
    if ((a.source ?? 'lesson') === 'lesson') {
      this.markInProgress(a.lessonId);
      this.db.prepare(`INSERT INTO exercise_progress (lesson_id, exercise_id, type, attempts, correct, best_score, updated_at)
        VALUES (?, ?, ?, 1, ?, 0, ?)
        ON CONFLICT(lesson_id, exercise_id) DO UPDATE SET attempts = attempts + 1, correct = correct + excluded.correct, updated_at = excluded.updated_at`)
        .run(a.lessonId, a.exerciseId, a.type, a.correct ? 1 : 0, nowIso());
    }
    return Number(res.lastInsertRowid);
  }

  completeExercise(e: { lessonId: string; exerciseId: string; type: string; score: number; passed: boolean }): { srsCardId: number | null } {
    const session = this.sessions.touch();
    this.markInProgress(e.lessonId);
    this.db.prepare(`INSERT INTO exercise_progress (lesson_id, exercise_id, type, attempts, correct, best_score, last_score, passed, updated_at)
      VALUES (?, ?, ?, 0, 0, ?, ?, ?, ?)
      ON CONFLICT(lesson_id, exercise_id) DO UPDATE SET best_score = MAX(best_score, excluded.best_score), last_score = excluded.last_score,
        passed = MAX(passed, excluded.passed), updated_at = excluded.updated_at`)
      .run(e.lessonId, e.exerciseId, e.type, e.score, e.score, e.passed ? 1 : 0, nowIso());
    // SRS card for eligible exercises (only for content we know)
    const block = this.content.exercise(e.lessonId, e.exerciseId);
    if (!block || !isSrsEligible(block)) return { srsCardId: null };
    const key = srsKey(block);
    const existing = this.db.prepare('SELECT id FROM srs_cards WHERE key = ?').get(key) as { id: number } | undefined;
    if (existing) return { srsCardId: existing.id };
    const st = newCardState(session);
    const now = nowIso();
    const r = this.db.prepare(`INSERT INTO srs_cards (key, type, lesson_id, exercise_id, block, ease, interval, reps, lapses, due_session, last_session, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`).run(key, block.type, e.lessonId, e.exerciseId, JSON.stringify(block), st.ease, st.interval,
      st.reps, st.lapses, st.dueSession, st.lastSession, now, now);
    return { srsCardId: Number(r.lastInsertRowid) };
  }

  /** Recent attempts of one exercise, newest first (used as the `reflect` journal). */
  attempts(lessonId: string, exerciseId: string, limit = 20): JournalEntryDTO[] {
    const rows = this.db.prepare(`SELECT id, lesson_id, exercise_id, type, answer, score, created_at FROM attempts
      WHERE lesson_id = ? AND exercise_id = ? ORDER BY id DESC LIMIT ?`).all(lessonId, exerciseId, limit) as {
      id: number; lesson_id: string; exercise_id: string; type: string; answer: string | null; score: number; created_at: string;
    }[];
    return rows.map((r) => {
      let answer: unknown = null;
      try {
        answer = r.answer === null ? null : JSON.parse(r.answer);
      } catch {
        answer = r.answer;
      }
      return { id: r.id, lessonId: r.lesson_id, exerciseId: r.exercise_id, type: r.type, answer, score: r.score, createdAt: r.created_at };
    });
  }

  completeLesson(lessonId: string): LessonProgress {
    this.sessions.touch();
    const r = this.db.prepare('SELECT AVG(best_score) AS s FROM exercise_progress WHERE lesson_id = ?').get(lessonId) as { s: number | null };
    const now = nowIso();
    this.db.prepare(`INSERT INTO lesson_progress (lesson_id, status, best_score, completed_at, updated_at) VALUES (?, 'completed', ?, ?, ?)
      ON CONFLICT(lesson_id) DO UPDATE SET status = 'completed', best_score = MAX(COALESCE(best_score, 0), COALESCE(excluded.best_score, 0)),
        completed_at = COALESCE(lesson_progress.completed_at, excluded.completed_at), updated_at = excluded.updated_at`).run(lessonId, r.s, now, now);
    return this.lessonStatus(lessonId)!;
  }

  exercises(): Record<string, Record<string, ExerciseProgress>> {
    const rows = this.db.prepare('SELECT * FROM exercise_progress').all() as {
      lesson_id: string; exercise_id: string; attempts: number; correct: number; best_score: number; last_score: number | null; passed: number; updated_at: string;
    }[];
    const out: Record<string, Record<string, ExerciseProgress>> = {};
    for (const r of rows) {
      (out[r.lesson_id] ??= {})[r.exercise_id] = {
        attempts: r.attempts, correct: r.correct, bestScore: r.best_score, passed: !!r.passed,
        ...(r.last_score !== null ? { lastScore: r.last_score } : {}), updatedAt: r.updated_at,
      };
    }
    return out;
  }

  summary(): ProgressSummaryDTO {
    const lessons = this.allLessons();
    const order = this.content.order;
    const existing = order.filter((id) => this.content.hasLesson(id));
    const totals = this.db.prepare('SELECT COUNT(*) AS n, COALESCE(SUM(correct), 0) AS c FROM attempts').get() as { n: number; c: number };
    const last = this.db.prepare("SELECT lesson_id FROM attempts WHERE source = 'lesson' ORDER BY id DESC LIMIT 1").get() as { lesson_id: string } | undefined;
    const nextLessonId = existing.find((id) => lessons[id]?.status !== 'completed') ?? null;
    const session = this.sessions.current();
    const srsTotal = (this.db.prepare('SELECT COUNT(*) AS n FROM srs_cards WHERE suspended = 0').get() as { n: number }).n;
    const srsDue = (this.db.prepare('SELECT COUNT(*) AS n FROM srs_cards WHERE suspended = 0 AND due_session <= ?').get(Math.max(session, 1)) as { n: number }).n;
    return {
      lessons,
      exercises: this.exercises(),
      totals: {
        // only lessons that exist in the content count (stale/unknown ids are ignored)
        lessonsCompleted: existing.filter((id) => lessons[id]?.status === 'completed').length,
        lessonsTotal: order.length,
        attempts: totals.n,
        accuracy: totals.n ? totals.c / totals.n : 0,
        streakDays: this.streakDays(),
      },
      lastLessonId: last && this.content.hasLesson(last.lesson_id) ? last.lesson_id : null,
      nextLessonId,
      srs: { due: srsDue, total: srsTotal, session },
    };
  }

  /** Consecutive days (ending today or yesterday) with at least one attempt. */
  streakDays(today = new Date()): number {
    const rows = this.db.prepare('SELECT DISTINCT substr(created_at, 1, 10) AS d FROM attempts ORDER BY d DESC LIMIT 400').all() as { d: string }[];
    const days = new Set(rows.map((r) => r.d));
    const dayStr = (d: Date) => d.toISOString().slice(0, 10);
    const cur = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
    if (!days.has(dayStr(cur))) cur.setUTCDate(cur.getUTCDate() - 1);
    let n = 0;
    while (days.has(dayStr(cur))) {
      n++;
      cur.setUTCDate(cur.getUTCDate() - 1);
    }
    return n;
  }
}
