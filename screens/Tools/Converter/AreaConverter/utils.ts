export const convertArea = (
  input: string,
  from: string,
  to: string
): string => {
  let result = 0;
  let meterSquared = 0;
  const number = parseFloat(input);

  switch (from) {
    case "m²":
      meterSquared = number;
      break;
    case "km²":
      meterSquared = number * 1000000;
      break;
    case "mi²":
      meterSquared = number * 2589988.110339;
      break;
    case "yd²":
      meterSquared = number * 0.83612736000097;
      break;
    case "ft²":
      meterSquared = number * 0.092903040000107;
      break;
    case "in²":
      meterSquared = number * 0.00064516000000075;
      break;
    case "ha":
      meterSquared = number * 10000;
      break;
    case "ac":
      meterSquared = number * 4046.8564224047;
      break;
  }

  switch (to) {
    case "m²":
      result = meterSquared;
      break;
    case "km²":
      result = meterSquared * 0.000001;
      break;
    case "mi²":
      result = meterSquared * 3.86102158542e-7;
      break;
    case "yd²":
      result = meterSquared * 1.1959900462997;
      break;
    case "ft²":
      result = meterSquared * 10.763910416697;
      break;
    case "in²":
      result = meterSquared * 1550.0031000044;
      break;
    case "ha":
      result = meterSquared * 0.0001;
      break;
    case "ac":
      result = meterSquared * 0.00024710538146688;
      break;
  }

  return result.toString();
};
