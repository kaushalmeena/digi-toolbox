import { MenuItemProps } from "@blueprintjs/core";
import { Tool } from "../../types";
import { ItemPredicate, ItemRendererProps } from "@blueprintjs/select";

function escapeRegExpChars(text: string) {
  return text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
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
    label: item.category,
    onClick: handleClick,
    onFocus: handleFocus,
    ref,
    text: highlightText(`${item.name}`, query)
  };
}

export const filterTool: ItemPredicate<Tool> = (
  query,
  item,
  _index,
  exactMatch
) => {
  const normalizedTitle = item.name.toLowerCase();
  const normalizedQuery = query.toLowerCase();
  if (exactMatch) {
    return normalizedTitle === normalizedQuery;
  } else {
    return `${normalizedTitle} ${item.name}`.indexOf(normalizedQuery) >= 0;
  }
};

export function areToolsEqual(item1: Tool, item2: Tool) {
  return item1.name.toLowerCase() === item2.name.toLowerCase();
}
