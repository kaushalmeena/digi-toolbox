export const convertMass = (
  input: string,
  from: string,
  to: string
): string => {
  let result = 0;
  let gram = 0;
  const number = parseFloat(input);

  switch (from) {
    case "kg":
      gram = number * 1000;
      break;
    case "g":
      gram = number;
      break;
    case "mg":
      gram = number * 0.001;
      break;
    case "µg":
      gram = number * 0.000001;
      break;
    case "CD":
      gram = number * 0.2;
      break;
    case "q":
      gram = number * 100000;
      break;
    case "lb":
      gram = number * 453.59237;
      break;
    case "oz":
      gram = number * 28.349523125;
      break;
  }

  switch (to) {
    case "kg":
      result = gram * 0.001;
      break;
    case "g":
      result = gram;
      break;
    case "mg":
      result = gram * 1000;
      break;
    case "µg":
      result = gram * 1000000;
      break;
    case "CD":
      result = gram * 5;
      break;
    case "q":
      result = gram * 0.00001;
      break;
    case "lb":
      result = gram * 0.0022046226218488;
      break;
    case "oz":
      result = gram * 0.03527396194958;
      break;
  }

  return result.toString();
};
