import { ANGLE_CONVERSION_FACTORS, ANGLE_UNITS } from "./constants";

export const convertAngle = (
  input: string,
  from: string,
  to: string
): string => {
  let result = 0;
  let degree = 0;
  const number = parseFloat(input);

  switch (from) {
    case ANGLE_UNITS.DEGREE:
      degree = number;
      break;
    case ANGLE_UNITS.RADIAN:
      degree = number * ANGLE_CONVERSION_FACTORS.RADIAN_TO_DEGREE;
      break;
    case ANGLE_UNITS.GRADIAN:
      degree = number * ANGLE_CONVERSION_FACTORS.GRADIAN_TO_DEGREE;
      break;
    case ANGLE_UNITS.ARC_MINUTE:
      degree = number * ANGLE_CONVERSION_FACTORS.ARC_MINUTE_TO_DEGREE;
      break;
    case ANGLE_UNITS.ARC_SECOND:
      degree = number * ANGLE_CONVERSION_FACTORS.ARC_SECOND_TO_DEGREE;
      break;
  }

  switch (to) {
    case ANGLE_UNITS.DEGREE:
      result = degree;
      break;
    case ANGLE_UNITS.RADIAN:
      result = degree * ANGLE_CONVERSION_FACTORS.DEGREE_TO_RADIAN;
      break;
    case ANGLE_UNITS.GRADIAN:
      result = degree * ANGLE_CONVERSION_FACTORS.DEGREE_TO_GRADIAN;
      break;
    case ANGLE_UNITS.ARC_MINUTE:
      result = degree * ANGLE_CONVERSION_FACTORS.DEGREE_TO_ARC_MINUTE;
      break;
    case ANGLE_UNITS.ARC_SECOND:
      result = degree * ANGLE_CONVERSION_FACTORS.DEGREE_TO_ARC_SECOND;
      break;
  }

  return result.toString();
};
