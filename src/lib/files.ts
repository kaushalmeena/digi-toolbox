type ReadAs = "text" | "dataURL";

export function readFile(file: Blob, readAs: ReadAs = "text"): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    if (readAs === "dataURL") {
      reader.readAsDataURL(file);
    } else {
      reader.readAsText(file);
    }
  });
}

/** Opens the native file picker and resolves with the chosen file's contents. */
export function pickFile(
  accept = "*",
  readAs: ReadAs = "text"
): Promise<string> {
  return new Promise((resolve, reject) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = accept;
    input.addEventListener(
      "change",
      () => {
        const file = input.files?.[0];
        if (!file) {
          reject(new Error("No file selected"));
          return;
        }
        readFile(file, readAs).then(resolve, reject);
      },
      { once: true }
    );
    input.click();
  });
}

function downloadHref(href: string, filename: string) {
  const anchor = document.createElement("a");
  anchor.download = filename;
  anchor.href = href;
  anchor.click();
}

export function downloadText(
  data: string,
  filename: string,
  mimeType = "text/plain"
) {
  const href = URL.createObjectURL(new Blob([data], { type: mimeType }));
  downloadHref(href, filename);
  // Revoking synchronously after click() can cancel the download in some
  // browsers, so give it a moment to start.
  setTimeout(() => URL.revokeObjectURL(href), 1000);
}

export function downloadDataUrl(dataUrl: string, filename: string) {
  downloadHref(dataUrl, filename);
}
