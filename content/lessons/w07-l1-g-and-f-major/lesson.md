---
id: w07-l1-g-and-f-major
title: G Major, F Major and Key Signatures
week: 7
order: 1
phase: p1
duration_min: 45
goals:
  - Build and play G major (one sharp), then F major (one flat)
  - Read a key signature and name the key (C, G or F); spell each key with every letter once
  - Hear degrees with G, and later F, as home — or find them by counting up from the new home
prerequisites: [w06-l3-diatonic-triads-and-roman-numerals]
tags: [keys, key-signature, scales, circle-of-fifths, ear]
---

# New keys: G and F

In week 3 you saw that the W-W-H-W-W-W-H pattern works from any note. Each starting note gives a different [[key]] — the same home-and-family relationships, moved higher or lower. Today: the two keys closest to C, **one at a time**, and hearing a new home.

## G major: one sharp

G →W→ A →W→ B →H→ C →W→ D →W→ E →W→ **F♯** →H→ G

To keep the pattern, F must be raised to F♯. Everything else is white keys. Fingering: same as C — 1 2 3, thumb under, 1 2 3 4 5.

```example
{
  "title": "G major, up and down",
  "bpm": 90, "timeSig": "4/4", "key": "G",
  "tracks": [ { "instrument": "piano", "seq": "G3:q A3:q B3:q C4:q | D4:q E4:q F#4:q G4:q | G4:q F#4:q E4:q D4:q | C4:q B3:q A3:q G3:q" } ],
  "show": ["staff", "keyboard"]
}
```

**Try it:** play G major up and down once with F natural (by mistake, on purpose), then with F♯. Listen near the top: with F♯ the last step into G is a half step, like B → C in C major; with F it's a whole step, and many people hear the scale "lose its way" there. If both sound fine to you, trust the pattern — W-W-H-W-W-W-H needs the F♯.

The key's sharps or flats are written once, at the start of every line: the [[key signature]]. One sharp, on the F line = **G major**. None = C major.

```staff
{ "clef": "treble", "key": "G", "timeSig": "4/4", "seq": "G4:q A4:q B4:q C5:q | D5:q E5:q F#5:q G5:q" }
```

```exercise
{
  "id": "e4",
  "type": "play-scale",
  "title": "G major, one octave",
  "instructions": "Same fingering as C. Don't forget F♯.",
  "passScore": 0.75,
  "spec": { "root": "G", "scale": "major", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 60, "metronome": true }
}
```

## Home in G

In G major, G is 1, D is 5, F♯ is 7, and the cadence is G – C – D – G.

```example
{
  "title": "Cadence in G (G – C – D – G), then 3 (B) walking home",
  "bpm": 80, "timeSig": "4/4", "key": "G",
  "tracks": [ { "instrument": "piano", "seq": "[G4 B4 D5]:q [G4 C5 E5]:q [F#4 A4 D5]:q [G4 B4 D5]:q | r:w | B4:w | B4:q A4:q G4:h" } ],
  "show": ["keyboard"]
}
```

**Try it:**

1. Play the G cadence yourself: G B D → G C E → F♯ A D → G B D. Then play G4 alone. Then C4 alone. Which one feels like the end *now*?
2. Play the cadence, then B4, and walk home: B A G. Then the cadence, then D5, and walk down: D C B A G (four steps → 5).
3. Play C major's cadence, then G major's, one after the other. Notice the jump of home.

Be ready for this to feel strange: after weeks in C, your ear may keep hearing C as home for a while, and G-major drills sit a little higher than C ones. That's why the cadence plays before every question — listen to it every time, and press **Reference** whenever home slips away.

**If you can't hear it yet:** count on the keyboard from the new home. Put your thumb on G: G A B C D E = 1 2 3 4 5 6. Find the question note by searching, then count keys *in the scale* up from G. Same counting as in C — only the starting key moved.

```exercise
{
  "id": "c1",
  "type": "listen",
  "title": "Check: degrees in G",
  "instructions": "Each example plays the G cadence, then one note. Walk home to G, or find the key and count up from G.",
  "spec": {
    "examples": [
      { "title": "Question 1", "bpm": 80, "timeSig": "4/4", "key": "G", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[G4 B4 D5]:q [G4 C5 E5]:q [F#4 A4 D5]:q [G4 B4 D5]:q | r:h D5:h" } ] },
      { "title": "Question 2", "bpm": 80, "timeSig": "4/4", "key": "G", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[G4 B4 D5]:q [G4 C5 E5]:q [F#4 A4 D5]:q [G4 B4 D5]:q | r:h B4:h" } ] },
      { "title": "Question 3", "bpm": 80, "timeSig": "4/4", "key": "G", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[G4 B4 D5]:q [G4 C5 E5]:q [F#4 A4 D5]:q [G4 B4 D5]:q | r:h G4:h" } ] }
    ],
    "questions": [
      { "q": "Question 1: the note is degree…", "choices": ["1", "3", "5"], "answer": 2, "explain": "D: G A B C D — the 5th note of G major." },
      { "q": "Question 2: the note is degree…", "choices": ["1", "3", "5"], "answer": 1, "explain": "B: G A B — the 3rd note." },
      { "q": "Question 3: the note is degree…", "choices": ["1", "3", "5"], "answer": 0, "explain": "G: home." }
    ]
  }
}
```

## F major: one flat

F →W→ G →W→ A →H→ **B♭** →W→ C →W→ D →W→ E →H→ F

B must be lowered to B♭ to make the half step after A. One flat, on the B line = **F major**. Fingering is different: **1 2 3 4** (F G A B♭), thumb under onto C, **1 2 3 4** (C D E F). The fourth finger belongs on B♭.

```example
{
  "title": "F major, up and down",
  "bpm": 90, "timeSig": "4/4", "key": "F",
  "tracks": [ { "instrument": "piano", "seq": "F3:q G3:q A3:q Bb3:q | C4:q D4:q E4:q F4:q | F4:q E4:q D4:q C4:q | Bb3:q A3:q G3:q F3:q" } ],
  "show": ["staff", "keyboard"]
}
```

```staff
{ "clef": "treble", "key": "F", "timeSig": "4/4", "seq": "F4:q G4:q A4:q Bb4:q | C5:q D5:q E5:q F5:q" }
```

```exercise
{
  "id": "e5",
  "type": "play-scale",
  "title": "F major, one octave",
  "instructions": "Fingers 1 2 3 4, thumb under onto C, 1 2 3 4. Finger 4 on B♭.",
  "passScore": 0.75,
  "spec": { "root": "F", "scale": "major", "octaves": 1, "direction": "asc-desc", "hands": "right", "tempo": 60, "metronome": true }
}
```

## Spelling: every letter once

One black key has two names (F♯ = G♭, B♭ = A♯). Which one a key uses follows one rule: **a major scale uses every letter exactly once.** G major's letters G A B C D E still miss **F**, so the note is **F♯**, not G♭. F major's letters F G A _ C D E miss **B**, so it's **B♭**, not A♯. Handy result: keys with sharps never use flats, and vice versa.

**The circle of fifths, first look:** up a 5th from C is G (one sharp); down a 5th is F (one flat). Keep going and every key gets one more sharp or flat — the [[circle of fifths]]. For now you only need C and its two neighbours.

```exercise
{
  "id": "e1",
  "type": "quiz",
  "title": "Sharps, flats and the circle",
  "spec": { "questions": [
    { "q": "G major has one sharp. Which?", "choices": ["F♯", "C♯", "G♯"], "answer": 0 },
    { "q": "F major has one flat. Which?", "choices": ["E♭", "B♭", "F♭"], "answer": 1 },
    { "q": "A key signature with no sharps or flats means…", "choices": ["C major", "G major", "no key"], "answer": 0 },
    { "q": "Going up a 5th from G on the circle gives…", "choices": ["D major", "C major", "A major"], "answer": 0 },
    { "q": "In G major, degree 5 is…", "choices": ["C", "D", "E"], "answer": 1 },
    { "q": "In F major, degree 4 is…", "choices": ["B", "B♭", "A"], "answer": 1 },
    { "q": "In G major, the black key is spelled…", "choices": ["F♯", "G♭"], "answer": 0, "explain": "Each letter once: G A B C D E F♯. G♭ would use G twice and skip F." },
    { "q": "In F major, the black key is spelled…", "choices": ["A♯", "B♭"], "answer": 1, "explain": "Each letter once: F G A B♭ C D E. A♯ would use A twice and skip B." }
  ] },
  "passScore": 0.75
}
```

```exercise
{
  "id": "e2",
  "type": "key-signature",
  "title": "Name the key",
  "count": 9,
  "passScore": 0.75,
  "spec": { "keys": ["C", "G", "F"], "prompt": "staff", "answer": "name" }
}
```

```exercise
{
  "id": "e3",
  "type": "build-scale",
  "title": "Build G and F major",
  "count": 6,
  "passScore": 0.75,
  "spec": { "roots": ["G", "F", "C"], "scale": "major", "prompt": "name" }
}
```

### Before the degree drill

This lesson opens a degree rung in G, and after it one in F. The drill runs at your current degree rung, so you'll meet G as home only once 1–6 in C is solid, and F only once G is. The **How to do it** box for the new keys says: *don't think letters — think home.* Rehearse it:

1. Let the cadence finish; hold its lowest last note as **1**.
2. Question note: at rest or leaning? Walk from it to home, counting steps.
3. Lost? Press **Reference** again, or find the note and count scale keys up from home (G A B C D E, or F G A B♭ C D).

```ladder
{ "skill": "degrees", "unlocks": 10, "intro": "Opens degrees 1–6 in G, then in F; the drill runs at your current rung. Listen to the cadence every time." }
```

## Between lessons

- **Keyboard, 3 minutes a day:** G major and F major up and down, then the G cadence and the F cadence (F A C → F B♭ D → E G C → F A C).
- **Two Practice sessions of about 10 minutes.** If G-major questions come up, play the G cadence yourself once before the first question.
- **Ready?** The degrees bar moves on to G only after C is mastered. A dip in accuracy right after a key change is expected — it usually recovers within two or three sessions.
