export const extractTextFromXML = (input: string): string => {
  const parser = new DOMParser();
  const xmlDocument = parser.parseFromString(input, "text/xml");
  return xmlDocument.documentElement.textContent;
};
