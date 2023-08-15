export const UnitMap = {
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
  [`${UnitMap.GRAM}->${UnitMap.GRAM}`]: 1,
  [`${UnitMap.KILOGRAM}->${UnitMap.GRAM}`]: 1000,
  [`${UnitMap.MILLIGRAM}->${UnitMap.GRAM}`]: 0.001,
  [`${UnitMap.MICROGRAM}->${UnitMap.GRAM}`]: 0.000001,
  [`${UnitMap.CARAT}->${UnitMap.GRAM}`]: 0.2,
  [`${UnitMap.QUINTAL}->${UnitMap.GRAM}`]: 100000,
  [`${UnitMap.POUND}->${UnitMap.GRAM}`]: 453.59237,
  [`${UnitMap.OUNCE}->${UnitMap.GRAM}`]: 28.349523125,
  [`${UnitMap.GRAM}->${UnitMap.KILOGRAM}`]: 0.001,
  [`${UnitMap.GRAM}->${UnitMap.MILLIGRAM}`]: 1000,
  [`${UnitMap.GRAM}->${UnitMap.MICROGRAM}`]: 1000000,
  [`${UnitMap.GRAM}->${UnitMap.CARAT}`]: 5,
  [`${UnitMap.GRAM}->${UnitMap.QUINTAL}`]: 0.00001,
  [`${UnitMap.GRAM}->${UnitMap.POUND}`]: 0.0022046226218488,
  [`${UnitMap.GRAM}->${UnitMap.OUNCE}`]: 0.03527396194958
};

export const SelectOptions = [
  {
    label: "Kilogram",
    value: UnitMap.KILOGRAM
  },
  {
    label: "Gram",
    value: UnitMap.GRAM
  },
  {
    label: "Milligram",
    value: UnitMap.MILLIGRAM
  },
  {
    label: "Microgram",
    value: UnitMap.MICROGRAM
  },
  {
    label: "Carat",
    value: UnitMap.CARAT
  },
  {
    label: "Quintal",
    value: UnitMap.QUINTAL
  },
  {
    label: "Pound",
    value: UnitMap.POUND
  },
  {
    label: "Ounce",
    value: UnitMap.OUNCE
  }
];
