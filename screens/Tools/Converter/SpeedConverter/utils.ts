export const convertSpeed = (
  input: string,
  from: string,
  to: string
): string => {
  let result = 0;
  let meterPerSecond = 0;
  const number = parseFloat(input);

  switch (from) {
    case "km/h":
      meterPerSecond = number * 0.27777777777778;
      break;
    case "m/s":
      meterPerSecond = number;
      break;
    case "mi/h":
      meterPerSecond = number * 0.44704;
      break;
    case "ft/s":
      meterPerSecond = number * 0.3048;
      break;
    case "kt":
      meterPerSecond = number * 0.51444444444444;
      break;
  }

  switch (to) {
    case "km/h":
      result = meterPerSecond * 3.6;
      break;
    case "m/s":
      result = meterPerSecond;
      break;
    case "mi/h":
      result = meterPerSecond * 2.2369362920544;
      break;
    case "ft/s":
      result = meterPerSecond * 3.2808398950131;
      break;
    case "kt":
      result = meterPerSecond * 1.9438444924406;
      break;
  }

  return result.toString();
};
