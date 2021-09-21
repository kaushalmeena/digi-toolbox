import { convertJSONToCSV } from "../../JSON/JSONToCSV/utils";
import { convertYAMLToJSON } from "../YAMLToJSON/utils";

export const convertYAMLToCSV = (input: string): string => {
  const jsonOutput = convertYAMLToJSON(input);
  const result = convertJSONToCSV(jsonOutput);
  return result;
};
