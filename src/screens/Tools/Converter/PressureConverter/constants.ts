import { ISelectOption } from "../../../../interfaces";

export const enum PressureUnits {
  BAR = "bar",
  PASCAL = "Pa",
  POUNDS_PER_SQ_FOOT = "lb/ft²",
  POUNDS_PER_SQ_INCH = "lb/in²",
  STANDARD_ATMOSPHERE = "atm",
  TORR = "Torr"
}

export const enum PressureConversationFactors {
  BAR_TO_PASCAL = 100000,
  POUNDS_PER_SQ_FOOT_TO_PASCAL = 47.880258980405,
  POUNDS_PER_SQ_INCH_TO_PASCAL = 6894.7572931783,
  STANDARD_ATMOSPHERE_TO_PASCAL = 101325,
  TORR_TO_PASCAL = 133.32236842108,
  PASCAL_TO_BAR = 0.00001,
  PASCAL_TO_POUNDS_PER_SQ_FOOT = 0.02088543423312,
  PASCAL_TO_POUNDS_PER_SQ_INCH = 0.00014503773773,
  PASCAL_TO_STANDARD_ATMOSPHERE = 9.8692326671601e-6,
  PASCAL_TO_TORR = 0.00750061682704
}

export const PressureSelectOptions: ISelectOption[] = [
  {
    label: "Bar",
    value: PressureUnits.BAR
  },
  {
    label: "Pascal",
    value: PressureUnits.PASCAL
  },
  {
    label: "Pounds/foot²",
    value: PressureUnits.POUNDS_PER_SQ_FOOT
  },
  {
    label: "Pounds/inch² (PSI)",
    value: PressureUnits.POUNDS_PER_SQ_INCH
  },
  {
    label: "Standard atmosphere",
    value: PressureUnits.STANDARD_ATMOSPHERE
  },
  {
    label: "Torr",
    value: PressureUnits.TORR
  }
];
