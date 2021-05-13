export const saveImage = (data: string): void => {
  const a = document.createElement("a");
  a.download = "output";
  a.href = data;
  a.click();
};
