/* eslint-disable @typescript-eslint/no-explicit-any */
export const convertJSONToXML = (data: string): string => {
  const result = [];
  const tempObj = JSON.parse(data);

  result.push('<?xml version="1.0" encoding="UTF-8" ?>');
  result.push("<root>");

  convert(tempObj, result);

  result.push("</root>");

  return result.join("\n");
};

function convert(obj: any, res: any[], key?: any) {
  const type = getType(obj);

  switch (type) {
    case "array":
      convertArray(obj, res, key);
      break;
    case "string":
      convertString(obj, res);
      break;
    case "object":
      convertObject(obj, res);
      break;
    case "number":
      res.push(obj.toString());
      break;
    case "boolean":
      res.push(obj ? "true" : "false");
      break;
  }
}

function convertArray(obj: any, res: any[], key = "row") {
  if (obj.length === 0) {
    return;
  }
  for (let i = 0; i < obj.length; i++) {
    const val = obj[i];
    const recurse = [];
    convert(val, recurse);
    res.push(`  <${key}>`);
    for (let j = 0; j < recurse.length; j++) {
      res.push(`    ` + recurse[j]);
    }
    res.push(`  </${key}>`);
  }
}

function convertObject(obj: any, res: any[]) {
  for (const k in obj) {
    const recurse = [];
    if (obj.hasOwnProperty(k)) {
      const val = obj[k];
      const type = getType(val);
      const key = normalizeString(k);
      convert(val, recurse, key);
      if (type == "null") {
        res.push(`<${key} />`);
      } else if (type == "string" || type == "number" || type == "boolean") {
        res.push(`<${key}>${recurse[0]}</${key}>`);
      } else {
        for (let i = 0; i < recurse.length; i++) {
          res.push("  " + recurse[i]);
        }
      }
    }
  }
}

function convertString(str: string, res: any[]) {
  res.push(normalizeString(str));
}

function normalizeString(str: string) {
  if (str.match(/^[\w]+$/)) {
    return str;
  } else {
    return JSON.stringify(str);
  }
}

function getType(obj: any) {
  const type = typeof obj;
  if (obj instanceof Array) {
    return "array";
  } else if (obj instanceof Object) {
    return "object";
  } else if (type == "string") {
    return "string";
  } else if (type == "boolean") {
    return "boolean";
  } else if (type == "number") {
    return "number";
  } else {
    return "null";
  }
}
