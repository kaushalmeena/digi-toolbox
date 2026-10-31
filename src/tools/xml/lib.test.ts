import { describe, expect, it } from "vitest";

import {
  convertXMLToCSV,
  convertXMLToJSON,
  convertXMLToYAML,
  minifyXML,
  prettifyXML
} from "./lib";

describe("XML tools", () => {
  it("prettifies XML across multiple lines", () => {
    const output = prettifyXML("<a><b>c</b></a>");
    expect(output.replace(/\s/g, "")).toContain("<b>c</b>");
    expect(output.split("\n").length).toBeGreaterThan(1);
  });

  it("minifies XML onto a single line", () => {
    expect(minifyXML("<a>\n  <b>c</b>\n</a>")).toBe("<a><b>c</b></a>");
  });

  it("converts XML to JSON (compact)", () => {
    const parsed = JSON.parse(convertXMLToJSON("<a>b</a>"));
    expect(parsed.a._text).toBe("b");
  });

  it("converts XML to YAML", () => {
    expect(typeof convertXMLToYAML("<a>b</a>")).toBe("string");
  });

  it("converts XML to CSV, requiring tabular (array) XML", () => {
    // Non-tabular XML has no rows to flatten, so it surfaces an error.
    expect(() => convertXMLToCSV("<a>b</a>")).toThrow();
  });
});
