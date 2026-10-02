import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { LessonView } from './LessonView';
import { loadDemoLesson } from './demo';
import { EXERCISE_TYPES } from '@music/core';

// VexFlow needs real SVG text metrics; stub the renderer so the Staff component stays testable.
vi.mock('../components/Staff/renderStaff', () => ({ renderStaff: vi.fn(() => 100) }));

describe('lesson renderer (dev fixture)', () => {
  const lesson = loadDemoLesson();

  it('parses the fixture without problems', () => {
    expect(lesson.problems).toEqual([]);
    expect(lesson.blocks.map((b) => b.lang)).toEqual(['example', 'keyboard', 'staff', 'chords', ...Array(14).fill('exercise'), 'example', ...Array(22).fill('exercise')]);
    // every catalogue type except daw-task has a demo exercise
    const types = new Set(lesson.exercises.map((e) => e.type));
    for (const t of EXERCISE_TYPES) if (t !== 'daw-task') expect(types.has(t), t).toBe(true);
  });

  it('keeps a reveal block closed until asked, then renders its markdown and blocks', async () => {
    const { fireEvent } = await import('@testing-library/react');
    render(
      <MemoryRouter>
        <LessonView lesson={lesson} record={false} />
      </MemoryRouter>,
    );
    const box = screen.getByTestId('reveal');
    expect(box.textContent).not.toMatch(/secret loop/);
    fireEvent.click(within(box).getByRole('button', { name: /Show the answer chart/ }));
    expect(box.textContent).toMatch(/The secret loop is vi–IV–I–V/);
    expect(within(box).getByTestId('chords-block')).toBeTruthy();
  });

  it('renders every block type, inline helpers and the exercise rail', () => {
    render(
      <MemoryRouter>
        <LessonView lesson={lesson} record={false} />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { level: 1, name: /Dev Demo/ })).toBeTruthy();
    expect(screen.getAllByTestId('example-block').length).toBeGreaterThan(1);
    expect(screen.getByText('Reveal notation')).toBeTruthy();
    expect(screen.getByTestId('keyboard-block')).toBeTruthy();
    expect(screen.getByTestId('staff-block')).toBeTruthy();
    const chords = screen.getByTestId('chords-block');
    expect(within(chords).getByText('G7')).toBeTruthy();
    expect(within(chords).getByText('V7')).toBeTruthy();
    for (const id of ['ear-note-1', 'ear-octave-1', 'ear-interval-1', 'ear-chord-1', 'play-notes-1', 'quiz-1', 'quiz-input-1', 'read-note-1', 'ear-scale-1']) {
      expect(screen.getByTestId(`exercise-${id}`)).toBeTruthy();
    }
    expect(screen.queryByTestId('coming-soon')).toBeNull();
    // inline helpers
    expect(screen.getByRole('button', { name: '♪ C#4' })).toBeTruthy();
    expect(screen.getByRole('button', { name: /🎹 Cmaj7/ })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'octave' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'next lesson' }).getAttribute('href')).toBe('/lesson/w01-l2-pitch-and-octaves');
    // GFM table
    expect(screen.getAllByRole('table').some((t) => t.closest('.lesson-body') && !t.closest('.exercise'))).toBe(true);
    // rail lists all 36 exercises
    expect(within(screen.getByRole('complementary', { name: 'Exercises' })).getAllByRole("listitem")).toHaveLength(36);
  });

  it('shows an error card for broken blocks instead of crashing', () => {
    const broken = { ...lesson, body: '```keyboard\n{ not json\n```\n', blocks: [] };
    render(
      <MemoryRouter>
        <LessonView lesson={broken} record={false} />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('block-error').textContent).toMatch(/Invalid JSON/);
  });
});
