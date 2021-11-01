export const getColor = (
  event: MouseEvent,
  canvas: HTMLCanvasElement
): string => {
  const context = canvas.getContext("2d");

  const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;

  const x = (event.offsetX / canvas.offsetWidth) * canvas.width;
  const y = (event.offsetY / canvas.offsetHeight) * canvas.height;

  const i = (x + y * canvas.width) * 4;
  const R = pixels[i];
  const G = pixels[i + 1];
  const B = pixels[i + 2];

  return `rgb(${R}, ${G}, ${B})`;
};
