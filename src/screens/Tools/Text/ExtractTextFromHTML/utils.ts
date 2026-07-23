export const extractTextFromHTML = (input: string): string => {
  const parser = new DOMParser();
  const document = parser.parseFromString(input, "text/html");
  return document.documentElement.textContent || "";
};
