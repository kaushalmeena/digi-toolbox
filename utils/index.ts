import { Position, Toaster } from "@blueprintjs/core";

export const Toast =
  typeof window === "undefined"
    ? null
    : Toaster.create({ position: Position.BOTTOM_RIGHT });

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
