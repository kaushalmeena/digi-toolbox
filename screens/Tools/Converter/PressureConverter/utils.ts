export const convertArea = (input: string, from = "", to = ""): string => {
  let result = 0;
  let tempMeterSquared = 0;
  const inputNumber = parseFloat(input);

  switch (from) {
    case "m²":
      tempMeterSquared = inputNumber;
      break;
    case "km²":
      tempMeterSquared = inputNumber * 1e6;
      break;
    case "mi²":
      tempMeterSquared = inputNumber * 2.59e6;
      break;
    case "yd²":
      tempMeterSquared = inputNumber * (1 / 1.19);
      break;
    case "ft²":
      tempMeterSquared = inputNumber * (1 / 10.764);
      break;
    case "in²":
      tempMeterSquared = inputNumber * (1 / 1550);
      break;
    case "ha":
      tempMeterSquared = inputNumber * 10000;
      break;
    case "ac":
      tempMeterSquared = inputNumber * 4047;
      break;
  }

  switch (to) {
    case "m²":
      result = tempMeterSquared;
      break;
    case "km²":
      result = tempMeterSquared * (1 / 1e6);
      break;
    case "mi²":
      result = tempMeterSquared * (1 / 2.59e6);
      break;
    case "yd²":
      result = tempMeterSquared * 1.19;
      break;
    case "ft²":
      result = tempMeterSquared * 10.764;
      break;
    case "in²":
      result = tempMeterSquared * 1550;
      break;
    case "ha":
      result = tempMeterSquared * (1 / 10000);
      break;
    case "ac":
      result = tempMeterSquared * (1 / 4047);
      break;
  }

  return result.toString();
};
