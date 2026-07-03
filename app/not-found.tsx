import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-secondary">404</p>
      <h1 className="mt-3 text-display-lg font-bold">This page went off-grid.</h1>
      <p className="mt-4 max-w-md text-ink-muted">
        The page you're looking for doesn't exist or has moved. Let's get you back on track.
      </p>
      <Button href="/" className="mt-8">
        Back to home
      </Button>
    </section>
  );
}
