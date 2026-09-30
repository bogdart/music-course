---
id: w40-l3-sixty-second-cue-daw
title: A 60-Second Cue
week: 40
order: 3
phase: p4
duration_min: 50
goals:
  - Score a 60-second scene from a written brief
  - Plan the cue as a timeline of emotional moments (hit points)
  - Write a loopable 16-bar game track (second session)
prerequisites: [w40-l2-ostinati-and-leitmotif]
tags: [film, game, composition, daw, cue]
---

# A 60-Second Cue

Film composers get a **brief** and a **timeline**. Each moment where the music must change is a [[hit point]]. You work out which bar it falls in and write toward it. **This lesson spans two sessions:** the film cue in the first, the game loop in the second.

## Timeline maths

At a given tempo in 4/4, one bar lasts 4 × (60 ÷ BPM) seconds. At **90 BPM**: 4 × 0.667 = 2.67 seconds, so 8 bars ≈ 21 seconds and 24 bars ≈ 64 seconds.

```exercise
{
  "id": "e1-hit-point-quiz",
  "type": "quiz-input",
  "title": "Timeline maths",
  "passScore": 0.7,
  "spec": {
    "questions": [
      { "q": "At 120 BPM in 4/4, how many seconds is one bar?", "answer": ["2"], "kind": "number" },
      { "q": "At 120 BPM in 4/4, a hit point at 0:32 falls at the start of bar…", "answer": ["17"], "kind": "number" },
      { "q": "At 90 BPM in 4/4, how many whole bars fit in 60 seconds?", "answer": ["22"], "kind": "number" }
    ]
  }
}
```

## The brief

> *Night. An abandoned space station. Our hero drifts through a dark corridor (0:00–0:21). A faint signal starts beeping; she follows it, faster (0:21–0:42). She opens a hatch: a vast window onto a glowing nebula (0:42–1:04). Wonder.*

At 90 BPM the three scene sections map to **three 8-bar sections — 24 bars**.

| Bars | Time | Emotion | Suggested tools |
|------|------|---------|-----------------|
| 1–8 | 0:00 | isolation, unease | E Phrygian, low pad drone, sparse piano, no drums |
| 9–16 | 0:21 | curiosity, urgency | pluck ostinato (the "signal"), strings rising, add a pulse |
| 17–24 | 0:42 | wonder | C or F Lydian, strings + lead theme, full pad, longer notes |

The hit point at bar 17 (the hatch opens) is the key moment. Make it land: silence on beat 4 of bar 16, then change mode, register and instruments all at once.

```example
{
  "title": "The 'signal' idea: pluck ostinato over a low E drone (original)",
  "bpm": 90, "timeSig": "4/4", "key": "Em",
  "tracks": [
    { "instrument": "pluck", "seq": "E5:8 r:8 r:8 E5:8 r:8 F5:8 r:q | E5:8 r:8 r:8 E5:8 r:8 F5:8 r:q |" },
    { "instrument": "pad", "seq": "[E2 B2]:w | [E2 B2]:w |" }
  ],
  "show": ["pianoroll"], "loop": true
}
```

The F against the E drone is Phrygian's ♭2 — the half step that sounds like a warning. Check it: hold a low E and play F, then F♯, above it. F rubs and sounds uneasy; F♯ sounds neutral.

```exercise
{
  "id": "e2-play-lydian-f",
  "type": "play-scale",
  "title": "F Lydian (all white keys from F) for the wonder section",
  "passScore": 0.7,
  "spec": { "root": "F", "scale": "lydian", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 80, "metronome": true }
}
```

Method: find home (where the tune rests) and play it; decide bright or dark; then find the one special note and compare it with its plain neighbour over home. The *How to do it* box under the drill shows the exact method for your current rung.

```ladder
{ "skill": "scales", "unlocks": 13, "intro": "Review: Phrygian menace vs Lydian wonder live on this ladder — at your current rung." }
```

## Session 1: the film cue

1. **Bar 17 first.** Write the nebula theme (Lydian, strings + lead, long notes). It's the moment the whole cue points at, so get it right while you're fresh.
2. **Bars 1–8.** A low E pad drone and a few sparse piano notes in E Phrygian; leave lots of silence.
3. **Bars 9–16.** Start the pluck "signal" ostinato; add strings climbing one step every two bars; make the pulse busier in bars 13–16.
4. **The hit.** Empty beat 4 of bar 16 on every track.
5. **Judge by ear:** play bars 13–20 with your eyes closed. Does bar 17 feel like a door opening? If not, change more at once — jump the register higher, bring in the full pad, drop the ostinato.
6. **Stuck?** Use the signal example for bars 9–16 as is and spend your time on bars 17–24.

```exercise
{
  "id": "e3-daw-film-cue",
  "type": "daw-task",
  "title": "Score the space-station scene",
  "instructions": "24 bars at 90 BPM following the timeline above. The change at bar 17 must be unmistakable.",
  "spec": {
    "template": {
      "bpm": 90, "key": "C", "timeSig": "4/4",
      "tracks": [
        { "instrument": "pad", "seq": "" },
        { "instrument": "piano", "seq": "" },
        { "instrument": "pluck", "seq": "" },
        { "instrument": "strings", "seq": "" },
        { "instrument": "lead", "seq": "" }
      ],
      "markers": [{ "bar": 1, "name": "Corridor" }, { "bar": 9, "name": "Signal" }, { "bar": 17, "name": "Nebula" }]
    },
    "task": "60-second (24-bar) cue with three emotional sections and a hit point at bar 17.",
    "checks": [
      { "kind": "bars", "min": 24, "max": 24 },
      { "kind": "has-tracks", "instruments": ["pad", "pluck", "strings", "lead"] },
      { "kind": "note-count", "min": 8, "track": 2 },
      { "kind": "custom", "id": "sections", "note": "Self-check: bars 1–8 dark and sparse; 9–16 an ostinato builds; 17–24 Lydian, full, wonder." },
      { "kind": "custom", "id": "hit-point", "note": "Self-check: beat 4 of bar 16 is silent or nearly so, and bar 17 changes mode, register and instruments." }
    ],
    "minBars": 24, "maxBars": 24
  }
}
```

## Session 2: a game loop

Game tracks often **loop** for as long as the player stays in a level. A loop must flow back to its start without a bump — usually the last bar sets up the first (a V chord, or a pickup into bar 1). Avoid a big final cadence: it sounds like "The End" every 30 seconds. **Check:** set the loop to play three times and listen only to the seam between bar 16 and bar 1. If you notice a bump, end bar 16 on a chord other than home, or add a pickup note that leads into bar 1's first note.

```exercise
{
  "id": "e4-daw-game-loop",
  "type": "daw-task",
  "title": "A 16-bar game loop",
  "instructions": "Choose a level: forest (Dorian), lava cave (Phrygian) or sky kingdom (Lydian). Write a 16-bar loop with a melody, a bass and a rhythmic layer. Bar 16 must lead smoothly back into bar 1 — loop it at least three times to check.",
  "spec": {
    "template": {
      "bpm": 120, "key": "C", "timeSig": "4/4",
      "tracks": [
        { "instrument": "lead", "seq": "" },
        { "instrument": "bass", "seq": "" },
        { "instrument": "pluck", "seq": "" },
        { "instrument": "drums", "seq": "" }
      ]
    },
    "task": "Seamless 16-bar level loop.",
    "checks": [
      { "kind": "bars", "min": 16, "max": 16 },
      { "kind": "has-tracks", "instruments": ["lead", "bass"] },
      { "kind": "repetition", "motifBars": 2, "minRepeats": 2, "allowTransposed": true, "track": 0 },
      { "kind": "custom", "id": "seamless", "note": "Self-check: no final cadence; bar 16 flows back into bar 1." }
    ],
    "minBars": 16, "maxBars": 16
  }
}
```

```exercise
{
  "id": "e5-reflect",
  "type": "reflect",
  "title": "Watch it in your head",
  "spec": {
    "prompt": "Close your eyes and play the cue while imagining the scene. Where does the music help the story, and where does it get ahead of or behind the picture?",
    "minWords": 25
  }
}
```

## Between lessons

Watch a minute of any film scene with the sound on and note one hit point: what changed in the music at that moment?
