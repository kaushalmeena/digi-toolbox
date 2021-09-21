export const encodeHTML = (input: string): string => {
  const div = document.createElement("div");
  div.textContent = input;
  return div.innerHTML;
};
