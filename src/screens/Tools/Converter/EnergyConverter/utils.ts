import { EnergyConversationFactors, EnergyUnits } from "./constants";

export const convertEnergy = (
  input: string,
  from: string,
  to: string
): string => {
  let result = 0;
  let joule = 0;
  const number = parseFloat(input);

  switch (from) {
    case EnergyUnits.JOULE:
      joule = number;
      break;
    case EnergyUnits.KILOJOULE:
      joule = number * EnergyConversationFactors.KILOJOULE_TO_JOULE;
      break;
    case EnergyUnits.CALORIE:
      joule = number * EnergyConversationFactors.CALORIE_TO_JOULE;
      break;
    case EnergyUnits.KILOCALORIE:
      joule = number * EnergyConversationFactors.KILOCALORIE_TO_JOULE;
      break;
    case EnergyUnits.WATT_HOUR:
      joule = number * EnergyConversationFactors.WATT_HOUR_TO_JOULE;
      break;
    case EnergyUnits.KILOWATT_HOUR:
      joule = number * EnergyConversationFactors.KILOWATT_HOUR_TO_JOULE;
      break;
    case EnergyUnits.ELECTRONVOLT:
      joule = number * EnergyConversationFactors.ELECTRONVOLT_TO_JOULE;
      break;
    case EnergyUnits.HORSEPOWER_HOUR:
      joule = number * EnergyConversationFactors.HORSEPOWER_HOUR_TO_JOULE;
      break;
    case EnergyUnits.FOOT_POUND:
      joule = number * EnergyConversationFactors.FOOT_POUND_TO_JOULE;
      break;
    default:
  }

  switch (to) {
    case EnergyUnits.JOULE:
      result = joule;
      break;
    case EnergyUnits.KILOJOULE:
      result = joule * EnergyConversationFactors.JOULE_TO_KILOJOULE;
      break;
    case EnergyUnits.CALORIE:
      result = joule * EnergyConversationFactors.JOULE_TO_CALORIE;
      break;
    case EnergyUnits.KILOCALORIE:
      result = joule * EnergyConversationFactors.JOULE_TO_KILOCALORIE;
      break;
    case EnergyUnits.WATT_HOUR:
      result = joule * EnergyConversationFactors.JOULE_TO_WATT_HOUR;
      break;
    case EnergyUnits.KILOWATT_HOUR:
      result = joule * EnergyConversationFactors.JOULE_TO_KILOWATT_HOUR;
      break;
    case EnergyUnits.ELECTRONVOLT:
      result = joule * EnergyConversationFactors.JOULE_TO_ELECTRONVOLT;
      break;
    case EnergyUnits.HORSEPOWER_HOUR:
      result = joule * EnergyConversationFactors.JOULE_TO_HORSEPOWER_HOUR;
      break;
    case EnergyUnits.FOOT_POUND:
      result = joule * EnergyConversationFactors.JOULE_TO_FOOT_POUND;
      break;
    default:
  }

  return result.toString();
};
