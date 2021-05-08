export const convertTime = (
  input: string,
  from: string,
  to: string
): string => {
  let result = 0;
  let second = 0;
  const number = parseFloat(input);

  switch (from) {
    case "ms":
      second = number * 0.001;
      break;
    case "s":
      second = number;
      break;
    case "min":
      second = number * 60;
      break;
    case "h":
      second = number * 3600;
      break;
    case "d":
      second = number * 86400;
      break;
    case "wk":
      second = number * 604800;
      break;
    case "mon":
      second = number * 2592000;
      break;
    case "y":
      second = number * 31536000;
      break;
    case "dec":
      second = number * 315360000;
      break;
    case "cy":
      second = number * 3153600000;
      break;
  }

  switch (to) {
    case "ms":
      result = second * 1000;
      break;
    case "s":
      result = second;
      break;
    case "min":
      result = second * 0.016666666666667;
      break;
    case "h":
      result = second * 0.00027777777777778;
      break;
    case "d":
      result = second * 1.1574074074074e-5;
      break;
    case "wk":
      result = second * 1.6534391534392e-6;
      break;
    case "mon":
      result = second * 3.858024691358e-7;
      break;
    case "y":
      result = second * 3.1709791983765e-8;
      break;
    case "dec":
      result = second * 3.1709791983765e-9;
      break;
    case "cy":
      result = second * 3.1709791983765e-10;
      break;
  }

  return result.toString();
};
