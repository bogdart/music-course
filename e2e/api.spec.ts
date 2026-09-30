/**
 * 9. API contract tests (Playwright `request`) for every route in docs/ARCHITECTURE.md "Server API",
 * including invalid input (must be 4xx with {error}, never 500) and projects CRUD.
 */
import type { APIRequestContext, APIResponse } from '@playwright/test';
import { test, expect } from './fixtures';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { curriculum, lessons } from './helpers/content';
import { ROOT } from './helpers/server';

test.use({ isolated: true });

async function expectError(res: APIResponse | Promise<APIResponse>, status: number) {
  const r = await res;
  expect(r.status(), `${r.url()} → ${r.status()} ${await r.text()}`).toBe(status);
  const body = await r.json();
  expect(typeof body.error).toBe('string');
  expect(body.error.length).toBeGreaterThan(0);
  return body.error as string;
}

const post = (api: APIRequestContext, url: string, data: unknown) => api.post(url, { data: data as object });
const raw = (api: APIRequestContext, method: 'post' | 'put', url: string, body: string) =>
  api[method](url, { data: body, headers: { 'content-type': 'application/json' } });

const firstEar = lessons().flatMap((l) => l.exercises.filter((e) => e.type.startsWith('ear-') && e.srs !== false).map((e) => ({ l, e })))[0]!;
const firstQuiz = lessons().flatMap((l) => l.exercises.filter((e) => e.type === 'quiz' && !e.srs).map((e) => ({ l, e })))[0]!;
const validAttempt = { lessonId: firstQuiz.l.id, exerciseId: firstQuiz.e.id, type: 'quiz', correct: true, score: 1, answer: 0, durationMs: 1234, itemIndex: 0 };

test.describe('content', () => {
  test('GET /api/health', async ({ api }) => {
    const r = await api.get('/api/health');
    expect(r.status()).toBe(200);
    expect(r.headers()['content-type']).toContain('application/json');
    // pianoSamples: whether the optional sampled piano is installed in the served web dist (BUG-01 fix: the client
    // reads this instead of probing /samples/piano/C4.mp3)
    const hasSamples = existsSync(join(ROOT, 'apps/web/dist/samples/piano/C4.mp3'));
    expect(await r.json()).toEqual({ ok: true, contentVersion: expect.any(Number), pianoSamples: hasSamples });
  });

  test('GET /api/content/curriculum: 5 phases, 52 weeks, every lesson exists', async ({ api }) => {
    const c = await (await api.get('/api/content/curriculum')).json();
    const src = curriculum();
    expect(c.phases).toHaveLength(5);
    expect(c.phases.map((p: { id: string }) => p.id)).toEqual(['p1', 'p2', 'p3', 'p4', 'p5']);
    expect(c.weeks).toHaveLength(52);
    expect(c.weeks.map((w: { week: number }) => w.week)).toEqual(Array.from({ length: 52 }, (_, i) => i + 1));
    const all = c.weeks.flatMap((w: { lessons: unknown[] }) => w.lessons);
    expect(all).toHaveLength(src.weeks.reduce((a, w) => a + w.lessons.length, 0));
    expect(all).toHaveLength(lessons().length);
    for (const l of all) {
      expect(l).toMatchObject({ id: expect.stringMatching(/^w\d{2}-l\d+-/), exists: true, title: expect.any(String), status: 'not-started' });
    }
    expect(c.problemCount).toBe(0);
    // phases cover weeks 1..52 contiguously
    let w = 1;
    for (const p of c.phases) {
      expect(p.weeks[0]).toBe(w);
      w = p.weeks[1] + 1;
    }
    expect(w).toBe(53);
  });

  test('GET /api/content/lessons/:id for every lesson: DTO shape, prev/next chain', async ({ api }) => {
    const ids = lessons().map((l) => l.id);
    let prev: string | null = null;
    for (const [i, id] of ids.entries()) {
      const r = await api.get(`/api/content/lessons/${id}`);
      expect(r.status(), id).toBe(200);
      const d = await r.json();
      expect(d.id).toBe(id);
      expect(d.frontmatter).toMatchObject({ id, title: expect.any(String), week: expect.any(Number), goals: expect.any(Array) });
      expect(typeof d.body).toBe('string');
      expect(d.body.startsWith('---')).toBe(false);
      expect(d.problems).toEqual([]);
      expect(d.blocks.every((b: { valid: boolean }) => b.valid), `${id} has invalid blocks`).toBe(true);
      expect(d.exercises.length).toBe(lessons()[i]!.exercises.length);
      expect(d.prev ?? null).toBe(prev);
      expect(d.next ?? null).toBe(ids[i + 1] ?? null);
      prev = id;
    }
  });

  test('unknown lesson → 404 JSON; assets: missing file and path traversal → 404', async ({ api }) => {
    await expectError(api.get('/api/content/lessons/w99-l1-nope'), 404);
    await expectError(api.get(`/api/content/lessons/w99-l1-nope/assets/x.png`), 404);
    const id = lessons()[0]!.id;
    await expectError(api.get(`/api/content/lessons/${id}/assets/missing.png`), 404);
    await expectError(api.get(`/api/content/lessons/${id}/assets/..%2flesson.md`), 404);
    await expectError(api.get(`/api/content/lessons/${id}/assets/..%2f..%2f..%2fcurriculum.json`), 404);
    const r = await api.get(`/api/content/lessons/${id}/assets/%2e%2e/lesson.md`);
    expect(r.status()).toBe(404);
  });

  test('GET /api/content/glossary and /api/content/problems', async ({ api }) => {
    const g = await (await api.get('/api/content/glossary')).json();
    expect(g.terms.length).toBeGreaterThan(100);
    for (const t of g.terms) expect(t).toMatchObject({ term: expect.any(String), slug: expect.any(String), aliases: expect.any(Array), definition: expect.any(String) });
    expect(new Set(g.terms.map((t: { slug: string }) => t.slug)).size).toBe(g.terms.length);
    expect(await (await api.get('/api/content/problems')).json()).toEqual({ problems: [] });
  });

  test('unknown API routes and methods → 404 JSON (not the SPA)', async ({ api }) => {
    await expectError(api.get('/api/nope'), 404);
    await expectError(api.delete('/api/health'), 404);
    await expectError(api.post('/api/content/curriculum', { data: {} }), 404);
  });
});

test.describe('progress', () => {
  test('GET /api/progress on a fresh DB', async ({ api }) => {
    const p = await (await api.get('/api/progress')).json();
    expect(p).toMatchObject({
      lessons: {}, exercises: {}, lastLessonId: null, nextLessonId: lessons()[0]!.id,
      totals: { lessonsCompleted: 0, lessonsTotal: lessons().length, attempts: 0, accuracy: 0, streakDays: 0 },
      srs: { due: 0, total: 0, session: expect.any(Number) },
    });
  });

  test('POST /api/progress/attempts stores an attempt', async ({ api }) => {
    const r = await post(api, '/api/progress/attempts', validAttempt);
    expect(r.status()).toBe(201);
    expect(await r.json()).toEqual({ ok: true, id: expect.any(Number) });
    await post(api, '/api/progress/attempts', { ...validAttempt, correct: false, score: 0 });
    const p = await (await api.get('/api/progress')).json();
    expect(p.exercises[firstQuiz.l.id][firstQuiz.e.id]).toMatchObject({ attempts: 2, correct: 1, passed: false });
    expect(p.totals.attempts).toBe(2);
    expect(p.totals.accuracy).toBe(0.5);
    expect(p.totals.streakDays).toBe(1);
    expect(p.lastLessonId).toBe(firstQuiz.l.id);
    expect(p.lessons[firstQuiz.l.id].status).toBe('in-progress');
    // practice-source attempts count in totals but not in lesson exercise progress
    await post(api, '/api/progress/attempts', { ...validAttempt, source: 'practice' });
    const p2 = await (await api.get('/api/progress')).json();
    expect(p2.exercises[firstQuiz.l.id][firstQuiz.e.id].attempts).toBe(2);
    expect(p2.totals.attempts).toBe(3);
  });

  const badAttempts: [string, unknown][] = [
    ['missing lessonId', { ...validAttempt, lessonId: undefined }],
    ['empty exerciseId', { ...validAttempt, exerciseId: '' }],
    ['correct not boolean', { ...validAttempt, correct: 'yes' }],
    ['score > 1', { ...validAttempt, score: 1.5 }],
    ['score negative', { ...validAttempt, score: -0.1 }],
    ['score string', { ...validAttempt, score: '1' }],
    ['durationMs negative', { ...validAttempt, durationMs: -5 }],
    ['itemIndex string', { ...validAttempt, itemIndex: 'a' }],
    ['bad source', { ...validAttempt, source: 'hack' }],
    ['lessonId too long', { ...validAttempt, lessonId: 'x'.repeat(500) }],
    ['array body', [validAttempt]],
    ['null body', null],
  ];
  for (const [name, body] of badAttempts) {
    test(`POST /api/progress/attempts rejects ${name} with 400`, async ({ api }) => {
      await expectError(raw(api, 'post', '/api/progress/attempts', JSON.stringify(body)), 400);
    });
  }

  test('malformed JSON bodies → 400 on every POST/PUT route', async ({ api }) => {
    for (const [m, url] of [
      ['post', '/api/progress/attempts'], ['post', '/api/progress/exercises/complete'], ['post', '/api/srs/review'],
      ['post', '/api/projects'], ['put', '/api/projects/abc'], ['put', '/api/settings'],
    ] as const) {
      await expectError(raw(api, m, url, '{not json'), 400);
      await expectError(raw(api, m, url, '"a string"'), 400);
    }
  });

  test('POST /api/progress/exercises/complete: records best score, SRS card only for eligible exercises', async ({ api }) => {
    const r1 = await post(api, '/api/progress/exercises/complete', { lessonId: firstQuiz.l.id, exerciseId: firstQuiz.e.id, type: 'quiz', score: 0.5, passed: false, correct: 1, total: 2 });
    expect(r1.status()).toBe(200);
    expect(await r1.json()).toEqual({ ok: true, srsCardId: null });
    await post(api, '/api/progress/exercises/complete', { lessonId: firstQuiz.l.id, exerciseId: firstQuiz.e.id, type: 'quiz', score: 0.9, passed: true, correct: 9, total: 10 });
    await post(api, '/api/progress/exercises/complete', { lessonId: firstQuiz.l.id, exerciseId: firstQuiz.e.id, type: 'quiz', score: 0.2, passed: false, correct: 2, total: 10 });
    const p = await (await api.get('/api/progress')).json();
    expect(p.exercises[firstQuiz.l.id][firstQuiz.e.id]).toMatchObject({ bestScore: 0.9, lastScore: 0.2, passed: true });

    const r2 = await post(api, '/api/progress/exercises/complete', { lessonId: firstEar.l.id, exerciseId: firstEar.e.id, type: firstEar.e.type, score: 1, passed: true, correct: 10, total: 10 });
    const { srsCardId } = await r2.json();
    expect(srsCardId).toEqual(expect.any(Number));
    // idempotent: same card again
    const r3 = await post(api, '/api/progress/exercises/complete', { lessonId: firstEar.l.id, exerciseId: firstEar.e.id, type: firstEar.e.type, score: 1, passed: true, correct: 10, total: 10 });
    expect((await r3.json()).srsCardId).toBe(srsCardId);
    // unknown exercise: rejected since the BUG-05 fix (nothing stored, no card)
    const r4 = await post(api, '/api/progress/exercises/complete', { lessonId: firstEar.l.id, exerciseId: 'nope', type: 'ear-note', score: 1, passed: true, correct: 1, total: 1 });
    expect(r4.status()).toBe(404);
    expect((await (await api.get('/api/progress')).json()).exercises[firstEar.l.id]?.nope).toBeUndefined();

    for (const bad of [{}, { lessonId: 'a', exerciseId: 'b', type: 'quiz', score: 2, passed: true }, { lessonId: 'a', exerciseId: 'b', type: 'quiz', score: 1, passed: 'y' }]) {
      await expectError(post(api, '/api/progress/exercises/complete', bad), 400);
    }
  });

  test('POST /api/progress/lessons/:id/complete', async ({ api }) => {
    const id = lessons()[1]!.id;
    const r = await api.post(`/api/progress/lessons/${id}/complete`);
    expect(r.status()).toBe(200);
    expect(await r.json()).toMatchObject({ ok: true, lesson: { status: 'completed', completedAt: expect.any(String) } });
    // idempotent, completedAt kept
    const first = (await r.json()).lesson.completedAt;
    const again = await (await api.post(`/api/progress/lessons/${id}/complete`)).json();
    expect(again.lesson.completedAt).toBe(first);
    const p = await (await api.get('/api/progress')).json();
    expect(p.totals.lessonsCompleted).toBe(1);
    const cur = await (await api.get('/api/content/curriculum')).json();
    expect(cur.weeks.flatMap((w: { lessons: { id: string; status: string }[] }) => w.lessons).find((l: { id: string }) => l.id === id).status).toBe('completed');
  });

  test('completing an unknown lesson is rejected (404)', async ({ api }) => {
    // regression for BUG-05 (fixed) (docs/QA_REPORT.md#bug-05): any id is accepted and counted in totals.lessonsCompleted
    const before = (await (await api.get('/api/progress')).json()).totals.lessonsCompleted;
    const r = await api.post('/api/progress/lessons/not-a-real-lesson/complete');
    const after = (await (await api.get('/api/progress')).json()).totals.lessonsCompleted;
    expect(after, 'unknown lesson must not count as completed').toBe(before);
    expect(r.status()).toBe(404);
  });

  test('attempts for unknown lessons/exercises are rejected (404/400)', async ({ api }) => {
    // regression for BUG-05 (fixed): attempts for unknown lessons are stored and become lastLessonId (Dashboard "Continue" target)
    const r = await post(api, '/api/progress/attempts', { ...validAttempt, lessonId: 'w99-l9-ghost' });
    expect([400, 404]).toContain(r.status());
  });
});

test.describe('srs', () => {
  test('GET /api/srs/due and /api/srs/cards; limit is clamped', async ({ api }) => {
    const due = await (await api.get('/api/srs/due?limit=20')).json();
    expect(due).toMatchObject({ session: expect.any(Number), cards: expect.any(Array) });
    for (const q of ['limit=abc', 'limit=0', 'limit=-3', 'limit=100000', '']) {
      const r = await api.get(`/api/srs/due?${q}`);
      expect(r.status(), q).toBe(200);
    }
    const cards = await (await api.get('/api/srs/cards')).json();
    expect(cards).toMatchObject({ session: expect.any(Number), cards: expect.any(Array) });
    for (const c of cards.cards) {
      expect(c).toMatchObject({ id: expect.any(Number), key: expect.stringContaining(':'), type: expect.any(String), block: { id: expect.any(String), type: c.type } });
    }
  });

  test('POST /api/srs/review updates the card; invalid input → 400/404', async ({ api }) => {
    const r0 = await post(api, '/api/progress/exercises/complete', { lessonId: firstEar.l.id, exerciseId: firstEar.e.id, type: firstEar.e.type, score: 1, passed: true, correct: 10, total: 10 });
    const cardId = (await r0.json()).srsCardId as number;
    const r = await post(api, '/api/srs/review', { cardId, grade: 5 });
    expect(r.status()).toBe(200);
    const { card } = await r.json();
    expect(card).toMatchObject({ id: cardId, reps: 1, interval: 1 });
    const r2 = await (await post(api, '/api/srs/review', { cardId, grade: 1 })).json();
    expect(r2.card).toMatchObject({ reps: 0, lapses: 1, interval: 1 });
    await expectError(post(api, '/api/srs/review', { cardId: 999999, grade: 3 }), 404);
    await expectError(post(api, '/api/srs/review', { cardId, grade: 6 }), 400);
    await expectError(post(api, '/api/srs/review', { cardId, grade: -1 }), 400);
    await expectError(post(api, '/api/srs/review', { cardId: 'x', grade: 3 }), 400);
    await expectError(post(api, '/api/srs/review', { cardId: 0, grade: 3 }), 400);
    await expectError(post(api, '/api/srs/review', { grade: 3 }), 400);
  });
});

test.describe('projects CRUD', () => {
  const project = { name: 'E2E Song', bpm: 96, timeSig: { num: 3, den: 4 }, key: 'G', tracks: [{ id: 't1', name: 'Piano', instrument: 'piano', clips: [], volume: 0.8, pan: 0, mute: false, solo: false }] };

  test('create, read, list, update, delete', async ({ api }) => {
    expect(await (await api.get('/api/projects')).json()).toEqual([]);
    const c = await post(api, '/api/projects', project);
    expect(c.status()).toBe(201);
    const created = await c.json();
    expect(created).toMatchObject({ ...project, id: expect.any(String) });
    const id = created.id as string;
    expect(await (await api.get(`/api/projects/${id}`)).json()).toEqual(created);

    // defaults
    const d = await (await post(api, '/api/projects', { name: 'Minimal' })).json();
    expect(d).toMatchObject({ name: 'Minimal', bpm: 100, timeSig: { num: 4, den: 4 }, tracks: [] });

    const list = await (await api.get('/api/projects')).json();
    expect(list).toHaveLength(2);
    for (const s of list) expect(s).toEqual({ id: expect.any(String), name: expect.any(String), createdAt: expect.any(String), updatedAt: expect.any(String) });

    const u = await api.put(`/api/projects/${id}`, { data: { ...created, name: 'Renamed', bpm: 120 } });
    expect(u.status()).toBe(200);
    expect(await (await api.get(`/api/projects/${id}`)).json()).toMatchObject({ id, name: 'Renamed', bpm: 120 });
    const list2 = await (await api.get('/api/projects')).json();
    expect(list2[0]).toMatchObject({ id, name: 'Renamed' }); // most recently updated first

    // PUT with a new id creates (upsert)
    const up = await api.put('/api/projects/my-fixed-id', { data: { name: 'Upserted' } });
    expect(up.status()).toBe(200);
    expect(await (await api.get('/api/projects/my-fixed-id')).json()).toMatchObject({ id: 'my-fixed-id', name: 'Upserted' });

    // explicit id on POST, duplicate → 400
    const withId = await post(api, '/api/projects', { id: 'chosen', name: 'Chosen' });
    expect(withId.status()).toBe(201);
    await expectError(post(api, '/api/projects', { id: 'chosen', name: 'Again' }), 400);

    // the body id can't hijack another project
    await api.put(`/api/projects/${id}`, { data: { ...created, id: 'chosen', name: 'Hijack?' } });
    expect((await (await api.get('/api/projects/chosen')).json()).name).toBe('Chosen');

    const del = await api.delete(`/api/projects/${id}`);
    expect(del.status()).toBe(200);
    expect(await del.json()).toEqual({ ok: true });
    await expectError(api.get(`/api/projects/${id}`), 404);
    await expectError(api.delete(`/api/projects/${id}`), 404);
    // "open or create" lookup used by daw-task / ?project=: 200 null for a missing project, the project otherwise
    const q = await api.get(`/api/projects/${id}?ifExists=1`);
    expect(q.status()).toBe(200);
    expect(await q.json()).toBeNull();
    expect(await (await api.get('/api/projects/chosen?ifExists=1')).json()).toMatchObject({ id: 'chosen', name: 'Chosen' });
  });

  const bad: [string, unknown][] = [
    ['missing name', { bpm: 100 }],
    ['blank name', { name: '   ' }],
    ['name not string', { name: 42 }],
    ['bpm too low', { name: 'x', bpm: 5 }],
    ['bpm too high', { name: 'x', bpm: 1000 }],
    ['bpm string', { name: 'x', bpm: '120' }],
    ['tracks not array', { name: 'x', tracks: {} }],
  ];
  for (const [name, body] of bad) {
    test(`POST and PUT reject ${name} with 400`, async ({ api }) => {
      await expectError(post(api, '/api/projects', body), 400);
      await expectError(api.put('/api/projects/some-id', { data: body as object }), 400);
    });
  }

  test('oversized project (> 5 MB) → 400', async ({ api }) => {
    await expectError(post(api, '/api/projects', { name: 'big', blob: 'x'.repeat(5_100_000) }), 400);
  });
});

test.describe('settings', () => {
  test('GET defaults, partial PUT, persistence', async ({ api }) => {
    const s = await (await api.get('/api/settings')).json();
    expect(s).toEqual({ midiInput: 'all', keyboardRange: ['C3', 'C5'], volume: 0.8, liveInstrument: 'piano', keyLabels: 'names', metronomeVolume: 0.6, qwertyOctave: 4, theme: 'system', pianoSound: 'warm' });
    const r = await api.put('/api/settings', { data: { volume: 0.25, keyboardRange: ['A0', 'C8'], liveInstrument: 'epiano' } });
    expect(r.status()).toBe(200);
    expect(await r.json()).toMatchObject({ volume: 0.25, keyboardRange: ['A0', 'C8'], liveInstrument: 'epiano', keyLabels: 'names' });
    expect(await (await api.get('/api/settings')).json()).toMatchObject({ volume: 0.25, liveInstrument: 'epiano' });
    await api.put('/api/settings', { data: { volume: 0.8, keyboardRange: ['C3', 'C5'], liveInstrument: 'piano' } });
  });

  const bad: [string, unknown][] = [
    ['unknown key', { colourScheme: 'dark' }],
    ['bad theme', { theme: 'sepia' }],
    ['volume > 1', { volume: 2 }],
    ['volume string', { volume: '0.5' }],
    ['bad instrument', { liveInstrument: 'kazoo' }],
    ['bad keyLabels', { keyLabels: 'colors' }],
    ['keyboardRange with one note', { keyboardRange: ['C3'] }],
    ['keyboardRange with invalid note', { keyboardRange: ['H3', 'C5'] }],
    ['keyboardRange without octave', { keyboardRange: ['C', 'G'] }],
    ['qwertyOctave float', { qwertyOctave: 3.5 }],
    ['qwertyOctave too high', { qwertyOctave: 9 }],
    ['empty midiInput', { midiInput: '' }],
    ['metronomeVolume negative', { metronomeVolume: -1 }],
  ];
  for (const [name, body] of bad) {
    test(`PUT /api/settings rejects ${name} with 400 and changes nothing`, async ({ api }) => {
      const before = await (await api.get('/api/settings')).json();
      await expectError(api.put('/api/settings', { data: body as object }), 400);
      expect(await (await api.get('/api/settings')).json()).toEqual(before);
    });
  }

  test('a PUT with one invalid key does not apply the valid ones', async ({ api }) => {
    const before = await (await api.get('/api/settings')).json();
    await expectError(api.put('/api/settings', { data: { volume: 0.1, keyLabels: 'bogus' } }), 400);
    expect(await (await api.get('/api/settings')).json()).toEqual(before);
  });
});
