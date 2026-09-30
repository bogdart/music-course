---
id: w46-l1-ballad-form-and-chords
title: "Transcribe 1: Ballad — Key, Form and Chords"
week: 46
order: 1
phase: p5
duration_min: 45
goals:
  - Run passes 1–4 on a hidden piano ballad
  - Identify the verse bass line and any inversion, and write the verse as numerals
  - Name the chorus chords as numerals, deciding triad or seventh for each
prerequisites: [w45-l3-recreate-a-mix-daw]
tags: [transcription, ballad, harmony, form]
---

# Transcribe 1: Ballad — Key, Form and Chords

For the next four weeks you decompose one song per week, each in a different style: two lessons on a hidden original,
then a real record analysed verdict first. First up: the **pop ballad**.

## What to expect from a ballad

Knowing a style's habits turns open questions into multiple choice:

- **Tempo** is slow, typically 60–80 BPM (watch for [[half-time]] feel).
- **Piano or guitar arpeggios** carry the harmony. The lowest note of each arpeggio is the bass, even with no bass
  guitar.
- **The arrangement grows**: a sparse verse, then drums and strings enter at the chorus.
- **Harmony** leans on I, IV, V and vi. The bass may sit on a chord's root or on another chord tone (inversions and
  slash chords, week 42), and any chord may carry a soft seventh (week 43) — decide each case by ear.

## Mystery ballad: "Paper Lanterns"

An original in the style. Form: Verse – Verse – Chorus – Chorus, each a 4-bar pattern. Both loops are hidden.

```example
{
  "title": "Paper Lanterns — verse",
  "bpm": 68,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "bass", "seq": "Eb2:w | D2:w | C2:w | Ab1:w"},
    {"instrument": "piano", "seq": "Eb3:8 Bb3:8 Eb4:8 G4:8 Bb4:8 G4:8 Eb4:8 Bb3:8 | D3:8 Bb3:8 D4:8 F4:8 Bb4:8 F4:8 D4:8 Bb3:8 | C3:8 G3:8 C4:8 Eb4:8 G4:8 Eb4:8 C4:8 G3:8 | Ab2:8 Eb3:8 Ab3:8 C4:8 Eb4:8 C4:8 Ab3:8 Eb3:8"},
    {"instrument": "lead", "seq": "G4:q G4:8 F4:8 Eb4:q Bb3:q | D4:q. Eb4:8 F4:h | G4:q G4:8 Ab4:8 G4:q Eb4:q | C4:h. r:q"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```example
{
  "title": "Paper Lanterns — chorus",
  "bpm": 68,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 snare:16 snare:16 snare:16 snare:16"},
    {"instrument": "bass", "seq": "Ab1:h. Ab1:q | Bb1:h. Bb1:q | G1:h. G1:q | Eb2:h. Eb2:q"},
    {"instrument": "piano", "seq": "Ab2:8 Eb3:8 G3:8 C4:8 Eb4:8 C4:8 G3:8 Eb3:8 | Bb2:8 F3:8 Bb3:8 D4:8 F4:8 D4:8 Bb3:8 F3:8 | G2:8 D3:8 F3:8 Bb3:8 D4:8 Bb3:8 F3:8 D3:8 | Eb3:8 Bb3:8 D4:8 G4:8 Bb4:8 G4:8 D4:8 Bb3:8"},
    {"instrument": "strings", "seq": "[Eb4 G4 C5]:w | [D4 F4 Bb4]:w | [D4 F4 Bb4]:w | [D4 G4 Bb4]:w"},
    {"instrument": "lead", "seq": "r:8 Eb5:8 Eb5:8 D5:8 C5:q Bb4:q | D5:q. C5:8 Bb4:h | r:8 Bb4:8 Bb4:8 C5:8 D5:q F5:q | Eb5:h. r:q"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

## Passes 1–3 on the verse

Hum home first — and remember that the first chord proves nothing: listen for where the tune and the harmony come to
rest at the end of a phrase (loop both sections above). Then follow the *lowest* note of the piano — it moves once per
bar. For each bass note, ask afterwards: is it the root of the chord above, or another chord tone under it?

```exercise
{
  "id": "w46l1-verse",
  "type": "listen",
  "title": "Where is home?",
  "spec": {
    "example": {
      "title": "Paper Lanterns — verse",
      "bpm": 68,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "bass", "seq": "Eb2:w | D2:w | C2:w | Ab1:w"},
        {"instrument": "piano", "seq": "Eb3:8 Bb3:8 Eb4:8 G4:8 Bb4:8 G4:8 Eb4:8 Bb3:8 | D3:8 Bb3:8 D4:8 F4:8 Bb4:8 F4:8 D4:8 Bb3:8 | C3:8 G3:8 C4:8 Eb4:8 G4:8 Eb4:8 C4:8 G3:8 | Ab2:8 Eb3:8 Ab3:8 C4:8 Eb4:8 C4:8 Ab3:8 Eb3:8"},
        {"instrument": "lead", "seq": "G4:q G4:8 F4:8 Eb4:q Bb3:q | D4:q. Eb4:8 F4:h | G4:q G4:8 Ab4:8 G4:q Eb4:q | C4:h. r:q"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Key? Loop the verse and the chorus: where does the song come to rest at the end of a phrase?", "choices": ["B♭ major", "E♭ major", "C minor", "A♭ major"], "answer": 1, "explain": "E♭ major: the chorus ends on a long E♭, and that is where the whole song sounds finished. The verse ends open, leading on; no phrase comes to rest on B♭, C or A♭."}
    ]
  }
}
```

```exercise
{
  "id": "w46l1-bass",
  "type": "ear-bass",
  "title": "Pass 3: the verse bass",
  "srs": false,
  "instructions": "Four bass notes, one per bar. Play the lowest note you hear.",
  "spec": {
    "key": "Eb",
    "chords": ["I", "ii", "iii", "IV", "V", "vi"],
    "answer": "play",
    "example": {
      "title": "Verse",
      "bpm": 68,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "bass", "seq": "Eb2:w | D2:w | C2:w | Ab1:w"},
        {"instrument": "piano", "seq": "Eb3:8 Bb3:8 Eb4:8 G4:8 Bb4:8 G4:8 Eb4:8 Bb3:8 | D3:8 Bb3:8 D4:8 F4:8 Bb4:8 F4:8 D4:8 Bb3:8 | C3:8 G3:8 C4:8 Eb4:8 G4:8 Eb4:8 C4:8 G3:8 | Ab2:8 Eb3:8 Ab3:8 C4:8 Eb4:8 C4:8 Ab3:8 Eb3:8"},
        {"instrument": "lead", "seq": "G4:q G4:8 F4:8 Eb4:q Bb3:q | D4:q. Eb4:8 F4:h | G4:q G4:8 Ab4:8 G4:q Eb4:q | C4:h. r:q"}
      ]
    },
    "track": 0
  }
}
```

```exercise
{
  "id": "w46l1-verse-chords",
  "type": "listen",
  "title": "Verse: bass and chords",
  "spec": {
    "example": {
      "title": "Paper Lanterns — verse",
      "bpm": 68,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "bass", "seq": "Eb2:w | D2:w | C2:w | Ab1:w"},
        {"instrument": "piano", "seq": "Eb3:8 Bb3:8 Eb4:8 G4:8 Bb4:8 G4:8 Eb4:8 Bb3:8 | D3:8 Bb3:8 D4:8 F4:8 Bb4:8 F4:8 D4:8 Bb3:8 | C3:8 G3:8 C4:8 Eb4:8 G4:8 Eb4:8 C4:8 G3:8 | Ab2:8 Eb3:8 Ab3:8 C4:8 Eb4:8 C4:8 Ab3:8 Eb3:8"},
        {"instrument": "lead", "seq": "G4:q G4:8 F4:8 Eb4:q Bb3:q | D4:q. Eb4:8 F4:h | G4:q G4:8 Ab4:8 G4:q Eb4:q | C4:h. r:q"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "How does the bass move through the verse?", "choices": ["It jumps between roots", "It steps down for three bars, then drops", "It stays on one note", "It climbs"], "answer": 1, "explain": "E♭ – D – C, then down to A♭: a stepwise descent."},
      {"q": "Bar 2: which chord sounds above that bass note?", "choices": ["Dm", "B♭/D", "D7", "Gm/D", "D"], "answer": 1, "explain": "B♭/D — B♭ major with its 3rd in the bass."},
      {"q": "The verse in numerals?", "choices": ["I – V6 – vi – IV", "I – iii – vi – IV", "I – V – IV – I", "vi – V – IV – I"], "answer": 0, "explain": "I – V6 – vi – IV: B♭/D is V in first inversion (V6, week 42), the step that lets the bass walk down E♭ – D – C."}
    ]
  }
}
```

## Pass 4 on the chorus

The chorus arrives with drums and strings. Find the four bass notes, predict the numerals from the key, then decide the
colour of each chord: plain triad or seventh? The palette offers both for every chord.

```exercise
{
  "id": "w46l1-chorus",
  "type": "ear-progression",
  "title": "Pass 4: the chorus",
  "srs": false,
  "spec": {
    "key": "Eb",
    "mode": "major",
    "chords": ["I", "Imaj7", "ii", "ii7", "iii", "iii7", "IV", "IVmaj7", "V", "V7", "vi", "vi7"],
    "example": {
      "title": "Chorus",
      "bpm": 68,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 snare:16 snare:16 snare:16 snare:16"},
        {"instrument": "bass", "seq": "Ab1:h. Ab1:q | Bb1:h. Bb1:q | G1:h. G1:q | Eb2:h. Eb2:q"},
        {"instrument": "piano", "seq": "Ab2:8 Eb3:8 G3:8 C4:8 Eb4:8 C4:8 G3:8 Eb3:8 | Bb2:8 F3:8 Bb3:8 D4:8 F4:8 D4:8 Bb3:8 F3:8 | G2:8 D3:8 F3:8 Bb3:8 D4:8 Bb3:8 F3:8 D3:8 | Eb3:8 Bb3:8 D4:8 G4:8 Bb4:8 G4:8 D4:8 Bb3:8"},
        {"instrument": "strings", "seq": "[Eb4 G4 C5]:w | [D4 F4 Bb4]:w | [D4 F4 Bb4]:w | [D4 G4 Bb4]:w"},
        {"instrument": "lead", "seq": "r:8 Eb5:8 Eb5:8 D5:8 C5:q Bb4:q | D5:q. C5:8 Bb4:h | r:8 Bb4:8 Bb4:8 C5:8 D5:q F5:q | Eb5:h. r:q"}
      ]
    },
    "progression": ["IVmaj7", "V", "iii7", "Imaj7"]
  }
}
```

```ladder
{"skill": "roots", "unlocks": 15, "intro": "Bass hearing at your own rung."}
```

```exercise
{
  "id": "w46l1-play",
  "type": "play-chord",
  "title": "Play verse and chorus",
  "instructions": "After revealing: play the eight chords, with D as the lowest note of B♭/D.",
  "spec": {
    "chords": ["Eb", "Bb/D", "Cm", "Ab", "Abmaj7", "Bb", "Gm7", "Ebmaj7"],
    "inversion": "any",
    "sequence": true,
    "bpm": 60
  }
}
```

```exercise
{
  "id": "w46l1-map",
  "type": "reflect",
  "title": "Ballad form map, part 1",
  "spec": {
    "prompt": "Start the form map for Paper Lanterns: key, sections with bars, the bass notes, chord symbols and numerals of verse and chorus, and one line on how the arrangement changes at the chorus.",
    "minWords": 40
  }
}
```
