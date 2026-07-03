import Link from "next/link";
import { Sun, Zap, Droplet, Lightbulb, Camera, Radio, Cable, Building2, ShoppingBag, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const iconMap = {
  sun: Sun,
  zap: Zap,
  droplet: Droplet,
  lightbulb: Lightbulb,
  camera: Camera,
  radio: Radio,
  cable: Cable,
  building: Building2,
  shopping: ShoppingBag,
};

export function ServicesGrid() {
  return (
    <section className="bg-white py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="What we do"
          title="Power, security & connectivity, handled end to end"
          description="From first site survey to years of support after installation — one team, one point of contact."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group block">
                <Card className="h-full">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{service.name}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{service.shortDescription}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
