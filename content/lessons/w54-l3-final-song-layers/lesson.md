---
id: w54-l3-final-song-layers
title: "Final Project 3: Layers and the Energy Curve"
week: 54
order: 3
phase: p5
duration_min: 50
goals:
  - Draw an energy curve for your song before adding layers
  - "Hear how layers, register and rhythm density raise a section's energy"
  - Arrange layers to match the curve (checkpoint 5)
prerequisites: [w54-l2-final-song-structure]
tags: [songwriting, final-project, arrangement, layers, daw]
---

# Final Project 3: Layers and the Energy Curve

## Checkpoint 5 — the energy curve

Draw your [[energy curve]] on paper *before* adding layers: a line over the form, low for the intro, rising through the
verses, peaking in the last chorus, falling for the outro. Then arrange to the drawing. Every section sits at a different
height from its neighbours — if two adjacent sections are level, change one.

Here is a 4-bar chorus, shown, and then a second version of it, hidden — listen, answer the questions, then reveal.
Listen in passes, one question each: first the very top (what is above the melody?), then the middle (anything held
long, like a carpet?), then the drums' last bar. Switch between the two versions after each pass — the difference is
what you're listening for.

```example
{
  "title": "Chorus at energy level 2 — keys, bass, melody",
  "bpm": 100,
  "timeSig": "4/4",
  "key": "G",
  "tracks": [
    {"instrument": "bass", "seq": "C2:q. C2:8 C2:h | D2:q. D2:8 D2:h | E2:q. E2:8 E2:h | G1:q. G1:8 G1:h"},
    {"instrument": "piano", "seq": "[G3 C4 E4]:h [G3 C4 E4]:h | [A3 D4 F#4]:h [A3 D4 F#4]:h | [G3 B3 E4]:h [G3 B3 E4]:h | [G3 B3 D4]:h [G3 B3 D4]:h"},
    {"instrument": "lead", "seq": "E5:q. D5:8 C5:q G4:q | F#5:q. E5:8 D5:h | E5:q. D5:8 B4:q G4:q | G4:h. r:q"}
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

```exercise
{
  "id": "w51l3-listen",
  "type": "listen",
  "title": "What lifted the energy?",
  "spec": {
    "example": {
      "title": "Chorus, second version",
      "bpm": 100,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 tom:16 tom:16 tom:16 tom:16 snare:16 snare:16 snare:16 snare:16"},
        {"instrument": "bass", "seq": "C2:q. C2:8 C2:h | D2:q. D2:8 D2:h | E2:q. E2:8 E2:h | G1:q. G1:8 G1:h"},
        {"instrument": "piano", "seq": "[G3 C4 E4]:h [G3 C4 E4]:h | [A3 D4 F#4]:h [A3 D4 F#4]:h | [G3 B3 E4]:h [G3 B3 E4]:h | [G3 B3 D4]:h [G3 B3 D4]:h"},
        {"instrument": "strings", "seq": "[C4 E4 G4]:w | [D4 F#4 A4]:w | [E4 G4 B4]:w | [D4 G4 B4]:w"},
        {"instrument": "pluck", "seq": "G5:8 E5:8 C5:8 E5:8 G5:8 E5:8 C5:8 E5:8 | A5:8 F#5:8 D5:8 F#5:8 A5:8 F#5:8 D5:8 F#5:8 | G5:8 E5:8 B4:8 E5:8 G5:8 E5:8 B4:8 E5:8 | G5:8 D5:8 B4:8 D5:8 G5:8 D5:8 B4:8 D5:8"},
        {"instrument": "lead", "seq": "E5:q. D5:8 C5:q G4:q | F#5:q. E5:8 D5:h | E5:q. D5:8 B4:q G4:q | G4:h. r:q"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Which new layer sits highest in register?", "choices": ["Strings", "A plucked arpeggio", "Bass", "Piano"], "answer": 1, "explain": "The pluck arpeggio, above even the melody."},
      {"q": "Which new layer is sustained?", "choices": ["Strings", "The pluck", "Drums", "Lead"], "answer": 0},
      {"q": "What happens in the last bar of the drums?", "choices": ["A tom-and-snare fill into the next section", "Silence", "A tempo change", "A key change"], "answer": 0},
      {"q": "Compared with the shown version, what else changed?", "choices": ["The chords", "The bass line", "The melody", "None of these"], "answer": 3, "explain": "Chords, bass and melody are identical: the lift comes only from layers, register and rhythm density."}
    ]
  }
}
```

## Arrange to the curve

1. **Number your sections 1–5** from the drawing (intro 1, verse 2, chorus 4, last chorus 5…).
2. **Sustain layer first.** A pad or strings holding the chords, in the sections at 3 or higher. Check: mute/unmute in
   a chorus — it should feel wider, not louder only. If it muddies the piano, move it an octave up.
3. **High rhythm layer.** A pluck or electric piano playing the chord notes in eighths (like the example), above the
   melody, in the choruses only. Check: the melody must still be the clearest thing; if not, lower the layer's volume.
4. **Last chorus = fullest.** Everything on, plus one extra (a doubled melody an octave up, or the crash on every
   2 bars).
5. **Check the curve.** Play from the start with your drawing in front of you. At each marker ask: up, down or level?
   If two neighbours feel level, mute one layer in the lower one.

**Stuck?** Cut instead of adding: mute each track in turn — if nothing is lost, delete that part.

```exercise
{
  "id": "w51l3-cp5",
  "type": "daw-task",
  "title": "Checkpoint 5: layers to the energy curve",
  "spec": {
    "template": {
      "bpm": 100,
      "key": "C",
      "tracks": [
        {"instrument": "piano", "seq": ""},
        {"instrument": "bass", "seq": ""},
        {"instrument": "lead", "seq": ""},
        {"instrument": "drums", "seq": ""},
        {"instrument": "pad", "seq": ""},
        {"instrument": "pluck", "seq": ""}
      ]
    },
    "task": "In your final-song project: add at least two more layers (a pad or strings for sustain, a pluck or electric piano for rhythm and high register, or a counter-melody), following your energy curve. Use the empty pad and pluck tracks, or change their instrument, or add tracks. Every section differs from the one before by at least one layer or pattern; the last chorus is the fullest section.",
    "checks": [
      {"kind": "has-tracks", "instruments": ["piano", "bass", "lead", "drums"]},
      {"kind": "custom", "id": "w51-cp5-layers", "note": "Self-check: at least two layers beyond piano, bass, lead and drums have notes (pad or strings, pluck or electric piano, or a counter-melody)."},
      {"kind": "duration-seconds", "min": 180},
      {
        "kind": "custom",
        "id": "w51-cp5-curve",
        "note": "Self-check: at every section boundary the energy change matches my drawn curve."
      }
    ],
    "projectRef": "final-song"
  }
}
```

```exercise
{
  "id": "w51l3-curve",
  "type": "reflect",
  "title": "Your energy curve in words",
  "spec": {
    "prompt": "Describe your energy curve section by section (1–5 scale) and name the layer or pattern change that creates each step.",
    "minWords": 40
  }
}
```

## Ear: melody

Find the first note by searching (higher/lower), then follow the path — up or down, step or jump — in chunks, checking
each chunk against the replay. The *How to do it* box under the drill shows the exact method for your current rung.

```ladder
{"skill": "melody", "unlocks": 24, "intro": "Melody at your own rung."}
```

## Between lessons

Listen to the whole song once with your curve drawing in hand. Mark one place where it doesn't match — nothing more.
