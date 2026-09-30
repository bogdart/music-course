---
id: w18-l2-range-climax-hook
title: Range, Climax and the Hook
week: 18
order: 2
phase: p3
duration_min: 45
goals:
  - Keep a melody inside a singable range and place one clear climax
  - Build a hook as a short, rhythmic, repeated idea (A A' A B)
  - Play back six-note melodies with rhythm, at your own ladder level
prerequisites: [w18-l1-motif-repetition-variation]
tags: [melody, hook, songwriting, ear]
songs:
  - { title: "Hey Jude", composer: "Lennon-McCartney (The Beatles)", public_domain: false }
  - { title: "Seven Nation Army", composer: "Jack White (The White Stripes)", public_domain: false }
---

# Range, Climax and the Hook

## Range and climax

Even without lyrics, write melodies as if someone will sing them. A comfortable **range** is about an octave, rarely more than a 10th (for example C4 to E5). Staying inside it keeps the melody natural and leaves room for contrast: verses in the lower half, choruses in the upper half.

The [[climax]] is the single highest (or most intense) note. Place it **once**, around 60–80% of the way through the phrase — typically bar 6 or 7 of an 8-bar chorus. If you hit the top note in every bar, nothing feels like a peak. Approach it by step or a modest leap and come down afterwards: an *arch* contour.

```example
{
  "title": "Glasshouse chorus - range D4 to E5, climax in bar 7",
  "bpm": 92, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "G4:q G4:8 A4:8 G4:q E4:q | D4:q D4:8 E4:8 D4:h | E4:q E4:8 G4:8 A4:q C5:q | A4:h. r:q | G4:q G4:8 A4:8 G4:q E4:q | B4:q B4:8 C5:8 D5:h | E5:h. D5:q | C5:w" },
    { "instrument": "piano", "seq": "[C3 E3 G3]:w | [B2 D3 G3]:w | [A2 C3 E3]:w | [A2 C3 F3]:w | [C3 E3 G3]:w | [B2 D3 G3]:w | [A2 C3 E3]:w | [A2 C3 F3]:w" },
    { "instrument": "bass", "seq": "C2:h C2:h | G1:h G1:h | A1:h A1:h | F1:h F1:h | C2:h C2:h | G1:h G1:h | A1:h A1:h | F1:h F1:h" }
  ],
  "show": ["pianoroll"],
  "loop": false
}
```

Bars 1–4 stay low. Bar 5 repeats bar 1, then bar 6 climbs, bar 7 peaks on E5, bar 8 settles on C5.

## The hook

A [[hook]] is the part people hum after one listen. Hooks share four traits:

1. **Short** — one or two bars.
2. **Rhythmic** — a distinctive rhythm, often starting after the beat (a rest on beat 1 is powerful).
3. **Repeated** — at least three times in the chorus.
4. **Simple pitches** — few notes, small steps, one memorable leap at most.

A proven chorus shape is **A A' A B**: hook, hook with a new ending, hook again, then a payoff that goes somewhere new.

```example
{
  "title": "A hook in A A' A B over vi-IV-I-V",
  "bpm": 100, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "lead", "seq": "r:8 C5:8 C5:8 A4:8 C5:q D5:q | C5:h r:h | r:8 C5:8 C5:8 A4:8 C5:q D5:q | B4:h r:h | r:8 C5:8 C5:8 A4:8 C5:q D5:q | C5:h r:h | r:8 E5:8 E5:8 D5:8 C5:q D5:q | D5:w" },
    { "instrument": "piano", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w | [A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w" },
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

The payoff ends on D over G — open — so the chorus loops naturally.

## Two famous hooks, verdict first

Listen on your own player, then answer. The facts appear after you answer.

```exercise
{
  "id": "famous-hooks-verdict",
  "type": "quiz",
  "title": "Hey Jude and Seven Nation Army",
  "spec": { "questions": [
    { "q": "\"Hey Jude\" (The Beatles): where does the big \"na na na\" hook appear?", "choices": ["In the first chorus", "Only at the end, then it repeats for minutes", "In the intro", "Between every verse"], "answer": 1, "explain": "It only arrives in the long coda (F major), then repeats for about four minutes over I-bVII-IV-I (F Eb Bb F) - the bVII you met in week 16. Saving the hook for the end turns the whole song into a build." },
    { "q": "\"Hey Jude\" coda: does the hook melody change each time it comes round?", "choices": ["Mostly the same, again and again", "A new melody every time"], "answer": 0, "explain": "Repetition is the point: the more it repeats, the more the listener sings along." },
    { "q": "\"Seven Nation Army\" (The White Stripes): the famous riff is played by...", "choices": ["A voice with lyrics", "An instrument, no words", "A choir"], "answer": 1, "explain": "An instrument (a guitar pitched down to sound like a bass). A hook needs no words: seven notes, one rhythm, about 124 BPM." },
    { "q": "\"Seven Nation Army\": how often do you hear the riff?", "choices": ["Once, in the intro", "Through most of the song", "Only in the bridge"], "answer": 1, "explain": "It runs under almost the whole song - verses and choruses - which is why stadiums chant it." }
  ] }
}
```

```exercise
{
  "id": "hook-quiz",
  "type": "quiz",
  "spec": { "questions": [
    { "q": "Where does the climax of an 8-bar chorus usually go?", "choices": ["Bar 1", "Bar 3", "Bar 6 or 7", "Every bar"], "answer": 2 },
    { "q": "A comfortable melody range is about...", "choices": ["A 3rd", "An octave to a 10th", "Two octaves", "Three octaves"], "answer": 1 },
    { "q": "In A A' A B, what is A'?", "choices": ["A new melody", "The hook with a changed ending", "The hook transposed up an octave", "A drum fill"], "answer": 1 },
    { "q": "Why does the hook above start with a rest?", "choices": ["To make the rhythm distinctive", "Because rests are required", "To change key", "To slow the tempo"], "answer": 0 },
    { "q": "What shape does the Glasshouse chorus have?", "choices": ["Descending", "Arch", "Flat", "Ascending only"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "play-hook",
  "type": "play-melody",
  "title": "Play the hook",
  "passScore": 0.7,
  "spec": { "bpm": 90, "timeSig": "4/4", "key": "C", "seq": "r:8 C5:8 C5:8 A4:8 C5:q D5:q | C5:h r:h | r:8 C5:8 C5:8 A4:8 C5:q D5:q | B4:h r:h", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "pad", "seq": "[A3 C4 E4]:w | [A3 C4 F4]:w | [G3 C4 E4]:w | [G3 B3 D4]:w" } }
}
```

```exercise
{
  "id": "play-glasshouse-climax",
  "type": "play-melody",
  "title": "Play the Glasshouse climax (bars 5-8)",
  "instructions": "Feel how bar 6 climbs, bar 7 peaks on E5 and bar 8 settles.",
  "passScore": 0.7,
  "spec": { "bpm": 80, "timeSig": "4/4", "key": "C", "seq": "G4:q G4:8 A4:8 G4:q E4:q | B4:q B4:8 C5:8 D5:h | E5:h. D5:q | C5:w", "showStaff": true, "showKeyboard": true, "countIn": 1, "backing": { "instrument": "pad", "seq": "[C3 E3 G3]:w | [B2 D3 G3]:w | [A2 C3 E3]:w | [A2 C3 F3]:w" } }
}
```

## Ear: longer melodies with rhythm

Hooks live on rhythm, so this lesson opens the melody rung that adds it: six notes, some long and some short. Play back the
pitches in order; you do not need to copy the rhythm exactly. As always, the drill runs at your current rung.

```ladder
{ "skill": "melody", "unlocks": 15, "intro": "Opens: six notes with a simple rhythm - play them back. The drill runs at your current melody rung." }
```

A climax usually comes *down* again, often by a leap. This lesson opens the last two falling-interval rungs:
seconds to fifths going down, then all twelve intervals going down. They are the same distances you know going up, just
falling — expect the bigger ones to feel unfamiliar for a while. The drill runs at your current interval rung.

```ladder
{ "skill": "intervals", "unlocks": 16, "intro": "Opens: falling seconds to fifths; then all twelve intervals going down. The drill runs at your current interval rung." }
```

```exercise
{
  "id": "reflect-hook-memory",
  "type": "reflect",
  "spec": { "prompt": "Wait five minutes, then try to recall the A A' A B hook from this lesson in your head (or hum it, if you like). What stayed - the rhythm, the notes, the rest at the start? What does that tell you about writing your own hook next lesson?", "minWords": 25 }
}
```
