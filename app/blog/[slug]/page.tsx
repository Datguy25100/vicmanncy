import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { PageHero } from "@/components/sections/page-hero";
import { FinalCta } from "@/components/sections/final-cta";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={`${new Date(post.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })} · ${post.readMinutes} min read · By ${post.author}`}
      />

      <article className="bg-white py-16">
        <div className="container-page max-w-2xl">
          {post.content.map((paragraph, i) => (
            <p key={i} className="mb-5 text-ink-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      <FinalCta />
    </>
  );
}
