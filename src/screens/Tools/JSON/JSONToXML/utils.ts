import { json2xml } from "xml-js";

export const convertJSONToXML = (input: string): string =>
  json2xml(input, { compact: true, spaces: 2 });
