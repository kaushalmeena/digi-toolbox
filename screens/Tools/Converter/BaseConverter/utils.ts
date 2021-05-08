import { ISelectOption } from "../../../../types";

export const convertBase = (input: string, from = "", to = ""): string => {
  const fromBase = from.substr(5);
  const toBase = to.substr(5);

  const initialBase = parseInt(fromBase, 10);
  const targetBase = parseInt(toBase, 10);

  return parseInt(input, initialBase).toString(targetBase);
};

export const generateSelectOptions = (start = 1, end = 16): ISelectOption[] => {
  const options = [];
  const BASE_NAMES = {
    2: "Binary",
    8: "Octal",
    10: "Decimal",
    16: "Hexadecimal"
  };
  for (let i = start; i <= end; i++) {
    const paddedBase = String(i).padStart(2, "0");
    const extraText = BASE_NAMES[i] ? ` (${BASE_NAMES[i]})` : "";
    options.push({
      label: `Base-${paddedBase}` + extraText,
      value: `base-${paddedBase}`
    });
  }
  return options;
};
