export const extractTextFromHTML = (input: string): string => {
  const parser = new DOMParser();
  const htmlDocument = parser.parseFromString(input, "text/html");
  return htmlDocument.documentElement.textContent;
};
