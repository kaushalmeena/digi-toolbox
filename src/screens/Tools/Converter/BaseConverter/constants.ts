import { generateSelectOptions } from "./utils";

export const BaseSelectOptions = generateSelectOptions(2, 16);

export const KnownBaseNames = {
  "02": "Binary",
  "08": "Octal",
  "10": "Decimal",
  "16": "Hexadecimal"
};
