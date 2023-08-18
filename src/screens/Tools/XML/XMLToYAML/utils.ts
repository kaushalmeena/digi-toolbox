import { convertJSONToYAML } from "../../JSON/JSONToYAML/utils";
import { convertXMLToJSON } from "../XMLToJSON/utils";

export const convertXMLToYAML = (input: string): string => {
  const jsonOutput = convertXMLToJSON(input);
  const result = convertJSONToYAML(jsonOutput);
  return result;
};
