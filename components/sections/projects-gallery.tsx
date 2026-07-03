"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const filters = [
  { value: "all", label: "All Projects" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
] as const;

export function ProjectsGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]["value"]>("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              filter === f.value
                ? "bg-primary text-white"
                : "bg-surface-tint text-ink hover:bg-primary/10"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <div key={project.id} className="overflow-hidden rounded-2xl bg-white shadow-card">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold capitalize text-primary">
                {project.category}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-bold">{project.title}</h3>
              <p className="mt-1 text-sm text-ink-muted">{project.location} · {project.systemSize}</p>
              <p className="mt-3 text-sm text-ink-muted">{project.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
