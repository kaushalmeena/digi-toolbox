import { describe, expect, it } from "vitest";

import {
  decodeBase64,
  decodeHTML,
  decodeJWT,
  decodeURL,
  encodeBase64,
  encodeHTML,
  encodeURL,
  parseURL,
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

const part = (input: string, label: string) =>
  parseURL(input).parts.find((item) => item.label === label)?.value;

describe("URL parser", () => {
  it("splits a full URL into its parts", () => {
    const { parts } = parseURL(
      "https://user:pa55@example.com:8080/a/b.html?x=1#top"
    );
    expect(Object.fromEntries(parts.map((p) => [p.label, p.value]))).toEqual({
      href: "https://user:pa55@example.com:8080/a/b.html?x=1#top",
      origin: "https://example.com:8080",
      protocol: "https:",
      username: "user",
      password: "pa55",
      host: "example.com:8080",
      hostname: "example.com",
      port: "8080",
      pathname: "/a/b.html",
      search: "?x=1",
      hash: "#top"
    });
  });

  it("decodes query parameters and keeps duplicates in order", () => {
    expect(
      parseURL("https://x.dev/?tag=a&q=hello%20world&tag=b&plus=a+b&empty")
        .params
    ).toEqual([
      { key: "tag", value: "a" },
      { key: "q", value: "hello world" },
      { key: "tag", value: "b" },
      { key: "plus", value: "a b" },
      { key: "empty", value: "" }
    ]);
  });

  it("returns no params when there is no query string", () => {
    expect(parseURL("https://example.com").params).toEqual([]);
  });

  it("assumes https for scheme-less hosts", () => {
    expect(part("example.com/path?q=1", "href")).toBe(
      "https://example.com/path?q=1"
    );
    expect(part("localhost:3000/api", "port")).toBe("3000");
    expect(part("//cdn.example.com/x.js", "protocol")).toBe("https:");
  });

  it("keeps other schemes", () => {
    expect(part("ftp://files.example.com/a", "protocol")).toBe("ftp:");
    expect(part("mailto:me@example.com", "pathname")).toBe("me@example.com");
  });

  it("trims surrounding whitespace", () => {
    expect(part("  https://example.com  ", "hostname")).toBe("example.com");
  });

  it("rejects input that isn't a URL", () => {
    expect(() => parseURL("")).toThrow(/Enter a URL/);
    expect(() => parseURL("hello world")).toThrow(/Not a valid URL/);
    expect(() => parseURL("/just/a/path")).toThrow(/Not a valid URL/);
    expect(() => parseURL("https://exa mple.com")).toThrow(/Not a valid URL/);
  });
});
