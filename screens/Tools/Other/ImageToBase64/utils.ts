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
