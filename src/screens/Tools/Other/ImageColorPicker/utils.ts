export const getColor = (
  event: MouseEvent,
  canvas: HTMLCanvasElement
): string => {
  const context = canvas.getContext("2d");

  const x = (event.offsetX / canvas.offsetWidth) * canvas.width;
  const y = (event.offsetY / canvas.offsetHeight) * canvas.height;

  const pixel = context.getImageData(x, y, 1, 1).data;

  const R = pixel[0];
  const G = pixel[1];
  const B = pixel[2];

  return `rgb(${R}, ${G}, ${B})`;
};
