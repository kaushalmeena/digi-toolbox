const parser = new DOMParser();

export const extractTextFromXML = (input: string): string => {
  const document = parser.parseFromString(input, "text/xml");
  return document.documentElement.textContent || "";
};
