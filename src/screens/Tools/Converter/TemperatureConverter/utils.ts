import { TEMPERATURE_UNITS } from "./constants";

export const convertTemperature = (
  input: string,
  from: string,
  to: string
): string => {
  let result = 0;
  let celsius = 0;
  const number = parseFloat(input);

  switch (from) {
    case TEMPERATURE_UNITS.CELSIUS:
      celsius = number;
      break;
    case TEMPERATURE_UNITS.FAHRENHEIT:
      celsius = convertFahrenheitToCelsius(number);
      break;
    case TEMPERATURE_UNITS.KELVIN:
      celsius = convertKelvinToCelsius(number);
      break;
  }

  switch (to) {
    case TEMPERATURE_UNITS.CELSIUS:
      result = celsius;
      break;
    case TEMPERATURE_UNITS.FAHRENHEIT:
      result = convertCelsiusToFahrenheit(celsius);
      break;
    case TEMPERATURE_UNITS.KELVIN:
      result = convertCelsiusToKelvin(celsius);
      break;
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
