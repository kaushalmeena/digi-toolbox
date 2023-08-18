import { parseString } from "../../utils";

export const convertXMLToJSON = (input: string): string => {
  const parser = new DOMParser();
  const xmlDocument = parser.parseFromString(input, "text/xml");

  const result = convert(xmlDocument);

  return JSON.stringify(result, undefined, 2);
};

function convert(data: any) {
  let res = {};
  const { children } = data;
  if (children.length > 0) {
    for (let i = 0; i < children.length; i += 1) {
      const item = children[i];
      const key = item.nodeName;
      if (res[key]) {
        if (!Array.isArray(res[key])) {
          const temp = res[key];
          res[key] = [];
          res[key].push(temp);
        }
        res[key].push(convert(item));
      } else {
        res[key] = convert(item);
      }
    }
  } else {
    res = parseString(data.textContent);
  }
  return res;
}
