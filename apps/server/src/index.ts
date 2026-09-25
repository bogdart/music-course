import { createServer as createHttpsServer } from 'node:https';
import { networkInterfaces } from 'node:os';
import { ensureCert } from './tls.js';
import { serve } from '@hono/node-server';
import { createApp } from './app.js';
import { join, resolve } from 'node:path';
import { loadConfig, ROOT } from './config.js';
import { ContentStore } from './content.js';
import { openDb } from './db.js';

const cfg = loadConfig();
const db = openDb(cfg.dbFile);
const content = new ContentStore(cfg.contentDir);
if (cfg.watch) content.watch();
const app = createApp({
  db, content, ...(cfg.prod ? { webDist: cfg.webDist } : {}),
  pianoSampleDirs: cfg.prod ? [join(cfg.webDist, 'samples', 'piano')] : [resolve(ROOT, 'apps/web/public/samples/piano')],
});

const lanIps = Object.values(networkInterfaces())
  .flat()
  .filter((i) => i && i.family === 'IPv4' && !i.internal)
  .map((i) => i!.address);
const scheme = cfg.https ? 'https' : 'http';
const tls = cfg.https ? ensureCert(cfg.dataDir, lanIps) : null;
const server = serve({
  fetch: app.fetch, hostname: cfg.host, port: cfg.port,
  ...(tls ? { createServer: createHttpsServer, serverOptions: tls } : {}),
}, (info) => {
  const lan = lanIps.map((ip) => `${scheme}://${ip}:${info.port}`);
  console.log(`[server] ${cfg.prod ? 'production' : 'development'} on ${scheme}://${cfg.host}:${info.port}  db=${cfg.dbFile}`);
  if (cfg.prod && lan.length) console.log(`[server] LAN: ${lan.join('  ')}`);
  if (cfg.prod) {
    console.log(`[server] MIDI keyboard on this computer: open ${scheme}://localhost:${info.port}`);
    if (!cfg.https) console.log('[server] Web MIDI is blocked on plain-http LAN addresses; use `npm run start:https` for MIDI on other devices.');
    else console.log('[server] Self-signed certificate: accept the browser warning once per device.');
  }
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
