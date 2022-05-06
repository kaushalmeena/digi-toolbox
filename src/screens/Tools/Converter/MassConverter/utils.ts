import { MASS_CONVERSION_FACTORS, MASS_UNITS } from "./constants";

export const convertMass = (
  input: string,
  from: string,
  to: string
): string => {
  let result = 0;
  let gram = 0;
  const number = parseFloat(input);

  switch (from) {
    case MASS_UNITS.KILOGRAM:
      gram = number * MASS_CONVERSION_FACTORS.KILOGRAM_TO_GRAM;
      break;
    case MASS_UNITS.GRAM:
      gram = number;
      break;
    case MASS_UNITS.MILLIGRAM:
      gram = number * MASS_CONVERSION_FACTORS.MILLIGRAM_TO_GRAM;
      break;
    case MASS_UNITS.MICROGRAM:
      gram = number * MASS_CONVERSION_FACTORS.MICROGRAM_TO_GRAM;
      break;
    case MASS_UNITS.CARAT:
      gram = number * MASS_CONVERSION_FACTORS.CARAT_TO_GRAM;
      break;
    case MASS_UNITS.QUINTAL:
      gram = number * MASS_CONVERSION_FACTORS.QUINTAL_TO_GRAM;
      break;
    case MASS_UNITS.POUND:
      gram = number * MASS_CONVERSION_FACTORS.POUND_TO_GRAM;
      break;
    case MASS_UNITS.OUNCE:
      gram = number * MASS_CONVERSION_FACTORS.OUNCE_TO_GRAM;
      break;
  }

  switch (to) {
    case MASS_UNITS.KILOGRAM:
      result = gram * MASS_CONVERSION_FACTORS.GRAM_TO_KILOGRAM;
      break;
    case MASS_UNITS.GRAM:
      result = gram;
      break;
    case MASS_UNITS.MILLIGRAM:
      result = gram * MASS_CONVERSION_FACTORS.GRAM_TO_MILLIGRAM;
      break;
    case MASS_UNITS.MICROGRAM:
      result = gram * MASS_CONVERSION_FACTORS.GRAM_TO_MICROGRAM;
      break;
    case MASS_UNITS.CARAT:
      result = gram * MASS_CONVERSION_FACTORS.GRAM_TO_CARAT;
      break;
    case MASS_UNITS.QUINTAL:
      result = gram * MASS_CONVERSION_FACTORS.GRAM_TO_QUINTAL;
      break;
    case MASS_UNITS.POUND:
      result = gram * MASS_CONVERSION_FACTORS.GRAM_TO_POUND;
      break;
    case MASS_UNITS.OUNCE:
      result = gram * MASS_CONVERSION_FACTORS.GRAM_TO_OUNCE;
      break;
  }

  return result.toString();
};
