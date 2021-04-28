export const prettifyJSON = (data: string): string =>
  JSON.stringify(JSON.parse(data), undefined, 2);
