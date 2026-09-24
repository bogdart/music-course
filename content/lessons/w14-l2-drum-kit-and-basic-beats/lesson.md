---
id: w14-l2-drum-kit-and-basic-beats
title: The Drum Kit and Basic Beats
week: 14
order: 2
phase: p2
duration_min: 45
goals:
  - Know the job of kick, snare/clap and hi-hat in a groove
  - Tap and program a basic rock/pop beat with a backbeat on 2 and 4
  - Hear and tap straight versus swung eighths
prerequisites: [w14-l1-eighths-sixteenths-syncopation]
tags: [rhythm, drums, groove, swing, ear]
songs:
  - { title: "Billie Jean", composer: "Michael Jackson (1982)", public_domain: false }
---

# The Drum Kit and Basic Beats

A drum kit looks complicated, but a pop groove uses three sounds, each with one job:

- **Kick** (bass drum) — the low thump. It marks the strong beats and locks with the bass.
- **Snare** (or clap) — the sharp crack on beats **2 and 4**: the [[backbeat]]. It's what you clap along to at a concert.
- **Hi-hat** — the ticking cymbal that shows the subdivision: eighths or sixteenths.

Put them together and you have the most common beat in popular music.

```example
{
  "title": "Basic rock/pop beat: kick 1 & 3, snare 2 & 4, hi-hat eighths",
  "bpm": 100, "timeSig": "4/4", "loop": true,
  "tracks": [
    { "instrument": "drums", "seq": "hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8" },
    { "instrument": "drums", "seq": "kick:q r:q kick:q r:q" },
    { "instrument": "drums", "seq": "r:q snare:q r:q snare:q" }
  ],
  "show": ["pianoroll"]
}
```

Michael Jackson's *Billie Jean* (1982, about 117 BPM, F# minor) opens with almost exactly this: kick, snare on 2 and 4, steady eighth hats. Put it on and tap along — proof that a simple beat played perfectly is enough.

```exercise
{
  "id": "e1", "type": "rhythm-tap", "title": "Tap the backbeat",
  "instructions": "Tap only on 2 and 4 while counting 1-2-3-4 aloud. Feels odd at first — that's the point.",
  "count": 6, "passScore": 0.8,
  "spec": { "bpm": 100, "timeSig": "4/4", "seq": "r:q x:q r:q x:q | r:q x:q r:q x:q", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "e2", "type": "rhythm-tap", "title": "Tap the kick of a pop beat",
  "instructions": "Pop drummers often add a kick on the '&' of 2. Tap: 1, &-of-2, 3.",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 96, "timeSig": "4/4", "seq": "x:q r:8 x:8 x:q r:q", "showNotation": true, "countIn": 1, "loops": 4 }
}
```

```exercise
{
  "id": "e3", "type": "play-melody", "title": "Lock the bass to the kick",
  "instructions": "Left hand. Play the bass note exactly with each kick. Bass and kick together are the floor of every groove.",
  "count": 6, "passScore": 0.7,
  "spec": { "bpm": 96, "timeSig": "4/4", "key": "C", "seq": "C3:q r:8 C3:8 C3:q r:q | A2:q r:8 A2:8 A2:q r:q | F2:q r:8 F2:8 F2:q r:q | G2:q r:8 G2:8 G2:q r:q", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "drums", "seq": "kick:q r:8 kick:8 kick:q r:q | kick:q r:8 kick:8 kick:q r:q | kick:q r:8 kick:8 kick:q r:q | kick:q r:8 kick:8 kick:q r:q" } }
}
```

## Straight or swung?

So far every eighth note has been exactly half a beat: **straight** eighths. In jazz, blues, shuffle rock and a lot of hip-hop, eighths are played **long-short** instead: the first of each pair takes about two-thirds of the beat, the second one-third. That lilt is [[swing]]. Think of the difference between marching and skipping.

Swing isn't only for drums: once the hi-hat swings, the bass, chords and melody should swing too, or the parts will fight each other. In the DAW you'll write swung parts using triplets — a quarter-note triplet followed by an eighth-note triplet adds up to exactly one beat.

```example
{
  "title": "Straight eighths (2 bars), then swung eighths (2 bars)",
  "bpm": 100, "timeSig": "4/4",
  "tracks": [
    { "instrument": "drums", "seq": "hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | hihat:qt hihat:8t hihat:qt hihat:8t hihat:qt hihat:8t hihat:qt hihat:8t | hihat:qt hihat:8t hihat:qt hihat:8t hihat:qt hihat:8t hihat:qt hihat:8t" },
    { "instrument": "drums", "seq": "kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q | kick:q snare:q kick:q snare:q" }
  ],
  "show": ["pianoroll"]
}
```

```exercise
{
  "id": "e4", "type": "rhythm-tap", "title": "Tap a swung hi-hat",
  "instructions": "Long-short, long-short. Say 'doo-ba doo-ba'.",
  "count": 6, "passScore": 0.7,
  "spec": { "bpm": 90, "timeSig": "4/4", "seq": "x:qt x:8t x:qt x:8t x:qt x:8t x:qt x:8t", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "e5", "type": "ear-rhythm", "title": "Triplet feel",
  "instructions": "The swung feel is built on triplets. Choose the notation you heard.",
  "count": 8, "passScore": 0.7,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "8t", "rests": true, "answer": "choose" }
}
```

```exercise
{
  "id": "e6", "type": "quiz", "title": "Kit roles",
  "spec": { "questions": [
    { "q": "Which drum usually plays the backbeat?", "choices": ["Kick", "Snare or clap", "Hi-hat", "Crash"], "answer": 1 },
    { "q": "The backbeat falls on…", "choices": ["1 and 3", "2 and 4", "every '&'", "only beat 1"], "answer": 1 },
    { "q": "Which instrument should lock with the kick?", "choices": ["Lead", "Bass", "Pad", "Hi-hat"], "answer": 1 },
    { "q": "Swung eighths are played…", "choices": ["exactly even", "long–short", "short–long", "as sixteenths"], "answer": 1 }
  ] }
}
```
