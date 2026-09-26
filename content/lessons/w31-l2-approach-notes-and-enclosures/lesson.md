---
id: w31-l2-approach-notes-and-enclosures
title: Approach Notes and Enclosures
week: 31
order: 2
phase: p4
duration_min: 45
goals:
  - Aim chord tones with a chromatic approach from a half step below
  - Surround a target with an enclosure (above, below, target)
  - Play a bebop-style ii–V–I line in 8th notes
prerequisites: [w31-l1-chord-scales-and-guide-tones]
tags: [improvisation, bebop, chromaticism, jazz]
---

# Approach Notes and Enclosures

Guide tones tell you *where* to land. Today's tools make the landing sound intentional. They come from bebop — Charlie Parker's generation — and they're the fastest way to sound "jazzy" rather than "scaley".

## Chromatic approach

Play the note **a half step below** your target, just before it. The ear hears the leading-tone pull and accepts almost any [[approach note]], even outside the key, as long as it resolves. Rule of thumb: the approach sits on a weak beat (or weak 8th), the target on a strong one.

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

An [[enclosure]] wraps the target: a note **above** it (usually a scale step), then a half step **below**, then the target. It sounds like the line circles the note before landing. Parker used enclosures constantly.

Now combine them in an 8th-note line. Bar 1 outlines Dm7 and ends with an enclosure (C, A#) onto B, the 3rd of G7. Bar 2 descends G mixolydian and encloses (F, D#) the E of Cmaj7.

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

## Practising it

Don't try to improvise with these yet. First, drill them as fixed patterns: pick one target (say E), and play its approach and enclosure in every octave you can reach. Then do the same for B and F. Tomorrow's solo will use them without you having to think.

Notice where the chromatic notes fall: always on the last 8th of the bar, always resolving by half step onto beat 1. That placement is the whole secret.

## Drills

```exercise
{
  "id": "e1-play-approach",
  "type": "play-melody",
  "title": "Approach from below",
  "count": 6, "passScore": 0.8,
  "spec": { "bpm": 72, "timeSig": "4/4", "key": "C", "seq": "r:h. E4:q | F4:h. A#3:q | B3:h. D#4:q | E4:w |", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "piano", "seq": "r:w | [D3 F3 C4]:w | [G2 F3 B3]:w | [C3 E3 B3]:w |" } }
}
```

```exercise
{
  "id": "e2-play-bebop-line",
  "type": "play-melody",
  "title": "The bebop line",
  "instructions": "Start at 70 bpm. Fingering tip: shift your thumb onto E5 in bar 1.",
  "count": 6, "passScore": 0.75,
  "spec": { "bpm": 70, "timeSig": "4/4", "key": "C", "seq": "D4:8 F4:8 A4:8 C5:8 E5:8 D5:8 C5:8 A#4:8 | B4:8 A4:8 G4:8 F4:8 E4:8 D4:8 F4:8 D#4:8 | E4:h. r:q |", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "bass", "seq": "D2:w | G1:w | C2:w |" } }
}
```

```exercise
{
  "id": "e3-quiz-input-enclose",
  "type": "quiz-input",
  "title": "Build enclosures",
  "passScore": 0.75,
  "spec": { "questions": [
    { "q": "Target E. Scale note above it (in C major)?", "answer": ["F"], "kind": "note" },
    { "q": "Target E. Chromatic note a half step below?", "answer": ["D#", "Eb"], "kind": "note" },
    { "q": "Target B (3rd of G7). Chromatic approach from below?", "answer": ["A#", "Bb"], "kind": "note" },
    { "q": "Target F (3rd of Dm7). Chromatic approach from below?", "answer": ["E"], "kind": "note" }
  ] }
}
```

```exercise
{
  "id": "e4-ear-half-steps",
  "type": "ear-interval",
  "title": "Half step or whole step into the target?",
  "count": 10, "passScore": 0.8,
  "spec": { "intervals": ["m2", "M2", "m3"], "direction": "mixed", "root": "random", "range": ["C4", "C6"] }
}
```

```exercise
{
  "id": "e5-ear-melody",
  "type": "ear-melody",
  "title": "Melodic dictation: landing notes",
  "count": 6, "passScore": 0.7,
  "spec": { "key": "random", "degrees": [1, 2, 3, 4, 5, 6, 7], "length": 5, "rhythm": "simple", "answer": "play" }
}
```

```exercise
{
  "id": "e6-daw-approach-line",
  "type": "daw-task",
  "title": "Your own bebop line",
  "instructions": "Write 8 bars of mostly 8th notes over the looped ii–V–I–I. Land on a chord tone on every beat 1 and 3, and use at least four chromatic approach notes or enclosures. End on a chord tone of Cmaj7.",
  "spec": {
    "template": { "bpm": 100, "key": "C", "timeSig": "4/4", "tracks": [ { "instrument": "lead", "seq": "" }, { "instrument": "piano", "seq": "[D3 F3 C4]:w | [G2 F3 B3]:w | [C3 E3 B3]:w | [C3 E3 B3]:w | [D3 F3 C4]:w | [G2 F3 B3]:w | [C3 E3 B3]:w | [C3 E3 B3]:w |" }, { "instrument": "bass", "seq": "D2:w | G1:w | C2:w | C2:w | D2:w | G1:w | C2:w | C2:w |" } ] },
    "task": "8-bar 8th-note line with chromatic approaches landing on chord tones.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "note-count", "min": 40, "track": 0 },
      { "kind": "uses-rhythm", "values": ["8", "q", "h"], "minDistinct": 2, "track": 0 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": true, "track": 0 },
      { "kind": "chord-tones-on-beats", "beats": [1, 3], "progression": ["ii7", "V7", "Imaj7", "Imaj7"], "barsPerChord": 1, "minRatio": 0.7, "track": 0 },
      { "kind": "custom", "id": "four-approaches", "note": "Self-check: at least four chromatic notes, each resolving by half step onto a strong beat." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```
