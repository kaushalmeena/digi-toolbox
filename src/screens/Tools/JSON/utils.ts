export const isUnsafeString = (str: string): boolean => /\W/.test(str);

export const getSafeString = (str: string): string => {
  if (isUnsafeString(str)) {
    return JSON.stringify(str);
  }
  return str;
};

export const getType = (item: unknown): string => {
  if (item instanceof Array) {
    return "array";
  }
  if (item instanceof Object) {
    return "object";
  }
  if (typeof item === "string") {
    return "string";
  }
  if (typeof item === "boolean") {
    return "boolean";
  }
  if (typeof item === "number") {
    return "number";
  }
  return "null";
};
