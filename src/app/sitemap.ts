import type { MetadataRoute } from "next";
import { SITE_BASE_URL } from "@/constants/config";
import { Tools } from "@/constants/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", ...Tools.map((tool) => tool.url)];
  return routes.map((route) => ({
    url: `${SITE_BASE_URL}${route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8
  }));
}
