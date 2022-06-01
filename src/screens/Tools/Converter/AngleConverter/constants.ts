import { SelectOption } from "../../../../types";

export const enum AngleUnits {
  DEGREE = "deg",
  RADIAN = "rad",
  GRADIAN = "grad",
  ARC_MINUTE = "arc-minute",
  ARC_SECOND = "arc-second"
}

export const enum AngleConversationFactors {
  RADIAN_TO_DEGREE = 57.295779513082,
  GRADIAN_TO_DEGREE = 0.9,
  ARC_MINUTE_TO_DEGREE = 0.016666666666667,
  ARC_SECOND_TO_DEGREE = 0.00027777777777778,
  DEGREE_TO_RADIAN = 0.017453292519943,
  DEGREE_TO_GRADIAN = 1.1111111111111,
  DEGREE_TO_ARC_MINUTE = 60,
  DEGREE_TO_ARC_SECOND = 3600
}

export const AngleSelectOptions: SelectOption[] = [
  {
    label: "Degree",
    value: AngleUnits.DEGREE
  },
  {
    label: "Radian",
    value: AngleUnits.RADIAN
  },
  {
    label: "Gradian",
    value: AngleUnits.GRADIAN
  },
  {
    label: "Minute of arc",
    value: AngleUnits.ARC_MINUTE
  },
  {
    label: "Second of arc",
    value: AngleUnits.ARC_SECOND
  }
];
