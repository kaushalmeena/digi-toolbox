export const saveImage = (base64Image: string): void => {
  const anchorEl = document.createElement("a");
  anchorEl.download = "output";
  anchorEl.href = base64Image;
  anchorEl.click();
};
