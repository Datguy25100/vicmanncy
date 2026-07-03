import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="animate-rise">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-surface-tint px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
            {SITE.rcNumber} · Serving {SITE.serviceArea}
          </p>
          <h1 className="text-display-xl font-bold">
            Reliable power, security <span className="text-primary">& connectivity — installed right.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-ink-muted">
            From off-grid solar and inverter systems to CCTV, solar boreholes,
            and telecom infrastructure — one team handles the design, supply,
            and installation, end to end.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">
              Get a Free Quote <ArrowRight size={18} />
            </Button>
            <Button href="/pricing" variant="secondary" size="lg">
              Estimate Solar Savings
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[5/4]">
            <Image
              src="/images/hero/installers-on-roof.jpg"
              alt="Vicmanny Integrated technicians installing solar panels on a rooftop"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-primary/10 to-transparent" />
          </div>

          <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-white p-5 shadow-card sm:left-8 sm:right-auto sm:w-64">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Projects completed
            </p>
            <p className="mt-1 text-3xl font-bold text-primary">640+</p>
            <p className="text-sm text-ink-muted">solar, security & telecom installs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
