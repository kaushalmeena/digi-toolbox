import type { MenuItemProps } from "@blueprintjs/core";
import type { ItemListPredicate, ItemRendererProps } from "@blueprintjs/select";
import { CATEGORY_ICONS } from "@/constants/tools";
import type { Tool } from "@/types/tools";

function escapeRegExpChars(text: string) {
  return text.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}

function highlightText(text: string, query: string) {
  let lastIndex = 0;
  const words = query
    .split(/\s+/)
    .filter((word) => word.length > 0)
    .map(escapeRegExpChars);
  if (words.length === 0) {
    return [text];
  }
  const regexp = new RegExp(words.join("|"), "gi");
  const tokens: React.ReactNode[] = [];
  while (true) {
    const match = regexp.exec(text);
    if (!match) {
      break;
    }
    const length = match[0].length;
    const before = text.slice(lastIndex, regexp.lastIndex - length);
    if (before.length > 0) {
      tokens.push(before);
    }
    lastIndex = regexp.lastIndex;
    tokens.push(<strong key={lastIndex}>{match[0]}</strong>);
  }
  const rest = text.slice(lastIndex);
  if (rest.length > 0) {
    tokens.push(rest);
  }
  return tokens;
}

export function getToolItemProps(
  item: Tool,
  { handleClick, handleFocus, modifiers, query, ref }: ItemRendererProps
): MenuItemProps & React.Attributes {
  return {
    active: modifiers.active,
    disabled: modifiers.disabled,
    icon: CATEGORY_ICONS[item.category],
    label: item.category,
    onClick: handleClick,
    onFocus: handleFocus,
    ref,
    text: highlightText(item.name, query)
  };
}

/**
 * How well a tool answers `query`, higher being better; 0 means no match.
 *
 * Plain substring matching alone ranks badly, because a hit in the middle of a
 * word counts the same as one at the start: searching "d" would otherwise put
 * "Base64 Enco(d)e" above "Diff-Checker" and "JWT Decoder". Matches at a word
 * boundary therefore beat matches buried inside a word.
 */
function scoreTool(item: Tool, query: string) {
  const name = item.name.toLowerCase();
  if (name === query) {
    return 5;
  }
  if (name.startsWith(query)) {
    return 4;
  }
  // Tool names are worded like "JSON to CSV" and "Diff-Checker".
  if (name.split(/[\s\-_]+/).some((word) => word.startsWith(query))) {
    return 3;
  }
  if (name.includes(query)) {
    return 2;
  }
  // Lets a category name pull up its whole group, e.g. "text" or "converter".
  if (item.category.toLowerCase().startsWith(query)) {
    return 1;
  }
  return 0;
}

/**
 * Filters *and* orders results — Blueprint keeps the original item order when
 * given only an `itemPredicate`, so ranking has to happen at the list level.
 */
export const filterTools: ItemListPredicate<Tool> = (query, items) => {
  const normalizedQuery = query.trim().toLowerCase();
  if (normalizedQuery.length === 0) {
    // No query: keep the curated order, which groups tools by category.
    return items;
  }
  return items
    .map((item) => ({ item, score: scoreTool(item, normalizedQuery) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.item.name.localeCompare(b.item.name))
    .map(({ item }) => item);
};

export function areToolsEqual(item1: Tool, item2: Tool) {
  return item1.name.toLowerCase() === item2.name.toLowerCase();
}
