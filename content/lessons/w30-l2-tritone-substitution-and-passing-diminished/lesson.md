---
id: w30-l2-tritone-substitution-and-passing-diminished
title: Tritone Substitution and Passing Diminished
week: 30
order: 2
phase: p4
duration_min: 45
goals:
  - Replace V7 with bII7 and explain why it works (shared 3rd and 7th)
  - Connect I to ii with a passing #I°7
  - Hear the chromatic bass lines these substitutions create
prerequisites: [w30-l1-borrowed-chords]
tags: [jazz, reharmonisation, tritone-sub, diminished]
songs:
  - { title: "The Girl from Ipanema", composer: "Antônio Carlos Jobim", public_domain: false }
  - { title: "Satin Doll", composer: "Duke Ellington & Billy Strayhorn", public_domain: false }
---

# Tritone Substitution and Passing Diminished

Two reharmonisation tools today. Both make the bass line move by **half steps**, which is the secret sound of sophisticated harmony.

## Tritone substitution

Look at G7's shell: G–B–F. The B and F form a tritone — that's the tension that wants to resolve to C. Now look at Db7: Db–F–Cb. Cb is B spelled differently. **Same tritone, same two guide tones.** So Db7 can stand in for G7. That swap is the [[tritone substitution]]: any dominant 7th can be replaced by the dominant 7th a tritone away.

The payoff is the bass: D → Db → C slides down by half steps instead of jumping D → G → C.

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

(In the second Db7, we write the 7th as B for readability; theory spells it Cb.) By reference: "The Girl from Ipanema" moves Gm7 → Gb7 → Fmaj7 in its A section — Gb7 is the tritone sub for C7. "Satin Doll" slides whole ii–Vs down by half steps.

## Passing diminished

The second tool fills a whole step in the bass. Between Cmaj7 and Dm7, slip in **C#dim7** (C#–E–G–Bb). It is really A7(b9) without its root — a secret V7 of Dm — so it pulls hard into the ii. This [[passing diminished chord]] turns the bass into C → C# → D.

```example
{
  "title": "Cmaj7 – C#dim7 – Dm7 – G7",
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
  "title": "Find the tritone subs and diminished chords",
  "instructions": "Db7 subs G7; Gb7 subs C7; Ab7 subs D7. C#dim7 and D#dim7 are passing chords.",
  "count": 6, "passScore": 0.8,
  "spec": { "chords": ["Db7", "Gb7", "Ab7", "Eb7", "C#dim7", "D#dim7"], "root": "given", "prompt": "symbol" }
}
```

```exercise
{
  "id": "e2-play-tritone-sub",
  "type": "play-melody",
  "title": "ii–bII7–I with shells",
  "instructions": "Only the root moves (G→Db). The F and B stay put.",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "[D3 F3 C4]:w | [Db3 F3 B3]:w | [C3 E3 B3]:w | r:w |", "showStaff": false, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e3-play-passing-dim",
  "type": "play-melody",
  "title": "The passing diminished",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 66, "timeSig": "4/4", "key": "C", "seq": "[C3 E3 G3 B3]:h [C#3 E3 G3 Bb3]:h | [D3 F3 A3 C4]:h [G2 F3 B3]:h | [C3 E3 G3 B3]:w |", "showStaff": false, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e4-listen-which",
  "type": "listen",
  "title": "V7 or tritone sub?",
  "passScore": 0.75,
  "spec": {
    "example": { "bpm": 72, "timeSig": "4/4", "key": "C", "tracks": [
      { "instrument": "epiano", "seq": "[F3 A3 C4 E4]:w | [F3 A3 B3 E4]:w | [E3 G3 B3 D4]:w | r:w | [F3 A3 C4 E4]:w | [F3 Ab3 B3 Eb4]:w | [E3 G3 B3 D4]:w | r:w |" },
      { "instrument": "bass", "seq": "D2:w | G1:w | C2:w | r:w | D2:w | Db2:w | C2:w | r:w |" } ] },
    "questions": [
      { "q": "Which phrase uses the tritone substitution?", "choices": ["the first", "the second", "both", "neither"], "answer": 1 },
      { "q": "How does the bass move in the tritone-sub phrase?", "choices": ["down by half steps", "up by fourths", "stays on one note", "leaps an octave"], "answer": 0 }
    ]
  }
}
```

```exercise
{
  "id": "e5-ear-prog-subs",
  "type": "ear-progression",
  "title": "V7 or bII7 into I?",
  "count": 8, "passScore": 0.7,
  "spec": { "key": "random", "mode": "major", "length": 4, "chords": ["I", "ii", "V7", "bII7", "vi"], "style": "pad-bass" }
}
```

```exercise
{
  "id": "e6-ear-dom-vs-dim",
  "type": "ear-chord",
  "title": "Tension colours",
  "count": 10, "passScore": 0.75,
  "spec": { "qualities": ["dom7", "m7b5", "dim", "aug"], "inversions": [0], "voicing": "close", "range": ["C3", "C5"] }
}
```

```exercise
{
  "id": "e7-subs-quiz",
  "type": "quiz",
  "title": "Substitution logic",
  "passScore": 0.75,
  "spec": { "questions": [
    { "q": "The tritone sub for D7 is…", "choices": ["Ab7", "A7", "G7", "Eb7"], "answer": 0 },
    { "q": "G7 and Db7 share which two notes?", "choices": ["G and Db", "B/Cb and F", "D and Ab", "none"], "answer": 1 },
    { "q": "Between Fmaj7 and Gm7, the passing diminished chord is…", "choices": ["F#dim7", "Ebdim7", "Bdim7", "Adim7"], "answer": 0 }
  ] }
}
```
