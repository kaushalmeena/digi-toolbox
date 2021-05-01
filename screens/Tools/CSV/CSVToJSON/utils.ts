export const convertCSVToJSON = (data: string): string => {
  const result = [];

  const tempArray = data.split("\n");
  const headers = tempArray[0].split(",").map(formatString);

  for (let i = 1; i < tempArray.length; i++) {
    const obj = {};
    const line = tempArray[i].split(",").map(formatString);

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = line[j];
    }

    result.push(obj);
  }

  return JSON.stringify(result, undefined, 2);
};

function formatString(str: string) {
  return str.trim().replace(/^\"|\"$/g, "");
}
