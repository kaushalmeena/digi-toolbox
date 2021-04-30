import { convertJSONToXML } from "../../JSON/JSONToXML/utils";
import { convertCSVToJSON } from "../CSVToJSON/utils";

export const convertCSVToXML = (data: string): string => {
  const jsonOutput = convertCSVToJSON(data);
  const result = convertJSONToXML(jsonOutput);
  return result;
};
