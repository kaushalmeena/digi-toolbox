export const UnitMap = {
  DEGREE: "deg",
  RADIAN: "rad",
  GRADIAN: "grad",
  ARC_MINUTE: "arc-minute",
  ARC_SECOND: "arc-second"
};

export const ConversionMap = {
  [`${UnitMap.DEGREE}->${UnitMap.DEGREE}`]: 1,
  [`${UnitMap.RADIAN}->${UnitMap.DEGREE}`]: 57.295779513082,
  [`${UnitMap.GRADIAN}->${UnitMap.DEGREE}`]: 0.9,
  [`${UnitMap.ARC_MINUTE}->${UnitMap.DEGREE}`]: 0.016666666666667,
  [`${UnitMap.ARC_SECOND}->${UnitMap.DEGREE}`]: 0.00027777777777778,
  [`${UnitMap.DEGREE}->${UnitMap.RADIAN}`]: 0.017453292519943,
  [`${UnitMap.DEGREE}->${UnitMap.GRADIAN}`]: 1.1111111111111,
  [`${UnitMap.DEGREE}->${UnitMap.ARC_MINUTE}`]: 60,
  [`${UnitMap.DEGREE}->${UnitMap.ARC_SECOND}`]: 3600
};

export const SelectOptions = [
  {
    label: "Degree",
    value: UnitMap.DEGREE
  },
  {
    label: "Radian",
    value: UnitMap.RADIAN
  },
  {
    label: "Gradian",
    value: UnitMap.GRADIAN
  },
  {
    label: "Minute of arc",
    value: UnitMap.ARC_MINUTE
  },
  {
    label: "Second of arc",
    value: UnitMap.ARC_SECOND
  }
];
