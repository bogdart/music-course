import { noteToMidi } from '@music/core';
import { Keyboard, type KeyRole } from '../../components/Keyboard/Keyboard';

export interface KeyboardData {
  range?: [string, string];
  highlight?: string[];
  labels?: 'names' | 'degrees' | 'none';
  key?: string;
  colors?: Record<string, KeyRole>;
  caption?: string;
}

export function KeyboardBlock({ data }: { data: KeyboardData }) {
  const hl: Record<number, KeyRole> = {};
  for (const n of data.highlight ?? []) hl[noteToMidi(n)] = 'other';
  for (const [n, role] of Object.entries(data.colors ?? {})) hl[noteToMidi(n)] = role;
  return (
    <figure className="card keyboard-block" data-testid="keyboard-block">
      <Keyboard range={data.range ?? ['C3', 'C5']} highlight={hl} labels={data.labels ?? 'names'} {...(data.key ? { keyName: data.key } : {})} height={150} />
      {data.caption && <figcaption className="small muted">{data.caption}</figcaption>}
    </figure>
  );
}
