import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { FinalCta } from "@/components/sections/final-cta";
import { ShieldCheck, Users, Leaf } from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Vicmanny Integrated Technology Services Limited has installed solar, security, and telecom infrastructure across Lagos, Ogun & Nationwide for over a decade.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Honest sizing, not upselling",
    description:
      "We size every system — solar, inverter, or security — from your real usage. If something doesn't pencil out for your property yet, we'll tell you.",
  },
  {
    icon: Users,
    title: "In-house crews only",
    description:
      "The people who design your system are the same certified technicians who install it — no rotating subcontractors.",
  },
  {
    icon: Leaf,
    title: "Built to last",
    description:
      "Every install is backed by manufacturer warranties and our own workmanship guarantee.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Vicmanny Integrated"
        title="One team for power, security, and connectivity."
        description={`${SITE.legalName} (${SITE.rcNumber}) has grown from a small installation crew into a full-service technology partner serving homeowners, estates, and businesses across ${SITE.serviceArea}.`}
      />

      <section className="bg-white py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/hero/installers-on-roof.jpg"
              alt="Vicmanny Integrated technicians installing a rooftop solar array"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-display-md font-bold">Our story</h2>
            <p className="mt-4 text-ink-muted">
              Vicmanny Integrated started with a simple frustration: too many installation
              quotes were built around a sales quota, not the client's actual site or
              budget. We set out to build a company that would tell a customer
              "not yet" if that was the honest answer.
            </p>
            <p className="mt-4 text-ink-muted">
              That's still how we operate today — whether it's an off-grid solar
              system, a CCTV install, a solar borehole, or telecom infrastructure
              for a site. Every job is scoped from real requirements, carried out
              by our own certified crews, and backed by after-sales support.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-tint py-20">
        <div className="container-page">
          <h2 className="text-display-md text-center font-bold">What we stand for</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <v.icon size={22} strokeWidth={2} />
                </span>
                <h3 className="mt-4 font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBar />
      <FinalCta />
    </>
  );
}
