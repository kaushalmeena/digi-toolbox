import { ISelectOption } from "../../../../interfaces";

export const enum ANGLE_UNITS {
  DEGREE = "deg",
  RADIAN = "rad",
  GRADIAN = "grad",
  ARC_MINUTE = "arc-minute",
  ARC_SECOND = "arc-second"
}

export const enum ANGLE_CONVERSION_FACTORS {
  RADIAN_TO_DEGREE = 57.295779513082,
  GRADIAN_TO_DEGREE = 0.9,
  ARC_MINUTE_TO_DEGREE = 0.016666666666667,
  ARC_SECOND_TO_DEGREE = 0.00027777777777778,
  DEGREE_TO_RADIAN = 0.017453292519943,
  DEGREE_TO_GRADIAN = 1.1111111111111,
  DEGREE_TO_ARC_MINUTE = 60,
  DEGREE_TO_ARC_SECOND = 3600
}

export const AngleSelectOptions: ISelectOption[] = [
  {
    label: "Degree",
    value: ANGLE_UNITS.DEGREE
  },
  {
    label: "Radian",
    value: ANGLE_UNITS.RADIAN
  },
  {
    label: "Gradian",
    value: ANGLE_UNITS.GRADIAN
  },
  {
    label: "Minute of arc",
    value: ANGLE_UNITS.ARC_MINUTE
  },
  {
    label: "Second of arc",
    value: ANGLE_UNITS.ARC_SECOND
  }
];
