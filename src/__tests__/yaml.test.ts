import { describe, expect, it } from "vitest";
import { convertYAMLToCSV } from "@/screens/Tools/YAML/YAMLToCSV/utils";
import { convertYAMLToJSON } from "@/screens/Tools/YAML/YAMLToJSON/utils";
import { convertYAMLToXML } from "@/screens/Tools/YAML/YAMLToXML/utils";

describe("YAML tools", () => {
  it("converts YAML to JSON", () => {
    expect(convertYAMLToJSON("a: 1\n")).toBe('{\n  "a": 1\n}');
  });

  it("converts an object YAML to JSON", () => {
    expect(JSON.parse(convertYAMLToJSON("name: tool\ncount: 2\n"))).toEqual({
      name: "tool",
      count: 2
    });
  });

  it("converts YAML array to CSV", () => {
    const csv = convertYAMLToCSV("- a: 1\n  b: 2\n");
    expect(csv).toContain("a,b");
    expect(csv).toContain("1,2");
  });

  it("converts YAML to XML", () => {
    expect(typeof convertYAMLToXML("a: 1\n")).toBe("string");
  });
});
