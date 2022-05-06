import { SPEED_UNITS, SPEED_UNITS_CONVERSION_FACTORS } from "./constants";

export const convertSpeed = (
  input: string,
  from: string,
  to: string
): string => {
  let result = 0;
  let metersPerSecond = 0;
  const number = parseFloat(input);

  switch (from) {
    case SPEED_UNITS.KILOMETERS_PER_HOUR:
      metersPerSecond =
        number *
        SPEED_UNITS_CONVERSION_FACTORS.KILOMETERS_PER_HOUR_TO_METERS_PER_SECOND;
      break;
    case SPEED_UNITS.METERS_PER_SECOND:
      metersPerSecond = number;
      break;
    case SPEED_UNITS.MILES_PER_HOUR:
      metersPerSecond =
        number *
        SPEED_UNITS_CONVERSION_FACTORS.MILES_PER_HOUR_TO_METERS_PER_SECOND;
      break;
    case SPEED_UNITS.FEET_PER_SECOND:
      metersPerSecond =
        number *
        SPEED_UNITS_CONVERSION_FACTORS.FEET_PER_SECOND_TO_METERS_PER_SECOND;
      break;
    case SPEED_UNITS.KNOT:
      metersPerSecond =
        number * SPEED_UNITS_CONVERSION_FACTORS.KNOT_TO_METERS_PER_SECOND;
      break;
  }

  switch (to) {
    case SPEED_UNITS.KILOMETERS_PER_HOUR:
      result =
        metersPerSecond *
        SPEED_UNITS_CONVERSION_FACTORS.METERS_PER_SECOND_TO_KILOMETERS_PER_HOUR;
      break;
    case SPEED_UNITS.METERS_PER_SECOND:
      result = metersPerSecond;
      break;
    case SPEED_UNITS.MILES_PER_HOUR:
      result =
        metersPerSecond *
        SPEED_UNITS_CONVERSION_FACTORS.METERS_PER_SECOND_TO_MILES_PER_HOUR;
      break;
    case SPEED_UNITS.FEET_PER_SECOND:
      result =
        metersPerSecond *
        SPEED_UNITS_CONVERSION_FACTORS.METERS_PER_SECOND_TO_FEET_PER_SECOND;
      break;
    case SPEED_UNITS.KNOT:
      result =
        metersPerSecond *
        SPEED_UNITS_CONVERSION_FACTORS.METERS_PER_SECOND_TO_KNOT;
      break;
  }

  return result.toString();
};
