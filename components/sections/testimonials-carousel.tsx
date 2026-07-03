"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index % testimonials.length]!;

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-surface-tint py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="What homeowners say"
          title="Trusted by families and businesses across Lagos, Ogun & Nationwide"
          align="center"
          className="mx-auto"
        />

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-white p-8 shadow-card sm:p-10">
          <Quote className="text-secondary" size={32} strokeWidth={1.5} />
          <p className="mt-4 text-lg text-ink">{current.quote}</p>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="font-bold">{current.name}</p>
              <p className="text-sm text-ink-muted">{current.role}</p>
            </div>
            <div className="flex gap-0.5 text-accent">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white text-ink transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2 w-2 rounded-full transition-colors",
                  i === index ? "bg-primary" : "bg-ink/15"
                )}
              />
            ))}
          </div>
          <button
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white text-ink transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
