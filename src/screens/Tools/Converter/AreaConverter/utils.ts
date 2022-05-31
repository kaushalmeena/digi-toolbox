import { AreaConversationFactors, AreaUnits } from "./constants";

export const convertArea = (
  input: string,
  from: string,
  to: string
): string => {
  let result = 0;
  let sqMeter = 0;
  const number = parseFloat(input);

  switch (from) {
    case AreaUnits.SQ_METER:
      sqMeter = number;
      break;
    case AreaUnits.SQ_KILOMETER:
      sqMeter = number * AreaConversationFactors.SQ_KILOMETER_TO_SQ_METER;
      break;
    case AreaUnits.SQ_MILE:
      sqMeter = number * AreaConversationFactors.SQ_MILE_TO_SQ_METER;
      break;
    case AreaUnits.SQ_YARD:
      sqMeter = number * AreaConversationFactors.SQ_YARD_TO_SQ_METER;
      break;
    case AreaUnits.SQ_FOOT:
      sqMeter = number * AreaConversationFactors.SQ_FOOT_TO_SQ_METER;
      break;
    case AreaUnits.SQ_INCH:
      sqMeter = number * AreaConversationFactors.SQ_INCH_TO_SQ_METER;
      break;
    case AreaUnits.SQ_HECTARE:
      sqMeter = number * AreaConversationFactors.SQ_HECTARE_TO_SQ_METER;
      break;
    case AreaUnits.SQ_ACRE:
      sqMeter = number * AreaConversationFactors.SQ_ACRE_TO_SQ_METER;
      break;
    default:
  }

  switch (to) {
    case AreaUnits.SQ_METER:
      result = sqMeter;
      break;
    case AreaUnits.SQ_KILOMETER:
      result = sqMeter * AreaConversationFactors.SQ_METER_TO_SQ_KILOMETER;
      break;
    case AreaUnits.SQ_MILE:
      result = sqMeter * AreaConversationFactors.SQ_METER_TO_SQ_MILE;
      break;
    case AreaUnits.SQ_YARD:
      result = sqMeter * AreaConversationFactors.SQ_METER_TO_SQ_YARD;
      break;
    case AreaUnits.SQ_FOOT:
      result = sqMeter * AreaConversationFactors.SQ_METER_TO_SQ_FOOT;
      break;
    case AreaUnits.SQ_INCH:
      result = sqMeter * AreaConversationFactors.SQ_METER_TO_SQ_INCH;
      break;
    case AreaUnits.SQ_HECTARE:
      result = sqMeter * AreaConversationFactors.SQ_METER_TO_SQ_HECTARE;
      break;
    case AreaUnits.SQ_ACRE:
      result = sqMeter * AreaConversationFactors.SQ_METER_TO_SQ_ACRE;
      break;
    default:
  }

  return result.toString();
};
