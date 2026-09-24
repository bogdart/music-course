import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { noteInputBus } from '../../input/NoteInputBus';
import { Keyboard } from './Keyboard';

describe('Keyboard', () => {
  it('renders every key in the range with names', () => {
    render(<Keyboard range={['C4', 'C5']} labels="names" />);
    const keys = screen.getAllByRole('button');
    expect(keys).toHaveLength(13);
    expect(screen.getByTestId('key-60').textContent).toContain('C4');
    expect(screen.getByTestId('key-62').textContent).toBe('D');
  });

  it('snaps a range that starts on a black key outward', () => {
    render(<Keyboard range={['C#4', 'D4']} labels="none" />);
    expect(screen.getAllByRole('button').map((b) => b.getAttribute('data-midi'))).toEqual(['60', '62', '61']);
  });

  it('shows degree labels for a key', () => {
    render(<Keyboard range={['G4', 'G5']} labels="degrees" keyName="G" />);
    expect(screen.getByTestId('key-67').textContent).toBe('1');
    expect(screen.getByTestId('key-78').textContent).toBe('7');
  });

  it('applies highlight roles and marks', () => {
    render(<Keyboard range={['C4', 'C5']} highlight={{ 60: 'root', 64: 'third' }} marks={{ 67: 'wrong' }} />);
    expect(screen.getByTestId('key-60').className).toMatch(/role_root/);
    expect(screen.getByTestId('key-64').className).toMatch(/role_third/);
    expect(screen.getByTestId('key-67').className).toMatch(/mark_wrong/);
  });

  it('emits presses to the note bus and callbacks (multi-pointer)', () => {
    const onNoteOn = vi.fn();
    const onNoteOff = vi.fn();
    const seen: string[] = [];
    const unsub = noteInputBus.subscribe((e) => seen.push(`${e.type}${e.midi}${e.source}`));
    render(<Keyboard range={['C4', 'C5']} onNoteOn={onNoteOn} onNoteOff={onNoteOff} />);
    fireEvent.pointerDown(screen.getByTestId('key-60'), { pointerId: 1 });
    fireEvent.pointerDown(screen.getByTestId('key-64'), { pointerId: 2 });
    fireEvent.pointerUp(screen.getByTestId('key-60'), { pointerId: 1 });
    fireEvent.pointerUp(screen.getByTestId('key-64'), { pointerId: 2 });
    expect(onNoteOn.mock.calls.map((c) => c[0])).toEqual([60, 64]);
    expect(onNoteOff.mock.calls.map((c) => c[0])).toEqual([60, 64]);
    expect(seen).toEqual(['on60screen', 'on64screen', 'off60screen', 'off64screen']);
    unsub();
  });

  it('ignores input when not interactive', () => {
    const onNoteOn = vi.fn();
    render(<Keyboard range={['C4', 'C5']} interactive={false} onNoteOn={onNoteOn} />);
    fireEvent.pointerDown(screen.getByTestId('key-60'), { pointerId: 1 });
    expect(onNoteOn).not.toHaveBeenCalled();
  });
});
