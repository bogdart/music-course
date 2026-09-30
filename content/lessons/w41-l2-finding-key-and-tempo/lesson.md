---
id: w41-l2-finding-key-and-tempo
title: Pass 1 — Finding Key and Tempo
week: 41
order: 2
phase: p5
duration_min: 40
goals:
  - Find home with the hum test and the phrase-end test, then prove it by playing the scale along
  - Decide major or minor from the home chord
  - Measure tempo by tapping, and recognise a half-time feel
prerequisites: [w41-l1-the-transcription-workflow]
tags: [transcription, key, tempo, meter, ear]
---

# Pass 1 — Finding Key and Tempo

Pass 1 asks two questions: *where is home?* and *how fast is the beat?* Get them right and every later pass becomes a
multiple choice instead of an open question.

## Finding home

The [[tonal centre]] is the note the music wants to rest on. Two tests, in this order:

1. **Hum test.** Loop the song, stop it mid-phrase and hum the note that would feel most finished. Check your hum on the
   keyboard. It is often, not always, degree 1 — the other tests confirm it.
2. **Phrase-end test.** Listen to the bass on the *last* chord of a phrase or section. Songs land on home at the ends of
   sections much more often than at the start (you saw that trap last lesson).

Then **decide major or minor**: play the home chord both ways (C–E–G and C–E♭–G) along with the loop. The one that
blends is right. Finally play the whole scale along; a wrong candidate clashes within a bar or two. That is your proof.

## Finding the tempo

Tap steady beats along with the kick-and-snare for eight beats and let a tap-tempo tool turn them into BPM — this is
[[tap tempo]]. The drill below has exactly such a tool; for a record outside the app, count beats for 15 seconds and
multiply by four.

The classic trap is the [[half-time]] feel: the snare hits only on beat 3, so the groove *feels* half as fast while the
hats and bass keep the real pace. Hear the same loop both ways:

```example
{
  "title": "Normal feel — snare on 2 and 4, 88 BPM",
  "bpm": 88,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8"},
    {"instrument": "bass", "seq": "C2:q. C2:8 r:8 C2:8 C2:q | A1:q. A1:8 r:8 A1:8 A1:q | F1:q. F1:8 r:8 F1:8 F1:q | G1:q. G1:8 r:8 G1:8 G1:q"}
  ],
  "show": [],
  "loop": true
}
```

```example
{
  "title": "Same tempo — half-time drums, snare on 3",
  "bpm": 88,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 hihat:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 | [kick hihat]:8 hihat:8 hihat:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 | [kick hihat]:8 hihat:8 hihat:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8 | [kick hihat]:8 hihat:8 hihat:8 hihat:8 [snare hihat]:8 hihat:8 hihat:8 [kick hihat]:8"},
    {"instrument": "bass", "seq": "C2:q. C2:8 r:8 C2:8 C2:q | A1:q. A1:8 r:8 A1:8 A1:q | F1:q. F1:8 r:8 F1:8 F1:q | G1:q. G1:8 r:8 G1:8 G1:q"}
  ],
  "show": [],
  "loop": true
}
```

The tempo is identical; only the snare moved. If you tap 44 on the second one, you are tapping the half-time feel —
producers usually write the faster count (88).

```exercise
{
  "id": "w41l2-tempo",
  "type": "ear-tempo",
  "title": "Tap the tempo",
  "instructions": "Tap along on the pulse (kick and snare), read the BPM from the tap tool, and answer. Within 4 BPM counts as right.",
  "count": 8,
  "spec": {"range": [70, 150], "tolerance": 4, "style": "groove", "bars": 2}
}
```

```exercise
{
  "id": "w41l2-meter",
  "type": "ear-meter",
  "title": "Count in 3 or 4?",
  "instructions": "The other half of 'how fast is the beat': how many beats in a bar? Count along from each loud downbeat.",
  "count": 8,
  "spec": {"meters": ["3/4", "4/4", "6/8"], "bpm": 96, "bars": 4, "style": "mixed"}
}
```

## Pass 1 on a hidden loop

Now use both tests on a loop you haven't seen. Answer, then reveal.

```exercise
{
  "id": "w41l2-listen",
  "type": "listen",
  "title": "Pass 1 on the mystery groove",
  "spec": {
    "example": {
      "title": "Mystery groove",
      "bpm": 84,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8"},
        {"instrument": "bass", "seq": "E2:q. E2:8 r:8 E2:8 E2:q | C2:q. C2:8 r:8 C2:8 C2:q | D2:q. D2:8 r:8 D2:8 D2:q | E2:q. E2:8 r:8 E2:8 E2:q"},
        {"instrument": "pad", "seq": "[E3 G3 B3]:w | [E3 G3 C4]:w | [D3 F#3 A3]:w | [E3 G3 B3]:w"},
        {"instrument": "pluck", "seq": "B4:8 G4:8 E4:8 G4:8 B4:q A4:q | G4:8 E4:8 C4:8 E4:8 G4:h | A4:8 F#4:8 D4:8 F#4:8 A4:q G4:8 F#4:8 | E4:h. r:q"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Hum test and phrase-end test: which note is home?", "choices": ["G", "E", "D", "C"], "answer": 1, "explain": "E. The phrase-end test decides it: the tune's long phrase ends on E in bar 4, over an E chord with E in the bass, and the bar before (a D chord) leans into it. That the loop also begins on E proves nothing by itself — last lesson's loop began away from home."},
      {"q": "Play E–G–B and E–G#–B along with the loop. Which blends?", "choices": ["E–G#–B: major", "E–G–B: minor"], "answer": 1, "explain": "E–G–B: the home chord is minor, so the key is E minor (chords Em – C – D – Em: i – VI – VII – i)."},
      {"q": "Does the snare hit on 2 and 4, or only on 3?", "choices": ["2 and 4 — normal feel", "Only 3 — half-time"], "answer": 0}
    ]
  }
}
```

```exercise
{
  "id": "w41l2-scale",
  "type": "play-scale",
  "title": "Prove the key",
  "instructions": "Play E natural minor up and down with the metronome. Then loop the mystery groove and play the scale along: nothing should clash.",
  "spec": {
    "root": "E",
    "scale": "natural-minor",
    "octaves": 1,
    "direction": "asc-desc",
    "hands": "right",
    "tempo": 84,
    "metronome": true
  }
}
```

```exercise
{
  "id": "w41l2-bpm",
  "type": "quiz-input",
  "title": "Tempo arithmetic",
  "spec": {
    "questions": [
      {"q": "You count 24 beats in 15 seconds. What is the BPM?", "answer": ["96"], "kind": "number"},
      {
        "q": "You tapped 58 BPM, but the hats and bass move twice as fast as your taps and the snare hits once per bar. What tempo would a producer write?",
        "answer": ["116"],
        "kind": "number"
      },
      {"q": "You count 30 beats in 15 seconds. What is the BPM?", "answer": ["120"], "kind": "number"}
    ]
  }
}
```

```ladder
{
  "skill": "rhythm",
  "unlocks": 16,
  "intro": "Rung 12 of this ladder is estimating tempo; you practise at your own rung."
}
```

```ladder
{"skill": "degrees", "unlocks": 22, "intro": "Hearing degrees against home is the skill behind the hum test."}
```
