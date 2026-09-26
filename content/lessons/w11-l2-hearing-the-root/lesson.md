---
id: w11-l2-hearing-the-root
title: Hearing the Root
week: 11
order: 2
phase: p2
duration_min: 50
goals:
  - Hear and play the bass note of a chord, then its root, in root position
  - Understand (by ear) that an inverted chord's bass is not its root
  - Find and play the root of inverted major and minor chords, alone and in a progression
prerequisites: [w11-l1-triad-inversions]
tags: [ear, chords, root, bass, inversions]
---

# Hearing the Root

This is one of the most important lessons of the year. Hearing chord roots is what lets you work out a song's chords by ear. It feels impossible at first — a chord sounds like one blob. We'll get there in small steps, and at every step **you play the root** on the keyboard. Your hands will teach your ears.

Take your time. If a stage feels shaky, repeat it before moving on — this lesson is meant to be done more than once.

## Stage 1 — The bass is easy to find

Most of the time the lowest note is the chord's root. The lowest note is also the easiest one to pick out: it's the one you would **hum** along without thinking. Try it: hum, then find your hum on the keyboard.

```example
{
  "title": "C – F – G – C with the root in the bass. Hum the bottom.",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[E4 G4 C5]:w | [F4 A4 C5]:w | [D4 G4 B4]:w | [E4 G4 C5]:w" },
    { "instrument": "bass", "seq": "C2:w | F2:w | G2:w | C2:w" }
  ],
  "show": ["keyboard"]
}
```

```exercise
{
  "id": "e1", "type": "ear-bass", "title": "Stage 1: hum the bass, play it",
  "count": 8, "passScore": 0.75,
  "spec": { "key": "random", "chords": ["I", "IV", "V", "vi"], "answer": "play" }
}
```

## Stage 2 — The root of a lone chord

Now a single triad with no separate bass. In root position, the root is still the bottom note — but it's quieter and blended. Two tricks:

1. **Hum low.** Start humming below the chord and slide up until you "lock in".
2. **Check by arpeggio.** Sing up 1-3-5 from your guess and back down to 1. If it matches the chord, you've got the root.

```exercise
{
  "id": "e2", "type": "ear-chord-root", "title": "Stage 2: play the root",
  "instructions": "Hum, find it on the keyboard, play it. Wrong? Play the chord yourself and listen again.",
  "count": 10, "passScore": 0.7,
  "spec": { "qualities": ["maj", "min"], "answer": "play", "range": ["C3", "C4"] }
}
```

## Stage 3 — The bass can lie

Here's the catch. Listen to the same C major chord with three different bass notes. The bass moves C → E → G, but every chord is *still C*. Your hum will follow the bass. The root doesn't move.

```example
{
  "title": "C, C/E, C/G, C — the bass moves, the root stays C",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C3 C4 E4 G4]:w | [E3 C4 E4 G4]:w | [G3 C4 E4 G4]:w | [C3 C4 E4 G4]:w" } ],
  "show": ["keyboard", "staff"]
}
```

So how do you hear through it? Inverted chords sound *less settled*. When a chord feels unstable, hum the bass, then ask: "Is there a note a 3rd or a 4th **above** the bass that feels like the real floor?" The 2nd-inversion chord has a 4th at the bottom, and the upper note of that 4th is the root — the same rule you used on paper.

```exercise
{
  "id": "e3", "type": "ear-chord", "title": "Stage 3: where is the root hiding?",
  "instructions": "Root position = root at the bottom. 1st inversion = the 3rd at the bottom. 2nd inversion = the 5th at the bottom, root just a 4th above it.",
  "count": 9, "passScore": 0.7,
  "spec": { "qualities": ["maj", "min"], "inversions": [0, 1, 2], "voicing": "close", "range": ["C3", "C5"] }
}
```

## Stage 4 — Roots of inverted chords, in a phrase

Songs use inverted chords to make the bass walk smoothly. Listen: the bass climbs E – F – B – C, but the roots are C – F – G – C.

```exercise
{
  "id": "e4", "type": "listen", "title": "Stage 4: bass versus root",
  "spec": {
    "example": {
      "title": "C/E – F – G/B – C", "bpm": 56, "timeSig": "4/4", "key": "C", "loop": true,
      "tracks": [ { "instrument": "piano", "seq": "[E3 G3 C4]:w | [F3 A3 C4]:w | [B2 D3 G3]:w | [C3 E3 G3]:w" } ],
      "show": ["keyboard"]
    },
    "questions": [
      { "q": "Chord 1 has E in the bass. What is its root?", "choices": ["E", "C", "G", "A"], "answer": 1, "explain": "E G C: the 4th G–C puts the root C on top. It's C/E." },
      { "q": "Chord 3 has B in the bass. What is its root?", "choices": ["B", "D", "G", "E"], "answer": 2, "explain": "B D G = G major in 1st inversion (G/B)." },
      { "q": "Which chords are in root position?", "choices": ["1 and 3", "2 and 4", "all four", "none"], "answer": 1, "explain": "F (F A C) and C (C E G) have their roots at the bottom." }
    ]
  }
}
```

```exercise
{
  "id": "e5", "type": "play-notes", "title": "Now play the roots you heard",
  "instructions": "Loop the example above and play along: one root per chord, left hand, low. C – F – G – C.",
  "count": 6, "passScore": 0.8,
  "spec": { "prompt": "names", "notes": ["C3", "F3", "G2", "C3"], "ordered": true, "key": "C" }
}
```

## Stage 5 — Roots in context

In a key, roots are easier: they're degrees you already know. Name the progression, then play each root as it goes by.

```exercise
{
  "id": "e6", "type": "ear-progression", "title": "Stage 5: three chords in C",
  "instructions": "Play the roots along with the second hearing, then answer.",
  "count": 8, "passScore": 0.7,
  "spec": { "key": "C", "mode": "major", "length": 3, "chords": ["I", "IV", "V", "vi"], "style": "block" }
}
```

```exercise
{
  "id": "e7", "type": "ear-chord-root", "title": "Final: play the root, wider range",
  "count": 10, "passScore": 0.7,
  "spec": { "qualities": ["maj", "min"], "answer": "play", "range": ["C3", "C5"] }
}
```

Don't worry if this stage scores low. These cards go into your review deck and will come back for weeks. Everyone who hears roots today once heard only blobs.
