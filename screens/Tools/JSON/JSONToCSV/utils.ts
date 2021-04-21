export const convertJSONToCSV = (data: string): string => {
  let result = "";
  const tempData = JSON.parse(data);
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
      line += tempArray[i][key];
    }
    result += line + "\r\n";
  }

  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function findArray(obj: any) {
  if (Array.isArray(obj) && obj[0] instanceof Object) {
    return obj;
  }
  if (obj instanceof Object) {
    const keys = Object.keys(obj);
    const tempObj = obj[keys[0]];
    return findArray(tempObj);
  }
  return null;
}
