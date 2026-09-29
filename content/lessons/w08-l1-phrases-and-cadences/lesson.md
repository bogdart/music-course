---
id: w08-l1-phrases-and-cadences
title: Phrases and Cadences
week: 8
order: 1
phase: p1
duration_min: 50
goals:
  - Hear music as phrases that end in "question" (half cadence) or "answer" (authentic cadence, V→I)
  - Understand the 8-bar A A' structure
  - Hear degree 7 (ti) and its pull to 1; play Ode to Joy with left-hand roots
prerequisites: [w07-l3-same-melody-three-keys-daw]
tags: [form, phrase, cadence, harmony, ear, keyboard]
songs:
  - { title: "Ode to Joy", composer: "Ludwig van Beethoven", public_domain: true }
  - { title: "Amazing Grace", composer: "Traditional melody ('New Britain'), words by John Newton", public_domain: true }
---

# Phrases and cadences

Music is organised like speech. Notes group into [[phrase]]s — musical sentences, usually 2 or 4 bars long — and each phrase ends with a kind of punctuation called a **cadence** (you've been hearing one before every ear drill). The two you need now:

- **Half cadence** — the phrase stops on the **V** chord. It sounds like a comma or a question: "…and then?"
- **Authentic cadence** — **V → I**. It sounds like a full stop: "The end."

## Why V → I sounds final

The V chord in C is G–**B**–D. Its middle note, B, is degree **7** — the [[leading tone]] — only a half step below C. That half step pulls so strongly upward that when V moves to I, B resolves into C and the tension releases. Listen for the B → C:

```example
{
  "title": "V → I, three times: G–B–D resolving to C–E–G",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[G3 B3 D4]:h [G3 C4 E4]:h | [G3 B3 D4]:h [G3 C4 E4]:h | [G3 B3 D4]:h [G3 C4 E4]:h | r:w | B3:h C4:h" } ],
  "show": ["keyboard"]
}
```

## A and A': question and answer

Ode to Joy's first eight bars are two 4-bar phrases that start identically:

- **A** (bars 1–4) ends on degree 2 over **V** → half cadence, a question.
- **A'** (bars 5–8) is the same, but the last bar goes to degree 1 over **I** → authentic cadence, the answer.

"A prime" (A') means "A, slightly changed". This A A' shape — say something, then say it again but finish it — is one of the most common 8-bar structures in music, and you'll use it in your first song this week.

```example
{
  "title": "Ode to Joy, bars 1–8, with left-hand roots",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | E4:q. D4:8 D4:h | E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | D4:q. C4:8 C4:h" },
    { "instrument": "bass", "seq": "C3:w | G3:w | C3:w | G3:w | C3:w | G3:w | C3:w | G3:h C3:h" }
  ],
  "show": ["staff"]
}
```

"Amazing Grace" (in 3/4) does the same thing: its first half ends on degree 5 over V — a question — and the second half answers it on 1.

```example
{
  "title": "Amazing Grace, first half — ends on a half cadence",
  "bpm": 80, "timeSig": "3/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "r:h G3:q | C4:h E4:8 C4:8 | E4:h D4:q | C4:h A3:q | G3:h G3:q | C4:h E4:8 C4:8 | E4:h D4:q | G4:h. | G4:h." },
    { "instrument": "bass", "seq": "r:h. | C3:h. | C3:h. | F3:h. | C3:h. | C3:h. | C3:h. | G3:h. | G3:h." }
  ],
  "show": ["staff"]
}
```

## Playing with both hands

Today your left hand joins in the simplest possible way: it plays the **root** of the chord together with the first melody note of each bar, then lets go. C under the C-chord bars, G under the G-chord bars. Left hand pinky on C3, thumb on G3 — no movement needed.

## Drills

```exercise
{
  "id": "e1",
  "type": "quiz",
  "title": "Cadences and phrases",
  "spec": { "questions": [
    { "q": "A phrase ending on V sounds like…", "choices": ["a question / comma", "a full stop"], "answer": 0 },
    { "q": "The authentic cadence is…", "choices": ["I → V", "V → I", "IV → V"], "answer": 1 },
    { "q": "In C major, the leading tone is…", "choices": ["B", "F", "G"], "answer": 0 },
    { "q": "The leading tone is how far below the tonic?", "choices": ["a half step", "a whole step", "a 3rd"], "answer": 0 },
    { "q": "In an A A' structure, A' is…", "choices": ["a completely new phrase", "A with a changed ending", "A played backwards"], "answer": 1 },
    { "q": "Ode to Joy bar 4 ends on degree 2 over…", "choices": ["I", "IV", "V"], "answer": 2 }
  ] },
  "passScore": 0.8
}
```

```exercise
{
  "id": "e2",
  "type": "ear-progression",
  "title": "I or V?",
  "instructions": "Two chords after the cadence. For each one: home (I) or tension (V)?",
  "count": 10,
  "passScore": 0.7,
  "spec": { "key": "C", "mode": "major", "length": 2, "chords": ["I", "V"], "style": "block" }
}
```

```exercise
{
  "id": "e3",
  "type": "ear-note",
  "title": "1, 5 or 7?",
  "instructions": "7 is tense and leans hard up to 1.",
  "count": 10,
  "passScore": 0.75,
  "spec": { "key": "C", "mode": "major", "degrees": [1, 5, 7], "reference": "cadence", "octaves": [3, 4], "instrument": "piano" }
}
```

```exercise
{
  "id": "e4",
  "type": "ear-note",
  "title": "All seven degrees",
  "instructions": "Sing down (or up, for 7) to home and count.",
  "count": 12,
  "passScore": 0.7,
  "spec": { "key": "C", "mode": "major", "degrees": [1, 2, 3, 4, 5, 6, 7], "reference": "cadence", "octaves": [4], "instrument": "piano" }
}
```

```exercise
{
  "id": "e5",
  "type": "play-chord",
  "title": "Cadences under your fingers",
  "instructions": "V → I is G–B–D to G–C–E: the thumb stays, the other fingers step.",
  "passScore": 0.75,
  "spec": { "chords": ["C", "G", "C", "F", "G", "C"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

```exercise
{
  "id": "e6",
  "type": "play-melody",
  "title": "Ode to Joy with left-hand roots",
  "instructions": "Left hand plays C3 or G3 together with the first note of each bar, then releases.",
  "passScore": 0.7,
  "spec": { "bpm": 72, "timeSig": "4/4", "key": "C", "seq": "[C3 E4]:q E4:q F4:q G4:q | [G3 G4]:q F4:q E4:q D4:q | [C3 C4]:q C4:q D4:q E4:q | [G3 E4]:q. D4:8 D4:h | [C3 E4]:q E4:q F4:q G4:q | [G3 G4]:q F4:q E4:q D4:q | [C3 C4]:q C4:q D4:q E4:q | [G3 D4]:q. C4:8 [C3 C4]:h", "showStaff": true, "showKeyboard": false, "countIn": 1 }
}
```

```exercise
{
  "id": "e7",
  "type": "listen",
  "title": "Question or answer?",
  "spec": {
    "example": { "title": "Two 4-bar phrases", "bpm": 90, "timeSig": "4/4", "key": "C", "tracks": [ { "instrument": "piano", "seq": "E4:q G4:q C5:q G4:q | A4:q G4:q E4:q C4:q | D4:q E4:q F4:q E4:q | D4:w | E4:q G4:q C5:q G4:q | A4:q G4:q E4:q C4:q | D4:q E4:q D4:q B3:q | C4:w" }, { "instrument": "bass", "seq": "C3:w | F3:w | G3:w | G3:w | C3:w | F3:w | G3:w | C3:w" } ] },
    "questions": [
      { "q": "Phrase 1 ends with…", "choices": ["a half cadence (question)", "an authentic cadence (answer)"], "answer": 0 },
      { "q": "Phrase 2 ends with…", "choices": ["a half cadence (question)", "an authentic cadence (answer)"], "answer": 1 },
      { "q": "The overall structure is…", "choices": ["A B", "A A'", "A A A"], "answer": 1 }
    ]
  }
}
```
