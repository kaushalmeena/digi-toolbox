import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";
import { TOOLS, toolHref } from "@/tools/registry";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", ...TOOLS.map((tool) => toolHref(tool.slug))].map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8
  }));
}
