import { convertJSONToYAML } from "../../JSON/JSONToYAML/utils";
import { convertXMLToJSON } from "../XMLToJSON/utils";

export const convertXMLToYAML = (input: string): string => {
  const jsonOutput = convertXMLToJSON(input);
  const output = convertJSONToYAML(jsonOutput);
  return output;
};
