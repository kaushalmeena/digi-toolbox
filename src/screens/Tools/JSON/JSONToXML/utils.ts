import { getType } from "../utils";

export const convertJSONToXML = (input: string): string => {
  const result = [];
  const jsonData = JSON.parse(input);
  const jsonObject = addRootNode(jsonData);

  result.push('<?xml version="1.0" encoding="UTF-8" ?>');

  convert(jsonObject, result);

  return result.join("\n");
};

function addRootNode(data: any) {
  const type = getType(data);
  if ((type === "object" && Object.keys(data).length > 1) || type === "array") {
    return { root: data };
  }
  return data;
}

function convert(data: any, res: any[], key?: string) {
  const type = getType(data);
  switch (type) {
    case "array":
      convertArray(data, res, key);
      break;
    case "object":
      convertObject(data, res);
      break;
    case "string":
      res.push(data);
      break;
    case "number":
      res.push(data.toString());
      break;
    case "boolean":
      res.push(data ? "true" : "false");
      break;
    default:
  }
}

function convertArray(arr: any[], res: any[], key = "row") {
  if (arr.length === 0) {
    return;
  }
  for (let i = 0; i < arr.length; i += 1) {
    const val = arr[i];
    const recurse = [];
    convert(val, recurse);
    res.push(`<${key}>`);
    for (let j = 0; j < recurse.length; j += 1) {
      res.push(`  ${recurse[j]}`);
    }
    res.push(`</${key}>`);
  }
}

function convertObject(obj: any, res: any[]) {
  Object.keys(obj).forEach((key) => {
    const recurse = [];
    const val = obj[key];
    const type = getType(val);
    convert(val, recurse, key);
    switch (type) {
      case "array":
        for (let i = 0; i < recurse.length; i += 1) {
          res.push(`${recurse[i]}`);
        }
        break;
      case "object":
        res.push(`<${key}>`);
        for (let i = 0; i < recurse.length; i += 1) {
          res.push(`  ${recurse[i]}`);
        }
        res.push(`</${key}>`);
        break;
      case "string":
      case "number":
      case "boolean":
        res.push(`<${key}>${recurse[0]}</${key}>`);
        break;
      case "null":
        res.push(`<${key} />`);
        break;
      default:
    }
  });
}
