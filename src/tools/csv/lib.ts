import { parse } from "papaparse";

import { convertJSONToXML, convertJSONToYAML } from "../json/lib";

export function convertCSVToJSON(input: string): string {
  const { data, errors: parseErrors } = parse(input, {
    header: true,
    skipEmptyLines: true
  });
  // A single-column CSV has no delimiter to detect; papaparse reports that
  // but still parses it correctly with the default comma.
  const errors = parseErrors.filter(
    (error) => error.code !== "UndetectableDelimiter"
  );
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
