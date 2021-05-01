export const convertCSVToJSON = (data: string): string => {
  const result = [];

  const tempArray = data.split("\n").filter(Boolean);
  const headers = tempArray[0].split(",").map(convertString);

  for (let i = 1; i < tempArray.length; i++) {
    const obj = {};
    const line = tempArray[i].split(",").map(convertString);

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = line[j];
    }

    result.push(obj);
  }

  return JSON.stringify(result, undefined, 2);
};

function convertString(str: string) {
  return str.trim().replace(/^\"|\"$/g, "");
}
