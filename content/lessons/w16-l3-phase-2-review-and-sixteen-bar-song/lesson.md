---
id: w16-l3-phase-2-review-and-sixteen-bar-song
title: Phase 2 Review and a 16-Bar Song
week: 16
order: 3
phase: p2
duration_min: 50
goals:
  - Check where your Phase 2 ear skills stand (a map, not an exam)
  - Review the theory of Phase 2 and read the bass clef at the keyboard
  - Write a 16-bar song with a verse and a chorus, over two sessions
prerequisites: [w16-l2-relative-parallel-and-borrowed]
tags: [review, assessment, ear, daw, song]
---

# Phase 2 Review and a 16-Bar Song

Eight weeks ago you knew the major scale and three kinds of triad. Since then: minor keys, every interval up to the octave, the bass clef, inversions, seventh chords, tension and resolution, the three chord families and four cadences, the pop progressions, sixteenths, triplets, swing and 6/8, chord tones and sus chords, harmonising, the whole circle of fifths and borrowed chords. And you've started hearing roots.

This lesson has two halves. First, a **check** of what you've drilled; the only new thing is one progression rung, V or ♭VII, which lesson 2 explained. Treat the scores as a map of where to practise, not a verdict. Nothing is locked. Second, you'll write the most complete song of the course so far.

## Part 1: ear check

Each drill below runs at your current rung. The progression drill also opens the **V or ♭VII?** rung from lesson 2: V is tense and leans home; ♭VII is major too, a whole step below home, strong but relaxed. Do them in one sitting, without replaying the lesson prose. Afterwards, look at the ladder bars on your Dashboard: the skills with the most open-but-unmastered rungs are where Practice sessions should go before Phase 3 speeds up.

```ladder
{ "skill": "chords", "unlocks": 9, "intro": "Chord colours at your level." }
```

```ladder
{ "skill": "progressions", "unlocks": 11, "intro": "Opens: V or ♭VII? Name the chords at your current rung." }
```

```ladder
{ "skill": "roots", "unlocks": 9, "intro": "Bass lines at your level." }
```

## Part 2: theory and keyboard check

```exercise
{
  "id": "e1", "type": "quiz", "title": "Phase 2 theory check",
  "passScore": 0.7,
  "spec": { "questions": [
    { "q": "The relative minor of F major is…", "choices": ["F minor", "D minor", "A minor", "C minor"], "answer": 1 },
    { "q": "In A harmonic minor, degree 7 is…", "choices": ["G", "G♯", "F♯", "A♭"], "answer": 1, "explain": "The raised 7th, the leading tone that makes the major V." },
    { "q": "The notes E G C, from the bottom, are…", "choices": ["C major, root position", "C major, 1st inversion", "C major, 2nd inversion", "E minor"], "answer": 1, "explain": "The 3rd (E) is in the bass: C/E." },
    { "q": "C E G B♭ is…", "choices": ["Cmaj7", "C7", "Cm7", "Csus4"], "answer": 1 },
    { "q": "Which two notes of G7 squeeze inward when it resolves to C?", "choices": ["G and D", "B and F", "D and F", "G and B"], "answer": 1 },
    { "q": "V → vi is a…", "choices": ["authentic cadence", "plagal cadence", "half cadence", "deceptive cadence"], "answer": 3 },
    { "q": "In a bar of 6/8 there are…", "choices": ["six big beats", "two big beats of three eighths", "three beats of two eighths"], "answer": 1 },
    { "q": "The key with three sharps is…", "choices": ["D major", "A major", "E major", "E♭ major"], "answer": 1 },
    { "q": "In C major, the borrowed ♭VII chord is…", "choices": ["B°", "B♭ major", "B minor", "A♭ major"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "e2", "type": "read-note", "title": "Bass clef at the keyboard",
  "count": 10, "passScore": 0.7,
  "spec": { "clef": "bass", "range": ["C2", "C4"], "accidentals": false, "answer": "play", "timed": 0 }
}
```

```exercise
{
  "id": "e3", "type": "play-chord", "title": "Chord check: inversions, sevenths, sus, borrowed",
  "instructions": "Slash chords need their bass note at the bottom; the others any inversion.",
  "count": 8, "passScore": 0.7,
  "spec": { "chords": ["C/E", "G/B", "Dm7", "G7", "Cmaj7", "Csus4", "Fm", "Bb"], "sequence": false, "bpm": 60, "key": "C" }
}
```

## Part 3: a 16-bar song (two sessions)

Eight bars of **verse**, then eight bars of **chorus**. The chorus must feel like a lift. Choose **one** way to make it different:

- **Borrowed chord:** verse on I – vi – IV – V; chorus on IV – iv – I – V or I – ♭VII – IV – I.
- **Relative key:** verse in A minor on i – VI – III – VII; chorus in C major on I – V – vi – IV. Same notes, brighter home.

Session 1: the verse. Session 2 (next time you sit down): the chorus. Both tasks open the same project, so your verse is waiting for you.

```exercise
{
  "id": "e4", "type": "daw-task", "title": "Session 1: the verse (bars 1–8)",
  "spec": {
    "projectRef": "w16-song",
    "template": { "bpm": 100, "key": "C", "timeSig": "4/4", "tracks": [
      { "instrument": "drums", "seq": "" }, { "instrument": "bass", "seq": "" }, { "instrument": "piano", "seq": "" }, { "instrument": "lead", "seq": "" } ],
      "markers": [ { "bar": 1, "name": "Verse" }, { "bar": 9, "name": "Chorus" } ] },
    "task": "Write bars 1–8, the verse. Drums: a backbeat groove (snare on 2 and 4), kept simple. Bass: roots, locked with the kick. Piano: chords, voiced smoothly. Lead: a calm melody in the lower part of your range, with chord tones on strong beats and a question phrase (bars 1–4) and an answer phrase (bars 5–8).",
    "checks": [
      { "kind": "has-tracks", "instruments": ["drums", "bass", "piano", "lead"] },
      { "kind": "bars", "min": 8, "max": 16 },
      { "kind": "drum-pattern", "requires": ["kick", "snare"], "snareOnBeats": [2, 4], "bars": [1, 8], "track": 0 },
      { "kind": "range", "low": "C1", "high": "C3", "track": 1 },
      { "kind": "uses-rhythm", "values": ["h", "q", "8"], "minDistinct": 2, "track": 3 }
    ],
    "minBars": 8
  }
}
```

```exercise
{
  "id": "e5", "type": "daw-task", "title": "Session 2: the chorus (bars 9–16)",
  "spec": {
    "projectRef": "w16-song",
    "template": { "bpm": 100, "key": "C", "timeSig": "4/4", "tracks": [
      { "instrument": "drums", "seq": "" }, { "instrument": "bass", "seq": "" }, { "instrument": "piano", "seq": "" }, { "instrument": "lead", "seq": "" } ] },
    "task": "Add bars 9–16, the chorus, with your borrowed chord (iv or ♭VII) or in the relative key. Drums: busier than the verse (add eighth hi-hats or an extra kick). Lead: higher than the verse, with a 2-bar hook that repeats and the song's highest note. End with V → I in C, the melody on C. Then play the whole song: does the chorus lift?",
    "checks": [
      { "kind": "bars", "min": 16, "max": 16 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "snareOnBeats": [2, 4], "bars": [9, 16], "track": 0 },
      { "kind": "repetition", "motifBars": 2, "minRepeats": 2, "allowTransposed": true, "track": 3 },
      { "kind": "max-leap", "semitones": 9, "track": 3 },
      { "kind": "ends-on", "degree": 1, "track": 3 },
      { "kind": "custom", "id": "verse-chorus-contrast", "note": "Self-check: the chorus uses a borrowed chord (iv or ♭VII) or the relative key, and its melody sits higher than the verse." }
    ],
    "minBars": 16, "maxBars": 16
  }
}
```

Save it: it's your most complete song so far, and worth playing to someone.
