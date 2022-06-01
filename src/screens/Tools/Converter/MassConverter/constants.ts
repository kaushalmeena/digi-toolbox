import { SelectOption } from "../../../../types";

export const enum MassUnits {
  KILOGRAM = "kg",
  GRAM = "g",
  MILLIGRAM = "mg",
  MICROGRAM = "µg",
  CARAT = "ct",
  QUINTAL = "q",
  POUND = "lb",
  OUNCE = "oz"
}

export const enum MassConversationFactors {
  KILOGRAM_TO_GRAM = 1000,
  MILLIGRAM_TO_GRAM = 0.001,
  MICROGRAM_TO_GRAM = 0.000001,
  CARAT_TO_GRAM = 0.2,
  QUINTAL_TO_GRAM = 100000,
  POUND_TO_GRAM = 453.59237,
  OUNCE_TO_GRAM = 28.349523125,
  GRAM_TO_KILOGRAM = 0.001,
  GRAM_TO_MILLIGRAM = 1000,
  GRAM_TO_MICROGRAM = 1000000,
  GRAM_TO_CARAT = 5,
  GRAM_TO_QUINTAL = 0.00001,
  GRAM_TO_POUND = 0.0022046226218488,
  GRAM_TO_OUNCE = 0.03527396194958
}

export const MassSelectOptions: SelectOption[] = [
  {
    label: "Kilogram",
    value: MassUnits.KILOGRAM
  },
  {
    label: "Gram",
    value: MassUnits.GRAM
  },
  {
    label: "Milligram",
    value: MassUnits.MILLIGRAM
  },
  {
    label: "Microgram",
    value: MassUnits.MICROGRAM
  },
  {
    label: "Carat",
    value: MassUnits.CARAT
  },
  {
    label: "Quintal",
    value: MassUnits.QUINTAL
  },
  {
    label: "Pound",
    value: MassUnits.POUND
  },
  {
    label: "Ounce",
    value: MassUnits.OUNCE
  }
];
