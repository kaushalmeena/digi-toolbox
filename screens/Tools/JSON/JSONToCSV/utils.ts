import { getSafeString } from "../../../common/utils";

export const convertJSONToCSV = (input: string): string => {
  let result = "";
  const tempData = JSON.parse(input);
  const tempArray = findArray(tempData);

  if (!tempArray) {
    throw new Error("JSON input in not array of objects.");
  }

  const headers = Object.keys(tempArray[0]);
  tempArray.unshift(headers);

  for (let i = 0; i < tempArray.length; i++) {
    let line = "";
    for (const key in tempArray[i]) {
      if (line != "") {
        line += ",";
      }
      line += getSafeString(tempArray[i][key]);
    }
    result += line + "\r\n";
  }

  return result;
};

function findArray(item: any) {
  if (Array.isArray(item) && item[0] instanceof Object) {
    return item;
  }
  if (item instanceof Object) {
    const keys = Object.keys(item);
    const tempObj = item[keys[0]];
    return findArray(tempObj);
  }
  return null;
}
