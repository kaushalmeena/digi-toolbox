import { convertJSONToXML } from "../../JSON/JSONToXML/utils";
import { convertCSVToJSON } from "../CSVToJSON/utils";

export const convertCSVToXML = (input: string): string => {
  const jsonOutput = convertCSVToJSON(input);
  const result = convertJSONToXML(jsonOutput);
  return result;
};
