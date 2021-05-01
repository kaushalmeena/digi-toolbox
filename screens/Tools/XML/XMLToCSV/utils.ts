import { convertJSONToCSV } from "../../JSON/JSONToCSV/utils";
import { convertXMLToJSON } from "../XMLToJSON/utils";

export const convertXMLToCSV = (data: string): string => {
  const jsonOutput = convertXMLToJSON(data);
  const result = convertJSONToCSV(jsonOutput);
  return result;
};
