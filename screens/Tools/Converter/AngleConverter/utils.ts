export const convertAngle = (input: string, from = "", to = ""): string => {
  let result = 0;
  let tempDegree = 0;
  const inputNumber = parseFloat(input);

  switch (from) {
    case "deg":
      tempDegree = inputNumber;
      break;
    case "rad":
      tempDegree = inputNumber * (180 / Math.PI);
      break;
    case "grad":
      tempDegree = inputNumber * (180 / 200);
      break;
    case "arc-minute":
      tempDegree = inputNumber * (1 / 60);
      break;
    case "arc-second":
      tempDegree = inputNumber * (1 / 3600);
      break;
  }

  switch (to) {
    case "deg":
      result = tempDegree;
      break;
    case "rad":
      result = tempDegree * (Math.PI / 180);
      break;
    case "grad":
      result = tempDegree * (200 / 180);
      break;
    case "arc-minute":
      result = tempDegree * 60;
      break;
    case "arc-second":
      result = tempDegree * 3600;
      break;
  }

  return result.toString();
};
