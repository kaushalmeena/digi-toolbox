export const convertHexToText = (input: string): string => {
  let output = "";
  const hexArray = input.match(/.{1,4}/g) || [];
  for (let i = 0; i < hexArray.length; i += 1) {
    output += String.fromCharCode(parseInt(hexArray[i], 16));
  }
  return output;
};
