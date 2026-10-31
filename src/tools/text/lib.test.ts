import { describe, expect, it } from "vitest";

import { diffSides, extractTextFromHTML, extractTextFromXML } from "./lib";
describe("Extract-text tools", () => {
  it("extracts text from HTML", () => {
    expect(extractTextFromHTML("<p>Hi <b>there</b></p>")).toBe("Hi there");
  });

  it("extracts text from XML", () => {
    expect(extractTextFromXML("<note><body>hi</body></note>")).toBe("hi");
  });
});

describe("Diff checker", () => {
  it("marks removed and added characters on each side", () => {
    const { left, right } = diffSides("cat", "cot");
    expect(left.some((change) => change.removed)).toBe(true);
    expect(right.some((change) => change.added)).toBe(true);
  });

  it("diffs by line", () => {
    const { additions, removals } = diffSides("a\nb\n", "a\nc\n", "lines");
    expect(additions).toBe(1);
    expect(removals).toBe(1);
  });

  it("returns empty sides when both inputs are empty", () => {
    expect(diffSides("", "").left).toEqual([]);
  });
});
