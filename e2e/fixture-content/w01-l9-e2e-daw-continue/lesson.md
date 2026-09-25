---
id: w01-l9-e2e-daw-continue
title: E2E fixture — continue the song
week: 1
order: 9
phase: p1
duration_min: 10
goals:
  - Continue one project across two daw-tasks (projectRef)
  - Work against a countdown (timerMin)
tags: [daw, e2e]
---

# E2E fixture — continue the song

Only served by the e2e suite (`test.use({ contentFixture: true })`); not part of the curriculum.

```exercise
{
  "id": "t2",
  "type": "daw-task",
  "title": "Continue the song",
  "spec": {
    "template": { "bpm": 90, "key": "C", "tracks": [{ "instrument": "piano", "seq": "" }] },
    "task": "Keep your melody and add a bass part. You have two minutes.",
    "projectRef": "e2e-song",
    "timerMin": 2,
    "checks": [
      { "kind": "note-count", "min": 4 },
      { "kind": "has-tracks", "instruments": ["piano", "bass"] },
      { "kind": "custom", "id": "listened", "note": "I listened to the whole song" }
    ]
  }
}
```
