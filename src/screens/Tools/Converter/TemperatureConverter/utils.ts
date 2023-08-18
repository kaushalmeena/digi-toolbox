import { UnitMap } from "./constants";

export const convertTemperature = (
  input: string,
  from: string,
  to: string
): string => {
  let output = 0;
  let celsius = 0;
  const number = parseFloat(input);

  switch (from) {
    case UnitMap.CELSIUS:
      celsius = number;
      break;
    case UnitMap.FAHRENHEIT:
      celsius = convertFahrenheitToCelsius(number);
      break;
    case UnitMap.KELVIN:
      celsius = convertKelvinToCelsius(number);
      break;
    default:
  }

  switch (to) {
    case UnitMap.CELSIUS:
      output = celsius;
      break;
    case UnitMap.FAHRENHEIT:
      output = convertCelsiusToFahrenheit(celsius);
      break;
    case UnitMap.KELVIN:
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
