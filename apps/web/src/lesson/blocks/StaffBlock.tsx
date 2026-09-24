import { useMemo } from 'react';
import { parseSeqDetailed, snippetFromEnvelope } from '@music/core';
import { Staff } from '../../components/Staff/Staff';
import { usePlayback } from './usePlayback';

export interface StaffData {
  clef?: 'treble' | 'bass';
  key?: string;
  timeSig?: string;
  seq: string;
  bpm?: number;
  caption?: string;
}

export function StaffBlock({ data }: { data: StaffData }) {
  const { playing, current, start, stop } = usePlayback();
  const items = useMemo(() => parseSeqDetailed(data.seq, { timeSig: data.timeSig ?? '4/4' }).items, [data.seq, data.timeSig]);
  const highlight = current ? (items.find((it) => it.startTick === current.ev.startTick && it.kind !== 'rest')?.index ?? null) : null;
  const snippet = useMemo(
    () => snippetFromEnvelope({ bpm: data.bpm ?? 80, timeSig: data.timeSig ?? '4/4', ...(data.key ? { key: data.key } : {}), tracks: [{ instrument: 'piano', seq: data.seq }] }),
    [data],
  );
  return (
    <figure className="card staff-block" data-testid="staff-block">
      <div className="example-head">
        <button type="button" className="btn play" onClick={() => (playing ? stop() : void start(snippet))}>
          {playing ? '■' : '▶'}
        </button>
        {data.caption && <figcaption className="small">{data.caption}</figcaption>}
      </div>
      <Staff seq={data.seq} clef={data.clef ?? 'auto'} timeSig={data.timeSig ?? '4/4'} {...(data.key ? { keySig: data.key } : {})} highlight={highlight} />
    </figure>
  );
}
