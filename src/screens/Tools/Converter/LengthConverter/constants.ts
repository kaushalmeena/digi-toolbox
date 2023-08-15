export const UnitMap = {
  KILOMETER: "km",
  METER: "m",
  CENTIMETER: "cm",
  MILLIMETER: "mm",
  MILE: "mi",
  YARD: "yd",
  FOOT: "ft",
  INCH: "in"
};

export const ConversionMap = {
  [`${UnitMap.METER}->${UnitMap.METER}`]: 1,
  [`${UnitMap.KILOMETER}->${UnitMap.METER}`]: 1000,
  [`${UnitMap.CENTIMETER}->${UnitMap.METER}`]: 0.01,
  [`${UnitMap.MILLIMETER}->${UnitMap.METER}`]: 0.001,
  [`${UnitMap.MILE}->${UnitMap.METER}`]: 1609.344,
  [`${UnitMap.YARD}->${UnitMap.METER}`]: 0.9144,
  [`${UnitMap.FOOT}->${UnitMap.METER}`]: 0.3048,
  [`${UnitMap.INCH}->${UnitMap.METER}`]: 0.0254,
  [`${UnitMap.METER}->${UnitMap.KILOMETER}`]: 0.001,
  [`${UnitMap.METER}->${UnitMap.CENTIMETER}`]: 100,
  [`${UnitMap.METER}->${UnitMap.MILLIMETER}`]: 1000,
  [`${UnitMap.METER}->${UnitMap.MILE}`]: 0.00062137119223733,
  [`${UnitMap.METER}->${UnitMap.YARD}`]: 1.0936132983377,
  [`${UnitMap.METER}->${UnitMap.FOOT}`]: 3.2808398950131,
  [`${UnitMap.METER}->${UnitMap.INCH}`]: 39.370078740157
};

export const SelectOptions = [
  {
    label: "Kilometer",
    value: UnitMap.KILOMETER
  },
  {
    label: "Meter",
    value: UnitMap.METER
  },
  {
    label: "Centimeter",
    value: UnitMap.CENTIMETER
  },
  {
    label: "Millimeter",
    value: UnitMap.MILLIMETER
  },
  {
    label: "Mile",
    value: UnitMap.MILE
  },
  {
    label: "Yard",
    value: UnitMap.YARD
  },
  {
    label: "Foot",
    value: UnitMap.FOOT
  },
  {
    label: "Inch",
    value: UnitMap.INCH
  }
];
