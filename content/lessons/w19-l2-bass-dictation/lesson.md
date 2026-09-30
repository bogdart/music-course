---
id: w19-l2-bass-dictation
title: Bass Dictation and the Kick Lock
week: 19
order: 2
phase: p3
duration_min: 50
goals:
  - Take down a short bass line with a keyboard-only method (rhythm first, then find each note by matching)
  - Hear and use the kick lock - bass notes starting where the kick hits
  - Play back minor-key bass lines and name minor progressions at your ladder level
prerequisites: [w19-l1-roots-fifths-octaves]
tags: [bass, ear, transcription, groove, minor]
songs:
  - { title: "Billie Jean", composer: "Michael Jackson", public_domain: false }
  - { title: "Another One Bites the Dust", composer: "John Deacon (Queen)", public_domain: false }
---

# Bass Dictation and the Kick Lock

Hearing the bass is the key to taking a song apart: find the bass, and you have most of the chord roots. Today's
examples are all in minor keys. Honest expectation: in a full mix the bass is often *felt* more than heard, and low
notes are harder to place than middle ones. So we use a method that leans on what your ear already does well.

## The kick lock

In almost every groove the bass notes start where the kick drum hits. When they do, the two merge into one fat
low-end sound; when they don't, the groove feels loose. This [[kick lock]] also helps dictation: *follow the kick,
and you know where the bass notes start.*

## How to take down a bass line (keyboard only)

1. **Rhythm first.** Tap along with the kick. Those taps are (nearly always) the bass rhythm.
2. **Match the first note.** Loop bar 1 and hold low keys on your keyboard while it plays. A key a half or
   whole step off the bass rubs — that part is easy. But more than one key will sound fine: the bass note itself
   (in any octave), and also the other notes of the chord above it, above all the *fifth*, the most octave-like
   sound (the fifth trap from the octave ladder). So check every key that blends:
   * **Octave test:** play your key together with the bass an octave higher and lower as well. The real bass note
     melts into one sound in every octave; a fifth sounds open or hollow, and in some octaves it turns into a 4th.
   * **Root test:** the bass is usually the root of the chord the pad plays (week 11). If your key is the chord's
     3rd or 5th, try the root.
   Expect several tries per note at first; that is normal.
3. **Track the motion.** Next note: same, a step, or a leap? Find it by matching again.
4. **One bar at a time.** Loop, match, write, move on.

## Dictate a groove

Here is an original 4-bar groove in A minor with drums, a pad and a bass. The notation is hidden until you reveal it.
Answer the rhythm questions first, then write the bass line in the DAW task below.

```exercise
{
  "id": "listen-minor-groove-hidden",
  "type": "listen",
  "title": "Minor groove - listen for the lock",
  "spec": {
    "example": {
      "title": "Minor groove (4 bars, loops)",
      "bpm": 96, "timeSig": "4/4", "key": "Am",
      "tracks": [
        { "instrument": "bass", "seq": "A1:q. A1:8 r:8 A1:q. | F1:q. F1:8 r:8 F1:q. | G1:q. G1:8 r:8 G1:q. | A1:q. A1:8 r:8 A1:q." },
        { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8" },
        { "instrument": "pad", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 B3 D4]:w | [A3 C4 E4]:w" }
      ],
      "show": ["pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      { "q": "How many kick hits are in each bar?", "choices": ["2", "3", "4", "8"], "answer": 1, "explain": "Three: on beat 1, the 'and' of 2 and the 'and' of 3." },
      { "q": "Does each bass note start together with a kick hit?", "choices": ["Yes", "No, the bass plays between the kicks"], "answer": 0, "explain": "Yes - three bass notes per bar, each on a kick. That is the kick lock." },
      { "q": "Within one bar, does the bass change note?", "choices": ["No, it repeats one note per bar", "Yes, every hit is a new note"], "answer": 0, "explain": "One note per bar: the chord's root, repeated in the kick rhythm." }
    ]
  }
}
```

```exercise
{
  "id": "daw-dictate-minor-groove",
  "type": "daw-task",
  "title": "Write the groove's bass line",
  "spec": {
    "template": { "bpm": 96, "key": "Am", "tracks": [
      { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 hihat:8 [kick hihat]:8 [snare hihat]:8 hihat:8" },
      { "instrument": "bass", "seq": "" }
    ] },
    "task": "Replay the hidden groove above (keep it hidden). Step 1: on the bass track, put notes where the kick hits - any note for now. Step 2: find each bar's note by holding keys along with the example until one blends, check it with the octave and root tests, and fix the pitches. Bar 1 is home (A). About 15 minutes. Then reveal the notation and compare.",
    "checks": [
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "in-key", "key": "Am", "scale": "natural-minor", "track": 1 },
      { "kind": "matches-reference", "reference": { "bpm": 96, "timeSig": "4/4", "tracks": [ { "instrument": "bass", "seq": "A1:q. A1:8 r:8 A1:q. | F1:q. F1:8 r:8 F1:q. | G1:q. G1:8 r:8 G1:q. | A1:q. A1:8 r:8 A1:q." } ] }, "track": 1, "refTrack": 0, "minSimilarity": 0.7, "octave": "any" }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

Now play what you wrote (the answer is A – F – G – A: i – VI – VII – i), an octave higher so it fits your keyboard:

```exercise
{
  "id": "play-minor-groove-bass",
  "type": "play-melody",
  "title": "Play the groove bass",
  "passScore": 0.7,
  "spec": { "bpm": 84, "timeSig": "4/4", "key": "Am", "seq": "A2:q. A2:8 r:8 A2:q. | F2:q. F2:8 r:8 F2:q. | G2:q. G2:8 r:8 G2:q. | A2:q. A2:8 r:8 A2:q.", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "pad", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 B3 D4]:w | [A3 C4 E4]:w" } }
}
```

## Ear: minor-key bass lines and progressions

This lesson opens minor-key bass lines like today's groove, and two progression rungs: the pop minor chords i, iv, VI and VII in A minor (the i – iv – VI – VII loop from week 16, plus today's i – VI – VII), then minor progressions in a new key each question. Both drills run at your current rungs, which may still be earlier ones.

```ladder
{ "skill": "roots", "unlocks": 12, "intro": "Opens: bass lines in minor keys. The drill runs at your current roots rung." }
```

```ladder
{ "skill": "progressions", "unlocks": 13, "intro": "Opens: the pop minor chords (i, iv, VI, VII) in A minor, then minor progressions in a new key each time. The drill runs at your current progression rung." }
```

## Two famous minor bass lines, verdict first

Listen on your own player, then answer. The facts appear after you answer.

```exercise
{
  "id": "bass-songs-verdict",
  "type": "quiz",
  "title": "Billie Jean and Another One Bites the Dust",
  "spec": { "questions": [
    { "q": "\"Billie Jean\" (Michael Jackson): how does the bass line behave through the song?", "choices": ["A short pattern that repeats almost unchanged", "A new line in every section", "It only plays in the chorus"], "answer": 0, "explain": "A one-bar eighth-note pattern (F# minor, about 117 BPM) that outlines the minor chord and runs almost unchanged - the bass is itself a hook." },
    { "q": "\"Billie Jean\": is the bass line busy (many notes) or sparse?", "choices": ["Busy - a steady stream of eighth notes", "Sparse - a few long notes"], "answer": 0, "explain": "A steady stream of eighths, locked with a simple kick-snare beat." },
    { "q": "\"Another One Bites the Dust\" (Queen): what makes its bass riff stand out?", "choices": ["Gaps - rests between the notes", "Very long held notes", "It is played on a piano"], "answer": 0, "explain": "The riff (E minor, about 110 BPM) has rests that leave room for the kick and handclaps. Space is part of a bass line." }
  ] }
}
```

```exercise
{
  "id": "reflect-bass-method",
  "type": "reflect",
  "spec": { "prompt": "How did the matching method work for you? Which was harder: the rhythm or finding the notes? Did the right note really 'blend' when you held it along? Did a wrong one (the fifth, another chord note) fool you first?", "minWords": 25 }
}
```
