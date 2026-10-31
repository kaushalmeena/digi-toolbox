import { describe, expect, it } from "vitest";

import {
  decodeBase64,
  decodeHTML,
  decodeJWT,
  decodeURL,
  encodeBase64,
  encodeHTML,
  encodeURL,
  escapeSlash,
  convertHexToText,
  convertTextToHex,
  unescapeSlash
} from "./lib";
describe("Base64 tools", () => {
  it("encodes and decodes", () => {
    expect(encodeBase64("hello")).toBe("aGVsbG8=");
    expect(decodeBase64("aGVsbG8=")).toBe("hello");
  });
});

describe("Hex tools", () => {
  it("converts text to zero-padded hex and back", () => {
    expect(convertTextToHex("AB")).toBe("00410042");
    expect(convertHexToText("00410042")).toBe("AB");
  });
});

describe("URL tools", () => {
  it("encodes and decodes reserved characters", () => {
    expect(encodeURL("a b&c")).toBe("a%20b%26c");
    expect(decodeURL("a%20b%26c")).toBe("a b&c");
  });
});

describe("HTML tools", () => {
  it("encodes and decodes HTML entities", () => {
    expect(encodeHTML("<b> & </b>")).toBe("&lt;b&gt; &amp; &lt;/b&gt;");
    expect(decodeHTML("&lt;b&gt; &amp; &lt;/b&gt;")).toBe("<b> & </b>");
  });
});

describe("Slash tools", () => {
  it("escapes slashes and quotes", () => {
    expect(escapeSlash('a/b"c')).toBe('a\\/b\\"c');
  });

  it("round-trips slashes", () => {
    expect(unescapeSlash(escapeSlash("a/b/c"))).toBe("a/b/c");
  });
});

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

describe("Unicode and edge cases", () => {
  it("round-trips non-Latin text through Base64", () => {
    expect(decodeBase64(encodeBase64("héllo 👋"))).toBe("héllo 👋");
  });

  it("keeps an escaped backslash followed by n literal", () => {
    expect(unescapeSlash("a\\\\nb")).toBe("a\\nb");
    expect(unescapeSlash("a\\nb")).toBe("a\nb");
  });

  it("ignores whitespace and rejects non-hex input", () => {
    expect(convertHexToText("0041 0042")).toBe("AB");
    expect(() => convertHexToText("zz")).toThrow();
  });

  it("decodes HTML without executing it", () => {
    expect(decodeHTML('<img src=x onerror="alert(1)">&amp;')).toBe("&");
  });
});
