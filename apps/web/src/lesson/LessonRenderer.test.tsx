import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { LessonView } from './LessonView';
import { loadDemoLesson } from './demo';

// VexFlow needs real SVG text metrics; stub the renderer so the Staff component stays testable.
vi.mock('../components/Staff/renderStaff', () => ({ renderStaff: vi.fn(() => 100) }));

describe('lesson renderer (dev fixture)', () => {
  const lesson = loadDemoLesson();

  it('parses the fixture without problems', () => {
    expect(lesson.problems).toEqual([]);
    expect(lesson.blocks.map((b) => b.lang)).toEqual(['example', 'keyboard', 'staff', 'chords', ...Array(9).fill('exercise')]);
  });

  it('renders every block type, inline helpers and the exercise rail', () => {
    render(
      <MemoryRouter>
        <LessonView lesson={lesson} record={false} />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { level: 1, name: /Dev Demo/ })).toBeTruthy();
    expect(screen.getByTestId('example-block')).toBeTruthy();
    expect(screen.getByTestId('keyboard-block')).toBeTruthy();
    expect(screen.getByTestId('staff-block')).toBeTruthy();
    const chords = screen.getByTestId('chords-block');
    expect(within(chords).getByText('G7')).toBeTruthy();
    expect(within(chords).getByText('V7')).toBeTruthy();
    for (const id of ['ear-note-1', 'ear-octave-1', 'ear-interval-1', 'ear-chord-1', 'play-notes-1', 'quiz-1', 'quiz-input-1', 'read-note-1']) {
      expect(screen.getByTestId(`exercise-${id}`)).toBeTruthy();
    }
    expect(screen.getByTestId('coming-soon').textContent).toContain('ear-scale');
    // inline helpers
    expect(screen.getByRole('button', { name: '♪ C#4' })).toBeTruthy();
    expect(screen.getByRole('button', { name: /🎹 Cmaj7/ })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'octave' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'next lesson' }).getAttribute('href')).toBe('/lesson/w01-l2-pitch-and-octaves');
    // GFM table
    expect(screen.getByRole('table')).toBeTruthy();
    // rail lists all 9 exercises
    expect(within(screen.getByRole('complementary', { name: 'Exercises' })).getAllByRole('listitem')).toHaveLength(9);
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
