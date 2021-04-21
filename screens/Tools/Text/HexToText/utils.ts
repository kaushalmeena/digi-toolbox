export const convertHexToText = (data: string): string => {
  let result = "";

  for (let i = 0; i < data.length; i++) {
    const hex = data.charCodeAt(i).toString(16);
    result += ("000" + hex).slice(-4);
  }

  return result;
};
