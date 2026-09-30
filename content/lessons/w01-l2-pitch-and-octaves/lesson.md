---
id: w01-l2-pitch-and-octaves
title: Pitch and Octaves
week: 1
order: 2
phase: p1
duration_min: 40
goals:
  - Understand the two properties of a note, height and name, and what an octave is
  - Hear an octave melt into one sound when both notes play together
  - Play C in three octaves, up and down, in time
prerequisites: [w01-l1-welcome-and-setup]
tags: [pitch, octave, ear, keyboard]
---

# Pitch and octaves

Last time you played three Cs. They sounded very different — one deep, one middle, one bright — yet they share a name. Right now that probably feels arbitrary, and here is the honest truth: **it will keep feeling that way for a while.** That's normal, not a lack of talent. This lesson explains why they share a name and gives you the one place where you can already hear it.

## Two things in every note

Every note has two properties:

1. **Height** — low or high. Everyone hears this from day one, and it is *loud*. C3 and C5 are very far apart in height; nobody hears them as "the same sound".
2. **Name** (C, D, E…) — a quieter quality that comes back every [[octave]]. Musicians sometimes call it the note's *colour*.

Learning octaves is not learning that C3 and C5 "sound the same". They don't, and they won't. It is learning to notice the quiet second property underneath the loud first one. For most beginners that takes weeks of short, regular practice.

## Why octaves are special

{{note:A4}} vibrates 440 times per second; the A one octave higher vibrates exactly **880** — twice as fast. Every wave of the low note lines up with every second wave of the high one. On the keyboard, an octave is the distance from one C to the next C: 12 keys, counting black ones.

```keyboard
{ "range": ["C3", "C5"], "highlight": ["C3", "C4", "C5"], "labels": "names", "colors": { "C3": "root", "C4": "root", "C5": "root" } }
```

Because the waves line up so perfectly, **two notes an octave apart, played together, melt into one sound** — richer, but one. Other pairs don't melt: you hear two notes rubbing, a rough "wobbly" sound. Listen: an octave, a clash, the octave again, then a *near-miss* (a note just one key below the octave):

```example
{
  "title": "C3 + C4 (melts), C3 + F♯3 (clashes), C3 + C4, C3 + B3 (near-miss: rubs)",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "[C3 C4]:w | [C3 F#3]:w | [C3 C4]:w | [C3 B3]:w" } ],
  "show": ["keyboard"]
}
```

Do it yourself: hold C3 and add C4. Then hold C3 and add F♯3 (the left key of the group of three black keys). Then B3, one key below C4. Only the octave sounds like *one* note. The near-miss is the tricky one: it's almost as high as the octave, so listen for the rub, not the height.

Played *one after the other*, the same two notes will most likely sound like two different notes to you today. That's expected — the ladder gets there later, once "together" is solid:

```example
{
  "title": "One after the other: C4 → C5, then C4 → B4 (probably both sound 'new' for now)",
  "bpm": 60, "timeSig": "4/4", "key": "C",
  "tracks": [ { "instrument": "piano", "seq": "C4:h C5:h | C4:h B4:h" } ],
  "show": ["keyboard"]
}
```

## Your first ladder

The drill below is your **octave ladder**. It starts with the easiest clue — both notes at once — and today opens two rungs: *octave or clash*, then *octave or near-miss*. You move up only when a rung is solid (85% over your last 20 answers, across two sessions).

After every answer, press the **Listen again** buttons — for example *One after the other* or *The real octave*. A wrong answer followed by hearing the real thing next to your mistake teaches more than a lucky right answer. Expect 60–70% at first.

```ladder
{ "skill": "octave", "unlocks": 2, "intro": "Two notes at once: do they melt into one sound (an octave), or can you hear two notes rubbing?" }
```

## Hands

```exercise
{
  "id": "e10",
  "type": "quiz",
  "title": "Octave facts",
  "spec": { "questions": [
    { "q": "A4 vibrates 440 times per second. The A one octave higher vibrates…", "choices": ["220", "660", "880"], "answer": 2, "explain": "One octave up = double the frequency." },
    { "q": "How many keys (white + black) from one C to the next C?", "choices": ["8", "12", "7"], "answer": 1 },
    { "q": "C3 and C5 have the same…", "choices": ["height", "note name", "loudness"], "answer": 1, "explain": "Very different height, same name." },
    { "q": "Played together, which pair melts into one sound?", "choices": ["C4 + C5", "C4 + B4", "C4 + F♯4"], "answer": 0 },
    { "q": "The number in C4 tells you…", "choices": ["how long the note is", "which octave it's in", "how loud it is"], "answer": 1 },
    { "q": "In week 1, two notes an octave apart played one after the other will probably sound…", "choices": ["exactly the same", "like two different notes — that's normal for now"], "answer": 1 },
    { "q": "You answered wrong in an octave drill. The most useful next step is…", "choices": ["move on quickly", "use the Listen again buttons and compare", "guess the other button"], "answer": 1 }
  ] }
}
```

```exercise
{
  "id": "e5",
  "type": "play-notes",
  "title": "Cs going down",
  "instructions": "Play C5, C4, C3 — right to left.",
  "count": 6,
  "spec": { "prompt": "names", "notes": ["C5", "C4", "C3"], "ordered": true, "key": "C" }
}
```

```exercise
{
  "id": "e6",
  "type": "play-melody",
  "title": "Octave jumps in time",
  "instructions": "Play along with the click. Each note lasts two beats.",
  "passScore": 0.7,
  "spec": { "bpm": 60, "timeSig": "4/4", "key": "C", "seq": "C4:h C5:h | C4:h C3:h | C4:h C5:h | C4:w", "showStaff": false, "showKeyboard": true, "countIn": 1 }
}
```
