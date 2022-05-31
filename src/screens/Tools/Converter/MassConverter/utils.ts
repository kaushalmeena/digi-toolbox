import { MassConversationFactors, MassUnits } from "./constants";

export const convertMass = (
  input: string,
  from: string,
  to: string
): string => {
  let result = 0;
  let gram = 0;
  const number = parseFloat(input);

  switch (from) {
    case MassUnits.KILOGRAM:
      gram = number * MassConversationFactors.KILOGRAM_TO_GRAM;
      break;
    case MassUnits.GRAM:
      gram = number;
      break;
    case MassUnits.MILLIGRAM:
      gram = number * MassConversationFactors.MILLIGRAM_TO_GRAM;
      break;
    case MassUnits.MICROGRAM:
      gram = number * MassConversationFactors.MICROGRAM_TO_GRAM;
      break;
    case MassUnits.CARAT:
      gram = number * MassConversationFactors.CARAT_TO_GRAM;
      break;
    case MassUnits.QUINTAL:
      gram = number * MassConversationFactors.QUINTAL_TO_GRAM;
      break;
    case MassUnits.POUND:
      gram = number * MassConversationFactors.POUND_TO_GRAM;
      break;
    case MassUnits.OUNCE:
      gram = number * MassConversationFactors.OUNCE_TO_GRAM;
      break;
    default:
  }

  switch (to) {
    case MassUnits.KILOGRAM:
      result = gram * MassConversationFactors.GRAM_TO_KILOGRAM;
      break;
    case MassUnits.GRAM:
      result = gram;
      break;
    case MassUnits.MILLIGRAM:
      result = gram * MassConversationFactors.GRAM_TO_MILLIGRAM;
      break;
    case MassUnits.MICROGRAM:
      result = gram * MassConversationFactors.GRAM_TO_MICROGRAM;
      break;
    case MassUnits.CARAT:
      result = gram * MassConversationFactors.GRAM_TO_CARAT;
      break;
    case MassUnits.QUINTAL:
      result = gram * MassConversationFactors.GRAM_TO_QUINTAL;
      break;
    case MassUnits.POUND:
      result = gram * MassConversationFactors.GRAM_TO_POUND;
      break;
    case MassUnits.OUNCE:
      result = gram * MassConversationFactors.GRAM_TO_OUNCE;
      break;
    default:
  }

  return result.toString();
};
