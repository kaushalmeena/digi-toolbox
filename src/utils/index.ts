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

export const copyText = (text: string): Promise<void> =>
  navigator.clipboard.writeText(text);
