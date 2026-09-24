import { useMemo } from 'react';
import { isInstrumentId, parseSeqDetailed, snippetFromEnvelope, type SnippetEnvelope } from '@music/core';
import { Keyboard } from '../../components/Keyboard/Keyboard';
import { Staff } from '../../components/Staff/Staff';
import { PianoRoll } from './PianoRoll';
import { usePlayback } from './usePlayback';

export interface ExampleData extends SnippetEnvelope {
  title?: string;
  show?: ('staff' | 'keyboard' | 'pianoroll')[];
  loop?: boolean;
  description?: string;
}

export function ExampleBlock({ data }: { data: ExampleData }) {
  const snippet = useMemo(() => snippetFromEnvelope({ ...data, tracks: data.tracks.filter((t) => isInstrumentId(t.instrument)) }), [data]);
  const { playing, sounding, current, start, stop } = usePlayback();
  const first = data.tracks.find((t) => t.instrument !== 'drums') ?? data.tracks[0];
  const firstIndex = first ? data.tracks.indexOf(first) : 0;
  const show = data.show ?? (first && first.instrument !== 'drums' ? ['staff'] : []);
  const items = useMemo(() => (first ? parseSeqDetailed(first.seq, { timeSig: data.timeSig ?? '4/4' }).items : []), [first, data.timeSig]);
  const highlight = current && current.track === firstIndex ? (items.find((it) => it.startTick === current.ev.startTick && it.kind !== 'rest')?.index ?? null) : null;
  const allMidis = snippet.tracks.filter((t) => t.instrument !== 'drums').flatMap((t) => t.events.map((e) => e.midi));
  const lo = allMidis.length ? Math.min(...allMidis) : 60;
  const hi = allMidis.length ? Math.max(...allMidis) : 72;

  return (
    <figure className="card example" data-testid="example-block">
      <div className="example-head">
        <button type="button" className="btn play" onClick={() => (playing ? stop() : void start(snippet, { loop: !!data.loop }))} aria-label={playing ? 'Stop' : 'Play'}>
          {playing ? '■ Stop' : '▶ Play'}
        </button>
        <figcaption>
          <strong>{data.title ?? 'Example'}</strong>
          <span className="muted small">
            {' '}
            · {snippet.bpm} bpm{data.key ? ` · ${data.key}` : ''} · {data.tracks.map((t) => t.instrument).join(' + ')}
            {data.loop ? ' · loop' : ''}
          </span>
        </figcaption>
      </div>
      {data.description && <p className="small">{data.description}</p>}
      {show.includes('staff') && first && first.instrument !== 'drums' && (
        <Staff seq={first.seq} timeSig={data.timeSig ?? '4/4'} {...(data.key ? { keySig: data.key } : {})} highlight={highlight} />
      )}
      {show.includes('pianoroll') && <PianoRoll snippet={snippet} sounding={sounding} />}
      {show.includes('keyboard') && (
        <Keyboard range={[Math.min(lo - (lo % 12), 60), Math.max(hi + (11 - (hi % 12)), 71)]} highlight={sounding} {...(data.key ? { keyName: data.key } : {})} height={130} />
      )}
    </figure>
  );
}
