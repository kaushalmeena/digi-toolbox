const parser = new DOMParser();

export const extractTextFromHTML = (input: string): string => {
  const htmlDocument = parser.parseFromString(input, "text/html");
  return htmlDocument.documentElement.textContent || "";
};
