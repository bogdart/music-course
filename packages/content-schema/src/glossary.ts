import type { GlossaryTerm } from '@music/core';

export function slugifyTerm(term: string): string {
  return term
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9#♯♭+]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Parse glossary markdown. Supported forms:
 *   ## Term            (### also) — definition = following paragraphs until the next heading.
 *   ## Term (Alias, Other)  — parenthesised aliases.
 *   *Aliases: a, b* / "Also: a, b" line inside the definition.
 *   - **Term**: definition   /  **Term** — definition   (one-line entries)
 * A level-1 heading ("# Glossary") is ignored.
 */
export function parseGlossary(markdown: string): GlossaryTerm[] {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const out: GlossaryTerm[] = [];
  let cur: { term: string; aliases: string[]; body: string[] } | null = null;
  let inFence = false;
  const flush = () => {
    if (cur) out.push(makeTerm(cur.term, cur.aliases, cur.body.join('\n').trim()));
    cur = null;
  };
  for (const line of lines) {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    const h = !inFence ? /^(#{2,4})\s+(.+?)\s*#*\s*$/.exec(line) : null;
    if (h) {
      flush();
      const { term, aliases } = splitAliases(h[2]!.replace(/\*\*/g, '').trim());
      cur = { term, aliases, body: [] };
      continue;
    }
    if (!inFence && /^#\s/.test(line)) {
      flush();
      continue;
    }
    const one = !inFence && !cur ? /^\s*(?:[-*]\s+)?\*\*(.+?)\*\*\s*(?:\(([^)]*)\))?\s*[:—–-]\s*(.+)$/.exec(line) : null;
    if (one) {
      const { term, aliases } = splitAliases(one[1]!.trim());
      const extra = one[2] ? one[2].split(',').map((s) => s.trim()).filter(Boolean) : [];
      out.push(makeTerm(term, [...aliases, ...extra], one[3]!.trim()));
      continue;
    }
    if (cur) {
      const al = /^\s*[*_]?(?:aliases|also|a\.k\.a\.|aka)\s*:\s*(.+?)[*_]?\s*$/i.exec(line);
      if (al) {
        (cur as { aliases: string[] }).aliases.push(...al[1]!.split(',').map((s) => s.trim().replace(/[*_]/g, '')).filter(Boolean));
        continue;
      }
      (cur as { body: string[] }).body.push(line);
    }
  }
  flush();
  return out;
}

function splitAliases(heading: string): { term: string; aliases: string[] } {
  const m = /^(.*?)\s*\(([^)]+)\)\s*$/.exec(heading);
  if (!m || !m[1]) return { term: heading, aliases: [] };
  return { term: m[1].trim(), aliases: m[2]!.split(/[,/;]/).map((s) => s.trim()).filter(Boolean) };
}

function makeTerm(term: string, aliases: string[], definition: string): GlossaryTerm {
  return { term, slug: slugifyTerm(term), aliases: [...new Set(aliases)], definition };
}

export interface MergedGlossary {
  terms: GlossaryTerm[];
  duplicates: string[];
}

/** Merge glossary parts (glossary.md first, then fragments). First definition wins; duplicates reported. */
export function mergeGlossaries(parts: GlossaryTerm[][]): MergedGlossary {
  const bySlug = new Map<string, GlossaryTerm>();
  const duplicates: string[] = [];
  for (const part of parts) {
    for (const t of part) {
      if (!t.slug) continue;
      const existing = bySlug.get(t.slug);
      if (existing) {
        duplicates.push(t.term);
        existing.aliases = [...new Set([...existing.aliases, ...t.aliases])];
        if (!existing.definition && t.definition) existing.definition = t.definition;
      } else bySlug.set(t.slug, { ...t });
    }
  }
  const terms = [...bySlug.values()].sort((a, b) => a.term.localeCompare(b.term));
  return { terms, duplicates };
}

/** Build a lookup: slug of term or alias (also simple plural/singular forms) → term. */
export function glossaryIndex(terms: GlossaryTerm[]): Map<string, GlossaryTerm> {
  const idx = new Map<string, GlossaryTerm>();
  for (const t of terms) {
    for (const name of [t.term, ...t.aliases]) {
      const s = slugifyTerm(name);
      if (s && !idx.has(s)) idx.set(s, t);
    }
  }
  return idx;
}

/** Resolve `[[text]]` to a term (case-insensitive, tolerant of plurals). */
export function lookupTerm(index: Map<string, GlossaryTerm>, text: string): GlossaryTerm | undefined {
  const s = slugifyTerm(text);
  return index.get(s) ?? index.get(s.replace(/es$/, '')) ?? index.get(s.replace(/s$/, '')) ?? index.get(s + 's');
}
