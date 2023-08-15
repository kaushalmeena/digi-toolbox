import { createSelectOptions } from "./utils";

export const KnownBaseNames: Record<string, string> = {
    "02": "Binary",
    "08": "Octal",
    "10": "Decimal",
    "16": "Hexadecimal"
  };

export const SelectOptions = createSelectOptions(2, 16);
