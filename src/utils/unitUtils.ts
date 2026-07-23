export const createConvertFunction =
  (conversionMap: Record<string, number>, defaultUnit: string) =>
  (input: string, from: string, to: string): string => {
    const number = parseFloat(input);
    const value = number * conversionMap[`${from}->${defaultUnit}`];
    const output = value * conversionMap[`${defaultUnit}->${to}`];
    return output.toString();
  };
