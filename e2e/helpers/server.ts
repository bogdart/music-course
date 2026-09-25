/**
 * Spawns the production server (apps/server/dist/index.js, built by the webServer step) with its own
 * port + SQLite file. Used for per-file isolation and for restart/persistence/LAN tests.
 */
import { spawn, type ChildProcess } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { createServer } from 'node:net';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..', '..');

export function freePort(): Promise<number> {
  return new Promise((res, rej) => {
    const s = createServer();
    s.unref();
    s.on('error', rej);
    s.listen(0, '0.0.0.0', () => {
      const addr = s.address();
      const port = typeof addr === 'object' && addr ? addr.port : 0;
      s.close(() => res(port));
    });
  });
}

export interface ServerHandle {
  url: string;
  port: number;
  dbFile: string;
  host: string | null;
  /** stdout+stderr of the current process */
  logs: string[];
  /** Stop and start again; keeps the DB unless `freshDb` */
  restart(opts?: { freshDb?: boolean }): Promise<void>;
  stop(): Promise<void>;
}

/** `host: null` = don't set HOST at all (test the server's default binding). */
/** `https: true` starts `npm run start:https` mode (self-signed cert in the temp dir); `url` is then https. */
export async function startServer(opts: { host?: string | null; env?: Record<string, string>; https?: boolean } = {}): Promise<ServerHandle> {
  const dir = mkdtempSync(join(process.env.E2E_TMP ?? tmpdir(), 'srv-'));
  const port = await freePort();
  const host = opts.host === undefined ? '0.0.0.0' : opts.host;
  let n = 0;
  let proc: ChildProcess | null = null;
  const handle: ServerHandle = {
    url: `${opts.https ? 'https' : 'http'}://127.0.0.1:${port}`,
    port,
    host,
    dbFile: join(dir, `db-${n}.sqlite`),
    logs: [],
    async restart({ freshDb = false } = {}) {
      await handle.stop();
      if (freshDb) handle.dbFile = join(dir, `db-${++n}.sqlite`);
      await boot();
    },
    async stop() {
      const p = proc;
      proc = null;
      if (!p || p.exitCode !== null) return;
      await new Promise<void>((r) => {
        p.once('exit', () => r());
        p.kill('SIGTERM');
        setTimeout(() => p.kill('SIGKILL'), 4000).unref();
      });
    },
  };
  const boot = async () => {
    handle.logs = [];
    proc = spawn(process.execPath, [join(ROOT, 'apps/server/dist/index.js')], {
      cwd: ROOT,
      env: (() => {
        const env: Record<string, string | undefined> = { ...process.env, NODE_ENV: 'production', PORT: String(port), DB_FILE: handle.dbFile, WATCH_CONTENT: '0', ...(opts.https ? { HTTPS: '1', DATA_DIR: dir } : {}), ...opts.env };
        if (host === null) delete env.HOST;
        else env.HOST = host;
        return env;
      })(),
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    const p = proc;
    p.stdout!.on('data', (d) => handle.logs.push(String(d)));
    p.stderr!.on('data', (d) => handle.logs.push(String(d)));
    const deadline = Date.now() + 30_000;
    while (Date.now() < deadline) {
      if (p.exitCode !== null) throw new Error(`server exited early (${p.exitCode}):\n${handle.logs.join('')}`);
      try {
        // https mode: the self-signed cert fails Node's fetch, so probe the plain-http redirect instead
        const r = opts.https
          ? await fetch(`http://127.0.0.1:${port}/api/health`, { redirect: 'manual' })
          : await fetch(`${handle.url}/api/health`);
        if (opts.https ? r.status === 308 : r.ok) return;
      } catch {
        /* not up yet */
      }
      await new Promise((r) => setTimeout(r, 100));
    }
    throw new Error(`server did not start:\n${handle.logs.join('')}`);
  };
  await boot();
  process.once('exit', () => {
    try {
      proc?.kill('SIGKILL');
      rmSync(dir, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
  });
  return handle;
}
