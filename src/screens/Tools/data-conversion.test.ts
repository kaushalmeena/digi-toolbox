import { describe, expect, it } from "vitest";
import { convertCSVToJSON } from "./CSV/CSVToJSON/utils";
import { convertJSONToYAML } from "./JSON/JSONToYAML/utils";
import { minifyJSON } from "./JSON/MinifyJSON/utils";
import { prettifyJSON } from "./JSON/PrettifyJSON/utils";
import { convertYAMLToJSON } from "./YAML/YAMLToJSON/utils";

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
});

describe("JSON <-> YAML", () => {
  it("converts JSON to YAML", () => {
    expect(convertJSONToYAML('{"name":"tool","count":2}')).toBe(
      "name: tool\ncount: 2\n"
    );
  });

  it("converts YAML back to JSON", () => {
    expect(convertYAMLToJSON("name: tool\ncount: 2\n")).toBe(
      '{\n  "name": "tool",\n  "count": 2\n}'
    );
  });
});

describe("CSV to JSON", () => {
  it("parses CSV with a header row into objects", () => {
    const output = convertCSVToJSON("a,b\n1,2\n3,4");
    expect(JSON.parse(output)).toEqual([
      { a: "1", b: "2" },
      { a: "3", b: "4" }
    ]);
  });
});
