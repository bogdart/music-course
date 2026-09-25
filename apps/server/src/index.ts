import { createServer as createHttpServer, type Server as HttpServer } from 'node:http';
import { createServer as createHttpsServer } from 'node:https';
import { createServer as createNetServer, type Server as NetServer } from 'node:net';
import { networkInterfaces } from 'node:os';
import { ensureCert } from './tls.js';
import { getRequestListener, serve } from '@hono/node-server';
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
const onListening = (port: number) => {
  const lan = lanIps.map((ip) => `${scheme}://${ip}:${port}`);
  console.log(`[server] ${cfg.prod ? 'production' : 'development'} on ${scheme}://${cfg.host}:${port}  db=${cfg.dbFile}`);
  if (cfg.prod && lan.length) console.log(`[server] LAN: ${lan.join('  ')}`);
  if (cfg.prod) {
    console.log(`[server] MIDI keyboard on this computer: open ${scheme}://localhost:${port}`);
    if (!cfg.https) console.log('[server] Web MIDI is blocked on plain-http LAN addresses; use `npm run start:https` for MIDI on other devices.');
    else console.log('[server] Self-signed certificate: accept the browser warning once per device. Plain http:// on this port redirects to https://.');
  }
};

let server: HttpServer | NetServer;
if (tls) {
  // One port, both protocols: phones often type/assume http://, which an HTTPS-only socket just drops
  // ("site can't be reached"). Peek at the first byte: 0x16 = TLS handshake → HTTPS app, else → redirect.
  const httpsServer = createHttpsServer(tls, getRequestListener(app.fetch));
  const redirectServer = createHttpServer((req, res) => {
    const host = (req.headers.host ?? `localhost:${cfg.port}`).replace(/^\[?([^\]]+)\]?$/, '$1');
    res.writeHead(308, { Location: `https://${host}${req.url ?? '/'}` });
    res.end();
  });
  server = createNetServer((socket) => {
    socket.once('readable', () => {
      const first: Buffer | null = socket.read(1);
      if (!first) return socket.destroy();
      socket.unshift(first);
      (first[0] === 0x16 ? httpsServer : redirectServer).emit('connection', socket);
    });
    socket.on('error', () => socket.destroy());
  });
  server.listen(cfg.port, cfg.host, () => onListening(cfg.port));
} else {
  server = serve({ fetch: app.fetch, hostname: cfg.host, port: cfg.port }, (info) => onListening(info.port)) as HttpServer;
}

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
