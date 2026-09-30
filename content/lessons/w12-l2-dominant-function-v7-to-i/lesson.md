---
id: w12-l2-dominant-function-v7-to-i
title: V7 to I — Tension and Resolution
week: 12
order: 2
phase: p2
duration_min: 45
goals:
  - Explain tension and resolution, and why V7 pulls to I (the tritone between its 3rd and 7th)
  - Resolve V7 → I smoothly in C, G and F major and in A minor
  - Hear V against V7, and the leaning degrees 7 and 4 in any key
prerequisites: [w12-l1-maj7-dom7-min7]
tags: [harmony, dominant, sevenths, ear]
---

# V7 to I — Tension and Resolution

Music breathes in and out. Two words for that ([[tension and resolution]]):

- **Tension** is a sound that feels unfinished: it makes you expect something to come next.
- **Resolution** is the move that answers it, the "ahh" of arriving.

Listen: the first chord below is held for two bars. Most people feel it leaning forward, waiting. Then it resolves.

```example
{
  "title": "G7 held (tension), then C (resolution)",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[G3 B3 D4 F4]:w | [G3 B3 D4 F4]:w | [G3 C4 E4]:w" },
    { "instrument": "bass", "seq": "G2:w | G2:w | C2:w" }
  ],
  "show": ["keyboard"]
}
```

The strongest tension chord in a key is the dominant 7 on degree 5, **V7**. Its job, making you *need* the tonic, is called [[dominant function]].

## Why G7 wants C

G7 is G B D F. Two notes inside it do the work:

- **B** is degree 7 of C major, the leading tone: a half step below C.
- **F** is degree 4: a half step above E.

B and F form the tritone you heard squeeze inward in week 10. When G7 moves to C, **B rises to C and F falls to E**, each by a half step, to the nearest notes of the C chord. That squeeze is the "click" of coming home. A plain G chord (no F) has only the B, so it pulls, but less.

```example
{
  "title": "G → C, then G7 → C. Watch B→C and F→E",
  "bpm": 66, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[G3 B3 D4]:h [G3 C4 E4]:h | r:w | [G3 B3 F4]:h [G3 C4 E4]:h | r:w" },
    { "instrument": "bass", "seq": "G2:h C2:h | r:w | G2:h C2:h | r:w" }
  ],
  "show": ["keyboard", "staff"]
}
```

```exercise
{
  "id": "e1", "type": "play-melody", "title": "Resolve the tritone",
  "instructions": "Right hand: G3–B3–F4, then G3–C4–E4. Feel B and F squeeze inward to C and E. Then the same in two other positions.",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "[G3 B3 F4]:h [G3 C4 E4]:h | [G3 B3 F4]:h [G3 C4 E4]:h | [B3 F4 G4]:h [C4 E4 G4]:h | [F4 G4 B4]:h [E4 G4 C5]:h", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

This lesson opens a progressions rung that asks: is the dominant plain **V**, or **V7**? The seventh adds a sharper lean toward home. The drill runs at your current progressions rung, so you'll meet it once I, IV, V and vi are solid.

```ladder
{ "skill": "progressions", "unlocks": 4, "intro": "Opens \"V or V7 (in C)\"; the drill runs at your current rung." }
```

## V7 → I in other keys, and in minor

The recipe works in every key: find V (a fifth above the tonic), make it a dominant 7, resolve. In G major that's **D7 → G**; in F major, **C7 → F**. In A minor, use the major V from harmonic minor: **E7 → Am** (G♯ rises to A, D falls to C).

```example
{
  "title": "D7 → G, C7 → F, E7 → Am",
  "bpm": 66, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[D3 F#3 A3 C4]:h [D3 G3 B3]:h | [C3 E3 G3 Bb3]:h [C3 F3 A3]:h | [E3 G#3 B3 D4]:h [E3 A3 C4]:h" } ],
  "show": ["keyboard"]
}
```

```exercise
{
  "id": "e2", "type": "play-chord", "title": "V7 → I pairs",
  "instructions": "Play each pair. Move to the nearest notes of the resolution chord; any inversion is fine.",
  "count": 8, "passScore": 0.7,
  "spec": { "chords": ["G7", "C", "D7", "G", "C7", "F", "E7", "Am"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

```exercise
{
  "id": "e3", "type": "quiz-input", "title": "Find the V7",
  "spec": { "questions": [
    { "q": "V7 in C major (chord symbol)?", "answer": ["G7"], "kind": "text" },
    { "q": "V7 in G major?", "answer": ["D7"], "kind": "text" },
    { "q": "V7 in F major?", "answer": ["C7"], "kind": "text" },
    { "q": "V7 in A minor?", "answer": ["E7"], "kind": "text" },
    { "q": "In D7 → G, which note of D7 rises by a half step to G?", "answer": ["F#"], "kind": "note" },
    { "q": "In D7 → G, which note of D7 falls by a half step to B?", "answer": ["C"], "kind": "note" }
  ] }
}
```

## Tendency tones, in any key

The two notes that make V7 pull are also the "leaning" degrees of the scale: **7 leans up to 1**, **4 leans down to 3**. This lesson opens the degree rung that uses all seven degrees with the key changing every question; you'll meet it once degrees 1–5 in any key are solid, and until then the drill stays at your current rung. Whatever rung you're on, listen for that lean: after each answer, notice how 7 walks up and 4 walks down to home.

```ladder
{ "skill": "degrees", "unlocks": 16, "intro": "Opens \"Any key: all seven\"; the drill runs at your current rung. Listen for the leaning notes, 7 and 4." }
```
