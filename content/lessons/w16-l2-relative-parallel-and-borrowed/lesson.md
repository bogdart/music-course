---
id: w16-l2-relative-parallel-and-borrowed
title: Parallel Keys and Borrowed Chords
week: 16
order: 2
phase: p2
duration_min: 50
goals:
  - Tell relative keys (C major / A minor) from parallel keys (C major / C minor)
  - Play the borrowed chords iv and ♭VII in a major key and hear IV against iv
  - Hear minor-key progressions and degrees in any minor key
prerequisites: [w16-l1-circle-of-fifths]
tags: [keys, borrowed-chords, minor, harmony, ear]
songs:
  - { title: "Hey Jude", composer: "The Beatles (1968)", public_domain: false }
  - { title: "Creep", composer: "Radiohead (1992)", public_domain: false }
---

# Parallel Keys and Borrowed Chords

## Relative and parallel

You know **relative** keys from week 9: C major and A minor share all their notes but have different homes. Today's pair is the opposite: **C major and C minor** share the same home, C, but three notes differ (E, A, B become E♭, A♭, B♭: the ♭3, ♭6 and ♭7 you met in week 9). They're [[parallel keys]].

```example
{
  "title": "C major, then C natural minor: same home, three notes lowered",
  "bpm": 96, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 A4:8 B4:8 C5:8 | C5:w | C4:8 D4:8 Eb4:8 F4:8 G4:8 Ab4:8 Bb4:8 C5:8 | C5:w" } ],
  "show": ["keyboard", "staff"]
}
```

## Minor-key progressions, a recap

Minor keys have their own favourite moves, all of which you've played: **i – iv – V – i** (the minor cadence, with the raised 7th in V) and loops built only from natural-minor chords, like **i – VI – III – VII** from Greensleeves week or **i – iv – VI – VII** below. Later in this lesson the progression ladder opens minor keys, starting with i, iv and V in A minor.

```example
{
  "title": "A minor: i – iv – V – i, then i – iv – VI – VII",
  "bpm": 76, "timeSig": "4/4", "key": "Am",
  "tracks": [
    { "instrument": "piano", "seq": "[A3 C4 E4]:w | [A3 D4 F4]:w | [G#3 B3 E4]:w | [A3 C4 E4]:w | [A3 C4 E4]:w | [A3 D4 F4]:w | [A3 C4 F4]:w | [G3 B3 D4]:w" },
    { "instrument": "bass", "seq": "A1:w | D2:w | E2:w | A1:w | A1:w | D2:w | F1:w | G1:w" }
  ],
  "show": ["pianoroll"]
}
```

## Borrowing from the parallel minor

Because C major and C minor share a home, songwriters freely **borrow** chords from C minor while staying in C major. That's a [[borrowed chord]]. It still points to C as home, but brings a shadow of minor with it. The two most popular:

- **iv**, F minor (F A♭ C) instead of F major. Bittersweet, nostalgic. The classic move is **IV → iv → I**: only one note changes, A sinks to A♭, then to G in the C chord.
- **♭VII**, B♭ major (B♭ D F). The numeral reads "the major chord on the lowered 7th degree": the ♭ means a half step below the degree in major (B → B♭), just like ♭3 in week 9. It sounds bold and open, a rock "anthem" chord. The classic move is **I → ♭VII → IV → I**.

```example
{
  "title": "I – IV – iv – I, then I – ♭VII – IV – I (in C)",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[E3 G3 C4]:w | [F3 A3 C4]:w | [F3 Ab3 C4]:w | [E3 G3 C4]:w | [E3 G3 C4]:w | [D3 F3 Bb3]:w | [C3 F3 A3]:w | [C3 E3 G3]:w" },
    { "instrument": "bass", "seq": "C2:w | F1:w | F1:w | C2:w | C2:w | Bb1:w | F1:w | C2:w" }
  ],
  "show": ["keyboard", "pianoroll"]
}
```

Two famous uses. The long coda of the Beatles' *Hey Jude* (1968, F major) repeats **F – E♭ – B♭ – F**: I – ♭VII – IV – I, over and over. Radiohead's *Creep* (1992, G major) ends its four-chord loop by turning C major into **C minor**, the borrowed iv, and that's the sinking feeling under the vocal.

```exercise
{
  "id": "e1", "type": "play-chord", "title": "IV → iv → I",
  "instructions": "Keep F and C held; only A moves down to A♭. Then resolve to C.",
  "count": 4, "passScore": 0.7,
  "spec": { "chords": ["C", "F", "Fm", "C"], "inversion": "any", "sequence": true, "bpm": 60, "key": "C" }
}
```

```exercise
{
  "id": "e2", "type": "play-chord", "title": "I → ♭VII → IV → I in C and in G",
  "instructions": "In C: C, B♭, F, C. In G: G, F, C, G.",
  "count": 8, "passScore": 0.7,
  "spec": { "chords": ["C", "Bb", "F", "C", "G", "F", "C", "G"], "inversion": "any", "sequence": true, "bpm": 66 }
}
```

This lesson opens two progression rungs, each a two-way question at heart: minor-key chords (i, iv, V in A minor); then **IV or iv?** (listen for the one note that drops). The drill runs at your current progression rung, so it may still be an earlier one. The third borrowed question, **V or ♭VII?**, opens next lesson.

```ladder
{ "skill": "progressions", "unlocks": 10, "intro": "Opens: minor-key chords (i, iv, V); then IV or iv." }
```

```exercise
{
  "id": "e3", "type": "quiz", "title": "Relative, parallel, borrowed",
  "spec": { "questions": [
    { "q": "The parallel minor of G major is…", "choices": ["E minor", "G minor", "D minor", "B minor"], "answer": 1 },
    { "q": "The relative minor of G major is…", "choices": ["E minor", "G minor", "D minor", "B minor"], "answer": 0 },
    { "q": "In C major, the borrowed iv chord is…", "choices": ["F", "Fm", "Dm", "A♭"], "answer": 1 },
    { "q": "In G major, ♭VII is…", "choices": ["F♯", "F", "Fm", "Em"], "answer": 1, "explain": "G major's 7th degree is F♯; lowered, it's F, and ♭VII is the F major chord." },
    { "q": "Borrowed chords come from…", "choices": ["the relative minor", "the parallel minor", "the key a fifth up"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "e4", "type": "roman-analysis", "title": "Analyse with borrowed chords",
  "instructions": "Key: C major. Borrowed chords get their own numerals: iv, ♭VII.",
  "passScore": 0.7,
  "spec": { "key": "C", "chords": ["C", "Bb", "F", "C", "F", "Fm", "C", "G"], "prompt": "symbols" }
}
```

## Ear corner: minor, any key

This lesson opens the degree rung where the *minor* key changes every question, as the major rungs did from week 11 (so far the minor degree rungs stayed in A minor). The drill runs at your current degree rung. When the rung arrives, the minor cadence (i – iv – V – i) tells you where home is.

```ladder
{ "skill": "degrees", "unlocks": 18, "intro": "Opens: a new minor key every question. The drill runs at your current degree rung." }
```
