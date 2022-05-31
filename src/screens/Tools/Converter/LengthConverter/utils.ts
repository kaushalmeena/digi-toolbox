import { LengthConversationFactors, LengthUnits } from "./constants";

export const convertLength = (
  input: string,
  from: string,
  to: string
): string => {
  let result = 0;
  let meter = 0;
  const number = parseFloat(input);

  switch (from) {
    case LengthUnits.KILOMETER:
      meter = number * LengthConversationFactors.KILOMETER_TO_METER;
      break;
    case LengthUnits.METER:
      meter = number;
      break;
    case LengthUnits.CENTIMETER:
      meter = number * LengthConversationFactors.CENTIMETER_TO_METER;
      break;
    case LengthUnits.MILLIMETER:
      meter = number * LengthConversationFactors.MILLIMETER_TO_METER;
      break;
    case LengthUnits.MILE:
      meter = number * LengthConversationFactors.MILE_TO_METER;
      break;
    case LengthUnits.YARD:
      meter = number * LengthConversationFactors.YARD_TO_METER;
      break;
    case LengthUnits.FOOT:
      meter = number * LengthConversationFactors.FOOT_TO_METER;
      break;
    case LengthUnits.INCH:
      meter = number * LengthConversationFactors.INCH_TO_METER;
      break;
    default:
  }

  switch (to) {
    case LengthUnits.KILOMETER:
      result = meter * LengthConversationFactors.METER_TO_KILOMETER;
      break;
    case LengthUnits.METER:
      result = meter;
      break;
    case LengthUnits.CENTIMETER:
      result = meter * LengthConversationFactors.METER_TO_CENTIMETER;
      break;
    case LengthUnits.MILLIMETER:
      result = meter * LengthConversationFactors.METER_TO_MILLIMETER;
      break;
    case LengthUnits.MILE:
      result = meter * LengthConversationFactors.METER_TO_MILE;
      break;
    case LengthUnits.YARD:
      result = meter * LengthConversationFactors.METER_TO_YARD;
      break;
    case LengthUnits.FOOT:
      result = meter * LengthConversationFactors.METER_TO_FOOT;
      break;
    case LengthUnits.INCH:
      result = meter * LengthConversationFactors.METER_TO_INCH;
      break;
    default:
  }

  return result.toString();
};
