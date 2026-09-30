---
id: w33-l2-augmented-and-flat-nine
title: The Augmented Chord and the Flat Nine
week: 33
order: 2
phase: p4
duration_min: 40
goals:
  - Build the augmented triad and use it as a passing chord
  - Add a flat 9 to a dominant chord and hear its darker pull
  - "Open the chord-colour rung with diminished and augmented next to major and minor"
prerequisites: [w33-l1-borrowed-chords]
tags: [harmony, augmented, dominant, ear]
---

# The Augmented Chord and the Flat Nine

Two new tense colours today, both made by moving one note of a chord you already know by a half step.

## The augmented triad

You know the diminished triad from week 6: two minor 3rds stacked (C E♭ G♭), small and tense. Its opposite is the [[augmented triad]]: two **major** 3rds stacked, **C–E–G♯**. It is a major triad with the 5th raised a half step. Symbol: **Caug** or **C+**.

It sounds neither major nor minor: floating and unresolved, like a question or the start of a dream sequence. Its most common job is a *passing chord*: the raised 5th keeps climbing. In **C – Caug – F**, the G moves to G♯ and then to A, the 3rd of F.

```example
{
  "title": "C – Caug – F, then C – Cdim – C (compare the two tense chords)",
  "bpm": 66, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[C4 E4 G4]:w | [C4 E4 G#4]:w | [C4 F4 A4]:w | r:w | [C4 E4 G4]:w | [C4 Eb4 Gb4]:w | [C4 E4 G4]:w | r:w |" },
    { "instrument": "bass", "seq": "C2:w | C2:w | F2:w | r:w | C2:w | C2:w | C2:w | r:w |" }
  ],
  "show": ["keyboard"]
}
```

**What you will actually hear.** Diminished tends to sound pinched and tight; augmented sounds wide and blurry. At first both may simply sound "odd", and that is fine.

### Try it

1. Hold C major (C E G) with your right hand.
2. Move only the **top** note up one key (G → G♯): augmented. Move it back. Then move the top note **down** one key and the middle one down too (C E♭ G♭): diminished.
3. Alternate the three slowly — C, Caug, C, Cdim — and give each a word: "settled", "stretched", "squeezed".

**Check:** eyes closed, ask a replay of the example (or play blind by picking a chord at random) — can you say "stretched" or "squeezed" before looking?

**If you can't hear it yet:** listen to the **top note only**. In Caug it feels like it wants to keep climbing (G♯ → A); in Cdim the chord feels like it wants to spring back open. Play the resolution after each (Caug → F, Cdim → C) and let the next chord tell you which one it was.

```exercise
{
  "id": "e1-build-aug",
  "type": "build-chord",
  "title": "Build augmented triads",
  "instructions": "Root, major 3rd, and a 5th raised by a half step.",
  "count": 6, "passScore": 0.7,
  "spec": { "chords": ["Caug", "Faug", "Gaug", "Daug", "Ebaug", "Abaug"], "root": "given", "prompt": "symbol" }
}
```

```exercise
{
  "id": "e2-play-aug-passing",
  "type": "play-chord",
  "title": "The augmented passing chord",
  "instructions": "C – Caug – F – Fm – C. Keep the notes that stay and move the others by a half step: one note moves into Caug, two move into F, one into Fm, two back to C.",
  "passScore": 0.7,
  "spec": { "chords": ["C", "Caug", "F", "Fm", "C"], "inversion": "any", "sequence": true, "bpm": 60, "key": "C" }
}
```

## The flat nine

Add the 9th to G7 and you get G9 (with A): bright and relaxed. Lower that 9th by a half step, to A♭, and you get **G7(♭9)**. The A♭ sits a half step above the root (an octave up) and sounds dark and urgent, with a Spanish or classical flavour. It pulls down to G, the 5th of C.

Where does the A♭ come from? From C minor: it is the minor key's 6th degree, the same note that made ♭VI borrowed last lesson. That is why V7(♭9) is the natural dominant of minor keys, although it resolves to major too.

```example
{
  "title": "G7 → C, then G7(b9) → C, then G7(b9) → Cm",
  "bpm": 66, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[F3 B3 D4 G4]:w | [E3 G3 C4 G4]:w | [F3 B3 D4 Ab4]:w | [E3 G3 C4 G4]:w | [F3 B3 D4 Ab4]:w | [Eb3 G3 C4 G4]:w |" },
    { "instrument": "bass", "seq": "G2:w | C2:w | G2:w | C2:w | G2:w | C2:w |" }
  ],
  "show": ["keyboard"]
}
```

At first the ♭9 may simply sound "stranger" or "more tense" than the plain G7. That is the right impression.

```exercise
{
  "id": "e3-build-flat-nine",
  "type": "build-chord",
  "title": "Build dominant chords with a flat nine",
  "instructions": "Dominant 7th (root, major 3rd, 5th, ♭7), then the 9th lowered by a half step.",
  "count": 6, "passScore": 0.7,
  "spec": { "chords": ["G7b9", "C7b9", "D7b9", "A7b9", "E7b9", "F7b9"], "root": "given", "prompt": "symbol" }
}
```

```exercise
{
  "id": "e4-play-flat-nine",
  "type": "play-melody",
  "title": "G7, then G7(♭9), into C",
  "instructions": "Only the top note changes between the two dominants: A♭ instead of G.",
  "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "[F3 B3 D4 G4]:w | [E3 G3 C4 G4]:w | [F3 B3 D4 Ab4]:w | [E3 G3 C4 G4]:w |", "showStaff": false, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e5-quiz",
  "type": "quiz",
  "title": "Two tense colours",
  "passScore": 0.7,
  "spec": { "questions": [
    { "q": "Caug is…", "choices": ["C Eb Gb", "C E G#", "C E G Bb", "C F G"], "answer": 1, "explain": "Two major 3rds: C–E–G#." },
    { "q": "In C – Caug – F, where does the raised 5th (G#) go?", "choices": ["up to A", "down to G", "down to F", "it stays"], "answer": 0, "explain": "G → G# → A: the line keeps climbing into the 3rd of F." },
    { "q": "G7(b9) adds which note to G7?", "choices": ["A", "Ab", "Bb", "C#"], "answer": 1, "explain": "The 9th of G is A; lowered by a half step it is Ab." },
    { "q": "The b9 of E7 is…", "choices": ["F", "F#", "D", "G"], "answer": 0, "explain": "The 9th of E is F#; a half step lower is F." }
  ] }
}
```

## Ear: chord colours

**Before the drill** — the method (see *How to do it* beside it): major and minor are the stable ones; of the two tense ones, **diminished is squeezed, augmented is stretched and floating**, like a question mark. Decide "stable or tense" first, then "squeezed or stretched". The drill runs at your current chord rung, which may be earlier; its box has that rung's method.

```ladder
{ "skill": "chords", "unlocks": 15, "intro": "Opens the rung with diminished and augmented next to major and minor; the drill runs at your current chord rung." }
```

## Between lessons

Play C – Caug – F – Fm – C and G7 → G7(♭9) → Cm once a day, eyes on the one note that moves. Try the same in F.
