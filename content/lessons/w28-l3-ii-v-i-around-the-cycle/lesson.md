---
id: w28-l3-ii-v-i-around-the-cycle
title: ii–V–I Around the Cycle
week: 28
order: 3
phase: p4
duration_min: 50
goals:
  - Play shell ii–V–Is in all 12 major keys following the cycle of fourths
  - Play a minor ii–V–i (m7b5 – V7 – m6)
  - Recognise ii–V–I by ear in major and minor
prerequisites: [w28-l2-rootless-voicings]
tags: [jazz, ii-v-i, keys, ear, daw]
songs:
  - { title: "All the Things You Are", composer: "Jerome Kern", public_domain: false }
---

# ii–V–I Around the Cycle

Jazz tunes change key constantly — often every two bars. "All the Things You Are" (Kern, 1939; reference only) is the famous example: its melody stays simple while ii–V–Is carry it through roughly five keys. You cannot think "D minor 7, which is D F A C…" in real time. You need your hands to *know* the ii–V–I shape in every key. Today is that workout.

## The route: cycle of fourths

Move the key **up a fourth** each time — C, F, Bb, Eb, Ab, Db, Gb, B, E, A, D, G — and you visit all 12. Bonus: the old tonic is always the new key's V (C is the V of F, F is the V of Bb…), so the whole cycle feels like one long chain of resolutions. Using alternating shells from the shell-voicing lesson, the hand stays in one area of the keyboard the whole time. Aim for accuracy first; speed comes from repetition over the coming weeks, not from forcing it today.

```example
{
  "title": "Shell ii–V–Is: C, F, Bb, Eb, Ab, Db",
  "bpm": 90, "timeSig": "4/4",
  "tracks": [
    { "instrument": "piano", "seq": "[D3 F3 C4]:w | [G2 F3 B3]:w | [C3 E3 B3]:w | [G2 F3 Bb3]:w | [C3 E3 Bb3]:w | [F2 E3 A3]:w | [C3 Eb3 Bb3]:w | [F2 Eb3 A3]:w | [Bb2 D3 A3]:w | [F2 Eb3 Ab3]:w | [Bb2 D3 Ab3]:w | [Eb2 D3 G3]:w | [Bb2 Db3 Ab3]:w | [Eb2 Db3 G3]:w | [Ab2 C3 G3]:w | [Eb2 Db3 Gb3]:w | [Ab2 C3 Gb3]:w | [Db2 C3 F3]:w |" }
  ],
  "show": ["keyboard"]
}
```

```example
{
  "title": "Shell ii–V–Is: B, E, A, D, G (then back to C)",
  "bpm": 90, "timeSig": "4/4",
  "tracks": [
    { "instrument": "piano", "seq": "[C#3 E3 B3]:w | [F#2 E3 A#3]:w | [B2 D#3 A#3]:w | [F#2 E3 A3]:w | [B2 D#3 A3]:w | [E2 D#3 G#3]:w | [B2 D3 A3]:w | [E2 D3 G#3]:w | [A2 C#3 G#3]:w | [E2 D3 G3]:w | [A2 C#3 G3]:w | [D2 C#3 F#3]:w | [A2 C3 G3]:w | [D2 C3 F#3]:w | [G2 B2 F#3]:w |" }
  ],
  "show": ["keyboard"]
}
```

Gb is the one we skipped in the drills: Abm7 – Db7 – Gbmaj7. Spell it yourself below.

## Minor ii–V–i

In a minor key, ii is half-diminished (m7b5) and V is a dominant 7th borrowed from harmonic minor. The tonic is often m6 (or plain minor). This is the [[minor ii–V–i]], the backbone of every minor-key standard.

```example
{
  "title": "Minor ii–V–i in A: Bm7b5 – E7 – Am6",
  "bpm": 70, "timeSig": "4/4", "key": "Am",
  "tracks": [
    { "instrument": "piano", "seq": "[B2 D3 A3]:w | [E2 D3 G#3]:w | [A2 C3 F#3]:w | [A2 C3 F#3]:w |" }
  ],
  "show": ["keyboard", "staff"]
}
```

## Drills

```exercise
{
  "id": "e1-cycle-a",
  "type": "play-melody",
  "title": "Cycle part 1: C F Bb Eb Ab Db",
  "instructions": "Slow is fine. Say the key name out loud before each ii chord.",
  "count": 6, "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "4/4", "seq": "[D3 F3 C4]:w | [G2 F3 B3]:w | [C3 E3 B3]:w | [G2 F3 Bb3]:w | [C3 E3 Bb3]:w | [F2 E3 A3]:w | [C3 Eb3 Bb3]:w | [F2 Eb3 A3]:w | [Bb2 D3 A3]:w | [F2 Eb3 Ab3]:w | [Bb2 D3 Ab3]:w | [Eb2 D3 G3]:w | [Bb2 Db3 Ab3]:w | [Eb2 Db3 G3]:w | [Ab2 C3 G3]:w | [Eb2 Db3 Gb3]:w | [Ab2 C3 Gb3]:w | [Db2 C3 F3]:w |", "showStaff": false, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e2-cycle-b",
  "type": "play-melody",
  "title": "Cycle part 2: B E A D G",
  "count": 6, "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "4/4", "seq": "[C#3 E3 B3]:w | [F#2 E3 A#3]:w | [B2 D#3 A#3]:w | [F#2 E3 A3]:w | [B2 D#3 A3]:w | [E2 D#3 G#3]:w | [B2 D3 A3]:w | [E2 D3 G#3]:w | [A2 C#3 G#3]:w | [E2 D3 G3]:w | [A2 C#3 G3]:w | [D2 C#3 F#3]:w | [A2 C3 G3]:w | [D2 C3 F#3]:w | [G2 B2 F#3]:w |", "showStaff": false, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e3-build-gb-and-minor",
  "type": "build-chord",
  "title": "The missing key and the minor ii–V",
  "count": 6, "passScore": 0.8,
  "spec": { "chords": ["Abm7", "Db7", "Gbmaj7", "Bm7b5", "E7", "Am6"], "root": "given", "prompt": "symbol" }
}
```

```exercise
{
  "id": "e4-ear-major-ii-v",
  "type": "ear-progression",
  "title": "ii–V–I in random major keys",
  "count": 8, "passScore": 0.75,
  "spec": { "key": "random", "mode": "major", "length": 4, "chords": ["I", "ii", "IV", "V7", "vi"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "e5-ear-minor-prog",
  "type": "ear-progression",
  "title": "Minor-key progressions with V7",
  "count": 6, "passScore": 0.7,
  "spec": { "key": "A", "mode": "minor", "length": 4, "chords": ["i", "iv", "V7", "bVI", "bVII"], "style": "block" }
}
```

```exercise
{
  "id": "e6-ear-m7b5",
  "type": "ear-chord",
  "title": "Is it the minor ii (m7b5)?",
  "count": 10, "passScore": 0.8,
  "spec": { "qualities": ["min7", "dom7", "m7b5"], "inversions": [0], "voicing": "open", "range": ["C2", "C5"] }
}
```

```exercise
{
  "id": "e7-daw-cycle",
  "type": "daw-task",
  "title": "Twelve keys in the DAW",
  "instructions": "Write ii–V–I shells (or rootless voicings) through the cycle, one chord per bar, and a bass track with roots on beat 1. 36 bars covers all 12 keys; at least the first 12 bars (four keys) are required. Loop it at 100 bpm and play along.",
  "spec": {
    "template": { "bpm": 100, "timeSig": "4/4", "tracks": [ { "instrument": "piano", "seq": "" }, { "instrument": "bass", "seq": "" } ] },
    "task": "ii–V–I in at least four consecutive keys of the cycle (C, F, Bb, Eb…), piano + bass.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "bass"] },
      { "kind": "bars", "min": 12, "max": 36 },
      { "kind": "note-count", "min": 36, "max": 200, "track": 0 },
      { "kind": "range", "low": "C2", "high": "E4", "track": 0 },
      { "kind": "custom", "id": "keys-follow-cycle", "note": "Self-check: each new key is a fourth above the last (C, F, Bb, Eb, Ab, Db, Gb, B, E, A, D, G)." }
    ],
    "minBars": 12, "maxBars": 36
  }
}
```
