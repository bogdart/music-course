/**
 * remark plugin for lesson markdown:
 *  - ```example|exercise|keyboard|staff|chords fenced blocks → <div data-mc-block data-lang data-index data-raw>
 *    (index counts interactive blocks in document order, matching LessonBlock.index from parseLesson)
 *  - [[term]] / [[term|label]] → <span class="mc-term" data-term>
 *  - {{note:C#4}} → <span class="mc-note" data-value>,  {{chord:Cmaj7}} → <span class="mc-chord" data-value>
 */
export const BLOCK_LANGS = ['example', 'exercise', 'keyboard', 'staff', 'chords', 'ladder'] as const;

interface MdNode {
  type: string;
  value?: string;
  lang?: string | null;
  children?: MdNode[];
  data?: { hName?: string; hProperties?: Record<string, unknown> };
}

const INLINE_RE = /\[\[([^\]|]+)(?:\|([^\]]*))?\]\]|\{\{\s*(note|chord)\s*:\s*([^}]+?)\s*\}\}/g;

function splitText(value: string): MdNode[] | null {
  INLINE_RE.lastIndex = 0;
  if (!INLINE_RE.test(value)) return null;
  INLINE_RE.lastIndex = 0;
  const out: MdNode[] = [];
  let last = 0;
  for (const m of value.matchAll(INLINE_RE)) {
    const start = m.index ?? 0;
    if (start > last) out.push({ type: 'text', value: value.slice(last, start) });
    if (m[1] !== undefined) {
      const term = m[1].trim();
      const label = (m[2] ?? term).trim() || term;
      out.push({ type: 'emphasis', data: { hName: 'span', hProperties: { className: ['mc-term'], dataTerm: term } }, children: [{ type: 'text', value: label }] });
    } else {
      const kind = m[3]!;
      const v = m[4]!.trim();
      out.push({ type: 'emphasis', data: { hName: 'span', hProperties: { className: [`mc-${kind}`], dataValue: v } }, children: [{ type: 'text', value: v }] });
    }
    last = start + m[0].length;
  }
  if (last < value.length) out.push({ type: 'text', value: value.slice(last) });
  return out;
}

export function remarkLesson() {
  return (tree: MdNode) => {
    let index = 0;
    const visit = (node: MdNode) => {
      const kids = node.children;
      if (!kids) return;
      for (let i = 0; i < kids.length; i++) {
        const c = kids[i]!;
        if (c.type === 'code' && c.lang && (BLOCK_LANGS as readonly string[]).includes(c.lang)) {
          kids[i] = {
            type: 'paragraph',
            children: [],
            data: { hName: 'div', hProperties: { dataMcBlock: 'true', dataLang: c.lang, dataIndex: String(index++), dataRaw: c.value ?? '' } },
          };
          continue;
        }
        if (c.type === 'text' && c.value) {
          const parts = splitText(c.value);
          if (parts) {
            kids.splice(i, 1, ...parts);
            i += parts.length - 1;
            continue;
          }
        }
        if (c.type !== 'code' && c.type !== 'inlineCode') visit(c);
      }
    };
    visit(tree);
  };
}
