import formatter from "xml-formatter";

export const minifyXML = (input: string): string => formatter.minify(input);
