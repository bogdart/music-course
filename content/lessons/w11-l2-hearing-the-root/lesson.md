---
id: w11-l2-hearing-the-root
title: Hearing the Root
week: 11
order: 2
phase: p2
duration_min: 50
goals:
  - Hear that the bass of an inverted chord is not its root
  - Find the root of inverted major and minor chords with a keyboard method
  - Hear scale degrees when the key changes every question
prerequisites: [w11-l1-triad-inversions]
tags: [ear, chords, root, bass, inversions, keys]
---

# Hearing the Root

This is one of the most important skills of the year: roots are how you work out a song's chords by ear. At first a chord sounds like one blob. We'll go in small steps, and at every step **you play what you hear** on the keyboard. Your hands check your ears.

This lesson is meant to be repeated. If it feels shaky, come back to it; the drills will wait at your level.

## Step 1: the bass is the easiest note to find

In any chord, the lowest note is the easiest one to pick out. You've done this since week 8 in the bass-line drills. When a chord is in root position, that lowest note *is* the root:

```example
{
  "title": "C – F – G – C, roots in the bass",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[E4 G4 C5]:w | [F4 A4 C5]:w | [D4 G4 B4]:w | [E4 G4 C5]:w" },
    { "instrument": "bass", "seq": "C2:w | F2:w | G2:w | C2:w" }
  ],
  "show": ["keyboard"]
}
```

## Step 2: the bass can lie

Now the same C major chord four times, with a different note at the bottom: C, then E, then G, then C again. Every chord is *still C major*.

```example
{
  "title": "C, C/E, C/G, C: the bass moves, the root stays C",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C3 C4 E4 G4]:w | [E3 C4 E4 G4]:w | [G3 C4 E4 G4]:w | [C3 C4 E4 G4]:w" } ],
  "show": ["keyboard", "staff"]
}
```

Honestly, it probably sounds as if the chord *changes*, because your ear follows the bass. That's normal and it's useful: in songs, the bass line is what you'll track first. The root is a second question you answer with a method.

## Step 3: a keyboard method for the root

1. **Play the lowest note** you hear. (You already can.)
2. **Find the other notes**: try keys above it until the chord you play matches what you heard.
3. **Stack them in thirds**, or use the 4th rule from last lesson: the upper note of the 4th is the root.

Slow at first, faster with practice, and after a few weeks you'll start to recognise the *shapes* by sound. Try it on this phrase: four chords, some of them inverted. Work out each chord on your keyboard before you answer.

```exercise
{
  "id": "e1", "type": "listen", "title": "Bass versus root",
  "instructions": "Loop the example and use the method: lowest note first, then the others. Answer, then read the explanation.",
  "spec": {
    "example": {
      "title": "Four chords", "bpm": 56, "timeSig": "4/4", "key": "C", "loop": true, "hidden": true,
      "tracks": [ { "instrument": "piano", "seq": "[C3 E3 A3]:w | [F3 A3 C4]:w | [G2 C3 E3]:w | [G2 B2 D3]:w" } ]
    },
    "questions": [
      { "q": "Chord 1: which note is at the bottom?", "choices": ["A", "C", "E", "F"], "answer": 1, "explain": "The lowest note is C, with E and A above it." },
      { "q": "Chord 1: what is its root?", "choices": ["C", "A", "E", "F"], "answer": 1, "explain": "C E A: the 4th E–A puts the root A on top. It's A minor with C in the bass, Am/C." },
      { "q": "Chord 3: what is its root?", "choices": ["G", "C", "E", "B"], "answer": 1, "explain": "G C E: the 4th G–C puts the root C on top. It's C major with G in the bass, C/G." },
      { "q": "Which chords are in root position?", "choices": ["1 and 3", "2 and 4", "all four", "none"], "answer": 1, "explain": "F (F A C) and G (G B D) have their roots at the bottom. Now play all four roots low on your keyboard along with the loop: A, F, C, G — while the bass you hear goes C, F, G, G." }
    ]
  }
}
```

```exercise
{
  "id": "e3", "type": "play-chord", "title": "Bass and root under your fingers",
  "instructions": "Play each slash chord with the note after the slash at the bottom. Before the next one, play its root alone, low, and hear how it differs from the bass.",
  "count": 4, "passScore": 0.7,
  "spec": { "chords": ["C/E", "G/B", "Dm/F", "F/C"], "sequence": false, "bpm": 60, "key": "C" }
}
```

Now the drill. This lesson opens two roots rungs that use the method: first major chords that may be inverted, then major and minor. Play the **root**, not simply the lowest note. You'll probably play the lowest note at first — that's the natural first answer. If you get it wrong, play the chord yourself with your answer at the bottom and compare. The drill runs at your current roots rung, so you'll meet inverted chords once the bass-line rungs are solid.

```ladder
{ "skill": "roots", "unlocks": 7, "intro": "Opens \"Root when the chord is inverted\" (major), then major and minor; the drill runs at your current rung." }
```

## New: the key can change

Until now every degree drill stayed in one key (C, then G, F and A minor) for weeks. This lesson opens a rung where **the key may change with every question**. Be honest with yourself about what that means: in week 7 a single new key took a while to feel like home, and here home moves every time. Expect it to be hard at first, and expect a clear dip when you reach this rung. What makes it possible is that degrees keep their roles in every key — 1 is home, 3 is the bright middle of the home chord, 5 the solid top — but you only hear those roles once the cadence has set the new home. So give the cadence your full attention, and replay it whenever the question note sounds "wrong". Listen: a cadence in C followed by degree 3 (E), then a cadence in F followed by degree 3 (A).

```example
{
  "title": "Cadence in C, then degree 3 (E). Cadence in F, then degree 3 (A)",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | r:q E4:h r:q | [F4 A4 C5]:q [F4 Bb4 D5]:q [E4 G4 C5]:q [F4 A4 C5]:q | r:q A4:h r:q" },
    { "instrument": "bass", "seq": "C3:q F2:q G2:q C3:q | r:w | F2:q Bb2:q C3:q F2:q | r:w" }
  ],
  "show": ["keyboard"]
}
```

Different notes, meant to give the same *feeling* — though right after the jump from C to F, the A may not feel like 3 at once. After each answer the note walks home in its own key, which also helps you hear the new home. This rung uses degrees 1–5 only, and the drill runs at your current degree rung: you'll meet it once the minor rungs are solid.

```ladder
{ "skill": "degrees", "unlocks": 15, "intro": "Opens \"Any key: 1 to 5\" (the cadence tells you home); the drill runs at your current rung." }
```
