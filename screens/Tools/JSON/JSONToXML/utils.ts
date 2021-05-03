import { getType } from "../../../../utils";

export const convertJSONToXML = (data: string): string => {
  const result = [];
  const tempObj = JSON.parse(data);

  result.push('<?xml version="1.0" encoding="UTF-8" ?>');
  result.push("<root>");

  convert(tempObj, result);

  result.push("</root>");

  return result.join("\n");
};

function convert(item: any, res: any[], key?: any) {
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
  }
}

function convertArray(item: any, res: any[], key = "row") {
  if (item.length === 0) {
    return;
  }
  for (let i = 0; i < item.length; i++) {
    const val = item[i];
    const recurse = [];
    convert(val, recurse);
    res.push(`  <${key}>`);
    for (let j = 0; j < recurse.length; j++) {
      res.push(`    ` + recurse[j]);
    }
    res.push(`  </${key}>`);
  }
}

function convertObject(item: any, res: any[]) {
  for (const key in item) {
    const recurse = [];
    if (item.hasOwnProperty(key)) {
      const val = item[key];
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
