import { getCategory, type Tool } from "./registry";

/**
 * How well a tool answers `query`, higher being better; 0 means no match.
 *
 * A hit at the start of a word beats one buried inside a word: plain substring
 * matching would rank "Base64 Enco(d)e" above "Diff Checker" for "d".
 */
function scoreTool(tool: Tool, query: string): number {
  const name = tool.name.toLowerCase();
  if (name === query) {
    return 6;
  }
  if (name.startsWith(query)) {
    return 5;
  }
  if (name.split(/[\s\-_&]+/).some((word) => word.startsWith(query))) {
    return 4;
  }
  if (name.includes(query)) {
    return 3;
  }
  if (tool.keywords?.some((keyword) => keyword.startsWith(query))) {
    return 2;
  }
  // Lets a category name pull up its whole group, e.g. "text" or "converter".
  if (getCategory(tool.category).name.toLowerCase().startsWith(query)) {
    return 1;
  }
  return 0;
}

/**
 * Filters and ranks `tools` for a search query. Every whitespace-separated
 * term must match; an empty query keeps the curated (category) order.
 */
export function searchTools(query: string, tools: readonly Tool[]): Tool[] {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) {
    return [...tools];
  }
  const phrase = terms.join(" ");
  return tools
    .map((tool) => {
      const phraseScore = scoreTool(tool, phrase);
      const termScores = terms.map((term) => scoreTool(tool, term));
      const score = termScores.includes(0)
        ? phraseScore
        : Math.max(phraseScore, Math.min(...termScores));
      return { tool, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
    .map(({ tool }) => tool);
}
