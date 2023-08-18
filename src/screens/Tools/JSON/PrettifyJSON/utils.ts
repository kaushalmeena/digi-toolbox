export const prettifyJSON = (input: string): string =>
  JSON.stringify(JSON.parse(input), undefined, 2);
