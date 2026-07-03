import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-secondary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-display-md font-bold">{title}</h2>
      {description && (
        <p className="mt-4 text-ink-muted">{description}</p>
      )}
    </div>
  );
}
