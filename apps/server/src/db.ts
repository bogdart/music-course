import { mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { DatabaseSync } from 'node:sqlite';

export type Db = DatabaseSync;

/** Ordered migrations. Never edit an applied migration — append a new one. */
export const MIGRATIONS: { version: number; name: string; sql: string }[] = [
  {
    version: 1,
    name: 'initial',
    sql: `
      CREATE TABLE meta (key TEXT PRIMARY KEY, value TEXT NOT NULL);
      CREATE TABLE attempts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        lesson_id TEXT NOT NULL,
        exercise_id TEXT NOT NULL,
        type TEXT NOT NULL,
        correct INTEGER NOT NULL,
        score REAL NOT NULL,
        answer TEXT,
        duration_ms INTEGER,
        item_index INTEGER,
        source TEXT NOT NULL DEFAULT 'lesson',
        session INTEGER NOT NULL,
        created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
      );
      CREATE INDEX attempts_lesson ON attempts(lesson_id, exercise_id);
      CREATE TABLE exercise_progress (
        lesson_id TEXT NOT NULL,
        exercise_id TEXT NOT NULL,
        type TEXT NOT NULL,
        attempts INTEGER NOT NULL DEFAULT 0,
        correct INTEGER NOT NULL DEFAULT 0,
        best_score REAL NOT NULL DEFAULT 0,
        last_score REAL,
        passed INTEGER NOT NULL DEFAULT 0,
        updated_at TEXT NOT NULL,
        PRIMARY KEY (lesson_id, exercise_id)
      );
      CREATE TABLE lesson_progress (
        lesson_id TEXT PRIMARY KEY,
        status TEXT NOT NULL,
        best_score REAL,
        completed_at TEXT,
        updated_at TEXT NOT NULL
      );
      CREATE TABLE srs_cards (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        key TEXT NOT NULL UNIQUE,
        type TEXT NOT NULL,
        lesson_id TEXT NOT NULL,
        exercise_id TEXT NOT NULL,
        block TEXT NOT NULL,
        ease REAL NOT NULL,
        interval INTEGER NOT NULL,
        reps INTEGER NOT NULL,
        lapses INTEGER NOT NULL,
        due_session INTEGER NOT NULL,
        last_session INTEGER,
        suspended INTEGER NOT NULL DEFAULT 0,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );
      CREATE TABLE srs_reviews (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        card_id INTEGER NOT NULL REFERENCES srs_cards(id) ON DELETE CASCADE,
        grade INTEGER NOT NULL,
        session INTEGER NOT NULL,
        created_at TEXT NOT NULL
      );
      CREATE TABLE projects (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        data TEXT NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );
      CREATE TABLE settings (key TEXT PRIMARY KEY, value TEXT NOT NULL);
    `,
  },
  {
    version: 2,
    name: 'ladder-unlocks',
    sql: `
      CREATE TABLE ladder_unlocks (skill TEXT PRIMARY KEY, unlocked INTEGER NOT NULL, updated_at TEXT NOT NULL);
    `,
  },
];

export function openDb(file: string): Db {
  if (file !== ':memory:') mkdirSync(dirname(file), { recursive: true });
  const db = new DatabaseSync(file);
  db.exec('PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON; PRAGMA busy_timeout = 3000;');
  migrate(db);
  return db;
}

export function migrate(db: Db): number {
  db.exec('CREATE TABLE IF NOT EXISTS schema_migrations (version INTEGER PRIMARY KEY, name TEXT NOT NULL, applied_at TEXT NOT NULL)');
  const row = db.prepare('SELECT MAX(version) AS v FROM schema_migrations').get() as { v: number | null };
  const current = row.v ?? 0;
  for (const m of MIGRATIONS) {
    if (m.version <= current) continue;
    db.exec('BEGIN');
    try {
      db.exec(m.sql);
      db.prepare('INSERT INTO schema_migrations (version, name, applied_at) VALUES (?, ?, ?)').run(m.version, m.name, new Date().toISOString());
      db.exec('COMMIT');
    } catch (e) {
      db.exec('ROLLBACK');
      throw e;
    }
  }
  return MIGRATIONS[MIGRATIONS.length - 1]?.version ?? 0;
}

export function nowIso(): string {
  return new Date().toISOString();
}

export function getMeta(db: Db, key: string): string | null {
  const r = db.prepare('SELECT value FROM meta WHERE key = ?').get(key) as { value: string } | undefined;
  return r?.value ?? null;
}

export function setMeta(db: Db, key: string, value: string): void {
  db.prepare('INSERT INTO meta (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value').run(key, value);
}
