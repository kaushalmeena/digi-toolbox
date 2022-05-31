import { SpeedUnits, SpeedConversationFactors } from "./constants";

export const convertSpeed = (
  input: string,
  from: string,
  to: string
): string => {
  let result = 0;
  let metersPerSecond = 0;
  const number = parseFloat(input);

  switch (from) {
    case SpeedUnits.KILOMETERS_PER_HOUR:
      metersPerSecond =
        number *
        SpeedConversationFactors.KILOMETERS_PER_HOUR_TO_METERS_PER_SECOND;
      break;
    case SpeedUnits.METERS_PER_SECOND:
      metersPerSecond = number;
      break;
    case SpeedUnits.MILES_PER_HOUR:
      metersPerSecond =
        number * SpeedConversationFactors.MILES_PER_HOUR_TO_METERS_PER_SECOND;
      break;
    case SpeedUnits.FEET_PER_SECOND:
      metersPerSecond =
        number * SpeedConversationFactors.FEET_PER_SECOND_TO_METERS_PER_SECOND;
      break;
    case SpeedUnits.KNOT:
      metersPerSecond =
        number * SpeedConversationFactors.KNOT_TO_METERS_PER_SECOND;
      break;
    default:
  }

  switch (to) {
    case SpeedUnits.KILOMETERS_PER_HOUR:
      result =
        metersPerSecond *
        SpeedConversationFactors.METERS_PER_SECOND_TO_KILOMETERS_PER_HOUR;
      break;
    case SpeedUnits.METERS_PER_SECOND:
      result = metersPerSecond;
      break;
    case SpeedUnits.MILES_PER_HOUR:
      result =
        metersPerSecond *
        SpeedConversationFactors.METERS_PER_SECOND_TO_MILES_PER_HOUR;
      break;
    case SpeedUnits.FEET_PER_SECOND:
      result =
        metersPerSecond *
        SpeedConversationFactors.METERS_PER_SECOND_TO_FEET_PER_SECOND;
      break;
    case SpeedUnits.KNOT:
      result =
        metersPerSecond * SpeedConversationFactors.METERS_PER_SECOND_TO_KNOT;
      break;
    default:
  }

  return result.toString();
};
