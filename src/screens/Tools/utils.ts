export const isBoolean = (str: string): boolean => /^(true|false)$/.test(str);

export const isFloat = (str: string): boolean =>
  /^[-+]?[0-9]*\.[0-9]+$/.test(str);

export const isInteger = (str: string): boolean => /^\d+$/.test(str);

export const parseString = (
  str: string
): string | boolean | number | object => {
  if (str === "{}") {
    return {};
  }
  if (str === "[]") {
    return [];
  }
  if (isBoolean(str)) {
    return str === "true";
  }
  if (isFloat(str)) {
    return Number.parseFloat(str);
  }
  if (isInteger(str)) {
    return Number.parseInt(str, 10);
  }
  return str.trim();
};

export const removeQuotes = (str: string): string => {
  const newStr = str.trim();
  if (newStr.startsWith('"') && newStr.endsWith('"')) {
    return newStr.substring(1, newStr.length - 1);
  }
  return newStr;
};
