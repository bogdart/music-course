---
id: w06-l3-diatonic-triads-and-roman-numerals
title: The Chords of C Major and Roman Numerals
week: 6
order: 3
phase: p1
duration_min: 50
goals:
  - Build a triad on every degree of C major and label it I ii iii IV V vi vii°
  - Know where the diminished triad (vii°) sits in the key
  - Hear degree 6 (la); write chords + melody over I–V–vi–IV in the DAW
prerequisites: [w06-l2-minor-triads]
tags: [chords, harmony, roman-numerals, progressions, daw]
songs:
  - { title: "Let It Be", artist: "The Beatles", public_domain: false }
  - { title: "With or Without You", artist: "U2", public_domain: false }
---

# The chords of C major

Build a triad on each note of the C major scale, using only notes of the scale (white keys), and you get the seven [[diatonic]] chords of C major — the family of chords that belong to the key:

| Degree | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|
| Chord | C | Dm | Em | F | G | Am | B° |
| Quality | major | minor | minor | major | major | minor | diminished |
| [[Roman numeral]] | **I** | ii | iii | **IV** | **V** | vi | vii° |

Upper-case numerals = major, lower-case = minor. The pattern **major, minor, minor, major, major, minor, diminished** is the same in *every* major key, which is why musicians talk in numerals: "I–V–vi–IV" means C–G–Am–F in C, and the same *relationships* in any other key.

```example
{
  "title": "The seven triads of C major, I to vii° and back to I",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:h [D4 F4 A4]:h | [E4 G4 B4]:h [F4 A4 C5]:h | [G4 B4 D5]:h [A4 C5 E5]:h | [B4 D5 F5]:h [C5 E5 G5]:h" } ],
  "show": ["staff", "keyboard"]
}
```

## vii°: the diminished triad

The chord on degree 7, B–D–F, is the **diminished** triad from last lesson: two minor 3rds, outer notes only 6 half steps apart. It sounds tense and unstable, and you'll rarely use it for now — but it belongs to the family, so it gets its numeral: **vii°**.

## I–V–vi–IV

Four chords — I, V, vi, IV — power a huge number of pop songs. For example (reference only): "Let It Be" by The Beatles uses **C – G – Am – F** in C major; "With or Without You" by U2 loops **D – A – Bm – G** in D major.

```chords
{ "key": "C", "bars": ["C", "G", "Am", "F"], "roman": true, "play": true, "bpm": 80 }
```

Informally: I is home; V is the tension chord from the cadence; vi is a softer, darker neighbour of home (it shares two notes with I); IV leads away and back. Week 13 gives these roles proper names.

**Fingering tip:** you don't have to jump your hand. Play C as C–E–G, then G as **B–D–G**, Am as **C–E–A**, F as **C–F–A** — shared notes stay where they are. The app accepts any arrangement of the right notes.

## Degree 6 (la)

vi's root is degree **6** — A in C major, just above sol. After the cadence, 6 is not a home-chord note, so it doesn't settle. Many people describe it as soft or wistful. After each answer the app walks it **up** to home, 6 → 7 → 1:

```example
{
  "title": "Cadence, then 6 (A), then 6 walking up: A B C",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | r:w | A4:w | A4:q B4:q C5:h" } ],
  "show": ["keyboard"]
}
```

This lesson opens two degree rungs with 6 in them: first 6 against the home-chord notes (1, 3, 5 or 6?), then all of 1–6. The drill below runs at your current degree rung, so you'll meet 6 once 1–5 after the cadence is solid. (Echoing melodies that use 6 comes in week 7.)

```ladder
{ "skill": "degrees", "unlocks": 8, "intro": "Opens \"1, 3, 5 or 6\" and \"1 to 6\" (after the cadence); the drill runs at your current rung." }
```

## Drills

```exercise
{
  "id": "e1",
  "type": "quiz",
  "title": "Numerals",
  "spec": { "questions": [
    { "q": "In C major, the V chord is…", "choices": ["G", "F", "Am"], "answer": 0 },
    { "q": "In C major, vi is…", "choices": ["A major", "A minor", "F major"], "answer": 1 },
    { "q": "Lower-case numerals mean…", "choices": ["minor chords", "quiet chords", "major chords"], "answer": 0 },
    { "q": "In any major key, which chords are major?", "choices": ["I, IV, V", "I, ii, iii", "ii, V, vi"], "answer": 0 },
    { "q": "I–V–vi–IV in G major is…", "choices": ["G D Em C", "G C D Em", "C G Am F"], "answer": 0 },
    { "q": "vii° in C major (B–D–F) is…", "choices": ["major", "minor", "diminished"], "answer": 2 }
  ] },
  "passScore": 0.75
}
```


```exercise
{
  "id": "e2",
  "type": "roman-analysis",
  "title": "Label the chords",
  "count": 7,
  "passScore": 0.75,
  "spec": { "key": "C", "chords": ["C", "Dm", "Em", "F", "G", "Am", "Bdim"], "prompt": "symbols" }
}
```

```exercise
{
  "id": "e3",
  "type": "build-chord",
  "title": "Build from the numeral",
  "count": 8,
  "passScore": 0.75,
  "spec": { "chords": ["C", "Dm", "Em", "F", "G", "Am"], "root": "given", "prompt": "roman", "key": "C" }
}
```

```exercise
{
  "id": "e4",
  "type": "play-chord",
  "title": "Play I–V–vi–IV",
  "instructions": "Use the close positions from the tip: C–E–G, B–D–G, C–E–A, C–F–A.",
  "passScore": 0.75,
  "spec": { "chords": ["C", "G", "Am", "F"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

```exercise
{
  "id": "e7",
  "type": "daw-task",
  "title": "I–V–vi–IV with a melody",
  "spec": {
    "template": { "bpm": 80, "key": "C", "tracks": [ { "instrument": "piano", "seq": "" }, { "instrument": "lead", "seq": "" } ] },
    "task": "Track 1 (piano): play C – G – Am – F as block chords, one chord per bar, whole notes; repeat once for 8 bars. Track 2 (lead): write a melody in C major. On beats 1 and 3 of each bar, use a note of the chord underneath (e.g. C, E or G over C; B, D or G over G). Between those beats, anything from the scale is fine. End on C. Loop it and adjust any note that sounds like it's fighting the chord.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "lead"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 0 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1, 3], "progression": ["I", "V", "vi", "IV"], "barsPerChord": 1, "minRatio": 0.75, "track": 1 },
      { "kind": "range", "low": "C4", "high": "C5", "track": 1 },
      { "kind": "ends-on", "degree": 1, "track": 1 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```
