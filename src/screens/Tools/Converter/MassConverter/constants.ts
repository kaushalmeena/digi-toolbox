export const Units = {
  KILOGRAM: "kg",
  GRAM: "g",
  MILLIGRAM: "mg",
  MICROGRAM: "µg",
  CARAT: "ct",
  QUINTAL: "q",
  POUND: "lb",
  OUNCE: "oz"
};

export const ConversionMap = {
  [`${Units.GRAM}->${Units.GRAM}`]: 1,
  [`${Units.KILOGRAM}->${Units.GRAM}`]: 1000,
  [`${Units.MILLIGRAM}->${Units.GRAM}`]: 0.001,
  [`${Units.MICROGRAM}->${Units.GRAM}`]: 0.000001,
  [`${Units.CARAT}->${Units.GRAM}`]: 0.2,
  [`${Units.QUINTAL}->${Units.GRAM}`]: 100000,
  [`${Units.POUND}->${Units.GRAM}`]: 453.59237,
  [`${Units.OUNCE}->${Units.GRAM}`]: 28.349523125,
  [`${Units.GRAM}->${Units.KILOGRAM}`]: 0.001,
  [`${Units.GRAM}->${Units.MILLIGRAM}`]: 1000,
  [`${Units.GRAM}->${Units.MICROGRAM}`]: 1000000,
  [`${Units.GRAM}->${Units.CARAT}`]: 5,
  [`${Units.GRAM}->${Units.QUINTAL}`]: 0.00001,
  [`${Units.GRAM}->${Units.POUND}`]: 0.0022046226218488,
  [`${Units.GRAM}->${Units.OUNCE}`]: 0.03527396194958
};

export const SelectOptions = [
  {
    label: "Kilogram",
    value: Units.KILOGRAM
  },
  {
    label: "Gram",
    value: Units.GRAM
  },
  {
    label: "Milligram",
    value: Units.MILLIGRAM
  },
  {
    label: "Microgram",
    value: Units.MICROGRAM
  },
  {
    label: "Carat",
    value: Units.CARAT
  },
  {
    label: "Quintal",
    value: Units.QUINTAL
  },
  {
    label: "Pound",
    value: Units.POUND
  },
  {
    label: "Ounce",
    value: Units.OUNCE
  }
];
