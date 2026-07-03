import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesGrid } from "@/components/sections/services-grid";
import { SolarCalculator } from "@/components/sections/solar-calculator";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Solar, Security & Telecom Installations",
  description:
    "Vicmanny Integrated Technology Services Limited installs off-grid solar, inverter systems, solar boreholes, CCTV & smart security, and telecom infrastructure across Lagos, Ogun & Nationwide. Get a free quote today.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <SolarCalculator />
      <ProjectsPreview />
      <TestimonialsCarousel />
      <FinalCta />
    </>
  );
}
