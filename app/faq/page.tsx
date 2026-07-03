import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about solar financing, installation, maintenance, and warranties.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Common questions"
        description="Financing, installation, maintenance, and warranty questions we hear most often."
      />
      <section className="bg-surface-tint py-20">
        <div className="container-page max-w-3xl">
          <FaqAccordion />
        </div>
      </section>
      <FinalCta />
    </>
  );
}
