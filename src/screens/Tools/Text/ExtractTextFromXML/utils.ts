const parser = new DOMParser();

export const extractTextFromXML = (input: string): string => {
  const xmlDocument = parser.parseFromString(input, "text/xml");
  return xmlDocument.documentElement.textContent || "";
};
