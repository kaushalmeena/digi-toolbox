export const decodeHTML = (input: string): string => {
  const divEl = document.createElement("div");
  divEl.innerHTML = input;
  return divEl.textContent;
};
