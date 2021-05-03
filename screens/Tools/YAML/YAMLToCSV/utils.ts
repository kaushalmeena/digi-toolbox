import { convertJSONToCSV } from "../../JSON/JSONToCSV/utils";
import { convertYAMLToJSON } from "../YAMLToJSON/utils";

export const convertYAMLToCSV = (data: string): string => {
  const jsonOutput = convertYAMLToJSON(data);
  const result = convertJSONToCSV(jsonOutput);
  return result;
};
