import { convertJSONToXML } from "../../JSON/JSONToXML/utils";
import { convertYAMLToJSON } from "../YAMLToJSON/utils";

export const convertYAMLToXML = (data: string): string => {
  const jsonOutput = convertYAMLToJSON(data);
  const result = convertJSONToXML(jsonOutput);
  return result;
};
