import { describe, expect, it } from "vitest";

import { formatBytes, formatNumber } from "./format";

describe("formatNumber", () => {
  it("strips floating-point noise", () => {
    expect(formatNumber(0.1 + 0.2)).toBe("0.3");
    expect(formatNumber(1000 * 0.0003048)).toBe("0.3048");
  });

  it("returns an empty string for non-finite values", () => {
    expect(formatNumber(Number.NaN)).toBe("");
  });
});

describe("formatBytes", () => {
  it("scales to the nearest unit", () => {
    expect(formatBytes(512)).toBe("512 B");
    expect(formatBytes(2048)).toBe("2.0 KB");
  });
});
