import formatXML from "xml-formatter";
import { xml2json } from "xml-js";

import { convertJSONToCSV, convertJSONToYAML } from "../json/lib";

export function prettifyXML(input: string): string {
  return formatXML(input, { indentation: "  ", collapseContent: true });
}

export function minifyXML(input: string): string {
  return formatXML.minify(input, { collapseContent: true });
}

export function convertXMLToJSON(input: string): string {
  return xml2json(input, { compact: true, spaces: 2 });
}

export function convertXMLToCSV(input: string): string {
  return convertJSONToCSV(convertXMLToJSON(input));
}

export function convertXMLToYAML(input: string): string {
  return convertJSONToYAML(convertXMLToJSON(input));
}
