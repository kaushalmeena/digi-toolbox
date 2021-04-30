export const convertJSONToCSV = (data: string): string => {
  let result = "";
  const tempArray = JSON.parse(data);

  if (!(Array.isArray(tempArray) && tempArray[0] instanceof Object)) {
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
      line += `"${tempArray[i][key]}"`;
    }
    result += line + "\r\n";
  }

  return result;
};
