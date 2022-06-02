import { removeQuotes } from "../../utils";

export const convertCSVToJSON = (input: string): string => {
  const result = [];

  const tempArray = input.split("\n").filter(Boolean);
  const headers = tempArray[0].split(",").map(removeQuotes);

  for (let i = 1; i < tempArray.length; i += 1) {
    const obj = {};
    const line = tempArray[i].split(",").map(removeQuotes);

    for (let j = 0; j < headers.length; j += 1) {
      obj[headers[j]] = line[j];
    }

    result.push(obj);
  }

  return JSON.stringify(result, undefined, 2);
};
