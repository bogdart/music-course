export function ComingSoon({ type, title }: { type: string; title?: string }) {
  return (
    <div className="card coming-soon" data-testid="coming-soon">
      <div className="coming-soon-icon" aria-hidden>🚧</div>
      <div>
        <strong>{title ?? 'Exercise'}</strong>
        <p className="muted">
          The <code>{type}</code> exercise type is coming soon. Keep going — the rest of the lesson works.
        </p>
      </div>
    </div>
  );
}
