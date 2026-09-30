---
id: w38-l3-three-genre-sketches-daw
title: Three Genre Sketches — Pop, Rock, Folk
week: 38
order: 3
phase: p4
duration_min: 50
goals:
  - Write three 60-second sketches, each clearly in its genre (over two sessions)
  - Pick idioms deliberately from a checklist rather than by accident
  - Compare how the same skills (hook, loop, groove) change across genres
prerequisites: [w38-l2-rock-and-folk-idioms]
tags: [songwriting, genre, daw, sketch]
---

# Three Genre Sketches — Pop, Rock, Folk

A **sketch** is not a finished song: it is about 60 seconds that prove an idea works. You will write three. **This lesson spans two sessions**: the pop sketch in the first, rock and folk in the second (about 25 minutes each). Don't polish — you can return to one of them in the portfolio weeks.

At 100 BPM in 4/4 a bar lasts 2.4 seconds, so 24 bars (three 8-bar sections) is just under a minute. Every task below shows the length it expects.

## Idiom checklists

Tick at least **three** boxes per sketch.

**Pop (verse 8 · pre-chorus 8 · chorus 8, about 100 BPM):** four-chord loop · hook repeated in the chorus · chorus higher than verse · pre-chorus build · drop-out before the chorus · piano + bass + drums.

**Rock (riff 8 · verse 8 · chorus 8, about 120 BPM):** power-chord riff · ♭VII chord · straight 8th hats + backbeat · bass doubles the riff roots · chorus opens up to longer chords.

**Folk (A 8 · A 8 · B 8, 6/8):** fingerpicked arpeggios · I–IV–V (+vi) · a drone or held bass note · a simple, mostly stepwise tune · no drums or very light percussion.

## A folk tune seed

A starting point if you're stuck — an original 6/8 tune over I–IV–I–V in D. It opens with a leap up the D chord (F♯–A–D), then walks back down mostly by step:

```example
{
  "title": "Folk tune seed in 6/8 (original)",
  "bpm": 60, "timeSig": "6/8", "key": "D",
  "tracks": [
    { "instrument": "pluck", "seq": "F#4:q A4:8 D5:q. | B4:q A4:8 G4:q. | F#4:q E4:8 D4:q A4:8 | E4:q. r:q. |" },
    { "instrument": "strings", "seq": "[D3 A3]:q. [D3 A3]:q. | [G2 D3]:q. [G2 D3]:q. | [D3 A3]:q. [D3 A3]:q. | [A2 E3]:q. [A2 E3]:q. |" }
  ],
  "show": ["staff"]
}
```

```exercise
{
  "id": "e1-play-folk-seed",
  "type": "play-melody",
  "title": "Play the folk seed",
  "passScore": 0.7,
  "spec": {
    "bpm": 55, "timeSig": "6/8", "key": "D",
    "seq": "F#4:q A4:8 D5:q. | B4:q A4:8 G4:q. | F#4:q E4:8 D4:q A4:8 | E4:q. r:q. |",
    "showStaff": true, "showKeyboard": true, "countIn": 1
  }
}
```

## Steps for every sketch (about 25 minutes)

1. **5 min — choose.** Tick three boxes from the checklist and write the chord loop in the chord track or on paper. First choice wins; don't audition.
2. **12 min — the core.** Write the one thing the genre stands on: the pop hook, the rock riff, the folk tune. Loop it until you can play it from memory.
3. **8 min — fill.** Add the other tracks, then copy sections to reach 24 bars; change one thing per new section (higher melody, fuller drums, a held bass).
4. **Judge by ear:** play the 24 bars without looking at the screen. Could a stranger name the genre within the first 8 bars? If not, make the ticked idiom louder or more obvious (the drop-out, the ♭VII chord, the fingerpicking).
5. **Stuck?** Reuse material from this week: the chorus hook (w38-l1), the riff (w38-l2) or the folk seed above, and change just one thing.

When the time is up, save and stop. A strict limit helps you commit to decisions instead of auditioning options forever.

## Ear: bass lines

Method: ignore everything but the lowest, thumping sound. Find the first bass note by searching low keys (is my key higher or lower?), then follow each move — step or jump, up or down. The *How to do it* box under the drill shows the exact method for your current rung.

```ladder
{ "skill": "roots", "unlocks": 15, "intro": "All three sketches stand on a bass line — this drill runs at your current roots rung." }
```

## Session 1: pop

```exercise
{
  "id": "e2-daw-pop",
  "type": "daw-task",
  "title": "Sketch 1: pop",
  "instructions": "24 bars in G: verse (8), pre-chorus (8), chorus (8). Tick 3+ pop boxes.",
  "spec": {
    "template": {
      "bpm": 100, "key": "G", "timeSig": "4/4",
      "tracks": [
        { "instrument": "lead", "seq": "" },
        { "instrument": "piano", "seq": "" },
        { "instrument": "bass", "seq": "" },
        { "instrument": "drums", "seq": "" }
      ],
      "markers": [{ "bar": 1, "name": "Verse" }, { "bar": 9, "name": "Pre-chorus" }, { "bar": 17, "name": "Chorus" }]
    },
    "task": "60-second pop sketch.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["lead", "piano", "bass", "drums"] },
      { "kind": "bars", "min": 24, "max": 26 },
      { "kind": "in-key", "key": "G", "scale": "major", "allowPassing": true, "track": 0 },
      { "kind": "repetition", "motifBars": 1, "minRepeats": 3, "allowTransposed": true, "track": 0 },
      { "kind": "drum-pattern", "requires": ["kick", "snare"], "snareOnBeats": [2, 4], "track": 3 },
      { "kind": "custom", "id": "pop-boxes", "note": "Self-check: three or more pop idioms ticked." }
    ],
    "minBars": 24, "maxBars": 26
  }
}
```

## Session 2: rock and folk

```exercise
{
  "id": "e3-daw-rock",
  "type": "daw-task",
  "title": "Sketch 2: rock",
  "instructions": "24 bars in D: riff (8), verse (8), chorus (8). Power chords on the guitar track, bass on the riff roots. Tick 3+ rock boxes.",
  "spec": {
    "template": {
      "bpm": 120, "key": "D", "timeSig": "4/4",
      "tracks": [
        { "instrument": "guitar", "seq": "" },
        { "instrument": "bass", "seq": "" },
        { "instrument": "lead", "seq": "" },
        { "instrument": "drums", "seq": "" }
      ],
      "markers": [{ "bar": 1, "name": "Riff" }, { "bar": 9, "name": "Verse" }, { "bar": 17, "name": "Chorus" }]
    },
    "task": "60-second rock sketch.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["guitar", "bass", "drums"] },
      { "kind": "bars", "min": 24, "max": 32 },
      { "kind": "in-key", "key": "D", "scale": "mixolydian", "allowPassing": true, "track": 0 },
      { "kind": "repetition", "motifBars": 2, "minRepeats": 2, "allowTransposed": true, "track": 0 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "snareOnBeats": [2, 4], "track": 3 },
      { "kind": "custom", "id": "rock-boxes", "note": "Self-check: three or more rock idioms ticked." }
    ],
    "minBars": 24, "maxBars": 32
  }
}
```

```exercise
{
  "id": "e4-daw-folk",
  "type": "daw-task",
  "title": "Sketch 3: folk",
  "instructions": "24 bars in 6/8 in D: A (8), A again (8), B (8). Tick 3+ folk boxes. Use the seed above or your own tune.",
  "spec": {
    "template": {
      "bpm": 60, "key": "D", "timeSig": "6/8",
      "tracks": [
        { "instrument": "pluck", "seq": "" },
        { "instrument": "piano", "seq": "" },
        { "instrument": "strings", "seq": "" }
      ]
    },
    "task": "60-second folk sketch.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["pluck", "piano"] },
      { "kind": "bars", "min": 24, "max": 32 },
      { "kind": "in-key", "key": "D", "scale": "major", "allowPassing": false, "track": 0 },
      { "kind": "max-leap", "semitones": 7, "track": 0 },
      { "kind": "ends-on", "degree": 1, "track": 0 },
      { "kind": "custom", "id": "folk-boxes", "note": "Self-check: three or more folk idioms ticked." }
    ],
    "minBars": 24, "maxBars": 32
  }
}
```

```exercise
{
  "id": "e5-reflect",
  "type": "reflect",
  "title": "Genre fingerprints",
  "spec": {
    "prompt": "Play the three sketches in a row. What single element most makes each one sound like its genre? Which sketch would you most like to finish, and why?",
    "minWords": 30
  }
}
```

## Between lessons

Replay each sketch once on a different day with fresh ears and write one line: what to keep, what to cut.
