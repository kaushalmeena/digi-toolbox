import { stringify } from "yaml";

export const convertJSONToYAML = (input: string): string => {
  const parsedData = JSON.parse(input);
  const output = stringify(parsedData);
  return output;
};
