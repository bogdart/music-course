---
id: w08-l1-phrases-and-cadences
title: Phrases and Cadences
week: 8
order: 1
phase: p1
duration_min: 50
goals:
  - Hear music as phrases that end like a question (half cadence, on V) or an answer (authentic cadence, V → I)
  - Tell a phrase-ending cadence apart from the cadence the app plays before ear questions
  - Hear degree 7 (ti), the leading tone, and its pull up to 1
prerequisites: [w07-l3-same-melody-three-keys-daw]
tags: [form, phrase, cadence, harmony, ear, keyboard]
songs:
  - { title: "Amazing Grace", composer: "Traditional melody ('New Britain'), words by John Newton", public_domain: true }
---

# Phrases and cadences

Music is organised like speech. Notes group into [[phrase]]s — musical sentences, usually 2 or 4 bars long — and each phrase ends with a kind of punctuation.

## One word, two uses

You already know "the cadence": the four chords I – IV – V – I the app plays before degree questions to set home. Musicians also use [[cadence]] for something more general: *the chords at the end of any phrase*, its punctuation. Two of those endings matter now:

- **Half cadence** — the phrase stops **on V**. It sounds like a comma or a question: "…and then?"
- **Authentic cadence** — the phrase ends **V → I**. It sounds like a full stop: "The end."

The reference sound is simply a tiny progression that *finishes* with an authentic cadence: its last two chords, G → C, are V → I. That's why it leaves home ringing in your ear. Listen: first a phrase ending on V, then the same phrase ending V → I:

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

"Amazing Grace" (in 3/4) does the same: its first half stops on degree 5 over V — a question — and the second half answers it.

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

## Hearing I and V

To hear a half cadence you need to tell the two chords apart: **I** (home) and **V** (tension). Your new *progressions* ladder starts with exactly that: two chords, each I or V, after the cadence so home is fresh. (In this week's song lesson the roots ladder does the same from the bottom: the two bass notes, C and G.)

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

```ladder
{ "skill": "progressions", "unlocks": 1, "intro": "Opens the progressions ladder: two chords in C after the cadence, each one I (home) or V (tension)?" }
```

## Degree 7: the leading tone

Why does V → I sound so final? V in C is G–**B**–D. Its middle note, B, is degree **7** — the [[leading tone]] — only a half step below C. When V moves to I, B steps up into C. Heard alone after the cadence, 7 is one of the least settled notes of the key; after each answer the app walks it up, 7 → 1:

```example
{
  "title": "Cadence, then 7 (B) alone… then B → C",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 E4 G4]:q [C4 F4 A4]:q [B3 D4 G4]:q [C4 E4 G4]:q | r:w | B4:w | B4:h C5:h" } ],
  "show": ["keyboard"]
}
```

This lesson opens two degree rungs with 7: first 7 against its two neighbours (1, 2 or 7?), then all seven. The drill runs at your current degree rung — you'll meet 7 once the rungs before it (including G and F) are solid.

```ladder
{ "skill": "degrees", "unlocks": 12, "intro": "Opens \"1, 2 or 7\" and \"All seven in C\"; the drill runs at your current rung." }
```

With 7 the melody ladder can use the whole scale. This lesson opens two melody rungs: four-note echoes from all seven degrees of C major, then **five**-note echoes. As always, you'll meet them once the echoes before them are solid.

```ladder
{ "skill": "melody", "unlocks": 10, "intro": "Opens \"Echo the whole scale\" and \"Five notes\"; the drill runs at your current rung." }
```

## Drills

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
  "instructions": "V → I is B–D–G to C–E–G: the G can stay, the other fingers step.",
  "passScore": 0.75,
  "spec": { "chords": ["C", "G", "C", "F", "G", "C"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

```exercise
{
  "id": "e9",
  "type": "listen",
  "title": "Question or answer?",
  "instructions": "Two 4-bar phrases. Decide how each one ends; the notes appear after you answer.",
  "spec": {
    "example": { "title": "Two 4-bar phrases", "bpm": 90, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "G4:q E4:q C4:q E4:q | F4:q A4:q G4:h | E4:q C4:q D4:q F4:q | G4:w | G4:q E4:q C4:q E4:q | F4:q A4:q G4:h | F4:q E4:q D4:q B3:q | C4:w" }, { "instrument": "bass", "seq": "C3:w | F3:w | C3:w | G2:w | C3:w | F3:w | G2:w | C3:w" } ], "show": ["staff"] },
    "questions": [
      { "q": "Phrase 1 ends with…", "choices": ["a half cadence (question)", "an authentic cadence (answer)"], "answer": 0, "explain": "Bar 4 stops on G over a G bass: V, a half cadence." },
      { "q": "Phrase 2 ends with…", "choices": ["a half cadence (question)", "an authentic cadence (answer)"], "answer": 1, "explain": "Bar 7 is V (B in the melody, G in the bass), bar 8 is I: V → I." }
    ]
  }
}
```
