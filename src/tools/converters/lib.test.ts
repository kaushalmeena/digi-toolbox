import { describe, expect, it } from "vitest";

import { convertToAll, convertUnit } from "@/lib/units";

import {
  convertBase,
  formatColor,
  formatRelativeTime,
  getDayOfYear,
  getISOWeek,
  parseColor,
  parseTimestamp
} from "./lib";
import {
  DATA_SIZE_UNITS,
  LENGTH_UNITS,
  TEMPERATURE_UNITS,
  TIME_UNITS
} from "./units";

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

describe("Data size units", () => {
  it("converts between decimal and binary multiples", () => {
    const results = convertToAll(
      "1",
      byId(DATA_SIZE_UNITS, "gib"),
      DATA_SIZE_UNITS
    );
    expect(results.get("b")).toBe("1073741824");
    expect(results.get("mib")).toBe("1024");
    expect(results.get("mb")).toBe("1073.741824");
    expect(results.get("bit")).toBe("8589934592");
  });

  it("uses powers of 1000 for SI units", () => {
    const mb = byId(DATA_SIZE_UNITS, "mb");
    expect(convertUnit(1, mb, byId(DATA_SIZE_UNITS, "kb"))).toBe(1000);
    expect(convertUnit(1e6, mb, byId(DATA_SIZE_UNITS, "tb"))).toBe(1);
  });
});

describe("Time units", () => {
  it("converts common durations", () => {
    const results = convertToAll("1", byId(TIME_UNITS, "d"), TIME_UNITS);
    expect(results.get("h")).toBe("24");
    expect(results.get("min")).toBe("1440");
    expect(results.get("s")).toBe("86400");
    expect(results.get("ms")).toBe("86400000");
  });

  it("uses average Gregorian months and years", () => {
    const yr = byId(TIME_UNITS, "yr");
    expect(convertUnit(1, yr, byId(TIME_UNITS, "d"))).toBeCloseTo(365.2425);
    expect(convertUnit(1, yr, byId(TIME_UNITS, "mo"))).toBeCloseTo(12);
    expect(convertUnit(1, byId(TIME_UNITS, "c"), yr)).toBeCloseTo(100);
    expect(convertUnit(1, byId(TIME_UNITS, "dec"), yr)).toBeCloseTo(10);
  });
});

describe("Unix timestamp parser", () => {
  const NOW = new Date("2024-01-15T12:00:00Z");
  const iso = (input: string) => parseTimestamp(input, NOW).date.toISOString();
  const unit = (input: string) => parseTimestamp(input, NOW).unit;

  it("detects seconds, milliseconds, microseconds and nanoseconds", () => {
    expect(iso("1700000000")).toBe("2023-11-14T22:13:20.000Z");
    expect(unit("1700000000")).toBe("seconds");
    expect(iso("1700000000123")).toBe("2023-11-14T22:13:20.123Z");
    expect(unit("1700000000123")).toBe("milliseconds");
    expect(iso("1700000000123456")).toBe("2023-11-14T22:13:20.123Z");
    expect(unit("1700000000123456")).toBe("microseconds");
    expect(iso("1700000000123456789")).toBe("2023-11-14T22:13:20.123Z");
    expect(unit("1700000000123456789")).toBe("nanoseconds");
  });

  it("treats small numbers as seconds", () => {
    expect(iso("0")).toBe("1970-01-01T00:00:00.000Z");
    expect(iso("86400")).toBe("1970-01-02T00:00:00.000Z");
    expect(unit("0000000001")).toBe("seconds");
  });

  it("accepts negative values and decimals", () => {
    expect(iso("-86400")).toBe("1969-12-31T00:00:00.000Z");
    expect(iso("1700000000.5")).toBe("2023-11-14T22:13:20.500Z");
    expect(iso(" +1700000000 ")).toBe("2023-11-14T22:13:20.000Z");
    expect(iso("1_700_000_000")).toBe("2023-11-14T22:13:20.000Z");
  });

  it("parses ISO 8601 and RFC 2822 date strings", () => {
    expect(iso("2024-01-15T10:30:00Z")).toBe("2024-01-15T10:30:00.000Z");
    expect(iso("2024-01-15T10:30:00+02:00")).toBe("2024-01-15T08:30:00.000Z");
    expect(iso("Mon, 15 Jan 2024 10:30:00 GMT")).toBe(
      "2024-01-15T10:30:00.000Z"
    );
    expect(unit("2024-01-15T10:30:00Z")).toBe("date string");
  });

  it("resolves 'now' to the injected time", () => {
    expect(iso("now")).toBe(NOW.toISOString());
    expect(unit("NOW")).toBe("now");
  });

  it("rejects empty, unparseable and out-of-range input", () => {
    expect(() => parseTimestamp("", NOW)).toThrow(/Enter a timestamp/);
    expect(() => parseTimestamp("not a date", NOW)).toThrow(/Unrecognized/);
    expect(() => parseTimestamp("1e10", NOW)).toThrow(/Unrecognized/);
    expect(() => parseTimestamp("99999999999999999999999", NOW)).toThrow(
      /outside the range/
    );
  });
});

describe("Relative time", () => {
  const NOW = new Date("2024-01-15T12:00:00Z");
  const relative = (iso: string) =>
    formatRelativeTime(new Date(iso), NOW, "en");

  it("formats past and future offsets in the largest fitting unit", () => {
    expect(relative("2024-01-15T09:00:00Z")).toBe("3 hours ago");
    expect(relative("2024-01-17T12:00:00Z")).toBe("in 2 days");
    expect(relative("2024-01-15T12:00:30Z")).toBe("in 30 seconds");
    expect(relative("2024-01-15T11:55:00Z")).toBe("5 minutes ago");
    expect(relative("2024-01-29T12:00:00Z")).toBe("in 2 weeks");
    expect(relative("2023-10-15T12:00:00Z")).toBe("3 months ago");
    expect(relative("2014-01-15T12:00:00Z")).toBe("10 years ago");
  });

  it("uses natural phrases for adjacent values", () => {
    expect(relative("2024-01-15T12:00:00Z")).toBe("now");
    expect(relative("2024-01-14T12:00:00Z")).toBe("yesterday");
    expect(relative("2024-01-16T12:00:00Z")).toBe("tomorrow");
  });
});

describe("Calendar helpers", () => {
  it("computes ISO week numbers, including year boundaries", () => {
    expect(getISOWeek(new Date("2024-01-15T12:00:00Z"), true)).toEqual({
      year: 2024,
      week: 3
    });
    // 2021-01-01 is a Friday, so it belongs to week 53 of 2020.
    expect(getISOWeek(new Date("2021-01-01T00:00:00Z"), true)).toEqual({
      year: 2020,
      week: 53
    });
    // 2024-12-30 is a Monday in week 1 of 2025.
    expect(getISOWeek(new Date("2024-12-30T00:00:00Z"), true)).toEqual({
      year: 2025,
      week: 1
    });
  });

  it("computes the day of the year", () => {
    expect(getDayOfYear(new Date("2024-01-01T00:00:00Z"), true)).toBe(1);
    expect(getDayOfYear(new Date("2024-12-31T23:59:59Z"), true)).toBe(366);
    expect(getDayOfYear(new Date("2023-03-01T00:00:00Z"), true)).toBe(60);
  });

  it("uses local calendar fields by default", () => {
    const local = new Date(2024, 2, 1, 12);
    expect(getDayOfYear(local)).toBe(61);
    expect(getISOWeek(local)).toEqual({ year: 2024, week: 9 });
  });
});
