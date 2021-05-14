import { isClosingTag, isOpeningTag, splitOnTags } from "../../../common/utils";

export const prettifyXML = (input: string): string => {
  const indent = "  ";
  let depth = 0;
  let ignoreMode = false;
  let deferred = [];

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

      item = item.replace(/^\s+|\s+$/g, "");

      if (isClosingTag(item)) {
        depth--;
      }

      const line = indent.repeat(depth) + item;

      if (isOpeningTag(item)) {
        depth++;
      }

      return line;
    })
    .join("\n");
};
