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

export type TimestampUnit =
  | "seconds"
  | "milliseconds"
  | "microseconds"
  | "nanoseconds"
  | "date string"
  | "now";

const NUMERIC_TIMESTAMP_REGEX = /^([+-])?(\d+)(?:\.(\d*))?$/;

// Integer-digit thresholds: up to 11 digits is seconds (until year 5138),
// then milliseconds, microseconds and nanoseconds every 3 digits.
const NUMERIC_UNITS: {
  maxDigits: number;
  unit: TimestampUnit;
  perMs: number;
}[] = [
  { maxDigits: 11, unit: "seconds", perMs: 1e-3 },
  { maxDigits: 14, unit: "milliseconds", perMs: 1 },
  { maxDigits: 17, unit: "microseconds", perMs: 1e3 },
  { maxDigits: Infinity, unit: "nanoseconds", perMs: 1e6 }
];

/**
 * Parses a Unix timestamp — seconds, milliseconds, microseconds or
 * nanoseconds, detected by magnitude — or any date string `Date` understands
 * (ISO 8601, RFC 2822). "now" resolves to `now`.
 */
export function parseTimestamp(
  input: string,
  now: Date = new Date()
): { date: Date; unit: TimestampUnit } {
  const value = input.trim().replaceAll("_", "");
  if (!value) {
    throw new Error("Enter a timestamp or date");
  }
  if (value.toLowerCase() === "now") {
    return { date: new Date(now.getTime()), unit: "now" };
  }

  const numeric = NUMERIC_TIMESTAMP_REGEX.exec(value);
  let date: Date;
  let unit: TimestampUnit;
  if (numeric) {
    const digits = numeric[2].replace(/^0+(?=\d)/, "").length;
    const match = NUMERIC_UNITS.find((entry) => digits <= entry.maxDigits);
    // NUMERIC_UNITS ends with an Infinity bound, so there's always a match.
    const { unit: detected, perMs } = match ?? NUMERIC_UNITS[0];
    date = new Date(Math.round(Number(value) / perMs));
    unit = detected;
  } else {
    date = new Date(value);
    unit = "date string";
    if (Number.isNaN(date.getTime())) {
      throw new Error(
        "Unrecognized timestamp. Enter Unix seconds (1700000000), milliseconds (1700000000000) or a date like 2024-01-15T10:30:00Z"
      );
    }
  }
  if (Number.isNaN(date.getTime())) {
    throw new Error(
      "That timestamp is outside the range JavaScript dates support (about ±275,000 years from 1970)"
    );
  }
  return { date, unit };
}

const RELATIVE_UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
  ["year", 365.2425 * 86400],
  ["month", 30.436875 * 86400],
  ["week", 7 * 86400],
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1]
];

/** "3 hours ago", "in 2 days", "yesterday" — relative to `now`. */
export function formatRelativeTime(
  date: Date,
  now: Date,
  locale?: string
): string {
  const seconds = (date.getTime() - now.getTime()) / 1000;
  const [unit, size] = RELATIVE_UNITS.find(
    ([, unitSeconds]) => Math.abs(seconds) >= unitSeconds
  ) ?? ["second", 1];
  const formatter = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  // `|| 0` turns -0 into 0 so "now" isn't rendered as "0 seconds ago".
  return formatter.format(Math.round(seconds / size) || 0, unit);
}

/** Calendar fields of `date` in UTC or in the runtime's local time zone. */
function calendarDate(date: Date, utc: boolean): Date {
  const result = new Date(0);
  if (utc) {
    result.setUTCFullYear(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate()
    );
  } else {
    result.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
  }
  return result;
}

/** ISO 8601 week-numbering year and week (weeks start Monday; week 1 holds Jan 4). */
export function getISOWeek(
  date: Date,
  utc = false
): { year: number; week: number } {
  const day = calendarDate(date, utc);
  // Move to the Thursday of this week; its year is the ISO week-year.
  day.setUTCDate(day.getUTCDate() + 4 - (day.getUTCDay() || 7));
  const yearStart = new Date(0);
  yearStart.setUTCFullYear(day.getUTCFullYear(), 0, 1);
  const week = Math.ceil(
    ((day.getTime() - yearStart.getTime()) / 86_400_000 + 1) / 7
  );
  return { year: day.getUTCFullYear(), week };
}

/** 1-based day of the year (1–366). */
export function getDayOfYear(date: Date, utc = false): number {
  const day = calendarDate(date, utc);
  const yearStart = new Date(0);
  yearStart.setUTCFullYear(day.getUTCFullYear(), 0, 1);
  return Math.round((day.getTime() - yearStart.getTime()) / 86_400_000) + 1;
}
