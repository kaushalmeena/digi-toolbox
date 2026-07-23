import { describe, expect, it } from "vitest";
import { getLeftAndRightOutput } from "@/screens/Tools/Other/DiffChecker/utils";
import { decodeJWT } from "@/screens/Tools/Other/JWTDecoder/utils";
import { generateUUIDs } from "@/screens/Tools/Other/UUIDGenerator/utils";

describe("JWT decoder", () => {
  // { alg: HS256, typ: JWT } . { sub: 123, name: Ada } . signature
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
    "eyJzdWIiOiIxMjMiLCJuYW1lIjoiQWRhIn0." +
    "signature";

  it("decodes the header and payload", () => {
    const decoded = JSON.parse(decodeJWT(token));
    expect(decoded.header).toEqual({ alg: "HS256", typ: "JWT" });
    expect(decoded.payload).toEqual({ sub: "123", name: "Ada" });
  });

  it("throws on a malformed token", () => {
    expect(() => decodeJWT("not-a-jwt")).toThrow();
  });
});

describe("UUID generator", () => {
  const V4 =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  it("generates the requested number of valid v4 UUIDs", () => {
    const uuids = generateUUIDs(3).split("\n");
    expect(uuids).toHaveLength(3);
    for (const uuid of uuids) {
      expect(uuid).toMatch(V4);
    }
  });

  it("clamps to at least one", () => {
    expect(generateUUIDs(0).split("\n")).toHaveLength(1);
  });
});

describe("Diff checker", () => {
  it("marks removed and added characters on each side", () => {
    const [left, right] = getLeftAndRightOutput("cat", "cot");
    expect(left.some((change) => change.removed)).toBe(true);
    expect(right.some((change) => change.added)).toBe(true);
  });

  it("returns empty arrays when either side is empty", () => {
    expect(getLeftAndRightOutput("", "x")).toEqual([[], []]);
  });
});
