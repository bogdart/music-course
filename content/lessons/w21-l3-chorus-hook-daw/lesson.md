---
id: w21-l3-chorus-hook-daw
title: "From a 2-Bar Motif to a Chorus Hook"
week: 21
order: 3
phase: p3
duration_min: 50
goals:
  - Capture a 2-bar motif by improvising (or step-entering) over a looping progression
  - Build an 8-bar chorus from it (A A' A B) that fits the chords and has one climax
  - Finish the chorus with a bass line and drums that lock together
prerequisites: [w21-l2-range-climax-hook]
tags: [melody, hook, daw, songwriting, ear]
songs: []
---

# From a 2-Bar Motif to a Chorus Hook

Today you write a real chorus. The method below is the one you will use for the rest of the year, so follow the steps even if an idea arrives early.

## The hook workflow

1. **Loop the chords.** Put the chorus progression on a 2-bar loop and let it play.
2. **Improvise badly, a lot.** Record 6–8 passes of anything on the keyboard (or step-enter little ideas). Don't judge yet.
3. **Pick the best 2 bars.** Listen back and keep the passage you remember afterwards. That is your [[motif]].
4. **Shape it A A' A B.** Copy, change the ending, copy, write a payoff with the [[climax]].
5. **Check it against the chords.** Strong beats (1 and 3) should mostly land on chord tones.
6. **Lock the groove.** Bass rhythm follows the kick; the melody sits on top.

Here is the result of that workflow in F major (I–V–vi–IV). The motif is bars 1–2; bar 7 sequences it up to reach the climax F5.

```example
{
  "title": "Finished chorus in F - motif, repeat, payoff",
  "bpm": 98, "timeSig": "4/4", "key": "F",
  "tracks": [
    { "instrument": "lead", "seq": "r:q A4:8 C5:8 D5:q C5:8 A4:8 | G4:h. r:q | r:q A4:8 C5:8 D5:q C5:8 A4:8 | Bb4:h. r:q | r:q A4:8 C5:8 D5:q C5:8 A4:8 | G4:h. r:q | r:q D5:8 E5:8 F5:q E5:8 D5:8 | D5:w" },
    { "instrument": "piano", "seq": "[F3 A3 C4]:w | [E3 G3 C4]:w | [F3 A3 D4]:w | [F3 Bb3 D4]:w | [F3 A3 C4]:w | [E3 G3 C4]:w | [F3 A3 D4]:w | [F3 Bb3 D4]:w" },
    { "instrument": "bass", "seq": "F2:h F2:8 F2:8 r:q | C2:h C2:8 C2:8 r:q | D2:h D2:8 D2:8 r:q | Bb1:h Bb1:8 Bb1:8 r:q | F2:h F2:8 F2:8 r:q | C2:h C2:8 C2:8 r:q | D2:h D2:8 D2:8 r:q | Bb1:h Bb1:8 Bb1:8 r:q" },
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

Look at the kick (beats 1, 3 and 3-and) and the bass: same rhythm. That lock is what makes a groove feel solid.

**Try it:** while it loops, tap the lowest thud you hear with your left hand on the table (kick) for four bars; then
switch to following the bass notes. **Check:** your tapping pattern doesn't change when you switch — boom… boom-boom,
on 1, 3 and 3-and. **If you can't hear it yet:** compare the bass and drum rows in the piano roll: the bass blocks start
exactly above the kick hits.

```chords
{ "key": "F", "bars": ["F", "C", "Dm", "Bb"], "roman": true, "play": true, "bpm": 98 }
```

## Warm up the hands

```exercise
{
  "id": "play-f-progression",
  "type": "play-chord",
  "title": "I-V-vi-IV in F",
  "instructions": "F - C - Dm - Bb, smooth inversions around F3-D4.",
  "spec": { "chords": ["F", "C", "Dm", "Bb"], "inversion": "any", "sequence": true, "bpm": 80 }
}
```

## Write it

Judging and getting unstuck, step by step:

* **Motif (steps 1–3).** *Try first:* only two or three notes, mostly F, A and C, with one rest. *Judge it by ear:*
  close the lesson for a minute; the motif you can still tap afterwards is the keeper. *If you're stuck:* take the
  example's rhythm (rest, short-short, long) and put your own notes in it.
* **Chorus (steps 4–5).** *Judge it by ear:* loop all 8 bars; any note that makes you wince on beat 1 or 3 is probably
  not a chord tone — move it one key up or down until it melts into the chord. *If you're stuck on the payoff:* copy
  the motif and start it three or four notes higher, as the example does in bar 7.
* **Groove (step 6).** *Judge it by ear:* the bass and kick should sound like one instrument with a pitch. *If it
  feels messy:* delete bass notes that don't sit on a kick.

```exercise
{
  "id": "daw-capture-motif-ref",
  "type": "daw-task",
  "title": "Steps 1-3: capture a 2-bar motif",
  "spec": {
    "template": { "bpm": 98, "key": "F", "tracks": [
      { "instrument": "piano", "seq": "[F3 A3 C4]:w | [E3 G3 C4]:w | [F3 A3 D4]:w | [F3 Bb3 D4]:w | [F3 A3 C4]:w | [E3 G3 C4]:w | [F3 A3 D4]:w | [F3 Bb3 D4]:w" },
      { "instrument": "lead", "seq": "" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "drums", "seq": "" }
    ] },
    "projectRef": "w18-chorus",
    "task": "This project holds the whole chorus (you will keep working in it for all three steps). Loop bars 1-2 (F - C) and improvise on the lead track: record six or more passes live, or step-enter ideas one after another. Keep only your favourite 2 bars, in bars 1-2. Use at least two note lengths and leave some space. About 10 minutes.",
    "checks": [
      { "kind": "in-key", "key": "F", "scale": "major", "track": 1 },
      { "kind": "note-count", "min": 4, "max": 12, "track": 1 },
      { "kind": "uses-rhythm", "values": ["8", "q", "h"], "minDistinct": 2, "track": 1 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "daw-build-chorus-ref",
  "type": "daw-task",
  "title": "Steps 4-5: build the 8-bar chorus",
  "spec": {
    "template": { "bpm": 98, "key": "F", "tracks": [
      { "instrument": "piano", "seq": "[F3 A3 C4]:w | [E3 G3 C4]:w | [F3 A3 D4]:w | [F3 Bb3 D4]:w | [F3 A3 C4]:w | [E3 G3 C4]:w | [F3 A3 D4]:w | [F3 Bb3 D4]:w" },
      { "instrument": "lead", "seq": "" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "drums", "seq": "" }
    ] },
    "projectRef": "w18-chorus",
    "task": "Your motif is in bars 1-2. Bars 3-4: repeat it with a new ending that fits Dm - Bb. Bars 5-6: exact repeat of bars 1-2. Bars 7-8: a payoff containing your single highest note. Keep it between C4 and F5; check that beats 1 and 3 mostly land on chord tones. About 15 minutes.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "F", "scale": "major", "track": 1 },
      { "kind": "repetition", "motifBars": 2, "minRepeats": 2, "allowTransposed": false, "track": 1 },
      { "kind": "chord-tones-on-beats", "beats": [1, 3], "progression": ["I", "V", "vi", "IV", "I", "V", "vi", "IV"], "barsPerChord": 1, "minRatio": 0.7, "track": 1 },
      { "kind": "range", "low": "C4", "high": "F5", "track": 1 },
      { "kind": "max-leap", "semitones": 9, "track": 1 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "daw-lock-groove-ref",
  "type": "daw-task",
  "title": "Step 6: bass and drums",
  "spec": {
    "template": { "bpm": 98, "key": "F", "tracks": [
      { "instrument": "piano", "seq": "[F3 A3 C4]:w | [E3 G3 C4]:w | [F3 A3 D4]:w | [F3 Bb3 D4]:w | [F3 A3 C4]:w | [E3 G3 C4]:w | [F3 A3 D4]:w | [F3 Bb3 D4]:w" },
      { "instrument": "lead", "seq": "" },
      { "instrument": "bass", "seq": "" },
      { "instrument": "drums", "seq": "" }
    ] },
    "projectRef": "w18-chorus",
    "task": "Program a drum beat with kick on 1 and 3 (add 3-and if you like), snare on 2 and 4 and eighth-note hi-hats. Then write a root bass line whose notes start where the kick hits, like the example. About 15 minutes - if time runs out, finish it at the start of next session (the project is saved).",
    "checks": [
      { "kind": "has-tracks", "instruments": ["piano", "lead", "bass", "drums"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "kickOnBeats": [1, 3], "snareOnBeats": [2, 4], "track": 3 },
      { "kind": "plays-progression", "progression": ["I", "V", "vi", "IV"], "barsPerChord": 1, "mode": "roots", "track": 2 },
      { "kind": "range", "low": "E1", "high": "C3", "track": 2 },
      { "kind": "custom", "id": "bass-on-kick", "note": "Self-check: every bass note starts on a kick hit." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

## Ear

Your payoff in bars 7-8 probably jumps somewhere. Melodies with leaps have been in the drill since week 18; this is a review at your current melody rung.

**Before the drill** (method also in the *How to do it* box): for a leap, guess its size first with your interval
anchors (a 4th? a 5th? an octave?), then check it on the keyboard. The box beside the drill covers whichever rung you are on.

```ladder
{ "skill": "melody", "unlocks": 22, "intro": "Review: play back the melody you hear - leaps included - at your current rung." }
```

```exercise
{
  "id": "reflect-chorus",
  "type": "reflect",
  "spec": { "prompt": "Play your chorus three times in a row. Which bar is the strongest? Which would you rewrite tomorrow? The project is saved as your \"week 21 chorus\". In week 27 you will reharmonise it, re-entering the melody in a fresh project so this one stays as it is.", "minWords": 25 }
}
```

## Between lessons

Play your chorus once a day and change at most one note — usually the one on a strong beat that rubs. If the groove
task isn't finished, finish it first.
