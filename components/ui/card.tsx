import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  accent = true,
}: {
  className?: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-surface p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover",
        className
      )}
    >
      {accent && (
        <span
          aria-hidden
          className="absolute left-0 top-0 h-1 w-12 rounded-br-md bg-primary"
        />
      )}
      {children}
    </div>
  );
}
