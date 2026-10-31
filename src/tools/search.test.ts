import { describe, expect, it } from "vitest";

import { TOOLS } from "./registry";
import { searchTools } from "./search";

const search = (query: string) =>
  searchTools(query, TOOLS).map((tool) => tool.name);

describe("searchTools", () => {
  it("ranks a word-boundary match above one buried inside a word", () => {
    const results = search("d");
    expect(results[0]).toMatch(/^D/);
    expect(results.indexOf("Base64 Decode")).toBeLessThan(
      results.indexOf("Base64 Encode")
    );
  });

  it("puts an exact name first", () => {
    expect(search("hex to text")[0]).toBe("Hex to Text");
  });

  it("prefers a name starting with the query", () => {
    const results = search("json");
    expect(results[0]).toMatch(/^JSON /);
    expect(results.indexOf("JSON to XML")).toBeLessThan(
      results.indexOf("CSV to JSON")
    );
  });

  it("matches a category so it pulls up the whole group", () => {
    expect(search("generators")).toEqual(
      expect.arrayContaining(["UUID Generator", "Hash Generator"])
    );
  });

  it("matches keywords that aren't in the name", () => {
    expect(search("epoch")).toContain("Unix Timestamp Converter");
    expect(search("weight")).toContain("Mass Converter");
    expect(search("sha256")).toContain("Hash Generator");
  });

  it("requires every term to match", () => {
    expect(search("yaml csv")).toEqual(
      expect.arrayContaining(["YAML to CSV", "CSV to YAML"])
    );
    expect(search("yaml csv")).not.toContain("JSON to CSV");
  });

  it("keeps the curated order for an empty query", () => {
    expect(search("  ")).toEqual(TOOLS.map((tool) => tool.name));
  });
});
