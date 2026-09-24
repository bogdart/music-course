import type { ReactNode } from 'react';
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

export function LessonRenderer({ body }: { body: string }) {
  const { lessonId } = useLesson();
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
    img({ node: _node, src, alt, ...rest }) {
      const s = typeof src === 'string' && !/^([a-z]+:|\/)/i.test(src) ? api.assetUrl(lessonId, src.replace(/^\.\//, '').replace(/^assets\//, '')) : src;
      return <img src={s} alt={alt ?? ''} loading="lazy" {...rest} />;
    },
    table({ node: _node, children, ...rest }) {
      return (
        <div className="table-wrap">
          <table {...rest}>{children}</table>
        </div>
      );
    },
  };
  return (
    <div className="lesson-body">
      <Markdown remarkPlugins={[remarkGfm, remarkLesson]} components={components}>
        {body}
      </Markdown>
    </div>
  );
}

export default LessonRenderer;
