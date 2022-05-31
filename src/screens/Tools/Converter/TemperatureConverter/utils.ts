import { TemperatureUnits } from "./constants";

export const convertTemperature = (
  input: string,
  from: string,
  to: string
): string => {
  let result = 0;
  let celsius = 0;
  const number = parseFloat(input);

  switch (from) {
    case TemperatureUnits.CELSIUS:
      celsius = number;
      break;
    case TemperatureUnits.FAHRENHEIT:
      celsius = convertFahrenheitToCelsius(number);
      break;
    case TemperatureUnits.KELVIN:
      celsius = convertKelvinToCelsius(number);
      break;
    default:
  }

  switch (to) {
    case TemperatureUnits.CELSIUS:
      result = celsius;
      break;
    case TemperatureUnits.FAHRENHEIT:
      result = convertCelsiusToFahrenheit(celsius);
      break;
    case TemperatureUnits.KELVIN:
      result = convertCelsiusToKelvin(celsius);
      break;
    default:
  }

  return result.toString();
};

function convertFahrenheitToCelsius(input: number) {
  return (input - 32) * (5 / 9);
}

function convertKelvinToCelsius(input: number) {
  return input - 273.15;
}

function convertCelsiusToFahrenheit(input: number) {
  return input * (9 / 5) + 32;
}

function convertCelsiusToKelvin(input: number) {
  return input + 273.15;
}
