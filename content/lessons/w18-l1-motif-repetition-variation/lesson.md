---
id: w18-l1-motif-repetition-variation
title: Motif, Repetition and Variation
week: 18
order: 1
phase: p3
duration_min: 45
goals:
  - Grow a 4-bar phrase from a 1-bar motif using repetition, changed endings and sequence
  - Write question-and-answer phrases that end open and closed
  - Play back short melodies by ear in major
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

## Question and answer

Phrases come in pairs, like a conversation: [[question and answer]]. The **question** ends open — on degree 2, 5 or 7, usually over V. The **answer** starts the same way and ends closed on degree 1 over I. "Ode to Joy" is the textbook case: the question lands on D (degree 2), the answer on C.

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
  "passScore": 0.8,
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
  "passScore": 0.75,
  "spec": { "bpm": 90, "timeSig": "4/4", "key": "C", "seq": "E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | E4:q. D4:8 D4:h | E4:q E4:q F4:q G4:q | G4:q F4:q E4:q D4:q | C4:q C4:q D4:q E4:q | D4:q. C4:8 C4:h", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "pad", "seq": "[C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [B2 D3 G3]:h [C3 E3 G3]:h" } }
}
```

```exercise
{
  "id": "ear-echo-motifs",
  "type": "ear-melody",
  "title": "Echo the motif",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "C", "degrees": [1, 2, 3, 4, 5, 6], "length": 5, "rhythm": "simple", "answer": "play" }
}
```

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
    "task": "Invent a 1-bar motif with at least two different note lengths. Bar 2: repeat it with a changed ending. Bar 3: sequence it (same shape from another degree). Bar 4: land on C.",
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

```exercise
{
  "id": "daw-question-answer",
  "type": "daw-task",
  "title": "Write a question and an answer",
  "spec": {
    "template": { "bpm": 90, "key": "G", "tracks": [
      { "instrument": "piano", "seq": "[G3 B3 D4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w | [F#3 A3 D4]:w | [G3 B3 D4]:w | [G3 C4 E4]:w | [F#3 A3 D4]:w | [G3 B3 D4]:w" },
      { "instrument": "lead", "seq": "" }
    ] },
    "task": "In G major: bars 1-4 are your question (I-IV-I-V) - end it on A or D over the D chord. Bars 5-8 are the answer (I-IV-V-I) - start exactly like the question, change bars 7-8 and end on G.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "G", "scale": "major", "track": 1 },
      { "kind": "repetition", "motifBars": 2, "minRepeats": 2, "allowTransposed": false, "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "IV", "I", "V", "I", "IV", "V", "I"], "barsPerChord": 1, "minRatio": 0.75, "track": 1 },
      { "kind": "ends-on", "degree": 1, "track": 1 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "ear-degrees-dictation",
  "type": "ear-melody",
  "title": "Write the degrees",
  "count": 8,
  "passScore": 0.7,
  "spec": { "key": "G", "degrees": [1, 2, 3, 4, 5], "length": 4, "rhythm": "quarters", "answer": "degrees" }
}
```
