export const convertLength = (input: string, from = "", to = ""): string => {
  let result = 0;
  let meter = 0;
  const number = parseFloat(input);

  switch (from) {
    case "km":
      meter = number * 1000;
      break;
    case "m":
      meter = number;
      break;
    case "cm":
      meter = number * 0.01;
      break;
    case "mm":
      meter = number * 0.001;
      break;
    case "mi":
      meter = number * 1609.344;
      break;
    case "yd":
      meter = number * 0.9144;
      break;
    case "ft":
      meter = number * 0.3048;
      break;
    case "in":
      meter = number * 0.0254;
      break;
  }

  switch (to) {
    case "km":
      result = meter * 0.001;
      break;
    case "m":
      result = meter;
      break;
    case "cm":
      result = meter * 100;
      break;
    case "mm":
      result = meter * 1000;
      break;
    case "mi":
      result = meter * 0.00062137119223733;
      break;
    case "yd":
      result = meter * 1.0936132983377;
      break;
    case "ft":
      result = meter * 3.2808398950131;
      break;
    case "in":
      result = meter * 39.370078740157;
      break;
  }

  return result.toString();
};
