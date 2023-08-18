import { convertJSONToYAML } from "../../JSON/JSONToYAML/utils";
import { convertCSVToJSON } from "../CSVToJSON/utils";

export const convertCSVToYAML = (input: string): string => {
  const jsonOutput = convertCSVToJSON(input);
  const output = convertJSONToYAML(jsonOutput);
  return output;
};
