export const splitOnTags = (str: string): string[] =>
  str.split(/(<\/?[^>]+>)/g).filter((line) => line.trim() !== "");

export const isTag = (str: string): boolean => /<[^>!]+>/.test(str);

export const isClosingTag = (str: string): boolean => /<\/+[^>]+>/.test(str);

export const isSelfClosingTag = (str: string): boolean => /<[^>]+\/>/.test(str);

export const isXMLDeclaration = (str: string): boolean =>
  /<\?[^?>]+\?>/.test(str);

export const isOpeningTag = (str: string): boolean =>
  isTag(str) &&
  !isClosingTag(str) &&
  !isSelfClosingTag(str) &&
  !isXMLDeclaration(str);
