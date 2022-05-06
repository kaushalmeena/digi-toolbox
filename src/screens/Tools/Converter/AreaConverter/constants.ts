import { ISelectOption } from "../../../../interfaces";

export const enum AREA_UNITS {
  SQ_METER = "m²",
  SQ_KILOMETER = "km²",
  SQ_MILE = "mi²",
  SQ_YARD = "yd²",
  SQ_FOOT = "ft²",
  SQ_INCH = "in²",
  SQ_HECTARE = "ha",
  SQ_ACRE = "ac"
}

export const enum AREA_CONVERSION_FACTORS {
  SQ_KILOMETER_TO_SQ_METER = 1000000,
  SQ_MILE_TO_SQ_METER = 2589988.110339,
  SQ_YARD_TO_SQ_METER = 0.83612736000097,
  SQ_FOOT_TO_SQ_METER = 0.092903040000107,
  SQ_INCH_TO_SQ_METER = 0.00064516000000075,
  SQ_HECTARE_TO_SQ_METER = 10000,
  SQ_ACRE_TO_SQ_METER = 4046.8564224047,
  SQ_METER_TO_SQ_KILOMETER = 0.000001,
  SQ_METER_TO_SQ_MILE = 3.86102158542e-7,
  SQ_METER_TO_SQ_YARD = 1.1959900462997,
  SQ_METER_TO_SQ_FOOT = 10.763910416697,
  SQ_METER_TO_SQ_INCH = 1550.0031000044,
  SQ_METER_TO_SQ_HECTARE = 0.0001,
  SQ_METER_TO_SQ_ACRE = 0.00024710538146688
}

export const AreaSelectOptions: ISelectOption[] = [
  {
    label: "Square meter",
    value: AREA_UNITS.SQ_METER
  },
  {
    label: "Square kilometer",
    value: AREA_UNITS.SQ_KILOMETER
  },
  {
    label: "Square mile",
    value: AREA_UNITS.SQ_MILE
  },
  {
    label: "Square yard",
    value: AREA_UNITS.SQ_YARD
  },
  {
    label: "Square foot",
    value: AREA_UNITS.SQ_FOOT
  },
  {
    label: "Square inch",
    value: AREA_UNITS.SQ_INCH
  },
  {
    label: "Hectare",
    value: AREA_UNITS.SQ_HECTARE
  },
  {
    label: "Acre",
    value: AREA_UNITS.SQ_ACRE
  }
];
