---
id: w22-l2-lydian-and-phrygian
title: "Two More Changed Notes: Lydian and Phrygian"
week: 22
order: 2
phase: p3
duration_min: 45
goals:
  - Build Lydian (major with a raised 4th) and Phrygian (natural minor with a flat 2nd)
  - Play their typical chord pairs, I – II in Lydian and i – bII in Phrygian
  - Hear each against its plain major or minor twin on the same root
prerequisites: [w22-l1-dorian-and-mixolydian]
tags: [modes, lydian, phrygian, scales, ear]
songs:
  - { title: "Dreams", composer: "Stevie Nicks (Fleetwood Mac, 1977)", public_domain: false }
---

# Two More Changed Notes: Lydian and Phrygian

Same method as last lesson: plain major or minor, one note moved, compared on the same root.

| Mode | Recipe | Example | Chord it creates |
|---|---|---|---|
| **[[Lydian]]** | major, **raise the 4th** | F G A **B** C D E | II becomes major (G–B–D in F) |
| **[[Phrygian]]** | natural minor, **lower the 2nd** | E **F** G A B C D | ♭II, a major chord a half step above home (F over E) |

## Lydian: the raised 4

In F major the 4th is B♭. Raise it to B and you have F Lydian. Compare:

```example
{
  "title": "F major, then F Lydian (only the 4th differs)",
  "bpm": 80, "timeSig": "4/4", "key": "F",
  "tracks": [ { "instrument": "piano", "seq": "F4:q G4:q A4:q Bb4:q | C5:q D5:q E5:q F5:q | r:w | F4:q G4:q A4:q B4:q | C5:q D5:q E5:q F5:q" } ],
  "show": ["staff", "keyboard"]
}
```

You have not drilled ♯4 as a single degree yet (that comes in week 24), so let's slow it right down: the home chord held, first with the ordinary 4 on top, then with the raised 4. The ordinary 4 wants to drop to 3; the raised 4 is a step further from 3 and simply hangs there.

```exercise
{
  "id": "listen-4-vs-sharp-4",
  "type": "listen",
  "title": "4 or raised 4 over the home chord",
  "spec": { "examples": [
    { "title": "A: F chord with Bb (the ordinary 4), falling to A", "bpm": 60, "timeSig": "4/4", "key": "F", "tracks": [ { "instrument": "pad", "seq": "[F3 A3 C4]:w | [F3 A3 C4]:w" }, { "instrument": "lead", "seq": "Bb4:w | A4:w" } ] },
    { "title": "B: F chord with B (the raised 4), just hanging", "bpm": 60, "timeSig": "4/4", "key": "F", "tracks": [ { "instrument": "pad", "seq": "[F3 A3 C4]:w | [F3 A3 C4]:w" }, { "instrument": "lead", "seq": "B4:w | B4:w" } ] }
  ] }
}
```

```exercise
{
  "id": "play-f-lydian",
  "type": "play-scale",
  "title": "Play F Lydian",
  "instructions": "Every note is a white key: F to F.",
  "spec": { "root": "F", "scale": "lydian", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 66, "metronome": true }
}
```

## Phrygian: the flat 2

In E natural minor the 2nd is F♯. Lower it to F and you have E Phrygian. The new note sits just a half step above home, so riffs grind between 1 and ♭2:

```example
{
  "title": "E natural minor, then E Phrygian (only the 2nd differs)",
  "bpm": 80, "timeSig": "4/4", "key": "Em",
  "tracks": [ { "instrument": "piano", "seq": "E4:q F#4:q G4:q A4:q | B4:q C5:q D5:q E5:q | r:w | E4:q F4:q G4:q A4:q | B4:q C5:q D5:q E5:q" } ],
  "show": ["staff", "keyboard"]
}
```

```example
{
  "title": "E Phrygian riff (original): Em - F - Em",
  "bpm": 100, "timeSig": "4/4", "key": "Em",
  "tracks": [
    { "instrument": "pluck", "seq": "E3:8 E3:8 F3:8 E3:8 r:8 E3:8 G3:8 F3:8 | E3:8 E3:8 F3:8 E3:8 r:8 E3:8 G3:8 F3:8 | F3:8 F3:8 G3:8 F3:8 r:8 E3:8 F3:8 E3:8 | E3:8 E3:8 F3:8 E3:8 r:8 E3:8 G3:8 F3:8" },
    { "instrument": "pad", "seq": "[E3 G3 B3]:w | [E3 G3 B3]:w | [F3 A3 C4]:w | [E3 G3 B3]:w" },
    { "instrument": "bass", "seq": "E2:w | E2:w | F2:w | E2:w" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

```exercise
{
  "id": "play-phrygian-riff",
  "type": "play-melody",
  "title": "Play the Phrygian riff",
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "Em", "seq": "E3:8 E3:8 F3:8 E3:8 r:8 E3:8 G3:8 F3:8 | E3:8 E3:8 F3:8 E3:8 r:8 E3:8 G3:8 F3:8", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "bass", "seq": "E2:w | E2:w" } }
}
```

```exercise
{
  "id": "lyd-phryg-recipes-v2",
  "type": "quiz-input",
  "title": "Recipes",
  "spec": { "questions": [
    { "q": "Which note of C Lydian differs from C major?", "answer": ["F#", "Gb"], "kind": "note" },
    { "q": "Which note of A Phrygian differs from A natural minor?", "answer": ["Bb", "A#"], "kind": "note" },
    { "q": "In C Lydian the II chord is major. Which root?", "answer": ["D"], "kind": "note" },
    { "q": "In A Phrygian, the bII chord has which root?", "answer": ["Bb", "A#"], "kind": "note" },
    { "q": "How many half steps between the Phrygian home note and its flat 2?", "answer": ["1"], "kind": "number" }
  ] }
}
```

```exercise
{
  "id": "build-phrygian",
  "type": "build-scale",
  "title": "Build Phrygian scales",
  "count": 6,
  "spec": { "roots": ["E", "A", "B", "D", "F#", "C"], "scale": "phrygian", "prompt": "name" }
}
```

Each mode's colour lives in one chord pair. Rock between them and listen to the moved note: in Lydian the II chord holds the raised 4 (B in F); in Phrygian the ♭II chord holds the ♭2 (F over E).

```exercise
{
  "id": "play-modal-pairs",
  "type": "play-chord",
  "title": "I – II in F Lydian, then i – ♭II in E Phrygian",
  "instructions": "F, G, F, G (Lydian), then Em, F, Em, F (Phrygian). Any inversion; keep your hand in one place and move as few fingers as you can.",
  "count": 8, "passScore": 0.7,
  "spec": { "chords": ["F", "G", "F", "G", "Em", "F", "Em", "F"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

This lesson opens two scale-colour rungs, each a pair on one root: major or Lydian (the 4th), then minor or Phrygian (the 2nd). The drill runs at your current scales rung, which may still be an earlier one.

```ladder
{ "skill": "scales", "unlocks": 8, "intro": "Opens: major or Lydian (the 4th); then minor or Phrygian (the 2nd). The drill runs at your current scales rung." }
```

## Your verdict first

```exercise
{
  "id": "dreams-verdict",
  "type": "quiz",
  "title": "Dreams (Fleetwood Mac)",
  "instructions": "Play the first 30 seconds, answer, then read the explanation.",
  "spec": { "questions": [
    { "q": "The song rocks between two chords; the first feels like home. Is the second chord major or minor?", "choices": ["Major", "Minor"], "answer": 0, "explain": "F – G. In plain F major the chord on G would be minor (ii); here it is major (II), because its B natural is the raised 4 of F. That is why the song is usually heard as F Lydian." }
  ] }
}
```
