import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function ProjectsPreview() {
  const featured = projects.slice(0, 3);

  return (
    <section className="bg-white py-20">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Recent work"
            title="Projects we've completed"
            description="A look at recent residential and commercial installs across Lagos, Ogun & Nationwide."
          />
          <Button href="/projects" variant="secondary" className="hidden sm:inline-flex">
            View all projects <ArrowRight size={16} />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {featured.map((project) => (
            <Link key={project.id} href="/projects" className="group block">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold capitalize text-primary">
                  {project.category}
                </span>
              </div>
              <h3 className="mt-4 font-bold">{project.title}</h3>
              <p className="text-sm text-ink-muted">{project.location} · {project.systemSize}</p>
            </Link>
          ))}
        </div>

        <Button href="/projects" variant="secondary" className="mt-8 w-full sm:hidden">
          View all projects <ArrowRight size={16} />
        </Button>
      </div>
    </section>
  );
}
