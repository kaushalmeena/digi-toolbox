export const convertTextToHex = (input: string): string => {
  let ouput = "";
  for (let i = 0; i < input.length; i += 1) {
    const hex = input.charCodeAt(i).toString(16);
    ouput += `000${hex}`.slice(-4);
  }
  return ouput;
};
