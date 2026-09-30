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
  - Hear falling intervals inside melodies
prerequisites: [w15-l1-chord-tones-and-non-chord-tones]
tags: [melody, phrasing, contour, intervals, ear]
songs:
  - { title: "Greensleeves", composer: "Traditional (English)", public_domain: true }
  - { title: "Ode to Joy", composer: "Ludwig van Beethoven", public_domain: true }
---

# Melodic Contour and Phrasing

Draw a line through the notes of a melody and you get its shape, its [[melodic contour]]. Shape is what people remember: most listeners couldn't name a single note of their favourite chorus, but they could trace its rise and fall with a hand.

## Four basic shapes

- **Arch**: rises to a high point, then falls. The most common and most satisfying shape.
- **Ascending**: builds energy, often used to lead *into* a chorus.
- **Descending**: relaxes and settles; typical for endings.
- **Wave**: gentle ups and downs around a centre, like *Ode to Joy*.

Most good melodies have one clear **high point**, the [[climax]], often about two thirds of the way through a phrase and reached only once. Use it everywhere and it stops being special.

```example
{
  "title": "Greensleeves, first half: climbs to its high F, then winds down to an open ending on E",
  "bpm": 100, "timeSig": "3/4", "key": "Am",
  "tracks": [ { "instrument": "piano", "seq": "r:h A4:q | C5:h D5:q | E5:q. F5:8 E5:q | D5:h B4:q | G4:q. A4:8 B4:q | C5:h A4:q | A4:q. G#4:8 A4:q | B4:h G#4:q | E4:h. |" } ],
  "show": ["pianoroll"]
}
```

## Question and answer

Melodies are built from phrases (week 8): musical sentences, usually 2 or 4 bars, separated by a breath. Very often two phrases pair up. The first ends *open*, on degree 2, 5 or 7 over V (a half cadence), like a question. The second starts the same way but ends *closed*, on 1 over I, like an answer. This is [[question and answer]] phrasing, found everywhere from folk songs to pop choruses.

```example
{
  "title": "Question (ends on D, over G), then answer (ends on C, over C)",
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
  "instructions": "Lift your hand between the two phrases, like taking a breath. Let the question hang in the air.",
  "count": 1, "passScore": 0.7,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "E4:q G4:q A4:q G4:q | F4:q E4:q D4:h | E4:q G4:q A4:q G4:q | F4:q D4:q C4:h", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "pad", "seq": "[C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [B2 F3 G3]:h [C3 E3 G3]:h" } }
}
```

```exercise
{
  "id": "e2", "type": "listen", "title": "Question or answer?",
  "instructions": "Three 2-bar phrases in C, separated by a bar of rest. Decide before you look.",
  "spec": {
    "example": {
      "title": "Three phrases", "bpm": 84, "timeSig": "4/4", "key": "C", "hidden": true,
      "tracks": [ { "instrument": "piano", "seq": "C4:q E4:q G4:q E4:q | F4:q A4:q G4:h | r:w | G4:q F4:q E4:q D4:q | E4:q D4:q C4:h | r:w | E4:q F4:q G4:q A4:q | B4:q A4:q B4:h" } ]
    },
    "questions": [
      { "q": "Phrase 1 sounds…", "choices": ["open: a question", "closed: an answer"], "answer": 0, "explain": "It ends on G, degree 5." },
      { "q": "Phrase 2 sounds…", "choices": ["open: a question", "closed: an answer"], "answer": 1, "explain": "It ends on C, home." },
      { "q": "Phrase 3 has which contour?", "choices": ["arch", "ascending", "descending", "wave"], "answer": 1, "explain": "E F G A B A B: it climbs almost all the way." },
      { "q": "Phrase 3 ends on degree 7. Where does it want to go?", "choices": ["down to 6", "up to 1", "down to 5"], "answer": 1, "explain": "B, the leading tone, wants to rise to C." }
    ]
  }
}
```

## Falling intervals in melodies

Descending contours are made of falling intervals, mostly steps with a few leaps. In week 10 your hands learned to find intervals going down; now the ear drill starts on them too. Listen to this phrase: it leaps up once, then comes down with a fall of a 3rd, a 4th and finally a 5th, landing on home.

```example
{
  "title": "An arch: up a sixth, then down by a 3rd (A–F), a 4th (G–D), a 5th (G–C)",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "C4:q A4:q G4:q A4:q | F4:h G4:q D4:q | E4:q G4:q C4:h" },
    { "instrument": "pad", "seq": "[C3 E3 G3]:w | [F2 C3 A3]:h [G2 B2 D3]:h | [C3 E3 G3]:w" }
  ],
  "show": ["staff"]
}
```

This lesson opens two interval rungs, one of them a big step:

1. **All intervals, going up**: every size you know, twelve choices at once. The ladder keeps you here until it's solid.
2. **Going down**: just four falling intervals (2nd, 3rd, 4th, 5th).

The drill below runs at your current interval rung, so it may still be an earlier one; the falling rungs wait until the rising ones are mastered. The remaining falling intervals open in week 18.

Tip for falling intervals: play the two notes back on the keyboard low-then-high and compare with the rising intervals you know.

```ladder
{ "skill": "intervals", "unlocks": 14, "intro": "Opens: all intervals going up, then four falling intervals (2nd to 5th)." }
```

## Ear: longer tunes in any key

This lesson opens the next melody rung: five notes from the whole scale, in a new key each time (the drill runs at your current rung). With any tune: trace the contour with your hand first (up, down, where's the top?), then find it on the keyboard.

```ladder
{ "skill": "melody", "unlocks": 13, "intro": "A new key each time: play back five notes from the whole scale." }
```

```exercise
{
  "id": "e3", "type": "quiz", "title": "Contours you know",
  "spec": { "questions": [
    { "q": "Ode to Joy (E E F G G F E D…) is mostly a…", "choices": ["wave", "ascending line", "big leap"], "answer": 0 },
    { "q": "A melody leading into a chorus often has which shape?", "choices": ["descending", "ascending", "flat"], "answer": 1 },
    { "q": "Where does the climax of a phrase usually sit?", "choices": ["the first note", "about two thirds through", "the last note"], "answer": 1 },
    { "q": "A question phrase typically ends on…", "choices": ["degree 1", "degree 2, 5 or 7"], "answer": 1 }
  ] }
}
```
