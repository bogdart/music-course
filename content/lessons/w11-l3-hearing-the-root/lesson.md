---
id: w11-l3-hearing-the-root
title: Hearing the Root
week: 11
order: 3
phase: p2
duration_min: 50
goals:
  - Hear that the bass of an inverted chord is not its root
  - Find the root of inverted chords with the 4th rule and the settled test
  - Find the root of inverted minor chords with the same method
prerequisites: [w11-l2-triad-inversions]
tags: [ear, chords, root, bass, inversions]
---

# Hearing the Root

This is one of the most important skills of the year: roots are how you work out a song's chords by ear. Last lesson you found the root of inverted major chords by finding all three notes and using the 4th rule. Today: why your ear gets fooled by the bass, a faster test, and minor chords too. At first a chord sounds like one blob. We'll go in small steps, and at every step **you play what you hear** on the keyboard. Your hands check your ears.

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
2. **Find the other two notes**: try keys above it until what you play matches the chord.
3. **The settled test:** hold the three notes with your right hand and play each of them in turn, *low*, with your left hand. One of them makes the chord sound solid and finished, like a floor; the other two make it sound lighter or floating. The solid one is the root. This works best on major chords; the 4th rule from last lesson (the upper note of the 4th) always works.

### Try it: the settled test on C/E

1. Right hand: E G C (C major, 1st inversion). Left hand: play **E2** under it. Then **G2**. Then **C2**.
2. Which bass made the chord feel "done"? For most people it's C2; G2 often feels floating, E2 light.
3. Repeat with A C E (A minor): try A2, C2, E2 under it. Be ready for a surprise: **C2 can sound just as settled as A2**, often more. With C in the bass the notes C E A are, to the ear, close to a bright C major chord with an added 6th, and it sounds like a floor. The settled test is unreliable on minor chords.

**For minor chords, use the 4th rule as your main tool:** stack the three notes as close as they go and find the 4th (5 half steps); its upper note is the root. A C E has no 4th; C E A has E–A, so A is the root; E A C has E–A again, so A. The settled test stays useful for major chords, and as a second opinion. It's slow at first; with practice you'll start to recognise the shapes by sound.

Try it on this phrase: four chords, some inverted. Work out each chord on your keyboard before you answer.

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

**If you can't hear it yet:** you don't need to hear the root directly. Find the three notes (lowest first, then the others), then find the 4th between them (its upper note is the root); for a major chord you can also run the settled test: each note low under the chord, keep the one that sounds like a floor. If your drill answer is marked wrong, play the chord yourself with your answer at the bottom, then with the right root at the bottom, and compare.

**Before the drill, rehearse the method** (it's in the *How to do it* box above the drill, for the rung you're on): the lowest note may not be the root. Find the 4th (its upper note is the root), or, for major chords, try each note low under the chord; the one on which the chord "sits" best is the root. Play the **root**, not simply the lowest note. Expect to play the lowest note at first; that's the natural first answer. This lesson opens minor chords too (Am/C, Dm/F…): for those, lean on the 4th rule rather than the settled test (the 3rd of a minor chord in the bass can sound like a floor too). The drill runs at your current roots rung, so you'll meet them once inverted major chords are solid.

```ladder
{ "skill": "roots", "unlocks": 7, "intro": "Opens \"Inverted major and minor\": minor chords join, in any inversion; the drill runs at your current roots rung." }
```

## Between lessons

- **3 minutes:** pick any chord from C, F, G, Am, Dm, Em; play it in an inversion and run the settled test with your left hand.
- **2 minutes:** minor chords only (Am, Dm, Em): play each in 1st inversion, find the 4th, name the root, then play that root low to confirm.
- One roots session on the Practice page. If a rung feels at chance, go back to this lesson's Try it steps before drilling more.
