---
id: w45-l2-identifying-layers-and-sections
title: Identifying Layers and Sections
week: 45
order: 2
phase: p5
duration_min: 45
goals:
  - "Build a layer map: which instrument plays which role in each section"
  - "Hear how sections announce themselves: layers, fills, crashes, register"
  - Name the numerals of a minor-key loop in a full mix
prerequisites: [w45-l1-drum-pattern-dictation]
tags: [transcription, arrangement, form, layers, ear]
---

# Identifying Layers and Sections

Pass 7 is layers: *who plays what, when?* It is also a check on pass 2, because arrangers mark section boundaries by
changing the layers. Hear the layers and the form becomes obvious.

## The layer map

A [[layer map]] is a grid: sections across, instruments down, a mark wherever an instrument plays. For each layer note:

- **Register** — low (bass, kick), mid (chords, pads), high (lead, hats, bright arpeggios).
- **Role** — *sustained* (pads, strings, long bass notes) or *rhythmic* (arpeggios, eighth-note bass, comping).

Listen register by register: lows, then mids, then highs — one question per pass again.

## How sections announce themselves

- **Layers enter or drop out.** The chorus is usually the fullest section.
- **Fills and crashes.** A snare roll in the last bar; a crash on the next downbeat.
- **Rhythm density.** Long bass notes become eighths; hats-only becomes a full kit.
- **Register lift.** The chorus melody often sits higher.

Here are three sections of Mystery Song #4, all hidden. Loop each one before answering.

```example
{
  "title": "Mystery Song #4 — section 1",
  "bpm": 104,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 hihat:8 hihat:8 [kick hihat]:8 hihat:8 hihat:8 hihat:8 | [kick hihat]:8 hihat:8 hihat:8 hihat:8 [kick hihat]:8 hihat:8 hihat:8 hihat:8 | [kick hihat]:8 hihat:8 hihat:8 hihat:8 [kick hihat]:8 hihat:8 hihat:8 hihat:8 | [kick hihat]:8 hihat:8 hihat:8 hihat:8 [kick hihat]:8 hihat:8 hihat:8 hihat:8"},
    {"instrument": "bass", "seq": "A1:w | F1:w | C2:w | G1:w"},
    {"instrument": "pluck", "seq": "A3:8 C4:8 E4:8 A4:8 E4:8 C4:8 A3:8 C4:8 | F3:8 A3:8 C4:8 F4:8 C4:8 A3:8 F3:8 A3:8 | C4:8 E4:8 G4:8 C5:8 G4:8 E4:8 C4:8 E4:8 | G3:8 B3:8 D4:8 G4:8 D4:8 B3:8 G3:8 B3:8"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```example
{
  "title": "Mystery Song #4 — section 2",
  "bpm": 104,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 | snare:8 snare:8 snare:8 snare:8 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16 snare:16"},
    {"instrument": "bass", "seq": "F1:q. F1:8 F1:h | G1:q. G1:8 G1:h"},
    {"instrument": "pad", "seq": "[F3 A3 C4]:w | [G3 B3 D4]:w"},
    {"instrument": "pluck", "seq": "F3:8 A3:8 C4:8 F4:8 C4:8 A3:8 F3:8 A3:8 | G3:8 B3:8 D4:8 G4:8 D4:8 B3:8 G3:8 B3:8"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": false
}
```

```example
{
  "title": "Mystery Song #4 — section 3",
  "bpm": 104,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8"},
    {"instrument": "bass", "seq": "A1:8 A1:8 A2:8 A1:8 A1:8 A1:8 A2:8 A1:8 | F1:8 F1:8 F2:8 F1:8 F1:8 F1:8 F2:8 F1:8 | C2:8 C2:8 C3:8 C2:8 C2:8 C2:8 C3:8 C2:8 | G1:8 G1:8 G2:8 G1:8 G1:8 G1:8 G2:8 G1:8"},
    {"instrument": "strings", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w"},
    {"instrument": "pluck", "seq": "A3:8 C4:8 E4:8 A4:8 E4:8 C4:8 A3:8 C4:8 | F3:8 A3:8 C4:8 F4:8 C4:8 A3:8 F3:8 A3:8 | C4:8 E4:8 G4:8 C5:8 G4:8 E4:8 C4:8 E4:8 | G3:8 B3:8 D4:8 G4:8 D4:8 B3:8 G3:8 B3:8"},
    {"instrument": "lead", "seq": "A4:q. C5:8 D5:q E5:q | F5:q. E5:8 A4:h | G4:q. C5:8 D5:q E5:q | D5:q. B4:8 C5:q B4:q"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```exercise
{
  "id": "w45l2-chorus",
  "type": "listen",
  "title": "Layers in section 3",
  "spec": {
    "example": {
      "title": "Section 3",
      "bpm": 104,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8"},
        {"instrument": "bass", "seq": "A1:8 A1:8 A2:8 A1:8 A1:8 A1:8 A2:8 A1:8 | F1:8 F1:8 F2:8 F1:8 F1:8 F1:8 F2:8 F1:8 | C2:8 C2:8 C3:8 C2:8 C2:8 C2:8 C3:8 C2:8 | G1:8 G1:8 G2:8 G1:8 G1:8 G1:8 G2:8 G1:8"},
        {"instrument": "strings", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w"},
        {"instrument": "pluck", "seq": "A3:8 C4:8 E4:8 A4:8 E4:8 C4:8 A3:8 C4:8 | F3:8 A3:8 C4:8 F4:8 C4:8 A3:8 F3:8 A3:8 | C4:8 E4:8 G4:8 C5:8 G4:8 E4:8 C4:8 E4:8 | G3:8 B3:8 D4:8 G4:8 D4:8 B3:8 G3:8 B3:8"},
        {"instrument": "lead", "seq": "A4:q. C5:8 D5:q E5:q | F5:q. E5:8 A4:h | G4:q. C5:8 D5:q E5:q | D5:q. B4:8 C5:q B4:q"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "How many distinct layers (drums count as one)?", "choices": ["3", "4", "5", "6"], "answer": 2, "explain": "Five: drums, bass, strings, pluck arpeggio and the lead."},
      {"q": "Which layer is sustained in the mid register?", "choices": ["The arpeggio", "Strings", "Lead", "Bass"], "answer": 1},
      {"q": "Compared with section 1, what does the bass do now?", "choices": ["The same long notes", "Driving eighths", "It stops", "It plays the melody"], "answer": 1, "explain": "Section 1 had one long note per bar; section 3 drives in eighths, jumping octaves."}
    ]
  }
}
```

```exercise
{
  "id": "w45l2-form",
  "type": "quiz",
  "title": "Name the sections",
  "spec": {
    "questions": [
      {"q": "Which section is the verse?", "choices": ["Section 1", "Section 2", "Section 3"], "answer": 0, "explain": "Section 1: kick and hats only, long bass notes and an arpeggio — sparse and low-energy."},
      {"q": "What is section 2?", "choices": ["A pre-chorus / build", "The chorus", "An intro", "A key change"], "answer": 0, "explain": "A two-bar build: it holds just two of the loop's chords (F, G) with a pushed bass rhythm, a pad enters, and a snare roll speeds up into the next section."},
      {"q": "Which clue marks the start of section 3?", "choices": ["A crash on beat 1 and a melody entering", "A tempo change", "Silence", "A new key"], "answer": 0},
      {"q": "Sections 1 and 3 share the same chords. What makes section 3 feel bigger?", "choices": ["More layers, denser rhythm, a high melody", "A faster tempo", "Different chords", "A different key"], "answer": 0}
    ]
  }
}
```

## Pass 4 on the chorus

Pass 1 first: which key? Four chords that loop can often be read in two keys — the same loop could be a minor key
starting on its home chord, or its relative major starting on vi. The chord that comes first proves nothing. The
**melody** decides: listen for the note its phrases come to rest on, and the chord where the loop feels like arriving
home.

```exercise
{
  "id": "w45l2-key",
  "type": "quiz",
  "title": "Section 3: where is home?",
  "spec": {
    "questions": [
      {"q": "Loop section 3 and follow the melody. Which note does it keep coming to rest on (long notes, and the note the loop falls back to)?", "choices": ["A", "C", "G", "E"], "answer": 0, "explain": "A: the tune starts on A, rests on a long A at the end of bar 2, and bar 4 leans on B and C so the loop falls back to A over the A minor chord. Home is A — the key is A minor, and the loop is i–VI–III–VII. The same four chords under a tune that rests on C would be C major, vi–IV–I–V."}
    ]
  }
}
```

In minor keys the chord on degree 7 (G in A minor) is part of the natural minor scale, so this course
writes it **VII** without a flat, like **VI** and **III**. In a *major* key the same kind of chord — major, a whole step
below home — is borrowed and written **♭VII** (week 16): the flat is measured from the major scale. Some chord books write
♭VII in minor keys too; it is the same chord, and the app accepts either.

```exercise
{
  "id": "w45l2-prog",
  "type": "ear-progression",
  "title": "Section 3: four numerals in A minor",
  "srs": false,
  "spec": {
    "key": "Am",
    "chords": ["i", "iv", "v", "III", "VI", "VII"],
    "example": {
      "title": "Section 3",
      "bpm": 104,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8"},
        {"instrument": "bass", "seq": "A1:8 A1:8 A2:8 A1:8 A1:8 A1:8 A2:8 A1:8 | F1:8 F1:8 F2:8 F1:8 F1:8 F1:8 F2:8 F1:8 | C2:8 C2:8 C3:8 C2:8 C2:8 C2:8 C3:8 C2:8 | G1:8 G1:8 G2:8 G1:8 G1:8 G1:8 G2:8 G1:8"},
        {"instrument": "strings", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w"},
        {"instrument": "pluck", "seq": "A3:8 C4:8 E4:8 A4:8 E4:8 C4:8 A3:8 C4:8 | F3:8 A3:8 C4:8 F4:8 C4:8 A3:8 F3:8 A3:8 | C4:8 E4:8 G4:8 C5:8 G4:8 E4:8 C4:8 E4:8 | G3:8 B3:8 D4:8 G4:8 D4:8 B3:8 G3:8 B3:8"},
        {"instrument": "lead", "seq": "A4:q. C5:8 D5:q E5:q | F5:q. E5:8 A4:h | G4:q. C5:8 D5:q E5:q | D5:q. B4:8 C5:q B4:q"}
      ]
    },
    "progression": ["i", "VI", "III", "VII"]
  }
}
```

```ladder
{
  "skill": "progressions",
  "unlocks": 20,
  "intro": "Minor-key progressions are rungs 9, 12 and 13 of this ladder; you practise at your own rung."
}
```

```exercise
{
  "id": "w45l2-hook",
  "type": "play-melody",
  "title": "Play the section 3 melody",
  "instructions": "After revealing section 3: play its melody over the strings.",
  "spec": {
    "bpm": 90,
    "timeSig": "4/4",
    "key": "Am",
    "seq": "A4:q. C5:8 D5:q E5:q | F5:q. E5:8 A4:h | G4:q. C5:8 D5:q E5:q | D5:q. B4:8 C5:q B4:q",
    "showStaff": true,
    "showKeyboard": true,
    "countIn": 1,
    "backing": {"instrument": "strings", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w"}
  }
}
```

```exercise
{
  "id": "w45l2-map",
  "type": "reflect",
  "title": "Write the layer map",
  "spec": {
    "prompt": "Write a layer map for Mystery Song #4: for each section (verse, build, chorus) list every instrument, its register, and whether it is sustained or rhythmic. Then note two clues that told you a new section had started.",
    "minWords": 40
  }
}
```
