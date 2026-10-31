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
