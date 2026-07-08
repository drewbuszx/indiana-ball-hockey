import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/leagues", "/store", "/contact"];

  return routes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
