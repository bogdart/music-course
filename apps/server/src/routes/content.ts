import { existsSync, readFileSync, statSync } from 'node:fs';
import { extname, join, normalize, sep } from 'node:path';
import { Hono } from 'hono';
import type { CurriculumDTO } from '@music/core';
import type { ContentStore } from '../content.js';
import { notFound } from '../http.js';
import type { ProgressService } from '../progress.js';

const MIME: Record<string, string> = {
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.mid': 'audio/midi', '.midi': 'audio/midi', '.mp3': 'audio/mpeg', '.wav': 'audio/wav',
  '.ogg': 'audio/ogg', '.json': 'application/json', '.txt': 'text/plain; charset=utf-8', '.pdf': 'application/pdf',
};

export function contentRoutes(content: ContentStore, progress: ProgressService): Hono {
  const r = new Hono();

  r.get('/curriculum', (c) => {
    const cur = content.content.curriculum;
    const lp = progress.allLessons();
    const dto: CurriculumDTO = {
      phases: content.phases,
      weeks: (cur?.weeks ?? []).map((w) => ({
        week: w.week,
        title: w.title,
        lessons: w.lessons.map((id) => {
          const l = content.content.lessons.get(id);
          const p = lp[id];
          return {
            id,
            exists: !!l,
            title: typeof l?.frontmatter.title === 'string' ? l.frontmatter.title : titleFromId(id),
            ...(typeof l?.frontmatter.order === 'number' ? { order: l.frontmatter.order } : {}),
            ...(typeof l?.frontmatter.duration_min === 'number' ? { duration_min: l.frontmatter.duration_min } : {}),
            status: p?.status ?? 'not-started',
            ...(p?.bestScore !== undefined ? { bestScore: p.bestScore } : {}),
          };
        }),
      })),
      problemCount: content.content.problems.filter((p) => p.severity === 'error').length,
    };
    return c.json(dto);
  });

  r.get('/lessons/:id', (c) => {
    const id = c.req.param('id');
    const l = content.lesson(id);
    if (!l) notFound(content.order.includes(id) ? `Lesson "${id}" is not written yet` : `Unknown lesson "${id}"`);
    const { dir: _dir, ...dto } = l;
    return c.json(dto);
  });

  r.get('/lessons/:id/assets/*', (c) => {
    const l = content.lesson(c.req.param('id'));
    if (!l) notFound();
    const rel = decodeURIComponent(c.req.path.split('/assets/').slice(1).join('/assets/'));
    const base = join(l.dir, 'assets');
    const file = normalize(join(base, rel));
    if (!file.startsWith(base + sep) || !existsSync(file) || !statSync(file).isFile()) notFound('Asset not found');
    return c.body(readFileSync(file), 200, { 'Content-Type': MIME[extname(file).toLowerCase()] ?? 'application/octet-stream' });
  });

  r.get('/glossary', (c) => c.json({ terms: content.glossary }));

  r.get('/problems', (c) => c.json({ problems: content.content.problems }));

  return r;
}

function titleFromId(id: string): string {
  const slug = id.replace(/^w\d{2}-l\d{1,2}-/, '');
  return slug.split('-').map((w, i) => (i === 0 ? w[0]!.toUpperCase() + w.slice(1) : w)).join(' ');
}
