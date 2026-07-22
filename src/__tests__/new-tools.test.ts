import { describe, expect, it } from "vitest";
import { decodeJWT } from "@/screens/Tools/Other/JWTDecoder/utils";
import { generateUUIDs } from "@/screens/Tools/Other/UUIDGenerator/utils";
import { generateHash } from "@/screens/Tools/Text/HashGenerator/utils";

describe("JWT decoder", () => {
  // { "alg": "HS256", "typ": "JWT" } . { "sub": "123", "name": "Ada" } . sig
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
  it("generates the requested number of valid v4 UUIDs", () => {
    const uuids = generateUUIDs(3).split("\n");
    const v4 =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(uuids).toHaveLength(3);
    for (const uuid of uuids) {
      expect(uuid).toMatch(v4);
    }
  });

  it("clamps to at least one", () => {
    expect(generateUUIDs(0).split("\n")).toHaveLength(1);
  });
});

describe("Hash generator", () => {
  it("computes a known SHA-256 digest", async () => {
    expect(await generateHash("abc", "SHA-256")).toBe(
      "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
    );
  });
});
