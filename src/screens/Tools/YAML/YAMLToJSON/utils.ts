import { parse } from "yaml";

export const convertYAMLToJSON = (input: string): string => {
  const parsedData = parse(input);
  const output = JSON.stringify(parsedData, null, 2);
  return output;
};
