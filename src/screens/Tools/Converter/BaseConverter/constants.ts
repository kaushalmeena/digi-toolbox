import type { SelectOption } from "@/types";

export const KnownBaseNames: Record<string, string> = {
  "02": "Binary",
  "08": "Octal",
  "10": "Decimal",
  "16": "Hexadecimal"
};

const createSelectOptions = (start = 2, end = 16): SelectOption[] => {
  const options: SelectOption[] = [];
  for (let i = start; i <= end; i += 1) {
    const base = String(i).padStart(2, "0");
    const extraText = KnownBaseNames[base] ? ` (${KnownBaseNames[base]})` : "";
    options.push({
      label: `Base-${base}${extraText}`,
      value: `base-${base}`
    });
  }
  return options;
};

export const SelectOptions = createSelectOptions(2, 16);
