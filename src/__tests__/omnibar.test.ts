import { describe, expect, it } from "vitest";
import { filterTools } from "@/components/OmnibarSearch/utils";
import { Tools } from "@/constants/tools";

const search = (query: string) =>
  filterTools(query, Tools).map((tool) => tool.name);

describe("omnibar tool search", () => {
  it("ranks a word-boundary match above one buried inside a word", () => {
    const results = search("d");
    // The regression this guards: plain substring matching put "Base64 Enco(d)e"
    // at the top, because it appears earliest in the tool list.
    expect(results[0]).toBe("Diff-Checker");
    expect(results.indexOf("Base64 Decode")).toBeLessThan(
      results.indexOf("Base64 Encode")
    );
  });

  it("puts an exact name first", () => {
    expect(search("hex to text")[0]).toBe("Hex to Text");
  });

  it("prefers a name starting with the query", () => {
    expect(search("json")[0]).toBe("JSON to CSV");
    expect(search("json").indexOf("JSON to XML")).toBeLessThan(
      search("json").indexOf("CSV to JSON")
    );
  });

  it("matches a category so it pulls up the whole group", () => {
    const results = search("converter");
    expect(results).toContain("Length Converter");
    // Scored below name matches, but still present.
    expect(results.length).toBeGreaterThan(5);
  });

  it("matches every word of a hyphenated name", () => {
    expect(search("checker")).toContain("Diff-Checker");
  });

  it("keeps the curated order when the query is empty", () => {
    expect(search("  ")).toEqual(Tools.map((tool) => tool.name));
  });

  it("returns nothing when there is no match", () => {
    expect(search("zzzz")).toEqual([]);
  });
});
