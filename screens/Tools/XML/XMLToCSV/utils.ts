import { convertJSONToCSV } from "../../JSON/JSONToCSV/utils";
import { convertXMLToJSON } from "../XMLToJSON/utils";

export const convertXMLToCSV = (input: string): string => {
  const jsonOutput = convertXMLToJSON(input);
  const result = convertJSONToCSV(jsonOutput);
  return result;
};
