import { describe, expect, it } from "vitest";

import {
  convertJSONToCSV,
  convertJSONToTypeScript,
  convertJSONToXML,
  convertJSONToYAML,
  minifyJSON,
  prettifyJSON
} from "./lib";

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

describe("JSON to TypeScript", () => {
  it("declares a root interface for an object", () => {
    expect(
      convertJSONToTypeScript('{"id":1,"name":"Ada","admin":true,"x":null}')
    ).toBe(
      "export interface Root {\n" +
        "  id: number;\n" +
        "  name: string;\n" +
        "  admin: boolean;\n" +
        "  x: null;\n" +
        "}\n"
    );
  });

  it("extracts nested objects into named interfaces after their parent", () => {
    const ts = convertJSONToTypeScript(
      '{"user":{"address":{"city":"London"}}}'
    );
    expect(ts).toBe(
      "export interface Root {\n  user: User;\n}\n\n" +
        "export interface User {\n  address: Address;\n}\n\n" +
        "export interface Address {\n  city: string;\n}\n"
    );
  });

  it("singularizes array keys for element interfaces", () => {
    const ts = convertJSONToTypeScript(
      '{"users":[{"id":1}],"categories":[{"id":2}],"boxes":[{"id":3}],"data":[{"id":4}]}'
    );
    expect(ts).toContain("users: User[];");
    expect(ts).toContain("categories: Category[];");
    expect(ts).toContain("boxes: Box[];");
    expect(ts).toContain("data: DataItem[];");
    expect(ts).toContain("export interface Category {");
  });

  it("merges objects in arrays and marks missing keys optional", () => {
    const ts = convertJSONToTypeScript(
      '[{"id":1,"name":"a"},{"id":2},{"id":3,"tag":"x"}]'
    );
    expect(ts).toBe(
      "export type Root = RootItem[];\n\n" +
        "export interface RootItem {\n" +
        "  id: number;\n" +
        "  name?: string;\n" +
        "  tag?: string;\n" +
        "}\n"
    );
  });

  it("merges differing field types into a union", () => {
    const ts = convertJSONToTypeScript('[{"v":1},{"v":"one"},{"v":null}]');
    expect(ts).toContain("v: string | number | null;");
  });

  it("unions mixed array elements and parenthesizes them", () => {
    expect(convertJSONToTypeScript('{"a":[1,"x",true]}')).toContain(
      "a: (string | number | boolean)[];"
    );
    expect(convertJSONToTypeScript('{"a":[1,{"b":2}]}')).toContain(
      "a: (number | AItem)[];"
    );
  });

  it("types empty arrays as unknown[] and nested arrays as T[][]", () => {
    const ts = convertJSONToTypeScript('{"empty":[],"grid":[[1,2],[3]]}');
    expect(ts).toContain("empty: unknown[];");
    expect(ts).toContain("grid: number[][];");
  });

  it("takes element types from non-empty arrays when merged with empty ones", () => {
    expect(convertJSONToTypeScript('[{"t":[]},{"t":["a"]}]')).toContain(
      "t: string[];"
    );
  });

  it("quotes keys that aren't valid identifiers", () => {
    const ts = convertJSONToTypeScript(
      '{"first-name":"a","2fa":true,"ok_$":1,"with space":0}'
    );
    expect(ts).toContain('  "first-name": string;');
    expect(ts).toContain('  "2fa": boolean;');
    expect(ts).toContain("  ok_$: number;");
    expect(ts).toContain('  "with space": number;');
  });

  it("dedupes colliding interface names", () => {
    const ts = convertJSONToTypeScript(
      '{"item":{"a":1},"other":{"item":{"b":2}}}'
    );
    expect(ts).toContain("export interface Item {\n  a: number;\n}");
    expect(ts).toContain("export interface Item2 {\n  b: number;\n}");
    expect(ts).toContain("item: Item2;");
  });

  it("names types from awkward keys", () => {
    const ts = convertJSONToTypeScript(
      '{"user_profile":{"a":1},"123":{"b":2}}'
    );
    expect(ts).toContain("user_profile: UserProfile;");
    expect(ts).toContain('"123": T123;');
  });

  it("uses type aliases for primitive and array roots", () => {
    expect(convertJSONToTypeScript("42")).toBe("export type Root = number;\n");
    expect(convertJSONToTypeScript('"hi"')).toBe(
      "export type Root = string;\n"
    );
    expect(convertJSONToTypeScript("null")).toBe("export type Root = null;\n");
    expect(convertJSONToTypeScript("[]")).toBe(
      "export type Root = unknown[];\n"
    );
    expect(convertJSONToTypeScript("[1,2]")).toBe(
      "export type Root = number[];\n"
    );
  });

  it("types empty objects as records", () => {
    expect(convertJSONToTypeScript("{}")).toBe(
      "export type Root = Record<string, unknown>;\n"
    );
    expect(convertJSONToTypeScript('{"meta":{}}')).toContain(
      "meta: Record<string, unknown>;"
    );
  });

  it("supports a custom root name and type declarations", () => {
    expect(
      convertJSONToTypeScript('{"a":{"b":1}}', {
        rootName: "api response",
        declaration: "type"
      })
    ).toBe(
      "export type ApiResponse = {\n  a: A;\n};\n\n" +
        "export type A = {\n  b: number;\n};\n"
    );
  });

  it("throws on invalid JSON", () => {
    expect(() => convertJSONToTypeScript("{ nope }")).toThrow();
  });
});
