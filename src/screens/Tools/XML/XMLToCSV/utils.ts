import { convertJSONToCSV } from "../../JSON/JSONToCSV/utils";
import { convertXMLToJSON } from "../XMLToJSON/utils";

export const convertXMLToCSV = (input: string): string => {
  const jsonOutput = convertXMLToJSON(input);
  const output = convertJSONToCSV(jsonOutput);
  return output;
};
