export const extractTextFromXML = (input: string): string => {
  const parser = new DOMParser();
  const document = parser.parseFromString(input, "text/xml");
  return document.documentElement.textContent || "";
};
