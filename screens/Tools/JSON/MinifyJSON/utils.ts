export const minifyJSON = (data: string): string =>
  JSON.stringify(JSON.parse(data));
