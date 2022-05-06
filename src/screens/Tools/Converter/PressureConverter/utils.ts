import { PRESSURE_CONVERSION_FACTORS, PRESSURE_UNITS } from "./constants";

export const convertPressure = (
  input: string,
  from: string,
  to: string
): string => {
  let result = 0;
  let pascal = 0;
  const number = parseFloat(input);

  switch (from) {
    case PRESSURE_UNITS.BAR:
      pascal = number * PRESSURE_CONVERSION_FACTORS.BAR_TO_PASCAL;
      break;
    case PRESSURE_UNITS.PASCAL:
      pascal = number;
      break;
    case PRESSURE_UNITS.POUNDS_PER_SQ_FOOT:
      pascal =
        number * PRESSURE_CONVERSION_FACTORS.POUNDS_PER_SQ_FOOT_TO_PASCAL;
      break;
    case PRESSURE_UNITS.POUNDS_PER_SQ_INCH:
      pascal =
        number * PRESSURE_CONVERSION_FACTORS.POUNDS_PER_SQ_INCH_TO_PASCAL;
      break;
    case PRESSURE_UNITS.STANDARD_ATMOSPHERE:
      pascal =
        number * PRESSURE_CONVERSION_FACTORS.STANDARD_ATMOSPHERE_TO_PASCAL;
      break;
    case PRESSURE_UNITS.TORR:
      pascal = number * PRESSURE_CONVERSION_FACTORS.TORR_TO_PASCAL;
      break;
  }

  switch (to) {
    case PRESSURE_UNITS.BAR:
      result = pascal * PRESSURE_CONVERSION_FACTORS.PASCAL_TO_BAR;
      break;
    case PRESSURE_UNITS.PASCAL:
      result = pascal;
      break;
    case PRESSURE_UNITS.POUNDS_PER_SQ_FOOT:
      result =
        pascal * PRESSURE_CONVERSION_FACTORS.PASCAL_TO_POUNDS_PER_SQ_FOOT;
      break;
    case PRESSURE_UNITS.POUNDS_PER_SQ_INCH:
      result =
        pascal * PRESSURE_CONVERSION_FACTORS.PASCAL_TO_POUNDS_PER_SQ_INCH;
      break;
    case PRESSURE_UNITS.STANDARD_ATMOSPHERE:
      result =
        pascal * PRESSURE_CONVERSION_FACTORS.PASCAL_TO_STANDARD_ATMOSPHERE;
      break;
    case PRESSURE_UNITS.TORR:
      result = pascal * PRESSURE_CONVERSION_FACTORS.PASCAL_TO_TORR;
      break;
  }

  return result.toString();
};
