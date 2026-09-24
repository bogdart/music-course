---
id: w13-l1-functions-and-cadences
title: Tonic, Subdominant, Dominant — and Four Cadences
week: 13
order: 1
phase: p2
duration_min: 45
goals:
  - Sort the chords of a major key into tonic, subdominant and dominant families
  - Name and hear authentic, plagal, half and deceptive cadences
  - Play each cadence in C major
prerequisites: [w12-l3-ii-v-i-and-ballad-daw]
tags: [harmony, function, cadences, ear]
---

# Tonic, Subdominant, Dominant — and Four Cadences

You now know seven chords in a major key. That sounds like a lot to track, but harmony has only three *jobs*. Knowing the job of a chord — its [[harmonic function]] — tells you how it will feel and where it wants to go.

## Three families

- **Tonic (T)** — home, rest: **I**, and its relatives **vi** and **iii** (they share two notes with I).
- **Subdominant (S)** — moving away, lifting: **IV** and **ii**. Also called predominant: they lead naturally to V.
- **Dominant (D)** — tension, "we must go home": **V**, **V7** and vii°.

The basic story of most songs is **T → S → D → T**: home, away, tension, home. I – IV – V – I is that story in four chords; I – ii – V7 – I is the jazzier version from last week.

```example
{
  "title": "T – S – D – T: C – F – G7 – C, then Am – Dm – G – C",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[E3 G3 C4]:w | [F3 A3 C4]:w | [F3 G3 B3]:w | [E3 G3 C4]:w | [E3 A3 C4]:w | [F3 A3 D4]:w | [D3 G3 B3]:w | [E3 G3 C4]:w" },
    { "instrument": "bass", "seq": "C2:w | F2:w | G2:w | C2:w | A1:w | D2:w | G1:w | C2:w" }
  ],
  "show": ["pianoroll"]
}
```

```exercise
{
  "id": "e1", "type": "quiz", "title": "Which family?",
  "spec": { "questions": [
    { "q": "vi (Am in C) belongs to…", "choices": ["Tonic", "Subdominant", "Dominant"], "answer": 0, "explain": "Am (A C E) shares C and E with C major: it's a softer, sadder home." },
    { "q": "ii (Dm in C) belongs to…", "choices": ["Tonic", "Subdominant", "Dominant"], "answer": 1 },
    { "q": "V7 belongs to…", "choices": ["Tonic", "Subdominant", "Dominant"], "answer": 2 },
    { "q": "IV (F in C) belongs to…", "choices": ["Tonic", "Subdominant", "Dominant"], "answer": 1 },
    { "q": "The most basic harmonic story is…", "choices": ["D → S → T", "T → S → D → T", "S → T → D", "T → D → S"], "answer": 1 }
  ] }
}
```

## Cadences: how phrases end

You met cadences in week 8: the chord move at the end of a phrase, musical punctuation. Now we can name four of them precisely.

| cadence | chords | feels like |
|---|---|---|
| **authentic** | V (or V7) → I | full stop |
| **plagal** | IV → I | soft "amen" |
| **half** | anything → V | comma, question |
| **deceptive** | V → vi | surprise: "not home yet!" |

The deceptive cadence works because vi is a tonic-family chord: it shares two notes with I, so it *almost* satisfies the dominant's pull — close enough to make sense, different enough to keep the song going. Songwriters use it to extend a phrase or to delay the final chorus.

```example
{
  "title": "Authentic, plagal, half, deceptive — each after two bars of setup",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[E3 G3 C4]:h [F3 A3 C4]:h | [F3 G3 B3]:h [E3 G3 C4]:h | r:w | [E3 G3 C4]:h [E3 G3 C4]:h | [F3 A3 C4]:h [E3 G3 C4]:h | r:w | [E3 G3 C4]:h [F3 A3 C4]:h | [D3 G3 B3]:w | r:w | [E3 G3 C4]:h [F3 A3 C4]:h | [F3 G3 B3]:h [E3 A3 C4]:h" },
    { "instrument": "bass", "seq": "C2:h F2:h | G2:h C2:h | r:w | C2:h C2:h | F2:h C2:h | r:w | C2:h F2:h | G2:w | r:w | C2:h F2:h | G2:h A2:h" }
  ],
  "show": ["pianoroll"]
}
```

```exercise
{
  "id": "e2", "type": "play-chord", "title": "Play the four cadences",
  "instructions": "Authentic G7→C, plagal F→C, half C→G, deceptive G→Am. Keep common tones.",
  "count": 8, "passScore": 0.8,
  "spec": { "chords": ["G7", "C", "F", "C", "C", "G", "G", "Am"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

```exercise
{
  "id": "e3", "type": "listen", "title": "Name the cadence",
  "spec": {
    "example": {
      "title": "Four phrase endings", "bpm": 80, "timeSig": "4/4", "key": "C",
      "tracks": [ { "instrument": "piano", "seq": "[C3 E3 G3]:h [D3 G3 B3]:h | [C3 E3 A3]:w | r:w | [C3 F3 A3]:h [C3 E3 G3]:h | [C3 E3 G3]:w | r:w | [D3 F3 A3]:h [D3 G3 B3]:h | [D3 G3 B3]:w | r:w | [D3 F3 G3 B3]:h [C3 E3 G3]:h | [C3 E3 G3]:w" } ]
    },
    "questions": [
      { "q": "Ending 1 (V → vi) is…", "choices": ["authentic", "plagal", "half", "deceptive"], "answer": 3 },
      { "q": "Ending 2 (IV → I) is…", "choices": ["authentic", "plagal", "half", "deceptive"], "answer": 1 },
      { "q": "Ending 3 (ii → V) is…", "choices": ["authentic", "plagal", "half", "deceptive"], "answer": 2 },
      { "q": "Ending 4 (V7 → I) is…", "choices": ["authentic", "plagal", "half", "deceptive"], "answer": 0 }
    ]
  }
}
```

```exercise
{
  "id": "e4", "type": "ear-progression", "title": "Hear the ending",
  "instructions": "Focus on the last two chords: full stop (V–I), amen (IV–I), comma (–V) or surprise (V–vi)?",
  "count": 10, "passScore": 0.7,
  "spec": { "key": "C", "mode": "major", "length": 3, "chords": ["I", "IV", "V", "vi"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "e5", "type": "ear-bass", "title": "Bass roots with function",
  "instructions": "Play the roots. For each, say T, S or D.",
  "count": 8, "passScore": 0.75,
  "spec": { "key": "C", "chords": ["I", "ii", "IV", "V", "vi"], "answer": "play" }
}
```

```exercise
{
  "id": "e6", "type": "roman-analysis", "title": "Analyse a phrase",
  "instructions": "Then find the cadence at the end.",
  "count": 8, "passScore": 0.8,
  "spec": { "key": "C", "chords": ["C", "Am", "Dm", "G7", "C", "F", "G", "Am"], "prompt": "symbols" }
}
```
