import { ISelectOption } from "../../../../interfaces";

export const enum TEMPERATURE_UNITS {
  CELSIUS = "°C",
  FAHRENHEIT = "°F",
  KELVIN = "K"
}

export const TemperatureSelectOptions: ISelectOption[] = [
  {
    label: "Celsius",
    value: TEMPERATURE_UNITS.CELSIUS
  },
  {
    label: "Fahrenheit",
    value: TEMPERATURE_UNITS.FAHRENHEIT
  },
  {
    label: "Kelvin",
    value: TEMPERATURE_UNITS.KELVIN
  }
];
