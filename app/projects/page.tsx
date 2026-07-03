import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ProjectsGallery } from "@/components/sections/projects-gallery";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse recent residential and commercial solar installations completed by Vicmanny Integrated across Lagos, Ogun & Nationwide.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Recent installations"
        description="A sample of residential and commercial systems we've designed, permitted, and installed."
      />
      <section className="bg-white py-20">
        <div className="container-page">
          <ProjectsGallery />
        </div>
      </section>
      <FinalCta />
    </>
  );
}
