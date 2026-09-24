---
id: w45-l1-drum-pattern-dictation
title: Drum Pattern Dictation
week: 45
order: 1
phase: p5
duration_min: 45
goals:
  - Transcribe a drum groove one layer at a time — kick, then snare/clap, then hats
  - Place syncopated kicks on a 16th-note grid by counting "1 e & a"
  - Rebuild a dictated groove in the DAW
prerequisites: [w44-l3-eight-bar-dictation]
tags: [transcription, drums, rhythm, groove, ear]
---

# Drum Pattern Dictation

Pass 6 is groove. Drums carry the genre: swap the drum pattern and the same chords turn from ballad into dance track. Luckily, drum patterns are short and repetitive — usually one or two bars — so one good loop gives you the whole verse.

## One layer per loop

A drum kit is at least three instruments playing at once. Don't try to hear all three. Loop one bar and listen three times:

1. **Kick** — the low thump. Tap it with your foot or left hand.
2. **Snare / clap** — the crack. In pop it's almost always on 2 and 4 (or only on 3 in half-time). Confirm, don't assume.
3. **Hats / ride** — the ticking top. Just decide the grid: eighths or sixteenths? Any open hat?

The kick is the only layer that really varies from song to song, so spend most of your time there.

## The 16th grid

Count every beat as four slots: **1 e & a, 2 e & a…** A syncopated kick lands on an "a" or an "&" instead of the beat. Speak the count out loud while the loop plays, and notice which syllable each kick hits.

```example
{
  "title": "Groove A — straight pop",
  "bpm": 96, "timeSig": "4/4",
  "tracks": [
    { "instrument": "drums", "seq": "kick:q r:q kick:8 kick:8 r:q | kick:q r:q kick:8 kick:8 r:q" },
    { "instrument": "drums", "seq": "r:q snare:q r:q snare:q | r:q snare:q r:q snare:q" },
    { "instrument": "drums", "seq": "hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 ohat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 ohat:8" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

```example
{
  "title": "Groove B — syncopated kick",
  "bpm": 90, "timeSig": "4/4",
  "tracks": [
    { "instrument": "drums", "seq": "kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q" },
    { "instrument": "drums", "seq": "r:q snare:q r:q snare:q | r:q snare:q r:q snare:q" },
    { "instrument": "drums", "seq": "hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 ohat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 ohat:8" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

```example
{
  "title": "Groove B — kick only, slowed to 70",
  "bpm": 70, "timeSig": "4/4",
  "tracks": [ { "instrument": "drums", "seq": "kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q" } ],
  "show": ["pianoroll"],
  "loop": true
}
```

In groove A the kick plays 1, 3 and the "&" of 3. In groove B it plays 1, the "a" of 1 (just before 2), and the "&" of 3. That one pushed kick before the snare is what makes it feel R&B rather than rock.

```exercise
{
  "id": "w45l1-listen",
  "type": "listen",
  "title": "Where are the kicks?",
  "spec": {
    "example": {
      "title": "Groove B",
      "bpm": 80, "timeSig": "4/4",
      "tracks": [ { "instrument": "drums", "seq": "kick:8. kick:16 r:q r:8 kick:8 r:q | kick:8. kick:16 r:q r:8 kick:8 r:q" }, { "instrument": "drums", "seq": "r:q snare:q r:q snare:q | r:q snare:q r:q snare:q" } ],
      "loop": true
    },
    "questions": [
      { "q": "Kick positions in groove B?", "choices": ["1 and 3", "1, a of 1, & of 3", "1, 2, 3, 4", "& of 2 and 4"], "answer": 1 },
      { "q": "Snare positions?", "choices": ["2 and 4", "3 only", "1 and 3", "Every eighth"], "answer": 0 },
      { "q": "Is this half-time?", "choices": ["Yes", "No — snare on 2 and 4"], "answer": 1 }
    ]
  }
}
```

```exercise
{
  "id": "w45l1-choose",
  "type": "ear-rhythm",
  "title": "Which 16th rhythm?",
  "count": 10,
  "passScore": 0.75,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "16", "rests": true, "answer": "choose" }
}
```

```exercise
{
  "id": "w45l1-tap16",
  "type": "ear-rhythm",
  "title": "Tap back 16th rhythms",
  "count": 8,
  "passScore": 0.7,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "16", "rests": true, "answer": "tap" }
}
```

```exercise
{
  "id": "w45l1-kick",
  "type": "rhythm-tap",
  "title": "Tap groove B's kick",
  "spec": { "bpm": 80, "timeSig": "4/4", "seq": "x:8. x:16 r:q r:8 x:8 r:q | x:8. x:16 r:q r:8 x:8 r:q", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "w45l1-read",
  "type": "read-rhythm",
  "title": "Read 16th rhythms",
  "count": 8,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "16" }
}
```

```exercise
{
  "id": "w45l1-daw",
  "type": "daw-task",
  "title": "Rebuild groove B",
  "spec": {
    "template": { "bpm": 90, "key": "C", "tracks": [ { "instrument": "drums", "seq": "" } ] },
    "task": "From your dictation, program 2 bars of groove B: kick, snare and hats on one drum track. Then change only the kick to make a third groove of your own, and describe its feel in the clip name.",
    "checks": [
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "kickOnBeats": [1], "snareOnBeats": [2, 4], "track": 0 },
      { "kind": "uses-rhythm", "values": ["16", "8"], "minDistinct": 2, "track": 0 },
      { "kind": "bars", "min": 2, "max": 4 }
    ],
    "minBars": 2, "maxBars": 4
  }
}
```
