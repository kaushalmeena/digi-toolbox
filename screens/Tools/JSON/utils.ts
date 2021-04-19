export const convertJSONToCSV = (data: string): string => {
  let array = null;
  let result = "";

  try {
    array = JSON.parse(data);
    if (!(Array.isArray(array) && array[0] instanceof Object)) {
      throw new Error("JSON input in not array of objects.");
    }
  } catch (err) {
    console.error(err);
    return "Invalid JSON input detected.";
  }

  const headers = Object.keys(array[0]);
  array.unshift(headers);

  for (let i = 0; i < array.length; i++) {
    let line = "";
    for (const key in array[i]) {
      if (line != "") {
        line += ",";
      }
      line += array[i][key];
    }
    result += line + "\r\n";
  }

  return result;
};
