import Papa from 'papaparse';

export const convertJSONToCSV = (input: string): string => {
  const parsedData = JSON.parse(input);
  if (!Array.isArray(parsedData)) {
    throw new Error("JSON should be array of objects")
  }
  const output = Papa.unparse(parsedData);
  return output;
};