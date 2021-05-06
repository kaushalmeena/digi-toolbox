export const minifyXML = (input: string): string =>
  JSON.stringify(JSON.parse(input));
