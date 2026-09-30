---
id: w18-l2-contour-and-phrasing
title: Melodic Contour and Phrasing
week: 18
order: 2
phase: p2
duration_min: 45
goals:
  - Describe a melody's contour (arch, ascending, descending, wave) and find its high point
  - Build 4-bar melodies as a question phrase and an answer phrase
  - Hear falling intervals inside melodies, and the tritone between the 4th and the 5th
prerequisites: [w18-l1-chord-tones-and-non-chord-tones]
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

Melodies are built from phrases (week 8, lesson 2): musical sentences, usually 2 or 4 bars, separated by a breath. Very often two phrases pair up. The first ends *open*, on degree 2, 5 or 7 over V (a half cadence), like a question. The second starts the same way but ends *closed*, on 1 over I, like an answer. This is [[question and answer]] phrasing, found everywhere from folk songs to pop choruses.

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

### Try it: open or closed

1. Play the question phrase above (E G A G | F E D) and **stop** on the D. Keep your hand on the key. It sounds unfinished, as if someone paused mid-sentence.
2. Now play C after it. The pause is over.
3. Play the answer phrase (… F D C) and then add C again. Nothing changes: it was already finished.
4. While Greensleeves plays, trace the line in the air with your hand. Where is the highest point? Stop the hand there and look at the notes: it's the F.

**If you can't hear it yet:** use the test from step 2. After any phrase, play home (C) yourself. If the C sounds like a *relief*, the phrase was a question. If it sounds like a pointless extra note, the phrase was an answer.

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

Descending contours are made of falling intervals, mostly steps with a few leaps. In week 12 your hands learned to find intervals going down by flipping them; here they are inside a melody. (Falling intervals get their own drill rungs in week 21.) Listen to this phrase: it leaps up once, then comes down with a fall of a 3rd, a 4th and finally a 5th, landing on home.

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

### Try it: falling intervals on the keys

1. Play **C4 then G4** (a rising 5th). Now play **G4 then C4**: the same two keys, falling. It feels different, heavier, landing, but the distance is the same seven half steps.
2. Do the same with **C–F** (4th) and **C–E** (3rd): up, then down.
3. Close your eyes, play one of the three falls, and name it. Open your eyes and count the keys.

Check: two falls. Name each before reading the explanation.

```exercise
{
  "id": "e4", "type": "listen", "title": "Check: how far did it fall?",
  "instructions": "Play each fall. If you're not sure, play the same two notes upward on your keyboard and name that.",
  "spec": {
    "examples": [
      { "title": "Fall 1", "bpm": 72, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "G4:h C4:h" } ] },
      { "title": "Fall 2", "bpm": 72, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "A4:h F4:h" } ] }
    ],
    "questions": [
      { "q": "Fall 1 is a…", "choices": ["3rd", "4th", "5th"], "answer": 2, "explain": "A falling 5th: G down to C. Played upward, C–G, it's the Twinkle opening." },
      { "q": "Fall 2 is a…", "choices": ["3rd", "4th", "5th"], "answer": 0, "explain": "A falling major 3rd: A down to F, four half steps. A small skip." }
    ]
  }
}
```

**If you can't hear it yet:** turn a fall into a rise. Find the two notes on the keyboard (search for them as you do in the melody drill), then play them **low note first**. Now it's a rising interval you already know — name that. Your ear gets the fall; your hands get the size.

## Ear corner: the tritone, between 4th and 5th

You named the tritone in week 12, and the chord drill has been full of it since week 15: B–F inside G7, the "squeeze" that pulls home. Today it gets its interval rung, placed where it lives: exactly between the 4th and the 5th. **4th, tritone or 5th?**

### Try it

1. From C4: up to F4 (Here Comes the Bride), up to G4 (Twinkle), then up to F♯4, the key in between. The 4th and 5th sound open and stable; the tritone sounds restless, as if it wants to move a half step either way.
2. Play the tritone and let the top note go up a half step (F♯ → G), then down (F♯ → F): both feel like a relief.
3. Eyes closed: play one of the three from a random note, name it, check.

**If you can't hear it yet:** after the question, hum Bride and Twinkle from its first note. If neither fits and the jump sounds like it's hanging, it's the tritone. Check on the keys: 5, 6 or 7 half steps.

**Before the drill, rehearse the method** (in the *How to do it* box above the drill): anchors first (Bride = 4th, Twinkle = 5th), and "neither, and restless" = tritone. The drill runs at your current interval rung.

```ladder
{ "skill": "intervals", "unlocks": 12, "intro": "Opens \"The tritone\" (P4, TT or P5); the drill runs at your current rung." }
```

## Ear: tunes that leap

The melody drill's tunes now **leap**: jumps up to a 6th, like the opening leap of "My Bonnie" (a major 6th) and the arch above (C up to A).

**Before the drill, rehearse the method** (the *How to do it* box above the drill has it too): **home first** (find the cadence's last bass note on the keyboard), **then the first note** (search from home), **then the path**, traced with your hand as you did with Greensleeves: up, down, step or leap? For a leap, name its size (skip, leap, big leap) before searching for the note: it tells you roughly how far to go. Chunk it: the first three notes, replay, then the rest.

```ladder
{ "skill": "melody", "unlocks": 21, "intro": "Opens \"Leaps\" (melodies that jump up to a 6th); the drill runs at your current melody rung." }
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

## Between lessons

- **3 minutes:** play the question phrase and stop; then add C. Make up two 2-bar phrases of your own, one ending on D or G (open), one on C (closed).
- **3 minutes:** random falls from C5 down (to G4, F4, E4, D4…). Name each, then check by playing it upward.
- **1 minute:** hum along in your head with any tune you know and trace its contour with your hand. No keyboard needed.
- **1 minute:** 4th, tritone and 5th from random notes; let each tritone resolve by a half step.
- One intervals-ladder and one melody-ladder session on the Practice page.
