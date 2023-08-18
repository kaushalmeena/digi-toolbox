export const prettifyJSON = (input: string): string => {
  const parsedData = JSON.parse(input);
  const output = JSON.stringify(parsedData, null, 2);
  return output;
}
