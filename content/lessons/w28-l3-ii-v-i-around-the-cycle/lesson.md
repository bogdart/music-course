---
id: w28-l3-ii-v-i-around-the-cycle
title: ii–V–I Around the Cycle
week: 28
order: 3
phase: p4
duration_min: 50
goals:
  - Follow the cycle of fourths through all twelve major keys
  - Play shell ii–V–Is in the first six keys of the cycle (C to Db)
  - Hear ii7–V7–Imaj7 as a progression and write four keys of the cycle in the DAW
prerequisites: [w28-l2-rootless-voicings]
tags: [jazz, ii-v-i, keys, ear, daw]
songs:
  - { title: "All the Things You Are", composer: "Jerome Kern", public_domain: false }
---

# ii–V–I Around the Cycle

Jazz tunes change key often, sometimes every two bars. "All the Things You Are" (Kern, 1939; by reference) is the famous example: its melody stays simple while ii–V–Is carry it through several keys. You cannot think "D minor 7 is D F A C…" in real time. Your hands need to *know* the ii–V–I shape in every key. Today starts that workout; it continues for weeks.

## The route: the cycle of fourths

Move the key **up a fourth** each time: C, F, B♭, E♭, A♭, D♭, G♭, B, E, A, D, G, and you have visited all twelve. (It is the circle of fifths from week 16, walked the other way.) There is a bonus: the old tonic is always the new key's V. C is the V of F, F is the V of B♭, so the whole cycle feels like one long chain of arrivals.

With alternating shells from the first lesson this week, the hand stays in one area of the keyboard.

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

Today: the first six keys by hand. Say the key name out loud before each ii chord. Accuracy first; speed comes from coming back to this over the next weeks, not from forcing it today. The other six keys you will spell today and play later.

## Hearing ii–V–I

The ear rung this lesson opens uses four seventh chords of a major key: Imaj7, ii7, V7 and **vi7**. vi7 is the one you have not met in sevenths yet: in C it is Am7 (A C E G), the relative minor with its seventh. It often sits just before ii7: Imaj7–vi7–ii7–V7 is the classic jazz "turnaround". Listen to that loop.

```chords
{ "key": "C", "bars": ["Cmaj7", "Am7", "Dm7", "G7"], "roman": true, "play": true, "bpm": 80 }
```

**What you will actually hear.** Imaj7 is the chord that sounds like home, and V7 the one that clearly wants to go there. The hard pair is **ii7 against vi7**: both are soft minor sevenths, so their colour will not separate them. Follow the bass instead. ii7 sits one step above home and leans forward towards V7. vi7 sits a sixth above home (or a third below it) and still sounds close to home, because it shares three notes with Imaj7 (A C E G against C E G B). Compare the two, one after the other, each resolving home.

```chords
{ "key": "C", "bars": ["Dm7", "Cmaj7", "Am7", "Cmaj7"], "roman": true, "play": true, "bpm": 72 }
```

The drill also changes key every question. Each one begins with a short cadence and names the key, so find home first, then judge each chord against it. The drill below runs at your current progressions rung, so you may meet this four-chord choice only later.

## Drills

```exercise
{
  "id": "e1-cycle-a",
  "type": "play-melody",
  "title": "Cycle: C, F, Bb",
  "instructions": "Left hand shells. Say the key name before each ii chord.",
  "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "4/4", "seq": "[D3 F3 C4]:w | [G2 F3 B3]:w | [C3 E3 B3]:w | [G2 F3 Bb3]:w | [C3 E3 Bb3]:w | [F2 E3 A3]:w | [C3 Eb3 Bb3]:w | [F2 Eb3 A3]:w | [Bb2 D3 A3]:w |", "showStaff": false, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e2-cycle-b",
  "type": "play-melody",
  "title": "Cycle: Eb, Ab, Db",
  "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "4/4", "seq": "[F2 Eb3 Ab3]:w | [Bb2 D3 Ab3]:w | [Eb2 D3 G3]:w | [Bb2 Db3 Ab3]:w | [Eb2 Db3 G3]:w | [Ab2 C3 G3]:w | [Eb2 Db3 Gb3]:w | [Ab2 C3 Gb3]:w | [Db2 C3 F3]:w |", "showStaff": false, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e3-cycle-quiz",
  "type": "quiz-input",
  "title": "Find your way around the cycle",
  "passScore": 0.7,
  "spec": { "questions": [
    { "q": "The key a fourth above Eb?", "answer": ["Ab"], "kind": "note" },
    { "q": "The key after Gb in the cycle of fourths?", "answer": ["B", "Cb"], "kind": "note" },
    { "q": "The ii chord in A major (root only)?", "answer": ["B"], "kind": "note" },
    { "q": "The V chord in E major (root only)?", "answer": ["B"], "kind": "note" }
  ] }
}
```

```exercise
{
  "id": "e4-build-other-six",
  "type": "build-chord",
  "title": "Spell the other six keys",
  "instructions": "ii–V–I in Gb, B and E, then A, D and G. Spelling only; playing them is for the coming weeks.",
  "count": 18, "passScore": 0.7,
  "spec": { "chords": ["Abm7", "Db7", "Gbmaj7", "C#m7", "F#7", "Bmaj7", "F#m7", "B7", "Emaj7", "Bm7", "E7", "Amaj7", "Em7", "A7", "Dmaj7", "Am7", "D7", "Gmaj7"], "root": "given", "prompt": "symbol" }
}
```

## Ear: ii–V–I

```ladder
{ "skill": "progressions", "unlocks": 18, "intro": "Opens the jazz-sevenths rung (Imaj7, ii7, V7 and vi7, a new key each time); the drill runs at your current progressions rung." }
```

## Make it

```exercise
{
  "id": "e5-daw-cycle",
  "type": "daw-task",
  "title": "Four keys of the cycle in the DAW",
  "instructions": "Write ii–V–I shells (or rootless voicings) through the cycle, one chord per bar, starting in C: C, F, Bb, Eb = 12 bars. Add a bass track with the root on beat 1. Loop it and play along with your left hand. About 25 minutes.",
  "spec": {
    "template": { "bpm": 100, "key": "C", "timeSig": "4/4", "tracks": [ { "instrument": "piano", "seq": "" }, { "instrument": "bass", "seq": "" } ] },
    "task": "12 bars: ii–V–I in C, F, Bb and Eb (the first four keys of the cycle), piano + bass.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "bass"] },
      { "kind": "bars", "min": 12, "max": 12 },
      { "kind": "note-count", "min": 36, "max": 96, "track": 0 },
      { "kind": "range", "low": "C2", "high": "E4", "track": 0 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["ii7", "V7", "Imaj7", "v7", "I7", "IVmaj7", "i7", "IV7", "bVIImaj7", "iv7", "bVII7", "bIIImaj7"], "barsPerChord": 1, "minRatio": 0.75, "track": 1 },
      { "kind": "custom", "id": "half-step-lines", "note": "Self-check: the shells alternate 1-3-7 and 1-7-3, so the upper notes move by a half step or stay put." }
    ],
    "minBars": 12, "maxBars": 12
  }
}
```
