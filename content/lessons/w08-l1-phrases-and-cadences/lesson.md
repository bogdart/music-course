---
id: w08-l1-phrases-and-cadences
title: Phrases and Cadences
week: 8
order: 1
phase: p1
duration_min: 50
goals:
  - Hear music as phrases that end like a question (half cadence, on V) or an answer (authentic cadence, V → I)
  - Tell I from V — by feel or by the bass note on the keyboard
  - Hear degree 7 (ti), the leading tone, and its pull up to 1
prerequisites: [w07-l3-same-melody-three-keys-daw]
tags: [form, phrase, cadence, harmony, ear, keyboard]
songs:
  - { title: "Amazing Grace", composer: "Traditional melody ('New Britain'), words by John Newton", public_domain: true }
---

# Phrases and cadences

Music is organised like speech. Notes group into [[phrase]]s — musical sentences, usually 2 or 4 bars long — and each phrase ends with a kind of punctuation.

## One word, two uses

You know "the cadence": the four chords I – IV – V – I the app plays before degree questions. Musicians also use [[cadence]] for *the chords at the end of any phrase*. Two endings matter now:

- **Half cadence** — the phrase stops **on V**: a comma or a question, "…and then?"
- **Authentic cadence** — the phrase ends **V → I**: a full stop.

The app's reference sound simply *finishes* with an authentic cadence (G → C), which is why it leaves home ringing.

```example
{
  "title": "Phrase ending on V (half cadence), then the same phrase ending V → I (authentic)",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "E4:q G4:q C5:q G4:q | A4:q G4:q E4:q C4:q | D4:q E4:q F4:q E4:q | D4:w | r:w | E4:q G4:q C5:q G4:q | A4:q G4:q E4:q C4:q | D4:q E4:q D4:q B3:q | C4:w" },
    { "instrument": "pad", "seq": "[C3 E3 G3]:w | [F3 A3 C4]:w | [G3 B3 D4]:w | [G3 B3 D4]:w | r:w | [C3 E3 G3]:w | [F3 A3 C4]:w | [G3 B3 D4]:w | [C3 E3 G3]:w" }
  ],
  "show": ["staff"]
}
```

"Amazing Grace" (in 3/4) does the same: its first half stops on degree 5 over V — a question.

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

**Try it:** after the Amazing Grace example stops, play C E G on your keyboard. Does it feel like the answer the phrase was waiting for? Then play the first example again and, in the pause after the first phrase, play C E G yourself — you've just turned the half cadence into an authentic one.

**If you can't hear it yet:** look at the last **bass** note. Search for it on the keyboard: G (degree 5) → the phrase stopped on V, a question; C → it ended on I, an answer.

```exercise
{
  "id": "e9",
  "type": "listen",
  "title": "Check: question or answer?",
  "instructions": "Two 4-bar phrases. Decide how each one ends; if unsure, find the last bass note of each. The notes appear after you answer.",
  "spec": {
    "example": { "title": "Two 4-bar phrases", "bpm": 90, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "G4:q E4:q C4:q E4:q | F4:q A4:q G4:h | E4:q C4:q D4:q F4:q | G4:w | G4:q E4:q C4:q E4:q | F4:q A4:q G4:h | F4:q E4:q D4:q B3:q | C4:w" }, { "instrument": "bass", "seq": "C3:w | F3:w | C3:w | G2:w | C3:w | F3:w | G2:w | C3:w" } ], "show": ["staff"] },
    "questions": [
      { "q": "Phrase 1 ends with…", "choices": ["a half cadence (question)", "an authentic cadence (answer)"], "answer": 0, "explain": "Bar 4 stops on G over a G bass: V, a half cadence." },
      { "q": "Phrase 2 ends with…", "choices": ["a half cadence (question)", "an authentic cadence (answer)"], "answer": 1, "explain": "Bar 7 is V (B in the melody, G in the bass), bar 8 is I: V → I." }
    ]
  }
}
```

## Hearing I and V

To hear a half cadence you need to tell **I** (home) from **V** (tension). Your new *progressions* ladder starts with exactly that.

```example
{
  "title": "I (C) and V (G) with their bass notes: I – V – V – I",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[C4 E4 G4]:w | [B3 D4 G4]:w | [B3 D4 G4]:w | [C4 E4 G4]:w" },
    { "instrument": "bass", "seq": "C3:w | G2:w | G2:w | C3:w" }
  ],
  "show": ["keyboard"]
}
```

**Try it:**

1. Right hand: C E G, then B D G. Alternate four times. Add the left hand: C3 under I, G2 under V.
2. Stop on V and hold it. Does it want to move on? Then play I.
3. Two cues to listen for: **feel** (rest vs "needs to move") and **bass** (C vs G, the G is lower here).

**If you can't hear it yet:** use the bass. After each chord, search its lowest note — C means I, G means V. It's slower, and it works every time.

```exercise
{
  "id": "c2",
  "type": "listen",
  "title": "Check: I or V?",
  "instructions": "Each example plays the cadence, a pause, then two chords. Name them; search the bass notes if unsure.",
  "spec": {
    "examples": [
      { "title": "Question 1", "bpm": 72, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | r:w | [C4 E4 G4]:h [B3 D4 G4]:h" }, { "instrument": "bass", "seq": "C3:q F2:q G2:q C3:q | r:w | C3:h G2:h" } ] },
      { "title": "Question 2", "bpm": 72, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | r:w | [B3 D4 G4]:h [B3 D4 G4]:h" }, { "instrument": "bass", "seq": "C3:q F2:q G2:q C3:q | r:w | G2:h G2:h" } ] }
    ],
    "questions": [
      { "q": "Question 1: the two chords are…", "choices": ["I – I", "I – V", "V – I", "V – V"], "answer": 1, "explain": "C then G in the bass: I, then V." },
      { "q": "Question 2: the two chords are…", "choices": ["I – I", "I – V", "V – I", "V – V"], "answer": 3, "explain": "G in the bass twice: V, V — the phrase is left hanging." }
    ]
  }
}
```

### Before the progressions drill

The **How to do it** box for this rung: "I sounds at rest; V sounds like it needs to move on. Follow the bass too: C = I, G = V." Routine: let the cadence set home → listen to each chord → rest or move-on? → unsure: find the bass note.

```ladder
{ "skill": "progressions", "unlocks": 1, "intro": "Opens the progressions ladder: two chords in C after the cadence, each one I (home) or V (tension)?" }
```

## Degree 7: the leading tone

V → I sounds so final partly because of one note. V in C is G–**B**–D; B is degree **7**, the [[leading tone]], only a half step below C. When V moves to I, B steps up into C.

```example
{
  "title": "Cadence, then 7 (B) alone… then B → C",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | r:w | B4:w | B4:h C5:h" } ],
  "show": ["keyboard"]
}
```

**Try it:**

1. Play the cadence, then B4. Hold it for three seconds before letting it go up to C5.
2. Play the cadence, then D4, and let it go down to C4. Compare: many people hear 7 lean **up** and 2 lean **down**.
3. Play the cadence, then C4: no lean at all.

**If you can't hear it yet:** find the key. B is the white key just below C — if your search lands one key below home, it's 7. Or walk: 7 is one half step up to home; 2 is one whole step down.

```exercise
{
  "id": "c1",
  "type": "listen",
  "title": "Check: 1, 2 or 7?",
  "instructions": "Each example plays the cadence, then one note. Which way does it lean? Find the key if unsure.",
  "spec": {
    "examples": [
      { "title": "Question 1", "bpm": 72, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | r:h B4:h" } ] },
      { "title": "Question 2", "bpm": 72, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | r:h D4:h" } ] },
      { "title": "Question 3", "bpm": 72, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | r:h C4:h" } ] }
    ],
    "questions": [
      { "q": "Question 1: the note is degree…", "choices": ["1", "2", "7"], "answer": 2, "explain": "B: ti, a half step below the upper C." },
      { "q": "Question 2: the note is degree…", "choices": ["1", "2", "7"], "answer": 1, "explain": "D: re, a step above home." },
      { "q": "Question 3: the note is degree…", "choices": ["1", "2", "7"], "answer": 0, "explain": "C: home." }
    ]
  }
}
```

### Before the degree drill

This lesson opens "1, 2 or 7" and "All seven in C"; the drill runs at your current degree rung (perhaps still in G or F). The **How to do it** box for 7: listen for the *direction* of the pull — up into home (7) or down (2). For all seven: at rest (1 3 5) or leaning? Leaning down (2 4 6) or up (7)? Then walk home to confirm.

```ladder
{ "skill": "degrees", "unlocks": 12, "intro": "Opens \"1, 2 or 7\" and \"All seven in C\"; the drill runs at your current rung." }
```

## Longer echoes

With 7 the melody ladder can use the whole scale, and then five notes. No new method — just **chunks**: for five notes, get the first three right, replay, then add the last two. The drill's **How to do it** box shows the routine for your current melody rung.

```ladder
{ "skill": "melody", "unlocks": 10, "intro": "Opens \"Echo the whole scale\" and \"Five notes\"; the drill runs at your current rung." }
```

## Theory and keyboard

```exercise
{
  "id": "e8",
  "type": "quiz",
  "title": "Cadences and phrases",
  "spec": { "questions": [
    { "q": "A phrase ending on V sounds like…", "choices": ["a question / comma", "a full stop"], "answer": 0 },
    { "q": "The authentic cadence is…", "choices": ["I → V", "V → I", "IV → V"], "answer": 1 },
    { "q": "The reference the app plays before degree questions (I–IV–V–I) ends with…", "choices": ["a half cadence", "an authentic cadence, V → I"], "answer": 1 },
    { "q": "In C major, the leading tone is…", "choices": ["B", "F", "G"], "answer": 0 },
    { "q": "The leading tone is how far below the tonic?", "choices": ["a half step", "a whole step", "a 3rd"], "answer": 0 },
    { "q": "In C major, V is…", "choices": ["G–B–D", "F–A–C", "C–E–G"], "answer": 0 }
  ] },
  "passScore": 0.75
}
```

```exercise
{
  "id": "e5",
  "type": "play-chord",
  "title": "Cadences under your fingers",
  "instructions": "V → I is B–D–G to C–E–G: the G can stay, the other fingers step. Notice the B stepping up to C.",
  "passScore": 0.75,
  "spec": { "chords": ["C", "G", "C", "F", "G", "C"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

## Between lessons

- **Two Practice sessions of about 10 minutes.** You now have many open ladders; the Practice page picks the three furthest behind — trust it rather than choosing.
- **Keyboard, 2 minutes:** C → G → C with the left hand on the bass (C3, G2, C3). Stop on G sometimes and feel the question.
- **Next lesson is a review, not new material.** If you have one extra session this week, spend it on Practice so the review shows where you really are.
