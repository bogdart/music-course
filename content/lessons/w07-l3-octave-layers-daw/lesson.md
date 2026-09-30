---
id: w07-l3-octave-layers-daw
title: "Octave Layers (DAW)"
week: 7
order: 3
phase: p1
duration_min: 50
goals:
  - Double a melody an octave higher and hear what doubling adds (a thicker, brighter line, the same tune)
  - "Put a bass line one or two octaves below the chords and give each layer its own register"
  - "Find a heard note on the keyboard when it may sit in octave 3 or 4: decide the register first"
prerequisites: [w07-l2-every-degree-in-every-octave]
tags: [daw, octaves, register, arrangement, bass, ear]
---

# Octave layers

This week you've been naming notes in other octaves. Today you *use* octaves, the way every arranger does: the same line in two octaves at once, and a bass far below the chords. In the DAW, octaves are the easiest sound of all to hear — played **together**, an octave melts into one richer note. That's the first thing the octave drills taught you in week 1, and it's the reason octave doubling is everywhere in pop, film and dance music.

## Doubling a melody

```example
{
  "title": "Mary's first line: alone, then doubled an octave up, then doubled an octave down",
  "bpm": 96, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "piano", "seq": "E4:q D4:q C4:q D4:q | E4:q E4:q E4:h | E4:q D4:q C4:q D4:q | E4:q E4:q E4:h | E4:q D4:q C4:q D4:q | E4:q E4:q E4:h" },
    { "instrument": "strings", "seq": "r:w | r:w | E5:q D5:q C5:q D5:q | E5:q E5:q E5:h | E3:q D3:q C3:q D3:q | E3:q E3:q E3:h" }
  ],
  "show": ["pianoroll"]
}
```

**Try it:**

1. Play E4 and E5 together, then E4 and F5 together. The octave melts; the other one rubs. That's the difference between a doubling and a wrong note.
2. Play Mary's first line with both hands, **an octave apart**: right thumb on C4, left thumb on C3. Same fingers, mirrored hands (exercise below).
3. Listen to the example: the doubled versions are still Mary — fuller, not a second tune. The upper double adds brightness; the lower one weight.

```exercise
{
  "id": "k1",
  "type": "play-melody",
  "title": "Mary with both hands, an octave apart",
  "instructions": "Right hand from C4, left hand from C3. Slow is fine. On a small keyboard, C3 to C5 fits on 25 keys.",
  "passScore": 0.7,
  "spec": { "bpm": 70, "timeSig": "4/4", "key": "C", "seq": "E4:q D4:q C4:q D4:q | E4:q E4:q E4:h", "tracks": [ { "instrument": "piano", "seq": "E3:q D3:q C3:q D3:q | E3:q E3:q E3:h" } ], "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

## Every layer its own register

A song has jobs, and each job usually lives in its own height:

| Layer | Register | Why there |
|---|---|---|
| Bass | low: octave 2–3 | the floor; tells the ear which chord it is |
| Chords (pad) | middle: octave 3–4 | the colour, under the tune |
| Melody | middle-high: octave 4–5 | the part you remember, on top |
| Doubling | an octave above or below the melody | thickness, without a new line |

The bass plays the chords' **roots**, an octave or two below the chords: under C E G, a low C. The root you've been searching for in the roots drills is exactly this note, just lower.

```example
{
  "title": "C – F – G – C: pad only, then with the bass an octave below (C2 F2 G2 C2)",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "pad", "seq": "[C3 E3 G3]:w | [C3 F3 A3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w | [C3 E3 G3]:w | [C3 F3 A3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w" },
    { "instrument": "bass", "seq": "r:w | r:w | r:w | r:w | C2:w | F2:w | G2:w | C2:w" }
  ],
  "show": ["pianoroll"]
}
```

**Try it:** play C E G with the right hand and C3 with the left, then C2 if your keyboard reaches it (or use the on-screen keys). Then F A C over F2, G B D over G2. Does the low note make the chord feel more solid?

## Finding notes across two octaves

The pitch ladder's last rung opens today: hear a note and find the exact key, but now it may sit in **octave 3 or octave 4**. The trick is to cut the search in two.

1. **Register first:** does it sound low (octave 3, below middle C) or middle (octave 4)? When unsure, play C3 and C4 and ask which is closer.
2. **Then search** from the C of that octave, as always: higher or lower? move, compare, until your key and the note merge.
3. **Right name, wrong octave?** The drill tells you. Jump by 12 keys — you already know how.

```exercise
{
  "id": "c1",
  "type": "listen",
  "title": "Check: low or middle?",
  "instructions": "Each note is in octave 3 or octave 4. Decide, then find it on your keyboard.",
  "spec": {
    "examples": [
      { "title": "Note 1", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "A3:w" } ] },
      { "title": "Note 2", "bpm": 60, "timeSig": "4/4", "key": "C", "hidden": true, "tracks": [ { "instrument": "piano", "seq": "D4:w" } ] }
    ],
    "questions": [
      { "q": "Note 1 is in…", "choices": ["octave 3 (low)", "octave 4 (middle)"], "answer": 0, "explain": "A3, just below middle C." },
      { "q": "Note 2 is in…", "choices": ["octave 3 (low)", "octave 4 (middle)"], "answer": 1, "explain": "D4, just above middle C." }
    ]
  }
}
```

```ladder
{ "skill": "pitch", "unlocks": 10, "intro": "Opens \"Find it: two octaves\": decide low or middle first, then search." }
```

## DAW: your octave arrangement

**Work order:**

1. The pad already plays C – F – G – C. Loop it.
2. **Track 1 (piano):** a 4-bar melody in C4–C5. Chord notes on beat 1 of each bar (C E G over C, F A C over F, G B D over G), anything from the scale between. End on C.
3. **Track 2 (strings):** copy the melody and move every note up **12 keys** (select all, transpose +12 — or re-enter it an octave higher). Same rhythm, same time.
4. **Track 3 (bass):** the root of each bar's chord, low: C, F, G, C, in octave 2 or 3.
5. Listen with the strings muted, then unmuted. Then solo the bass. You're hearing registers.

```exercise
{
  "id": "e1",
  "type": "daw-task",
  "title": "Melody in octaves over a low bass",
  "spec": {
    "template": { "bpm": 90, "key": "C", "tracks": [ { "instrument": "piano", "seq": "" }, { "instrument": "strings", "seq": "" }, { "instrument": "bass", "seq": "" }, { "instrument": "pad", "seq": "[C3 E3 G3]:w | [C3 F3 A3]:w | [B2 D3 G3]:w | [C3 E3 G3]:w" } ] },
    "task": "Over the given pad (C – F – G – C, one chord per bar): Track 1 (piano), a 4-bar melody in C major between C4 and C5, with a chord note on beat 1 of each bar, ending on C. Track 2 (strings): the same melody exactly one octave higher, at the same time. Track 3 (bass): the root of each chord (C, F, G, C), one or two octaves below the melody, between C2 and B3. Then mute and unmute the strings and listen to what the doubling adds.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "strings", "bass"] },
      { "kind": "bars", "min": 4, "max": 4 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 0 },
      { "kind": "range", "low": "C4", "high": "C5", "track": 0 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["I", "IV", "V", "I"], "barsPerChord": 1, "minRatio": 0.75, "track": 0 },
      { "kind": "ends-on", "degree": 1, "track": 0 },
      { "kind": "is-transposition", "of": 0, "track": 1, "semitones": 12, "sameTime": true },
      { "kind": "plays-progression", "progression": ["I", "IV", "V", "I"], "barsPerChord": 1, "mode": "roots", "track": 2 },
      { "kind": "range", "low": "C2", "high": "B3", "track": 2 },
      { "kind": "custom", "id": "mute", "note": "I listened with the strings muted and unmuted, and heard what the octave doubling adds." }
    ],
    "minBars": 4, "maxBars": 4
  }
}
```

## Between lessons

- **Finish the arrangement** if it didn't fit, then try one variation: double the melody an octave *down* instead of up. Which do you prefer?
- **Two Practice sessions of about 10 minutes.** Degrees in other octaves are the long job this week; use "move it home" on every unsure item.
- **Keyboard, 2 minutes:** a C major scale with both hands an octave apart, slowly.
- **Ready?** Next week reaches *below* do: the notes just under home. No need to master other octaves first — the ladder keeps each rung at your pace.
