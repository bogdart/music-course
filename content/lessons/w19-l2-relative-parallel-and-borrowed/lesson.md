---
id: w19-l2-relative-parallel-and-borrowed
title: Parallel Keys and Borrowed Chords
week: 19
order: 2
phase: p2
duration_min: 50
goals:
  - Tell relative keys (C major / A minor) from parallel keys (C major / C minor)
  - Play the borrowed chords iv and ♭VII in a major key (IV → iv → I, I → ♭VII → IV → I)
  - Hear i – iv – V in a minor key, and IV against iv in a major key (V against ♭VII opens next lesson)
prerequisites: [w19-l1-circle-of-fifths]
tags: [keys, borrowed-chords, minor, harmony, ear]
songs:
  - { title: "Hey Jude", composer: "The Beatles (1968)", public_domain: false }
  - { title: "Creep", composer: "Radiohead (1992)", public_domain: false }
---

# Parallel Keys and Borrowed Chords

## Relative and parallel

You know **relative** keys from week 13: C major and A minor share all their notes but have different homes. Today's pair is the opposite: **C major and C minor** share the same home, C, but three notes differ (E, A, B become E♭, A♭, B♭: the ♭3, ♭6 and ♭7 you met in week 13). They're [[parallel keys]].

```example
{
  "title": "C major, then C natural minor: same home, three notes lowered",
  "bpm": 96, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:8 D4:8 E4:8 F4:8 G4:8 A4:8 B4:8 C5:8 | C5:w | C4:8 D4:8 Eb4:8 F4:8 G4:8 Ab4:8 Bb4:8 C5:8 | C5:w" } ],
  "show": ["keyboard", "staff"]
}
```

## Minor-key progressions, a recap

Minor keys have their own favourite moves, all of which you've played: **i – iv – V – i** (the minor cadence, with the raised 7th in V) and loops built only from natural-minor chords, like **i – VI – III – VII** from Greensleeves week or **i – iv – VI – VII** below. Today the progression drill gets its first minor-key rung: **i, iv and V in A minor** (Am, Dm and E, the major V from harmonic minor in week 14). It's the minor twin of I – IV – V: home, away, tension. (You met *Zombie* in week 16: a minor-key song.)

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

### Try it: i – iv – V – i

1. Play Am – Dm – E – Am with roots low (A, D, E, A). Listen to G♯ in the E chord pulling up to A.
2. Play Am, then Dm or E at random, eyes closed: "away" (iv, soft and dark) or "pull" (V, bright and hungry)?

**If you can't hear it yet:** find the bass: A = i, D = iv, E = V. The only major chord of the three is V.

## Borrowing from the parallel minor

Because C major and C minor share a home, songwriters freely **borrow** chords from C minor while staying in C major. That's a [[borrowed chord]]. It still points to C as home, but brings a shadow of minor with it. The two most popular:

- **iv**, F minor (F A♭ C) instead of F major. Bittersweet, nostalgic. The classic move is **IV → iv → I**: only one note changes, A sinks to A♭, then to G in the C chord.
- **♭VII**, B♭ major (B♭ D F). The numeral reads "the major chord on the lowered 7th degree": the ♭ means a half step below the degree in major (B → B♭), just like ♭3 in week 13. It sounds bold and open, a rock "anthem" chord. The classic move is **I → ♭VII → IV → I**.

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

### Try it: IV or iv

1. Play C – F – C, slowly. Then C – **Fm** – C. Only one key differs: A in F, A♭ in Fm. Play A, then A♭ alone: that's the whole difference.
2. Play F, then Fm, and say a word for each. Most people land on something like "open" and "sinking" — use your own words.
3. Look away from your hands, play one of the two versions, and name it before you look.

Check: two short progressions in C. Which middle chord did you hear?

```exercise
{
  "id": "e5", "type": "listen", "title": "Check: IV or iv?",
  "instructions": "Play each one. Then play F and Fm on your keyboard and match the middle chord.",
  "spec": {
    "examples": [
      { "title": "Progression 1", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[E3 G3 C4]:w | [F3 Ab3 C4]:w | [E3 G3 C4]:w" }, { "instrument": "bass", "seq": "C2:w | F1:w | C2:w" } ] },
      { "title": "Progression 2", "bpm": 70, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[E3 G3 C4]:w | [F3 A3 C4]:w | [E3 G3 C4]:w" }, { "instrument": "bass", "seq": "C2:w | F1:w | C2:w" } ] }
    ],
    "questions": [
      { "q": "Progression 1: the middle chord is…", "choices": ["IV (F major)", "iv (F minor)"], "answer": 1, "explain": "iv: F A♭ C. The A♭ is the note that sinks." },
      { "q": "Progression 2: the middle chord is…", "choices": ["IV (F major)", "iv (F minor)"], "answer": 0, "explain": "IV: F A C. The bass is the same F in both, so only the colour tells them apart." }
    ]
  }
}
```

**If you can't hear it yet:** the bass won't help (it's F both times), so use your hands. Right after the question, play F major and then F minor yourself and ask which one it matched. Still unsure? Play just A and A♭ over the question's replay: one of them fits the chord you heard.

### Try it: V or ♭VII

1. Play C – G – C, then C – B♭ – C. Both are major chords that leave home and come back. G pulls home hard (its B leans up to C); B♭ has no leading tone, so it returns more like a shrug: bold, open, rock.
2. Listen to the bass: here G sits a fourth below C (five half steps down; the same note name is a fifth above); B♭ is just a whole step below C.
3. Eyes closed: C, then G or B♭ at random, then C. Name it before you look.

**If you can't hear it yet:** find the bass note of the middle chord on the keyboard: a whole step under home = ♭VII; five half steps down (or seven up) = V.

This lesson opens two progression rungs: **Minor: i, iv, V**, then **IV or iv?** The drill runs at your current progression rung, so it may still be an earlier one. **V or ♭VII?** opens next lesson, once IV or iv has had a few days.

**Before the drill, rehearse the method** (in the *How to do it* box above the drill, for your rung). For minor i, iv, V: hear the minor home from the cadence, then job first (away or pull), bass to check. For IV or iv: same bass, so listen to the colour change — open or sinking — and check with your hands as above.

```ladder
{ "skill": "progressions", "unlocks": 11, "intro": "Opens \"Minor: i, iv, V\" and \"IV or iv?\"; the drill runs at your current rung." }
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

## Between lessons

- **3 minutes:** Am – Dm – E – Am with roots in the left hand; then C – F – Fm – C and C – B♭ – F – C, then the same in G (G – C – Cm – G, G – F – C – G).
- **2 minutes:** eyes closed, play C – F – C or C – Fm – C at random and name it before you look.
- **2 minutes:** eyes closed, C – G – C or C – B♭ – C at random; name the middle chord, then check its bass.
- One progressions-ladder session on the Practice page.
