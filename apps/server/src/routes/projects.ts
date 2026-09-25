import { randomUUID } from 'node:crypto';
import { Hono } from 'hono';
import type { ProjectSummaryDTO } from '@music/core';
import { nowIso, type Db } from '../db.js';
import { badRequest, jsonBody, notFound } from '../http.js';

interface Row { id: string; name: string; data: string; created_at: string; updated_at: string }

function checkProject(b: Record<string, unknown>): void {
  if (typeof b.name !== 'string' || !b.name.trim()) badRequest('"name" must be a non-empty string');
  if (b.bpm !== undefined && (typeof b.bpm !== 'number' || b.bpm < 20 || b.bpm > 400)) badRequest('"bpm" must be a number 20..400');
  if (b.tracks !== undefined && !Array.isArray(b.tracks)) badRequest('"tracks" must be an array');
  if (JSON.stringify(b).length > 5_000_000) badRequest('project too large');
}

export function projectRoutes(db: Db): Hono {
  const r = new Hono();

  r.get('/', (c) => {
    const rows = db.prepare('SELECT id, name, created_at, updated_at FROM projects ORDER BY updated_at DESC').all() as unknown as Row[];
    const list: ProjectSummaryDTO[] = rows.map((x) => ({ id: x.id, name: x.name, createdAt: x.created_at, updatedAt: x.updated_at }));
    return c.json(list);
  });

  r.get('/:id', (c) => {
    const row = db.prepare('SELECT * FROM projects WHERE id = ?').get(c.req.param('id')) as Row | undefined;
    // `?ifExists=1`: "open or create" lookups (daw-task, /daw?project=) get 200 null instead of a 404,
    // so a not-yet-created project does not log a failed request in the browser console
    if (!row && c.req.query('ifExists') !== undefined) return c.json(null);
    if (!row) notFound('Project not found');
    return c.json(JSON.parse(row.data));
  });

  r.post('/', async (c) => {
    const b = await jsonBody(c.req);
    checkProject(b);
    const id = typeof b.id === 'string' && b.id ? b.id : randomUUID();
    if (db.prepare('SELECT 1 FROM projects WHERE id = ?').get(id)) badRequest(`Project ${id} already exists (use PUT)`);
    const project = { bpm: 100, timeSig: { num: 4, den: 4 }, tracks: [], ...b, id };
    const now = nowIso();
    db.prepare('INSERT INTO projects (id, name, data, created_at, updated_at) VALUES (?, ?, ?, ?, ?)').run(id, String(b.name), JSON.stringify(project), now, now);
    return c.json(project, 201);
  });

  r.put('/:id', async (c) => {
    const id = c.req.param('id');
    const b = await jsonBody(c.req);
    checkProject(b);
    const project = { ...b, id };
    const now = nowIso();
    const exists = db.prepare('SELECT 1 FROM projects WHERE id = ?').get(id);
    if (exists) db.prepare('UPDATE projects SET name = ?, data = ?, updated_at = ? WHERE id = ?').run(String(b.name), JSON.stringify(project), now, id);
    else db.prepare('INSERT INTO projects (id, name, data, created_at, updated_at) VALUES (?, ?, ?, ?, ?)').run(id, String(b.name), JSON.stringify(project), now, now);
    return c.json(project);
  });

  r.delete('/:id', (c) => {
    const res = db.prepare('DELETE FROM projects WHERE id = ?').run(c.req.param('id'));
    if (res.changes === 0) notFound('Project not found');
    return c.json({ ok: true });
  });

  return r;
}
