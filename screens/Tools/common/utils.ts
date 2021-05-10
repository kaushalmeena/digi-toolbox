export const isUnsafeString = (str: string): boolean => /\W/.test(str);

export const isBoolean = (str: string): boolean => /^(true|false)$/.test(str);

export const isFloat = (str: string): boolean =>
  /^[-+]?[0-9]*\.[0-9]+$/.test(str);

export const isInteger = (str: string): boolean => /^\d+$/.test(str);

export const getType = (item: unknown): string => {
  if (item instanceof Array) {
    return "array";
  } else if (item instanceof Object) {
    return "object";
  } else if (typeof item === "string") {
    return "string";
  } else if (typeof item === "boolean") {
    return "boolean";
  } else if (typeof item === "number") {
    return "number";
  } else {
    return "null";
  }
};

export const getSafeString = (str: string): string => {
  if (isUnsafeString(str)) {
    return JSON.stringify(str);
  } else {
    return str;
  }
};

export const removeQuotes = (str: string): string => {
  const res = str.trim();
  if (res.startsWith('"') && res.endsWith('"')) {
    return res.substring(1, res.length - 1);
  }
  return res;
};

export const parseString = (str: string): string | boolean | number => {
  if (isBoolean(str)) {
    return str === "true";
  } else if (isFloat(str)) {
    return Number.parseFloat(str);
  } else if (isInteger(str)) {
    return Number.parseInt(str);
  } else {
    return str;
  }
};
