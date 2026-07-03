import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/pricing",
    "/blog",
    "/contact",
    "/faq",
  ].map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${SITE.url}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: p.date,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
