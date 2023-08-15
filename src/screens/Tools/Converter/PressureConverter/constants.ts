export const UnitMap = {
  BAR: "bar",
  PASCAL: "Pa",
  POUNDS_PER_SQ_FOOT: "lb/ft²",
  POUNDS_PER_SQ_INCH: "lb/in²",
  STANDARD_ATMOSPHERE: "atm",
  TORR: "Torr"
};

export const ConversionMap = {
  [`${UnitMap.PASCAL}->${UnitMap.PASCAL}`]: 1,
  [`${UnitMap.BAR}->${UnitMap.PASCAL}`]: 100000,
  [`${UnitMap.POUNDS_PER_SQ_FOOT}->${UnitMap.PASCAL}`]: 47.880258980405,
  [`${UnitMap.POUNDS_PER_SQ_INCH}->${UnitMap.PASCAL}`]: 6894.7572931783,
  [`${UnitMap.STANDARD_ATMOSPHERE}->${UnitMap.PASCAL}`]: 101325,
  [`${UnitMap.TORR}->${UnitMap.PASCAL}`]: 133.32236842108,
  [`${UnitMap.PASCAL}->${UnitMap.BAR}`]: 0.00001,
  [`${UnitMap.PASCAL}->${UnitMap.POUNDS_PER_SQ_FOOT}`]: 0.02088543423312,
  [`${UnitMap.PASCAL}->${UnitMap.POUNDS_PER_SQ_INCH}`]: 0.00014503773773,
  [`${UnitMap.PASCAL}->${UnitMap.STANDARD_ATMOSPHERE}`]: 9.8692326671601e-6,
  [`${UnitMap.PASCAL}->${UnitMap.TORR}`]: 0.00750061682704
};

export const SelectOptions = [
  {
    label: "Bar",
    value: UnitMap.BAR
  },
  {
    label: "Pascal",
    value: UnitMap.PASCAL
  },
  {
    label: "Pounds/foot²",
    value: UnitMap.POUNDS_PER_SQ_FOOT
  },
  {
    label: "Pounds/inch² (PSI)",
    value: UnitMap.POUNDS_PER_SQ_INCH
  },
  {
    label: "Standard atmosphere",
    value: UnitMap.STANDARD_ATMOSPHERE
  },
  {
    label: "Torr",
    value: UnitMap.TORR
  }
];
