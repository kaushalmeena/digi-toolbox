export const minifyJSON = (input: string): string =>
  JSON.stringify(JSON.parse(input));
