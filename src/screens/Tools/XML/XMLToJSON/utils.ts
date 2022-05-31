import { parseString } from "../../../../utils";

export const convertXMLToJSON = (input: string): string => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(input, "text/xml");

  const result = convert(xmlDoc.childNodes[0]);

  return JSON.stringify(result, undefined, 2);
};

function convert(doc: any) {
  let obj = {};
  if (doc.children.length > 0) {
    for (let i = 0; i < doc.children.length; i += 1) {
      const item = doc.children.item(i);
      const key = item.nodeName;
      if (obj[key]) {
        if (!Array.isArray(obj[key])) {
          const tempObj = obj[key];
          obj[key] = [];
          obj[key].push(tempObj);
        }
        obj[key].push(convert(item));
      } else {
        obj[key] = convert(item);
      }
    }
  } else {
    obj = parseString(doc.textContent);
  }
  return obj;
}
