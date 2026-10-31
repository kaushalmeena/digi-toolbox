export type RGB = { r: number; g: number; b: number };

export type ColorFormat = "hex" | "rgb" | "hsl";

const HEX_REGEX = /^#?([a-f\d]{3}|[a-f\d]{6})$/i;
const RGB_REGEX =
  /^(?:rgba?\()?\s*(\d{1,3})\s*[,\s]\s*(\d{1,3})\s*[,\s]\s*(\d{1,3})\s*\)?$/i;
const HSL_REGEX =
  /^(?:hsla?\()?\s*(\d{1,3}(?:\.\d+)?)(?:deg)?\s*[,\s]\s*(\d{1,3}(?:\.\d+)?)%\s*[,\s]\s*(\d{1,3}(?:\.\d+)?)%\s*\)?$/i;

const clampByte = (value: number) => Math.max(0, Math.min(255, value));

function hueToChannel(p: number, q: number, hue: number): number {
  let t = hue;
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

/** Parses a HEX (#abc / #aabbcc), rgb() or hsl() color in any common notation. */
export function parseColor(input: string): RGB {
  const value = input.trim();
  const hex = HEX_REGEX.exec(value);
  if (hex) {
    const digits =
      hex[1].length === 3 ? [...hex[1]].map((d) => d + d).join("") : hex[1];
    return {
      r: Number.parseInt(digits.slice(0, 2), 16),
      g: Number.parseInt(digits.slice(2, 4), 16),
      b: Number.parseInt(digits.slice(4, 6), 16)
    };
  }
  const rgb = RGB_REGEX.exec(value);
  if (rgb) {
    const [r, g, b] = rgb.slice(1, 4).map(Number);
    if ([r, g, b].some((channel) => channel > 255)) {
      throw new Error("RGB channels must be between 0 and 255");
    }
    return { r, g, b };
  }
  const hsl = HSL_REGEX.exec(value);
  if (hsl) {
    const h = (Number(hsl[1]) % 360) / 360;
    const s = Math.min(Number(hsl[2]), 100) / 100;
    const l = Math.min(Number(hsl[3]), 100) / 100;
    if (s === 0) {
      const gray = Math.round(l * 255);
      return { r: gray, g: gray, b: gray };
    }
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    return {
      r: clampByte(Math.round(hueToChannel(p, q, h + 1 / 3) * 255)),
      g: clampByte(Math.round(hueToChannel(p, q, h) * 255)),
      b: clampByte(Math.round(hueToChannel(p, q, h - 1 / 3) * 255))
    };
  }
  throw new Error(
    "Unrecognized color. Try #ff8800, rgb(255, 136, 0) or hsl(32, 100%, 50%)"
  );
}

export function formatColor({ r, g, b }: RGB, format: ColorFormat): string {
  if (format === "hex") {
    return `#${[r, g, b].map((channel) => channel.toString(16).padStart(2, "0")).join("")}`;
  }
  if (format === "rgb") {
    return `rgb(${r}, ${g}, ${b})`;
  }
  const [rn, gn, bn] = [r / 255, g / 255, b / 255];
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === rn) h = (gn - bn) / d + (gn < bn ? 6 : 0);
    else if (max === gn) h = (bn - rn) / d + 2;
    else h = (rn - gn) / d + 4;
    h /= 6;
  }
  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

const DIGITS = "0123456789abcdefghijklmnopqrstuvwxyz";

/**
 * Converts an integer between bases 2–36 without losing precision (BigInt),
 * accepting an optional sign, 0x/0o/0b prefix matching the source base, and
 * `_` or space digit separators.
 */
export function convertBase(
  input: string,
  fromBase: number,
  toBase: number
): string {
  let value = input.trim().toLowerCase().replace(/[_\s]/g, "");
  const negative = value.startsWith("-");
  if (negative) {
    value = value.slice(1);
  }
  const prefix = { 16: "0x", 8: "0o", 2: "0b" }[fromBase];
  if (prefix && value.startsWith(prefix)) {
    value = value.slice(2);
  }
  if (!value) {
    throw new Error("Enter a number");
  }
  let result = 0n;
  const base = BigInt(fromBase);
  for (const char of value) {
    const digit = DIGITS.indexOf(char);
    if (digit < 0 || digit >= fromBase) {
      throw new Error(`"${char}" isn't a valid base-${fromBase} digit`);
    }
    result = result * base + BigInt(digit);
  }
  const output = result.toString(toBase);
  return negative && result !== 0n ? `-${output}` : output;
}
