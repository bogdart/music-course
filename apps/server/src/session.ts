import { nextSessionNumber } from '@music/core';
import { getMeta, setMeta, type Db } from './db.js';

/**
 * Practice sessions (SRS intervals are counted in sessions). A new session starts after 2h of inactivity.
 * `touch()` is called on any learning activity (attempts, reviews, fetching due cards).
 */
export class Sessions {
  constructor(private readonly db: Db, private readonly now: () => number = Date.now, private readonly gapMs = 2 * 3600_000) {}

  current(): number {
    return Number(getMeta(this.db, 'session') ?? 0);
  }

  touch(): number {
    const cur = this.current();
    const last = getMeta(this.db, 'last_activity');
    const t = this.now();
    const next = nextSessionNumber(cur, last === null ? null : Number(last), t, this.gapMs);
    if (next !== cur) setMeta(this.db, 'session', String(next));
    setMeta(this.db, 'last_activity', String(t));
    return next;
  }
}
