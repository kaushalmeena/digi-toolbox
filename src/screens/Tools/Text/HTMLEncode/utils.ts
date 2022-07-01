export const encodeHTML = (input: string): string => {
  const divEl = document.createElement("div");
  divEl.textContent = input;
  return divEl.innerHTML;
};
