---
id: w24-l1-secondary-dominants
title: "Secondary Dominants: V/V and V/vi"
week: 24
order: 1
phase: p3
duration_min: 50
goals:
  - Hear the raised 4 (♯4) and raised 5 (♯5) as single notes that lean up to the next degree
  - Build V/V and V/vi in C, G and F and resolve each to its target chord
  - Tell ii from V/V, then iii from V/vi, by ear — one contrast at a time
prerequisites: [w23-l3-riff-and-solo-daw]
tags: [harmony, secondary-dominants, chromaticism, ear]
songs:
  - { title: "Creep", composer: "Radiohead (1992)", public_domain: false }
  - { title: "Yesterday", composer: "Lennon–McCartney (The Beatles, 1965)", public_domain: false }
---

# Secondary Dominants: V/V and V/vi

You know why V pulls to I: its 3rd (B in C major) is the [[leading tone]], a half step below home, and it wants to rise. Today you borrow that pull for chords *other* than I. Three ideas: the raised note, V/V, V/vi.

## 1. One raised note

Start with a single note. In C major the 4th degree is F. Raise it a half step and you get **F♯ — the ♯4**. It is not in the key, and at first it may simply sound "off". Listen to where it goes: it leans up into G, exactly the way ti leans into do.

```example
{
  "title": "4 then ♯4: E F G, then E F♯ G (over a C chord)",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "E4:q F4:q G4:h | E4:q F#4:q G4:h" },
    { "instrument": "pad", "seq": "[C3 E3 G3]:w | [C3 E3 G3]:w" }
  ],
  "show": ["keyboard"]
}
```

Now raise the 5th degree, G, to **G♯ — the ♯5**. It leans up into A (degree 6).

```example
{
  "title": "5 then ♯5: G A, then G G♯ A",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "G4:h A4:h | G4:q G#4:q A4:h" },
    { "instrument": "pad", "seq": "[C3 E3 G3]:w | [A2 C3 E3]:w" }
  ],
  "show": ["keyboard"]
}
```

```exercise
{
  "id": "play-raised-notes",
  "type": "play-notes",
  "title": "Play the lean: 4 – ♯4 – 5 and 5 – ♯5 – 6",
  "instructions": "In C, then in G. Listen to the middle note pulling up.",
  "spec": { "prompt": "names", "ordered": true, "notes": [["F4", "F#4", "G4"], ["G4", "G#4", "A4"], ["C5", "C#5", "D5"], ["D4", "D#4", "E4"]] }
}
```

### Try it

1. Hold a C chord in the left hand. With the right hand play F, stop, then F♯, stop. Don't resolve either.
2. Notice where each note *wants* to go: F wants to sink to E; F♯ wants to climb to G. Play the note it wants — that's the relief.
3. Replay the first example and listen only for the middle note of each group.

**Check:** hold F♯ over C and don't resolve it. If it feels like an unfinished sentence that wants to go *up*, you've heard the ♯4.

**If you can't hear it yet:** play F♯ and G together, then F and E together — both are half-step rubs. Then just alternate F♯→G and F→E a few times: the direction of the pull, not the note itself, is what you're learning.

**Before the drill** — the method (also in the *How to do it* box): after the cadence, ask which way the note leans. Leaning down toward 3 → 4. Leaning hard up toward 5 → ♯4. If the drill is on an earlier degree rung, that rung's box has its own method.

```ladder
{ "skill": "degrees", "unlocks": 21, "intro": "Opens: the ♯4 joins the degrees. The drill runs at your current degree rung, so an earlier rung may come first." }
```

## 2. V/V — the dominant of the dominant

Build a *major* chord on degree 2 instead of the minor ii: D F♯ A instead of D F A. Its 3rd is the ♯4 you just heard, so the chord leans into G the way G leans into C. It is called **V/V** ("five of five"): the V chord of G. Adding the 7th gives D7. This is a [[secondary dominant]]; for a moment G sounds like a small home of its own — [[tonicisation]].

```example
{
  "title": "C – Dm – G – C, then C – D – G – C",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[C3 E3 G3]:w | [D3 F3 A3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [C3 E3 G3]:w | [D3 F#3 A3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w" },
    { "instrument": "bass", "seq": "C2:w | D2:w | G1:w | C2:w | C2:w | D2:w | G1:w | C2:w" }
  ],
  "show": ["pianoroll"]
}
```

## 3. V/vi — the dominant of the relative minor

Same trick on degree 3: E G♯ B instead of E G B. The G♯ (♯5) leans into A, so the chord points at Am. That is **V/vi** (E or E7 in C).

```example
{
  "title": "C – Em – Am – F, then C – E – Am – F",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[C3 E3 G3]:w | [B2 E3 G3]:w | [A2 C3 E3]:w | [A2 C3 F3]:w | [C3 E3 G3]:w | [B2 E3 G#3]:w | [A2 C3 E3]:w | [A2 C3 F3]:w" },
    { "instrument": "bass", "seq": "C2:w | E2:w | A1:w | F1:w | C2:w | E2:w | A1:w | F1:w" }
  ],
  "show": ["pianoroll"]
}
```

| Key | V/V → V | V/vi → vi |
|---|---|---|
| C | D(7) → G | E(7) → Am |
| G | A(7) → D | B(7) → Em |
| F | G(7) → C | A(7) → Dm |

```exercise
{
  "id": "sec-dom-names",
  "type": "quiz-input",
  "title": "Name them",
  "spec": { "questions": [
    { "q": "In G major, V/V is which major chord? (chord symbol)", "answer": ["A", "A7"], "kind": "text" },
    { "q": "In G major, V/vi is which major chord?", "answer": ["B", "B7"], "kind": "text" },
    { "q": "In F major, V/vi is which major chord?", "answer": ["A", "A7"], "kind": "text" },
    { "q": "Which out-of-key note does E major add in C major?", "answer": ["G#", "Ab"], "kind": "note" },
    { "q": "In C, D7 resolves to which chord?", "answer": ["G", "G7"], "kind": "text" }
  ] }
}
```

```exercise
{
  "id": "play-v-of-v-vi",
  "type": "play-chord",
  "title": "Play both pulls in C",
  "instructions": "Keep your hand near middle C; the raised note should move up by a half step.",
  "spec": { "chords": ["C", "D7", "G", "C", "E7", "Am", "F", "G"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

### Try it: minor or major on the same bass

1. Play Dm (D F A) then D (D F♯ A), two beats each. Only the middle note moves.
2. Now play each one followed by G. Which one makes G feel like an arrival?
3. Do the same with Em (E G B) → Am and E (E G♯ B) → Am.

**Check:** replay the two progression examples above. In each, the second half has a pushier chord than the first half — you can point to which bar it is.

**If you can't hear it yet:** play just the middle notes, F then F♯, over a held D in the bass. F sounds soft and settled; F♯ sounds bright and restless. Then add the A back on top.

**Before the drill** — the method (also in the *How to do it* box): the bass note is the same, so listen to the chord's *colour* and *push*. Soft and minor → ii (or iii). Bright, major and shoving toward the next chord → V/V (or V/vi). Replay and ask "where does it push?" If the drill is on an earlier progression rung, follow that rung's box.

```ladder
{ "skill": "progressions", "unlocks": 16, "intro": "Opens: ii or V/V (minor or major on degree 2), then iii or V/vi — one contrast at a time. The drill runs at your current progression rung." }
```

## Verdict first: two real songs

Listen to the opening of each song on your own before answering; the facts appear after you answer.

```exercise
{
  "id": "songs-verdict",
  "type": "quiz",
  "title": "Your verdict",
  "spec": { "questions": [
    { "q": "\"Creep\" (Radiohead) is in G major. Its second chord is built on B. Does it sound minor (iii, Bm) or major (V/vi, B)?", "choices": ["Minor — iii", "Major — V/vi"], "answer": 1, "explain": "It is B major, V/vi, with D♯ (the ♯5 of G). But instead of resolving to Em it moves to C — a surprise, which is part of the song's uneasy mood." },
    { "q": "\"Yesterday\" (The Beatles) is in F major. An A7 appears in its first line. Which chord would you expect next?", "choices": ["C (V)", "Dm (vi)", "B♭ (IV)"], "answer": 1, "explain": "A7 is V/vi in F; it resolves to Dm, as the song does." }
  ] }
}
```

## Make it: two pulls in a loop

1. Loop the template first as it is. Then change only bar 2 (Em → E) and loop again. **Judge it by ear:** bar 3 (Am) should now feel like you've *arrived*, not just moved.
2. Change bar 6 (Dm → D) and listen for the same arrival at bar 7.
3. Write the lead last: the raised note at the end of bars 2 and 6, stepping up a half step into the next bar.
4. **If you're stuck:** if bar 3 doesn't feel like an arrival, check the chord really has G♯ (not G) — a single wrong note turns E back into Em.

```exercise
{
  "id": "daw-two-pulls",
  "type": "daw-task",
  "title": "Add V/vi and V/V",
  "spec": {
    "template": { "bpm": 84, "key": "C", "tracks": [
      { "instrument": "piano", "seq": "[C3 E3 G3]:w | [B2 E3 G3]:w | [A2 C3 E3]:w | [A2 C3 F3]:w | [C3 E3 G3]:w | [D3 F3 A3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w" },
      { "instrument": "lead", "seq": "" }
    ] },
    "task": "C Em Am F | C Dm G C. Change Em in bar 2 to E (V/vi: G becomes G♯) and Dm in bar 6 to D (V/V: F becomes F♯). Play it: bars 3 and 7 should feel like arrivals. Then write a simple lead: G♯ at the end of bar 2 rising to A in bar 3, F♯ in bar 6 rising to G in bar 7; end on C.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "uses-chord", "roman": "V/vi", "track": 0 },
      { "kind": "uses-chord", "roman": "V/V", "track": 0 },
      { "kind": "note-count", "min": 6, "max": 32, "track": 1 },
      { "kind": "ends-on", "degree": 1, "track": 1 },
      { "kind": "custom", "id": "raised-notes-rise", "note": "Self-check: in the lead, G♯ rises to A and F♯ rises to G." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

## Between lessons

Play C – D7 – G – C and C – E7 – Am on your keyboard a few times a day, listening for the raised note climbing. Do one Practice session.
