export const convertHexToText = (input: string): string => {
  let result = "";
  const hexArray = input.match(/.{1,4}/g) || [];

  for (let i = 0; i < hexArray.length; i += 1) {
    result += String.fromCharCode(parseInt(hexArray[i], 16));
  }

  return result;
};
