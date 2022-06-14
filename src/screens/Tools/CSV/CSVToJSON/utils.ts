import { removeQuotes } from "../../utils";
import { CommaSplitRegex } from "./constants";

export const convertCSVToJSON = (input: string): string => {
  const result = [];

  const lines = input.split("\n").filter(Boolean);
  const keys = lines[0].split(CommaSplitRegex).map(removeQuotes);

  for (let i = 1; i < lines.length; i += 1) {
    const obj = {};
    const values = lines[i].split(CommaSplitRegex).map(removeQuotes);

    for (let j = 0; j < keys.length; j += 1) {
      obj[keys[j]] = values[j];
    }

    result.push(obj);
  }

  return JSON.stringify(result, undefined, 2);
};
