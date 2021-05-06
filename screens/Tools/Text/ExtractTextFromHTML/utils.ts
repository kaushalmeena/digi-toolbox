export const extractTextFromHTML = (input: string): string => {
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(input, "text/html");
  return htmlDoc.documentElement.textContent;
};
