export const convertAngle = (input: string, from = "", to = ""): string => {
  let result = 0;
  let tempDeg = 0;
  const inputNumber = parseFloat(input);

  switch (from) {
    case "deg":
      tempDeg = inputNumber;
      break;
    case "rad":
      tempDeg = inputNumber * (180 / Math.PI);
      break;
    case "grad":
      tempDeg = inputNumber * (180 / 200);
      break;
    case "arc-minute":
      tempDeg = inputNumber * (1 / 60);
      break;
    case "arc-second":
      tempDeg = inputNumber * (1 / 3600);
      break;
  }

  switch (to) {
    case "deg":
      result = tempDeg;
      break;
    case "rad":
      result = inputNumber * (Math.PI / 180);
      break;
    case "grad":
      result = inputNumber * (200 / 180);
      break;
    case "arc-minute":
      result = inputNumber * 60;
      break;
    case "arc-second":
      result = inputNumber * 3600;
      break;
  }

  return result.toString();
};
