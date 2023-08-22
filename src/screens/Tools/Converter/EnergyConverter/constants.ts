export const Units = {
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
  [`${Units.JOULE}->${Units.JOULE}`]: 1,
  [`${Units.KILOJOULE}->${Units.JOULE}`]: 1000,
  [`${Units.CALORIE}->${Units.JOULE}`]: 4.184,
  [`${Units.KILOCALORIE}->${Units.JOULE}`]: 4184,
  [`${Units.WATT_HOUR}->${Units.JOULE}`]: 3600,
  [`${Units.KILOWATT_HOUR}->${Units.JOULE}`]: 3600000,
  [`${Units.ELECTRONVOLT}->${Units.JOULE}`]: 1.6021000001255e-19,
  [`${Units.HORSEPOWER_HOUR}->${Units.JOULE}`]: 2684519.5368856,
  [`${Units.FOOT_POUND}->${Units.JOULE}`]: 1.3558179482896,
  [`${Units.JOULE}->${Units.KILOJOULE}`]: 0.001,
  [`${Units.JOULE}->${Units.CALORIE}`]: 0.23900573613767,
  [`${Units.JOULE}->${Units.KILOCALORIE}`]: 0.00023900573613767,
  [`${Units.JOULE}->${Units.WATT_HOUR}`]: 0.00027777777777778,
  [`${Units.JOULE}->${Units.KILOWATT_HOUR}`]: 2.7777777777778e-7,
  [`${Units.JOULE}->${Units.ELECTRONVOLT}`]: 6.241807627e18,
  [`${Units.JOULE}->${Units.HORSEPOWER_HOUR}`]: 3.725061361111e-7,
  [`${Units.JOULE}->${Units.FOOT_POUND}`]: 0.7375621493
};

export const SelectOptions = [
  {
    label: "Joule",
    value: Units.JOULE
  },
  {
    label: "Kilojoule",
    value: Units.KILOJOULE
  },
  {
    label: "Calorie",
    value: Units.CALORIE
  },
  {
    label: "Kilocalorie",
    value: Units.KILOCALORIE
  },
  {
    label: "Watt hour",
    value: Units.WATT_HOUR
  },
  {
    label: "Kilowatt hour",
    value: Units.KILOWATT_HOUR
  },
  {
    label: "Electronvolt",
    value: Units.ELECTRONVOLT
  },
  {
    label: "Horsepower hour",
    value: Units.HORSEPOWER_HOUR
  },
  {
    label: "Foot-pound",
    value: Units.FOOT_POUND
  }
];
