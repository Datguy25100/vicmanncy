const stats = [
  { value: "12+", label: "Years in operation" },
  { value: "640+", label: "Projects completed" },
  { value: "9", label: "Service lines under one roof" },
  { value: "RC 8754036", label: "Registered company" },
];

export function TrustBar() {
  return (
    <section className="border-y border-ink/5 bg-surface-tint">
      <div className="container-page grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <p className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
