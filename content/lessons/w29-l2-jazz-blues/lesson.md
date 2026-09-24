---
id: w29-l2-jazz-blues
title: The Jazz Blues
week: 29
order: 2
phase: p4
duration_min: 45
goals:
  - Compare the basic 12-bar blues with the jazz blues in F
  - Comp the jazz blues with shells, including Bdim7 and the VI7 turnaround
  - Play an original riff head over the changes
prerequisites: [w29-l1-aaba-and-rhythm-changes, w23-l2-twelve-bar-blues]
tags: [jazz, blues, form, keyboard]
songs:
  - { title: "Billie's Bounce", composer: "Charlie Parker", public_domain: false }
  - { title: "Straight, No Chaser", composer: "Thelonious Monk", public_domain: false }
  - { title: "Blue Monk", composer: "Thelonious Monk", public_domain: false }
---

# The Jazz Blues

You played the 12-bar blues in Phase 3: I7 for four bars, IV7 for two, back to I7, then V7–IV7–I7. Jazz musicians kept the 12 bars and the dominant-7th sound, but filled the gaps with ii–Vs and passing chords. The result is the [[jazz blues]].

## What changed

| Bar | Basic blues | Jazz blues in F |
|-----|-------------|-----------------|
| 1–4 | F7 F7 F7 F7 | F7 · **Bb7** · F7 · **Cm7 F7** |
| 5–6 | Bb7 Bb7 | Bb7 · **Bdim7** |
| 7–8 | F7 F7 | F7 · **D7** |
| 9–10 | C7 Bb7 | **Gm7 · C7** |
| 11–12 | F7 C7 | **F7 D7 · Gm7 C7** |

Four upgrades: a **quick IV** in bar 2; a **ii–V into Bb7** in bar 4; a **passing diminished** (Bdim7) that lifts Bb7 back up to F7; and the V7 area replaced by **ii–V** (Gm7–C7) with D7 (V7 of Gm7) setting it up. Bars 11–12 are a *turnaround* — I–VI–ii–V — that throws you back to the top.

Reference listening: "Billie's Bounce" and "Straight, No Chaser" are F blues heads; "Blue Monk" is in Bb. Count the 12 bars as the melody repeats.

```example
{
  "title": "Jazz blues in F — shells and bass",
  "bpm": 110, "timeSig": "4/4", "key": "F",
  "tracks": [
    { "instrument": "piano", "seq": "[F2 Eb3 A3]:w | [Bb2 D3 Ab3]:w | [F2 Eb3 A3]:w | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [Bb2 D3 Ab3]:w | [B2 D3 Ab3]:w | [F2 Eb3 A3]:w | [D3 F#3 C4]:w | [G2 F3 Bb3]:w | [C3 E3 Bb3]:w | [F2 Eb3 A3]:h [D3 F#3 C4]:h | [G2 F3 Bb3]:h [C3 E3 Bb3]:h |" },
    { "instrument": "bass", "seq": "F2:w | Bb1:w | F2:w | C2:h F2:h | Bb1:w | B1:w | F2:w | D2:w | G1:w | C2:w | F2:h D2:h | G1:h C2:h |" }
  ],
  "show": ["keyboard"]
}
```

## An original riff head

Blues heads are often riffs: a short idea stated, repeated, then answered. Here is an original one built on the F blues scale — notice the "blue" slide Ab→A in bar 1.

```example
{
  "title": "Riff head over the jazz blues (original)",
  "bpm": 110, "timeSig": "4/4", "key": "F",
  "tracks": [
    { "instrument": "lead", "seq": "F4:8 Ab4:8 A4:8 C5:8 Eb5:q C5:q | D5:8 C5:8 Ab4:8 F4:8 r:h | F4:8 Ab4:8 A4:8 C5:8 Eb5:q C5:q | D5:8 C5:8 A4:8 F4:8 r:h | Bb4:8 Db5:8 D5:8 F5:8 Ab5:q F5:q | Ab5:8 F5:8 D5:8 B4:8 r:h | C5:8 A4:8 F4:8 A4:8 C5:q Eb5:q | D5:q. C5:8 A4:h | Bb4:8 D5:8 F5:8 D5:8 Bb4:q G4:q | E4:8 G4:8 Bb4:8 C5:8 E5:q Bb4:q | A4:q F4:q F#4:q A4:q | Bb4:q G4:q E4:q C4:q |" },
    { "instrument": "bass", "seq": "F2:w | Bb1:w | F2:w | C2:h F2:h | Bb1:w | B1:w | F2:w | D2:w | G1:w | C2:w | F2:h D2:h | G1:h C2:h |" }
  ],
  "show": ["staff"]
}
```

## Drills

```exercise
{
  "id": "e1-build-blues-chords",
  "type": "build-chord",
  "title": "Spell the jazz blues chords",
  "count": 8, "passScore": 0.8,
  "spec": { "chords": ["F7", "Bb7", "Cm7", "Bdim7", "D7", "Gm7", "C7", "Ab7"], "root": "given", "prompt": "symbol", "key": "F" }
}
```

```exercise
{
  "id": "e2-comp-blues",
  "type": "play-melody",
  "title": "Comp the 12 bars",
  "instructions": "Left hand shells, bass plays along. Watch bar 6: Bdim7 is Bb7 with the root raised a half step.",
  "count": 6, "passScore": 0.7,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "F", "seq": "[F2 Eb3 A3]:w | [Bb2 D3 Ab3]:w | [F2 Eb3 A3]:w | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [Bb2 D3 Ab3]:w | [B2 D3 Ab3]:w | [F2 Eb3 A3]:w | [D3 F#3 C4]:w | [G2 F3 Bb3]:w | [C3 E3 Bb3]:w | [F2 Eb3 A3]:h [D3 F#3 C4]:h | [G2 F3 Bb3]:h [C3 E3 Bb3]:h |", "showStaff": false, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "bass", "seq": "F2:w | Bb1:w | F2:w | C2:h F2:h | Bb1:w | B1:w | F2:w | D2:w | G1:w | C2:w | F2:h D2:h | G1:h C2:h |" } }
}
```

```exercise
{
  "id": "e3-play-head",
  "type": "play-melody",
  "title": "Play the riff head (first 4 bars)",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 90, "timeSig": "4/4", "key": "F", "seq": "F4:8 Ab4:8 A4:8 C5:8 Eb5:q C5:q | D5:8 C5:8 Ab4:8 F4:8 r:h | F4:8 Ab4:8 A4:8 C5:8 Eb5:q C5:q | D5:8 C5:8 A4:8 F4:8 r:h |", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "piano", "seq": "[F2 Eb3 A3]:w | [Bb2 D3 Ab3]:w | [F2 Eb3 A3]:w | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h |" } }
}
```

```exercise
{
  "id": "e4-ear-blues-scales",
  "type": "ear-scale",
  "title": "Blues and its neighbours",
  "count": 8, "passScore": 0.75,
  "spec": { "scales": ["blues", "minor-pentatonic", "mixolydian", "dorian"], "play": "asc" }
}
```

```exercise
{
  "id": "e5-ear-dom-colours",
  "type": "ear-chord",
  "title": "Dominant or not?",
  "count": 10, "passScore": 0.8,
  "spec": { "qualities": ["dom7", "min7", "maj7", "m7b5"], "inversions": [0], "voicing": "open", "range": ["C2", "C5"] }
}
```

```exercise
{
  "id": "e6-blues-quiz",
  "type": "quiz",
  "title": "Jazz blues map",
  "passScore": 0.75,
  "spec": { "questions": [
    { "q": "In the jazz blues in F, which chord appears in bar 2?", "choices": ["F7", "Bb7", "C7", "Gm7"], "answer": 1 },
    { "q": "Bdim7 in bar 6 connects…", "choices": ["Bb7 up to F7 (via a rising bass B → C/F area)", "C7 to F7", "Gm7 to C7", "nothing — it's decoration"], "answer": 0, "explain": "The bass line Bb–B–C (F7/C) rises chromatically; Bdim7 is the passing chord." },
    { "q": "D7 in bar 8 is the V7 of…", "choices": ["F7", "Gm7", "C7", "Bb7"], "answer": 1 },
    { "q": "Bars 11–12 (F7 D7 | Gm7 C7) are called a…", "choices": ["bridge", "turnaround", "coda", "vamp"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "e7-rhythm-tap-riff",
  "type": "rhythm-tap",
  "title": "Tap the riff rhythm",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 90, "timeSig": "4/4", "seq": "x:8 x:8 x:8 x:8 x:q x:q | x:8 x:8 x:8 x:8 r:h |", "showNotation": true, "countIn": 1, "loops": 2 }
}
```
