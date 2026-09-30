---
id: w31-l2-approach-notes-and-enclosures
title: Approach Notes and Enclosures
week: 31
order: 2
phase: p4
duration_min: 40
goals:
  - Aim at chord tones with a chromatic approach from a half step below
  - Surround a target with an enclosure (above, below, target)
  - Play a bebop-style ii–V–I line in 8th notes
prerequisites: [w31-l1-chord-scales-and-guide-tones]
tags: [improvisation, bebop, chromaticism, jazz]
---

# Approach Notes and Enclosures

Guide tones tell you *where* to land. Today's two tools make the landing sound deliberate. They come from bebop, Charlie Parker's generation, and they are the quickest way to sound "jazzy" rather than "running up and down a scale".

## Chromatic approach

Play the note **a half step below** your target just before it. You used [[approach note]]s in bass lines in week 19; in a melody they work the same way. The ear hears the half-step pull and accepts almost any approach note, even one outside the key, as long as it resolves. Rule of thumb: the approach note sits on a weak beat (or the weak half of a beat), the target on a strong one.

```example
{
  "title": "Approaching each 3rd from below: E→F, A#→B, D#→E",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "r:h. E4:q | F4:h. A#3:q | B3:h. D#4:q | E4:w |" },
    { "instrument": "piano", "seq": "r:w | [D3 F3 C4]:w | [G2 F3 B3]:w | [C3 E3 B3]:w |" }
  ],
  "show": ["staff"]
}
```

## Enclosure

An [[enclosure]] wraps the target: first the scale note **above** it, then the note a half step **below**, then the target. The line seems to circle the note before landing on it. Parker used enclosures constantly.

```example
{
  "title": "Enclosures around E, B and F",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "lead", "seq": "F4:8 D#4:8 E4:q r:h | C5:8 A#4:8 B4:q r:h | G4:8 E4:8 F4:q r:h |" } ],
  "show": ["staff", "keyboard"]
}
```

(For F, the note a half step below is E, which is already in the key. Enclosures don't have to be chromatic, only close.)

## Putting them in a line

Now both tools in an 8th-note line. Bar 1 outlines Dm7 and ends with an enclosure (C, A♯) onto B, the 3rd of G7. Bar 2 walks down G Mixolydian and encloses (F, D♯) the E of Cmaj7.

```example
{
  "title": "A bebop ii–V–I line (original)",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "D4:8 F4:8 A4:8 C5:8 E5:8 D5:8 C5:8 A#4:8 | B4:8 A4:8 G4:8 F4:8 E4:8 D4:8 F4:8 D#4:8 | E4:h. r:q |" },
    { "instrument": "piano", "seq": "[D3 F3 C4]:w | [G2 F3 B3]:w | [C3 E3 B3]:w |" },
    { "instrument": "bass", "seq": "D2:w | G1:w | C2:w |" }
  ],
  "show": ["staff", "keyboard"]
}
```

Notice where the chromatic notes fall: on the last 8th of the bar, resolving by half step onto beat 1. That placement is the whole secret.

**Practise before you improvise.** Don't try to make up lines with these yet. Drill them as fixed patterns on the three targets E, B and F, as below. Next lesson you will use them to build a solo step by step.

## Drills

```exercise
{
  "id": "e1-play-approach",
  "type": "play-melody",
  "title": "Approach from below",
  "passScore": 0.7,
  "spec": { "bpm": 72, "timeSig": "4/4", "key": "C", "seq": "r:h. E4:q | F4:h. A#3:q | B3:h. D#4:q | E4:w |", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "piano", "seq": "r:w | [D3 F3 C4]:w | [G2 F3 B3]:w | [C3 E3 B3]:w |" } }
}
```

```exercise
{
  "id": "e2-play-enclosures",
  "type": "play-melody",
  "title": "Enclosures on E, B and F",
  "passScore": 0.7,
  "spec": { "bpm": 72, "timeSig": "4/4", "key": "C", "seq": "F4:8 D#4:8 E4:q r:h | C5:8 A#4:8 B4:q r:h | G4:8 E4:8 F4:q r:h |", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

```exercise
{
  "id": "e3-quiz-input-enclose",
  "type": "quiz-input",
  "title": "Build approaches and enclosures",
  "passScore": 0.7,
  "spec": { "questions": [
    { "q": "Target E. Scale note above it (in C major)?", "answer": ["F"], "kind": "note" },
    { "q": "Target E. Chromatic note a half step below?", "answer": ["D#", "Eb"], "kind": "note" },
    { "q": "Target B (3rd of G7). Chromatic approach from below?", "answer": ["A#", "Bb"], "kind": "note" },
    { "q": "Target A (3rd of F7). Chromatic approach from below?", "answer": ["G#", "Ab"], "kind": "note" }
  ] }
}
```

```exercise
{
  "id": "e4-play-bebop-line",
  "type": "play-melody",
  "title": "The bebop line",
  "instructions": "Start slowly. Fingering tip: shift your thumb onto E5 in bar 1.",
  "passScore": 0.7,
  "spec": { "bpm": 70, "timeSig": "4/4", "key": "C", "seq": "D4:8 F4:8 A4:8 C5:8 E5:8 D5:8 C5:8 A#4:8 | B4:8 A4:8 G4:8 F4:8 E4:8 D4:8 F4:8 D#4:8 | E4:h. r:q |", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "bass", "seq": "D2:w | G1:w | C2:w |" } }
}
```

## Ear review

```ladder
{ "skill": "degrees", "unlocks": 22, "intro": "Scale degrees at your level; the chromatic ones are the notes approach tones are made of." }
```

```ladder
{ "skill": "melody", "unlocks": 18, "intro": "Melodies at your level: play back what you hear." }
```
