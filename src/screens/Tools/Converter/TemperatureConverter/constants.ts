import { ISelectOption } from "../../../../interfaces";

export const enum TemperatureUnits {
  CELSIUS = "°C",
  FAHRENHEIT = "°F",
  KELVIN = "K"
}

export const TemperatureSelectOptions: ISelectOption[] = [
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
