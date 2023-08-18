import { isClosingTag, isOpeningTag, splitOnTags } from "../utils";

export const prettifyXML = (input: string): string => {
  const indent = "  ";
  let deferred: string[] = [];
  let depth = 0;
  let ignoreMode = false;

  return splitOnTags(input)
    .map((item) => {
      if (item.trim().startsWith("<![CDATA[")) {
        ignoreMode = true;
      }
      if (item.trim().endsWith("]]>")) {
        ignoreMode = false;
        deferred.push(item);
        const cdataBlock = deferred.join("");
        deferred = [];
        return cdataBlock;
      }
      if (ignoreMode) {
        deferred.push(item);
        return null;
      }

      const newItem = item.replace(/^\s+|\s+$/g, "");

      if (isClosingTag(newItem)) {
        depth -= 1;
      }
      if (isOpeningTag(newItem)) {
        depth += 1;
      }

      return indent.repeat(depth) + newItem;
    })
    .join("\n");
};
