---
id: w01-l2-pitch-and-octaves
title: Pitch and Octaves
week: 1
order: 2
phase: p1
duration_min: 40
goals:
  - Understand what an octave is and why two notes an octave apart share a name
  - Tell whether two notes are the same note name (possibly in different octaves) or different notes
  - Play C in three octaves, up and down, in time
prerequisites: [w01-l1-welcome-and-setup]
tags: [pitch, octave, ear, keyboard]
---

# Pitch and octaves

Last time you played three Cs. They sounded very different — one deep, one middle, one bright — yet they have the same name. Right now that probably feels arbitrary. By the end of this week it will start to feel obvious, and that shift is one of the most important things you'll learn all year.

## Why octaves "match"

A note is air vibrating. {{note:A4}} vibrates 440 times per second; the A one [[octave]] higher vibrates exactly **880** times — twice as fast. Because 880 is exactly double, every wave of the low note lines up perfectly with every second wave of the high one. The two sounds blend so completely that the brain files them as "the same note, just higher". That's why a man and a child can sing "the same" melody together, an octave apart.

So a note has two properties:

- its **name** (C, D, E…) — its *colour*, which repeats every octave;
- its **octave number** (C3, C4, C5) — how high that colour sits.

On the keyboard, an octave is the distance from one C to the next C: 12 keys, counting black ones.

```keyboard
{ "range": ["C3", "C5"], "highlight": ["C3", "C4", "C5"], "labels": "names", "colors": { "C3": "root", "C4": "root", "C5": "root" } }
```

## Listen for the "same colour"

First, the same name in different octaves. Notice how the second note seems to *fit inside* the first:

```example
{
  "title": "C4 then C5, then together",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h C5:h [C4 C5]:w" } ],
  "show": ["keyboard"]
}
```

Now two *different* names, C and G. Together they still sound pleasant, but you can hear two separate notes rather than one fused sound:

```example
{
  "title": "C4 then G4, then together",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h G4:h [C4 G4]:w" } ],
  "show": ["keyboard"]
}
```

Play both examples several times. Then try it yourself: hold C4 and add C5; hold C4 and add any other white key. Octaves "melt"; other pairs don't.

**Tip for the drills:** after you hear the two notes, hum the first one, then try to slide your hum to the second. If your voice can "land" on it without changing its character — just jumping up or down — it's the same name. Mistakes are expected; the app repeats what you miss.

## Drills

```exercise
{
  "id": "e1",
  "type": "quiz",
  "title": "Octave facts",
  "spec": { "questions": [
    { "q": "A4 vibrates 440 times per second. The A one octave higher vibrates…", "choices": ["220", "660", "880"], "answer": 2, "explain": "One octave up = double the frequency." },
    { "q": "How many keys (white + black) from one C to the next C?", "choices": ["8", "12", "7"], "answer": 1 },
    { "q": "C3 and C5 have the same…", "choices": ["octave number", "note name", "loudness"], "answer": 1 },
    { "q": "Which pair sounds most 'fused' together?", "choices": ["C4 + C5", "C4 + G4", "C4 + D4"], "answer": 0 },
    { "q": "The number in C4 tells you…", "choices": ["how long the note is", "which octave it's in", "how loud it is"], "answer": 1 },
    { "q": "The A one octave below A4 vibrates…", "choices": ["220 times per second", "880 times per second", "400 times per second"], "answer": 0 }
  ] },
  "passScore": 0.8
}
```

```exercise
{
  "id": "e2",
  "type": "ear-octave",
  "title": "Which C? (three choices)",
  "instructions": "You'll hear one C: low (3), middle (4) or high (5)?",
  "count": 9,
  "passScore": 0.7,
  "spec": { "notes": ["C"], "octaves": [3, 4, 5], "mode": "which-octave" }
}
```

```exercise
{
  "id": "e3",
  "type": "ear-octave",
  "title": "Same name or different? (close together)",
  "instructions": "Two notes, one after the other. Are they the same note name (C and C, maybe an octave apart) or different notes (C and G)?",
  "count": 10,
  "passScore": 0.7,
  "spec": { "notes": ["C", "G"], "octaves": [4, 5], "mode": "same-or-different" },
  "hints": ["Hum the first note, then the second. Did your voice keep the same 'colour'?"]
}
```

```exercise
{
  "id": "e4",
  "type": "ear-octave",
  "title": "Same name or different? (wider)",
  "instructions": "Same question, now across three octaves. Ignore how far apart they are — listen for whether they 'melt' together.",
  "count": 10,
  "passScore": 0.7,
  "spec": { "notes": ["C", "G"], "octaves": [3, 4, 5], "mode": "same-or-different" }
}
```

```exercise
{
  "id": "e5",
  "type": "play-notes",
  "title": "Cs going down",
  "instructions": "Play C5, C4, C3 — right to left.",
  "count": 6,
  "spec": { "prompt": "names", "notes": ["C5", "C4", "C3"], "ordered": true, "key": "C" }
}
```

```exercise
{
  "id": "e6",
  "type": "play-melody",
  "title": "Octave jumps in time",
  "instructions": "Play along with the click. Each note lasts two beats.",
  "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "C4:h C5:h | C4:h C3:h | C4:h C5:h | C4:w", "showStaff": false, "showKeyboard": true, "countIn": 1 }
}
```
