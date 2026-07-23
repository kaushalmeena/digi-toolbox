import { describe, expect, it } from "vitest";
import { decodeBase64 } from "@/screens/Tools/Text/Base64Decode/utils";
import { encodeBase64 } from "@/screens/Tools/Text/Base64Encode/utils";
import { extractTextFromHTML } from "@/screens/Tools/Text/ExtractTextFromHTML/utils";
import { extractTextFromXML } from "@/screens/Tools/Text/ExtractTextFromXML/utils";
import { generateHash } from "@/screens/Tools/Text/HashGenerator/utils";
import { convertHexToText } from "@/screens/Tools/Text/HexToText/utils";
import { decodeHTML } from "@/screens/Tools/Text/HTMLDecode/utils";
import { encodeHTML } from "@/screens/Tools/Text/HTMLEncode/utils";
import { escapeSlash } from "@/screens/Tools/Text/SlashEscape/utils";
import { unescapeSlash } from "@/screens/Tools/Text/SlashUnescape/utils";
import { convertTextToHex } from "@/screens/Tools/Text/TextToHex/utils";
import { decodeURL } from "@/screens/Tools/Text/URLDecode/utils";
import { encodeURL } from "@/screens/Tools/Text/URLEncode/utils";

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

describe("Extract-text tools", () => {
  it("extracts text from HTML", () => {
    expect(extractTextFromHTML("<p>Hi <b>there</b></p>")).toBe("Hi there");
  });

  it("extracts text from XML", () => {
    expect(extractTextFromXML("<note><body>hi</body></note>")).toBe("hi");
  });
});

describe("Hash generator", () => {
  it("computes a known SHA-256 digest", async () => {
    expect(await generateHash("abc", "SHA-256")).toBe(
      "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
    );
  });
});
