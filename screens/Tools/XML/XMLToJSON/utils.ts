export const convertXMLToJSON = (data: string): string => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(data, "text/xml");

  const result = convert(xmlDoc.childNodes[0]);

  return JSON.stringify(result, undefined, 2);
};

function convert(doc: any) {
  let obj = {};
  if (doc.children.length > 0) {
    for (let i = 0; i < doc.children.length; i++) {
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
    obj = convertString(doc.textContent);
  }
  return obj;
}

function convertString(str: string) {
  if (isBoolean(str)) {
    return str === "true";
  } else if (isFloat(str)) {
    return Number.parseFloat(str);
  } else if (isInteger(str)) {
    return Number.parseInt(str);
  } else {
    return str;
  }
}

function isBoolean(str: string) {
  return /^(true|false)$/.test(str);
}

function isFloat(str: string) {
  return /^[-+]?[0-9]*\.[0-9]+$/.test(str);
}

function isInteger(str: string) {
  return /^\d+$/.test(str);
}
