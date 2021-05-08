export const convertPressure = (input: string, from = "", to = ""): string => {
  let result = 0;
  let pascal = 0;
  const number = parseFloat(input);

  switch (from) {
    case "bar":
      pascal = number * 100000;
      break;
    case "Pa":
      pascal = number;
      break;
    case "lbf/ft²":
      pascal = number * 47.880258980405;
      break;
    case "lbf/in²":
      pascal = number * 6894.7572931783;
      break;
    case "atm":
      pascal = number * 101325;
      break;
    case "Torr":
      pascal = number * 133.32236842108;
      break;
  }

  switch (to) {
    case "bar":
      result = pascal * 0.00001;
      break;
    case "Pa":
      result = pascal;
      break;
    case "lbf/ft²":
      result = pascal * 0.02088543423312;
      break;
    case "lbf/in²":
      result = pascal * 0.00014503773773;
      break;
    case "atm":
      result = pascal * 9.8692326671601e-6;
      break;
    case "Torr":
      result = pascal * 0.00750061682704;
      break;
  }

  return result.toString();
};
