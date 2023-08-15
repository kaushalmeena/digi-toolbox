export const UnitMap = {
  JOULE: "J",
  KILOJOULE: "kJ",
  CALORIE: "cal",
  KILOCALORIE: "kcal",
  WATT_HOUR: "W⋅h",
  KILOWATT_HOUR: "kW⋅h",
  ELECTRONVOLT: "eV",
  HORSEPOWER_HOUR: "hp⋅h",
  FOOT_POUND: "ft⋅lb"
};

export const ConversionMap = {
  [`${UnitMap.JOULE}->${UnitMap.JOULE}`]: 1,
  [`${UnitMap.KILOJOULE}->${UnitMap.JOULE}`]: 1000,
  [`${UnitMap.CALORIE}->${UnitMap.JOULE}`]: 4.184,
  [`${UnitMap.KILOCALORIE}->${UnitMap.JOULE}`]: 4184,
  [`${UnitMap.WATT_HOUR}->${UnitMap.JOULE}`]: 3600,
  [`${UnitMap.KILOWATT_HOUR}->${UnitMap.JOULE}`]: 3600000,
  [`${UnitMap.ELECTRONVOLT}->${UnitMap.JOULE}`]: 1.6021000001255e-19,
  [`${UnitMap.HORSEPOWER_HOUR}->${UnitMap.JOULE}`]: 2684519.5368856,
  [`${UnitMap.FOOT_POUND}->${UnitMap.JOULE}`]: 1.3558179482896,
  [`${UnitMap.JOULE}->${UnitMap.KILOJOULE}`]: 0.001,
  [`${UnitMap.JOULE}->${UnitMap.CALORIE}`]: 0.23900573613767,
  [`${UnitMap.JOULE}->${UnitMap.KILOCALORIE}`]: 0.00023900573613767,
  [`${UnitMap.JOULE}->${UnitMap.WATT_HOUR}`]: 0.00027777777777778,
  [`${UnitMap.JOULE}->${UnitMap.KILOWATT_HOUR}`]: 2.7777777777778e-7,
  [`${UnitMap.JOULE}->${UnitMap.ELECTRONVOLT}`]: 6.241807627e18,
  [`${UnitMap.JOULE}->${UnitMap.HORSEPOWER_HOUR}`]: 3.725061361111e-7,
  [`${UnitMap.JOULE}->${UnitMap.FOOT_POUND}`]: 0.7375621493
};

export const SelectOptions = [
  {
    label: "Joule",
    value: UnitMap.JOULE
  },
  {
    label: "Kilojoule",
    value: UnitMap.KILOJOULE
  },
  {
    label: "Calorie",
    value: UnitMap.CALORIE
  },
  {
    label: "Kilocalorie",
    value: UnitMap.KILOCALORIE
  },
  {
    label: "Watt hour",
    value: UnitMap.WATT_HOUR
  },
  {
    label: "Kilowatt hour",
    value: UnitMap.KILOWATT_HOUR
  },
  {
    label: "Electronvolt",
    value: UnitMap.ELECTRONVOLT
  },
  {
    label: "Horsepower hour",
    value: UnitMap.HORSEPOWER_HOUR
  },
  {
    label: "Foot-pound",
    value: UnitMap.FOOT_POUND
  }
];
