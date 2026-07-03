import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SolarCalculator } from "@/components/sections/solar-calculator";
import { QuoteForm } from "@/components/sections/quote-form";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Estimate your potential solar savings and request a formal, no-obligation quote from Vicmanny Integrated. Equipment pricing is quoted per system since it changes with the market.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Get a Quote"
        title="See what solar could save you"
        description="Equipment pricing moves with the market, so we quote every system individually rather than publishing a flat rate. Start with the savings estimate, then request a formal quote below."
      />

      <SolarCalculator />

      <section className="bg-white py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Request a quote"
            title="Get a formal, written quote"
            description="Three quick steps. No pressure, no obligation — just numbers specific to your property."
            align="center"
            className="mx-auto"
          />
          <div className="mx-auto mt-10 max-w-xl">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
