import { convertJSONToYAML } from "../../JSON/JSONToYAML/utils";
import { convertCSVToJSON } from "../CSVToJSON/utils";

export const convertCSVToYAML = (data: string): string => {
  const jsonOutput = convertCSVToJSON(data);
  const result = convertJSONToYAML(jsonOutput);
  return result;
};
