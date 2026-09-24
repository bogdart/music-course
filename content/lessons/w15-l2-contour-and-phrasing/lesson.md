---
id: w15-l2-contour-and-phrasing
title: Melodic Contour and Phrasing
week: 15
order: 2
phase: p2
duration_min: 45
goals:
  - Describe a melody's contour (arch, ascending, descending, wave) and find its high point
  - Build 4-bar melodies as a question phrase and an answer phrase
  - Hear chromatic neighbour notes that lean into scale degrees
prerequisites: [w15-l1-chord-tones-and-non-chord-tones]
tags: [melody, phrasing, contour, ear]
songs:
  - { title: "Greensleeves", composer: "Traditional (English)", public_domain: true }
  - { title: "Ode to Joy", composer: "Ludwig van Beethoven", public_domain: true }
---

# Melodic Contour and Phrasing

Draw a line through the notes of a melody and you get its shape: its [[melodic contour]]. Shape is what people remember. Most listeners couldn't name a single note of their favourite chorus, but they could trace its rise and fall with a hand.

## Four basic shapes

- **Arch** — rises to a high point, then falls. The most common and most satisfying shape.
- **Ascending** — builds energy, often used to lead *into* a chorus.
- **Descending** — relaxes, settles; typical for endings.
- **Wave** — gentle ups and downs around a centre, like *Ode to Joy*.

Nearly every good melody has one clear **high point** — the [[Climax]] — placed about two-thirds of the way through a phrase, and reached only once. Put it everywhere and it stops being special.

```example
{
  "title": "Greensleeves, first half: climbs to its high F5, then winds down to a question-like ending on E",
  "bpm": 100, "timeSig": "3/4", "key": "Am",
  "tracks": [ { "instrument": "piano", "seq": "r:h A4:q | C5:h D5:q | E5:q. F5:8 E5:q | D5:h B4:q | G4:q. A4:8 B4:q | C5:h A4:q | A4:q. G#4:8 A4:q | B4:h G#4:q | E4:h. |" } ],
  "show": ["pianoroll"]
}
```

## Question and answer

Melodies are built in phrases (you met them in week 8) — musical sentences, usually 2 or 4 bars, separated by a breath. Very often two phrases pair up: the first ends *open* (on degree 2, 5 or 7, over V — a half cadence), like a question; the second starts the same way but ends *closed* on degree 1 over I, like an answer. This is the [[Question and answer]] pattern, and it is everywhere from folk songs to pop choruses.

```example
{
  "title": "Question (ends on D, over G) — answer (ends on C, over C)",
  "bpm": 84, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "E4:q G4:q A4:q G4:q | F4:q E4:q D4:h | E4:q G4:q A4:q G4:q | F4:q D4:q C4:h" },
    { "instrument": "pad", "seq": "[C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [B2 F3 G3]:h [C3 E3 G3]:h" }
  ],
  "show": ["staff", "pianoroll"]
}
```

```exercise
{
  "id": "e1", "type": "play-melody", "title": "Play the question and the answer",
  "instructions": "Breathe (lift your hand) between the two phrases. Feel the question hang in the air.",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "E4:q G4:q A4:q G4:q | F4:q E4:q D4:h | E4:q G4:q A4:q G4:q | F4:q D4:q C4:h", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "pad", "seq": "[C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [B2 F3 G3]:h [C3 E3 G3]:h" } }
}
```

```exercise
{
  "id": "e2", "type": "listen", "title": "Question or answer?",
  "spec": {
    "example": {
      "title": "Three 2-bar phrases", "bpm": 84, "timeSig": "4/4", "key": "C",
      "tracks": [ { "instrument": "piano", "seq": "C4:q E4:q G4:q E4:q | F4:q A4:q G4:h | r:w | G4:q F4:q E4:q D4:q | E4:q D4:q C4:h | r:w | E4:q F4:q G4:q A4:q | B4:q A4:q B4:h" } ]
    },
    "questions": [
      { "q": "Phrase 1 (ends on G, degree 5) sounds…", "choices": ["open — a question", "closed — an answer"], "answer": 0 },
      { "q": "Phrase 2 (ends on C) sounds…", "choices": ["open — a question", "closed — an answer"], "answer": 1 },
      { "q": "Phrase 3 has which contour?", "choices": ["arch", "ascending", "descending", "wave"], "answer": 1 },
      { "q": "Phrase 3 ends on B (degree 7). It wants to go to…", "choices": ["A", "C", "G", "E"], "answer": 1 }
    ]
  }
}
```

```exercise
{
  "id": "e3", "type": "quiz", "title": "Contours you know",
  "spec": { "questions": [
    { "q": "Ode to Joy (E E F G G F E D…) is mostly a…", "choices": ["wave", "ascending line", "big leap"], "answer": 0 },
    { "q": "A melody leading into a chorus often has which shape?", "choices": ["descending", "ascending", "flat"], "answer": 1 },
    { "q": "Where does the climax of a phrase usually sit?", "choices": ["the first note", "about two-thirds through", "the last note"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "e4", "type": "ear-melody", "title": "Dictation: 5-note phrases",
  "instructions": "Hear it, sing it, trace its shape with your hand, then play it.",
  "count": 8, "passScore": 0.7,
  "spec": { "key": "C", "degrees": [1, 2, 3, 4, 5, 6], "length": 5, "rhythm": "simple", "answer": "play" }
}
```

## Chromatic neighbours

One more colour: a neighbour note from *outside* the scale. A half step below a chord tone, it leans into it like a leading tone — remember E–D#–E in *Für Elise*? The raised 4th (F# in C) pulling to G is the most common.

```example
{
  "title": "Chromatic lower neighbours: G–F#–G, E–D#–E, C–B–C",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "G4:q F#4:q G4:h | E4:q D#4:q E4:h | C5:q B4:q C5:h" } ],
  "show": ["keyboard"]
}
```

```exercise
{
  "id": "e5", "type": "ear-note", "title": "Degrees with chromatic notes",
  "instructions": "Some notes are outside the scale. Answer with # or b (e.g. #4, b7).",
  "count": 10, "passScore": 0.7,
  "spec": { "key": "C", "mode": "major", "degrees": [1, 3, 4, 5, 7], "chromatic": true, "reference": "cadence", "octaves": [4], "instrument": "piano" }
}
```
