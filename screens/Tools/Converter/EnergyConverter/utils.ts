export const convertEnergy = (input: string, from = "", to = ""): string => {
  let result = 0;
  let joule = 0;
  const number = parseFloat(input);

  switch (from) {
    case "J":
      joule = number;
      break;
    case "kJ":
      joule = number * 1000;
      break;
    case "cal":
      joule = number * 4.184;
      break;
    case "kcal":
      joule = number * 4184;
      break;
    case "W h":
      joule = number * 3600;
      break;
    case "kW h":
      joule = number * 3600000;
      break;
    case "eV":
      joule = number * 1.6021000001255e-19;
      break;
    case "hp h":
      joule = number * 2684519.5368856;
      break;
    case "ft lb":
      joule = number * 1.3558179482896;
      break;
  }

  switch (to) {
    case "J":
      result = joule;
      break;
    case "kJ":
      result = joule * 0.001;
      break;
    case "cal":
      result = joule * 0.23900573613767;
      break;
    case "kcal":
      result = joule * 0.00023900573613767;
      break;
    case "W h":
      result = joule * 0.00027777777777778;
      break;
    case "kW h":
      result = joule * 2.7777777777778e-7;
      break;
    case "eV":
      result = joule * 6.241807627e18;
      break;
    case "hp h":
      result = joule * 3.725061361111e-7;
      break;
    case "ft lb":
      result = joule * 0.7375621493;
      break;
  }

  return result.toString();
};
