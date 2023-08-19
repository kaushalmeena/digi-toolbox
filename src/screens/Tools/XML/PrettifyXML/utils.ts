import formatter from "xml-formatter";

export const prettifyXML = (input: string): string => formatter(input);
