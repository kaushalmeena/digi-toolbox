export const minifyJSON = (input: string): string => {
  const parsedData = JSON.parse(input);
  const output = JSON.stringify(parsedData);
  return output;
};
