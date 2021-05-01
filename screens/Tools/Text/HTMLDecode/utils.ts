export const decodeHTML = (data: string): string => {
  const div = document.createElement("div");
  div.innerHTML = data;
  return div.textContent;
};
