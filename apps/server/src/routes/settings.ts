import { Hono } from 'hono';
import { DEFAULT_SETTINGS, isInstrumentId, isNoteName, isPianoSound, isThemePref, type Settings } from '@music/core';
import type { Db } from '../db.js';
import { badRequest, jsonBody } from '../http.js';

type Validator = (v: unknown) => boolean;
const VALIDATORS: Record<keyof Settings, Validator> = {
  midiInput: (v) => typeof v === 'string' && v.length > 0 && v.length < 300,
  keyboardRange: (v) => Array.isArray(v) && v.length === 2 && v.every((n) => typeof n === 'string' && isNoteName(n, true)),
  volume: (v) => typeof v === 'number' && v >= 0 && v <= 1,
  liveInstrument: (v) => isInstrumentId(v),
  keyLabels: (v) => v === 'names' || v === 'degrees' || v === 'none',
  metronomeVolume: (v) => typeof v === 'number' && v >= 0 && v <= 1,
  qwertyOctave: (v) => typeof v === 'number' && Number.isInteger(v) && v >= 0 && v <= 8,
  theme: (v) => isThemePref(v),
  pianoSound: (v) => isPianoSound(v),
};

export function readSettings(db: Db): Settings {
  const rows = db.prepare('SELECT key, value FROM settings').all() as { key: string; value: string }[];
  const s: Record<string, unknown> = { ...DEFAULT_SETTINGS };
  for (const r of rows) {
    if (r.key in VALIDATORS) {
      try {
        const v = JSON.parse(r.value) as unknown;
        if (VALIDATORS[r.key as keyof Settings](v)) s[r.key] = v;
      } catch {
        /* ignore corrupt value */
      }
    }
  }
  return s as unknown as Settings;
}

export function settingsRoutes(db: Db): Hono {
  const r = new Hono();
  r.get('/', (c) => c.json(readSettings(db)));
  r.put('/', async (c) => {
    const b = await jsonBody(c.req);
    const entries = Object.entries(b);
    for (const [k, v] of entries) {
      const val = VALIDATORS[k as keyof Settings];
      if (!val) badRequest(`Unknown setting "${k}"`);
      if (!val(v)) badRequest(`Invalid value for "${k}"`);
    }
    const stmt = db.prepare('INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value');
    for (const [k, v] of entries) stmt.run(k, JSON.stringify(v));
    return c.json(readSettings(db));
  });
  return r;
}
