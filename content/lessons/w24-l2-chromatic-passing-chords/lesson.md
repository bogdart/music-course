---
id: w24-l2-chromatic-passing-chords
title: "Half-Diminished, Diminished 7th and Passing Chords"
week: 24
order: 2
phase: p3
duration_min: 45
goals:
  - Build the half-diminished chord (m7♭5) and tell it from a minor 7th by ear
  - Build the diminished 7th chord (dim7) — a stack of minor thirds
  - Use a dim7 as a passing chord that walks the bass up by half steps
prerequisites: [w24-l1-secondary-dominants]
tags: [harmony, chromaticism, diminished, voice-leading, ear]
songs: []
---

# Half-Diminished, Diminished 7th and Passing Chords

In week 6 you met the **diminished triad** — the tense, squeezed chord on degree 7 (B D F in C): two minor thirds stacked. It has been in the chord-colour drill since then, next to major and minor. Today you add one more third on top of it, in two different sizes, and get two new chords.

## 1. Half-diminished: m7♭5

Put a **minor 7th** on top of the diminished triad: B D F + A = **Bm7♭5** (also written Bø7: a [[half-diminished chord]]). It is the seventh chord that lives on degree 7 of C major. Compare it with Bm7 (B D F♯ A): the only difference is the 5th — F instead of F♯, the "♭5" in the name.

```example
{
  "title": "Bm7 (B D F♯ A), then Bm7♭5 (B D F A) — one note different",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[B3 D4 F#4 A4]:w | [B3 D4 F4 A4]:w | [B3 D4 F#4 A4]:w | [B3 D4 F4 A4]:w" } ],
  "show": ["keyboard"]
}
```

Honestly: one note apart, they can sound almost the same at first. Listen for the half-diminished being darker and more restless, as if it needs to move. That is its job: in a minor-flavoured move like **Bm7♭5 – E7 – Am** it leads into last lesson's V/vi.

### Try it

1. Play Bm7 (B D F♯ A) and hold it for four beats. Then move only one finger: F♯ down to F. Hold again.
2. Go back and forth, F♯ ↔ F, keeping the other three notes pressed. Listen to the whole chord, not the moving note.
3. After each chord, ask: could a song *end* here? Bm7 can just about rest; Bm7♭5 wants to go somewhere.

**Check:** replay the example with your eyes closed and say "rests" or "restless" for each of the four bars.

**If you can't hear it yet:** play only the bottom and the moving note: B + F♯ (a perfect fifth — open, stable) vs B + F (a tritone — sour, tense). That tritone is the whole difference. Then add D and A back.

**Before the drill** — the method (also in the *How to do it* box): both chords are dark, so ignore bright/dark. Ask *stable or unstable?* Mellow and settled → minor 7; a tense, unresolved top → half-diminished. If the drill is on an earlier chord rung, that rung's box has its method.

```ladder
{ "skill": "chords", "unlocks": 10, "intro": "Opens: minor 7th or half-diminished — two choices, one note apart. The drill runs at your current chord rung." }
```

## 2. Diminished 7th: all minor thirds

Now put another **minor third** on top instead: C♯ E G + B♭ = **C♯dim7**, a [[diminished seventh chord]]. Every gap is a minor third (3 half steps), so the chord has no "top" or "bottom" — it sounds like pure suspense, the classic silent-film villain chord.

```example
{
  "title": "C♯ diminished triad, then C♯dim7",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C#4 E4 G4]:w | [C#4 E4 G4 Bb4]:w" } ],
  "show": ["keyboard"]
}
```

```exercise
{
  "id": "build-dim-family",
  "type": "build-chord",
  "title": "Build half-diminished and diminished 7th chords",
  "spec": { "chords": ["Bm7b5", "F#m7b5", "Em7b5", "C#dim7", "F#dim7", "G#dim7"], "root": "given", "prompt": "symbol" }
}
```

## 3. The passing dim7

When two chords have roots a whole step apart (C → Dm, Dm → Em), put a dim7 on the note *in between*: C – **C♯dim7** – Dm. The bass climbs C → C♯ → D by half steps, and C♯ leans into D the way the ♯4 and ♯5 leaned up last lesson. This is a [[chromatic passing chord]]: it doesn't go anywhere new, it connects.

```example
{
  "title": "Without, then with passing chords: C | Dm | Em F | G C",
  "bpm": 76, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "epiano", "seq": "[E3 G3 C4]:w | [D3 F3 A3]:w | [E3 G3 B3]:h [F3 A3 C4]:h | [D3 G3 B3]:h [E3 G3 C4]:h | [E3 G3 C4]:h [E3 G3 Bb3 C#4]:h | [D3 F3 A3]:h [D#3 F#3 A3 C4]:h | [E3 G3 B3]:h [F3 A3 C4]:h | [D3 G3 B3]:h [E3 G3 C4]:h" },
    { "instrument": "bass", "seq": "C2:w | D2:w | E2:h F2:h | G1:h C2:h | C2:h C#2:h | D2:h D#2:h | E2:h F2:h | G1:h C2:h" }
  ],
  "show": ["pianoroll"]
}
```

In bars 5–8 the bass walks C C♯ D D♯ E — a chromatic staircase.

```exercise
{
  "id": "play-staircase-v2",
  "type": "play-chord",
  "title": "Play the staircase",
  "instructions": "Right hand plays the chords; if you can, let your left hand play the bass notes C C♯ D D♯ E.",
  "spec": { "chords": ["C", "C#dim7", "Dm", "D#dim7", "Em", "F", "G", "C"], "inversion": "any", "sequence": true, "bpm": 56 }
}
```

```exercise
{
  "id": "passing-quiz-v2",
  "type": "quiz",
  "spec": { "questions": [
    { "q": "Bm7♭5 and Bm7 differ in which note?", "choices": ["The root", "The 3rd", "The 5th (F vs F♯)", "The 7th"], "answer": 2 },
    { "q": "A dim7 chord is built from...", "choices": ["Major thirds only", "Minor thirds only", "A major triad plus a minor 7th", "A minor triad plus a major 7th"], "answer": 1 },
    { "q": "Which passing chord connects Dm to Em?", "choices": ["D♯dim7", "E♭maj7", "E7", "Dm7"], "answer": 0 },
    { "q": "In C – C♯dim7 – Dm, the bass moves by...", "choices": ["Half steps", "Fifths", "Octaves"], "answer": 0 }
  ] }
}
```

**Before the drill** — the method (also in the *How to do it* box): when a chord sounds unexpectedly major and pushing, ask *where* it pushes — into V (it was V/V) or into vi (V/vi). Replay and follow the bass one chord further. If the drill is on an earlier progression rung, follow that rung's box.

```ladder
{ "skill": "progressions", "unlocks": 17, "intro": "Opens: V/V and V/vi mixed in with the whole key. The drill runs at your current progression rung." }
```

## Make it: the staircase in F

1. Loop the template as it is and play the bass line F G A B♭ on your keyboard with it — it moves in big, plain steps.
2. Do the bass first: shorten F and G to half notes and add F♯ and G♯ after them. Loop: the bass should now *creep* up.
3. Add the two dim7 chords on top of those bass notes.
4. **Judge it by ear:** each dim7 should sound tense for two beats and then *fall into* the next chord. If it sounds like a random wrong chord, check that its lowest note is the half step below the next root.
5. **If you're stuck:** play bars 5–6 of the C example above, then slide your hands up a fourth (C→F) — it's the same shape.

```exercise
{
  "id": "daw-passing-dims-f",
  "type": "daw-task",
  "title": "Insert passing chords in F",
  "spec": {
    "template": { "bpm": 80, "key": "F", "tracks": [
      { "instrument": "epiano", "seq": "[F3 A3 C4]:w | [D3 F3 G3 Bb3]:w | [E3 G3 A3 C4]:w | [F3 A3 Bb3 D4]:w" },
      { "instrument": "bass", "seq": "F2:w | G2:w | A2:w | Bb2:w" }
    ] },
    "task": "F – Gm7 – Am7 – B♭maj7: each root is a whole step below the next (up to A). Shorten bars 1 and 2 to half notes and add F♯dim7 (F♯ A C E♭) on beats 3–4 of bar 1 and G♯dim7 (G♯ B D F) on beats 3–4 of bar 2. Make the bass climb F F♯ G G♯ A B♭.",
    "checks": [
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "uses-chord", "chord": "F#dim7", "track": 0 },
      { "kind": "uses-chord", "chord": "G#dim7", "track": 0 },
      { "kind": "note-count", "min": 6, "max": 8, "track": 1 },
      { "kind": "contour", "shape": "ascending", "track": 1 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

## Between lessons

Play the C staircase (C – C♯dim7 – Dm – D♯dim7 – Em) once a day, and toggle Bm7 ↔ Bm7♭5 a few times listening for "rests / restless". Do one Practice session.
