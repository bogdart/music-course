---
id: w44-l1-the-transcription-workflow
title: The Transcription Workflow
week: 44
order: 1
phase: p5
duration_min: 40
goals:
  - Learn the seven listening passes and why their order matters
  - Find home in a loop by where its tune comes to rest
  - "Run passes 3 and 4 on a hidden mystery loop: bass notes, then numerals"
prerequisites: [w43-l3-self-critique-and-ear-assessment]
tags: [transcription, ear, workflow, bass, progression]
---

# The Transcription Workflow

The last phase points everything you have built at one skill: hearing a finished song and writing down how it is made —
[[transcription]]. People who can do it rarely have a magic ear. They have a **method**, and they know exactly which
question they are asking at each moment.

## Seven passes, one question each

Trying to hear everything at once drowns you. So you listen many times, each time with *one* question. Each of those
listens is a [[listening pass]]:

1. **Key & tempo** — where is home, how fast is the beat?
2. **Form** — where do sections start and end, how many bars?
3. **Bass** — which note does the bass land on at each chord change?
4. **Chords** — turn those bass notes into numerals (I, IV, vi…).
5. **Melody** — hook first, in scale degrees.
6. **Groove** — kick, snare, hats.
7. **Layers** — which instruments play in which section?

The key is the map every later answer is written on, and the form shows how little you have to transcribe (choruses
repeat). The bass is the easiest harmony fact to catch; once you know it and the key, the chord is a short guess away.
Write the answers on a [[form map]]: one row per section with bars, chords, and notes on melody, groove and layers.

## The method, pass by pass

Keep the keyboard under your hands and the example on loop. Each step ends with a check you can do yourself.

**Find home (pass 1).**
1. Listen only to the tune (the highest line). Notice the last note of each phrase, where it holds or stops.
2. Find that note on the keyboard: play a key, ask "higher or lower?", move, repeat until your key and the tune seem to
   merge.
3. Test it: hold that key down (low, left hand) while the loop plays. Then hold one or two other candidates.
*Check:* home sounds settled under the whole loop; a wrong candidate sounds like it is leaning or rubbing somewhere.

**Find a bass note (pass 3).**
1. Listen only to the lowest sound, the thump under the chords. Ignore the tune.
2. Play a key in the bottom two octaves. Ask: is the bass higher or lower than my key? Move that way, big jumps first,
   then single keys, until the two merge into one sound.
3. If low notes are blurry, jump your key up 12 keys: the same note name is easier to judge there.
*Check:* play your note along with the loop on that chord. The right note thickens the bass; a wrong one rubs or sounds
like a second bass line.

**Name the chord (pass 4).** Count up from home to the bass note to get the numeral's number. Then decide the quality:
play the major chord on that bass note along with the loop, then the minor one.
*Check:* the right one blends into the loop; the wrong one sounds sour or oddly bright against it.

**When you are stuck.** Loop just the bar that troubles you. Use the "alone" example if there is one. Compare two
candidates back to back. Make a guess anyway and check it as above. Then answer, press *Reveal notation*, and listen
again *while looking*. That is how sound and name get connected.

## How this phase works

Every song you transcribe here is a [[mystery song]]: an original track with its notation **hidden**. Answer first;
only then press *Reveal notation* and compare. Revealing first gives you the answer without the practice.

Mystery songs are real music, not ladder drills at your rung, so missing notes is normal. The ladder drills keep
growing your ear at your own pace. The mystery songs show you how to use it on full tracks.

## Mystery Song #0

Loop it and ask only question 1: where is home? Use the three "find home" steps above. Go by where the tune comes
to rest at the ends of its phrases, not by which chord comes first.

```example
{
  "title": "Mystery Song #0 — loop it",
  "bpm": 96,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 ohat:8"},
    {"instrument": "bass", "seq": "A2:h. r:q | F2:h. r:q | C2:h. r:q | G2:h. r:q"},
    {"instrument": "piano", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w"},
    {"instrument": "lead", "seq": "E5:q E5:8 D5:8 C5:q A4:q | C5:q. C5:8 D5:q C5:q | E5:q G5:q E5:8 D5:8 C5:q | D5:h. r:q"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```exercise
{
  "id": "w41l1-home",
  "type": "listen",
  "title": "Pass 1: where is home?",
  "spec": {
    "example": {
      "title": "Mystery Song #0",
      "bpm": 96,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 ohat:8"},
        {"instrument": "bass", "seq": "A2:h. r:q | F2:h. r:q | C2:h. r:q | G2:h. r:q"},
        {"instrument": "piano", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w"},
        {"instrument": "lead", "seq": "E5:q E5:8 D5:8 C5:q A4:q | C5:q. C5:8 D5:q C5:q | E5:q G5:q E5:8 D5:8 C5:q | D5:h. r:q"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Find the note the tune comes to rest on, and test it under the loop. Which is home?", "choices": ["A", "C", "F", "G"], "answer": 1, "explain": "C. The tune's phrases come to rest on C (the ends of bars 2 and 3), and the last bar hangs on D, leaning back towards C. If you picked another note, hold C under the loop, then your note, and compare which one sounds settled all the way through."}
    ]
  }
}
```

## Passes 3 and 4

Now follow only the bass. Four chords, one bass note each.

1. Loop the bass-alone version below and find the **first** bass note with the higher/lower search.
2. For each next note, ask first: did the bass go up or down from the last one? A small or a big move? Then search from
   your previous key in that direction.
3. Switch to the full mix and play your four notes along with it.
*Check:* all four notes thicken the bass without rubbing. If one rubs, loop that bar and search one or two keys either
side. The bass-alone version is a crutch you will drop in week 45.

```example
{
  "title": "Mystery Song #0 — bass alone (practice only)",
  "bpm": 96,
  "timeSig": "4/4",
  "tracks": [{"instrument": "bass", "seq": "A2:h. r:q | F2:h. r:q | C2:h. r:q | G2:h. r:q"}],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```exercise
{
  "id": "w41l1-bass",
  "type": "ear-bass",
  "title": "Pass 3: the four bass notes",
  "instructions": "The full mix plays. Play the four bass notes in order, any octave.",
  "srs": false,
  "spec": {
    "key": "C",
    "chords": ["I", "IV", "V", "vi"],
    "answer": "play",
    "example": {
      "title": "Mystery Song #0",
      "bpm": 96,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 ohat:8"},
        {"instrument": "bass", "seq": "A2:h. r:q | F2:h. r:q | C2:h. r:q | G2:h. r:q"},
        {"instrument": "piano", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w"},
        {"instrument": "lead", "seq": "E5:q E5:8 D5:8 C5:q A4:q | C5:q. C5:8 D5:q C5:q | E5:q G5:q E5:8 D5:8 C5:q | D5:h. r:q"}
      ]
    },
    "track": 1
  }
}
```

```exercise
{
  "id": "w41l1-prog",
  "type": "ear-progression",
  "title": "Pass 4: the numerals",
  "instructions": "Now name the four chords. Count up from home to each bass note for the number; play major and minor on that note along with the loop to decide between upper case (major) and lower case (minor).",
  "srs": false,
  "spec": {
    "key": "C",
    "mode": "major",
    "chords": ["I", "IV", "V", "vi"],
    "example": {
      "title": "Mystery Song #0",
      "bpm": 96,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 ohat:8"},
        {"instrument": "bass", "seq": "A2:h. r:q | F2:h. r:q | C2:h. r:q | G2:h. r:q"},
        {"instrument": "piano", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w"},
        {"instrument": "lead", "seq": "E5:q E5:8 D5:8 C5:q A4:q | C5:q. C5:8 D5:q C5:q | E5:q G5:q E5:8 D5:8 C5:q | D5:h. r:q"}
      ]
    },
    "progression": ["vi", "IV", "I", "V"]
  }
}
```

```exercise
{
  "id": "w41l1-first",
  "type": "quiz",
  "title": "Home and the first chord",
  "spec": {
    "questions": [
      {"q": "Now compare your answers from passes 1 and 4. Is the first chord of the loop the home chord?", "choices": ["Yes", "No"], "answer": 1, "explain": "No. The loop is vi–IV–I–V in C major: it starts on vi (A minor). The same four chords could also be heard as A minor (i–VI–III–VII); what tips this loop to C is the tune, whose phrases end on C. Home is where the music rests, not where it begins."}
    ]
  }
}
```

## Your own level

Two ladders reach their last rungs today: *bass in a band* (roots) and *progressions in a band, borrowed chords too*.
Opening a rung is not the same as hearing it. The drills start at the lowest rung you haven't mastered, and that is
the right place to practise.

Use the same moves as above. Find home first. Then follow the lowest sound with higher/lower searches on the keyboard.
Then check each note by playing it along. The *How to do it* box under each drill shows the exact method for your
current rung.

```ladder
{
  "skill": "roots",
  "unlocks": 16,
  "intro": "Today opens the last bass rung, a full band with a wider palette of chords; the drill starts wherever you are on this ladder."
}
```

```ladder
{
  "skill": "progressions",
  "unlocks": 21,
  "intro": "The last rung: full mix with borrowed chords. You practise at your current rung."
}
```

```exercise
{
  "id": "w41l1-order",
  "type": "quiz",
  "title": "The seven passes",
  "spec": {
    "questions": [
      {"q": "Which pass comes first?", "choices": ["Melody", "Key & tempo", "Groove", "Layers"], "answer": 1, "explain": "The key is the map every later answer is written on."},
      {"q": "Why does the bass come before the chords?", "choices": ["The bass is always loudest", "The bass note plus the key usually predicts the chord", "Chords don't matter", "Bass players decide the chords"], "answer": 1},
      {"q": "Why map the form early?", "choices": ["Repeated sections only need transcribing once", "Form decides the key", "It makes the tempo faster", "It is the hardest pass"], "answer": 0}
    ]
  }
}
```

````reveal Show Mystery Song #0's chords
The loop is **vi – IV – I – V** in C major: Am – F – C – G, bass A – F – C – G. You will play it from memory at the
start of next lesson.

```chords
{ "key": "C", "bars": ["Am", "F", "C", "G"], "roman": true }
```
````

```exercise
{
  "id": "w41l1-reflect",
  "type": "reflect",
  "title": "Start your form map",
  "spec": {
    "prompt": "Write the first lines of a form map for Mystery Song #0: home note, number of bars in the loop, the bass notes and numerals, and one sentence on which pass felt hardest and why.",
    "minWords": 30
  }
}
```

## Between lessons

Play Mystery Song #0 once a day and play its bass line along with it from memory. Then play one Practice session.
