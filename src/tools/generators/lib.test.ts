import { describe, expect, it } from "vitest";

import { generateHash, generateUUIDs } from "./lib";

describe("Hash generator", () => {
  it("computes a known SHA-256 digest", async () => {
    expect(await generateHash("abc", "SHA-256")).toBe(
      "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
    );
  });
});

describe("UUID generator", () => {
  const V4 =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  it("generates the requested number of valid v4 UUIDs", () => {
    const uuids = generateUUIDs(3);
    expect(uuids).toHaveLength(3);
    for (const uuid of uuids) {
      expect(uuid).toMatch(V4);
    }
  });

  it("clamps to at least one", () => {
    expect(generateUUIDs(0)).toHaveLength(1);
  });
});
