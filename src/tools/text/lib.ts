import { type Change, diffChars, diffLines, diffWords } from "diff";

function extractText(input: string, type: DOMParserSupportedType): string {
  const document = new DOMParser().parseFromString(input, type);
  return document.documentElement.textContent ?? "";
}

export function extractTextFromHTML(input: string): string {
  return extractText(input, "text/html");
}

export function extractTextFromXML(input: string): string {
  return extractText(input, "text/xml");
}

export type DiffMode = "chars" | "words" | "lines";

/**
 * Diffs two texts and splits the result into the two sides of a side-by-side
 * view: the left keeps removals, the right keeps additions.
 */
export function diffSides(
  original: string,
  modified: string,
  mode: DiffMode = "chars"
): { left: Change[]; right: Change[]; additions: number; removals: number } {
  if (!original && !modified) {
    return { left: [], right: [], additions: 0, removals: 0 };
  }
  const changes =
    mode === "lines"
      ? diffLines(original, modified)
      : mode === "words"
        ? diffWords(original, modified)
        : diffChars(original, modified);
  return {
    left: changes.filter((change) => !change.added),
    right: changes.filter((change) => !change.removed),
    additions: changes.filter((change) => change.added).length,
    removals: changes.filter((change) => change.removed).length
  };
}

// Regex tester

export type RegexGroup = { name: string; value: string | undefined };

export type RegexMatch = {
  index: number;
  end: number;
  value: string;
  /** Numbered groups ("1", "2", …) followed by named groups. */
  groups: RegexGroup[];
};

export const MAX_MATCHES = 1000;

/**
 * Runs `pattern` over `text` like `String#matchAll` (or `String#match`
 * without the g flag), stepping past empty matches and stopping after
 * MAX_MATCHES. An invalid pattern or flag set is reported as `error`.
 */
export function findMatches(
  pattern: string,
  flags: string,
  text: string
): { matches: RegexMatch[]; error: string | null } {
  if (!pattern) {
    return { matches: [], error: null };
  }
  let regex: RegExp;
  try {
    regex = new RegExp(pattern, flags);
  } catch (error) {
    return {
      matches: [],
      error: error instanceof Error ? error.message : "Invalid pattern"
    };
  }

  const matches: RegexMatch[] = [];
  const unicode = regex.unicode || flags.includes("v");
  while (matches.length < MAX_MATCHES) {
    const match = regex.exec(text);
    if (!match) {
      break;
    }
    const groups: RegexGroup[] = match
      .slice(1)
      .map((value, index) => ({ name: String(index + 1), value }));
    for (const [name, value] of Object.entries(match.groups ?? {})) {
      groups.push({ name, value });
    }
    matches.push({
      index: match.index,
      end: match.index + match[0].length,
      value: match[0],
      groups
    });
    if (!regex.global) {
      break;
    }
    if (match[0] === "") {
      // Step over the empty match (a whole code point in unicode mode).
      const code = text.codePointAt(regex.lastIndex);
      regex.lastIndex += unicode && code !== undefined && code > 0xffff ? 2 : 1;
    }
  }
  return { matches, error: null };
}

/** Splits text into plain and matched runs, for highlighting. */
export function splitByMatches(
  text: string,
  matches: readonly RegexMatch[]
): { text: string; match: number | null }[] {
  const segments: { text: string; match: number | null }[] = [];
  let cursor = 0;
  matches.forEach((match, index) => {
    if (match.index > cursor) {
      segments.push({ text: text.slice(cursor, match.index), match: null });
    }
    segments.push({ text: match.value, match: index });
    cursor = Math.max(cursor, match.end);
  });
  if (cursor < text.length) {
    segments.push({ text: text.slice(cursor), match: null });
  }
  return segments;
}

// Case converter

const WORD =
  /[\p{Lu}\p{Lt}]+(?![\p{Ll}\p{Lm}\p{M}])|[\p{Lu}\p{Lt}]?[\p{Ll}\p{Lm}\p{Lo}\p{M}]+|\p{N}+/gu;

/**
 * Splits identifiers and prose into words: camel/Pascal humps (keeping
 * acronyms together, as in "XMLHttpRequest" → XML, Http, Request), digit
 * runs, and anything separated by spaces or punctuation.
 */
export function splitWords(text: string): string[] {
  return text.replace(/['’]/g, "").match(WORD) ?? [];
}

export const CASE_STYLES = [
  { id: "camel", label: "camelCase" },
  { id: "pascal", label: "PascalCase" },
  { id: "snake", label: "snake_case" },
  { id: "constant", label: "CONSTANT_CASE" },
  { id: "kebab", label: "kebab-case" },
  { id: "train", label: "Train-Case" },
  { id: "dot", label: "dot.case" },
  { id: "path", label: "path/case" },
  { id: "title", label: "Title Case" },
  { id: "sentence", label: "Sentence case" },
  { id: "lower", label: "lower case" },
  { id: "upper", label: "UPPER CASE" }
] as const;

export type CaseStyle = (typeof CASE_STYLES)[number]["id"];

const lower = (word: string) => word.toLowerCase();
const upper = (word: string) => word.toUpperCase();
const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

function convertWords(words: string[], style: CaseStyle): string {
  switch (style) {
    case "camel":
      return words
        .map((word, index) => (index === 0 ? lower(word) : capitalize(word)))
        .join("");
    case "pascal":
      return words.map(capitalize).join("");
    case "snake":
      return words.map(lower).join("_");
    case "constant":
      return words.map(upper).join("_");
    case "kebab":
      return words.map(lower).join("-");
    case "train":
      return words.map(capitalize).join("-");
    case "dot":
      return words.map(lower).join(".");
    case "path":
      return words.map(lower).join("/");
    case "title":
      return words.map(capitalize).join(" ");
    case "sentence":
      return words
        .map((word, index) => (index === 0 ? capitalize(word) : lower(word)))
        .join(" ");
    case "lower":
      return words.map(lower).join(" ");
    case "upper":
      return words.map(upper).join(" ");
  }
}

/** Converts each line of `text` to `style` independently. */
export function convertCase(text: string, style: CaseStyle): string {
  return text
    .split(/\r?\n/)
    .map((line) => convertWords(splitWords(line), style))
    .join("\n");
}

// Text statistics

const READING_WPM = 238;
const SPEAKING_WPM = 130;

const STOP_WORDS = new Set(
  (
    "a about above after again against all am an and any are as at be because " +
    "been before being below between both but by can could did do does doing " +
    "down during each few for from further had has have having he her here " +
    "hers herself him himself his how i if in into is it its itself just me " +
    "more most my myself no nor not now of off on once only or other our ours " +
    "ourselves out over own same she should so some such than that the their " +
    "theirs them themselves then there these they this those through to too " +
    "under until up very was we were what when where which while who whom why " +
    "will with would you your yours yourself yourselves dont im ive its youre " +
    "thats isnt arent wasnt cant wont also us may might must shall"
  ).split(" ")
);

const TEXT_WORD = /[\p{L}\p{N}\p{M}]+(?:['’-][\p{L}\p{N}\p{M}]+)*/gu;

export type TextStatistics = {
  characters: number;
  charactersExcludingSpaces: number;
  words: number;
  uniqueWords: number;
  lines: number;
  nonEmptyLines: number;
  sentences: number;
  paragraphs: number;
  bytes: number;
  averageWordLength: number;
  /** Estimated seconds to read silently (~238 wpm). */
  readingTime: number;
  /** Estimated seconds to read aloud (~130 wpm). */
  speakingTime: number;
  topWords: { word: string; count: number }[];
};

function graphemes(text: string): string[] {
  const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
  return Array.from(segmenter.segment(text), (part) => part.segment);
}

function countSentences(text: string): number {
  const segmenter = new Intl.Segmenter("en", { granularity: "sentence" });
  let count = 0;
  for (const { segment } of segmenter.segment(text)) {
    if (/[\p{L}\p{N}]/u.test(segment)) {
      count += 1;
    }
  }
  return count;
}

export function analyzeText(text: string): TextStatistics {
  const characters = graphemes(text);
  const words = text.match(TEXT_WORD) ?? [];
  const normalized = words.map((word) => word.toLowerCase().replace(/’/g, "'"));
  const lines = text ? text.split(/\r\n|\r|\n/) : [];

  const frequency = new Map<string, number>();
  for (const word of normalized) {
    if (!STOP_WORDS.has(word.replace(/'/g, "")) && !/^\p{N}+$/u.test(word)) {
      frequency.set(word, (frequency.get(word) ?? 0) + 1);
    }
  }
  const topWords = [...frequency]
    .map(([word, count]) => ({ word, count }))
    .sort((a, b) => b.count - a.count || a.word.localeCompare(b.word))
    .slice(0, 10);

  const letters = words.reduce(
    (sum, word) => sum + word.replace(/['’-]/g, "").length,
    0
  );

  return {
    characters: characters.length,
    charactersExcludingSpaces: characters.filter((char) => !/^\s+$/.test(char))
      .length,
    words: words.length,
    uniqueWords: new Set(normalized).size,
    lines: lines.length,
    nonEmptyLines: lines.filter((line) => line.trim()).length,
    sentences: countSentences(text),
    paragraphs: text
      .split(/(?:\r?\n|\r)\s*(?:\r?\n|\r)/)
      .filter((part) => part.trim()).length,
    bytes: new TextEncoder().encode(text).length,
    averageWordLength: words.length > 0 ? letters / words.length : 0,
    readingTime: (words.length / READING_WPM) * 60,
    speakingTime: (words.length / SPEAKING_WPM) * 60,
    topWords
  };
}

/** Formats seconds as a short estimate: "45 sec", "3 min 20 sec", "1 hr 5 min". */
export function formatDuration(seconds: number): string {
  const total = Math.round(seconds);
  if (total < 60) {
    return `${total} sec`;
  }
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  if (hours > 0) {
    return minutes > 0 ? `${hours} hr ${minutes} min` : `${hours} hr`;
  }
  const rest = total % 60;
  return rest > 0 ? `${minutes} min ${rest} sec` : `${minutes} min`;
}

// Sort & dedupe lines

export type LineSort = "none" | "asc" | "desc" | "natural" | "length";

export type LineOptions = {
  sort: LineSort;
  caseInsensitive: boolean;
  unique: boolean;
  trim: boolean;
  removeEmpty: boolean;
  reverse: boolean;
};

export const DEFAULT_LINE_OPTIONS: LineOptions = {
  sort: "asc",
  caseInsensitive: false,
  unique: false,
  trim: false,
  removeEmpty: false,
  reverse: false
};

/**
 * Cleans up lines in a fixed order: trim → remove empty → dedupe (keeping
 * the first occurrence) → sort (stable) → reverse. A trailing newline in the
 * input is preserved and doesn't count as an empty line.
 */
export function processLines(input: string, options: LineOptions): string {
  const trailingNewline = /\r?\n$/.test(input);
  let lines = input.replace(/\r?\n$/, "").split(/\r?\n/);
  if (input === "") {
    return "";
  }

  if (options.trim) {
    lines = lines.map((line) => line.trim());
  }
  if (options.removeEmpty) {
    lines = lines.filter((line) => line.trim() !== "");
  }
  if (options.unique) {
    const seen = new Set<string>();
    lines = lines.filter((line) => {
      const key = options.caseInsensitive ? line.toLowerCase() : line;
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  }
  if (options.sort !== "none") {
    const collator = new Intl.Collator(undefined, {
      numeric: options.sort === "natural",
      sensitivity: options.caseInsensitive ? "accent" : "variant"
    });
    const compare: (a: string, b: string) => number =
      options.sort === "length"
        ? (a, b) => a.length - b.length
        : options.sort === "desc"
          ? (a, b) => collator.compare(b, a)
          : collator.compare;
    lines = lines.toSorted(compare);
  }
  if (options.reverse) {
    lines = lines.toReversed();
  }

  const output = lines.join("\n");
  return trailingNewline && lines.length > 0 ? `${output}\n` : output;
}

/** Number of lines in `text`, not counting a final trailing newline. */
export function countLines(text: string): number {
  return text ? text.replace(/\r?\n$/, "").split(/\r?\n/).length : 0;
}
