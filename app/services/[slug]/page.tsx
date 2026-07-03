import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { PageHero } from "@/components/sections/page-hero";
import { FinalCta } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <>
      <PageHero eyebrow="Services" title={service.name} description={service.description} />

      <section className="bg-white py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={service.localImage}
              alt={service.name}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-display-md font-bold">Benefits</h2>
            <ul className="mt-6 space-y-4">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-secondary" />
                  <span className="text-ink-muted">{b}</span>
                </li>
              ))}
            </ul>
            <Button href="/contact" className="mt-8">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-surface-tint py-20">
        <div className="container-page">
          <h2 className="text-display-md text-center font-bold">How it works</h2>
          <ol className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <li key={step.title} className="rounded-2xl bg-white p-6 shadow-card">
                <span className="text-sm font-semibold text-secondary">Step {i + 1}</span>
                <h3 className="mt-2 font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
