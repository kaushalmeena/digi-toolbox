import { SelectOption } from "../../../../types";

export const enum TemperatureUnits {
  CELSIUS = "°C",
  FAHRENHEIT = "°F",
  KELVIN = "K"
}

export const TemperatureSelectOptions: SelectOption[] = [
  {
    label: "Celsius",
    value: TemperatureUnits.CELSIUS
  },
  {
    label: "Fahrenheit",
    value: TemperatureUnits.FAHRENHEIT
  },
  {
    label: "Kelvin",
    value: TemperatureUnits.KELVIN
  }
];
