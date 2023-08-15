export const UnitMap = {
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
  [`${UnitMap.SQ_METER}->${UnitMap.SQ_METER}`]: 1,
  [`${UnitMap.SQ_KILOMETER}->${UnitMap.SQ_METER}`]: 1000000,
  [`${UnitMap.SQ_MILE}->${UnitMap.SQ_METER}`]: 2589988.110339,
  [`${UnitMap.SQ_YARD}->${UnitMap.SQ_METER}`]: 0.83612736000097,
  [`${UnitMap.SQ_FOOT}->${UnitMap.SQ_METER}`]: 0.092903040000107,
  [`${UnitMap.SQ_INCH}->${UnitMap.SQ_METER}`]: 0.00064516000000075,
  [`${UnitMap.SQ_HECTARE}->${UnitMap.SQ_METER}`]: 10000,
  [`${UnitMap.SQ_ACRE}->${UnitMap.SQ_METER}`]: 4046.8564224047,
  [`${UnitMap.SQ_METER}->${UnitMap.SQ_KILOMETER}`]: 0.000001,
  [`${UnitMap.SQ_METER}->${UnitMap.SQ_MILE}`]: 3.86102158542e-7,
  [`${UnitMap.SQ_METER}->${UnitMap.SQ_YARD}`]: 1.1959900462997,
  [`${UnitMap.SQ_METER}->${UnitMap.SQ_FOOT}`]: 10.763910416697,
  [`${UnitMap.SQ_METER}->${UnitMap.SQ_INCH}`]: 1550.0031000044,
  [`${UnitMap.SQ_METER}->${UnitMap.SQ_HECTARE}`]: 0.0001,
  [`${UnitMap.SQ_METER}->${UnitMap.SQ_ACRE}`]: 0.00024710538146688
};

export const SelectOptions = [
  {
    label: "Square meter",
    value: UnitMap.SQ_METER
  },
  {
    label: "Square kilometer",
    value: UnitMap.SQ_KILOMETER
  },
  {
    label: "Square mile",
    value: UnitMap.SQ_MILE
  },
  {
    label: "Square yard",
    value: UnitMap.SQ_YARD
  },
  {
    label: "Square foot",
    value: UnitMap.SQ_FOOT
  },
  {
    label: "Square inch",
    value: UnitMap.SQ_INCH
  },
  {
    label: "Hectare",
    value: UnitMap.SQ_HECTARE
  },
  {
    label: "Acre",
    value: UnitMap.SQ_ACRE
  }
];
