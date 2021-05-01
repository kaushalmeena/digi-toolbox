import { convertJSONToYAML } from "../../JSON/JSONToYAML/utils";
import { convertXMLToJSON } from "../XMLToJSON/utils";

export const convertXMLToYAML = (data: string): string => {
  const jsonOutput = convertXMLToJSON(data);
  const result = convertJSONToYAML(jsonOutput);
  return result;
};
