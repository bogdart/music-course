---
id: w06-l3-diatonic-triads-and-roman-numerals
title: The Chords of a Key and Roman Numerals
week: 6
order: 3
phase: p1
duration_min: 50
goals:
  - Build a triad on every degree of C major and label it I ii iii IV V vi vii°
  - Play the I–V–vi–IV progression and recognise it in famous songs (by reference)
  - Write chords + melody over I–V–vi–IV in the DAW
prerequisites: [w06-l2-minor-triads]
tags: [chords, harmony, roman-numerals, progressions, daw]
songs:
  - { title: "Let It Be", artist: "The Beatles", public_domain: false }
  - { title: "With or Without You", artist: "U2", public_domain: false }
  - { title: "Don't Stop Believin'", artist: "Journey", public_domain: false }
---

# The chords of a key

Build a triad on each note of the C major scale, using only notes of the scale (white keys), and you get the seven [[diatonic]] chords of C major — the family of chords that "belong" to the key:

| Degree | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|
| Chord | C | Dm | Em | F | G | Am | B° |
| Quality | major | minor | minor | major | major | minor | diminished |
| [[Roman numeral]] | **I** | ii | iii | **IV** | **V** | vi | vii° |

Upper-case numerals = major, lower-case = minor. The seventh chord, B–D–F, has two minor 3rds; it's called [[diminished]] (°) and sounds tense. You'll rarely need it this phase.

The pattern **major, minor, minor, major, major, minor, diminished** is the same in *every* major key. That's why musicians talk in numerals: "I–V–vi–IV" means C–G–Am–F in C, but G–D–Em–C in G. The numerals describe the *relationships*, which is what your ear actually hears.

```example
{
  "title": "The seven triads of C major",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:h [D4 F4 A4]:h | [E4 G4 B4]:h [F4 A4 C5]:h | [G4 B4 D5]:h [A4 C5 E5]:h | [B4 D5 F5]:h [C5 E5 G5]:h" } ],
  "show": ["staff", "keyboard"]
}
```

## I–V–vi–IV: the most famous progression

Four chords — I, V, vi, IV — power a staggering number of pop songs. For example (reference only):

- "Let It Be" — The Beatles: C major, about 72 BPM, **C – G – Am – F**.
- "With or Without You" — U2: D major, about 110 BPM, **D – A – Bm – G** throughout.
- "Don't Stop Believin'" — Journey: E major, about 119 BPM, verse on **E – B – C♯m – A**.

```chords
{ "key": "C", "bars": ["C", "G", "Am", "F"], "roman": true, "play": true, "bpm": 80 }
```

Why does it work so well? I is home; V pulls away with tension; vi is home's darker cousin (it shares two notes with I); IV opens up and sets up the return to I. It's a small journey that ends where it can loop forever.

**Fingering tip:** you don't have to jump your hand. Play C as C–E–G, then G as **B–D–G**, Am as **C–E–A**, F as **C–F–A**. Each chord keeps shared notes where they are — the app accepts any arrangement of the right notes.

## Degree 6 (la)

The vi chord's root is degree **6**. After the cadence, 6 sounds soft and slightly melancholy, wanting to step down to 5.

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
  "passScore": 0.8
}
```

```exercise
{
  "id": "e2",
  "type": "roman-analysis",
  "title": "Label the chords",
  "count": 7,
  "passScore": 0.8,
  "spec": { "key": "C", "chords": ["C", "Dm", "Em", "F", "G", "Am", "Bdim"], "prompt": "symbols" }
}
```

```exercise
{
  "id": "e3",
  "type": "build-chord",
  "title": "Build from the numeral",
  "count": 8,
  "passScore": 0.8,
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
  "id": "e5",
  "type": "ear-chord",
  "title": "Major or minor? (review)",
  "count": 12,
  "passScore": 0.8,
  "spec": { "qualities": ["maj", "min"], "inversions": [0], "voicing": "close", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e6",
  "type": "ear-note",
  "title": "1, 3, 5 or 6?",
  "instructions": "6 is soft and leans down toward 5.",
  "count": 12,
  "passScore": 0.7,
  "spec": { "key": "C", "mode": "major", "degrees": [1, 3, 5, 6], "reference": "cadence", "octaves": [3, 4], "instrument": "piano" }
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
