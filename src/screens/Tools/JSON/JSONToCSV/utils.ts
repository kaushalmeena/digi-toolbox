import { getSafeString, getType } from "../utils";

export const convertJSONToCSV = (input: string): string => {
  let result = "";
  const jsonData = JSON.parse(input);
  const jsonArray = findArray(jsonData);

  if (!jsonArray) {
    throw new Error("JSON input in not array of objects");
  }

  const headers = Object.keys(jsonArray[0]);
  jsonArray.unshift(headers);

  for (let i = 0; i < jsonArray.length; i += 1) {
    let line = "";
    Object.keys(jsonArray[i]).forEach((key) => {
      if (line !== "") {
        line += ",";
      }
      line += getSafeString(jsonArray[i][key]);
    });
    result += `${line}\r\n`;
  }

  return result;
};

function findArray(data: any) {
  if (getType(data) === "array" && getType(data[0]) === "object") {
    return data;
  }
  if (getType(data) === "object") {
    const key = Object.keys(data).at(0);
    const obj = data[key];
    return findArray(obj);
  }
  return null;
}
