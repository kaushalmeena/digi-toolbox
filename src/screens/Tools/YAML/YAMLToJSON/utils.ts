import { removeQuotes, parseString } from "../../utils";

export const convertYAMLToJSON = (input: string): string => {
  const lines = input.split("\n").filter(Boolean);

  const result = convert(lines, 0, 0);

  return JSON.stringify(result, undefined, 2);
};

function convert(arr: string[], index: number, indent: number) {
  let res = null;

  for (let i = index; i < arr.length; i += 1) {
    if (arr[i][indent] === " ") {
      continue;
    }

    const line = arr[i].substring(indent);

    if (line.includes("-")) {
      if (!Array.isArray(res)) {
        res = [];
      }
      res.push(convert(arr, i, indent + 2));
    } else if (line.includes(":")) {
      if (!res) {
        res = {};
      }
      const [left, right] = line.split(":");
      const key = removeQuotes(left);
      const val = removeQuotes(right);
      if (val) {
        res[key] = parseString(val);
      } else {
        res[key] = convert(arr, i + 1, indent + 2);
      }
    } else {
      const val = removeQuotes(line);
      res = parseString(val);
    }

    if (indent >= 2 && i < arr.length - 1 && arr[i + 1][indent - 2] !== " ") {
      break;
    }
  }

  return res;
}
