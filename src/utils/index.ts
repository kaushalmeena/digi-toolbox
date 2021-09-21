export const fetchDarkMode = (): boolean => {
  let mode = false;
  const value = localStorage.getItem("darkMode");
  if (value) {
    mode = value === "1";
  } else {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    mode = media.matches;
  }
  return mode;
};

export const storeDarkMode = (mode: boolean): void => {
  const value = mode ? "1" : "0";
  localStorage.setItem("darkMode", value);
};

export const loadFile = (format = "*"): Promise<string> =>
  new Promise((resolve, reject) => {
    const input = document.createElement("input");

    input.type = "file";
    input.accept = format;

    input.addEventListener("change", (event: Event) => {
      const file = (event.target as HTMLInputElement).files[0];
      const reader = new FileReader();

      reader.readAsText(file);
      reader.onload = function () {
        resolve(reader.result as string);
      };
      reader.onerror = function () {
        reject(reader.error);
      };
    });

    input.click();
  });

export const loadImage = (): Promise<string> =>
  new Promise((resolve, reject) => {
    const input = document.createElement("input");

    input.type = "file";
    input.accept = "image/*";

    input.addEventListener("change", (event: Event) => {
      const file = (event.target as HTMLInputElement).files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = function () {
        resolve(reader.result as string);
      };
      reader.onerror = function () {
        reject(reader.error);
      };
    });

    input.click();
  });

export const saveFile = (
  data: string,
  extension = "txt",
  type = "text/plain"
): void => {
  const blob = new Blob([data], { type });
  const a = document.createElement("a");
  a.download = `output.${extension}`;
  a.href = window.URL.createObjectURL(blob);
  a.click();
};

export const saveImage = (data: string): void => {
  const a = document.createElement("a");
  a.download = "output";
  a.href = data;
  a.click();
};

export const copyData = (data: string): void => {
  const input = document.createElement("input");
  document.body.appendChild(input);
  input.value = data;
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
};

export const isUnsafeString = (str: string): boolean => /\W/.test(str);

export const isBoolean = (str: string): boolean => /^(true|false)$/.test(str);

export const isFloat = (str: string): boolean =>
  /^[-+]?[0-9]*\.[0-9]+$/.test(str);

export const isInteger = (str: string): boolean => /^\d+$/.test(str);

export const isTag = (str: string): boolean => /<[^>!]+>/.test(str);

export const isXMLDeclaration = (str: string): boolean =>
  /<\?[^?>]+\?>/.test(str);

export const isClosingTag = (str: string): boolean => /<\/+[^>]+>/.test(str);

export const isSelfClosingTag = (str: string): boolean => /<[^>]+\/>/.test(str);

export const isOpeningTag = (str: string): boolean =>
  isTag(str) &&
  !isClosingTag(str) &&
  !isSelfClosingTag(str) &&
  !isXMLDeclaration(str);

export const splitOnTags = (str: string): string[] =>
  str.split(/(<\/?[^>]+>)/g).filter((line) => line.trim() !== "");

export const getSafeString = (str: string): string => {
  if (isUnsafeString(str)) {
    return JSON.stringify(str);
  } else {
    return str;
  }
};

export const removeQuotes = (str: string): string => {
  const res = str.trim();
  if (res.startsWith('"') && res.endsWith('"')) {
    return res.substring(1, res.length - 1);
  }
  return res;
};

export const parseString = (str: string): string | boolean | number => {
  if (isBoolean(str)) {
    return str === "true";
  } else if (isFloat(str)) {
    return Number.parseFloat(str);
  } else if (isInteger(str)) {
    return Number.parseInt(str);
  } else {
    return str;
  }
};

export const getType = (item: unknown): string => {
  if (item instanceof Array) {
    return "array";
  } else if (item instanceof Object) {
    return "object";
  } else if (typeof item === "string") {
    return "string";
  } else if (typeof item === "boolean") {
    return "boolean";
  } else if (typeof item === "number") {
    return "number";
  } else {
    return "null";
  }
};
