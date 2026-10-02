import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { beforeEach, describe, expect, it } from 'vitest';
import type { CurriculumDTO, ParsedLessonDTO, ProgressSummaryDTO, Settings, SrsDueDTO } from '@music/core';
import { createApp } from '../src/app.js';
import { ContentStore } from '../src/content.js';
import { MIGRATIONS, migrate, openDb, type Db } from '../src/db.js';
import { Sessions } from '../src/session.js';

function contentFixture(): string {
  const dir = mkdtempSync(join(tmpdir(), 'srv-content-'));
  writeFileSync(join(dir, 'curriculum.json'), JSON.stringify({
    phases: [{ id: 'p1', title: 'Foundations', weeks: [1, 8], goal: 'g' }],
    weeks: [{ week: 1, title: 'Week 1', lessons: ['w01-l1-welcome', 'w01-l2-octaves', 'w01-l3-later'] }],
  }));
  writeFileSync(join(dir, 'glossary.md'), '# Glossary\n\n## Octave\nSame note name, double frequency.\n');
  const lesson = (id: string, order: number, body: string) => {
    mkdirSync(join(dir, 'lessons', id, 'assets'), { recursive: true });
    writeFileSync(join(dir, 'lessons', id, 'lesson.md'), `---\nid: ${id}\ntitle: Lesson ${order}\nweek: 1\norder: ${order}\nphase: p1\nduration_min: 30\ngoals: [g]\n---\n${body}`);
  };
  const ex = (o: object) => '```exercise\n' + JSON.stringify(o) + '\n```\n';
  lesson('w01-l1-welcome', 1, `# Hi\n\n${ex({ id: 'e1', type: 'ear-octave', spec: { notes: ['C'], octaves: [3, 4], mode: 'same-or-different' } })}${ex({ id: 'e2', type: 'quiz', spec: { questions: [{ q: 'a', choices: ['x', 'y'], answer: 0 }] } })}`);
  lesson('w01-l2-octaves', 2, `# Two\n\n${ex({ id: 'e1', type: 'play-notes', spec: { notes: ['C4'] } })}${ex({ id: 'e2', type: 'ear-note', spec: { key: 'C', degrees: [1, 3] } })}${ex({ id: 'r1', type: 'reflect', spec: { prompt: 'p' } })}\n\`\`\`ladder\n{ "skill": "degrees", "unlocks": 2 }\n\`\`\`\n`);
  writeFileSync(join(dir, 'lessons', 'w01-l1-welcome', 'assets', 'pic.svg'), '<svg/>');
  return dir;
}

let db: Db;
let now = 1_000_000;
let app: ReturnType<typeof createApp>;

const json = async <T>(res: Response | Promise<Response>): Promise<T> => (await res).json() as Promise<T>;
const post = (path: string, body: unknown, method = 'POST') => app.request(path, { method, body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' } });

beforeEach(() => {
  db = openDb(':memory:');
  const content = new ContentStore(contentFixture(), () => {});
  app = createApp({ db, content, sessions: new Sessions(db, () => now) });
});

describe('content API', () => {
  it('serves curriculum with lesson existence and status', async () => {
    const cur = await json<CurriculumDTO>(app.request('/api/content/curriculum'));
    expect(cur.phases[0]!.id).toBe('p1');
    expect(cur.weeks[0]!.lessons.map((l) => [l.id, l.exists, l.status])).toEqual([
      ['w01-l1-welcome', true, 'not-started'], ['w01-l2-octaves', true, 'not-started'], ['w01-l3-later', false, 'not-started'],
    ]);
    expect(cur.weeks[0]!.lessons[2]!.title).toBe('Later');
  });
  it('serves parsed lessons, assets and glossary', async () => {
    const l = await json<ParsedLessonDTO>(app.request('/api/content/lessons/w01-l1-welcome'));
    expect(l.exercises.map((e) => e.id)).toEqual(['e1', 'e2']);
    expect(l.next).toBe('w01-l2-octaves');
    expect(l.prev).toBeNull();
    expect('ast' in l).toBe(false);
    expect((await app.request('/api/content/lessons/w01-l3-later')).status).toBe(404);
    expect((await json<{ error: string }>(app.request('/api/content/lessons/w01-l3-later'))).error).toMatch(/not written yet/);
    const asset = await app.request('/api/content/lessons/w01-l1-welcome/assets/pic.svg');
    expect(asset.status).toBe(200);
    expect(asset.headers.get('content-type')).toBe('image/svg+xml');
    expect((await app.request('/api/content/lessons/w01-l1-welcome/assets/..%2F..%2Fcurriculum.json')).status).toBe(404);
    const g = await json<{ terms: { term: string }[] }>(app.request('/api/content/glossary'));
    expect(g.terms.map((t) => t.term)).toEqual(['Octave']);
  });
  it('404s unknown API routes as JSON', async () => {
    const r = await app.request('/api/nope');
    expect(r.status).toBe(404);
    expect(await r.json()).toHaveProperty('error');
  });
});

describe('progress + SRS', () => {
  it('records attempts, completes exercises (creating SRS cards) and lessons', async () => {
    const a = await post('/api/progress/attempts', { lessonId: 'w01-l1-welcome', exerciseId: 'e1', type: 'ear-octave', correct: true, score: 1, answer: 'same', durationMs: 1200, itemIndex: 0 });
    expect(a.status).toBe(201);
    expect((await post('/api/progress/attempts', { lessonId: 'x' })).status).toBe(400);
    // unknown lessons / exercises are rejected (QA BUG-05)
    const bad = { exerciseId: 'e1', type: 'quiz', correct: true, score: 1 };
    expect((await post('/api/progress/attempts', { ...bad, lessonId: 'w09-l9-nope' })).status).toBe(404);
    expect((await post('/api/progress/attempts', { ...bad, lessonId: 'w01-l1-welcome', exerciseId: 'nope' })).status).toBe(404);
    expect((await post('/api/progress/exercises/complete', { lessonId: 'w01-l1-welcome', exerciseId: 'zz', type: 'quiz', score: 1, passed: true, correct: 1, total: 1 })).status).toBe(404);
    expect((await post('/api/progress/lessons/w09-l9-nope/complete', {})).status).toBe(404);
    // a malformed body is a 400 even when the lesson is unknown too (body validated before the lookup)
    expect((await post('/api/progress/exercises/complete', { lessonId: 'w09-l9-nope', exerciseId: 'b', type: 'quiz', score: 2, passed: true })).status).toBe(400);
    expect((await post('/api/progress/attempts', { ...bad, lessonId: 'w09-l9-nope', score: 'x' })).status).toBe(400);
    const c1 = await json<{ srsCardId: number | null }>(post('/api/progress/exercises/complete', { lessonId: 'w01-l1-welcome', exerciseId: 'e1', type: 'ear-octave', score: 0.9, passed: true, correct: 9, total: 10 }));
    expect(c1.srsCardId).toBeGreaterThan(0);
    const c2 = await json<{ srsCardId: number | null }>(post('/api/progress/exercises/complete', { lessonId: 'w01-l1-welcome', exerciseId: 'e2', type: 'quiz', score: 1, passed: true, correct: 1, total: 1 }));
    expect(c2.srsCardId).toBeNull();
    let s = await json<ProgressSummaryDTO>(app.request('/api/progress'));
    expect(s.lessons['w01-l1-welcome']!.status).toBe('in-progress');
    expect(s.exercises['w01-l1-welcome']!.e1).toMatchObject({ attempts: 1, correct: 1, bestScore: 0.9, passed: true });
    expect(s.totals).toMatchObject({ attempts: 1, accuracy: 1, lessonsTotal: 3, streakDays: 1 });
    expect(s.lastLessonId).toBe('w01-l1-welcome');
    expect(s.nextLessonId).toBe('w01-l1-welcome');
    expect(s.srs.total).toBe(1);
    await post('/api/progress/lessons/w01-l1-welcome/complete', {});
    s = await json<ProgressSummaryDTO>(app.request('/api/progress'));
    expect(s.lessons['w01-l1-welcome']).toMatchObject({ status: 'completed', bestScore: 0.95 });
    expect(s.nextLessonId).toBe('w01-l2-octaves');
    const cur = await json<CurriculumDTO>(app.request('/api/content/curriculum'));
    expect(cur.weeks[0]!.lessons[0]!.status).toBe('completed');
  });

  it('schedules SRS cards by session', async () => {
    await post('/api/progress/exercises/complete', { lessonId: 'w01-l1-welcome', exerciseId: 'e1', type: 'ear-octave', score: 1, passed: true, correct: 1, total: 1 });
    let due = await json<SrsDueDTO>(app.request('/api/srs/due'));
    expect(due.cards).toHaveLength(0); // due next session
    now += 3 * 3600_000; // new session
    due = await json<SrsDueDTO>(app.request('/api/srs/due?limit=5'));
    expect(due.cards).toHaveLength(1);
    const card = due.cards[0]!;
    expect(card.block.type).toBe('ear-octave');
    const rev = await json<{ card: { interval: number; dueSession: number } }>(post('/api/srs/review', { cardId: card.id, grade: 5 }));
    expect(rev.card.interval).toBe(1);
    expect(rev.card.dueSession).toBe(due.session + 1);
    expect((await json<SrsDueDTO>(app.request('/api/srs/due'))).cards).toHaveLength(0);
    expect((await post('/api/srs/review', { cardId: 999, grade: 3 })).status).toBe(404);
    expect((await post('/api/srs/review', { cardId: card.id, grade: 9 })).status).toBe(400);
  });
});

describe('health', () => {
  it('reports whether piano samples are installed', async () => {
    expect(await json(app.request('/api/health'))).toMatchObject({ ok: true, pianoSamples: false });
    const dir = mkdtempSync(join(tmpdir(), 'samples-'));
    writeFileSync(join(dir, 'C4.mp3'), '');
    const withSamples = createApp({ db, content: new ContentStore(contentFixture(), () => {}), pianoSampleDirs: [dir] });
    expect(await json(withSamples.request('/api/health'))).toMatchObject({ pianoSamples: true });
  });
});

describe('SRS sessions with new cards and the journal', () => {
  it('interleaves new cards (never reviewed) with due reviews, limited by newLimit', async () => {
    await post('/api/progress/exercises/complete', { lessonId: 'w01-l1-welcome', exerciseId: 'e1', type: 'ear-octave', score: 1, passed: true, correct: 1, total: 1 });
    now += 3 * 3600_000;
    let due = await json<SrsDueDTO>(app.request('/api/srs/due'));
    await post('/api/srs/review', { cardId: due.cards[0]!.id, grade: 5 });
    now += 3 * 3600_000; // review card due again (interval 1)
    // a brand-new card, created this session (not yet due by schedule)
    await post('/api/progress/exercises/complete', { lessonId: 'w01-l2-octaves', exerciseId: 'e2', type: 'ear-note', score: 1, passed: true, correct: 1, total: 1 });
    due = await json<SrsDueDTO>(app.request('/api/srs/due'));
    expect(due.cards.map((c) => c.exerciseId)).toEqual(['e1']);
    due = await json<SrsDueDTO>(app.request('/api/srs/due?limit=10&newLimit=2'));
    expect(due.cards.map((c) => `${c.lessonId}/${c.exerciseId}`).sort()).toEqual(['w01-l1-welcome/e1', 'w01-l2-octaves/e2']);
    due = await json<SrsDueDTO>(app.request('/api/srs/due?limit=10&newLimit=0'));
    expect(due.cards).toHaveLength(1);
  });

  it('cards follow content changes and drop removed exercises', async () => {
    const c = await json<{ srsCardId: number }>(post('/api/progress/exercises/complete', { lessonId: 'w01-l1-welcome', exerciseId: 'e1', type: 'ear-octave', score: 1, passed: true, correct: 1, total: 1 }));
    // simulate a card made from an older version of the exercise, plus one whose exercise no longer exists
    const oldBlock = JSON.stringify({ id: 'e1', type: 'ear-octave', spec: { notes: ['C', 'G'], octaves: [3, 5], mode: 'same-or-different' } });
    db.prepare('UPDATE srs_cards SET key = ?, block = ? WHERE id = ?').run('ear-octave:old', oldBlock, c.srsCardId);
    db.prepare(`INSERT INTO srs_cards (key, type, lesson_id, exercise_id, block, ease, interval, reps, lapses, due_session, last_session, created_at, updated_at)
      SELECT 'ear-octave:gone', type, lesson_id, 'gone', block, ease, interval, reps, lapses, due_session, last_session, created_at, updated_at FROM srs_cards WHERE id = ?`).run(c.srsCardId);
    now += 3 * 3600_000;
    const due = await json<SrsDueDTO>(app.request('/api/srs/due?limit=10&newLimit=5'));
    expect(due.cards.map((x) => x.exerciseId)).toEqual(['e1']);
    expect(due.cards[0]!.block.spec).toMatchObject({ notes: ['C'], octaves: [3, 4] });
    // completing the new version again updates the existing card instead of adding a second one
    const again = await json<{ srsCardId: number }>(post('/api/progress/exercises/complete', { lessonId: 'w01-l1-welcome', exerciseId: 'e1', type: 'ear-octave', score: 1, passed: true, correct: 1, total: 1 }));
    expect(again.srsCardId).toBe(c.srsCardId);
    expect((db.prepare("SELECT COUNT(*) AS n FROM srs_cards WHERE exercise_id = 'e1'").get() as { n: number }).n).toBe(1);
  });

  it('lists attempts of an exercise (reflect journal), newest first', async () => {
    await post('/api/progress/attempts', { lessonId: 'w01-l2-octaves', exerciseId: 'r1', type: 'reflect', correct: true, score: 1, answer: 'first thoughts' });
    await post('/api/progress/attempts', { lessonId: 'w01-l2-octaves', exerciseId: 'r1', type: 'reflect', correct: true, score: 1, answer: 'second thoughts' });
    const list = await json<{ answer: unknown; type: string }[]>(app.request('/api/progress/attempts?lessonId=w01-l2-octaves&exerciseId=r1&limit=5'));
    expect(list.map((a) => a.answer)).toEqual(['second thoughts', 'first thoughts']);
    expect((await app.request('/api/progress/attempts?lessonId=x')).status).toBe(400);
  });
});

describe('projects', () => {
  it('CRUD', async () => {
    const created = await json<{ id: string; bpm: number }>(post('/api/projects', { name: 'Song 1', tracks: [] }));
    expect(created.id).toBeTruthy();
    expect(created.bpm).toBe(100);
    expect((await json<unknown[]>(app.request('/api/projects')))).toHaveLength(1);
    await post(`/api/projects/${created.id}`, { name: 'Renamed', bpm: 120, timeSig: { num: 3, den: 4 }, tracks: [] }, 'PUT');
    expect(await json(app.request(`/api/projects/${created.id}`))).toMatchObject({ name: 'Renamed', bpm: 120 });
    expect((await post('/api/projects', { tracks: [] })).status).toBe(400);
    expect((await app.request(`/api/projects/${created.id}`, { method: 'DELETE' })).status).toBe(200);
    expect((await app.request(`/api/projects/${created.id}`)).status).toBe(404);
    // "open or create" lookup: 200 null instead of a 404 (no failed request in the browser console)
    const missing = await app.request(`/api/projects/${created.id}?ifExists=1`);
    expect(missing.status).toBe(200);
    expect(await missing.json()).toBeNull();
    const again = await json<{ id: string }>(post('/api/projects', { name: 'Song 2', tracks: [] }));
    expect(await json(app.request(`/api/projects/${again.id}?ifExists=1`))).toMatchObject({ name: 'Song 2' });
  });
});

describe('settings', () => {
  it('returns defaults and validates updates', async () => {
    const s = await json<Settings>(app.request('/api/settings'));
    expect(s).toMatchObject({ midiInput: 'all', liveInstrument: 'piano' });
    const u = await json<Settings>(post('/api/settings', { volume: 0.5, keyboardRange: ['C2', 'C6'], liveInstrument: 'epiano' }, 'PUT'));
    expect(u).toMatchObject({ volume: 0.5, keyboardRange: ['C2', 'C6'], liveInstrument: 'epiano' });
    expect((await post('/api/settings', { volume: 2 }, 'PUT')).status).toBe(400);
    expect((await post('/api/settings', { bogus: 1 }, 'PUT')).status).toBe(400);
    expect((await post('/api/settings', { liveInstrument: 'banjo' }, 'PUT')).status).toBe(400);
  });
  it('stores the theme preference (default system)', async () => {
    expect(await json<Settings>(app.request('/api/settings'))).toMatchObject({ theme: 'system' });
    expect(await json<Settings>(post('/api/settings', { theme: 'light' }, 'PUT'))).toMatchObject({ theme: 'light' });
    expect(await json<Settings>(app.request('/api/settings'))).toMatchObject({ theme: 'light' });
    expect((await post('/api/settings', { theme: 'sepia' }, 'PUT')).status).toBe(400);
    await post('/api/settings', { theme: 'system' }, 'PUT');
  });
  it('stores the piano sound (default warm)', async () => {
    expect(await json<Settings>(app.request('/api/settings'))).toMatchObject({ pianoSound: 'warm' });
    expect(await json<Settings>(post('/api/settings', { pianoSound: 'grand' }, 'PUT'))).toMatchObject({ pianoSound: 'grand' });
    expect((await post('/api/settings', { pianoSound: 'harpsichord' }, 'PUT')).status).toBe(400);
    await post('/api/settings', { pianoSound: 'warm' }, 'PUT');
  });
});

describe('db', () => {
  it('migrations are idempotent', () => {
    const v = (db.prepare('SELECT MAX(version) AS v FROM schema_migrations').get() as { v: number }).v;
    expect(v).toBe(MIGRATIONS[MIGRATIONS.length - 1]!.version);
    expect(migrate(db)).toBe(v);
  });
});

describe('ear ladders', () => {
  it('unlocks rungs, records ladder answers and computes mastery / the current rung', async () => {
    type L = { skills: { skill: string; unlocked: number; current: number | null; rungs: { mastered: boolean }[] }[] };
    let st = await json<L>(app.request('/api/ladder'));
    expect(st.skills.find((s) => s.skill === 'octave')).toMatchObject({ unlocked: 0, current: null });
    st = await json<L>(post('/api/ladder/unlock', { skill: 'octave', unlocks: 3 }));
    expect(st.skills.find((s) => s.skill === 'octave')).toMatchObject({ unlocked: 3, current: 1 });
    await post('/api/ladder/unlock', { skill: 'octave', unlocks: 2 }); // never lowered
    for (let i = 0; i < 20; i++) {
      const r = await post('/api/progress/attempts', { lessonId: 'ladder', exerciseId: 'octave-1', type: 'ear-octave', correct: true, score: 1, source: 'practice' });
      expect(r.status).toBe(201);
    }
    st = await json<L>(app.request('/api/ladder'));
    const oct = st.skills.find((s) => s.skill === 'octave')!;
    expect(oct).toMatchObject({ unlocked: 3, current: 2 });
    expect(oct.rungs[0]!.mastered).toBe(true);
    expect((await post('/api/progress/attempts', { lessonId: 'ladder', exerciseId: 'octave-99', type: 'ear-octave', correct: true, score: 1 })).status).toBe(404);
    expect((await post('/api/ladder/unlock', { skill: 'nope', unlocks: 1 })).status).toBe(400);
    // a lesson that was started counts as reached: its ladder blocks are open without rendering them
    await post('/api/progress/exercises/complete', { lessonId: 'w01-l2-octaves', exerciseId: 'e1', type: 'play-notes', score: 1, passed: true, correct: 1, total: 1 });
    st = await json<L>(app.request('/api/ladder'));
    expect(st.skills.find((s) => s.skill === 'degrees')).toMatchObject({ unlocked: 2, current: 1 });
    // ladder answers don't show up as a lesson
    const s = await json<ProgressSummaryDTO>(app.request('/api/progress'));
    expect(s.lastLessonId).toBeNull();
  });
});

describe('restart the course from a lesson', () => {
  it('resets that lesson and later ones, keeps history and ladder mastery, ignores older activity for "continue"', async () => {
    await post('/api/progress/attempts', { lessonId: 'w01-l2-octaves', exerciseId: 'e2', type: 'ear-note', correct: true, score: 1 });
    await post('/api/progress/exercises/complete', { lessonId: 'w01-l1-welcome', exerciseId: 'e1', type: 'ear-octave', score: 1, passed: true, correct: 1, total: 1 });
    await post('/api/progress/exercises/complete', { lessonId: 'w01-l2-octaves', exerciseId: 'e1', type: 'play-notes', score: 1, passed: true, correct: 1, total: 1 });
    await post('/api/progress/lessons/w01-l2-octaves/complete', {});
    await post('/api/progress/attempts', { lessonId: 'ladder', exerciseId: 'degrees-1', type: 'ear-note', correct: true, score: 1 });
    let p = await json<ProgressSummaryDTO>(app.request('/api/progress'));
    expect(p.lastLessonId).toBe('w01-l2-octaves');
    const r = await json<{ reset: number; lessonIds: string[] }>(post('/api/progress/restart', { fromLessonId: 'w01-l2-octaves' }));
    expect(r.lessonIds[0]).toBe('w01-l2-octaves');
    p = await json<ProgressSummaryDTO>(app.request('/api/progress'));
    expect(p.lessons['w01-l2-octaves']).toBeUndefined();
    expect(p.exercises['w01-l2-octaves']).toBeUndefined();
    expect(p.lessons['w01-l1-welcome']).toBeDefined(); // earlier lesson untouched
    expect(p.lastLessonId).toBeNull();
    expect(p.nextLessonId).toBe('w01-l1-welcome');
    expect(p.totals.attempts).toBe(2); // history kept
    const l = await json<{ skills: { skill: string; unlocked: number; rungs: { attempts: number }[] }[] }>(app.request('/api/ladder'));
    const deg = l.skills.find((s) => s.skill === 'degrees')!;
    expect(deg.unlocked).toBe(0); // the reset lesson no longer opens its ladder
    expect(deg.rungs[0]!.attempts).toBe(1); // mastery history kept
    expect((await post('/api/progress/restart', { fromLessonId: 'nope' })).status).toBe(404);
  });
});

describe('known rungs', () => {
  it('count as mastered from the start and can be taken back', async () => {
    type L = { skills: { skill: string; unlocked: number; current: number | null; rungs: { mastered: boolean }[] }[] };
    await post('/api/ladder/unlock', { skill: 'pitch', unlocks: 3 });
    let st = await json<L>(post('/api/ladder/known', { rungs: ['pitch-1', 'pitch-2'], note: 'shown in week 1' }));
    expect(st.skills.find((s) => s.skill === 'pitch')).toMatchObject({ current: 3 });
    st = await json<L>(post('/api/ladder/known', { rungs: ['pitch-2'], remove: true }));
    expect(st.skills.find((s) => s.skill === 'pitch')).toMatchObject({ current: 2 });
    expect((await post('/api/ladder/known', { rungs: ['nope-1'] })).status).toBe(400);
  });
});
