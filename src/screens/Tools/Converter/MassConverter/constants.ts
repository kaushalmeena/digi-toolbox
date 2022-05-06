import { ISelectOption } from "../../../../interfaces";

export const enum MASS_UNITS {
  KILOGRAM = "kg",
  GRAM = "g",
  MILLIGRAM = "mg",
  MICROGRAM = "µg",
  CARAT = "ct",
  QUINTAL = "q",
  POUND = "lb",
  OUNCE = "oz"
}

export const enum MASS_CONVERSION_FACTORS {
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

export const MassSelectOptions: ISelectOption[] = [
  {
    label: "Kilogram",
    value: MASS_UNITS.KILOGRAM
  },
  {
    label: "Gram",
    value: MASS_UNITS.GRAM
  },
  {
    label: "Milligram",
    value: MASS_UNITS.MILLIGRAM
  },
  {
    label: "Microgram",
    value: MASS_UNITS.MICROGRAM
  },
  {
    label: "Carat",
    value: MASS_UNITS.CARAT
  },
  {
    label: "Quintal",
    value: MASS_UNITS.QUINTAL
  },
  {
    label: "Pound",
    value: MASS_UNITS.POUND
  },
  {
    label: "Ounce",
    value: MASS_UNITS.OUNCE
  }
];
