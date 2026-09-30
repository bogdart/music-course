---
id: w32-l4-counter-melody-daw
title: A Counter-Melody for a Chorus
week: 32
order: 4
phase: p4
duration_min: 50
goals:
  - Write a counter-melody that moves when the main melody holds
  - Use contrary motion and imperfect consonances against the hook
  - Arrange lead, pad and strings so each line is audible
prerequisites: [w32-l3-contrary-motion-and-parallels, w21-l1-frequency-roles-and-doubling]
tags: [counterpoint, arrangement, daw, counter-melody]
---

# A Counter-Melody for a Chorus

Species rules are the gym; this is the match. A [[counter-melody]] is a second melodic line — strings behind a vocal, a synth answering the hook — that makes a chorus feel bigger without adding more chords.

Three principles from counterpoint do most of the work:

1. **Rhythmic complement.** Move when the melody holds; hold when it moves. The ear follows whichever line is active, so the two lines take turns.
2. **Contrary motion** at important moments, especially into the downbeats.
3. **Stay out of the way.** A different register (here, below the hook), mostly 3rds and 6ths against it, and no parallel 5ths or octaves.

## The chorus

An original 8-bar hook over C | G | Am | F | C | G | F | C, with a string counter-melody. Solo each line and then play them together.

```example
{
  "title": "Hook (lead), counter-melody (strings), chords (pad)",
  "bpm": 96, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "G4:q C5:q E5:h | D5:q. C5:8 B4:h | C5:q E5:q A5:h | G5:q. F5:8 F5:h | E5:q G5:q E5:q C5:q | D5:h B4:h | A4:q C5:q F5:q E5:q | C5:w |" },
    { "instrument": "strings", "seq": "C4:h G4:q F4:q | G4:h F4:q D4:q | E4:h C4:q B3:q | C4:h A3:h | C4:w | B3:h D4:q F4:q | F4:h A4:h | E4:w |" },
    { "instrument": "pad", "seq": "[C3 G3]:w | [B2 G3]:w | [A2 E3]:w | [A2 F3]:w | [C3 G3]:w | [B2 G3]:w | [A2 F3]:w | [C3 G3]:w |" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

Look at bars 1–2 in the piano roll: the hook climbs and then *sits* on E5 and B4; the strings wake up exactly there. In bar 5 the hook runs in quarters, so the strings hold one long C. That's rhythmic complement.

Notice also the pad: only two notes, low. With a lead and a counter-line, you don't need thick chords — the lines *are* the harmony.

### Try it

1. Loop the example. First pass: follow only the hook. Second pass: follow only the strings — tap the table each time the strings play a new note.
2. Third pass: tap only when the *hook* plays a new note, with the other hand.

**Check:** your two hands should mostly take turns — lots of taps from one while the other rests. That turn-taking is what makes the counter-line audible.

**If you can't hear it yet:** play the two drills below first — playing a line against the other is the fastest way to hear it. Then come back and loop the example again.

## Drills

```exercise
{
  "id": "e1-play-counter",
  "type": "play-melody",
  "title": "Play the counter-melody against the hook",
  "passScore": 0.7,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "C4:h G4:q F4:q | G4:h F4:q D4:q | E4:h C4:q B3:q | C4:h A3:h | C4:w | B3:h D4:q F4:q | F4:h A4:h | E4:w |", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "lead", "seq": "G4:q C5:q E5:h | D5:q. C5:8 B4:h | C5:q E5:q A5:h | G5:q. F5:8 F5:h | E5:q G5:q E5:q C5:q | D5:h B4:h | A4:q C5:q F5:q E5:q | C5:w |" } }
}
```

```exercise
{
  "id": "e2-play-hook",
  "type": "play-melody",
  "title": "Now play the hook against the counter-melody",
  "passScore": 0.7,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "G4:q C5:q E5:h | D5:q. C5:8 B4:h | C5:q E5:q A5:h | G5:q. F5:8 F5:h | E5:q G5:q E5:q C5:q | D5:h B4:h | A4:q C5:q F5:q E5:q | C5:w |", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "strings", "seq": "C4:h G4:q F4:q | G4:h F4:q D4:q | E4:h C4:q B3:q | C4:h A3:h | C4:w | B3:h D4:q F4:q | F4:h A4:h | E4:w |" } }
}
```

**Writing your counter-melody:**

1. Loop the hook and write down (or mark) the bars where it holds a long note: the second half of bars 1–4, and all of bars 6 and 8.
2. **Long notes first:** where the hook moves in quarters (bars 5 and 7, the first half of bars 1–4), give the strings one whole or half note — a chord tone of that bar's chord, a 3rd or 6th below the hook.
3. **Then the moves:** where the hook holds, add two or three stepwise notes that lead to the next bar's long note.
4. At the start of each bar, check the interval to the hook: prefer 3rds and 6ths (an octave or 10th lower is the same thing).

**Judge it by ear:** loop the chorus with the pad muted. You should hear two tunes that take turns, not a second melody fighting for attention. Then unmute the pad: the harmony should sound complete.

**If you're stuck:** start from the chord's 3rd in every bar (E, B, C, A, E, B, A, E) as whole notes, then add one passing note wherever the hook holds.

```exercise
{
  "id": "e3-daw-counter",
  "type": "daw-task",
  "title": "Write your own counter-melody",
  "instructions": "The hook and pad are provided (same chorus as above, strings track empty). Write a new counter-melody on strings below the hook, between C3 and C5. Move when the hook holds, hold when it moves, and avoid parallel 5ths and octaves with the hook. About 25 minutes.",
  "spec": {
    "template": { "bpm": 96, "key": "C", "timeSig": "4/4", "tracks": [
      { "instrument": "lead", "seq": "G4:q C5:q E5:h | D5:q. C5:8 B4:h | C5:q E5:q A5:h | G5:q. F5:8 F5:h | E5:q G5:q E5:q C5:q | D5:h B4:h | A4:q C5:q F5:q E5:q | C5:w |" },
      { "instrument": "pad", "seq": "[C3 G3]:w | [B2 G3]:w | [A2 E3]:w | [A2 F3]:w | [C3 G3]:w | [B2 G3]:w | [A2 F3]:w | [C3 G3]:w |" },
      { "instrument": "strings", "seq": "" } ] },
    "task": "8-bar counter-melody on strings against the given hook.",
    "checks": [
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "range", "low": "C3", "high": "C5", "track": 2 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": true, "track": 2 },
      { "kind": "no-parallel-fifths", "tracks": [0, 2], "octaves": true },
      { "kind": "note-count", "min": 10, "max": 32, "track": 2 },
      { "kind": "max-leap", "semitones": 9, "track": 2 },
      { "kind": "custom", "id": "complement", "note": "Self-check: in bars where the hook holds a half note or longer, the strings move — and vice versa." }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "e4-reflect",
  "type": "reflect",
  "title": "Does it lift the chorus?",
  "spec": { "prompt": "Mute and unmute your strings track while the chorus loops. Describe what the counter-melody adds. Where does it compete with the hook, and how could you fix that?", "minWords": 25 }
}
```

## Ear review

**Method** (see each drill's *How to do it* box): for melodies, chunk the phrase into small groups and get the first group right before the next. For the bass in a band, ignore drums and melody, tap your foot with the deepest sound, then find its notes one by one. Both drills run at your current rungs.

```ladder
{ "skill": "melody", "unlocks": 18, "intro": "Melodies at your level: follow one line and play it back." }
```

```ladder
{ "skill": "roots", "unlocks": 14, "intro": "The bass in a band: hearing one line under others is today's skill in reverse; the drill runs at your current roots rung." }
```

## Between lessons

Pick one chorus from an earlier song of yours and sketch a four-bar counter-line with the same move-when-it-holds rule. In any song you hear this week, try to spot one line behind the vocal.
