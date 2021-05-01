export const extractTextFromXML = (data: string): string => {
  const parser = new DOMParser();
  const result = parser.parseFromString(data, "text/xml");
  return result.documentElement.textContent;
};
