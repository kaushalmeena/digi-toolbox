import { ISecondaryInputs } from "../../../../types";

export const changeCase = (data: string, option?: ISecondaryInputs): string => {
  let result = "";

  switch (option.case) {
    case "upper-case":
      result = data.toUpperCase();
      break;
    case "lower-case":
      result = data.toLowerCase();
      break;
    case "title-case":
      result = data.replace(
        /\w\S*/g,
        (c) => c.charAt(0).toUpperCase() + c.substr(1).toLowerCase()
      );
      break;
    case "snake-case":
      result = data.toLowerCase().replace(/\s+/g, "_");
      break;
    case "camel-case":
      result = data
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (c, i) =>
          i === 0 ? c.toLowerCase() : c.toUpperCase()
        )
        .replace(/\s+/g, "");
      break;
    case "pascal-case":
      result = data.replace(
        /(\w)(\w*)/g,
        (_, c1, c2) => c1.toUpperCase() + c2.toLowerCase()
      );
      break;
    default:
      result = data;
  }

  return result;
};
