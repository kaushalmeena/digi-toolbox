import { AREA_CONVERSION_FACTORS, AREA_UNITS } from "./constants";

export const convertArea = (
  input: string,
  from: string,
  to: string
): string => {
  let result = 0;
  let sqMeter = 0;
  const number = parseFloat(input);

  switch (from) {
    case AREA_UNITS.SQ_METER:
      sqMeter = number;
      break;
    case AREA_UNITS.SQ_KILOMETER:
      sqMeter = number * AREA_CONVERSION_FACTORS.SQ_KILOMETER_TO_SQ_METER;
      break;
    case AREA_UNITS.SQ_MILE:
      sqMeter = number * AREA_CONVERSION_FACTORS.SQ_MILE_TO_SQ_METER;
      break;
    case AREA_UNITS.SQ_YARD:
      sqMeter = number * AREA_CONVERSION_FACTORS.SQ_YARD_TO_SQ_METER;
      break;
    case AREA_UNITS.SQ_FOOT:
      sqMeter = number * AREA_CONVERSION_FACTORS.SQ_FOOT_TO_SQ_METER;
      break;
    case AREA_UNITS.SQ_INCH:
      sqMeter = number * AREA_CONVERSION_FACTORS.SQ_INCH_TO_SQ_METER;
      break;
    case AREA_UNITS.SQ_HECTARE:
      sqMeter = number * AREA_CONVERSION_FACTORS.SQ_HECTARE_TO_SQ_METER;
      break;
    case AREA_UNITS.SQ_ACRE:
      sqMeter = number * AREA_CONVERSION_FACTORS.SQ_ACRE_TO_SQ_METER;
      break;
  }

  switch (to) {
    case AREA_UNITS.SQ_METER:
      result = sqMeter;
      break;
    case AREA_UNITS.SQ_KILOMETER:
      result = sqMeter * AREA_CONVERSION_FACTORS.SQ_METER_TO_SQ_KILOMETER;
      break;
    case AREA_UNITS.SQ_MILE:
      result = sqMeter * AREA_CONVERSION_FACTORS.SQ_METER_TO_SQ_MILE;
      break;
    case AREA_UNITS.SQ_YARD:
      result = sqMeter * AREA_CONVERSION_FACTORS.SQ_METER_TO_SQ_YARD;
      break;
    case AREA_UNITS.SQ_FOOT:
      result = sqMeter * AREA_CONVERSION_FACTORS.SQ_METER_TO_SQ_FOOT;
      break;
    case AREA_UNITS.SQ_INCH:
      result = sqMeter * AREA_CONVERSION_FACTORS.SQ_METER_TO_SQ_INCH;
      break;
    case AREA_UNITS.SQ_HECTARE:
      result = sqMeter * AREA_CONVERSION_FACTORS.SQ_METER_TO_SQ_HECTARE;
      break;
    case AREA_UNITS.SQ_ACRE:
      result = sqMeter * AREA_CONVERSION_FACTORS.SQ_METER_TO_SQ_ACRE;
      break;
  }

  return result.toString();
};
