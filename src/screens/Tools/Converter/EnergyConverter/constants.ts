import { ISelectOption } from "../../../../interfaces";

export const enum EnergyUnits {
  JOULE = "J",
  KILOJOULE = "kJ",
  CALORIE = "cal",
  KILOCALORIE = "kcal",
  WATT_HOUR = "W⋅h",
  KILOWATT_HOUR = "kW⋅h",
  ELECTRONVOLT = "eV",
  HORSEPOWER_HOUR = "hp⋅h",
  FOOT_POUND = "ft⋅lb"
}

export const enum EnergyConversationFactors {
  KILOJOULE_TO_JOULE = 1000,
  CALORIE_TO_JOULE = 4.184,
  KILOCALORIE_TO_JOULE = 4184,
  WATT_HOUR_TO_JOULE = 3600,
  KILOWATT_HOUR_TO_JOULE = 3600000,
  ELECTRONVOLT_TO_JOULE = 1.6021000001255e-19,
  HORSEPOWER_HOUR_TO_JOULE = 2684519.5368856,
  FOOT_POUND_TO_JOULE = 1.3558179482896,
  JOULE_TO_KILOJOULE = 0.001,
  JOULE_TO_CALORIE = 0.23900573613767,
  JOULE_TO_KILOCALORIE = 0.00023900573613767,
  JOULE_TO_WATT_HOUR = 0.00027777777777778,
  JOULE_TO_KILOWATT_HOUR = 2.7777777777778e-7,
  JOULE_TO_ELECTRONVOLT = 6.241807627e18,
  JOULE_TO_HORSEPOWER_HOUR = 3.725061361111e-7,
  JOULE_TO_FOOT_POUND = 0.7375621493
}

export const EnergySelectOptions: ISelectOption[] = [
  {
    label: "Joule",
    value: EnergyUnits.JOULE
  },
  {
    label: "Kilojoule",
    value: EnergyUnits.KILOJOULE
  },
  {
    label: "Calorie",
    value: EnergyUnits.CALORIE
  },
  {
    label: "Kilocalorie",
    value: EnergyUnits.KILOCALORIE
  },
  {
    label: "Watt hour",
    value: EnergyUnits.WATT_HOUR
  },
  {
    label: "Kilowatt hour",
    value: EnergyUnits.KILOWATT_HOUR
  },
  {
    label: "Electronvolt",
    value: EnergyUnits.ELECTRONVOLT
  },
  {
    label: "Horsepower hour",
    value: EnergyUnits.HORSEPOWER_HOUR
  },
  {
    label: "Foot-pound",
    value: EnergyUnits.FOOT_POUND
  }
];
