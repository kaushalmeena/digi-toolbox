import { PressureConversationFactors, PressureUnits } from "./constants";

export const convertPressure = (
  input: string,
  from: string,
  to: string
): string => {
  let result = 0;
  let pascal = 0;
  const number = parseFloat(input);

  switch (from) {
    case PressureUnits.BAR:
      pascal = number * PressureConversationFactors.BAR_TO_PASCAL;
      break;
    case PressureUnits.PASCAL:
      pascal = number;
      break;
    case PressureUnits.POUNDS_PER_SQ_FOOT:
      pascal =
        number * PressureConversationFactors.POUNDS_PER_SQ_FOOT_TO_PASCAL;
      break;
    case PressureUnits.POUNDS_PER_SQ_INCH:
      pascal =
        number * PressureConversationFactors.POUNDS_PER_SQ_INCH_TO_PASCAL;
      break;
    case PressureUnits.STANDARD_ATMOSPHERE:
      pascal =
        number * PressureConversationFactors.STANDARD_ATMOSPHERE_TO_PASCAL;
      break;
    case PressureUnits.TORR:
      pascal = number * PressureConversationFactors.TORR_TO_PASCAL;
      break;
    default:
  }

  switch (to) {
    case PressureUnits.BAR:
      result = pascal * PressureConversationFactors.PASCAL_TO_BAR;
      break;
    case PressureUnits.PASCAL:
      result = pascal;
      break;
    case PressureUnits.POUNDS_PER_SQ_FOOT:
      result =
        pascal * PressureConversationFactors.PASCAL_TO_POUNDS_PER_SQ_FOOT;
      break;
    case PressureUnits.POUNDS_PER_SQ_INCH:
      result =
        pascal * PressureConversationFactors.PASCAL_TO_POUNDS_PER_SQ_INCH;
      break;
    case PressureUnits.STANDARD_ATMOSPHERE:
      result =
        pascal * PressureConversationFactors.PASCAL_TO_STANDARD_ATMOSPHERE;
      break;
    case PressureUnits.TORR:
      result = pascal * PressureConversationFactors.PASCAL_TO_TORR;
      break;
    default:
  }

  return result.toString();
};
