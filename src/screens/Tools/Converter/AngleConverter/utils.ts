import { AngleConversationFactors, AngleUnits } from "./constants";

export const convertAngle = (
  input: string,
  from: string,
  to: string
): string => {
  let result = 0;
  let degree = 0;
  const number = parseFloat(input);

  switch (from) {
    case AngleUnits.DEGREE:
      degree = number;
      break;
    case AngleUnits.RADIAN:
      degree = number * AngleConversationFactors.RADIAN_TO_DEGREE;
      break;
    case AngleUnits.GRADIAN:
      degree = number * AngleConversationFactors.GRADIAN_TO_DEGREE;
      break;
    case AngleUnits.ARC_MINUTE:
      degree = number * AngleConversationFactors.ARC_MINUTE_TO_DEGREE;
      break;
    case AngleUnits.ARC_SECOND:
      degree = number * AngleConversationFactors.ARC_SECOND_TO_DEGREE;
      break;
    default:
  }

  switch (to) {
    case AngleUnits.DEGREE:
      result = degree;
      break;
    case AngleUnits.RADIAN:
      result = degree * AngleConversationFactors.DEGREE_TO_RADIAN;
      break;
    case AngleUnits.GRADIAN:
      result = degree * AngleConversationFactors.DEGREE_TO_GRADIAN;
      break;
    case AngleUnits.ARC_MINUTE:
      result = degree * AngleConversationFactors.DEGREE_TO_ARC_MINUTE;
      break;
    case AngleUnits.ARC_SECOND:
      result = degree * AngleConversationFactors.DEGREE_TO_ARC_SECOND;
      break;
    default:
  }

  return result.toString();
};
