---
id: w48-l3-recreate-a-mix-daw
title: Recreate a 32-Bar Mix (two sessions)
week: 48
order: 3
phase: p5
duration_min: 90
goals:
  - Transcribe a hidden two-section song with the seven passes
  - "Rebuild it in the DAW over two sessions: the rhythm section first, then melody and strings"
  - Check the rebuild against the original and fix what you can hear
prerequisites: [w48-l2-identifying-layers-and-sections]
tags: [transcription, daw, arrangement, workflow]
---

# Recreate a 32-Bar Mix

This week's real test: a complete song in two sections, five layers, 32 bars. You transcribe it and rebuild it.
Recreating a mix is the most honest check of a transcription — played back to back, every mistake is audible.

**This lesson spans two sessions of about 45 minutes.** Session 1: passes 1–4 and 7 plus the rhythm section (16 bars).
Session 2 (roughly 10 minutes per melody, 20 for the DAW, 5 to reflect): melody, strings, the full 32 bars and the A/B.
If session 2 runs over, finish the A/B next time rather than rushing it. The DAW keeps your project between sessions.

Mystery Song #5 has the form **Verse – Chorus – Verse – Chorus**; each section is a 4-bar pattern played twice, so the two
hidden loops below contain everything. (Confirm that in pass 2 — never trust a description you haven't heard.)

```example
{
  "title": "Mystery Song #5 — verse (4-bar pattern)",
  "bpm": 110,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 ohat:8"},
    {"instrument": "bass", "seq": "F2:w | C2:w | D2:w | Bb1:w"},
    {"instrument": "epiano", "seq": "[F3 A3 C4]:h [F3 A3 C4]:h | [E3 G3 C4]:h [E3 G3 C4]:h | [F3 A3 D4]:h [F3 A3 D4]:h | [F3 Bb3 D4]:h [F3 Bb3 D4]:h"},
    {"instrument": "lead", "seq": "A4:q A4:q G4:q F4:q | E4:h. r:q | F4:q F4:q A4:q C5:q | D5:h. r:q"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

```example
{
  "title": "Mystery Song #5 — chorus (4-bar pattern)",
  "bpm": 110,
  "timeSig": "4/4",
  "tracks": [
    {"instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 tom:8 tom:8 snare:8"},
    {"instrument": "bass", "seq": "Bb1:8 Bb1:8 Bb2:8 Bb1:8 Bb1:8 Bb1:8 Bb2:8 Bb1:8 | C2:8 C2:8 C3:8 C2:8 C2:8 C2:8 C3:8 C2:8 | D2:8 D2:8 D3:8 D2:8 D2:8 D2:8 D3:8 D2:8 | F2:8 F2:8 F3:8 F2:8 F2:8 F2:8 F3:8 F2:8"},
    {"instrument": "epiano", "seq": "[F3 Bb3 D4]:q. [F3 Bb3 D4]:8 r:q [F3 Bb3 D4]:q | [E3 G3 C4]:q. [E3 G3 C4]:8 r:q [E3 G3 C4]:q | [F3 A3 D4]:q. [F3 A3 D4]:8 r:q [F3 A3 D4]:q | [F3 A3 C4]:q. [F3 A3 C4]:8 r:q [F3 A3 C4]:q"},
    {"instrument": "strings", "seq": "[Bb3 D4 F4]:w | [C4 E4 G4]:w | [A3 D4 F4]:w | [A3 C4 F4]:w"},
    {"instrument": "lead", "seq": "F5:q. D5:8 D5:q C5:q | E5:q. C5:8 C5:h | F5:q. D5:8 F5:q A5:q | A5:h. r:q"}
  ],
  "show": ["staff", "pianoroll"],
  "hidden": true,
  "loop": true
}
```

## Session 1 — passes 1–4, then the rhythm section

Use the week 44 method, with a check after each pass:

1. **Key.** Loop the chorus; find the *resting chord* — where the loop sounds like it arrives — and its bass note by
   keyboard search. The melody's long note there is a clue, but it may be the chord's 3rd or 5th rather than its root.
   Hold each candidate low under the loop — home sounds settled throughout. Check: the loop should feel finished on the
   chord built on it.
2. **Form & layers.** Play verse, then chorus; list what entered or left. Check: count the chorus layers on your fingers.
3. **Bass.** Loop the verse, listen to the lowest thump, play a low key, go higher or lower until it merges; one note per
   bar. Check: play all four along with the loop — each should sit under its chord.
4. **Chords.** Turn each bass note into a numeral (count up from home). Unsure of the colour? Play the major and the
   minor chord on that bass note with the loop; keep the one that blends.

Stuck anywhere: loop that one bar, compare your two best candidates back to back, guess, and let the reveal teach you.

```exercise
{
  "id": "w45l3-listen",
  "type": "listen",
  "title": "Passes 1, 2 and 7",
  "spec": {
    "example": {
      "title": "Mystery Song #5 — chorus",
      "bpm": 110,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 tom:8 tom:8 snare:8"},
        {"instrument": "bass", "seq": "Bb1:8 Bb1:8 Bb2:8 Bb1:8 Bb1:8 Bb1:8 Bb2:8 Bb1:8 | C2:8 C2:8 C3:8 C2:8 C2:8 C2:8 C3:8 C2:8 | D2:8 D2:8 D3:8 D2:8 D2:8 D2:8 D3:8 D2:8 | F2:8 F2:8 F3:8 F2:8 F2:8 F2:8 F3:8 F2:8"},
        {"instrument": "epiano", "seq": "[F3 Bb3 D4]:q. [F3 Bb3 D4]:8 r:q [F3 Bb3 D4]:q | [E3 G3 C4]:q. [E3 G3 C4]:8 r:q [E3 G3 C4]:q | [F3 A3 D4]:q. [F3 A3 D4]:8 r:q [F3 A3 D4]:q | [F3 A3 C4]:q. [F3 A3 C4]:8 r:q [F3 A3 C4]:q"},
        {"instrument": "strings", "seq": "[Bb3 D4 F4]:w | [C4 E4 G4]:w | [A3 D4 F4]:w | [A3 C4 F4]:w"},
        {"instrument": "lead", "seq": "F5:q. D5:8 D5:q C5:q | E5:q. C5:8 C5:h | F5:q. D5:8 F5:q A5:q | A5:h. r:q"}
      ],
      "show": ["staff", "pianoroll"],
      "hidden": true,
      "loop": true
    },
    "questions": [
      {"q": "Key?", "choices": ["F major", "D minor", "B♭ major", "C major"], "answer": 0, "explain": "F major: the chorus comes to rest on the F chord at the end of its loop — that is where the song arrives home. The melody holds A there, the chord's 3rd, so the last melody note alone would have pointed you the wrong way; the resting chord (bass F) decides. D minor would need the phrases to rest on a D chord, and none does."},
      {"q": "Which layer plays in the chorus but not in the verse?", "choices": ["Bass", "Strings", "Electric piano", "Lead"], "answer": 1},
      {"q": "What happens at the end of the chorus pattern?", "choices": ["A tom fill", "A key change", "Silence", "A tempo change"], "answer": 0},
      {"q": "How does the bass change from verse to chorus?", "choices": ["Long notes become driving octave eighths", "It stops", "It doubles the melody", "Nothing changes"], "answer": 0}
    ]
  }
}
```

```exercise
{
  "id": "w45l3-bass",
  "type": "ear-bass",
  "title": "Pass 3: the verse bass",
  "instructions": "One bass note per bar, under the full verse mix.",
  "srs": false,
  "spec": {
    "key": "F",
    "chords": ["I", "ii", "IV", "V", "vi"],
    "answer": "play",
    "example": {
      "title": "Verse",
      "bpm": 110,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 ohat:8"},
        {"instrument": "bass", "seq": "F2:w | C2:w | D2:w | Bb1:w"},
        {"instrument": "epiano", "seq": "[F3 A3 C4]:h [F3 A3 C4]:h | [E3 G3 C4]:h [E3 G3 C4]:h | [F3 A3 D4]:h [F3 A3 D4]:h | [F3 Bb3 D4]:h [F3 Bb3 D4]:h"},
        {"instrument": "lead", "seq": "A4:q A4:q G4:q F4:q | E4:h. r:q | F4:q F4:q A4:q C5:q | D5:h. r:q"}
      ]
    },
    "track": 1
  }
}
```

```exercise
{
  "id": "w45l3-prog",
  "type": "ear-progression",
  "title": "Pass 4: the chorus numerals",
  "srs": false,
  "spec": {
    "key": "F",
    "mode": "major",
    "chords": ["I", "ii", "IV", "V", "vi"],
    "example": {
      "title": "Chorus",
      "bpm": 110,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "drums", "seq": "[kick crash]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 [kick hihat]:8 [snare hihat]:8 hihat:8 | [kick hihat]:8 hihat:8 [snare hihat]:8 hihat:8 [kick hihat]:8 tom:8 tom:8 snare:8"},
        {"instrument": "bass", "seq": "Bb1:8 Bb1:8 Bb2:8 Bb1:8 Bb1:8 Bb1:8 Bb2:8 Bb1:8 | C2:8 C2:8 C3:8 C2:8 C2:8 C2:8 C3:8 C2:8 | D2:8 D2:8 D3:8 D2:8 D2:8 D2:8 D3:8 D2:8 | F2:8 F2:8 F3:8 F2:8 F2:8 F2:8 F3:8 F2:8"},
        {"instrument": "epiano", "seq": "[F3 Bb3 D4]:q. [F3 Bb3 D4]:8 r:q [F3 Bb3 D4]:q | [E3 G3 C4]:q. [E3 G3 C4]:8 r:q [E3 G3 C4]:q | [F3 A3 D4]:q. [F3 A3 D4]:8 r:q [F3 A3 D4]:q | [F3 A3 C4]:q. [F3 A3 C4]:8 r:q [F3 A3 C4]:q"},
        {"instrument": "strings", "seq": "[Bb3 D4 F4]:w | [C4 E4 G4]:w | [A3 D4 F4]:w | [A3 C4 F4]:w"},
        {"instrument": "lead", "seq": "F5:q. D5:8 D5:q C5:q | E5:q. C5:8 C5:h | F5:q. D5:8 F5:q A5:q | A5:h. r:q"}
      ]
    },
    "progression": ["IV", "V", "vi", "I"]
  }
}
```

```exercise
{
  "id": "w45l3-session1",
  "type": "daw-task",
  "title": "Session 1: verse and chorus rhythm section (16 bars)",
  "spec": {
    "template": {
      "bpm": 110,
      "key": "F",
      "tracks": [
        {"instrument": "drums", "seq": ""},
        {"instrument": "bass", "seq": ""},
        {"instrument": "epiano", "seq": ""},
        {"instrument": "strings", "seq": ""},
        {"instrument": "lead", "seq": ""}
      ],
      "markers": [
        {"bar": 1, "name": "Verse 1"},
        {"bar": 9, "name": "Chorus 1"},
        {"bar": 17, "name": "Verse 2"},
        {"bar": 25, "name": "Chorus 2"}
      ]
    },
    "task": "Build the first verse and chorus (bars 1–16): drums (verse groove, chorus groove, a fill into each new section), bass and electric-piano chords, from your own transcription. Leave strings and lead for session 2. The checks compare your bass with the original's.",
    "checks": [
      {"kind": "bars", "min": 16},
      {"kind": "drum-pattern", "requires": ["kick", "snare", "hihat"], "snareOnBeats": [2, 4], "track": 0},
      {
        "kind": "matches-reference",
        "reference": {
          "bpm": 110,
          "tracks": [
            {"instrument": "bass", "seq": "F2:w | C2:w | D2:w | Bb1:w | F2:w | C2:w | D2:w | Bb1:w | Bb1:8 Bb1:8 Bb2:8 Bb1:8 Bb1:8 Bb1:8 Bb2:8 Bb1:8 | C2:8 C2:8 C3:8 C2:8 C2:8 C2:8 C3:8 C2:8 | D2:8 D2:8 D3:8 D2:8 D2:8 D2:8 D3:8 D2:8 | F2:8 F2:8 F3:8 F2:8 F2:8 F2:8 F3:8 F2:8 | Bb1:8 Bb1:8 Bb2:8 Bb1:8 Bb1:8 Bb1:8 Bb2:8 Bb1:8 | C2:8 C2:8 C3:8 C2:8 C2:8 C2:8 C3:8 C2:8 | D2:8 D2:8 D3:8 D2:8 D2:8 D2:8 D3:8 D2:8 | F2:8 F2:8 F3:8 F2:8 F2:8 F2:8 F3:8 F2:8"}
          ]
        },
        "track": 1,
        "refTrack": 0,
        "minSimilarity": 0.7,
        "octave": "any"
      },
      {
        "kind": "plays-progression",
        "progression": ["I", "V", "vi", "IV", "I", "V", "vi", "IV", "IV", "V", "vi", "I", "IV", "V", "vi", "I"],
        "barsPerChord": 1,
        "mode": "chords",
        "minRatio": 0.75,
        "track": 2
      }
    ],
    "minBars": 16,
    "projectRef": "w45-mystery5"
  }
}
```

## Session 2 — melody, strings, the whole song

Start with the melody: chorus hook first (it's the part everyone remembers), then the verse tune. First note by
keyboard search, then up/down and step/leap for each next note, two or three notes at a time. Check: play along with the
loop — a wrong key sticks out.

For the rebuild:

1. Duplicate your 16 bars into 17–32 before adding anything, so both verses and choruses match.
2. Strings in the choruses only: hold the chorus chords (you already know them) as long notes.
3. Enter the lead from your answers above.
4. A/B four bars at a time: original, then yours. Judge one layer at a time — solo it in your project and listen for it
   in the original. The bass and the lead matter most; a slightly different drum fill does not.

```exercise
{
  "id": "w45l3-hook",
  "type": "ear-melody",
  "title": "Pass 5: the chorus hook",
  "instructions": "Twelve notes over the chorus chords. Play them back.",
  "srs": false,
  "spec": {
    "key": "F",
    "degrees": [1, 2, 3, 4, 5, 6, 7],
    "answer": "play",
    "example": {
      "title": "Chorus hook",
      "bpm": 96,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "epiano", "seq": "[F3 Bb3 D4]:q. [F3 Bb3 D4]:8 r:q [F3 Bb3 D4]:q | [E3 G3 C4]:q. [E3 G3 C4]:8 r:q [E3 G3 C4]:q | [F3 A3 D4]:q. [F3 A3 D4]:8 r:q [F3 A3 D4]:q | [F3 A3 C4]:q. [F3 A3 C4]:8 r:q [F3 A3 C4]:q"},
        {"instrument": "lead", "seq": "F5:q. D5:8 D5:q C5:q | E5:q. C5:8 C5:h | F5:q. D5:8 F5:q A5:q | A5:h. r:q"}
      ]
    },
    "track": 1
  }
}
```

```exercise
{
  "id": "w45l3-verse",
  "type": "ear-melody",
  "title": "Pass 5: the verse tune as degrees",
  "instructions": "Ten notes over the verse chords. Answer as degrees of F major.",
  "srs": false,
  "spec": {
    "key": "F",
    "degrees": [1, 2, 3, 4, 5, 6, 7],
    "answer": "degrees",
    "example": {
      "title": "Verse tune",
      "bpm": 96,
      "timeSig": "4/4",
      "tracks": [
        {"instrument": "epiano", "seq": "[F3 A3 C4]:h [F3 A3 C4]:h | [E3 G3 C4]:h [E3 G3 C4]:h | [F3 A3 D4]:h [F3 A3 D4]:h | [F3 Bb3 D4]:h [F3 Bb3 D4]:h"},
        {"instrument": "lead", "seq": "A4:q A4:q G4:q F4:q | E4:h. r:q | F4:q F4:q A4:q C5:q | D5:h. r:q"}
      ]
    },
    "track": 1
  }
}
```

```exercise
{
  "id": "w45l3-session2",
  "type": "daw-task",
  "title": "Session 2: all 32 bars",
  "spec": {
    "template": {
      "bpm": 110,
      "key": "F",
      "tracks": [
        {"instrument": "drums", "seq": ""},
        {"instrument": "bass", "seq": ""},
        {"instrument": "epiano", "seq": ""},
        {"instrument": "strings", "seq": ""},
        {"instrument": "lead", "seq": ""}
      ],
      "markers": [
        {"bar": 1, "name": "Verse 1"},
        {"bar": 9, "name": "Chorus 1"},
        {"bar": 17, "name": "Verse 2"},
        {"bar": 25, "name": "Chorus 2"}
      ]
    },
    "task": "Copy your 16 bars to make Verse – Chorus – Verse – Chorus (32 bars), add the strings in the choruses only and the lead melody throughout. Then A/B: four bars of the original, four of yours. Fix differences you can hear; ignore ones you can't.",
    "checks": [
      {"kind": "bars", "min": 32, "max": 32},
      {"kind": "has-tracks", "instruments": ["drums", "bass", "epiano", "strings", "lead"]},
      {
        "kind": "matches-reference",
        "reference": {
          "bpm": 110,
          "tracks": [
            {"instrument": "bass", "seq": "F2:w | C2:w | D2:w | Bb1:w | F2:w | C2:w | D2:w | Bb1:w | Bb1:8 Bb1:8 Bb2:8 Bb1:8 Bb1:8 Bb1:8 Bb2:8 Bb1:8 | C2:8 C2:8 C3:8 C2:8 C2:8 C2:8 C3:8 C2:8 | D2:8 D2:8 D3:8 D2:8 D2:8 D2:8 D3:8 D2:8 | F2:8 F2:8 F3:8 F2:8 F2:8 F2:8 F3:8 F2:8 | Bb1:8 Bb1:8 Bb2:8 Bb1:8 Bb1:8 Bb1:8 Bb2:8 Bb1:8 | C2:8 C2:8 C3:8 C2:8 C2:8 C2:8 C3:8 C2:8 | D2:8 D2:8 D3:8 D2:8 D2:8 D2:8 D3:8 D2:8 | F2:8 F2:8 F3:8 F2:8 F2:8 F2:8 F3:8 F2:8 | F2:w | C2:w | D2:w | Bb1:w | F2:w | C2:w | D2:w | Bb1:w | Bb1:8 Bb1:8 Bb2:8 Bb1:8 Bb1:8 Bb1:8 Bb2:8 Bb1:8 | C2:8 C2:8 C3:8 C2:8 C2:8 C2:8 C3:8 C2:8 | D2:8 D2:8 D3:8 D2:8 D2:8 D2:8 D3:8 D2:8 | F2:8 F2:8 F3:8 F2:8 F2:8 F2:8 F3:8 F2:8 | Bb1:8 Bb1:8 Bb2:8 Bb1:8 Bb1:8 Bb1:8 Bb2:8 Bb1:8 | C2:8 C2:8 C3:8 C2:8 C2:8 C2:8 C3:8 C2:8 | D2:8 D2:8 D3:8 D2:8 D2:8 D2:8 D3:8 D2:8 | F2:8 F2:8 F3:8 F2:8 F2:8 F2:8 F3:8 F2:8"}
          ]
        },
        "track": 1,
        "refTrack": 0,
        "minSimilarity": 0.75,
        "octave": "any"
      },
      {
        "kind": "matches-reference",
        "reference": {
          "bpm": 110,
          "tracks": [
            {"instrument": "lead", "seq": "A4:q A4:q G4:q F4:q | E4:h. r:q | F4:q F4:q A4:q C5:q | D5:h. r:q | A4:q A4:q G4:q F4:q | E4:h. r:q | F4:q F4:q A4:q C5:q | D5:h. r:q | F5:q. D5:8 D5:q C5:q | E5:q. C5:8 C5:h | F5:q. D5:8 F5:q A5:q | A5:h. r:q | F5:q. D5:8 D5:q C5:q | E5:q. C5:8 C5:h | F5:q. D5:8 F5:q A5:q | A5:h. r:q | A4:q A4:q G4:q F4:q | E4:h. r:q | F4:q F4:q A4:q C5:q | D5:h. r:q | A4:q A4:q G4:q F4:q | E4:h. r:q | F4:q F4:q A4:q C5:q | D5:h. r:q | F5:q. D5:8 D5:q C5:q | E5:q. C5:8 C5:h | F5:q. D5:8 F5:q A5:q | A5:h. r:q | F5:q. D5:8 D5:q C5:q | E5:q. C5:8 C5:h | F5:q. D5:8 F5:q A5:q | A5:h. r:q"}
          ]
        },
        "track": 4,
        "refTrack": 0,
        "minSimilarity": 0.7,
        "octave": "any"
      },
      {
        "kind": "custom",
        "id": "w45-ab-compare",
        "note": "Self-check: strings only in the choruses; I A/B'd each section against the original."
      }
    ],
    "minBars": 32,
    "maxBars": 32,
    "projectRef": "w45-mystery5"
  }
}
```

```exercise
{
  "id": "w45l3-reflect",
  "type": "reflect",
  "title": "What did the A/B reveal?",
  "spec": {
    "prompt": "List the differences you heard between your rebuild and the original, and which pass each belonged to (key, form, bass, chords, melody, groove, layers). Which pass is your weakest right now?",
    "minWords": 25
  }
}
```

## Between lessons

Play your rebuild and the original chorus back to back once more; fix the one difference that bothers you most.
