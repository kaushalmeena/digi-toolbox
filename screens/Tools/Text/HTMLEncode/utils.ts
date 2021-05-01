export const encodeHTML = (data: string): string => {
  const div = document.createElement("div");
  div.textContent = data;
  return div.innerHTML;
};
