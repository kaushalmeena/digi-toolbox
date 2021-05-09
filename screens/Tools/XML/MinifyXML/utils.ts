export const minifyXML = (input: string): string =>
  input.match(/\<.+\>/g).join("");
