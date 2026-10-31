import { parse } from "yaml";

import { convertJSONToCSV, convertJSONToXML } from "../json/lib";

export function convertYAMLToJSON(input: string): string {
  return JSON.stringify(parse(input), null, 2);
}

export function convertYAMLToCSV(input: string): string {
  return convertJSONToCSV(convertYAMLToJSON(input));
}

export function convertYAMLToXML(input: string): string {
  return convertJSONToXML(convertYAMLToJSON(input));
}
