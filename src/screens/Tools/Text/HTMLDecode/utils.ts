export const decodeHTML = (input: string): string => {
  const div = document.createElement("div");
  div.innerHTML = input;
  return div.textContent;
};
