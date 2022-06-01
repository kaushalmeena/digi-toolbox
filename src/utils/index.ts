export const loadFile = (
  format = "*",
  readAs: "text" | "dataURL" = "text"
): Promise<string> =>
  new Promise((resolve, reject) => {
    const input = document.createElement("input");

    input.type = "file";
    input.accept = format;

    input.addEventListener("change", (event: Event) => {
      const file = (event.target as HTMLInputElement).files[0];
      const reader = new FileReader();

      switch (readAs) {
        case "dataURL":
          reader.readAsDataURL(file);
          break;
        case "text":
        default:
          reader.readAsText(file);
      }

      reader.onload = function () {
        resolve(reader.result as string);
      };
      reader.onerror = function () {
        reject(reader.error);
      };
    });

    input.click();
  });

export const loadImage = (): Promise<string> => loadFile("image/*", "dataURL");

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

export const saveImage = (base64Image: string): void => {
  const a = document.createElement("a");
  a.download = "output";
  a.href = base64Image;
  a.click();
};

export const copyText = (text: string): Promise<void> =>
  navigator.clipboard.writeText(text);
