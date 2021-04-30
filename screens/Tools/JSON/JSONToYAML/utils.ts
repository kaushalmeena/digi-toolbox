/* eslint-disable @typescript-eslint/no-explicit-any */
import { escapeString, getType } from "../../../../utils";

export const convertJSONToYAML = (data: string): string => {
  const result = [];
  const tempObj = JSON.parse(data);

  convert(tempObj, result);

  return result.join("\n");
};

function convert(obj: any, res: any[]) {
  const type = getType(obj);
  switch (type) {
    case "array":
      convertArray(obj, res);
      break;
    case "object":
      convertObject(obj, res);
      break;
    case "string":
      res.push(escapeString(obj));
      break;
    case "number":
      res.push(obj.toString());
      break;
    case "boolean":
      res.push(obj ? "true" : "false");
      break;
    case "null":
      res.push("null");
      break;
  }
}

function convertArray(obj: any, res: any[]) {
  if (obj.length === 0) {
    res.push("[]");
  }
  for (let i = 0; i < obj.length; i++) {
    const val = obj[i];
    const recurse = [];
    convert(val, recurse);
    for (let j = 0; j < recurse.length; j++) {
      res.push((j == 0 ? "- " : "  ") + recurse[j]);
    }
  }
}

function convertObject(obj: any, res: any[]) {
  for (const k in obj) {
    const recurse = [];
    if (obj.hasOwnProperty(k)) {
      const key = escapeString(k);
      const val = obj[k];
      const type = getType(val);
      convert(val, recurse);
      if (
        type == "string" ||
        type == "null" ||
        type == "number" ||
        type == "boolean"
      ) {
        res.push(key + ": " + recurse[0]);
      } else {
        res.push(key + ": ");
        for (let i = 0; i < recurse.length; i++) {
          res.push("  " + recurse[i]);
        }
      }
    }
  }
}
