import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Off-grid solar, inverter systems, solar boreholes, CCTV & smart security, telecommunications, and industrial cabling — everything Vicmanny Integrated offers, end to end.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything you need, one team"
        description="From your first consultation to years of maintenance after activation, every service below is handled in-house."
      />
      <ServicesGrid />
      <FinalCta />
    </>
  );
}
