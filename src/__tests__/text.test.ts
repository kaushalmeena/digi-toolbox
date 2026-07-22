import { describe, expect, it } from "vitest";
import { decodeBase64 } from "@/screens/Tools/Text/Base64Decode/utils";
import { encodeBase64 } from "@/screens/Tools/Text/Base64Encode/utils";
import { convertHexToText } from "@/screens/Tools/Text/HexToText/utils";
import { escapeSlash } from "@/screens/Tools/Text/SlashEscape/utils";
import { convertTextToHex } from "@/screens/Tools/Text/TextToHex/utils";
import { encodeURL } from "@/screens/Tools/Text/URLEncode/utils";

describe("Base64 text tools", () => {
  it("encodes text to base64", () => {
    expect(encodeBase64("hello")).toBe("aGVsbG8=");
  });

  it("decodes base64 back to text", () => {
    expect(decodeBase64("aGVsbG8=")).toBe("hello");
  });

  it("round-trips through encode/decode", () => {
    const input = "GetThatTool 123!";
    expect(decodeBase64(encodeBase64(input))).toBe(input);
  });
});

describe("Hex text tools", () => {
  it("converts text to zero-padded 4-digit hex", () => {
    expect(convertTextToHex("AB")).toBe("00410042");
  });

  it("converts hex back to text", () => {
    expect(convertHexToText("00410042")).toBe("AB");
  });

  it("round-trips through text/hex", () => {
    const input = "Hello";
    expect(convertHexToText(convertTextToHex(input))).toBe(input);
  });
});

describe("URL encoding", () => {
  it("percent-encodes reserved characters", () => {
    expect(encodeURL("a b&c=d")).toBe("a%20b%26c%3Dd");
  });
});

describe("Slash escaping", () => {
  it("escapes backslashes, slashes and control characters", () => {
    expect(escapeSlash("a/b\\c\n")).toBe("a\\/b\\\\c\\n");
  });

  it("escapes quotes", () => {
    expect(escapeSlash('say "hi"')).toBe('say \\"hi\\"');
  });
});
