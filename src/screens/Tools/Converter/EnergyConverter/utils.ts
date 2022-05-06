import { ENERGY_CONVERSION_FACTORS, ENERGY_UNITS } from "./constants";

export const convertEnergy = (
  input: string,
  from: string,
  to: string
): string => {
  let result = 0;
  let joule = 0;
  const number = parseFloat(input);

  switch (from) {
    case ENERGY_UNITS.JOULE:
      joule = number;
      break;
    case ENERGY_UNITS.KILOJOULE:
      joule = number * ENERGY_CONVERSION_FACTORS.KILOJOULE_TO_JOULE;
      break;
    case ENERGY_UNITS.CALORIE:
      joule = number * ENERGY_CONVERSION_FACTORS.CALORIE_TO_JOULE;
      break;
    case ENERGY_UNITS.KILOCALORIE:
      joule = number * ENERGY_CONVERSION_FACTORS.KILOCALORIE_TO_JOULE;
      break;
    case ENERGY_UNITS.WATT_HOUR:
      joule = number * ENERGY_CONVERSION_FACTORS.WATT_HOUR_TO_JOULE;
      break;
    case ENERGY_UNITS.KILOWATT_HOUR:
      joule = number * ENERGY_CONVERSION_FACTORS.KILOWATT_HOUR_TO_JOULE;
      break;
    case ENERGY_UNITS.ELECTRONVOLT:
      joule = number * ENERGY_CONVERSION_FACTORS.ELECTRONVOLT_TO_JOULE;
      break;
    case ENERGY_UNITS.HORSEPOWER_HOUR:
      joule = number * ENERGY_CONVERSION_FACTORS.HORSEPOWER_HOUR_TO_JOULE;
      break;
    case ENERGY_UNITS.FOOT_POUND:
      joule = number * ENERGY_CONVERSION_FACTORS.FOOT_POUND_TO_JOULE;
      break;
  }

  switch (to) {
    case ENERGY_UNITS.JOULE:
      result = joule;
      break;
    case ENERGY_UNITS.KILOJOULE:
      result = joule * ENERGY_CONVERSION_FACTORS.JOULE_TO_KILOJOULE;
      break;
    case ENERGY_UNITS.CALORIE:
      result = joule * ENERGY_CONVERSION_FACTORS.JOULE_TO_CALORIE;
      break;
    case ENERGY_UNITS.KILOCALORIE:
      result = joule * ENERGY_CONVERSION_FACTORS.JOULE_TO_KILOCALORIE;
      break;
    case ENERGY_UNITS.WATT_HOUR:
      result = joule * ENERGY_CONVERSION_FACTORS.JOULE_TO_WATT_HOUR;
      break;
    case ENERGY_UNITS.KILOWATT_HOUR:
      result = joule * ENERGY_CONVERSION_FACTORS.JOULE_TO_KILOWATT_HOUR;
      break;
    case ENERGY_UNITS.ELECTRONVOLT:
      result = joule * ENERGY_CONVERSION_FACTORS.JOULE_TO_ELECTRONVOLT;
      break;
    case ENERGY_UNITS.HORSEPOWER_HOUR:
      result = joule * ENERGY_CONVERSION_FACTORS.JOULE_TO_HORSEPOWER_HOUR;
      break;
    case ENERGY_UNITS.FOOT_POUND:
      result = joule * ENERGY_CONVERSION_FACTORS.JOULE_TO_FOOT_POUND;
      break;
  }

  return result.toString();
};
