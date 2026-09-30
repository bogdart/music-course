---
id: w39-l3-three-electronic-sketches-daw
title: Three Electronic Sketches — Hip-Hop, House, Lo-Fi
week: 39
order: 3
phase: p4
duration_min: 50
goals:
  - Write three short sketches in beat-driven genres (over two sessions)
  - Build each from the groove up, with a loop that evolves
  - Use arrangement (adding and removing layers) instead of new chords to create form
prerequisites: [w39-l2-house-and-lo-fi]
tags: [songwriting, genre, electronic, daw, sketch]
---

# Three Electronic Sketches — Hip-Hop, House, Lo-Fi

Last week's genres were song-first. These are **groove-first**: you start with drums and a loop, and form comes from **arrangement** — layers entering and leaving — rather than from new chord progressions. A whole house track can live on two chords.

**This lesson spans two sessions:** hip-hop and lo-fi (the shorter ones) in the first, house in the second.

## The loop-evolution method

1. Make a strong 2- or 4-bar loop with every layer.
2. Copy it to fill the sketch length.
3. **Delete** parts of layers to make sections: an intro with just drums and one element; a middle without the kick; an ending that strips back again.
4. Make one **change** every 8 bars — a fill, a new counter-line, a layer moved up an octave, a dropped beat.
5. **Judge by ear:** play the whole sketch with your eyes closed and raise a hand each time you notice something change. If 8 bars pass with no hand, add a change there; if you can't tell sections apart, make the deletions bigger (take out two layers, not one).
6. **Stuck?** The quickest change is removal: mute the kick for 4 bars before a new section, then bring it back.

## Sketch targets

| Genre | Tempo | Length | Must have |
|-------|-------|--------|-----------|
| Hip-hop (boom-bap or trap) | 90 or 140 | 16–24 bars | sample-style loop, one motif, a drum change every 8 bars |
| Lo-fi | 75 | 16–20 bars | extended chords, swung drums, one melodic phrase |
| House | 124 | 32 bars | four-on-the-floor, off-beat bass, a breakdown without kick |

A reminder of how much the groove decides the mood — the same two chords (C/A = Am7, Am/F = Fmaj7) as a soft lo-fi pad and then as house stabs:

```example
{
  "title": "Same harmony, two genres: Am7 – Fmaj7",
  "bpm": 100, "timeSig": "4/4", "key": "Am",
  "tracks": [
    { "instrument": "epiano", "seq": "[G3 C4 E4]:w | [A3 C4 E4]:w | r:w | r:w |" },
    { "instrument": "piano", "seq": "r:w | r:w | r:8 [G3 C4 E4]:8 r:q r:8 [G3 C4 E4]:8 r:q | r:8 [A3 C4 E4]:8 r:q r:8 [A3 C4 E4]:8 r:q |" },
    { "instrument": "bass", "seq": "A1:w | F1:w | r:8 A1:8 r:8 A1:8 r:8 A1:8 r:8 A1:8 | r:8 F1:8 r:8 F1:8 r:8 F1:8 r:8 F1:8 |" }
  ],
  "show": ["pianoroll"]
}
```

## Warm-up

```exercise
{
  "id": "e1-play-ninths",
  "type": "play-chord",
  "title": "Warm-up: 9th chords for lo-fi",
  "passScore": 0.7,
  "spec": { "chords": ["Dm9", "Cmaj9", "Am9", "Fmaj9"], "inversion": "any", "sequence": true, "bpm": 55 }
}
```

Progression method: find each bass note first (search low keys with higher/lower), then name the chord by what it does — rest, lift, pull, sad — and check it by playing that chord under the loop. The *How to do it* box under the drill shows the exact method for your current rung.

```ladder
{ "skill": "progressions", "unlocks": 20, "intro": "Loops are progressions on repeat — this drill runs at your current progressions rung." }
```

## Session 1: hip-hop and lo-fi

```exercise
{
  "id": "e2-daw-hiphop",
  "type": "daw-task",
  "title": "Sketch 1: hip-hop",
  "instructions": "Boom-bap (90) or trap (140 — change the tempo). Loop-evolution method; change the drums every 8 bars.",
  "spec": {
    "template": {
      "bpm": 90, "key": "Am", "timeSig": "4/4",
      "tracks": [
        { "instrument": "drums", "seq": "" },
        { "instrument": "bass", "seq": "" },
        { "instrument": "epiano", "seq": "" },
        { "instrument": "pluck", "seq": "" }
      ]
    },
    "task": "16–24 bar hip-hop sketch.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["drums", "bass", "epiano"] },
      { "kind": "bars", "min": 16, "max": 24 },
      { "kind": "drum-pattern", "requires": ["kick", "hihat"], "track": 0 },
      { "kind": "repetition", "motifBars": 2, "minRepeats": 4, "allowTransposed": false, "track": 2 },
      { "kind": "custom", "id": "evolves", "note": "Self-check: something changes every 8 bars." }
    ],
    "minBars": 16, "maxBars": 24
  }
}
```

```exercise
{
  "id": "e3-daw-lofi",
  "type": "daw-task",
  "title": "Sketch 2: lo-fi",
  "instructions": "16–20 bars at 75: extended chords on epiano (Dm9 – G13 – Cmaj9 from lesson 2, or your own), swung drums placed on triplets, a soft lead phrase that enters halfway.",
  "spec": {
    "template": {
      "bpm": 75, "key": "C", "timeSig": "4/4",
      "tracks": [
        { "instrument": "epiano", "seq": "" },
        { "instrument": "bass", "seq": "" },
        { "instrument": "drums", "seq": "" },
        { "instrument": "lead", "seq": "" }
      ]
    },
    "task": "16–20 bar lo-fi sketch.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["epiano", "bass", "drums", "lead"] },
      { "kind": "bars", "min": 16, "max": 20 },
      { "kind": "uses-rhythm", "values": ["8t"], "minDistinct": 1, "track": 2 },
      { "kind": "chord-has-seventh", "min": 4, "track": 0 },
      { "kind": "custom", "id": "extended", "note": "Self-check: at least half the chords have a 9th or 13th." }
    ],
    "minBars": 16, "maxBars": 20
  }
}
```

## Session 2: house

```exercise
{
  "id": "e4-daw-house",
  "type": "daw-task",
  "title": "Sketch 3: house",
  "instructions": "32 bars at 124: intro (8, drums + one layer), groove (8), breakdown without kick (8), full groove (8). Reuse your lesson-2 loop if you like.",
  "spec": {
    "template": {
      "bpm": 124, "key": "Am", "timeSig": "4/4",
      "tracks": [
        { "instrument": "drums", "seq": "" },
        { "instrument": "bass", "seq": "" },
        { "instrument": "piano", "seq": "" },
        { "instrument": "pad", "seq": "" }
      ],
      "markers": [{ "bar": 1, "name": "Intro" }, { "bar": 9, "name": "Groove" }, { "bar": 17, "name": "Breakdown" }, { "bar": 25, "name": "Drop" }]
    },
    "task": "32-bar house sketch.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["drums", "bass", "piano", "pad"] },
      { "kind": "bars", "min": 32, "max": 32 },
      { "kind": "drum-pattern", "requires": ["kick", "clap"], "kickOnBeats": [1, 2, 3, 4], "track": 0 },
      { "kind": "custom", "id": "breakdown", "note": "Self-check: bars 17–24 have no kick." }
    ],
    "minBars": 32, "maxBars": 32
  }
}
```

```exercise
{
  "id": "e5-reflect",
  "type": "reflect",
  "title": "Groove-first vs song-first",
  "spec": {
    "prompt": "Compare writing these sketches with last week's pop/rock/folk sketches. Which way of working came more naturally to you? What would a groove-first approach add to your songwriting?",
    "minWords": 30
  }
}
```

## Between lessons

Listen to one track in a genre from this week and raise a hand at every layer change; count how many bars pass between them.
