export const extractTextFromXML = (input: string): string => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(input, "text/xml");
  return xmlDoc.documentElement.textContent;
};
