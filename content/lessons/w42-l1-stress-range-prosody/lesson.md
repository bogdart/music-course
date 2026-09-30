---
id: w42-l1-stress-range-prosody
title: Stress, Range and Prosody
week: 42
order: 1
phase: p4
duration_min: 45
goals:
  - Place stressed syllables on strong beats, longer notes or higher pitches
  - Keep a melody for a voice inside a comfortable range, with breathing spaces
  - See and hear the difference between natural and awkward word-setting
prerequisites: [w41-l3-develop-a-motif-daw, w18-l2-contour-and-phrasing]
tags: [songwriting, prosody, melody, lyrics]
---

# Stress, Range and Prosody

This week is about writing melodies that *someone else* could sing — you never have to sing yourself. You write and play them on the keyboard; the words are shown under the notes. [[prosody]] is the fit between the natural rhythm of words and the music they are set to. Good prosody is invisible: the line just sounds right. Bad prosody makes listeners hear "walk-**ING**" instead of "**WALK**-ing".

## Stress: find it in the words

How to find the stresses: say the line out loud (or in your head) and exaggerate it like an angry sports commentator, tapping the table on each syllable that wants to be loud. Check a doubtful word by saying it both ways — "WALK-ing" vs "walk-ING": only one sounds like a real word. The stressed syllables, in capitals:

> **WALK**-ing **HOME** be-**NEATH** the **CI**-ty **LIGHTS**

Give each stressed syllable at least one of three musical **weights**: a **strong beat** (1 or 3), a **longer note**, or a **higher pitch**. Unstressed syllables ("-ing", "be-", "the", "-ty") go on weak beats, short and lower.

```example
{
  "title": "Natural setting — stresses on strong beats, long or high notes",
  "bpm": 84, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "E4:q D4:q G4:q. E4:8 | A4:q G4:8 C5:q. A4:q | G4:w |" },
    { "instrument": "pad", "seq": "[C3 G3]:w | [F3 C4]:w | [C3 G3]:w |" }
  ],
  "lyrics": "WALK- ing HOME be- NEATH the CI- ty LIGHTS",
  "show": ["staff"]
}
```

WALK on beat 1; HOME on beat 3 and long; NEATH on beat 1; CI the highest note; LIGHTS a whole bar.

```example
{
  "title": "Awkward setting — the same words, stresses in the wrong places",
  "bpm": 84, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "E4:8 G4:q. D4:q A4:q | G4:8 C5:q. A4:8 D4:8 G4:q | r:w |" },
    { "instrument": "pad", "seq": "[C3 G3]:w | [F3 C4]:w | [C3 G3]:w |" }
  ],
  "lyrics": "WALK- ing HOME be- NEATH the CI- ty LIGHTS",
  "show": ["staff"]
}
```

Read the words under the staff as it plays: WALK is a quick 8th and "-ing" gets the long note after it; HOME is low, and "be-" jumps above it; "the" gets the highest and longest note of the line, while CI, the strongest syllable of "city", gets only a quick 8th on beat 3 before "-ty" rushes after it; and LIGHTS is cut to a quarter at the end of the bar. Said that way it is almost comic.

```exercise
{
  "id": "e1-tap-speech",
  "type": "rhythm-tap",
  "title": "Tap the natural setting's rhythm",
  "instructions": "Think 'WALK-ing HOME be-NEATH the CI-ty LIGHTS' as you tap.",
  "passScore": 0.7,
  "spec": { "bpm": 84, "timeSig": "4/4", "seq": "x:q x:q x:q. x:8 | x:q x:8 x:q. x:q | x:w |", "showNotation": true, "countIn": 1, "loops": 2 }
}
```

```exercise
{
  "id": "e2-play-good",
  "type": "play-melody",
  "title": "Play the natural setting",
  "passScore": 0.7,
  "spec": {
    "bpm": 80, "timeSig": "4/4", "key": "C",
    "seq": "E4:q D4:q G4:q. E4:8 | A4:q G4:8 C5:q. A4:q | G4:w |",
    "showStaff": true, "showKeyboard": true, "countIn": 1,
    "backing": { "instrument": "pad", "seq": "[C3 G3]:w | [F3 C4]:w | [C3 G3]:w |" }
  }
}
```

## Range and breath

Untrained singers are comfortable across roughly **an octave to a 10th**. For a general-purpose melody stay about C4–E5 (or an octave lower for low voices), keep big leaps rare and mostly under a 6th, and put the highest note on an important word — often in the chorus. Singers need to breathe: leave a **rest or a long note** every one or two bars.

```exercise
{
  "id": "e3-prosody-quiz",
  "type": "quiz",
  "title": "Good fit or bad fit?",
  "passScore": 0.7,
  "spec": {
    "questions": [
      { "q": "Where should the stressed syllable of 'to-NIGHT' go?", "choices": ["'to' on beat 1, 'night' on the 'and'", "'to' as a pickup, 'night' on beat 1", "both on off-beats"], "answer": 1 },
      { "q": "A comfortable range for an untrained singer is about…", "choices": ["a 4th", "an octave to a 10th", "two octaves"], "answer": 1 },
      { "q": "Which does NOT give a syllable weight?", "choices": ["a strong beat", "a longer note", "a higher pitch", "a short 16th just after the beat"], "answer": 3 },
      { "q": "Why leave rests in a vocal line?", "choices": ["so the singer can breathe", "to make the song shorter", "rests are only decoration"], "answer": 0 }
    ]
  }
}
```

## Ear

Rhythm: foot on the beat, count out loud, chunk it bar by bar. Melody play-back: replay and say the directions first, find the first note by searching, then follow the path. The *How to do it* box under each drill shows the exact method for your current rung.

```ladder
{ "skill": "rhythm", "unlocks": 16, "intro": "Word rhythm is rhythm — this drill runs at your current rhythm rung." }
```

```ladder
{ "skill": "melody", "unlocks": 23, "intro": "Simple, singable phrases played back at your current melody rung." }
```

## Make it

1. Write the ten syllables on paper and mark the stressed ones (CAN'T, GET, SOUND, YOUR, BYE).
2. Rhythm first: put the notes on one pitch (say E4) in the DAW. Stressed syllables on beats 1 or 3 or on longer notes; "i", "for", "the", "of", "good" short and just before a beat.
3. Play it back while reading the syllables along. If a word sounds wrong ("for-GET" said as "FOR-get"), move that note's start to a stronger beat or lengthen it.
4. Now pitches: start near E4, move mostly by step, put the highest note on SOUND or BYE, end on a long C, E or G.
5. **Check by ear:** read the line along twice. Does it sound like the words spoken with music, or does one syllable stick out? Fix only that syllable. Stuck? Copy the rhythm of the "natural setting" above and just change pitches.

```exercise
{
  "id": "e4-daw-set-line",
  "type": "daw-task",
  "title": "Set a lyric line",
  "instructions": "Set this 10-syllable line to a melody in C major: 'i CAN'T for-GET the SOUND of YOUR good-BYE' → i · CAN'T · for · GET · the · SOUND · of · YOUR · good · BYE. One note per syllable; stressed syllables on beats 1 or 3 or on longer/higher notes; the highest note on SOUND or BYE; end on a long note. Write the syllables on paper under your notes and read them along as it plays.",
  "spec": {
    "template": {
      "bpm": 84, "key": "C", "timeSig": "4/4",
      "tracks": [
        { "instrument": "lead", "seq": "" },
        { "instrument": "pad", "seq": "[C3 G3]:w | [A2 E3]:w | [F2 C3]:w | [G2 D3]:w |" }
      ]
    },
    "task": "Set a 10-syllable lyric line with good prosody.",
    "checks": [
      { "kind": "note-count", "min": 10, "max": 10, "track": 0 },
      { "kind": "bars", "min": 3, "max": 4 },
      { "kind": "range", "low": "C4", "high": "E5", "track": 0 },
      { "kind": "max-leap", "semitones": 9, "track": 0 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": false, "track": 0 },
      { "kind": "custom", "id": "stress-fit", "note": "Self-check: reading the syllables along with the playback, every stressed syllable lands with weight." }
    ],
    "minBars": 3, "maxBars": 4
  }
}
```

## Between lessons

Take one line from any song lyric you know, mark its stresses, and tap its rhythm on one key. Ten minutes of ladder drills on the Practice page.
