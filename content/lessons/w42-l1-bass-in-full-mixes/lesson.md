---
id: w42-l1-bass-in-full-mixes
title: Hearing the Bass in a Full Mix
week: 42
order: 1
phase: p5
duration_min: 45
goals:
  - "Follow the bass through a mix in three steps: alone, with drums, in the full band"
  - Use three tricks — listen under the kick, beat 1 first, search and check on the keyboard
  - "Tell a bass line's landing notes from its passing and approach notes"
prerequisites: [w41-l3-mystery-song-one]
tags: [transcription, bass, ear, full-mix]
---

# Hearing the Bass in a Full Mix

Pass 3 rests on one skill: following the lowest line while everything else keeps playing. Until now most of your bass
dictation had the bass on its own or under a quiet pad. Real mixes are crowded. Today you climb there in three steps —
bass alone, bass with drums, full band — each on a different loop, so every answer is new.

## Three tricks

1. **Listen *under* the kick.** In most pop the bass starts its notes together with the kick drum. Follow the kick, and
   notice the pitch that sounds with it.
2. **Beat 1 first.** Only name the note where the chord changes, usually on beat 1. Everything else can wait.
3. **Search, then check on the keyboard.** Low notes feel more like rumble than pitch, and octaves may still feel
   slippery. Play a low key and ask: is the bass higher or lower? Move and repeat. If the bass is too blurry, try the
   same note 12 keys higher; it is easier to judge there. *Check:* play your key along with the loop on beat 1. The
   right note melts into the bass; a wrong one rubs, so move one key and try again.

All three loops are in F major (the cadence before each question tells you home), with one bass note per bar. Find
F on your keyboard first: every search starts from home. **Stuck?** Loop one bar only, compare two candidate keys back
to back, and pick the one that melts in.

```example
{
  "title": "Loop A — bass alone",
  "bpm": 90,
  "timeSig": "4/4",
  "tracks": [{"instrument": "bass", "seq": "F2:h. r:q | D2:h. r:q | Bb1:h. r:q | C2:h. r:q"}],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```exercise
{
  "id": "w42l1-a",
  "type": "ear-bass",
  "title": "Step 1: bass alone",
  "srs": false,
  "spec": {
    "key": "F",
    "chords": ["I", "ii", "IV", "V", "vi"],
    "answer": "play",
    "example": {
      "title": "Loop A",
      "bpm": 90,
      "timeSig": "4/4",
      "tracks": [{"instrument": "bass", "seq": "F2:h. r:q | D2:h. r:q | Bb1:h. r:q | C2:h. r:q"}]
    }
  }
}
```

```exercise
{
  "id": "w42l1-b",
  "type": "ear-bass",
  "title": "Step 2: bass with drums",
  "instructions": "A new loop. Listen under the kick on beat 1.",
  "srs": false,
  "spec": {
    "key": "F",
    "chords": ["I", "ii", "IV", "V", "vi"],
    "answer": "play",
    "example": {
      "title": "Loop B",
      "bpm": 96,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8"},
        {"instrument": "bass", "seq": "F2:q. r:8 r:h | C2:q. r:8 r:h | D2:q. r:8 r:h | Bb1:q. r:8 r:h"}
      ]
    },
    "track": 1
  }
}
```

```exercise
{
  "id": "w42l1-c",
  "type": "ear-bass",
  "title": "Step 3: the full band",
  "instructions": "Another new loop, now with keys and a melody on top. Ignore the tune; search for the lowest note on beat 1 and check it along with the loop.",
  "srs": false,
  "spec": {
    "key": "F",
    "chords": ["I", "ii", "IV", "V", "vi"],
    "answer": "play",
    "example": {
      "title": "Loop C",
      "bpm": 96,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 tom:8 tom:8 snare:8"},
        {"instrument": "bass", "seq": "F2:h. r:q | Bb1:h. r:q | D2:h. r:q | C2:h. r:q"},
        {"instrument": "epiano", "seq": "[F3 A3 C4]:q. [F3 A3 C4]:8 r:q [F3 A3 C4]:q | [F3 Bb3 D4]:q. [F3 Bb3 D4]:8 r:q [F3 Bb3 D4]:q | [F3 A3 D4]:q. [F3 A3 D4]:8 r:q [F3 A3 D4]:q | [E3 G3 C4]:q. [E3 G3 C4]:8 r:q [E3 G3 C4]:q"},
        {"instrument": "lead", "seq": "A4:8 C5:8 C5:q r:8 A4:8 G4:q | F4:q D5:q D5:h | F5:8 E5:8 D5:8 C5:8 A4:q D5:q | C5:h. r:q"}
      ]
    },
    "track": 1
  }
}
```

## Landing notes and passing notes

A real bass line doesn't only sit on roots. It walks, approaches and decorates. The note it arrives on at a chord change is
its [[landing note]]; the notes in between connect one landing to the next. For the harmony you need only the landings.

Mystery Song #2 has a busier bass. Loop it and answer before revealing:

1. Tap beat 1 of each bar and find only the note there (search, then check along with the loop).
2. Count up from F to each landing to get the numeral; play major and minor on it if unsure of the case.
3. Only then listen to what happens between landings: does a note step into the next landing from a half step away?

```exercise
{
  "id": "w42l1-landing",
  "type": "listen",
  "title": "Landing or passing?",
  "spec": {
    "example": {
      "title": "Mystery Song #2 — full mix",
      "bpm": 100,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 hihat:8 [snare hihat]:8 ohat:8"},
        {"instrument": "bass", "seq": "F2:q. F2:8 r:8 F2:8 G2:q | A2:q. A2:8 r:8 E2:8 A2:q | Bb2:q. Bb2:8 r:8 Bb2:8 B2:q | C3:q. C3:8 r:8 C3:8 E2:q"},
        {"instrument": "epiano", "seq": "[F3 A3 C4]:q. [F3 A3 C4]:8 r:q [F3 A3 C4]:q | [E3 A3 C4]:q. [E3 A3 C4]:8 r:q [E3 A3 C4]:q | [F3 Bb3 D4]:q. [F3 Bb3 D4]:8 r:q [F3 Bb3 D4]:q | [E3 G3 C4]:q. [E3 G3 C4]:8 r:q [E3 G3 C4]:q"},
        {"instrument": "lead", "seq": "C5:8 C5:8 A4:8 C5:8 r:8 D5:8 C5:q | E5:q E5:8 D5:8 C5:h | D5:8 D5:8 Bb4:8 D5:8 r:8 F5:8 E5:q | D5:q C5:q G4:h"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Beat 1 of bar 3: which note does the bass land on?", "choices": ["F", "A", "B♭", "C"], "answer": 2, "explain": "B♭. The landing is the note on beat 1, where the chord changes; the notes after it only lead on."},
      {"q": "Now find all four landing notes. Which numerals do they spell in F major?", "choices": ["I–vi–IV–V", "I–iii–IV–V", "I–V–vi–IV", "I–ii–V–I"], "answer": 1, "explain": "I–iii–IV–V: the landings are F – A – B♭ – C. Bar 2 lands on A, the root of iii (A minor)."},
      {"q": "The very last bass note of bar 3 is not in F major. What is it doing?", "choices": ["It's the root of a new chord", "It's a chromatic approach: a half step below the next landing", "It's a wrong note", "It's the tonic"], "answer": 1, "explain": "It's B natural, a half step below the C that lands on bar 4. A note outside the key right before a landing is almost always an approach, not a root."}
    ]
  }
}
```

Same skill in the drill: follow only the lowest sound, find home first, then search each bass note from the last one
and check it by playing along. The *How to do it* box under the drill shows the exact method for your current rung.

```ladder
{
  "skill": "roots",
  "unlocks": 15,
  "intro": "The last rungs of this ladder are this exact skill, the bass in a band; you practise at your own rung."
}
```

```exercise
{
  "id": "w42l1-daw",
  "type": "daw-task",
  "title": "Connect the landings",
  "spec": {
    "template": {
      "bpm": 100,
      "key": "F",
      "tracks": [
        {"instrument": "epiano", "seq": "[F3 A3 C4]:w | [F3 A3 D4]:w | [F3 Bb3 D4]:w | [E3 G3 C4]:w"},
        {"instrument": "bass", "seq": ""}
      ]
    },
    "task": "Write a 4-bar bass line for F – Dm – B♭ – C. Land on the root on beat 1 of every bar, and use at least two passing or approach notes to lead into the next landing.",
    "checks": [
      {
        "kind": "chord-tones-on-beats",
        "beats": [1],
        "progression": ["I", "vi", "IV", "V"],
        "barsPerChord": 1,
        "minRatio": 1,
        "track": 1
      },
      {"kind": "in-key", "key": "F", "scale": "major", "allowPassing": true, "track": 1},
      {"kind": "note-count", "min": 10, "max": 32, "track": 1},
      {"kind": "range", "low": "C2", "high": "C4", "track": 1},
      {"kind": "bars", "min": 4, "max": 4}
    ],
    "minBars": 4,
    "maxBars": 4
  }
}
```

```exercise
{
  "id": "w42l1-play",
  "type": "play-melody",
  "title": "Play the Mystery Song #2 bass",
  "instructions": "After revealing: play the whole bass line, leaning on the landing notes.",
  "spec": {
    "bpm": 80,
    "timeSig": "4/4",
    "key": "F",
    "seq": "F2:q. F2:8 r:8 F2:8 G2:q | A2:q. A2:8 r:8 E2:8 A2:q | Bb2:q. Bb2:8 r:8 Bb2:8 B2:q | C3:q. C3:8 r:8 C3:8 E2:q",
    "showStaff": true,
    "showKeyboard": true,
    "countIn": 1
  }
}
```

## Between lessons

Pick one song you know. Loop its chorus and find only the beat-1 bass notes on the keyboard. Write them down.
