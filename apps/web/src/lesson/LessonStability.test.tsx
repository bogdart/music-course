import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { playSequence } from '../audio/engine';
import { useAudioStore } from '../stores/audio';
import { useProgressStore } from '../stores/progress';
import { LessonView } from './LessonView';
import { loadDemoLesson } from './demo';

vi.mock('../components/Staff/renderStaff', () => ({ renderStaff: vi.fn(() => 100) }));

const lesson = loadDemoLesson();
const renderLesson = () => render(<MemoryRouter><LessonView lesson={lesson} record={false} /></MemoryRouter>);

beforeEach(() => {
  useAudioStore.getState().setStarted(false);
  vi.mocked(playSequence).mockClear();
});

describe('lesson page stability (QA BUG-03 / BUG-07)', () => {
  it('finishing an exercise shows its summary and does not reset the other exercises', async () => {
    renderLesson();
    const other = screen.getByTestId('exercise-read-note-1');
    const otherItem = other.querySelector('[data-staff-canvas]')?.parentElement?.getAttribute('data-seq');
    const quiz = screen.getByTestId('exercise-quiz-1');
    fireEvent.click(within(quiz).getByRole('button', { name: '7' }));
    fireEvent.click(within(quiz).getByText('Next →'));
    fireEvent.click(within(quiz).getByRole('button', { name: 'C' }));
    fireEvent.click(within(quiz).getByRole('button', { name: 'E' }));
    fireEvent.click(within(quiz).getByText('Check'));
    await act(async () => {
      fireEvent.click(within(quiz).getByText('Finish'));
    });
    // progress arriving later must not remount the body either
    act(() => useProgressStore.setState({ summary: null }));
    expect(within(screen.getByTestId('exercise-quiz-1')).getByTestId('exercise-summary').textContent).toContain('100%');
    expect(screen.getByTestId('exercise-read-note-1').querySelector('[data-staff-canvas]')?.parentElement?.getAttribute('data-seq')).toBe(otherItem);
  });

  it('unlocking audio autoplays nothing; the exercise being worked on autoplays its next item', async () => {
    renderLesson();
    act(() => useAudioStore.getState().setStarted(true));
    await act(async () => {
      await new Promise((r) => setTimeout(r, 300));
    });
    expect(playSequence).not.toHaveBeenCalled();
    const ex = screen.getByTestId('exercise-ear-interval-1');
    fireEvent.pointerDown(ex);
    fireEvent.click(within(ex).getByText('Reveal'));
    vi.mocked(playSequence).mockClear();
    fireEvent.click(within(ex).getByText(/Next →/));
    await act(async () => {
      await new Promise((r) => setTimeout(r, 300));
    });
    expect(playSequence).toHaveBeenCalledTimes(1);
  });
});
