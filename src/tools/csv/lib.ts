import { parse } from "papaparse";

import { convertJSONToXML, convertJSONToYAML } from "../json/lib";

export function convertCSVToJSON(input: string): string {
  const { data, errors } = parse(input, { header: true, skipEmptyLines: true });
  if (errors.length) {
    throw new Error(
      errors
        .map((error) => `Row ${error.row ?? "?"}: ${error.message}`)
        .join("\n")
    );
  }
  return JSON.stringify(data, null, 2);
}

export function convertCSVToXML(input: string): string {
  return convertJSONToXML(convertCSVToJSON(input));
}

export function convertCSVToYAML(input: string): string {
  return convertJSONToYAML(convertCSVToJSON(input));
}
