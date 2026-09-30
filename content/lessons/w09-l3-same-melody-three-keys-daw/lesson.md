---
id: w09-l3-same-melody-three-keys-daw
title: One Melody, Three Keys
week: 9
order: 3
phase: p1
duration_min: 50
goals:
  - Transpose chords as well as melodies (I, IV, V in C, G and F)
  - Listen to what a key change does, honestly, and spot one by keyboard when the ear is unsure; name I, IV, V and vi in C and play their bass line
  - Write a melody in C and transpose it to G and F in the DAW
  - Judge one-after-the-other octaves when the wrong note is only a half step off
prerequisites: [w09-l2-transposing-melodies]
tags: [transposition, keys, chords, daw, ear]
---

# One melody, three keys

Chords transpose exactly like melodies: the **numerals stay**, the letters change. The three major chords of a key — I, IV and V, the chords of the cadence — are the backbone of countless folk, blues, rock and country songs:

| Key | I | IV | V |
|---|---|---|---|
| C major | C | F | G |
| G major | G | C | D |
| F major | F | B♭ | C |

Neighbouring keys share chords: C and G both contain C and G; C and F both contain F and C.

```chords
{ "key": "G", "bars": ["G", "C", "D", "G"], "roman": true, "play": true, "bpm": 80 }
```

```chords
{ "key": "F", "bars": ["F", "Bb", "C", "F"], "roman": true, "play": true, "bpm": 80 }
```

**Try it:** play I–IV–V–I in C with plain triads (C E G, F A C, G B D, C E G). Then put your thumb on G and play the same *shapes* from G, C, D — check the D chord: it needs F♯ (D F♯ A). Then from F, B♭, C — the B♭ chord is B♭ D F. The hand shapes never change; only the black keys tell you which key you're in.

```exercise
{
  "id": "e1",
  "type": "quiz-input",
  "title": "Transpose the chords",
  "spec": { "questions": [
    { "q": "IV in G major?", "answer": ["C"], "kind": "note" },
    { "q": "V in G major?", "answer": ["D"], "kind": "note" },
    { "q": "IV in F major?", "answer": ["Bb"], "kind": "note" },
    { "q": "V in F major?", "answer": ["C"], "kind": "note" },
    { "q": "Half steps to transpose from C up to G?", "answer": ["7"], "kind": "number" },
    { "q": "Half steps to transpose from C up to F?", "answer": ["5"], "kind": "number" }
  ] },
  "passScore": 0.75
}
```

```exercise
{
  "id": "e2",
  "type": "play-chord",
  "title": "I–IV–V–I in G",
  "passScore": 0.75,
  "spec": { "chords": ["G", "C", "D", "G"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

```exercise
{
  "id": "e3",
  "type": "play-chord",
  "title": "I–IV–V–I in F",
  "passScore": 0.75,
  "spec": { "chords": ["F", "Bb", "C", "F"], "inversion": "any", "sequence": true, "bpm": 60 }
}
```

## Hearing a key change

One short phrase in C, then G, then F. The *tune* is identical; the height changes.

```example
{
  "title": "Same phrase in C, G and F",
  "bpm": 96, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "E4:q G4:q F4:q D4:q | E4:q C4:q D4:h | C4:q E4:q D4:q B3:q | C4:w | B3:q D4:q C4:q A3:q | B3:q G3:q A3:h | G3:q B3:q A3:q F#3:q | G3:w | A3:q C4:q Bb3:q G3:q | A3:q F3:q G3:h | F3:q A3:q G3:q E3:q | F3:w" },
    { "instrument": "pad", "seq": "[C3 E3 G3]:h [F3 A3 C4]:h | [C3 E3 G3]:h [B2 D3 G3]:h | [C3 E3 G3]:h [B2 D3 G3]:h | [C3 E3 G3]:w | [G2 B2 D3]:h [C3 E3 G3]:h | [G2 B2 D3]:h [A2 D3 F#3]:h | [G2 B2 D3]:h [A2 D3 F#3]:h | [G2 B2 D3]:w | [F2 A2 C3]:h [Bb2 D3 F3]:h | [F2 A2 C3]:h [G2 C3 E3]:h | [F2 A2 C3]:h [G2 C3 E3]:h | [F2 A2 C3]:w" }
  ],
  "show": ["pianoroll"]
}
```

What you'll probably notice: the second phrase starts in a surprising place, and for a moment may sound "wrong" before it settles. How fast your ear accepts the new home varies — it can take the whole phrase, or not happen at all yet. In the piano roll you can *see* it: three identical shapes, shifted.

**Try it:**

1. Play the example. At the end of each phrase, pause it and play that phrase's **last note** on your keyboard — C, then G, then F. That's each phrase's home.
2. Play the first two notes of each phrase yourself (E G, B D, A C). Same distance each time — a minor or major 3rd? (Count: E–G is 3 half steps, B–D 3, A–C 3.)
3. Replay the whole thing and follow the pad chords under each phrase: the last chord of each phrase is its home chord.

**If you can't hear it yet:** you can always detect a key change by keyboard: find the last note of each phrase (search), and if the phrases end on different notes but have the same shape, the key changed.

```exercise
{
  "id": "c1",
  "type": "listen",
  "title": "Check: the same tune, moved?",
  "instructions": "Two phrases. Replay; find each phrase's last note on your keyboard if unsure.",
  "spec": {
    "example": { "title": "Two phrases", "bpm": 96, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "E4:q G4:q F4:q D4:q | E4:q C4:q D4:h | C4:q E4:q D4:q B3:q | C4:w | A4:q C5:q Bb4:q G4:q | A4:q F4:q G4:h | F4:q A4:q G4:q E4:q | F4:w" } ] },
    "questions": [
      { "q": "Phrase 2 is…", "choices": ["the same tune in another key", "a different tune"], "answer": 0, "explain": "Same shape and rhythm, moved up a 4th: C major → F major." },
      { "q": "Compared with phrase 1, phrase 2 sits…", "choices": ["higher", "lower"], "answer": 0, "explain": "It ends on F4, a 4th above C4." }
    ]
  }
}
```

## Your workflow in the DAW

1. Write a 4-bar melody in **C major** (mostly steps, within one octave, ending on C).
2. **Write down its degrees** — e.g. 3 5 4 2 | 3 1 2 ….
3. Build the G and F versions from those degrees. (The DAW's transpose tool exists too: +7 half steps to G, +5 to F — use it only to check yourself.)
4. Play all three one after another. A note that sounds odd is usually a missing F♯ or B♭; if nothing sounds odd but a check fails, compare each note with your written degrees.

```exercise
{
  "id": "e7",
  "type": "daw-task",
  "title": "Same melody in C, G and F",
  "spec": {
    "template": { "bpm": 96, "key": "C", "tracks": [ { "instrument": "piano", "seq": "" }, { "instrument": "lead", "seq": "" }, { "instrument": "pluck", "seq": "" } ] },
    "task": "Track 1 (piano), bars 1–4: write a 4-bar melody in C major ending on C. Track 2 (lead), bars 5–8: the same melody transposed to G major, ending on G. Track 3 (pluck), bars 9–12: the same melody in F major, ending on F. Work from your written-down degrees. Play the whole 12 bars: the three phrases must have identical rhythm and shape, and none should contain a note outside its key.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "lead", "pluck"] },
      { "kind": "bars", "min": 12, "max": 12 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 0 },
      { "kind": "ends-on", "degree": 1, "track": 0 },
      { "kind": "note-count", "min": 6, "max": 24, "track": 0 },
      { "kind": "in-key", "key": "G", "scale": "major", "allowPassing": false, "track": 1 },
      { "kind": "ends-on", "degree": 1, "key": "G", "track": 1 },
      { "kind": "is-transposition", "of": 0, "track": 1 },
      { "kind": "in-key", "key": "F", "scale": "major", "allowPassing": false, "track": 2 },
      { "kind": "ends-on", "degree": 1, "key": "F", "track": 2 },
      { "kind": "is-transposition", "of": 0, "track": 2 }
    ],
    "minBars": 12, "maxBars": 12
  }
}
```

## Four chords by ear

This lesson is long: if the DAW piece took your first sitting, make the three short ear sections below a second
one.

The progressions ladder adds **vi** to I, IV and V — the four chords of countless pop songs, still in C. Each chord has a role you can feel, and a bass note you can find:

| Chord | Role | Bass in C |
|---|---|---|
| I | rest, home | C |
| IV | lifts away | F |
| V | pulls back home | G |
| vi | sad, a second home | A |

```chords
{ "key": "C", "bars": ["C", "Am", "F", "G"], "roman": true, "play": true, "bpm": 72 }
```

**Try it:** play I – vi – IV – V – I with the close positions (C E G → C E A → C F A → B D G → C E G). Stop on vi: resting, but darker than I? Then stop on V: waiting to move?

**If you can't hear it yet:** find the bass note of each chord — C, F, G or A — and translate it with the table.

```ladder
{ "skill": "progressions", "unlocks": 3, "intro": "Opens \"I, IV, V, vi\": the four pop chords, in C; the drill runs at your current rung." }
```

## Bass lines with vi

Same four chords, heard from the bottom: the roots ladder adds **vi** to its bass lines, in C. Four chords now — I, IV, V, vi — and you play the bass note of each. vi's bass is **A**, the root of A minor: it often feels like a sadder, second home.

```example
{
  "title": "I – vi – IV – V with the bass: C, A, F, G",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "[C4 E4 G4]:w | [C4 E4 A4]:w | [C4 F4 A4]:w | [B3 D4 G4]:w" },
    { "instrument": "bass", "seq": "C3:w | A2:w | F2:w | G2:w" }
  ],
  "show": ["keyboard"]
}
```

**Try it:** left hand alone: C3, A2, F2, G2, then back to C3. Then play along with the example. Stop on A2 under the Am chord: settled, but darker than C.

**If you can't hear it yet:** after each chord, search the lowest note — only C, F, G or A are possible. Follow the bass up or down from the note before, as in week 8.

```ladder
{ "skill": "roots", "unlocks": 5, "intro": "Opens bass lines with I, IV, V and vi in C; the drill runs at your current roots rung." }
```

## Octaves: near-misses (a short one to finish)

The octave ladder's next rung keeps single pairs (same or different?), but the different note may now sit **a half step** from the octave — C3 → C♯4 instead of C3 → C4. Far less obvious than last time's tritone.

```example
{
  "title": "A3 → A4 (same), A3 → G♯4 (a half step low), A3 → B♭4 (a half step high)",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "A3:h A4:h | r:w | A3:h G#4:h | r:w | A3:h Bb4:h" } ],
  "show": ["keyboard"]
}
```

**Try it:** play A3 → A4, then A3 → G♯4, then A3 → B♭4. Then play A3 and A4 **together**, and A3 with G♯4 together: the octave melts, the near-miss rubs. That "together" test is your fallback.

**If you can't hear it yet:** the echo test from week 6 — find the first note, play it and the key 12 above, then replay. A near-miss sounds like your echo bent up or down; to be sure, play the first note together with the second.

```ladder
{ "skill": "octave", "unlocks": 6, "intro": "Opens \"Same or different: near-misses\"; the drill runs at your current octave rung." }
```

## Between lessons

- **Finish the DAW task** if needed (it's a two-part job: write, then transpose).
- **Two Practice sessions of about 10 minutes**, whatever the Practice page serves first.
- **Keyboard, 2 minutes:** I–IV–V–I in C, G and F.
- **Ready?** Next week adds two more keys (D and B♭), then any key, and closes Phase 1 with a review. Look at the Dashboard: the degrees bar should be on G or F before random keys make sense — if it isn't, spend an extra session or two on Practice first.
