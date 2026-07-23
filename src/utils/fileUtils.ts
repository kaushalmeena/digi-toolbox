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
          reject(new Error("Error occurred in file upload!"));
          return;
        }
        const reader = new FileReader();
        if (readAs === "dataURL") {
          reader.readAsDataURL(file);
        } else {
          reader.readAsText(file);
        }
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(reader.error);
      },
      { once: true }
    );

    inputEl.click();
  });

export const readFileAsText = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
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
  // Defer revocation so the browser has time to start the download; revoking
  // synchronously right after click() can cancel it in some browsers.
  setTimeout(() => window.URL.revokeObjectURL(href), 1000);
};

export const saveImage = (base64Image: string): void => {
  const anchorEl = document.createElement("a");
  anchorEl.download = "output";
  anchorEl.href = base64Image;
  anchorEl.click();
};
