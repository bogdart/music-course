import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { serveStatic } from '@hono/node-server/serve-static';
import type { ContentStore } from './content.js';
import type { Db } from './db.js';
import { ProgressService } from './progress.js';
import { contentRoutes } from './routes/content.js';
import { ladderRoutes } from './routes/ladder.js';
import { progressRoutes } from './routes/progress.js';
import { projectRoutes } from './routes/projects.js';
import { settingsRoutes } from './routes/settings.js';
import { srsRoutes } from './routes/srs.js';
import { Sessions } from './session.js';

export interface AppDeps {
  db: Db;
  content: ContentStore;
  sessions?: Sessions;
  /** Serve the built SPA from here (prod). */
  webDist?: string;
  /** Directories that may hold the optional sampled piano (`C4.mp3` …); reported by /api/health */
  pianoSampleDirs?: string[];
}

export function createApp(deps: AppDeps): Hono {
  const { db, content } = deps;
  const sessions = deps.sessions ?? new Sessions(db);
  const progress = new ProgressService(db, content, sessions);
  const app = new Hono();

  app.onError((err, c) => {
    if (err instanceof HTTPException) return c.json({ error: err.message }, err.status);
    console.error(err);
    return c.json({ error: 'Internal server error' }, 500);
  });

  const api = new Hono();
  // `pianoSamples` lets the web app load the sampled piano without probing a (404-ing) URL
  api.get('/health', (c) => c.json({ ok: true, contentVersion: content.version, pianoSamples: (deps.pianoSampleDirs ?? []).some((d) => existsSync(join(d, 'C4.mp3'))) }));
  api.route('/content', contentRoutes(content, progress));
  api.route('/progress', progressRoutes(progress));
  api.route('/srs', srsRoutes(db, content, sessions));
  api.route('/ladder', ladderRoutes(db, content, sessions));
  api.route('/projects', projectRoutes(db));
  api.route('/settings', settingsRoutes(db));
  api.all('*', (c) => c.json({ error: `No API route ${c.req.method} ${c.req.path}` }, 404));
  app.route('/api', api);

  if (deps.webDist && existsSync(join(deps.webDist, 'index.html'))) {
    // Re-read index.html when it changes: a rebuild renames the hashed assets, and a stale copy would
    // point deep links (/settings, /lesson/…) at files that no longer exist → blank page.
    const indexFile = join(deps.webDist, 'index.html');
    let cached = { mtime: 0, html: '' };
    const indexHtml = (): string => {
      const mtime = statSync(indexFile).mtimeMs;
      if (mtime !== cached.mtime) cached = { mtime, html: readFileSync(indexFile, 'utf8') };
      return cached.html;
    };
    app.use('/*', serveStatic({ root: deps.webDist }));
    // SPA fallback: client-side routes get index.html
    app.get('*', (c) => (/\.[a-z0-9]{2,5}$/i.test(c.req.path) ? c.text('Not found', 404) : c.html(indexHtml())));
  } else {
    app.get('/', (c) => c.text('Music Course API. Build the web app (npm run build) or use the Vite dev server on :5173.'));
  }
  return app;
}
