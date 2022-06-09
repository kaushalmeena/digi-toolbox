export const saveImage = (base64Image: string): void => {
  const a = document.createElement("a");
  a.download = "output";
  a.href = base64Image;
  a.click();
};
