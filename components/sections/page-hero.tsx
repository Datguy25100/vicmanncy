export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-surface-tint py-16 lg:py-20">
      <div className="container-page">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-secondary">
            {eyebrow}
          </p>
        )}
        <h1 className="text-display-lg font-bold">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-lg text-ink-muted">{description}</p>}
      </div>
    </section>
  );
}
