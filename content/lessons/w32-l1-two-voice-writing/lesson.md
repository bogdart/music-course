---
id: w32-l1-two-voice-writing
title: "Two Voices: Consonance, Dissonance and Parallels"
week: 32
order: 1
phase: p4
duration_min: 40
goals:
  - Hear every interval with both notes together, and sort them into perfect consonances, imperfect consonances and dissonances
  - Know why parallel fifths and octaves are avoided when two lines should stay independent
  - "Open the intervals rung with the rough intervals (M2, tritone, m7, M7) played together"
prerequisites: [w31-l3-solo-chorus-in-layers-daw, w10-l1-sixths-sevenths-and-the-fifth-trap]
tags: [counterpoint, intervals, ear]
songs:
  - { title: "Two-Part Inventions", composer: "J. S. Bach", public_domain: true }
---

# Two Voices: Consonance, Dissonance and Parallels

So far you have mostly thought *vertically*: chords, voicings, a melody on top. [[counterpoint]] thinks *horizontally*: two or more melodies, each good on its own, that also sound good together. Bach's Two-Part Inventions (public domain, well worth a listen) are the model: two hands, two melodies, no chords, yet you hear full harmony.

Two melodies at once means that at every moment you hear two notes **together**: a harmonic interval. This week is about those vertical sounds. Today: what they sound like and how counterpoint sorts them. Next lesson: the rules for writing a first line against a melody.

## Three kinds of interval

| Class | Intervals | In classical two-voice writing |
|-------|-----------|------------------|
| Perfect consonance | unison, 5th, octave | at the start and end; only now and then in between |
| Imperfect consonance | 3rds, 6ths | the backbone: used most |
| Dissonance | 2nds, 4ths, 7ths, tritone | avoided, or only in passing |

(The 4th is the odd one: between two voices, with nothing below, it counts as dissonant in this style.)

Listen to each class with both notes played together, all above C4.

```example
{
  "title": "Perfect consonances together: unison, 5th, octave",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 C4]:h r:h | [C4 G4]:h r:h | [C4 C5]:h r:h |" } ],
  "show": ["staff", "keyboard"]
}
```

```example
{
  "title": "Imperfect consonances together: minor 3rd, major 3rd, minor 6th, major 6th",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 Eb4]:h r:h | [C4 E4]:h r:h | [C4 Ab4]:h r:h | [C4 A4]:h r:h |" } ],
  "show": ["staff", "keyboard"]
}
```

```example
{
  "title": "Dissonances together: minor 2nd, major 2nd, 4th, tritone, minor 7th, major 7th",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C4 Db4]:h r:h | [C4 D4]:h r:h | [C4 F4]:h r:h | [C4 F#4]:h r:h | [C4 Bb4]:h r:h | [C4 B4]:h r:h |" } ],
  "show": ["staff", "keyboard"]
}
```

**What you will actually hear.** The perfect intervals sound hollow and blend almost into one note. 3rds and 6ths sound sweet, and you still hear two notes. The 2nds and 7ths *rub* (the minor 2nd and major 7th most of all: a buzzing, beating sound); the tritone rubs less but sounds restless. The 4th is the mildest. Some pairs will sound alike at first — that's normal.

### Try it

1. Hold C4 with your left thumb. With the right hand add, one at a time and held for two seconds each: C5, G4, E4, A4, D4, B4, F♯4.
2. For each, say one word out loud: **one** (it melts into a single note), **hollow** (two notes, open), **sweet** (two notes, warm), or **rough** (they rub or won't settle).
3. Now do the same with the pairs in random order, eyes closed, pressing keys you don't look at; open your eyes and name the interval.

**Check:** you should get *one* for C5, *hollow* for G4, *sweet* for E4 and A4, *rough* for D4, B4 and F♯4. If most of your words match, you are sorting by sound, which is all the drill asks.

**If you can't hear it yet:** compare only two extremes, C4+E4 against C4+D4, back and forth ten times. Then slide the upper note slowly from D4 to E4 and back: the moment the rub stops is what "consonant" means. Add the other intervals one at a time once that pair is obvious.

```exercise
{
  "id": "e1-play-rough",
  "type": "play-melody",
  "title": "Play the rough intervals together",
  "instructions": "Both notes at once, right hand: major 2nd, tritone, minor 7th, major 7th, each above C4. Let each ring and listen before moving on.",
  "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "[C4 D4]:w | [C4 F#4]:w | [C4 Bb4]:w | [C4 B4]:w |", "showStaff": true, "showKeyboard": true, "countIn": 1 }
}
```

Why does counterpoint prefer 3rds and 6ths? Perfect intervals blend so completely that two voices on them start to sound like one. Imperfect intervals are sweet *and* keep the two voices distinct. Dissonances pull the ear towards a resolution, so they are saved for moments where a line is passing through.

## Parallel fifths and octaves

That blending is also behind the one famous prohibition. If two voices move **in the same direction from one 5th to another 5th** (or from octave to octave), they are moving in [[parallel fifths]] (or octaves). For those moments the two lines fuse into one thick line, like an organ stop, and the texture stops sounding like two voices. Listen: the top line is the same in both halves; only the lower voice changes.

```example
{
  "title": "Parallel fifths (bars 1–4), then the same top line against 3rds and 6ths (bars 5–8)",
  "bpm": 72, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "strings", "seq": "G4:w | A4:w | B4:w | C5:w | G4:w | A4:w | B4:w | C5:w |" },
    { "instrument": "piano", "seq": "C4:w | D4:w | E4:w | F4:w | E4:w | F4:w | G4:w | E4:w |" }
  ],
  "show": ["staff"]
}
```

**What you will probably hear:** in the first half, a single hollow, rather bare line; in the second, two voices, sweeter. If the difference is subtle for you today, that is normal: hearing parallels inside moving lines is not something the ear drills train directly. Trust the rule for now; the DAW checks next lesson catch parallels for you.

### Try it

1. Play C3+G3, then D3+A3, then E3+B3 with one hand shape sliding up (parallel 5ths). Then play C3+E3, D3+F3, E3+G3 (parallel 3rds).
2. Listen for how many *lines* you hear moving: one thick line, or two?

**Check:** the 5ths tend to sound like one organ-like line moving; the 3rds like two singers. If both sound like "two notes moving", that's fine for now — the rule, not your ear, protects you this week.

**If you can't hear it yet:** play only the top notes of each version alone, then add the bottom back. With the 5ths, adding the bottom mostly makes the top line *thicker*; with the 3rds, it adds a second tune.

## Drills

```exercise
{
  "id": "e2-interval-quiz",
  "type": "quiz",
  "title": "Classify",
  "passScore": 0.7,
  "spec": { "questions": [
    { "q": "C3 below A3 forms a…", "choices": ["perfect consonance", "imperfect consonance", "dissonance"], "answer": 1, "explain": "C to A is a major 6th." },
    { "q": "D3 below G3 forms a…", "choices": ["perfect consonance", "imperfect consonance", "dissonance"], "answer": 2, "explain": "A perfect 4th counts as dissonant between two voices in this style." },
    { "q": "C4 below B4 forms a…", "choices": ["perfect consonance", "imperfect consonance", "dissonance"], "answer": 2, "explain": "C to B is a major 7th, one of the roughest sounds." },
    { "q": "Lower voice C→D, upper voice G→A. Problem?", "choices": ["none", "parallel 5ths", "parallel octaves", "dissonance"], "answer": 1, "explain": "C–G and D–A are both 5ths, moving in the same direction." },
    { "q": "Lower voice C→D, upper voice E→F. Problem?", "choices": ["none: parallel 3rds are fine", "parallel 5ths", "parallel octaves", "dissonance"], "answer": 0, "explain": "C–E is a major 3rd and D–F a minor 3rd: parallel 3rds, the sweetest kind of parallel motion." }
  ] }
}
```

```exercise
{
  "id": "e3-build-consonances",
  "type": "build-interval",
  "title": "Build consonances above a note",
  "count": 8, "passScore": 0.7,
  "spec": { "intervals": ["m3", "M3", "P5", "m6", "M6", "P8"], "direction": "asc", "root": "random" }
}
```

## Ear: both notes at once

**Method** (also in the *How to do it* box next to the drill): sort by feel first — one note (octave), open (4th/5th), sweet (3rds/6ths), rough (2nds, 7ths, tritone) — then choose inside the group. Among the rough ones ask how close the notes sound: crowded (2nd), almost an octave but grating (7th), or restless like a siren (tritone). The drill runs at your current rung; if that's an earlier one, its own box has the method.

```ladder
{ "skill": "intervals", "unlocks": 19, "intro": "Opens the rough intervals played together (M2, tritone, m7, M7); the drill runs at your current intervals rung." }
```

## Between lessons

Once a day, play the seven pairs from *Try it* with your eyes closed and name each one/hollow/sweet/rough (2 minutes). Listen to one of Bach's Two-Part Inventions and follow only the left hand for a minute.
