import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const lastModified = new Date();

  return [
    { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    ...projects.map(
      (p): MetadataRoute.Sitemap[number] => ({
        url: `${base}/trabajo/${p.slug}`,
        lastModified,
        changeFrequency: "yearly",
        priority: 0.8,
      }),
    ),
  ];
}
