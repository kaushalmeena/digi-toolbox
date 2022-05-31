import { getType } from "../../../../utils";

export const convertJSONToXML = (input: string): string => {
  const result = [];
  const tempData = JSON.parse(input);

  result.push('<?xml version="1.0" encoding="UTF-8" ?>');
  result.push("<root>");

  convert(tempData, result);

  result.push("</root>");

  return result.join("\n");
};

function convert(item: any, res: any[], key?: string) {
  const type = getType(item);
  switch (type) {
    case "array":
      convertArray(item, res, key);
      break;
    case "object":
      convertObject(item, res);
      break;
    case "string":
      res.push(item);
      break;
    case "number":
      res.push(item.toString());
      break;
    case "boolean":
      res.push(item ? "true" : "false");
      break;
    default:
  }
}

function convertArray(item: any, res: any[], key = "row") {
  if (item.length === 0) {
    return;
  }
  for (let i = 0; i < item.length; i += 1) {
    const val = item[i];
    const recurse = [];
    convert(val, recurse);
    res.push(`  <${key}>`);
    for (let j = 0; j < recurse.length; j += 1) {
      res.push(`    ${recurse[j]}`);
    }
    res.push(`  </${key}>`);
  }
}

function convertObject(item: any, res: any[]) {
  Object.keys(item).forEach((key) => {
    const recurse = [];
    const val = item[key];
    const type = getType(val);
    convert(val, recurse, key);
    if (type === "null") {
      res.push(`<${key} />`);
    } else if (type === "string" || type === "number" || type === "boolean") {
      res.push(`<${key}>${recurse[0]}</${key}>`);
    } else {
      for (let i = 0; i < recurse.length; i += 1) {
        res.push(`  ${recurse[i]}`);
      }
    }
  });
}
