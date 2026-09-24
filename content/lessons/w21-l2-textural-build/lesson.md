---
id: w21-l2-textural-build
title: Texture, Comping and the Build
week: 21
order: 2
phase: p3
duration_min: 45
goals:
  - Choose between sustained pads and rhythmic comping for a section
  - Plan a textural build with an arrangement map (sections x instruments)
  - Hear where layers enter and leave in an arrangement
prerequisites: [w21-l1-frequency-roles-and-doubling]
tags: [arrangement, texture, comping, daw, ear]
songs:
  - { title: "Smells Like Teen Spirit", composer: "Kurt Cobain, Krist Novoselic, Dave Grohl (Nirvana)", public_domain: false }
  - { title: "In the Air Tonight", composer: "Phil Collins", public_domain: false }
  - { title: "Rolling in the Deep", composer: "Adele Adkins, Paul Epworth", public_domain: false }
---

# Texture, Comping and the Build

The biggest energy tool in pop is not a new chord or a louder melody. It is [[texture]]: how many layers are playing, and what they are doing.

## Pads or comping?

The same chord can be played two ways:

- A **[[pad]]** holds it — whole notes, soft attack. It fills space and feels calm, wide, floating.
- **[[Comping]]** repeats it rhythmically — short stabs, often off the beat. It adds motion and drives the groove.

Verses often use one of them sparsely; choruses often use both (comping for drive, pad for width).

```example
{
  "title": "Same chords (Am F C G): pad, then comping",
  "bpm": 96, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "pad", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w | r:w | r:w | r:w | r:w" },
    { "instrument": "epiano", "seq": "r:w | r:w | r:w | r:w | r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 [A3 C4 E4]:8 r:8 | r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 [A3 C4 F4]:8 r:8 | r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 [G3 C4 E4]:8 r:8 | r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 [G3 B3 D4]:8 r:8" }
  ],
  "show": ["pianoroll"],
  "loop": false
}
```

## The build

A song gets bigger by **adding layers** and smaller by **removing** them. Plan it on paper first with an [[arrangement map]]: sections across, instruments down, an X where a part plays.

| | Intro | Verse | Pre | Chorus | Verse 2 | Chorus 2 |
|---|---|---|---|---|---|---|
| Comp (epiano) | X | X | X | X | X | X |
| Bass | | X | X | X | X | X |
| Drums | | hats | build | full | full | full + crash |
| Pad | | | | X | | X |
| Lead double | | | | | | X |

Two rules: **every new section changes at least one row**, and **the second chorus is the biggest moment so far**. Removing is as powerful as adding — dropping the drums for two bars before a chorus makes the chorus hit harder.

Here are 8 bars that add one layer every two bars:

```example
{
  "title": "Textural build: comp, + bass, + hats, + full drums and pad",
  "bpm": 96, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "epiano", "seq": "r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 [A3 C4 E4]:8 r:8 | r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 [A3 C4 F4]:8 r:8 | r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 [G3 C4 E4]:8 r:8 | r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 [G3 B3 D4]:8 r:8 | r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 [A3 C4 E4]:8 r:8 | r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 [A3 C4 F4]:8 r:8 | r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 [G3 C4 E4]:8 r:8 | r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 [G3 B3 D4]:8 r:8" },
    { "instrument": "bass", "seq": "r:w | r:w | C2:h C2:h | G1:h G1:h | A1:h A1:h | F1:h F1:h | C2:8 C2:8 C2:8 C2:8 C2:8 C2:8 C2:8 C2:8 | G1:8 G1:8 G1:8 G1:8 G1:8 G1:8 G1:8 G1:8" },
    { "instrument": "drums", "seq": "r:w | r:w | r:w | r:w | kick:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | kick:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" },
    { "instrument": "pad", "seq": "r:w | r:w | r:w | r:w | r:w | r:w | [E4 G4 C5]:w | [D4 G4 B4]:w" }
  ],
  "show": ["pianoroll"],
  "loop": false
}
```

## By reference

- **"Smells Like Teen Spirit"** — Nirvana, F minor, ~117 BPM. The quiet/loud model: sparse clean verse, explosive distorted chorus on the same four-chord riff.
- **"In the Air Tonight"** — Phil Collins, D minor. Drums are withheld for minutes; their famous late entrance is one of the biggest texture changes in pop.
- **"Rolling in the Deep"** — Adele, C minor, ~105 BPM. Starts with a lone guitar and voice; a kick drum joins, then the band, then backing vocals — a textbook build.

```exercise
{
  "id": "listen-build",
  "type": "listen",
  "title": "Who enters when?",
  "spec": {
    "example": { "bpm": 96, "timeSig": "4/4", "key": "C", "tracks": [
      { "instrument": "epiano", "seq": "r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 [A3 C4 E4]:8 r:8 | r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 [A3 C4 F4]:8 r:8 | r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 [G3 C4 E4]:8 r:8 | r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 [G3 B3 D4]:8 r:8 | r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 [A3 C4 E4]:8 r:8 | r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 [A3 C4 F4]:8 r:8 | r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 [G3 C4 E4]:8 r:8 | r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 [G3 B3 D4]:8 r:8" },
      { "instrument": "bass", "seq": "r:w | r:w | C2:h C2:h | G1:h G1:h | A1:h A1:h | F1:h F1:h | C2:8 C2:8 C2:8 C2:8 C2:8 C2:8 C2:8 C2:8 | G1:8 G1:8 G1:8 G1:8 G1:8 G1:8 G1:8 G1:8" },
      { "instrument": "drums", "seq": "r:w | r:w | r:w | r:w | kick:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | kick:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 hihat:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" }
    ] },
    "questions": [
      { "q": "In which bar does the bass enter?", "choices": ["1", "3", "5", "7"], "answer": 1 },
      { "q": "What plays first when the drums enter in bar 5?", "choices": ["Full kit", "Kick and hi-hats only", "Crash only", "Toms"], "answer": 1 },
      { "q": "What changes in the bass at bar 7?", "choices": ["It stops", "Half notes become driving eighths", "It moves up an octave", "Nothing"], "answer": 1 }
    ]
  }
}
```

```exercise
{
  "id": "tap-comp-rhythm",
  "type": "rhythm-tap",
  "title": "Tap the comping rhythm",
  "passScore": 0.75,
  "spec": { "bpm": 90, "timeSig": "4/4", "seq": "r:8 x:8 r:8 x:8 r:8 x:8 x:8 r:8 | r:8 x:8 r:8 x:8 r:8 x:8 x:8 r:8", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "ear-prog-g",
  "type": "ear-progression",
  "title": "Progressions in G",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "G", "mode": "major", "length": 4, "chords": ["I", "iii", "IV", "V", "vi"], "style": "arpeggio" }
}
```

```exercise
{
  "id": "daw-pad-to-comp",
  "type": "daw-task",
  "title": "Turn a pad into comping",
  "spec": {
    "template": { "bpm": 96, "key": "C", "tracks": [
      { "instrument": "pad", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w" },
      { "instrument": "epiano", "seq": "" },
      { "instrument": "bass", "seq": "A1:h A1:h | F1:h F1:h | C2:h C2:h | G1:h G1:h" }
    ] },
    "task": "Write an epiano comping part on the same chords: short (eighth-note) stabs with rests, at least half of them off the beat. Then mute the pad and compare: which version suits a verse, which a chorus?",
    "checks": [
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "in-key", "key": "C", "scale": "major", "track": 1 },
      { "kind": "uses-rhythm", "values": ["8", "16"], "minDistinct": 1, "track": 1 },
      { "kind": "note-count", "min": 30, "track": 1 },
      { "kind": "range", "low": "G3", "high": "G5", "track": 1 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

```exercise
{
  "id": "daw-build-16",
  "type": "daw-task",
  "title": "A 16-bar build",
  "spec": {
    "template": { "bpm": 96, "key": "C", "tracks": [
      { "instrument": "epiano", "seq": "r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 [A3 C4 E4]:8 r:8 | r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 [A3 C4 F4]:8 r:8 | r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 [G3 C4 E4]:8 r:8 | r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 [G3 B3 D4]:8 r:8 | r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 [A3 C4 E4]:8 r:8 | r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 [A3 C4 F4]:8 r:8 | r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 [G3 C4 E4]:8 r:8 | r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 [G3 B3 D4]:8 r:8 | r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 [A3 C4 E4]:8 r:8 | r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 [A3 C4 F4]:8 r:8 | r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 [G3 C4 E4]:8 r:8 | r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 [G3 B3 D4]:8 r:8 | r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 r:8 [A3 C4 E4]:8 [A3 C4 E4]:8 r:8 | r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 r:8 [A3 C4 F4]:8 [A3 C4 F4]:8 r:8 | r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 r:8 [G3 C4 E4]:8 [G3 C4 E4]:8 r:8 | r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 r:8 [G3 B3 D4]:8 [G3 B3 D4]:8 r:8" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "drums", "seq": "" },
      { "instrument": "pad", "seq": "" }
    ] },
    "task": "Draw an arrangement map first (in your notes). Then: bars 1-4 comping only; bass enters at bar 5; drums at bar 9 (hats and kick only); full drums and pad at bar 13 with a crash. Take everything except the comping out for bar 12, beats 3-4 - a tiny drop before the peak.",
    "checks": [
      { "kind": "bars", "min": 16, "max": 16 },
      { "kind": "has-tracks", "instruments": ["epiano", "bass", "drums", "pad"] },
      { "kind": "in-key", "key": "C", "scale": "major", "track": 1 },
      { "kind": "range", "low": "E1", "high": "C3", "track": 1 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat", "crash"], "track": 2 },
      { "kind": "custom", "id": "layers-enter-on-schedule", "note": "Self-check: bass from bar 5, drums from bar 9, pad and full drums from bar 13, mini drop in bar 12." }
    ],
    "minBars": 16, "maxBars": 16
  }
}
```

```exercise
{
  "id": "reflect-map",
  "type": "reflect",
  "spec": { "prompt": "Draw (in text) an arrangement map for the chorus you wrote in week 18, as if it were part of a full song: Intro, Verse, Chorus, Verse 2, Chorus 2. Which instruments play where? What is removed before the last chorus?", "minWords": 30 }
}
```
