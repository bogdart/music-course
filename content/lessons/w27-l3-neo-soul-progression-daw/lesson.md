---
id: w27-l3-neo-soul-progression-daw
title: A Neo-Soul Progression in the DAW
week: 27
order: 3
phase: p4
duration_min: 50
goals:
  - Voice a descending IVmaj9–iii7–ii9–Imaj9 loop with smooth right-hand shapes
  - Build an 8-bar neo-soul groove with epiano, bass and relaxed drums
  - Review chord colours and drum patterns at your own ladder level
prerequisites: [w27-l2-add9-and-sixth-chords]
tags: [daw, neo-soul, extended-chords, groove]
songs:
  - { title: "Brown Sugar", artist: "D'Angelo", public_domain: false }
  - { title: "On & On", artist: "Erykah Badu", public_domain: false }
---

# A Neo-Soul Progression in the DAW

Neo-soul lives on three things: extended chords on electric piano, a bass that sings rather than thumps, and drums that leave space. Today you build all three.

**Listen first (by reference):** D'Angelo's "Brown Sugar": warm electric piano, lazy drums, a bass that leaves gaps. Erykah Badu's "On & On": the harmony barely moves and the feel does the work. Don't copy them; just notice how relaxed they are.

## The loop: stepping down the scale

The progression walks down the C major scale one chord at a time: {{chord:Fmaj9}} – {{chord:Em7}} – {{chord:Dm9}} – {{chord:Cmaj9}} (IV–iii–ii–I). Chords a step apart share most of their notes, so the loop sounds effortless.

The trick is the right hand. Instead of jumping to each root, play the **3rd, 5th, 7th and 9th** of each chord and let the bass play the roots. The shapes then slide down almost in parallel. (On Em7 we use 3–5–7–root instead, because its 9th, F♯, is outside the key.) Next week you will meet this idea again under its jazz name, the rootless voicing.

```example
{
  "title": "Neo-soul loop: epiano voicings, bass, drums",
  "bpm": 80, "timeSig": "4/4", "key": "C",
  "tracks": [
    { "instrument": "epiano", "seq": "[A3 C4 E4 G4]:h. r:q | [G3 B3 D4 E4]:h. r:q | [F3 A3 C4 E4]:h. r:q | [E3 G3 B3 D4]:w |" },
    { "instrument": "bass", "seq": "F2:q. F2:8 r:q C3:q | E2:q. E2:8 r:q B2:q | D2:q. D2:8 r:q A2:q | C2:h. G2:q |" },
    { "instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 r:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 r:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 r:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 [kick hihat]:8 r:8 [kick hihat]:8 [snare hihat]:8 hihat:8 |" }
  ],
  "show": ["pianoroll"],
  "loop": true
}
```

## Feel: space is the groove

### Try it

1. Loop the example and listen three times, one thing each pass: the bass (it rests on beat 3 and answers on beat 4), the hi-hat (a gap on beat 3), the epiano (it stops a beat early each bar).
2. Tap the drum pattern on your desk with the loop: kick with your left hand, snare with your right.

**Check:** you can point to one gap in each instrument. Neo-soul feels relaxed mostly because of those holes, not because of fancy notes.

## Warm up the hands

```exercise
{
  "id": "e1-build-loop",
  "type": "build-chord",
  "title": "Spell the loop",
  "count": 4, "passScore": 0.7,
  "spec": { "chords": ["Fmaj9", "Em7", "Dm9", "Cmaj9"], "root": "given", "prompt": "symbol", "key": "C" }
}
```

```exercise
{
  "id": "e2-play-voicings",
  "type": "play-melody",
  "title": "Play the right-hand shapes over the bass",
  "instructions": "Right hand only. Move each shape down with the smallest possible motion.",
  "passScore": 0.7,
  "spec": {
    "bpm": 70, "timeSig": "4/4", "key": "C",
    "seq": "[A3 C4 E4 G4]:w | [G3 B3 D4 E4]:w | [F3 A3 C4 E4]:w | [E3 G3 B3 D4]:w |",
    "showStaff": false, "showKeyboard": true, "countIn": 1,
    "backing": { "instrument": "bass", "seq": "F2:w | E2:w | D2:w | C2:w |" }
  }
}
```

## Make it

Step by step (about 30 minutes):

1. **Chords first.** On the epiano track, enter the four voicings from the example, two bars each. Loop it: nothing should jump — each shape just slides down.
2. **Rhythm the chords.** Try one change at a time: play one chord an 8th *before* its bar line (a "push"), or cut chords short. Keep the change only if the loop feels lazier, not busier.
3. **Bass.** Root on beat 1, then a rest, then a 5th or a note leading to the next root on beat 4. Loop chords + bass: the bass should feel like a slow conversation with the chords.
4. **Drums last.** Snare on 2 and 4, a sparse kick (beat 1 and one off-beat), hi-hat 8ths with at least one gap.

**Judge it by ear:** mute each track in turn. If muting it changes nothing, it's either too quiet or doing too little; if the loop sounds cramped, remove notes, don't add them.

**If you're stuck:** copy the example's bass and drums exactly and only change the epiano rhythm. One personal change is enough for today.

```exercise
{
  "id": "e3-daw-neo-soul",
  "type": "daw-task",
  "title": "Your 8-bar neo-soul loop",
  "instructions": "Track 1 epiano: the four voicings, two bars each, with your own rhythm (try playing a chord an 8th early, before the bar line). Track 2 bass: the root on beat 1, a 5th or a passing note later in the bar. Track 3 drums: snare on 2 and 4, a sparse kick, hi-hats with at least one gap. About 30 minutes.",
  "spec": {
    "template": { "bpm": 80, "key": "C", "timeSig": "4/4", "tracks": [ { "instrument": "epiano", "seq": "" }, { "instrument": "bass", "seq": "" }, { "instrument": "drums", "seq": "" } ] },
    "task": "Write 8 bars: IVmaj9–iii7–ii9–Imaj9 on epiano (two bars each), a bass line and a laid-back drum groove.",
    "checks": [
      { "kind": "has-tracks", "instruments": ["epiano", "bass", "drums"] },
      { "kind": "bars", "min": 8, "max": 8 },
      { "kind": "in-key", "key": "C", "scale": "major", "allowPassing": true, "track": 0 },
      { "kind": "chord-tones-on-beats", "beats": [1], "progression": ["IV", "iii", "ii", "I"], "barsPerChord": 2, "minRatio": 0.75, "track": 1 },
      { "kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "snareOnBeats": [2, 4], "track": 2 }
    ],
    "minBars": 8, "maxBars": 8
  }
}
```

```exercise
{
  "id": "e4-reflect",
  "type": "reflect",
  "title": "What made it feel soulful?",
  "spec": { "prompt": "Loop your 8 bars three times. Which change made the biggest difference to the feel: the voicings, the bass rests, or the hi-hat gaps? What would you try next?", "minWords": 25 }
}
```

## Ear review

Method reminder (see each drill's *How to do it* box): for chord colours, sort bright/dark first, then the finer choice; for drum dictation, one pass per drum — kick, then snare, then hi-hat.

```ladder
{ "skill": "chords", "unlocks": 12, "intro": "Chord colours at your level: the loop you just built is full of them." }
```

```ladder
{ "skill": "rhythm", "unlocks": 14, "intro": "Rhythm at your current rung; the top open rung is drum dictation (kick, snare and hi-hat), like the groove you just wrote." }
```

## Between lessons

Replay your loop once and change one thing only (a pushed chord, a bass rest, a hi-hat gap). Play the four right-hand shapes from memory.
