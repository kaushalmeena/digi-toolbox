import { ISelectOption } from "../../../../interfaces";
import { KnownBaseNames } from "./constants";

export const convertBase = (
  input: string,
  from: string,
  to: string
): string => {
  const fromBase = from.substring(5);
  const toBase = to.substring(5);

  const initialBase = parseInt(fromBase, 10);
  const targetBase = parseInt(toBase, 10);

  return parseInt(input, initialBase).toString(targetBase);
};

export const generateSelectOptions = (start = 2, end = 16): ISelectOption[] => {
  const options = [];

  for (let i = start; i <= end; i++) {
    const base = String(i).padStart(2, "0");
    const extraText = KnownBaseNames[base] ? ` (${KnownBaseNames[base]})` : "";
    options.push({
      label: `Base-${base}` + extraText,
      value: `base-${base}`
    });
  }

  return options;
};
