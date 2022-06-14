import { getType, getSafeString } from "../utils";

export const convertJSONToYAML = (input: string): string => {
  const result = [];
  const jsonData = JSON.parse(input);

  convert(jsonData, result);

  return result.join("\n");
};

function convert(data: any, res: any[]) {
  const type = getType(data);
  switch (type) {
    case "array":
      convertArray(data, res);
      break;
    case "object":
      convertObject(data, res);
      break;
    case "string":
      res.push(getSafeString(data));
      break;
    case "number":
      res.push(data.toString());
      break;
    case "boolean":
      res.push(data ? "true" : "false");
      break;
    case "null":
      res.push("null");
      break;
    default:
  }
}

function convertArray(arr: any[], res: any[]) {
  if (arr.length === 0) {
    return;
  }
  for (let i = 0; i < arr.length; i += 1) {
    const val = arr[i];
    const recurse = [];
    convert(val, recurse);
    for (let j = 0; j < recurse.length; j += 1) {
      res.push((j === 0 ? "- " : "  ") + recurse[j]);
    }
  }
}

function convertObject(obj: any, res: any[]) {
  Object.keys(obj).forEach((k) => {
    const recurse = [];
    const key = getSafeString(k);
    const val = obj[k];
    const type = getType(val);
    convert(val, recurse);
    switch (type) {
      case "array":
        if (recurse.length === 0) {
          res.push(`${key}: []`);
        } else {
          res.push(`${key}: `);
          for (let i = 0; i < recurse.length; i += 1) {
            res.push(`  ${recurse[i]}`);
          }
        }
        break;
      case "object":
        if (recurse.length === 0) {
          res.push(`${key}: {}`);
        } else {
          res.push(`${key}: `);
          for (let i = 0; i < recurse.length; i += 1) {
            res.push(`  ${recurse[i]}`);
          }
        }
        break;
      case "string":
      case "number":
      case "boolean":
      case "null":
        res.push(`${key}: ${recurse[0]}`);
        break;
      default:
    }
  });
}
