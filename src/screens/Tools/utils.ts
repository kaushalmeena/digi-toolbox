export const isBoolean = (str: string): boolean => /^(true|false)$/.test(str);

export const isFloat = (str: string): boolean =>
  /^[-+]?[0-9]*\.[0-9]+$/.test(str);

export const isInteger = (str: string): boolean => /^\d+$/.test(str);

export const parseString = (str: string): string | boolean | number => {
  if (isBoolean(str)) {
    return str === "true";
  }
  if (isFloat(str)) {
    return Number.parseFloat(str);
  }
  if (isInteger(str)) {
    return Number.parseInt(str, 10);
  }
  return str;
};

export const removeQuotes = (str: string): string => {
  const res = str.trim();
  if (res.startsWith('"') && res.endsWith('"')) {
    return res.substring(1, res.length - 1);
  }
  return res;
};
