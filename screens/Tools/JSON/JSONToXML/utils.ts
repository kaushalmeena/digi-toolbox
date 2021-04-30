import { getType } from "../../../../utils";

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
    case "object":
      convertObject(obj, res);
      break;
    case "string":
      res.push(obj);
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
      const key = k.trim();
      const val = obj[k];
      const type = getType(val);
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
