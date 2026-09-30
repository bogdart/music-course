---
id: w47-l2-melody-over-harmony
title: Hearing Melody Over Harmony
week: 47
order: 2
phase: p5
duration_min: 45
goals:
  - Hear each long melody note as root, 3rd, 5th or tension of the chord underneath
  - Recognise anticipations — notes that arrive an eighth before the chord
  - Dictate a hidden 4-bar melody as scale degrees
prerequisites: [w47-l1-leaps-and-chromatic-notes]
tags: [transcription, melody, syncopation, ear]
---

# Hearing Melody Over Harmony

In a real mix the melody never plays alone. That sounds like a problem but is a gift: the chords from pass 4 tell you
which notes the melody is *likely* to use. Today we use that, and fix the most common rhythm mistake in pop dictation.

## Every melody note has a job

On strong beats and long notes, pop melodies sit mostly on chord tones. So instead of "which degree is this?", ask
"**what is this note doing to the chord?**"

- **Root** — solid, final, like the end of a thought.
- **3rd** — sweet, singing; the most common long note.
- **5th** — open, a little hollow.
- **Tension** (2nd/9th, 4th, 6th, 7th) — colour that wants to move, usually by step.

Once you know the chord *and* the job, the note is fixed: over E minor a "sweet 3rd" can only be G.

How to find the job with the keyboard, not with theory:

1. Loop the bar and play the chord's root, 3rd and 5th one at a time **under** the long melody note.
2. The one that merges into one sound (in any octave) is the job. Check: jump it by 12 keys up — it should match the
   melody's height.
3. None merges? It's a tension note. Try the keys one step above and below the chord tones; a tension note usually moves
   by step to a chord tone on the next beat.

```exercise
{
  "id": "w44l2-jobs",
  "type": "quiz",
  "title": "Name the job",
  "spec": {
    "questions": [
      {"q": "Chord: D major. Melody note: F#. Job?", "choices": ["Root", "3rd", "5th", "Tension"], "answer": 1},
      {"q": "Chord: C major. Melody note: D. Job?", "choices": ["Root", "3rd", "5th", "Tension (9th)"], "answer": 3},
      {"q": "Chord: E minor. Melody note: B. Job?", "choices": ["Root", "3rd", "5th", "Tension"], "answer": 2},
      {"q": "Chord: G major. You want the sweet 3rd. Which note?", "choices": ["G", "B", "D", "E"], "answer": 1}
    ]
  }
}
```

## Anticipations

Pop melodies love to arrive **an eighth note early**, tied across the barline, so the word lands on the "and" of 4
instead of on beat 1. This [[anticipation]] is why beginners' transcriptions look right but sound stiff: they move the
note to the downbeat. Listen for the note starting *before* the chord change — the melody leads, the harmony follows.

How to catch one: loop the bar line, tap your foot with the bass and count "3 and 4 **and** | 1". If the melody note is
already sounding when you say the last "and", before the bass moves on 1, it's anticipated. Check: tap the melody's
rhythm along with your count — an early note lands on your "and", not on "1".

## A hidden 4-bar melody

The chords are G – Em – C – D, one per bar. Answer the questions, then write the whole melody as degrees of G major:

1. Find each note on the keyboard first (first note by search, then up/down, step/leap), two or three notes at a time.
2. Translate: count up from G (G A B C D E F♯ = 1 2 3 4 5 6 7). Check: long notes should be chord tones of their bar.
3. Stuck on one note? Loop, compare your two best guesses against the loop back to back, keep the one that merges.

```exercise
{
  "id": "w44l2-listen",
  "type": "listen",
  "title": "Jobs and anticipations",
  "spec": {
    "example": {
      "title": "Melody over G – Em – C – D",
      "bpm": 88,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8"},
        {"instrument": "bass", "seq": "G2:h G2:h | E2:h E2:h | C2:h C2:h | D2:h D2:h"},
        {"instrument": "piano", "seq": "[G3 B3 D4]:w | [G3 B3 E4]:w | [G3 C4 E4]:w | [F#3 A3 D4]:w"},
        {"instrument": "lead", "seq": "r:8 B4:8 B4:8 A4:8 G4:q. E5:8~ | E5:h r:8 B4:8 G4:8 E5:8~ | E5:q D5:8 C5:8 C5:q. D5:8~ | D5:h. r:q"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Listen to the long note that sounds through beat 1 of bar 2. When does it start?", "choices": ["On beat 1 of bar 2", "On the 'and' of 4 in bar 1", "On beat 3 of bar 1", "On beat 2 of bar 2"], "answer": 1, "explain": "On the 'and' of 4: an eighth early, tied over the bar line — an anticipation."},
      {"q": "Bar 2 (E minor): that long note — which job does it do over E minor?", "choices": ["Root", "3rd", "5th", "Tension"], "answer": 0, "explain": "Root: it's E."},
      {"q": "Bar 3 (C major): the long note sounding on beat 1 — which job?", "choices": ["Root", "3rd", "5th", "Tension"], "answer": 1, "explain": "3rd: E again, now over C (and it too arrived early, tied from bar 2)."}
    ]
  }
}
```

```exercise
{
  "id": "w44l2-dictate",
  "type": "ear-melody",
  "title": "The whole 4 bars as degrees",
  "instructions": "Twelve notes (a tied note counts once). Answer with degrees of G major; loop it as often as you need.",
  "srs": false,
  "spec": {
    "key": "G",
    "degrees": [1, 2, 3, 4, 5, 6, 7],
    "answer": "degrees",
    "example": {
      "title": "Melody over G – Em – C – D",
      "bpm": 76,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "piano", "seq": "[G3 B3 D4]:w | [G3 B3 E4]:w | [G3 C4 E4]:w | [F#3 A3 D4]:w"},
        {"instrument": "lead", "seq": "r:8 B4:8 B4:8 A4:8 G4:q. E5:8~ | E5:h r:8 B4:8 G4:8 E5:8~ | E5:q D5:8 C5:8 C5:q. D5:8~ | D5:h. r:q"}
      ]
    },
    "track": 1
  }
}
```

```exercise
{
  "id": "w44l2-rhythm",
  "type": "rhythm-tap",
  "title": "Tap the rhythm of bars 1–2",
  "instructions": "From memory of the melody: tap its rhythm, including the early (anticipated) note at the end of bar 1. Press Listen first if you need to hear it again.",
  "spec": {
    "bpm": 76,
    "timeSig": "4/4",
    "seq": "r:8 x:8 x:8 x:8 x:q. x:8 | r:h r:8 x:8 x:8 x:8",
    "showNotation": false,
    "countIn": 1,
    "loops": 2
  }
}
```

For the drill: the same routine — first note by search, then the path, in small chunks; over chords, follow the highest,
singing line. The *How to do it* box under the drill shows the exact method for your current rung.

```ladder
{
  "skill": "melody",
  "unlocks": 24,
  "intro": "Review: melody dictation at your current rung."
}
```

```exercise
{
  "id": "w44l2-play",
  "type": "play-melody",
  "title": "Play it with the push",
  "instructions": "After revealing: play the melody over the chords, keeping the anticipations early.",
  "spec": {
    "bpm": 76,
    "timeSig": "4/4",
    "key": "G",
    "seq": "r:8 B4:8 B4:8 A4:8 G4:q. E5:8~ | E5:h r:8 B4:8 G4:8 E5:8~ | E5:q D5:8 C5:8 C5:q. D5:8~ | D5:h. r:q",
    "showStaff": true,
    "showKeyboard": true,
    "countIn": 1,
    "backing": {"instrument": "piano", "seq": "[G3 B3 D4]:w | [G3 B3 E4]:w | [G3 C4 E4]:w | [F#3 A3 D4]:w"}
  }
}
```

## Between lessons

One Practice session. When a song plays anywhere, pick one long melody note and ask: root, 3rd, 5th or tension?
