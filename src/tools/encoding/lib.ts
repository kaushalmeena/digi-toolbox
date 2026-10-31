import { decodeBase64, decodeBase64Url, encodeBase64 } from "@/lib/base64";

export { decodeBase64, encodeBase64 };

export function encodeURL(input: string): string {
  return encodeURIComponent(input);
}

export function decodeURL(input: string): string {
  return decodeURIComponent(input.replace(/\+/g, " "));
}

const HTML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};

export function encodeHTML(input: string): string {
  return input.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char]);
}

export function decodeHTML(input: string): string {
  // DOMParser builds an inert document: unlike assigning innerHTML, nothing in
  // the input (e.g. <img onerror>) can execute.
  const document = new DOMParser().parseFromString(input, "text/html");
  return document.documentElement.textContent ?? "";
}

const SLASH_ESCAPES: Record<string, string> = {
  "\\": "\\\\",
  "/": "\\/",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "\t": "\\t",
  "'": "\\'",
  '"': '\\"'
};

const SLASH_UNESCAPES: Record<string, string> = {
  b: "\b",
  f: "\f",
  n: "\n",
  r: "\r",
  t: "\t"
};

export function escapeSlash(input: string): string {
  return input.replace(/[\\/\b\f\n\r\t'"]/g, (char) => SLASH_ESCAPES[char]);
}

export function unescapeSlash(input: string): string {
  // A single pass, so "\\n" (an escaped backslash then "n") stays literal.
  return input.replace(
    /\\([\\/bfnrt'"])/g,
    (_, char: string) => SLASH_UNESCAPES[char] ?? char
  );
}

/** Each UTF-16 code unit as four hex digits, e.g. "AB" → "00410042". */
export function convertTextToHex(input: string): string {
  let output = "";
  for (let index = 0; index < input.length; index += 1) {
    output += input.charCodeAt(index).toString(16).padStart(4, "0");
  }
  return output;
}

export function convertHexToText(input: string): string {
  const hex = input.replace(/\s+/g, "");
  if (/[^0-9a-f]/i.test(hex)) {
    throw new Error("Input contains characters that aren't hexadecimal digits");
  }
  return (hex.match(/.{1,4}/g) ?? [])
    .map((unit) => String.fromCharCode(Number.parseInt(unit, 16)))
    .join("");
}

export function decodeJWT(input: string): string {
  const parts = input.trim().split(".");
  if (parts.length < 2) {
    throw new Error(
      "Invalid JWT: expected header.payload.signature separated by dots"
    );
  }
  try {
    const header = JSON.parse(decodeBase64Url(parts[0]));
    const payload = JSON.parse(decodeBase64Url(parts[1]));
    return JSON.stringify({ header, payload }, null, 2);
  } catch {
    throw new Error("Invalid JWT: header or payload is not base64url JSON");
  }
}
