import type { MetadataRoute } from "next";
import { SITE_URL, Tools } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", ...Tools.map((tool) => tool.url)];
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8
  }));
}
