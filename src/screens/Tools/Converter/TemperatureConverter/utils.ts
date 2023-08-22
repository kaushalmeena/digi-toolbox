import { Units } from "./constants";

export const convertTemperature = (
  input: string,
  from: string,
  to: string
): string => {
  let output = 0;
  let celsius = 0;
  const number = parseFloat(input);

  switch (from) {
    case Units.CELSIUS:
      celsius = number;
      break;
    case Units.FAHRENHEIT:
      celsius = convertFahrenheitToCelsius(number);
      break;
    case Units.KELVIN:
      celsius = convertKelvinToCelsius(number);
      break;
    default:
  }

  switch (to) {
    case Units.CELSIUS:
      output = celsius;
      break;
    case Units.FAHRENHEIT:
      output = convertCelsiusToFahrenheit(celsius);
      break;
    case Units.KELVIN:
      output = convertCelsiusToKelvin(celsius);
      break;
    default:
  }

  return output.toString();
};

function convertFahrenheitToCelsius(input: number): number {
  return (input - 32) * (5 / 9);
}

function convertKelvinToCelsius(input: number): number {
  return input - 273.15;
}

function convertCelsiusToFahrenheit(input: number): number {
  return input * (9 / 5) + 32;
}

function convertCelsiusToKelvin(input: number): number {
  return input + 273.15;
}
