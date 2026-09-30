import type { Code, Heading, Root, RootContent } from 'mdast';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import YAML from 'yaml';
import type { BlockLang, ExerciseBlock, LessonBlock, LessonFrontmatter, LessonSection, ParsedLessonDTO } from '@music/core';
import { isNoteName, tryParseChordSymbol } from '@music/core';
import { BLOCK_LANGS, blockSchemas, formatIssues, frontmatterSchema, knownKeys, specSchemas } from './schemas.js';

export interface ParseLessonOptions {
  /** Expected id (folder name). Mismatch is reported as a problem. */
  id?: string;
}

export interface ParsedLesson extends ParsedLessonDTO {
  /** mdast of the body (positions relative to the body) */
  ast: Root;
  /** Non-fatal notices (unknown fields etc.) */
  warnings: string[];
  /** Line offset of the body within the file (front matter lines) */
  bodyLineOffset: number;
  /** Inline references found in the body */
  refs: InlineRefs;
}

export interface InlineRefs {
  terms: { term: string; line: number }[];
  notes: { note: string; line: number }[];
  chords: { chord: string; line: number }[];
}

const FM_RE = /^﻿?---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/;

export function splitFrontmatter(markdown: string): { yaml: string | null; body: string; bodyLineOffset: number } {
  const m = FM_RE.exec(markdown);
  if (!m) return { yaml: null, body: markdown, bodyLineOffset: 0 };
  const consumed = m[0];
  return { yaml: m[1]!, body: markdown.slice(consumed.length), bodyLineOffset: consumed.split('\n').length - 1 };
}

const processor = unified().use(remarkParse).use(remarkGfm);

export function parseMarkdown(body: string): Root {
  return processor.parse(body) as Root;
}

function isBlockLang(l: string | null | undefined): l is BlockLang {
  return !!l && (BLOCK_LANGS as string[]).includes(l);
}

function walk(nodes: RootContent[], fn: (n: RootContent) => void): void {
  for (const n of nodes) {
    fn(n);
    const children = (n as { children?: RootContent[] }).children;
    if (children) walk(children, fn);
  }
}

function headingText(h: Heading): string {
  let s = '';
  walk(h.children as RootContent[], (n) => {
    if (n.type === 'text' || n.type === 'inlineCode') s += n.value;
  });
  return s.trim();
}

/** Find `[[term]]`, `{{note:X}}`, `{{chord:X}}` in markdown text (outside fenced code). */
export function findInlineRefs(body: string, lineOffset = 0): InlineRefs {
  const refs: InlineRefs = { terms: [], notes: [], chords: [] };
  let inFence = false;
  body.split('\n').forEach((lineText, i) => {
    if (/^\s*(```|~~~)/.test(lineText)) {
      inFence = !inFence;
      return;
    }
    if (inFence) return;
    const line = i + 1 + lineOffset;
    for (const m of lineText.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)) refs.terms.push({ term: m[1]!.trim(), line });
    for (const m of lineText.matchAll(/\{\{\s*(note|chord)\s*:\s*([^}]+?)\s*\}\}/g)) {
      if (m[1] === 'note') refs.notes.push({ note: m[2]!, line });
      else refs.chords.push({ chord: m[2]!, line });
    }
  });
  return refs;
}

/**
 * Parse lesson.md: front matter (YAML), markdown body, interactive fenced blocks (validated),
 * sections by heading. Never throws on content errors — they are collected in `problems`.
 */
export function parseLesson(markdown: string, opts: ParseLessonOptions = {}): ParsedLesson {
  const problems: string[] = [];
  const warnings: string[] = [];
  const { yaml, body, bodyLineOffset } = splitFrontmatter(markdown);

  let fmRaw: Record<string, unknown> = {};
  if (yaml === null) problems.push('line 1: missing front matter (--- … ---)');
  else {
    try {
      const v = YAML.parse(yaml) as unknown;
      if (v && typeof v === 'object' && !Array.isArray(v)) fmRaw = v as Record<string, unknown>;
      else problems.push('front matter: expected a YAML mapping');
    } catch (e) {
      problems.push(`front matter: YAML error: ${(e as Error).message}`);
    }
  }
  const fm = frontmatterSchema.safeParse(fmRaw);
  if (!fm.success) {
    for (const m of formatIssues(fm.error)) {
      const hint = /expected string, received object/.test(m) ? ' (hint: quote YAML strings that contain ": ")' : '';
      problems.push(`front matter: ${m}${hint}`);
    }
  }
  const id = typeof fmRaw.id === 'string' ? fmRaw.id : (opts.id ?? '');
  if (opts.id && fmRaw.id !== undefined && fmRaw.id !== opts.id) problems.push(`front matter: id "${String(fmRaw.id)}" must equal folder name "${opts.id}"`);

  const ast = parseMarkdown(body);
  const blocks: LessonBlock[] = [];
  const exercises: ExerciseBlock[] = [];
  const sections: LessonSection[] = [];
  const exerciseIds = new Set<string>();
  let current: LessonSection | null = null;

  walk(ast.children, (node) => {
    if (node.type === 'heading') {
      current = { title: headingText(node), depth: node.depth, line: (node.position?.start.line ?? 0) + bodyLineOffset, blocks: [] };
      sections.push(current);
      return;
    }
    if (node.type !== 'code') return;
    const code = node as Code;
    const line = (code.position?.start.line ?? 0) + bodyLineOffset;
    if (!isBlockLang(code.lang)) {
      if (code.lang && /^(exercise|example|keyboard|staff|chords|ladder)\b/i.test(code.lang)) {
        problems.push(`line ${line}: fenced block language "${code.lang}" — use exactly one of ${BLOCK_LANGS.join(', ')}`);
      }
      return;
    }
    const lang = code.lang;
    const block: LessonBlock = { index: blocks.length, lang, data: null, raw: code.value, line, valid: false };
    try {
      block.data = JSON.parse(code.value);
    } catch (e) {
      block.error = `invalid JSON: ${(e as Error).message}`;
    }
    if (!block.error) {
      const r = blockSchemas[lang].safeParse(block.data);
      if (r.success) block.valid = true;
      else block.error = formatIssues(r.error).join('; ');
      warnUnknown(lang, block.data, line, warnings);
    }
    if (lang === 'exercise' && block.data && typeof block.data === 'object') {
      const exId = (block.data as { id?: unknown }).id;
      if (typeof exId === 'string') {
        if (exerciseIds.has(exId)) {
          block.valid = false;
          block.error = (block.error ? block.error + '; ' : '') + `duplicate exercise id "${exId}"`;
        }
        exerciseIds.add(exId);
      }
      if (block.valid) exercises.push(block.data as ExerciseBlock);
    }
    if (block.error) problems.push(`line ${line}: \`\`\`${lang}: ${block.error}`);
    blocks.push(block);
    (current as LessonSection | null)?.blocks.push(block.index);
  });

  const refs = findInlineRefs(body, bodyLineOffset);
  for (const n of refs.notes) {
    const clean = n.note.trim();
    if (!isNoteName(clean)) problems.push(`line ${n.line}: {{note:${n.note}}} is not a note name`);
  }
  for (const c of refs.chords) if (!tryParseChordSymbol(c.chord)) problems.push(`line ${c.line}: {{chord:${c.chord}}} is not a chord symbol`);

  return {
    id,
    frontmatter: fmRaw as unknown as LessonFrontmatter,
    body,
    blocks,
    exercises,
    sections,
    problems,
    warnings,
    ast,
    bodyLineOffset,
    refs,
  };
}

function warnUnknown(lang: BlockLang, data: unknown, line: number, warnings: string[]): void {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return;
  const d = data as Record<string, unknown>;
  const known = knownKeys(blockSchemas[lang]);
  if (known) {
    const unknown = Object.keys(d).filter((k) => !known.includes(k));
    if (unknown.length) warnings.push(`line ${line}: \`\`\`${lang}: unknown field(s) ${unknown.join(', ')} (ignored)`);
  }
  if (lang === 'exercise' && typeof d.type === 'string' && d.spec && typeof d.spec === 'object') {
    const specKnown = knownKeys((specSchemas as Record<string, unknown>)[d.type]);
    if (specKnown) {
      const unknown = Object.keys(d.spec as object).filter((k) => !specKnown.includes(k));
      if (unknown.length) warnings.push(`line ${line}: exercise "${String(d.id)}" (${d.type}): unknown spec field(s) ${unknown.join(', ')} (ignored)`);
    }
  }
}
