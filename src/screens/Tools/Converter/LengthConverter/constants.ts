import { ISelectOption } from "../../../../interfaces";

export const enum LengthUnits {
  KILOMETER = "km",
  METER = "m",
  CENTIMETER = "cm",
  MILLIMETER = "mm",
  MILE = "mi",
  YARD = "yd",
  FOOT = "ft",
  INCH = "in"
}

export const enum LengthConversationFactors {
  KILOMETER_TO_METER = 1000,
  CENTIMETER_TO_METER = 0.01,
  MILLIMETER_TO_METER = 0.001,
  MILE_TO_METER = 1609.344,
  YARD_TO_METER = 0.9144,
  FOOT_TO_METER = 0.3048,
  INCH_TO_METER = 0.0254,
  METER_TO_KILOMETER = 0.001,
  METER_TO_CENTIMETER = 100,
  METER_TO_MILLIMETER = 1000,
  METER_TO_MILE = 0.00062137119223733,
  METER_TO_YARD = 1.0936132983377,
  METER_TO_FOOT = 3.2808398950131,
  METER_TO_INCH = 39.370078740157
}

export const LengthSelectOptions: ISelectOption[] = [
  {
    label: "Kilometer",
    value: LengthUnits.KILOMETER
  },
  {
    label: "Meter",
    value: LengthUnits.METER
  },
  {
    label: "Centimeter",
    value: LengthUnits.CENTIMETER
  },
  {
    label: "Millimeter",
    value: LengthUnits.MILLIMETER
  },
  {
    label: "Mile",
    value: LengthUnits.MILE
  },
  {
    label: "Yard",
    value: LengthUnits.YARD
  },
  {
    label: "Foot",
    value: LengthUnits.FOOT
  },
  {
    label: "Inch",
    value: LengthUnits.INCH
  }
];
