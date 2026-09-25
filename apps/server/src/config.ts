import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/** Repo root: apps/server/{src,dist}/config.* → ../../.. */
export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');

export interface ServerConfig {
  prod: boolean;
  host: string;
  port: number;
  contentDir: string;
  dataDir: string;
  dbFile: string;
  webDist: string;
  watch: boolean;
  /** Serve over HTTPS with a self-signed certificate (needed for Web MIDI on non-localhost addresses). */
  https: boolean;
}

export function loadConfig(env: NodeJS.ProcessEnv = process.env): ServerConfig {
  const prod = env.NODE_ENV === 'production';
  const dataDir = resolve(env.DATA_DIR ?? resolve(ROOT, 'data'));
  return {
    prod,
    host: env.HOST ?? '0.0.0.0',
    port: Number(env.PORT ?? (prod ? 24800 : 3001)),
    contentDir: resolve(env.CONTENT_DIR ?? resolve(ROOT, 'content')),
    dataDir,
    dbFile: env.DB_FILE ?? resolve(dataDir, 'app.db'),
    webDist: resolve(env.WEB_DIST ?? resolve(ROOT, 'apps/web/dist')),
    https: env.HTTPS === '1' || env.HTTPS === 'true',
    watch: env.WATCH_CONTENT ? env.WATCH_CONTENT === '1' : !prod,
  };
}
