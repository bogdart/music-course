---
id: w44-l2-finding-key-and-tempo
title: Pass 1 — Finding Key and Tempo
week: 44
order: 2
phase: p5
duration_min: 40
goals:
  - Find home from the resting chord and the hold-it-under test, then prove it by playing the scale along
  - Decide major or minor from the home chord
  - Measure tempo by tapping, and recognise a half-time feel
prerequisites: [w44-l1-the-transcription-workflow]
tags: [transcription, key, tempo, meter, ear]
---

# Pass 1 — Finding Key and Tempo

Pass 1 asks two questions: *where is home?* and *how fast is the beat?* Get them right and every later pass becomes a
multiple choice instead of an open question.

```exercise
{
  "id": "w41l1-play",
  "type": "play-chord",
  "title": "Warm-up: last lesson's loop",
  "instructions": "Play the four chords of Mystery Song #0 (last lesson) in order: first from memory, then check with the chips.",
  "spec": {"chords": ["Am", "F", "C", "G"], "inversion": "any", "sequence": true, "bpm": 60}
}
```

## Finding home

The [[tonal centre]] is the note the music wants to rest on. Loop the song and work through these steps:

1. **Phrase-end note.** Listen only to the tune. Where does a phrase stop or hold a long note? Find that note on the
   keyboard with higher/lower searching. Do the same for the next phrase end. The note that keeps coming back is
   your first candidate — but only a candidate: a tune often rests on the 3rd or 5th of the home chord, not its root.
2. **The resting chord.** What decides it is the *chord* the phrase comes to rest on — the one that sounds like "the
   end". Listen to the lowest note of that last chord and search for it in the low keys. Songs land on home at the
   ends of sections much more often than at the start (last lesson's trap). If your phrase-end note is the 3rd or 5th
   of that chord, the chord's root is home.
3. **Hold it under.** Hold your candidate low in the left hand through the whole loop. Then hold a second candidate.
   *Check:* home sounds settled under every chord. A wrong candidate sounds fine in some bars and rubs or leans in
   others.

**Major or minor?** Play the major chord on home (for C: C–E–G), then the minor one (C–E♭–G), along with the loop.
*Check:* one blends; the other sounds sour or too bright. Then play the whole scale up and down along with the loop.
A wrong key clashes within a bar or two. That is your proof.

**Stuck between two notes?** Loop only the last two bars of a phrase and hold each candidate under them in turn. Home is
the one that sounds like "the end".

## Finding the tempo

1. Tap your foot to the kick and snare until it feels steady.
2. Tap eight beats on the [[tap tempo]] tool in the drill below and read the BPM. Outside the app, count beats for
   15 seconds and multiply by four.
3. *Check:* tap again from a different bar. The two readings should be within a few BPM.

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
      {"q": "Phrase-end note, resting chord, hold it under: which note is home?", "choices": ["G", "E", "D", "C"], "answer": 1, "explain": "E. The resting chord decides it: the tune's long phrase ends on E in bar 4, over an E chord with E in the bass, and the bar before (a D chord) leans into it. That the loop also begins on E proves nothing by itself — last lesson's loop began away from home."},
      {"q": "Play the major chord and then the minor chord on your home note along with the loop. Which blends?", "choices": ["Major", "Minor"], "answer": 1, "explain": "E–G–B: the home chord is minor, so the key is E minor (chords Em – C – D – Em: i – VI – VII – i)."},
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

Before the drills: for tempo, tap your foot first and only then tap the tool. For degrees, hold home in your head
(or on a key) and walk from the note to it. The *How to do it* box under each drill shows the exact method for your
current rung.

```ladder
{
  "skill": "rhythm",
  "unlocks": 16,
  "intro": "The rhythm ladder includes a tempo rung; you practise at your own rung."
}
```

```ladder
{"skill": "degrees", "unlocks": 30, "intro": "Hearing degrees against home is the skill behind finding the key."}
```

## Between lessons

Take one song you like. Find its home note (the resting chord and the hold-it-under test) and tap its tempo. Write
both down as the first line of a form map; you will add its bass and chords as those passes come up in the next weeks.
