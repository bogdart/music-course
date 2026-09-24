import { networkInterfaces } from 'node:os';
import { serve } from '@hono/node-server';
import { createApp } from './app.js';
import { loadConfig } from './config.js';
import { ContentStore } from './content.js';
import { openDb } from './db.js';

const cfg = loadConfig();
const db = openDb(cfg.dbFile);
const content = new ContentStore(cfg.contentDir);
if (cfg.watch) content.watch();
const app = createApp({ db, content, ...(cfg.prod ? { webDist: cfg.webDist } : {}) });

const server = serve({ fetch: app.fetch, hostname: cfg.host, port: cfg.port }, (info) => {
  const lan = Object.values(networkInterfaces())
    .flat()
    .filter((i) => i && i.family === 'IPv4' && !i.internal)
    .map((i) => `http://${i!.address}:${info.port}`);
  console.log(`[server] ${cfg.prod ? 'production' : 'development'} on http://${cfg.host}:${info.port}  db=${cfg.dbFile}`);
  if (cfg.prod && lan.length) console.log(`[server] LAN: ${lan.join('  ')}`);
});

const shutdown = () => {
  content.close();
  server.close(() => {
    db.close();
    process.exit(0);
  });
  setTimeout(() => process.exit(0), 2000).unref();
};
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
