import { memo, type ReactNode } from 'react';
import Markdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
import { api } from '../api/client';
import { LessonBlockView } from './blocks/LessonBlockView';
import { ChordChip, GlossaryTerm, NoteChip } from './InlineChips';
import { useLesson } from './LessonContext';
import { remarkLesson } from './remarkLesson';

interface HastLike {
  properties?: Record<string, unknown>;
}

function prop(node: unknown, name: string): string | undefined {
  const v = (node as HastLike | undefined)?.properties?.[name];
  return v === undefined || v === null ? undefined : String(v);
}

function classes(node: unknown): string[] {
  const c = (node as HastLike | undefined)?.properties?.className;
  return Array.isArray(c) ? c.map(String) : typeof c === 'string' ? c.split(' ') : [];
}

const LESSON_LINK = /(?:^|\/)(w\d{2}-l\d+-[a-z0-9-]+)\/?(?:lesson\.md)?(#.*)?$/;

function LessonImg({ src, alt, ...rest }: JSX.IntrinsicElements['img']) {
  const { lessonId } = useLesson();
  const s = typeof src === 'string' && !/^([a-z]+:|\/)/i.test(src) ? api.assetUrl(lessonId, src.replace(/^\.\//, '').replace(/^assets\//, '')) : src;
  return <img src={s} alt={alt ?? ''} loading="lazy" {...rest} />;
}

/**
 * react-markdown element overrides. Defined once at module level: a new `components` object per render would give
 * react-markdown new component types and remount the whole lesson body (resetting every exercise).
 */
const components: Components = {
  div({ node, children, ...rest }) {
    if (prop(node, 'dataMcBlock')) {
      return <LessonBlockView lang={prop(node, 'dataLang') ?? ''} index={Number(prop(node, 'dataIndex') ?? -1)} raw={prop(node, 'dataRaw') ?? ''} />;
    }
    return <div {...rest}>{children}</div>;
  },
  span({ node, children, ...rest }) {
    const cls = classes(node);
    if (cls.includes('mc-term')) return <GlossaryTerm term={prop(node, 'dataTerm') ?? ''}>{children as ReactNode}</GlossaryTerm>;
    if (cls.includes('mc-note')) return <NoteChip value={prop(node, 'dataValue') ?? ''} />;
    if (cls.includes('mc-chord')) return <ChordChip value={prop(node, 'dataValue') ?? ''} />;
    return <span {...rest}>{children}</span>;
  },
  a({ node: _node, href, children, ...rest }) {
    const m = href && !/^[a-z]+:/i.test(href) ? LESSON_LINK.exec(href) : null;
    if (m) return <Link to={`/lesson/${m[1]}${m[2] ?? ''}`}>{children}</Link>;
    const external = href && /^https?:/i.test(href);
    return (
      <a href={href} {...rest} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
        {children}
      </a>
    );
  },
  img({ node: _node, ...rest }) {
    return <LessonImg {...rest} />;
  },
  // the page header already has the lesson's <h1>; a body "# Title" becomes a section heading (one h1 per page)
  h1({ node: _node, children, ...rest }) {
    return <h2 {...rest}>{children}</h2>;
  },
  table({ node: _node, children, ...rest }) {
    return (
      <div className="table-wrap">
        <table {...rest}>{children}</table>
      </div>
    );
  },
};

const remarkPlugins = [remarkGfm, remarkLesson];

/** Markdown body of a lesson. Memoised on `body` so progress updates in the page never re-render/remount it. */
export const LessonRenderer = memo(function LessonRenderer({ body }: { body: string }) {
  return (
    <div className="lesson-body">
      <Markdown remarkPlugins={remarkPlugins} components={components}>
        {body}
      </Markdown>
    </div>
  );
});

export default LessonRenderer;
