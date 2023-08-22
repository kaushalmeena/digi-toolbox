export const Units = {
  SQ_METER: "m²",
  SQ_KILOMETER: "km²",
  SQ_MILE: "mi²",
  SQ_YARD: "yd²",
  SQ_FOOT: "ft²",
  SQ_INCH: "in²",
  SQ_HECTARE: "ha",
  SQ_ACRE: "ac"
};

export const ConversionMap = {
  [`${Units.SQ_METER}->${Units.SQ_METER}`]: 1,
  [`${Units.SQ_KILOMETER}->${Units.SQ_METER}`]: 1000000,
  [`${Units.SQ_MILE}->${Units.SQ_METER}`]: 2589988.110339,
  [`${Units.SQ_YARD}->${Units.SQ_METER}`]: 0.83612736000097,
  [`${Units.SQ_FOOT}->${Units.SQ_METER}`]: 0.092903040000107,
  [`${Units.SQ_INCH}->${Units.SQ_METER}`]: 0.00064516000000075,
  [`${Units.SQ_HECTARE}->${Units.SQ_METER}`]: 10000,
  [`${Units.SQ_ACRE}->${Units.SQ_METER}`]: 4046.8564224047,
  [`${Units.SQ_METER}->${Units.SQ_KILOMETER}`]: 0.000001,
  [`${Units.SQ_METER}->${Units.SQ_MILE}`]: 3.86102158542e-7,
  [`${Units.SQ_METER}->${Units.SQ_YARD}`]: 1.1959900462997,
  [`${Units.SQ_METER}->${Units.SQ_FOOT}`]: 10.763910416697,
  [`${Units.SQ_METER}->${Units.SQ_INCH}`]: 1550.0031000044,
  [`${Units.SQ_METER}->${Units.SQ_HECTARE}`]: 0.0001,
  [`${Units.SQ_METER}->${Units.SQ_ACRE}`]: 0.00024710538146688
};

export const SelectOptions = [
  {
    label: "Square meter",
    value: Units.SQ_METER
  },
  {
    label: "Square kilometer",
    value: Units.SQ_KILOMETER
  },
  {
    label: "Square mile",
    value: Units.SQ_MILE
  },
  {
    label: "Square yard",
    value: Units.SQ_YARD
  },
  {
    label: "Square foot",
    value: Units.SQ_FOOT
  },
  {
    label: "Square inch",
    value: Units.SQ_INCH
  },
  {
    label: "Hectare",
    value: Units.SQ_HECTARE
  },
  {
    label: "Acre",
    value: Units.SQ_ACRE
  }
];
