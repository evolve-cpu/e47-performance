import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { readCmsStore } from "@/lib/cms";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const store = await readCmsStore();

  return store.pages
    .filter((page) => page.enabled && !page.deleted)
    .map((page) => ({
    url: `${siteConfig.url}${page.path === "/" ? "" : page.path}`,
    lastModified: new Date(),
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : 0.8
  }));
}
