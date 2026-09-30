---
id: w18-l1-motif-repetition-variation
title: Motif, Repetition and Variation
week: 18
order: 1
phase: p3
duration_min: 45
goals:
  - Grow a 4-bar phrase from a 1-bar motif using repetition, changed endings and sequence
  - Recognise a question-and-answer pair (week 15) inside a well-known tune
  - Write down short melodies as degrees in any key
prerequisites: [w17-l3-blocking-out-a-form-daw]
tags: [melody, motif, songwriting, ear]
songs:
  - { title: "Ode to Joy", composer: "Beethoven", public_domain: true }
---

# Motif, Repetition and Variation

Most memorable melodies are built from very little material. A [[motif]] — one bar, three to six notes — is repeated and changed until it fills a phrase. The ear loves this balance: **enough repetition to recognise, enough change to stay curious.** A useful rule: *repeat twice, change the third time.*

## Four ways to vary a motif

1. **Exact repeat** — say it again.
2. **Change the ending** — same rhythm and start, new last notes (often to fit the new chord).
3. **[[Melodic sequence]]** — the same shape starting on another degree.
4. **Rhythm variation** — same notes, new rhythm (or same rhythm, new notes).

The rhythm is the strongest glue: if the rhythm repeats, the listener hears "the same idea" even when every pitch changes.

```example
{
  "title": "One motif, four bars",
  "bpm": 90, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "C4:8 D4:8 E4:q G4:q E4:q | C4:8 D4:8 E4:q A4:q F4:q | D4:8 E4:8 F4:q A4:q F4:q | E4:8 D4:8 C4:h." },
    { "instrument": "piano", "seq": "[C3 E3 G3]:w | [C3 F3 A3]:w | [D3 F3 A3]:w | [C3 E3 G3]:w" },
    { "instrument": "bass", "seq": "C2:w | F2:w | D2:w | C2:w" }
  ],
  "show": ["pianoroll", "staff"],
  "loop": true
}
```

Bar 1 is the motif. Bar 2 repeats it with a new ending that fits F. Bar 3 is a sequence — the bar-1 shape moved up a step. Bar 4 answers with the motif's rhythm turned around and lands on C.

### Try it

1. Tap the rhythm of bar 1 on the table while it loops: short-short-long-long-long. Keep tapping through bars 2 and 3.
2. On your keyboard play bar 1 (C D E G E), then start the same shape on D: D E F A F. That's bar 3 — a sequence.
3. Now play bar 1's notes with all quarter notes (C D E G E, even). Does it still sound like "the motif"?

**Check:** your tap fits bars 1–3 without changing; the even version sounds noticeably less like the motif, though the
notes are the same — rhythm is the glue.

**If you can't hear it yet:** watch the piano roll while it loops: the same *picture* (two short blocks, three long
ones) repeats in bars 1–3, just higher or with a new tail.

## Question and answer (a reminder)

You met this in week 15. Phrases come in pairs, like a conversation: [[question and answer]]. The **question** ends open — on degree 2, 5 or 7, usually over V. The **answer** starts the same way and ends closed on degree 1 over I. "Ode to Joy" is the textbook case: the question lands on D (degree 2), the answer on C.

**Try it:** play the example and stop it after bar 4 — the tune feels paused mid-sentence. Then play E4 D4 C4 on your
keyboard (the end of bar 8) and stop: done. **If you can't hear it yet:** play D4 then C4 alone, twice each; D wants
to move on, C lets you take your hands off the keys.

```example
{
  "title": "Ode to Joy - question (bars 1-4) and answer (bars 5-8)",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | E4:q. D4:8 D4:h | E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | D4:q. C4:8 C4:h" },
    { "instrument": "piano", "seq": "[C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [B2 D3 G3]:h [C3 E3 G3]:h" }
  ],
  "show": ["staff"],
  "loop": false
}
```

```exercise
{
  "id": "motif-quiz",
  "type": "quiz",
  "spec": { "questions": [
    { "q": "Bar 3 of \"One motif, four bars\" moves the motif's shape up one step. This is called...", "choices": ["Exact repeat", "Sequence", "Question", "Climax"], "answer": 1 },
    { "q": "Which element most strongly makes two bars sound like the same idea?", "choices": ["The same rhythm", "The same instrument", "The same key", "The same velocity"], "answer": 0 },
    { "q": "A question phrase typically ends on...", "choices": ["Degree 1 over I", "Degree 2 or 5 over V", "Any note over IV", "A rest"], "answer": 1 },
    { "q": "\"Repeat twice, change the third time\" describes...", "choices": ["A chord progression", "A drum fill", "A common motif pattern", "A form"], "answer": 2 }
  ] }
}
```

```exercise
{
  "id": "play-ode-qa",
  "type": "play-melody",
  "title": "Play the question and the answer",
  "passScore": 0.7,
  "spec": { "bpm": 90, "timeSig": "4/4", "key": "C", "seq": "E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | E4:q. D4:8 D4:h | E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | D4:q. C4:8 C4:h", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "pad", "seq": "[C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [B2 D3 G3]:h [C3 E3 G3]:h" } }
}
```

**Growing a motif — what to try first:** start with bar 1 of the example and change just one note or one rhythm;
a borrowed motif is fine for a first try. **Judge it by ear:** loop the four bars; bars 1–3 should sound like one idea
said three times, bar 4 like a full stop. **If you're stuck:** if bar 2's ending clashes with F, move its last note to
F, A or C; if bar 4 doesn't feel final, end on a long C4.

```exercise
{
  "id": "daw-grow-motif",
  "type": "daw-task",
  "title": "Grow a motif into 4 bars",
  "spec": {
    "template": { "bpm": 90, "key": "C", "tracks": [
      { "instrument": "piano", "seq": "[C3 E3 G3]:w | [C3 F3 A3]:w | [D3 F3 A3]:w | [C3 E3 G3]:w" },
      { "instrument": "lead", "seq": "" }
    ] },
    "task": "Invent a 1-bar motif with at least two different note lengths (start from bar 1 of the example if you are stuck, then change it). Bar 2: repeat it with a changed ending that fits F. Bar 3: sequence it (same shape from another degree). Bar 4: land on C. Play it back after each bar. About 15 minutes.",
    "checks": [
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "in-key", "key": "C", "scale": "major", "track": 1 },
      { "kind": "repetition", "motifBars": 1, "minRepeats": 2, "allowTransposed": true, "track": 1 },
      { "kind": "uses-rhythm", "values": ["8", "q", "h"], "minDistinct": 2, "track": 1 },
      { "kind": "ends-on", "degree": 1, "track": 1 }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

## Ear: melodies as degrees

Writing a motif and hearing one are the same skill from two sides. This lesson opens the melody rung where the key changes
every question and you answer with degree numbers instead of keys: listen to the cadence, find home, then name each
note's distance from home. The drill runs at your current melody rung, so it may still be an earlier one.

**Before the drill** (method also in the *How to do it* box): play the melody back on the keyboard first, starting
from the home the cadence gave you; then count each note's steps up from home to get its degree number.

```ladder
{ "skill": "melody", "unlocks": 14, "intro": "Opens: a new key every time - write the degrees of the notes you hear. The drill runs at your current melody rung." }
```

## Between lessons

Each day invent one 1-bar motif (on the keyboard, 30 seconds) and play it three times: repeat, change the ending,
move it up a step.
