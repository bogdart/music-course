---
id: w33-l3-tritone-substitution-and-passing-diminished
title: Tritone Substitution and the Passing Diminished
week: 33
order: 3
phase: p4
duration_min: 45
goals:
  - Name the guide tones (3rd and 7th) of any seventh chord
  - Replace V7 with bII7 (tritone substitution), because both share the same guide tones
  - Explain the passing diminished chord as a V7(b9) without its root
prerequisites: [w33-l2-augmented-and-flat-nine, w27-l2-chromatic-passing-chords]
tags: [jazz, reharmonisation, tritone-sub, diminished]
songs:
  - { title: "The Girl from Ipanema", composer: "Antônio Carlos Jobim", public_domain: false }
---

# Tritone Substitution and the Passing Diminished

Two tools for dominant chords today. Both make the bass move by **half steps**, the secret sound of sophisticated harmony.

## Guide tones

First, a name for something you already play. The 3rd and 7th of a chord are its [[guide tones]]: the two notes that decide its colour. Your shell voicings from week 31 are exactly root + guide tones. In G7 the guide tones are B and F. They are a tritone apart, and that tritone is the tension of the dominant: B wants to rise to C, F wants to fall to E.

## 1. Tritone substitution

Look at D♭7: D♭–F–A♭–C♭. C♭ is the same key as B. So D♭7 has **the same guide tones as G7**, F and B, only with their roles swapped. Same tritone, same pull to C. That is why D♭7 can stand in for G7: the [[tritone substitution]]. Any dominant 7th can be replaced by the dominant 7th whose root is a tritone away.

The payoff is the bass: D → D♭ → C slides down by half steps instead of jumping D → G → C.

```example
{
  "title": "ii–V–I, then ii–bII7–I (listen to the bass)",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[D3 F3 C4]:w | [G2 F3 B3]:w | [C3 E3 B3]:w | r:w | [D3 F3 C4]:w | [Db3 F3 B3]:w | [C3 E3 B3]:w | r:w |" },
    { "instrument": "bass", "seq": "D2:w | G1:w | C2:w | r:w | D2:w | Db2:w | C2:w | r:w |" }
  ],
  "show": ["keyboard"]
}
```

By reference: "The Girl from Ipanema" moves Gm7 → G♭7 → Fmaj7 in its A section; G♭7 is the tritone sub for C7.

## 2. The passing diminished, explained

In week 27 you slid from C to Dm through **C♯dim7** (C♯ E G B♭). With last lesson's flat nine you can now say exactly what it is. Build **A7(♭9)**: A C♯ E G B♭. Take away the root A: C♯ E G B♭. That is C♯dim7. So the passing diminished is a V7(♭9) of Dm with its root left out, and that is why it pulls so hard into Dm.

```example
{
  "title": "Cmaj7 – C#dim7 – Dm7 – G7 – Cmaj7",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[C3 E3 G3 B3]:h [C#3 E3 G3 Bb3]:h | [D3 F3 A3 C4]:h [G2 F3 B3]:h | [C3 E3 G3 B3]:w |" },
    { "instrument": "bass", "seq": "C2:h C#2:h | D2:h G1:h | C2:w |" }
  ],
  "show": ["keyboard"]
}
```

## Drills

```exercise
{
  "id": "e1-build-subs",
  "type": "build-chord",
  "title": "Tritone subs and passing diminished",
  "count": 6, "passScore": 0.7,
  "spec": { "chords": ["Db7", "Gb7", "Ab7", "A7b9", "C#dim7", "G#dim7"], "root": "given", "prompt": "symbol" }
}
```

```exercise
{
  "id": "e2-play-tritone-sub",
  "type": "play-melody",
  "title": "ii–bII7–I with shells",
  "instructions": "Compared with the G7 shell (G F B), only the bottom note changes: G becomes Db, while F and B stay. The bass line is now D – Db – C.",
  "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "[D3 F3 C4]:w | [Db3 F3 B3]:w | [C3 E3 B3]:w | r:w |", "showStaff": false, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e3-play-passing-dim",
  "type": "play-melody",
  "title": "The passing diminished",
  "passScore": 0.7,
  "spec": { "bpm": 66, "timeSig": "4/4", "key": "C", "seq": "[C3 E3 G3 B3]:h [C#3 E3 G3 Bb3]:h | [D3 F3 A3 C4]:h [G2 F3 B3]:h | [C3 E3 G3 B3]:w |", "showStaff": false, "showKeyboard": true, "countIn": 1 }
}
```

### Try it

At first the substitute chord itself sounds much like G7 — that's the point, they share the tension. What you *can* hear is the bass.

1. Play the first example above (ii–V–I, then ii–♭II7–I) and follow only the **bass**: in the first phrase it jumps (D down to G, up to C); in the second it slides down one key at a time (D, D♭, C).
2. Play the two bass lines yourself with your left hand: D2 G1 C2, then D2 D♭2 C2. Jump vs slide.
3. Replay the example and move your hand in the air with the bass: a big dip, or three small steps down.

**Check:** you can say "jump" or "slide" for each phrase before the last chord.

**If you can't hear it yet:** play along with the bass on your keyboard and see which of your two lines fits. Your fingers find it first; the ear follows.

```exercise
{
  "id": "e4-listen-which",
  "type": "listen",
  "title": "V7 or tritone sub?",
  "instructions": "Two phrases, both ii – dominant – I in C. Listen to each several times.",
  "spec": {
    "example": { "bpm": 72, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [
      { "instrument": "epiano", "seq": "[F3 A3 C4 E4]:w | [F3 B3 Db4 Eb4]:w | [E3 G3 B3 D4]:w | r:w | [F3 A3 C4 E4]:w | [F3 A3 B3 E4]:w | [E3 G3 B3 D4]:w | r:w |" },
      { "instrument": "bass", "seq": "D2:w | Db2:w | C2:w | r:w | D2:w | G1:w | C2:w | r:w |" } ] },
    "questions": [
      { "q": "Which phrase uses the tritone substitution?", "choices": ["the first", "the second"], "answer": 0, "explain": "The first: its middle chord is Db7, standing in for the G7 of the second phrase." },
      { "q": "How does the bass move in the tritone-sub phrase?", "choices": ["down by half steps", "down a fifth, then up a fourth"], "answer": 0, "explain": "D – Db – C, down by half steps. The plain phrase goes D – G – C." }
    ]
  }
}
```

```exercise
{
  "id": "e5-subs-quiz",
  "type": "quiz",
  "title": "Substitution logic",
  "passScore": 0.7,
  "spec": { "questions": [
    { "q": "The guide tones of C7 are…", "choices": ["C and G", "E and Bb", "G and Bb", "C and E"], "answer": 1, "explain": "The 3rd (E) and the 7th (Bb)." },
    { "q": "The tritone sub for D7 is…", "choices": ["Ab7", "A7", "G7", "Eb7"], "answer": 0, "explain": "D to Ab is a tritone; D7 and Ab7 share F#/Gb and C." },
    { "q": "E7(b9) without its root is which diminished chord?", "choices": ["Edim7", "G#dim7", "Bdim7", "Fdim7"], "answer": 1, "explain": "E7(b9) = E G# B D F. Without E: G# B D F = G#dim7, the passing chord that leads into Am." }
  ] }
}
```

## Ear: every chromatic degree

**Before the drill** — the method (see *How to do it* beside it): first decide **in the key or outside it** (an outside note has a sour, "wrong colour" sound). For an outside note, find the in-key neighbour it leans toward and name it as that degree raised or lowered — ♭2 sinks onto 1, ♯4 pushes up to 5. When unsure, play the neighbours on the keyboard and see which one it wants to move to. The drill runs at your current degrees rung; its box has that rung's method.

```ladder
{ "skill": "degrees", "unlocks": 30, "intro": "Opens the last degrees rung, all twelve chromatic degrees (♭2 is the bass note of today's tritone sub); the drill runs at your current degrees rung." }
```

## Between lessons

Play ii–V–I and ii–♭II7–I in C and F, left-hand shells, listening to the bass slide. Once, play Cmaj7 – C♯dim7 – Dm7 – G7 – C and name the chord that's "a V7(♭9) without its root".
