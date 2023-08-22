export const Units = {
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
  [`${Units.METER}->${Units.METER}`]: 1,
  [`${Units.KILOMETER}->${Units.METER}`]: 1000,
  [`${Units.CENTIMETER}->${Units.METER}`]: 0.01,
  [`${Units.MILLIMETER}->${Units.METER}`]: 0.001,
  [`${Units.MILE}->${Units.METER}`]: 1609.344,
  [`${Units.YARD}->${Units.METER}`]: 0.9144,
  [`${Units.FOOT}->${Units.METER}`]: 0.3048,
  [`${Units.INCH}->${Units.METER}`]: 0.0254,
  [`${Units.METER}->${Units.KILOMETER}`]: 0.001,
  [`${Units.METER}->${Units.CENTIMETER}`]: 100,
  [`${Units.METER}->${Units.MILLIMETER}`]: 1000,
  [`${Units.METER}->${Units.MILE}`]: 0.00062137119223733,
  [`${Units.METER}->${Units.YARD}`]: 1.0936132983377,
  [`${Units.METER}->${Units.FOOT}`]: 3.2808398950131,
  [`${Units.METER}->${Units.INCH}`]: 39.370078740157
};

export const SelectOptions = [
  {
    label: "Kilometer",
    value: Units.KILOMETER
  },
  {
    label: "Meter",
    value: Units.METER
  },
  {
    label: "Centimeter",
    value: Units.CENTIMETER
  },
  {
    label: "Millimeter",
    value: Units.MILLIMETER
  },
  {
    label: "Mile",
    value: Units.MILE
  },
  {
    label: "Yard",
    value: Units.YARD
  },
  {
    label: "Foot",
    value: Units.FOOT
  },
  {
    label: "Inch",
    value: Units.INCH
  }
];
