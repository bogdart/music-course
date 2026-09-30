---
id: w17-l1-sections-and-forms
title: Sections, Song Forms and Tempo
week: 17
order: 1
phase: p3
duration_min: 45
goals:
  - Name the job of each section - intro, verse, pre-chorus, chorus, bridge, outro
  - Recognise the forms AABA and verse-chorus (V-C-V-C-B-C)
  - Estimate the tempo of a groove by tapping along
prerequisites: [w16-l3-phase-2-review-and-sixteen-bar-song]
tags: [form, songwriting, tempo, ear]
songs: []
---

# Sections, Song Forms and Tempo

Welcome to Phase 3. Until now you have learned the *parts* of music — scales, chords, progressions, grooves. From
here on you build **songs**. Today brings three ideas: what each section of a song does, the two forms most songs use,
and how to measure a song's tempo by ear.

## Why sections exist

A listener can only follow a new song if things come back. But pure repetition is boring. Songs solve this with
[[section]]s: blocks of music that repeat as units and contrast with each other.

- **[[Intro]]** — sets the mood, often the chorus chords with fewer instruments.
- **[[Verse]]** — tells the story. Same music each time (new lyrics), usually lower and calmer.
- **[[Pre-chorus]]** — 2–4 bars that build tension, often stopping on V.
- **[[Chorus]]** — the payoff: highest notes, fullest band, and the [[hook]] (the short catchy bit you remember —
  next week is all about writing one).
- **[[Bridge]]** — heard once, something *different*, so the last chorus feels fresh.
- **[[Outro]]** — the ending: a fade or a final cadence.

Verse and chorus differ through four levers you already know: **register** (chorus melody higher), **rhythm**
(busier or longer notes), **harmony** (e.g. verse starts on vi, chorus on I) and **texture** (more instruments).

## Listen: one verse, one chorus

"Paper Boats" is an original 8-bar sketch: bars 1–4 are a verse, bars 5–8 a chorus.

### Try it

1. Play it once and only count bars aloud ("one-two-three-four, two-two-three-four…"). Say "now" when you feel the
   music change gear.
2. Play it again and listen to the **hi-hat only** (the ticking on top): does it tick slower or faster after the change?
3. Play it a third time and watch the piano roll: where does the melody's line jump up?

**Check:** the change is at bar 5 — the melody jumps up to G–C and the hi-hat doubles from quarters to eighths.

**If you can't hear it yet:** put a finger on the piano roll and follow the top track; then play E4 (where the verse
sits) and C5 (where the chorus sits) on your keyboard, one after the other. That height jump is what "the chorus
lifts" means.

```example
{
  "title": "Paper Boats - verse (bars 1-4) and chorus (bars 5-8)",
  "bpm": 96, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "E4:q E4:8 D4:8 C4:q E4:q | F4:q E4:8 D4:8 C4:h | E4:q G4:8 E4:8 D4:q C4:q | D4:h. r:q | G4:q C5:q C5:q. B4:8 | B4:q D5:q B4:h | A4:q C5:q E5:q. D5:8 | C5:h. r:q" },
    { "instrument": "piano", "seq": "[A3 C4 E4]:w | [F3 A3 C4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w | [A3 C4 E4]:w | [A3 C4 F4]:w" },
    { "instrument": "bass", "seq": "A2:h A2:h | F2:h F2:h | C3:h C3:h | G2:h G2:h | C3:q C3:q C3:q C3:q | G2:q G2:q G2:q G2:q | A2:q A2:q A2:q A2:q | F2:q F2:q F2:q F2:q" },
    { "instrument": "drums", "seq": "[kick hihat]:q [snare hihat]:q [kick hihat]:q [snare hihat]:q | [kick hihat]:q [snare hihat]:q [kick hihat]:q [snare hihat]:q | [kick hihat]:q [snare hihat]:q [kick hihat]:q [snare hihat]:q | [kick hihat]:q [snare hihat]:q [kick hihat]:q [snare hihat]:q | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" }
  ],
  "show": ["pianoroll"],
  "loop": false
}
```

The verse runs vi–IV–I–V; the chorus reorders the same four chords as I–V–vi–IV.

```chords
{ "key": "C", "bars": ["Am", "F", "C", "G", "C", "G", "Am", "F"], "roman": true, "play": true, "bpm": 96 }
```

## Two forms to know

**[[AABA]]** — four 8-bar sections: main tune, main tune, bridge, main tune. Common before the 1960s and in jazz
standards.

**Verse-chorus** — V-C-V-C-B-C, often with intro, pre-choruses and outro: I-V-PC-C-V-PC-C-B-C-C-O. This is the
default shape of modern pop.

```exercise
{
  "id": "form-quiz-v2",
  "type": "quiz",
  "title": "What does each section do?",
  "spec": { "questions": [
    { "q": "Which section usually has the highest melody and fullest arrangement?", "choices": ["Verse", "Chorus", "Intro", "Bridge"], "answer": 1, "explain": "The chorus is the payoff: highest notes, most instruments, the hook." },
    { "q": "Which section is normally heard only once?", "choices": ["Verse", "Chorus", "Bridge", "Pre-chorus"], "answer": 2, "explain": "The bridge is a one-time contrast before the last chorus." },
    { "q": "A pre-chorus most often stops on which chord?", "choices": ["I", "vi", "V", "iii"], "answer": 2, "explain": "Stopping on V creates tension that the chorus (often starting on I) releases." },
    { "q": "In AABA, how many different musical sections are there?", "choices": ["1", "2", "3", "4"], "answer": 1, "explain": "Just two: A (heard three times) and B (the bridge)." },
    { "q": "Verses usually share the same music but change...", "choices": ["the key", "the tempo", "the lyrics", "the time signature"], "answer": 2 },
    { "q": "Which lever does NOT normally create verse/chorus contrast?", "choices": ["Register", "Texture", "Changing the tempo", "Harmony"], "answer": 2, "explain": "Tempo stays constant in almost all pop songs; register, texture, rhythm and harmony change." }
  ] }
}
```

```exercise
{
  "id": "form-letters",
  "type": "quiz-input",
  "title": "Write the form",
  "spec": { "questions": [
    { "q": "Verse, chorus, verse, chorus, bridge, chorus - write it with letters V, C, B and no spaces or dashes.", "answer": ["VCVCBC"], "kind": "text" },
    { "q": "A 32-bar song: main tune, main tune, contrast, main tune. Write its letters.", "answer": ["AABA"], "kind": "text" },
    { "q": "How many bars long is each section of a standard 32-bar AABA song?", "answer": ["8"], "kind": "number" },
    { "q": "In Paper Boats, which bar does the chorus start on?", "answer": ["5"], "kind": "number" }
  ] }
}
```

## Tempo by ear

Because the tempo stays the same through a song, it is one of the first facts you note when you analyse one.
[[Tempo]] is counted in beats per minute (BPM). Two landmarks: **60 BPM** is one beat per second (a clock's tick);
**120 BPM** is two per second (a brisk walk). Ballads sit around 60–80, most pop around 90–120, dance music around
120–130.

The method: tap along with the beat — the kick-and-snare pulse you'd nod your head to — on the tap pad or space bar
for a few bars; the tap-tempo helper turns your taps into a number. The classic trap is tapping twice as fast (every
hi-hat) or half as fast (every snare only). The drill tells you when that happens; both answers are "the same groove",
but songs are labelled by the pulse you'd nod to. Here is one groove at 70 and then at 120.

### Try it

1. Play the 70 BPM version and tap once per kick or snare hit — not per hi-hat tick. Say the count "1-2-3-4" as you tap.
2. Now play the 120 BPM version and do the same. It should feel almost twice as quick.
3. Compare each with a clock in your head: 70 is a little slower than one tap per second, 120 is two per second.

**Check:** tapping the 70 version, your tap lands a little more slowly than one per second; if you were tapping
about twice per second, you were following the hi-hat — halve it.

**If you can't hear it yet:** turn on the DAW metronome at 60 and tap with it for ten clicks, then 120 for ten clicks.
Keep those two feels as your rulers; every tempo you meet is "slower than 60", "between" or "faster than 120".

```example
{
  "title": "The same beat at 70 BPM",
  "bpm": 70, "timeSig": "4/4",
  "tracks": [ { "instrument": "drums", "seq": "[kick hihat]:q [snare hihat]:q [kick hihat]:q [snare hihat]:q | [kick hihat]:q [snare hihat]:q [kick hihat]:8 kick:8 [snare hihat]:q" } ],
  "loop": false
}
```

```example
{
  "title": "The same beat at 120 BPM",
  "bpm": 120, "timeSig": "4/4",
  "tracks": [ { "instrument": "drums", "seq": "[kick hihat]:q [snare hihat]:q [kick hihat]:q [snare hihat]:q | [kick hihat]:q [snare hihat]:q [kick hihat]:8 kick:8 [snare hihat]:q" } ],
  "loop": false
}
```

**Before the drill** (the same method sits in the *How to do it* box next to it): tap along for a few seconds with the
pulse you'd nod your head to, let the tapper measure, then sanity-check against 60 = one per second. If the drill
shows an earlier rhythm rung, its own box has the method for that one.

```ladder
{ "skill": "rhythm", "unlocks": 12, "intro": "Opens: tap along with a drum groove and estimate its BPM - within 8 either way counts. The drill runs at your current rhythm rung." }
```

## Hands on

Play the Paper Boats verse and chorus chords. Keep your hand around C4 by choosing inversions that move as little as
possible.

```exercise
{
  "id": "play-verse-chorus",
  "type": "play-chord",
  "title": "Play the verse, then the chorus",
  "instructions": "Am F C G, then C G Am F - smooth inversions around C4.",
  "spec": { "chords": ["Am", "F", "C", "G", "C", "G", "Am", "F"], "inversion": "any", "sequence": true, "bpm": 70 }
}
```

Verses and choruses often reorder the same four chords, so keep your ear on progressions too. Method (see the
*How to do it* box): find home first, then follow the bass note of each chord and name its role.

```ladder
{ "skill": "progressions", "unlocks": 11, "intro": "Review: name the chords at your current rung." }
```

**Make the chorus lift — the procedure:**

1. Enter the bass first: half-note roots A, F, C, G in bars 1–4, quarter-note roots C, G, A, F in bars 5–8.
2. Play it back before touching the drums. Already a small lift? Good — the bass rhythm alone does part of the job.
3. Change the hi-hats in bars 5–8 to eighths, keep kick and snare as they are.
4. **Judge it by ear:** loop bars 3–6. The moment bar 5 arrives should feel like "more", not "different song".
5. **If you're stuck:** if nothing lifts, check the bass track really has four notes per bar in bars 5–8; if it lifts
   too much (sounds frantic), keep the bass busier but the hi-hats on quarters.

```exercise
{
  "id": "daw-lift-the-chorus",
  "type": "daw-task",
  "title": "Make the chorus lift",
  "spec": {
    "template": { "bpm": 96, "key": "C", "tracks": [
      { "instrument": "piano", "seq": "[A3 C4 E4]:w | [F3 A3 C4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w | [A3 C4 E4]:w | [A3 C4 F4]:w" },
      { "instrument": "drums", "seq": "[kick hihat]:q [snare hihat]:q [kick hihat]:q [snare hihat]:q | [kick hihat]:q [snare hihat]:q [kick hihat]:q [snare hihat]:q | [kick hihat]:q [snare hihat]:q [kick hihat]:q [snare hihat]:q | [kick hihat]:q [snare hihat]:q [kick hihat]:q [snare hihat]:q | [kick hihat]:q [snare hihat]:q [kick hihat]:q [snare hihat]:q | [kick hihat]:q [snare hihat]:q [kick hihat]:q [snare hihat]:q | [kick hihat]:q [snare hihat]:q [kick hihat]:q [snare hihat]:q | [kick hihat]:q [snare hihat]:q [kick hihat]:q [snare hihat]:q" },
      { "instrument": "bass", "seq": "" }
    ] },
    "task": "Right now verse and chorus sound the same. On the bass track play half-note roots in bars 1-4 (A, F, C, G) and quarter-note roots in bars 5-8 (C, G, A, F). Then make the drums of bars 5-8 busier with eighth-note hi-hats. Play it back: does the chorus lift? About 15 minutes.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "drums", "bass"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "plays-progression", "progression": ["vi", "IV", "I", "V", "I", "V", "vi", "IV"], "barsPerChord": 1, "mode": "roots", "track": 2 },
      { "kind": "note-count", "min": 20, "max": 40, "track": 2 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "snareOnBeats": [2, 4], "track": 1 },
      { "kind": "drum-pattern", "hatOn": "8", "bars": [5, 8], "track": 1 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "reflect-favourite-form",
  "type": "reflect",
  "spec": { "prompt": "Pick a song you know well. Write its sections in order as you remember them (intro, verse, chorus...). Where does the energy jump most? What changes at that moment - the melody, the drums, the number of instruments?", "minWords": 30 }
}
```

## Between lessons

Pick one song a day, tap its tempo for ten seconds, and note where the first chorus starts (in seconds). Two
minutes each.
