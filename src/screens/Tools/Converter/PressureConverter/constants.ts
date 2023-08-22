export const Units = {
  BAR: "bar",
  PASCAL: "Pa",
  POUNDS_PER_SQ_FOOT: "lb/ft²",
  POUNDS_PER_SQ_INCH: "lb/in²",
  STANDARD_ATMOSPHERE: "atm",
  TORR: "Torr"
};

export const ConversionMap = {
  [`${Units.PASCAL}->${Units.PASCAL}`]: 1,
  [`${Units.BAR}->${Units.PASCAL}`]: 100000,
  [`${Units.POUNDS_PER_SQ_FOOT}->${Units.PASCAL}`]: 47.880258980405,
  [`${Units.POUNDS_PER_SQ_INCH}->${Units.PASCAL}`]: 6894.7572931783,
  [`${Units.STANDARD_ATMOSPHERE}->${Units.PASCAL}`]: 101325,
  [`${Units.TORR}->${Units.PASCAL}`]: 133.32236842108,
  [`${Units.PASCAL}->${Units.BAR}`]: 0.00001,
  [`${Units.PASCAL}->${Units.POUNDS_PER_SQ_FOOT}`]: 0.02088543423312,
  [`${Units.PASCAL}->${Units.POUNDS_PER_SQ_INCH}`]: 0.00014503773773,
  [`${Units.PASCAL}->${Units.STANDARD_ATMOSPHERE}`]: 9.8692326671601e-6,
  [`${Units.PASCAL}->${Units.TORR}`]: 0.00750061682704
};

export const SelectOptions = [
  {
    label: "Bar",
    value: Units.BAR
  },
  {
    label: "Pascal",
    value: Units.PASCAL
  },
  {
    label: "Pounds/foot²",
    value: Units.POUNDS_PER_SQ_FOOT
  },
  {
    label: "Pounds/inch² (PSI)",
    value: Units.POUNDS_PER_SQ_INCH
  },
  {
    label: "Standard atmosphere",
    value: Units.STANDARD_ATMOSPHERE
  },
  {
    label: "Torr",
    value: Units.TORR
  }
];
