export const convertAngle = (input: string, from = "", to = ""): string => {
  let result = 0;
  let degree = 0;
  const number = parseFloat(input);

  switch (from) {
    case "deg":
      degree = number;
      break;
    case "rad":
      degree = number * 57.295779513082;
      break;
    case "grad":
      degree = number * 0.9;
      break;
    case "arc-minute":
      degree = number * 0.016666666666667;
      break;
    case "arc-second":
      degree = number * 0.00027777777777778;
      break;
  }

  switch (to) {
    case "deg":
      result = degree;
      break;
    case "rad":
      result = degree * 0.017453292519943;
      break;
    case "grad":
      result = degree * 1.1111111111111;
      break;
    case "arc-minute":
      result = degree * 60;
      break;
    case "arc-second":
      result = degree * 3600;
      break;
  }

  return result.toString();
};
