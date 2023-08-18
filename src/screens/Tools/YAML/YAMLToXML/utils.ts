import { convertJSONToXML } from "../../JSON/JSONToXML/utils";
import { convertYAMLToJSON } from "../YAMLToJSON/utils";

export const convertYAMLToXML = (input: string): string => {
  const jsonOutput = convertYAMLToJSON(input);
  const output = convertJSONToXML(jsonOutput);
  return output;
};
