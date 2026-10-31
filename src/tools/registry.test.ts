import { describe, expect, it } from "vitest";

import { CATEGORIES, getTool, TOOLS } from "./registry";

describe("tool registry", () => {
  it("has unique, URL-safe slugs", () => {
    const slugs = TOOLS.map((tool) => tool.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) {
      expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  it("only points `inverse` at tools that point back", () => {
    const pairs = TOOLS.flatMap((tool) =>
      "inverse" in tool ? [[tool.slug, tool.inverse] as const] : []
    );
    for (const [slug, inverse] of pairs) {
      expect(getTool(inverse)?.inverse).toBe(slug);
    }
  });

  it("puts every tool in a known category", () => {
    const ids = new Set(CATEGORIES.map((category) => category.id));
    for (const tool of TOOLS) {
      expect(ids.has(tool.category)).toBe(true);
    }
  });
});
