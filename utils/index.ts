/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const getType = (item: any): string => {
  if (item instanceof Array) {
    return "array";
  } else if (item instanceof Object) {
    return "object";
  } else if (typeof item == "string") {
    return "string";
  } else if (typeof item == "boolean") {
    return "boolean";
  } else if (typeof item == "number") {
    return "number";
  } else {
    return "null";
  }
};

export const escapeString = (str: string): string => JSON.stringify(str);

export const removeQuotes = (str: string): string =>
  str.trim().replace(/^\"|\"$/g, "");
