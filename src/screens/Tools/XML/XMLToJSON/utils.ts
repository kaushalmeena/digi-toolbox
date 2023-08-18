import { xml2json } from "xml-js";

export const convertXMLToJSON = (input: string): string =>
  xml2json(input, { compact: true, spaces: 2 });
