import { getSafeString, getType } from "../../../../utils";

export const convertJSONToYAML = (input: string): string => {
  const result = [];
  const tempData = JSON.parse(input);

  convert(tempData, result);

  return result.join("\n");
};

function convert(item: any, res: any[]) {
  const type = getType(item);
  switch (type) {
    case "array":
      convertArray(item, res);
      break;
    case "object":
      convertObject(item, res);
      break;
    case "string":
      res.push(getSafeString(item));
      break;
    case "number":
      res.push(item.toString());
      break;
    case "boolean":
      res.push(item ? "true" : "false");
      break;
    case "null":
      res.push("null");
      break;
    default:
  }
}

function convertArray(item: any, res: any[]) {
  if (item.length === 0) {
    res.push("[]");
  }
  for (let i = 0; i < item.length; i += 1) {
    const val = item[i];
    const recurse = [];
    convert(val, recurse);
    for (let j = 0; j < recurse.length; j += 1) {
      res.push((j === 0 ? "- " : "  ") + recurse[j]);
    }
  }
}

function convertObject(item: any, res: any[]) {
  Object.keys(item).forEach((k) => {
    const recurse = [];
    const key = getSafeString(k);
    const val = item[k];
    const type = getType(val);
    convert(val, recurse);
    if (["string", "number", "boolean", "null"].includes(type)) {
      res.push(`${key}: ${recurse[0]}`);
    } else {
      res.push(`${key}: `);
      for (let i = 0; i < recurse.length; i += 1) {
        res.push(`  ${recurse[i]}`);
      }
    }
  });
}
