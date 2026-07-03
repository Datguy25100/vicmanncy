import { Button } from "@/components/ui/button";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white/95 p-3 backdrop-blur lg:hidden">
      <Button href="/contact" className="w-full" size="md">
        Get a Free Quote
      </Button>
    </div>
  );
}
