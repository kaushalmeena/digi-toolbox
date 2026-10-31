import { describe, expect, it } from "vitest";

import { convertToAll, convertUnit } from "@/lib/units";

import { convertBase, formatColor, parseColor } from "./lib";
import { LENGTH_UNITS, TEMPERATURE_UNITS } from "./units";

const byId = <T extends { id: string }>(list: T[], id: string) =>
  list.find((item) => item.id === id) as T;

describe("Temperature converter", () => {
  it("converts between scales", () => {
    const [c, f, k] = ["c", "f", "k"].map((id) => byId(TEMPERATURE_UNITS, id));
    expect(convertUnit(100, c, f)).toBe(212);
    expect(convertUnit(0, c, k)).toBe(273.15);
    expect(convertUnit(32, f, c)).toBe(0);
  });
});

describe("Linear units (length)", () => {
  it("converts kilometers to meters and meters to centimeters", () => {
    const km = byId(LENGTH_UNITS, "km");
    const results = convertToAll("1", km, LENGTH_UNITS);
    expect(results.get("m")).toBe("1000");
    expect(results.get("cm")).toBe("100000");
    expect(results.get("ft")).toBe("3280.83989501");
  });

  it("yields empty results for non-numeric input", () => {
    const results = convertToAll("abc", byId(LENGTH_UNITS, "m"), LENGTH_UNITS);
    expect(results.get("km")).toBe("");
  });
});

describe("Base converter", () => {
  it("converts between bases", () => {
    expect(convertBase("1010", 2, 10)).toBe("10");
    expect(convertBase("255", 10, 16)).toBe("ff");
    expect(convertBase("0xff", 16, 2)).toBe("11111111");
  });

  it("keeps precision beyond 2^53", () => {
    expect(convertBase("ffffffffffffffffff", 16, 10)).toBe(
      "4722366482869645213695"
    );
  });

  it("rejects digits outside the base", () => {
    expect(() => convertBase("102", 2, 10)).toThrow(/valid base-2 digit/);
  });
});

describe("Color converter", () => {
  it("converts hex to rgb and back", () => {
    expect(formatColor(parseColor("#ff0000"), "rgb")).toBe("rgb(255, 0, 0)");
    expect(formatColor(parseColor("rgb(255, 0, 0)"), "hex")).toBe("#ff0000");
  });

  it("converts hex to hsl", () => {
    expect(formatColor(parseColor("#ff0000"), "hsl")).toBe("hsl(0, 100%, 50%)");
  });

  it("accepts shorthand hex and hsl input", () => {
    expect(formatColor(parseColor("#f80"), "hex")).toBe("#ff8800");
    expect(formatColor(parseColor("hsl(120, 100%, 25%)"), "hex")).toBe(
      "#008000"
    );
  });

  it("rejects unknown formats", () => {
    expect(() => parseColor("blue-ish")).toThrow();
  });
});
