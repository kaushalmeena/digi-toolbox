import Papa from 'papaparse';

export const convertCSVToJSON = (input: string): string => {
  const parsedData = Papa.parse(input, { header: true });
  if (parsedData.errors?.length) {
    const message = parsedData.errors.map((error) => error.message).join("\n")
    throw new Error(message);
  }
  const output = JSON.stringify(parsedData.data, null, 2);
  return output;
};
