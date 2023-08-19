export const loadFile = (
  format = "*",
  readAs: "text" | "dataURL" = "text"
): Promise<string> =>
  new Promise((resolve, reject) => {
    const inputEl = document.createElement("input");

    inputEl.type = "file";
    inputEl.accept = format;

    inputEl.addEventListener(
      "change",
      (event: Event) => {
        const file = (event.target as HTMLInputElement).files?.[0];

        if (!file) {
          reject(new Error("Error occured in file upload!"));
          return;
        }

        const reader = new FileReader();

        switch (readAs) {
          case "dataURL":
            reader.readAsDataURL(file);
            break;
          case "text":
          default:
            reader.readAsText(file);
        }

        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(reader.error);
      },
      { once: true }
    );

    inputEl.click();
  });

export const saveFile = (
  data: string,
  extension = "txt",
  type = "text/plain"
): void => {
  const blob = new Blob([data], { type });
  const href = window.URL.createObjectURL(blob);
  const anchorEl = document.createElement("a");
  anchorEl.download = `output.${extension}`;
  anchorEl.href = href;
  anchorEl.click();
  window.URL.revokeObjectURL(href);
};

export const saveImage = (base64Image: string): void => {
  const anchorEl = document.createElement("a");
  anchorEl.download = "output";
  anchorEl.href = base64Image;
  anchorEl.click();
};

export const copyText = (text: string): Promise<void> =>
  navigator.clipboard.writeText(text);

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

export const createConvertFunction =
  (conversionMap: Record<string, number>, defaultUnit: string) =>
  (input: string, from: string, to: string) => {
    const number = parseFloat(input);
    const value = number * conversionMap[`${from}->${defaultUnit}`];
    const output = value * conversionMap[`${defaultUnit}->${to}`];
    return output.toString();
  };
