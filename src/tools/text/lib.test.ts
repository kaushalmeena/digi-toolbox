import { describe, expect, it } from "vitest";

import {
  analyzeText,
  CASE_STYLES,
  type CaseStyle,
  convertCase,
  countLines,
  DEFAULT_LINE_OPTIONS,
  diffSides,
  extractTextFromHTML,
  extractTextFromXML,
  findMatches,
  formatDuration,
  type LineOptions,
  MAX_MATCHES,
  processLines,
  splitByMatches,
  splitWords
} from "./lib";

describe("Extract-text tools", () => {
  it("extracts text from HTML", () => {
    expect(extractTextFromHTML("<p>Hi <b>there</b></p>")).toBe("Hi there");
  });

  it("extracts text from XML", () => {
    expect(extractTextFromXML("<note><body>hi</body></note>")).toBe("hi");
  });
});

describe("Diff checker", () => {
  it("marks removed and added characters on each side", () => {
    const { left, right } = diffSides("cat", "cot");
    expect(left.some((change) => change.removed)).toBe(true);
    expect(right.some((change) => change.added)).toBe(true);
  });

  it("diffs by line", () => {
    const { additions, removals } = diffSides("a\nb\n", "a\nc\n", "lines");
    expect(additions).toBe(1);
    expect(removals).toBe(1);
  });

  it("returns empty sides when both inputs are empty", () => {
    expect(diffSides("", "").left).toEqual([]);
  });
});

describe("Regex tester", () => {
  it("finds every match with the g flag", () => {
    const { matches, error } = findMatches("\\d+", "g", "a1 b22 c333");
    expect(error).toBeNull();
    expect(matches.map((match) => match.value)).toEqual(["1", "22", "333"]);
    expect(matches[1]).toMatchObject({ index: 4, end: 6 });
  });

  it("returns only the first match without the g flag", () => {
    const { matches } = findMatches("\\d", "", "1 2 3");
    expect(matches).toHaveLength(1);
    expect(matches[0].value).toBe("1");
  });

  it("returns only the match at the start for a sticky non-global regex", () => {
    expect(findMatches("a", "y", "aab").matches).toHaveLength(1);
    expect(findMatches("b", "y", "aab").matches).toHaveLength(0);
    expect(findMatches("a", "gy", "aab").matches).toHaveLength(2);
  });

  it("respects the i, m and s flags", () => {
    expect(findMatches("abc", "gi", "ABC abc").matches).toHaveLength(2);
    expect(findMatches("^x", "gm", "x\nx").matches).toHaveLength(2);
    expect(findMatches("^x", "g", "x\nx").matches).toHaveLength(1);
    expect(findMatches("a.b", "s", "a\nb").matches).toHaveLength(1);
    expect(findMatches("a.b", "", "a\nb").matches).toHaveLength(0);
  });

  it("lists numbered and named capture groups", () => {
    const { matches } = findMatches(
      "(?<year>\\d{4})-(\\d{2})(x)?",
      "g",
      "on 2024-05"
    );
    expect(matches[0].groups).toEqual([
      { name: "1", value: "2024" },
      { name: "2", value: "05" },
      { name: "3", value: undefined },
      { name: "year", value: "2024" }
    ]);
  });

  it("does not loop forever on zero-length matches", () => {
    const { matches } = findMatches("", "g", "abc");
    expect(matches).toEqual([]);
    const empty = findMatches("x*", "g", "abc");
    expect(empty.matches.map((match) => match.index)).toEqual([0, 1, 2, 3]);
    const boundaries = findMatches("\\b", "g", "hi yo");
    expect(boundaries.matches).toHaveLength(4);
  });

  it("steps over astral code points in unicode mode", () => {
    const { matches } = findMatches("(?:)", "gu", "😀a");
    expect(matches.map((match) => match.index)).toEqual([0, 2, 3]);
  });

  it("caps the number of matches", () => {
    const { matches } = findMatches(".", "g", "x".repeat(MAX_MATCHES + 50));
    expect(matches).toHaveLength(MAX_MATCHES);
  });

  it("reports invalid patterns and flags", () => {
    expect(findMatches("(", "g", "x").error).toMatch(/Invalid|Unterminated/i);
    expect(findMatches("a", "gg", "x").error).toBeTruthy();
    expect(findMatches("a", "q", "x").matches).toEqual([]);
  });

  it("splits text into plain and matched segments", () => {
    const text = "a1b22";
    const { matches } = findMatches("\\d+", "g", text);
    expect(splitByMatches(text, matches)).toEqual([
      { text: "a", match: null },
      { text: "1", match: 0 },
      { text: "b", match: null },
      { text: "22", match: 1 }
    ]);
    expect(splitByMatches("abc", [])).toEqual([{ text: "abc", match: null }]);
  });
});

describe("Case converter", () => {
  it.each([
    ["fooBar", ["foo", "Bar"]],
    ["FooBar", ["Foo", "Bar"]],
    ["XMLHttpRequest", ["XML", "Http", "Request"]],
    ["getHTTPResponseCode", ["get", "HTTP", "Response", "Code"]],
    ["snake_case_words", ["snake", "case", "words"]],
    ["kebab-case-words", ["kebab", "case", "words"]],
    ["dot.case.words", ["dot", "case", "words"]],
    ["  spaced   out words ", ["spaced", "out", "words"]],
    ["CONSTANT_CASE", ["CONSTANT", "CASE"]],
    ["version2Beta", ["version", "2", "Beta"]],
    ["html5Parser", ["html", "5", "Parser"]],
    ["don't stop", ["dont", "stop"]],
    ["café_au-lait", ["café", "au", "lait"]],
    ["", []]
  ])("splits %j into words", (input, words) => {
    expect(splitWords(input)).toEqual(words);
  });

  const expected: Record<CaseStyle, string> = {
    camel: "xmlHttpRequestV2",
    pascal: "XmlHttpRequestV2",
    snake: "xml_http_request_v_2",
    constant: "XML_HTTP_REQUEST_V_2",
    kebab: "xml-http-request-v-2",
    train: "Xml-Http-Request-V-2",
    dot: "xml.http.request.v.2",
    path: "xml/http/request/v/2",
    title: "Xml Http Request V 2",
    sentence: "Xml http request v 2",
    lower: "xml http request v 2",
    upper: "XML HTTP REQUEST V 2"
  };

  it.each(CASE_STYLES.map((style) => style.id))("converts to %s", (style) => {
    expect(convertCase("XMLHttpRequest v2", style)).toBe(expected[style]);
  });

  it("round-trips between common styles", () => {
    expect(convertCase("user_first_name", "camel")).toBe("userFirstName");
    expect(convertCase("userFirstName", "kebab")).toBe("user-first-name");
    expect(convertCase("User-First-Name", "constant")).toBe("USER_FIRST_NAME");
    expect(convertCase("hello world", "title")).toBe("Hello World");
    expect(convertCase("HELLO WORLD", "sentence")).toBe("Hello world");
  });

  it("converts each line independently", () => {
    expect(convertCase("fooBar\n\nbaz_qux\r\nOne Two", "snake")).toBe(
      "foo_bar\n\nbaz_qux\none_two"
    );
  });

  it("returns an empty string for input without words", () => {
    expect(convertCase("--- !!", "camel")).toBe("");
  });
});

describe("Text statistics", () => {
  it("returns zeros for empty text", () => {
    const stats = analyzeText("");
    expect(stats).toMatchObject({
      characters: 0,
      charactersExcludingSpaces: 0,
      words: 0,
      uniqueWords: 0,
      lines: 0,
      nonEmptyLines: 0,
      sentences: 0,
      paragraphs: 0,
      bytes: 0,
      averageWordLength: 0,
      readingTime: 0,
      speakingTime: 0,
      topWords: []
    });
  });

  it("counts characters, words, lines, sentences and paragraphs", () => {
    const text =
      "Hello world. How are you?\nI'm fine!\n\nNew paragraph here.\n";
    const stats = analyzeText(text);
    expect(stats.characters).toBe(text.length);
    expect(stats.charactersExcludingSpaces).toBe(
      text.replace(/\s/g, "").length
    );
    expect(stats.words).toBe(10);
    expect(stats.lines).toBe(5);
    expect(stats.nonEmptyLines).toBe(3);
    expect(stats.sentences).toBe(4);
    expect(stats.paragraphs).toBe(2);
  });

  it("counts graphemes rather than UTF-16 units, and UTF-8 bytes", () => {
    const stats = analyzeText("héllo 👋🏽");
    expect(stats.characters).toBe(7);
    expect(stats.bytes).toBe(new TextEncoder().encode("héllo 👋🏽").length);
  });

  it("treats contractions and hyphenated words as single words", () => {
    const stats = analyzeText("don't well-known state-of-the-art");
    expect(stats.words).toBe(3);
  });

  it("counts unique words case-insensitively", () => {
    expect(analyzeText("Apple apple APPLE pear").uniqueWords).toBe(2);
  });

  it("computes average word length and time estimates", () => {
    const stats = analyzeText("ab abcd");
    expect(stats.averageWordLength).toBe(3);
    const long = analyzeText(
      Array.from({ length: 238 }, () => "word").join(" ")
    );
    expect(long.readingTime).toBeCloseTo(60);
    expect(long.speakingTime).toBeCloseTo((238 / 130) * 60);
  });

  it("ranks top words, ignoring stop words and numbers", () => {
    const stats = analyzeText(
      "The cat and the dog. The cat sat. A dog? The CAT! 42 42 42"
    );
    expect(stats.topWords).toEqual([
      { word: "cat", count: 3 },
      { word: "dog", count: 2 },
      { word: "sat", count: 1 }
    ]);
  });

  it("returns at most ten top words", () => {
    const text = Array.from(
      { length: 15 },
      (_, index) => `word${"x".repeat(index)}`
    ).join(" ");
    expect(analyzeText(text).topWords).toHaveLength(10);
  });

  it("formats durations", () => {
    expect(formatDuration(0)).toBe("0 sec");
    expect(formatDuration(44.6)).toBe("45 sec");
    expect(formatDuration(60)).toBe("1 min");
    expect(formatDuration(200)).toBe("3 min 20 sec");
    expect(formatDuration(3600)).toBe("1 hr");
    expect(formatDuration(3900)).toBe("1 hr 5 min");
  });
});

const runLines = (input: string, options: Partial<LineOptions> = {}) =>
  processLines(input, { ...DEFAULT_LINE_OPTIONS, sort: "none", ...options });

describe("Sort & dedupe lines", () => {
  it("leaves lines untouched with no options", () => {
    expect(runLines("b\na\n\nc")).toBe("b\na\n\nc");
  });

  it("returns empty output for empty input", () => {
    expect(runLines("", { sort: "asc", reverse: true })).toBe("");
  });

  it("sorts ascending and descending", () => {
    expect(runLines("banana\napple\ncherry", { sort: "asc" })).toBe(
      "apple\nbanana\ncherry"
    );
    expect(runLines("banana\napple\ncherry", { sort: "desc" })).toBe(
      "cherry\nbanana\napple"
    );
  });

  it("sorts naturally with numbers", () => {
    expect(runLines("file10\nfile2\nfile1", { sort: "asc" })).toBe(
      "file1\nfile10\nfile2"
    );
    expect(runLines("file10\nfile2\nfile1", { sort: "natural" })).toBe(
      "file1\nfile2\nfile10"
    );
  });

  it("sorts by length, keeping ties in their original order", () => {
    expect(runLines("ccc\nb\naa\na", { sort: "length" })).toBe("b\na\naa\nccc");
  });

  it("dedupes keeping the first occurrence", () => {
    expect(runLines("b\na\nb\nA", { unique: true })).toBe("b\na\nA");
    expect(
      runLines("b\na\nb\nA", { unique: true, caseInsensitive: true })
    ).toBe("b\na");
  });

  it("dedupes after trimming when trim is on", () => {
    expect(runLines(" a\na \na", { unique: true })).toBe(" a\na \na");
    expect(runLines(" a\na \na", { unique: true, trim: true })).toBe("a");
  });

  it("removes empty and whitespace-only lines", () => {
    expect(runLines("a\n\n  \nb", { removeEmpty: true })).toBe("a\nb");
  });

  it("reverses after sorting", () => {
    expect(runLines("1\n3\n2", { reverse: true })).toBe("2\n3\n1");
    expect(runLines("b\nc\na", { sort: "asc", reverse: true })).toBe("c\nb\na");
  });

  it("preserves a trailing newline without sorting an empty line to the top", () => {
    expect(runLines("b\na\n", { sort: "asc" })).toBe("a\nb\n");
  });

  it("handles CRLF input", () => {
    expect(runLines("b\r\na\r\n", { sort: "asc" })).toBe("a\nb\n");
  });

  it("counts lines ignoring a trailing newline", () => {
    expect(countLines("")).toBe(0);
    expect(countLines("a")).toBe(1);
    expect(countLines("a\nb\n")).toBe(2);
    expect(countLines("a\n\n")).toBe(2);
  });
});
