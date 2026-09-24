import type { Choice } from '@music/core';

export interface ChoiceButtonsProps {
  choices: Choice[];
  onChoose(value: string): void;
  /** Values the learner picked that were wrong */
  wrong?: string[];
  /** Correct value to highlight (after correct answer or reveal) */
  correct?: string | string[] | null;
  disabled?: boolean;
  /** Multi-select mode: selected values */
  selected?: string[];
}

export function ChoiceButtons({ choices, onChoose, wrong = [], correct, disabled, selected }: ChoiceButtonsProps) {
  const correctSet = new Set(correct == null ? [] : Array.isArray(correct) ? correct : [correct]);
  return (
    <div className="choice-grid" role="group">
      {choices.map((c) => {
        const cls = ['choice'];
        if (correctSet.has(c.value)) cls.push('choice-correct');
        else if (wrong.includes(c.value)) cls.push('choice-wrong');
        if (selected?.includes(c.value)) cls.push('choice-selected');
        return (
          <button
            key={c.value}
            type="button"
            className={cls.join(' ')}
            disabled={disabled || wrong.includes(c.value)}
            aria-pressed={selected ? selected.includes(c.value) : undefined}
            onClick={() => onChoose(c.value)}
          >
            {c.label}
          </button>
        );
      })}
    </div>
  );
}
