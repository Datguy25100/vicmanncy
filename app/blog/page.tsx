import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Solar tips, incentive breakdowns, and maintenance guidance from the Vicmanny Integrated team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Solar tips, incentives, and maintenance guidance"
        description="Straightforward writing on what actually matters when you're considering or living with solar."
      />

      <section className="bg-white py-20">
        <div className="container-page grid gap-6 sm:grid-cols-2">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
              <Card className="h-full">
                <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
                  {post.category}
                </span>
                <h2 className="mt-2 text-lg font-bold">{post.title}</h2>
                <p className="mt-2 text-sm text-ink-muted">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-ink-muted">
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                    · {post.readMinutes} min read
                  </span>
                  <ArrowRight size={15} className="text-primary" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
