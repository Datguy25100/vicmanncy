import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="bg-primary py-20">
      <div className="container-page text-center">
        <h2 className="text-display-md font-bold text-white">
          Ready to see what your roof could save?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/85">
          A free consultation gets you a straight answer — including an honest
          "not yet" if that's the right call for your property.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/contact" size="lg">
            Get a Free Quote <ArrowRight size={18} />
          </Button>
          <Button
            href="/faq"
            variant="secondary"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            Read the FAQ
          </Button>
        </div>
      </div>
    </section>
  );
}
