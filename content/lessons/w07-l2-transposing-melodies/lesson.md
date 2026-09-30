---
id: w07-l2-transposing-melodies
title: Transposing Melodies
week: 7
order: 2
phase: p1
duration_min: 45
goals:
  - Understand transposition as "same degrees, new home"
  - Play "Mary Had a Little Lamb" in G and "Ode to Joy" in F, and catch a forgotten sharp or flat
  - Echo short melodies with degree 6 by ear, in C and then G major
prerequisites: [w07-l1-g-and-f-major]
tags: [transposition, keys, melody, ear, keyboard]
songs:
  - { title: "Mary Had a Little Lamb", composer: "Traditional", public_domain: true }
  - { title: "Ode to Joy", composer: "Ludwig van Beethoven", public_domain: true }
---

# Transposing melodies

To [[transpose]] a melody is to move all of it up or down by the same distance, into a new key. Every interval stays the same, so the tune is still recognisable — just higher or lower. You'll do it to fit your hands, a singer, or to lift a final chorus.

## Think in degrees

You already know melodies as degrees. "Mary Had a Little Lamb" is:

**3 2 1 2 | 3 3 3 | 2 2 2 | 3 5 5 | 3 2 1 2 | 3 3 3 3 | 2 2 3 2 | 1**

To play it in G major, look up those degrees in G: 1 = G, 2 = A, 3 = B, 5 = D. No calculation per note, and the key signature takes care of any sharps. (The other way — shifting every note by the same interval, e.g. up a 4th from C to F — works too, but is slower in your head. Use it to *check*.)

```example
{
  "title": "Mary (first half) in C, then in G",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "E4:q D4:q C4:q D4:q | E4:q E4:q E4:h | D4:q D4:q D4:h | E4:q G4:q G4:h | B3:q A3:q G3:q A3:q | B3:q B3:q B3:h | A3:q A3:q A3:h | B3:q D4:q D4:h" } ],
  "show": ["staff", "keyboard"]
}
```

**Try it:**

1. Thumb on C4. Play Mary's first line saying the degrees aloud: "3 2 1 2, 3 3 3".
2. Move your thumb to **G3** — fingers over A3, B3, C4, D4. Say the same numbers and play them. Your fingers do exactly the same movements; only the hand moved.
3. Thumb on **F3**. Same numbers again. Your fingers still do the same — Mary uses degrees 1, 2, 3, 5, so no B♭ this time.
4. Listen to all three versions: same tune, different height. Does one of them feel like "the real one"? After weeks in C, many people hear C that way — that's just familiarity.

```exercise
{
  "id": "e1",
  "type": "quiz-input",
  "title": "Degrees in new keys",
  "spec": { "questions": [
    { "q": "Degree 3 in G major?", "answer": ["B"], "kind": "note" },
    { "q": "Degree 4 in F major?", "answer": ["Bb"], "kind": "note" },
    { "q": "'Mary' starts on degree 3. In F major, the first note is…", "answer": ["A"], "kind": "note" },
    { "q": "Ode to Joy's first line reaches up to degree 5. In G major that's…", "answer": ["D"], "kind": "note" },
    { "q": "Transpose E up a perfect 4th:", "answer": ["A"], "kind": "note" },
    { "q": "Degree 7 in G major?", "answer": ["F#"], "kind": "note" }
  ] },
  "passScore": 0.75
}
```

```exercise
{
  "id": "e3",
  "type": "play-melody",
  "title": "Mary in G major",
  "passScore": 0.75,
  "spec": { "bpm": 90, "timeSig": "4/4", "key": "G", "seq": "B3:q. A3:8 G3:q A3:q | B3:q B3:q B3:h | A3:q A3:q A3:h | B3:q D4:q D4:h | B3:q. A3:8 G3:q A3:q | B3:q B3:q B3:q B3:q | A3:q A3:q B3:q A3:q | G3:w", "showStaff": true, "showKeyboard": false, "countIn": 1 }
}
```

## The one trap: the forgotten sharp or flat

In F major, degree 4 is **B♭**, not B. In G major, degree 7 is **F♯**. A transposed melody with one odd-sounding note usually has a forgotten sharp or flat.

```example
{
  "title": "Ode to Joy, first two lines in F major (listen for B♭)",
  "bpm": 100, "timeSig": "4/4", "key": "F",
  "tracks": [ { "instrument": "piano", "seq": "A3:q A3:q Bb3:q C4:q | C4:q Bb3:q A3:q G3:q | F3:q F3:q G3:q A3:q | A3:q. G3:8 G3:h | A3:q A3:q Bb3:q C4:q | C4:q Bb3:q A3:q G3:q | F3:q F3:q G3:q A3:q | G3:q. F3:8 F3:h" } ],
  "show": ["staff"]
}
```

**Try it:** thumb on F3, finger 4 on B♭3. Play Ode to Joy's first line correctly (A A B♭ C C B♭ A G). Then play it with B natural instead. Listen: many people hear the B version as sour or "from a different song". Sometimes your ear catches it, sometimes it won't yet — so also check the key signature.

**If you can't hear it yet:** play along. Put your hand on the correct notes of the key (F G A B♭ C) and play the melody together with the recording: a wrong note in the recording rubs against your right one.

```exercise
{
  "id": "c1",
  "type": "listen",
  "title": "Check: which version forgot the flat?",
  "instructions": "Both are Ode to Joy in F major. Replay, and play along with B♭ under your 4th finger if unsure.",
  "spec": {
    "examples": [
      { "title": "Version 1", "bpm": 96, "timeSig": "4/4", "key": "F", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "A3:q A3:q B3:q C4:q | C4:q B3:q A3:q G3:q | F3:q F3:q G3:q A3:q | A3:q. G3:8 G3:h" } ] },
      { "title": "Version 2", "bpm": 96, "timeSig": "4/4", "key": "F", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "A3:q A3:q Bb3:q C4:q | C4:q Bb3:q A3:q G3:q | F3:q F3:q G3:q A3:q | A3:q. G3:8 G3:h" } ] }
    ],
    "questions": [
      { "q": "Which version has the forgotten flat (B instead of B♭)?", "choices": ["Version 1", "Version 2"], "answer": 0, "explain": "Version 1 plays B natural in bars 1 and 2; Version 2 has the correct B♭." }
    ]
  }
}
```

```exercise
{
  "id": "e2",
  "type": "play-notes",
  "title": "Play by degree in F major",
  "instructions": "Thumb on F3 = degree 1.",
  "count": 10,
  "passScore": 0.75,
  "spec": { "prompt": "degrees", "notes": ["F3", "A3", "C4", "Bb3", "G3", "D4", "E4", "F4"], "ordered": true, "key": "F" }
}
```

```exercise
{
  "id": "e4",
  "type": "play-melody",
  "title": "Ode to Joy in F major (lines 1–2)",
  "passScore": 0.75,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "F", "seq": "A3:q A3:q Bb3:q C4:q | C4:q Bb3:q A3:q G3:q | F3:q F3:q G3:q A3:q | A3:q. G3:8 G3:h | A3:q A3:q Bb3:q C4:q | C4:q Bb3:q A3:q G3:q | F3:q F3:q G3:q A3:q | G3:q. F3:8 F3:h", "showStaff": true, "showKeyboard": false, "countIn": 1 }
}
```

## Echoes with 6, then in G

This lesson opens two melody rungs: echoes that may use degree 6 (C up to A, after the cadence), then the same in G major (G up to E, after the G cadence).

**Try it** (on the example below — its notes stay hidden until you reveal them):

1. Play it twice **without touching the keys**. For each move ask: up, down or same? Step or skip? Say it: "up-step, up-skip, down-step".
2. Thumb on home. Find the **first** note by searching (it's often 1, but not always).
3. Follow your spoken path with your fingers. A wrong note is information: too high → one key left.
4. Reveal the notation and compare.

```example
{
  "title": "Echo me (C major)",
  "bpm": 80, "timeSig": "4/4", "key": "C", "hidden": true,
  "tracks": [ { "instrument": "piano", "seq": "C4:q E4:q G4:q A4:q | G4:w" } ],
  "show": ["keyboard"]
}
```

**If you can't hear it yet:** take one note at a time. Replay, find note 1, play it. Replay, and listen only for the move to note 2: up or down? Search in that direction. It's normal to need five to ten replays per melody at this stage.

In G, put your thumb on G: the fingers are still 1 2 3 4 5 for degrees 1–5, and 6 is one key past the little finger.

### Before the melody drill

The drill runs at your current melody rung. Its **How to do it** box has the method — the routine you just used: listen for the path before playing, thumb on home, find the first note, follow the path, correct by one key.

```ladder
{ "skill": "melody", "unlocks": 8, "intro": "Opens \"Echo with 6\" (C major), then the same in G major once you reach that rung." }
```

## Between lessons

- **Keyboard, 5 minutes:** Mary in C, G and F from the degrees (not from notation). Then Ode to Joy in F, finger 4 on B♭.
- **Two Practice sessions of about 10 minutes.** For melody echoes: always say the path before you play.
- **Ready?** The melody bar grows when echoes are right about 85% of the time over two sessions. Replays don't count against you — use them.
