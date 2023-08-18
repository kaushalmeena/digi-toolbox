const parser = new DOMParser();

export const extractTextFromHTML = (input: string): string => {
  const document = parser.parseFromString(input, "text/html");
  return document.documentElement.textContent || "";
};
