import { LENGTH_CONVERSION_FACTORS, LENGTH_UNITS } from "./constants";

export const convertLength = (
  input: string,
  from: string,
  to: string
): string => {
  let result = 0;
  let meter = 0;
  const number = parseFloat(input);

  switch (from) {
    case LENGTH_UNITS.KILOMETER:
      meter = number * LENGTH_CONVERSION_FACTORS.KILOMETER_TO_METER;
      break;
    case LENGTH_UNITS.METER:
      meter = number;
      break;
    case LENGTH_UNITS.CENTIMETER:
      meter = number * LENGTH_CONVERSION_FACTORS.CENTIMETER_TO_METER;
      break;
    case LENGTH_UNITS.MILLIMETER:
      meter = number * LENGTH_CONVERSION_FACTORS.MILLIMETER_TO_METER;
      break;
    case LENGTH_UNITS.MILE:
      meter = number * LENGTH_CONVERSION_FACTORS.MILE_TO_METER;
      break;
    case LENGTH_UNITS.YARD:
      meter = number * LENGTH_CONVERSION_FACTORS.YARD_TO_METER;
      break;
    case LENGTH_UNITS.FOOT:
      meter = number * LENGTH_CONVERSION_FACTORS.FOOT_TO_METER;
      break;
    case LENGTH_UNITS.INCH:
      meter = number * LENGTH_CONVERSION_FACTORS.INCH_TO_METER;
      break;
  }

  switch (to) {
    case LENGTH_UNITS.KILOMETER:
      result = meter * LENGTH_CONVERSION_FACTORS.METER_TO_KILOMETER;
      break;
    case LENGTH_UNITS.METER:
      result = meter;
      break;
    case LENGTH_UNITS.CENTIMETER:
      result = meter * LENGTH_CONVERSION_FACTORS.METER_TO_CENTIMETER;
      break;
    case LENGTH_UNITS.MILLIMETER:
      result = meter * LENGTH_CONVERSION_FACTORS.METER_TO_MILLIMETER;
      break;
    case LENGTH_UNITS.MILE:
      result = meter * LENGTH_CONVERSION_FACTORS.METER_TO_MILE;
      break;
    case LENGTH_UNITS.YARD:
      result = meter * LENGTH_CONVERSION_FACTORS.METER_TO_YARD;
      break;
    case LENGTH_UNITS.FOOT:
      result = meter * LENGTH_CONVERSION_FACTORS.METER_TO_FOOT;
      break;
    case LENGTH_UNITS.INCH:
      result = meter * LENGTH_CONVERSION_FACTORS.METER_TO_INCH;
      break;
  }

  return result.toString();
};
