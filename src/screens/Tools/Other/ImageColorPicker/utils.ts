export const getColorFromCanvas = (
  event: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
  canvas: HTMLCanvasElement | null
): string => {
  if (!canvas) {
    throw new Error("Canvas was not found");
  }

  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) {
    throw new Error("Cannot get context from canvas");
  }

  const x = (event.nativeEvent.offsetX / canvas.offsetWidth) * canvas.width;
  const y = (event.nativeEvent.offsetY / canvas.offsetHeight) * canvas.height;

  const imageData = context.getImageData(x, y, 1, 1);
  const R = imageData.data[0];
  const G = imageData.data[1];
  const B = imageData.data[2];

  return `rgb(${R}, ${G}, ${B})`;
};

export const drawImageInCanvas = (
  base64Image: string,
  canvas: HTMLCanvasElement | null
) => {
  if (!canvas) {
    throw new Error("Canvas was not found");
  }

  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) {
    throw new Error("Cannot get context from canvas");
  }

  const imageEl = new Image();
  imageEl.src = base64Image;
  imageEl.onload = () => {
    canvas.hidden = false;
    canvas.width = imageEl.width;
    canvas.height = imageEl.height;
    context.drawImage(imageEl, 0, 0, canvas.width, canvas.height);
  };
};
