---
id: w10-l2-any-key-home-from-the-cadence
title: "Any Key: Home from the Cadence"
week: 10
order: 2
phase: p1
duration_min: 45
goals:
  - Understand that a degree feels the same in all twelve major keys; only home moves
  - "Set home from the cadence in any key: let it finish, hold its last bass note, press Reference when home slips"
  - Echo tunes and write them as degrees in any key; name I, IV, V and vi in any key
prerequisites: [w10-l1-near-keys-d-and-b-flat]
tags: [keys, ear, degrees, melody, progressions, keyboard]
---

# Any key: home from the cadence

There are twelve major keys, one on every key of the octave. You've played five. You don't need to know the other seven's sharps and flats to *hear* in them, because the ear can work in *jobs* instead of letters: after a cadence in E♭ major, E♭'s degree 3 (G) does the same job as mi in C — at rest, bright, sitting on top of home. At first it may not *feel* the same: the height is different and the new home takes a moment to settle. The resemblance grows with practice; the method works from today. **The degrees are the same in every key. Only home moves.** Today the drills take the last step of Phase 1: any major key, still one octave.

## Same feeling, twelve homes

```example
{
  "title": "Cadence then 3 in C; cadence then 3 in A; cadence then 3 in E♭",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C3 C4 E4 G4]:q [F3 C4 F4 A4]:q [G3 B3 D4 G4]:q [C3 C4 E4 G4]:q | E4:w | [A2 A3 C#4 E4]:q [D3 A3 D4 F#4]:q [E3 G#3 B3 E4]:q [A2 A3 C#4 E4]:q | C#4:w | [Eb3 Eb4 G4 Bb4]:q [Ab3 Eb4 Ab4 C5]:q [Bb3 D4 F4 Bb4]:q [Eb3 Eb4 G4 Bb4]:q | G4:w" } ],
  "show": ["keyboard"]
}
```

**Try it:**

1. Listen to the example. Three different notes — E, C♯, G — and three times the same job: at rest, sitting on top of home. That's mi. If they just sound like three different notes, replay each cadence + note on its own and ask only "at rest or leaning?" — that part usually carries over first.
2. Play the A cadence yourself (exercise below): A C♯ E → A D F♯ → G♯ B E → A C♯ E. The shapes are the ones you know from C, moved.
3. Play the A cadence, then A3 (home), then E4 (5, open), then G♯3 (7, leaning up into A). Walk each one home.

```exercise
{
  "id": "k1",
  "type": "play-chord",
  "title": "The cadence in A and in E♭",
  "instructions": "A C♯ E → A D F♯ → G♯ B E → A C♯ E; then E♭ G B♭ → E♭ A♭ C → D F B♭ → E♭ G B♭. Same hand shapes as in C.",
  "passScore": 0.7,
  "spec": { "chords": ["A", "D", "E", "A", "Eb", "Ab", "Bb", "Eb"], "inversion": "any", "sequence": true, "bpm": 50 }
}
```

## The routine: let the cadence finish

With a new key each question, *home is the only thing you have to get right first* — everything else is the method you already use. The routine, from the drill's **How to do it** box:

1. **Let the cadence finish.** Don't guess during it. Listen to the last chord ring.
2. **Hold its last bass note as 1.** Hum it quietly if that helps, or find it on the keyboard and play it.
3. **Then the question note**, with your one-key method: at rest or leaning, which way, walk home.
4. **Press Reference whenever home slips** — especially on the first question after a big jump in key, when the old home is still in your ear.

Honest expectation: a new home every question is **hard at first**, for everyone. Expect your accuracy to drop well below what you had in C, and to climb back over one or two weeks of practice. The drop is the old home refusing to leave; the Reference button is how you evict it.

**If you can't hear it yet:** go fully by keyboard. Find home (the cadence's last bass note), find the question note, then count scale steps up from home with the step pattern W-W-H-W-W-W-H. You don't need to know the key's name.

```exercise
{
  "id": "k2",
  "type": "play-notes",
  "title": "Degrees in A major",
  "instructions": "Home is A3. Count up with W-W-H-W-W-W-H: A B C♯ D E F♯ G♯ A = 1 2 3 4 5 6 7 1.",
  "count": 8,
  "passScore": 0.75,
  "spec": { "prompt": "degrees", "notes": ["A3", "C#4", "E4", "B3", "D4", "F#4", "G#4", "A4"], "ordered": true, "key": "A" }
}
```

Try it in two keys you haven't drilled — unscored, just to see where you are. For each: find home, name the note
(say it aloud or write it down), then press "Reveal notation" and count on the keyboard picture from the cadence's
last bass note.

```exercise
{
  "id": "c1",
  "type": "listen",
  "title": "Try it: find home, then the note (not scored)",
  "instructions": "Each example plays a cadence in a key you haven't drilled, then one note. Hold the last bass note as 1, name the note, then reveal and count.",
  "spec": {
    "examples": [
      { "title": "Question 1", "bpm": 80, "timeSig": "4/4", "key": "A", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[A2 A3 C#4 E4]:q [D3 A3 D4 F#4]:q [E3 G#3 B3 E4]:q [A2 A3 C#4 E4]:q | r:h G#4:h" } ], "show": ["keyboard"] },
      { "title": "Question 2", "bpm": 80, "timeSig": "4/4", "key": "Eb", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "[Eb3 Eb4 G4 Bb4]:q [Ab3 Eb4 Ab4 C5]:q [Bb3 D4 F4 Bb4]:q [Eb3 Eb4 G4 Bb4]:q | r:h F4:h" } ], "show": ["keyboard"] }
    ]
  }
}
```

```ladder
{ "skill": "degrees", "unlocks": 18, "intro": "Opens \"Any major key\": a new home each question from all twelve, one octave." }
```

## Echoes in any key, then as degrees

The melody ladder opens two rungs. First, five-note echoes in any major key: find home from the cadence on the keyboard, then the first note relative to home, then the path. Then the harder one: **write the tune as degrees** in any key. The routine from its **How to do it** box:

1. **Play it back first**, on the keyboard, any octave — the echo you already know how to do.
2. Then, with home under your thumb, **count each note's steps up from home** and write the numbers.
3. Check your numbers by feel: does the last note feel at rest? Most tunes end on 1, 3 or 5.

```example
{
  "title": "Echo me, then write it as degrees",
  "bpm": 80, "timeSig": "4/4", "key": "A", "hidden": true,
  "tracks": [ { "instrument": "piano", "seq": "[A2 A3 C#4 E4]:q [D3 A3 D4 F#4]:q [E3 G#3 B3 E4]:q [A2 A3 C#4 E4]:q | r:w | C#4:q D4:q E4:q B3:q | A3:w" } ],
  "show": ["keyboard"]
}
```

**Try it:** echo the hidden tune, then write it as degrees on paper. Reveal: C♯ D E B A in A major = 3 4 5 2 1.

```ladder
{ "skill": "melody", "unlocks": 16, "intro": "Opens echoes in any key, then writing them as degrees; the drill runs at your current rung." }
```

## The four chords in any key

The progressions ladder does the same with I, IV, V and vi. Find home from the cadence's bass; then name each chord by its role — rest (I), lift (IV), pull (V), sad (vi) — and check with the bass: count its steps up from home (1, 4, 5 or 6).

```ladder
{ "skill": "progressions", "unlocks": 6, "intro": "Opens \"Four chords, any key\"; the drill runs at your current rung." }
```

## Between lessons

- **Two Practice sessions of about 10 minutes.** Any-key questions: play the cadence's last bass note yourself before every answer, for a whole session. Then try a session without.
- **Keyboard, 2 minutes:** pick a random black or white key as home, play the cadence shapes from it, then walk up its scale with W-W-H-W-W-W-H.
- **Next lesson is the Phase 1 review.** Nothing new — it shows where every ladder stands.
