export const Units = {
  DEGREE: "deg",
  RADIAN: "rad",
  GRADIAN: "grad",
  ARC_MINUTE: "arc-minute",
  ARC_SECOND: "arc-second"
};

export const ConversionMap = {
  [`${Units.DEGREE}->${Units.DEGREE}`]: 1,
  [`${Units.RADIAN}->${Units.DEGREE}`]: 57.295779513082,
  [`${Units.GRADIAN}->${Units.DEGREE}`]: 0.9,
  [`${Units.ARC_MINUTE}->${Units.DEGREE}`]: 0.016666666666667,
  [`${Units.ARC_SECOND}->${Units.DEGREE}`]: 0.00027777777777778,
  [`${Units.DEGREE}->${Units.RADIAN}`]: 0.017453292519943,
  [`${Units.DEGREE}->${Units.GRADIAN}`]: 1.1111111111111,
  [`${Units.DEGREE}->${Units.ARC_MINUTE}`]: 60,
  [`${Units.DEGREE}->${Units.ARC_SECOND}`]: 3600
};

export const SelectOptions = [
  {
    label: "Degree",
    value: Units.DEGREE
  },
  {
    label: "Radian",
    value: Units.RADIAN
  },
  {
    label: "Gradian",
    value: Units.GRADIAN
  },
  {
    label: "Minute of arc",
    value: Units.ARC_MINUTE
  },
  {
    label: "Second of arc",
    value: Units.ARC_SECOND
  }
];
