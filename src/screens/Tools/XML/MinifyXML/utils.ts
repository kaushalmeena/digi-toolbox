import { splitOnTags } from "../utils";

export const minifyXML = (input: string): string => {
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

      return item;
    })
    .join("");
};
