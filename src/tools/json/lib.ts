import { unparse } from "papaparse";
import { json2xml } from "xml-js";
import { stringify } from "yaml";

export type Indent = "2" | "4" | "tab";

export function prettifyJSON(input: string, indent: Indent = "2"): string {
  const space = indent === "tab" ? "\t" : Number(indent);
  return JSON.stringify(JSON.parse(input), null, space);
}

export function minifyJSON(input: string): string {
  return JSON.stringify(JSON.parse(input));
}

export function convertJSONToCSV(input: string): string {
  const data = JSON.parse(input);
  if (!Array.isArray(data)) {
    throw new Error('Expected a JSON array of objects, e.g. [{ "a": 1 }]');
  }
  return unparse(data);
}

export function convertJSONToXML(input: string): string {
  // Parse first so invalid JSON fails with JSON.parse's precise message.
  return json2xml(JSON.stringify(JSON.parse(input)), {
    compact: true,
    spaces: 2
  });
}

export function convertJSONToYAML(input: string): string {
  return stringify(JSON.parse(input));
}
