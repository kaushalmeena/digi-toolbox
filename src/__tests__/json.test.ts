import { describe, expect, it } from "vitest";
import { convertJSONToCSV } from "@/screens/Tools/JSON/JSONToCSV/utils";
import { convertJSONToXML } from "@/screens/Tools/JSON/JSONToXML/utils";
import { convertJSONToYAML } from "@/screens/Tools/JSON/JSONToYAML/utils";
import { minifyJSON } from "@/screens/Tools/JSON/MinifyJSON/utils";
import { prettifyJSON } from "@/screens/Tools/JSON/PrettifyJSON/utils";

describe("JSON tools", () => {
  it("prettifies compact JSON with 2-space indentation", () => {
    expect(prettifyJSON('{"a":1,"b":[2,3]}')).toBe(
      '{\n  "a": 1,\n  "b": [\n    2,\n    3\n  ]\n}'
    );
  });

  it("minifies spaced-out JSON", () => {
    expect(minifyJSON('{\n  "a": 1\n}')).toBe('{"a":1}');
  });

  it("throws on invalid JSON", () => {
    expect(() => prettifyJSON("{ not json }")).toThrow();
  });

  it("converts a JSON array of objects to CSV", () => {
    const csv = convertJSONToCSV('[{"name":"ada","age":36}]');
    expect(csv).toContain("name,age");
    expect(csv).toContain("ada,36");
  });

  it("rejects non-array JSON for CSV", () => {
    expect(() => convertJSONToCSV('{"a":1}')).toThrow();
  });

  it("converts JSON to YAML", () => {
    expect(convertJSONToYAML('{"name":"tool","count":2}')).toBe(
      "name: tool\ncount: 2\n"
    );
  });

  it("converts JSON to XML", () => {
    const xml = convertJSONToXML('{"note":{"_text":"hi"}}');
    expect(xml).toContain("<note>");
    expect(xml).toContain("hi");
  });
});
