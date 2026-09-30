---
id: w29-l2-jazz-blues
title: The Jazz Blues
week: 29
order: 2
phase: p4
duration_min: 45
goals:
  - Compare the basic 12-bar blues with the jazz blues in F
  - Comp the jazz blues with shells, using the ii–Vs and turnaround
  - Play an original riff head over the changes
prerequisites: [w29-l1-aaba-and-rhythm-changes, w23-l2-twelve-bar-blues]
tags: [jazz, blues, form, keyboard]
songs:
  - { title: "Billie's Bounce", composer: "Charlie Parker", public_domain: false }
  - { title: "Straight, No Chaser", composer: "Thelonious Monk", public_domain: false }
  - { title: "Blue Monk", composer: "Thelonious Monk", public_domain: false }
---

# The Jazz Blues

You played the 12-bar blues in Phase 3: I7 for four bars, IV7 for two, back to I7, then V7–IV7–I7. Jazz musicians kept the 12 bars and the dominant-7th sound, but filled the gaps with tools you already know. The result is the [[jazz blues]].

## What changed

| Bar | Basic blues | Jazz blues in F |
|-----|-------------|-----------------|
| 1–4 | F7 F7 F7 F7 | F7 · **B♭7** · F7 · **Cm7 F7** |
| 5–6 | B♭7 B♭7 | B♭7 · **Bdim7** |
| 7–8 | F7 F7 | F7 · **D7** |
| 9–10 | C7 B♭7 | **Gm7 · C7** |
| 11–12 | F7 C7 | **F7 D7 · Gm7 C7** |

None of the upgrades is new to you:

1. **Bar 2, the quick IV:** a brief visit to B♭7, then home.
2. **Bar 4, ii–V into IV:** Cm7–F7 leads to B♭7, the same trick as last lesson's Fm7–B♭7 in rhythm changes.
3. **Bar 6, a passing diminished:** Bdim7 lifts the bass a half step, B♭ → B, adding tension before F7 returns in bar 7 (week 24). In the example below the bass then lands on F; some players put C (F7's fifth) in the bass on bar 7 instead, so the bass climbs B♭ → B → C.
4. **Bars 8–10, a ii–V instead of V–IV:** D7 is the V7 of Gm7 (V7/ii, a secondary dominant built by last lesson's rule), and Gm7–C7 is the ii–V of F.
5. **Bars 11–12, the turnaround:** I–VI7–ii–V (F7 D7 | Gm7 C7) throws you back to the top.

Reference listening: "Billie's Bounce" and "Straight, No Chaser" are blues heads in F; "Blue Monk" is in B♭. Count the 12 bars as the melody comes round again.

```example
{
  "title": "Jazz blues in F: shells and bass",
  "bpm": 110, "timeSig": "4/4", "key": "F",
  "tracks": [
    { "instrument": "piano", "seq": "[F2 Eb3 A3]:w | [Bb2 D3 Ab3]:w | [F2 Eb3 A3]:w | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [Bb2 D3 Ab3]:w | [B2 D3 Ab3]:w | [F2 Eb3 A3]:w | [D3 F#3 C4]:w | [G2 F3 Bb3]:w | [C3 E3 Bb3]:w | [F2 Eb3 A3]:h [D3 F#3 C4]:h | [G2 F3 Bb3]:h [C3 E3 Bb3]:h |" },
    { "instrument": "bass", "seq": "F2:w | Bb1:w | F2:w | C2:h F2:h | Bb1:w | B1:w | F2:w | D2:w | G1:w | C2:w | F2:h D2:h | G1:h C2:h |" }
  ],
  "show": ["keyboard"]
}
```

## An original riff head

Blues heads are often riffs: a short idea, repeated, then answered. This one uses the F blues scale; notice the blue slide A♭→A in bar 1 (week 23).

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
  "count": 7, "passScore": 0.7,
  "spec": { "chords": ["F7", "Bb7", "Cm7", "Bdim7", "D7", "Gm7", "C7"], "root": "given", "prompt": "symbol", "key": "F" }
}
```

```exercise
{
  "id": "e2-blues-quiz",
  "type": "quiz",
  "title": "Jazz blues map",
  "passScore": 0.7,
  "spec": { "questions": [
    { "q": "Which chord appears in bar 2 of the jazz blues in F?", "choices": ["F7", "Bb7", "C7", "Gm7"], "answer": 1 },
    { "q": "Cm7–F7 in bar 4 leads to…", "choices": ["F7", "Bb7", "Gm7", "D7"], "answer": 1, "explain": "Cm7–F7 is the ii–V of Bb: a ii–V into IV." },
    { "q": "D7 in bar 8 is the V7 of…", "choices": ["F7", "Gm7", "C7", "Bb7"], "answer": 1 },
    { "q": "Bars 11–12 (F7 D7 | Gm7 C7) are called a…", "choices": ["bridge", "turnaround", "coda", "vamp"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "e3-comp-blues",
  "type": "play-melody",
  "title": "Comp the 12 bars",
  "instructions": "Left-hand shells, the bass plays along. Watch bar 6: Bdim7 is Bb7 with the bottom note raised a half step.",
  "passScore": 0.7,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "F", "seq": "[F2 Eb3 A3]:w | [Bb2 D3 Ab3]:w | [F2 Eb3 A3]:w | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [Bb2 D3 Ab3]:w | [B2 D3 Ab3]:w | [F2 Eb3 A3]:w | [D3 F#3 C4]:w | [G2 F3 Bb3]:w | [C3 E3 Bb3]:w | [F2 Eb3 A3]:h [D3 F#3 C4]:h | [G2 F3 Bb3]:h [C3 E3 Bb3]:h |", "showStaff": false, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "bass", "seq": "F2:w | Bb1:w | F2:w | C2:h F2:h | Bb1:w | B1:w | F2:w | D2:w | G1:w | C2:w | F2:h D2:h | G1:h C2:h |" } }
}
```

```exercise
{
  "id": "e4-play-head",
  "type": "play-melody",
  "title": "Play the riff head (first 4 bars)",
  "passScore": 0.7,
  "spec": { "bpm": 90, "timeSig": "4/4", "key": "F", "seq": "F4:8 Ab4:8 A4:8 C5:8 Eb5:q C5:q | D5:8 C5:8 Ab4:8 F4:8 r:h | F4:8 Ab4:8 A4:8 C5:8 Eb5:q C5:q | D5:8 C5:8 A4:8 F4:8 r:h |", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "piano", "seq": "[F2 Eb3 A3]:w | [Bb2 D3 Ab3]:w | [F2 Eb3 A3]:w | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h |" } }
}
```

## Ear review

```ladder
{ "skill": "degrees", "unlocks": 21, "intro": "Scale degrees at your level; the blue notes ♭3 and ♭7 of this head live on these rungs." }
```

```ladder
{ "skill": "scales", "unlocks": 11, "intro": "Scale colours at your level: blues players move between exactly these sounds." }
```
