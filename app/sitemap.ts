import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { posts } from "@/lib/blog";

const SITE_URL = "https://devonjoinery.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly" as const, priority: 1.0 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_URL}/expertise`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_URL}/gallery`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_URL}/blog`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly" as const, priority: 0.5 },
    { url: `${SITE_URL}/free-estimate`, changeFrequency: "yearly" as const, priority: 0.8 },
    { url: `${SITE_URL}/privacy-policy`, changeFrequency: "yearly" as const, priority: 0.2 },
  ].map((r) => ({ ...r, lastModified: now }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/expertise/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
