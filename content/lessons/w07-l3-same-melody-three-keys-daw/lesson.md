---
id: w07-l3-same-melody-three-keys-daw
title: One Melody, Three Keys
week: 7
order: 3
phase: p1
duration_min: 50
goals:
  - Transpose chords as well as melodies (I, IV, V in C, G and F)
  - Hear the effect of a key change
  - Write a melody in C and transpose it to G and F in the DAW
prerequisites: [w07-l2-transposing-melodies]
tags: [transposition, keys, chords, daw, ear]
---

# One melody, three keys

Chords transpose exactly like melodies: the **numerals stay**, the letters change. The three major chords of a key — I, IV and V — are the backbone of countless folk, blues, rock and country songs. Here they are in the three keys you know:

| Key | I | IV | V |
|---|---|---|---|
| C major | C | F | G |
| G major | G | C | D |
| F major | F | B♭ | C |

Notice how neighbouring keys on the circle of fifths share chords: C major and G major both contain C and G; C major and F major both contain F and C. That shared material is why moving between these keys sounds smooth.

```chords
{ "key": "G", "bars": ["G", "C", "D", "G"], "roman": true, "play": true, "bpm": 80 }
```

```chords
{ "key": "F", "bars": ["F", "Bb", "C", "F"], "roman": true, "play": true, "bpm": 80 }
```

## Hearing a key change

When a whole song moves to a new key, your ear re-centres on the new home within a bar or two. Listen to one short phrase played in C, then G, then F. Each time, the *tune* is identical; what changes is the height and a subtle shift of brightness. Going up usually feels like a lift in energy — which is why so many pop songs push their last chorus up a step.

```example
{
  "title": "Same phrase in C, G and F",
  "bpm": 96, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "E4:q G4:q F4:q D4:q | E4:q C4:q D4:h | C4:q E4:q D4:q B3:q | C4:w | B3:q D4:q C4:q A3:q | B3:q G3:q A3:h | G3:q B3:q A3:q F#3:q | G3:w | A3:q C4:q Bb3:q G3:q | A3:q F3:q G3:h | F3:q A3:q G3:q E3:q | F3:w" },
    { "instrument": "pad", "seq": "[C3 E3 G3]:h [F3 A3 C4]:h | [C3 E3 G3]:h [B2 D3 G3]:h | [C3 E3 G3]:h [B2 D3 G3]:h | [C3 E3 G3]:w | [G2 B2 D3]:h [C3 E3 G3]:h | [G2 B2 D3]:h [A2 D3 F#3]:h | [G2 B2 D3]:h [A2 D3 F#3]:h | [G2 B2 D3]:w | [F2 A2 C3]:h [Bb2 D3 F3]:h | [F2 A2 C3]:h [G2 C3 E3]:h | [F2 A2 C3]:h [G2 C3 E3]:h | [F2 A2 C3]:w" }
  ],
  "show": ["pianoroll"]
}
```

In the piano roll you can *see* transposition: the three phrases have exactly the same shape, just shifted up or down.

## Your workflow in the DAW

1. Write a 4-bar melody in **C major** (degrees 1–6, mostly steps, ending on C).
2. **Write down its degrees** — e.g. 3 5 4 2 | 3 1 2 ….
3. Build the G and F versions from those degrees. (The DAW's transpose tool exists too: +7 half steps to G, +5 to F — use it only to check yourself.)
4. Play all three one after another and listen for any note that sounds "off" — it's usually the missing F♯ or B♭.

## Drills

```exercise
{
  "id": "e1",
  "type": "quiz-input",
  "title": "Transpose the chords",
  "spec": { "questions": [
    { "q": "IV in G major?", "answer": ["C"], "kind": "note" },
    { "q": "V in G major?", "answer": ["D"], "kind": "note" },
    { "q": "IV in F major?", "answer": ["Bb", "A#"], "kind": "note" },
    { "q": "V in F major?", "answer": ["C"], "kind": "note" },
    { "q": "Half steps to transpose from C up to G?", "answer": ["7"], "kind": "number" },
    { "q": "Half steps to transpose from C up to F?", "answer": ["5"], "kind": "number" }
  ] },
  "passScore": 0.8
}
```

```exercise
{
  "id": "e2",
  "type": "play-chord",
  "title": "I–IV–V–I in G",
  "passScore": 0.75,
  "spec": { "chords": ["G", "C", "D", "G"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

```exercise
{
  "id": "e3",
  "type": "play-chord",
  "title": "I–IV–V–I in F",
  "passScore": 0.75,
  "spec": { "chords": ["F", "Bb", "C", "F"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

```exercise
{
  "id": "e4",
  "type": "ear-note",
  "title": "1, 3, 5 or 6 in F",
  "count": 10,
  "passScore": 0.75,
  "spec": { "key": "F", "mode": "major", "degrees": [1, 3, 5, 6], "reference": "cadence", "octaves": [3, 4], "instrument": "piano" }
}
```

```exercise
{
  "id": "e5",
  "type": "ear-chord",
  "title": "Major or minor? (review)",
  "count": 10,
  "passScore": 0.8,
  "spec": { "qualities": ["maj", "min"], "inversions": [0], "voicing": "close", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e6",
  "type": "daw-task",
  "title": "Same melody in C, G and F",
  "spec": {
    "template": { "bpm": 96, "key": "C", "tracks": [ { "instrument": "piano", "seq": "" }, { "instrument": "lead", "seq": "" }, { "instrument": "pluck", "seq": "" } ] },
    "task": "Track 1 (piano), bars 1–4: write a 4-bar melody in C major ending on C. Track 2 (lead), bars 5–8: the same melody transposed to G major, ending on G. Track 3 (pluck), bars 9–12: the same melody in F major, ending on F. Work from your written-down degrees. Self-check: play the whole 12 bars — the three phrases must have identical rhythm and shape, and none should contain a note that sounds out of key.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "lead", "pluck"] },
      { "kind": "bars", "min": 12, "max": 12 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 0 },
      { "kind": "ends-on", "degree": 1, "track": 0 },
      { "kind": "note-count", "min": 6, "max": 24, "track": 0 },
      { "kind": "in-key", "key": "G", "scale": "major", "allowPassing": false, "track": 1 },
      { "kind": "note-count", "min": 6, "max": 24, "track": 1 },
      { "kind": "in-key", "key": "F", "scale": "major", "allowPassing": false, "track": 2 },
      { "kind": "note-count", "min": 6, "max": 24, "track": 2 },
      { "kind": "custom", "id": "same-melody-transposed", "note": "Tracks 2 and 3 are exact transpositions of track 1 (same rhythm, same degrees). Self-check by listening and comparing the piano-roll shapes." }
    ],
    "minBars": 12, "maxBars": 12
  }
}
```
