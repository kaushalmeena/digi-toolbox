export const convertTemperature = (
  input: string,
  from: string,
  to: string
): string => {
  let result = 0;
  let celsius = 0;
  const number = parseFloat(input);

  switch (from) {
    case "°C":
      celsius = number;
      break;
    case "°F":
      celsius = (number - 32) * (5 / 9);
      break;
    case "K":
      celsius = number - 273.15;
      break;
  }

  switch (to) {
    case "°C":
      result = celsius;
      break;
    case "°F":
      result = celsius * (9 / 5) + 32;
      break;
    case "K":
      result = celsius + 273.15;
      break;
  }

  return result.toString();
};
