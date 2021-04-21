export const convertJSONToYAML = (data: string): string => {
  const result = [];
  const tempObj = JSON.parse(data);

  convert(tempObj, result);

  return result.join("\n");
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function convert(obj: any, res: any[]) {
  const type = getType(obj);

  switch (type) {
    case "array":
      convertArray(obj, res);
      break;
    case "string":
      convertString(obj, res);
      break;
    case "object":
      convertObject(obj, res);
      break;
    case "null":
      res.push("null");
      break;
    case "number":
      res.push(obj.toString());
      break;
    case "boolean":
      res.push(obj ? "true" : "false");
      break;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function convertArray(obj: any, res: any[]) {
  if (obj.length === 0) {
    res.push("[]");
  }
  for (let i = 0; i < obj.length; i++) {
    const ele = obj[i];
    const recurse = [];
    convert(ele, recurse);
    for (let j = 0; j < recurse.length; j++) {
      res.push((j == 0 ? "- " : "  ") + recurse[j]);
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function convertObject(obj: any, res: any[]) {
  for (const k in obj) {
    const recurse = [];
    if (obj.hasOwnProperty(k)) {
      const val = obj[k];
      convert(val, recurse);
      const type = getType(val);
      if (
        type == "string" ||
        type == "null" ||
        type == "number" ||
        type == "boolean"
      ) {
        res.push(normalizeString(k) + ": " + recurse[0]);
      } else {
        res.push(normalizeString(k) + ": ");
        for (let i = 0; i < recurse.length; i++) {
          res.push("  " + recurse[i]);
        }
      }
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function convertString(str: string, res: any[]) {
  res.push(normalizeString(str));
}

function normalizeString(str: string) {
  if (str.match(/^[\w]+$/)) {
    return str;
  } else {
    return (
      '"' +
      escape(str)
        .replace(/%u/g, "\\u")
        .replace(/%U/g, "\\U")
        .replace(/%/g, "\\x") +
      '"'
    );
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getType(obj: any) {
  const type = typeof obj;
  if (obj instanceof Array) {
    return "array";
  } else if (obj instanceof Object) {
    return "object";
  } else if (type == "string") {
    return "string";
  } else if (type == "boolean") {
    return "boolean";
  } else if (type == "number") {
    return "number";
  } else {
    return "null";
  }
}
