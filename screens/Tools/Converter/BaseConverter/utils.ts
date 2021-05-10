import { ISelectOption } from "../../../common/interfaces";

export const convertBase = (
  input: string,
  from: string,
  to: string
): string => {
  const fromBase = from.substr(5);
  const toBase = to.substr(5);

  const initialBase = parseInt(fromBase, 10);
  const targetBase = parseInt(toBase, 10);

  return parseInt(input, initialBase).toString(targetBase);
};

export const generateSelectOptions = (start = 2, end = 16): ISelectOption[] => {
  const options = [];

  const BASE_NAMES = {
    "02": "Binary",
    "08": "Octal",
    "10": "Decimal",
    "16": "Hexadecimal"
  };

  for (let i = start; i <= end; i++) {
    const base = String(i).padStart(2, "0");
    const extraText = BASE_NAMES[base] ? ` (${BASE_NAMES[base]})` : "";
    options.push({
      label: `Base-${base}` + extraText,
      value: `base-${base}`
    });
  }

  return options;
};
