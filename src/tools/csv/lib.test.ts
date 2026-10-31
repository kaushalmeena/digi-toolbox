import { describe, expect, it } from "vitest";

import { convertCSVToJSON, convertCSVToXML, convertCSVToYAML } from "./lib";

const CSV = "a,b\n1,2\n3,4";

describe("CSV tools", () => {
  it("parses CSV with a header row into JSON objects", () => {
    expect(JSON.parse(convertCSVToJSON(CSV))).toEqual([
      { a: "1", b: "2" },
      { a: "3", b: "4" }
    ]);
  });

  it("accepts single-column CSV, which has no delimiter to detect", () => {
    expect(JSON.parse(convertCSVToJSON("name\nada\ngrace"))).toEqual([
      { name: "ada" },
      { name: "grace" }
    ]);
    expect(convertCSVToJSON("s")).toBe("[]");
  });

  it("surfaces parse errors", () => {
    // Unterminated quoted field triggers a papaparse error.
    expect(() => convertCSVToJSON('a,b\n"unterminated,2')).toThrow();
  });

  it("converts CSV to YAML", () => {
    const yaml = convertCSVToYAML(CSV);
    expect(yaml).toContain("a:");
    expect(yaml).toContain("b:");
  });

  it("converts CSV to XML", () => {
    const xml = convertCSVToXML(CSV);
    expect(typeof xml).toBe("string");
    expect(xml).toContain("1");
    expect(xml).toContain("4");
  });
});
