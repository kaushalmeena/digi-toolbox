export const extractTextFromHTML = (data: string): string => {
  const parser = new DOMParser();
  const result = parser.parseFromString(data, "text/html");
  return result.documentElement.textContent;
};
