---
id: w29-l1-aaba-and-rhythm-changes
title: AABA and Rhythm Changes
week: 29
order: 1
phase: p4
duration_min: 45
goals:
  - Map the 32-bar AABA form and find the bridge by ear
  - Play the A section of rhythm changes in Bb with shells
  - Play the dominant-chain bridge (III7–VI7–II7–V7)
prerequisites: [w28-l3-ii-v-i-around-the-cycle, w17-l1-sections-and-forms]
tags: [jazz, form, standards, rhythm-changes]
songs:
  - { title: "I Got Rhythm", composer: "George Gershwin", public_domain: false }
  - { title: "Oleo", composer: "Sonny Rollins", public_domain: false }
  - { title: "Anthropology", composer: "Charlie Parker & Dizzy Gillespie", public_domain: false }
  - { title: "Blue Moon", composer: "Richard Rodgers", public_domain: false }
---

# AABA and Rhythm Changes

Most jazz standards come from 1920s–50s songwriting, and the favourite form was [[32-bar AABA]]: an 8-bar **A** idea, repeated, a contrasting 8-bar **B** (the *bridge* or *middle eight*), then **A** once more. You met AABA in Phase 3; in jazz it is the default map, and soloists improvise over the whole 32-bar "chorus" again and again.

## Listening by reference

- **"Blue Moon"** (Rodgers, 1934): AABA, and the A section is almost nothing but I–vi–ii–V. Listen for how the bridge suddenly changes key.
- **"I Got Rhythm"** (Gershwin, 1930): AABA in Bb. Its chords became so popular that jazz players wrote hundreds of new melodies over them — "Oleo" (Rollins), "Anthropology" (Parker/Gillespie). These chords are called [[rhythm changes]].

## Rhythm changes, A section

Two chords per bar, mostly I–vi–ii–V over and over (the vi is often played as a dominant, G7, to pull harder to Cm7). Bars 5–6 visit IV with a chromatic lift through Edim7.

```example
{
  "title": "Rhythm changes A section in Bb (shells + bass)",
  "bpm": 120, "timeSig": "4/4", "key": "Bb",
  "tracks": [
    { "instrument": "piano", "seq": "[Bb2 D3 G3]:h [G2 F3 B3]:h | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [Bb2 D3 G3]:h [G2 F3 B3]:h | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [F2 Eb3 Ab3]:h [Bb2 D3 Ab3]:h | [Eb2 C3 G3]:h [E2 Db3 G3]:h | [F2 D3 Bb3]:h [G2 F3 B3]:h | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h |" },
    { "instrument": "bass", "seq": "Bb1:h G1:h | C2:h F1:h | Bb1:h G1:h | C2:h F1:h | F1:h Bb1:h | Eb2:h E2:h | F1:h G1:h | C2:h F1:h |" }
  ],
  "show": ["keyboard"]
}
```

## The bridge: a chain of dominants

The bridge is pure momentum: D7 → G7 → C7 → F7, two bars each. Every chord is the V of the next, travelling around the cycle of fourths until F7 drops us home to Bb. Players call it "III7–VI7–II7–V7".

```chords
{ "key": "Bb", "bars": ["D7", "D7", "G7", "G7", "C7", "C7", "F7", "F7"], "roman": true, "play": true, "bpm": 120 }
```

```example
{
  "title": "Bridge with alternating shells",
  "bpm": 120, "timeSig": "4/4", "key": "Bb",
  "tracks": [ { "instrument": "piano", "seq": "[D3 F#3 C4]:w | [D3 F#3 C4]:w | [G2 F3 B3]:w | [G2 F3 B3]:w | [C3 E3 Bb3]:w | [C3 E3 Bb3]:w | [F2 Eb3 A3]:w | [F2 Eb3 A3]:w |" } ],
  "show": ["keyboard"]
}
```

Whole form: A (8) · A (8) · B (8) · A (8) = 32 bars, bridge starting at bar 17.

## Drills

```exercise
{
  "id": "e1-form-quiz",
  "type": "quiz",
  "title": "Form map",
  "passScore": 0.75,
  "spec": { "questions": [
    { "q": "In a 32-bar AABA tune, the bridge begins at bar…", "choices": ["9", "17", "25", "13"], "answer": 1 },
    { "q": "How many times is the A section heard in one chorus?", "choices": ["1", "2", "3", "4"], "answer": 2 },
    { "q": "The rhythm-changes bridge in Bb is D7–G7–C7–F7. Each chord is…", "choices": ["the IV of the next", "the V of the next", "a borrowed chord", "a tritone sub"], "answer": 1 },
    { "q": "Why do jazz players write new melodies over 'I Got Rhythm' chords?", "choices": ["Chord progressions are not protected like melodies, and these changes are fun to blow on", "The melody was lost", "It is a blues", "They are required to"], "answer": 0 }
  ] }
}
```

```exercise
{
  "id": "e2-roman-a",
  "type": "roman-analysis",
  "title": "Name the A-section chords",
  "count": 6, "passScore": 0.75,
  "spec": { "key": "Bb", "chords": ["Bb6", "Gm7", "Cm7", "F7", "Fm7", "Bb7", "Eb6"], "prompt": "symbols" }
}
```

```exercise
{
  "id": "e3-play-a",
  "type": "play-melody",
  "title": "A section shells",
  "instructions": "Two chords per bar. Start at 70 bpm and push it up over the week.",
  "count": 6, "passScore": 0.7,
  "spec": { "bpm": 70, "timeSig": "4/4", "key": "Bb", "seq": "[Bb2 D3 G3]:h [G2 F3 B3]:h | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [Bb2 D3 G3]:h [G2 F3 B3]:h | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h | [F2 Eb3 Ab3]:h [Bb2 D3 Ab3]:h | [Eb2 C3 G3]:h [E2 Db3 G3]:h | [F2 D3 Bb3]:h [G2 F3 B3]:h | [C3 Eb3 Bb3]:h [F2 Eb3 A3]:h |", "showStaff": false, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "bass", "seq": "Bb1:h G1:h | C2:h F1:h | Bb1:h G1:h | C2:h F1:h | F1:h Bb1:h | Eb2:h E2:h | F1:h G1:h | C2:h F1:h |" } }
}
```

```exercise
{
  "id": "e4-play-bridge",
  "type": "play-melody",
  "title": "The bridge",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "Bb", "seq": "[D3 F#3 C4]:w | [D3 F#3 C4]:w | [G2 F3 B3]:w | [G2 F3 B3]:w | [C3 E3 Bb3]:w | [C3 E3 Bb3]:w | [F2 Eb3 A3]:w | [F2 Eb3 A3]:w |", "showStaff": false, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e5-ear-turnaround",
  "type": "ear-progression",
  "title": "Hear I–vi–ii–V loops",
  "count": 8, "passScore": 0.75,
  "spec": { "key": "random", "mode": "major", "length": 4, "chords": ["I", "ii", "IV", "V7", "vi"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "e6-ear-triplet-rhythm",
  "type": "ear-rhythm",
  "title": "Triplet feel",
  "instructions": "Swing is built on triplets. Tap back what you hear.",
  "count": 6, "passScore": 0.7,
  "spec": { "timeSig": "4/4", "bars": 1, "subdivision": "8t", "rests": true, "answer": "tap" }
}
```
