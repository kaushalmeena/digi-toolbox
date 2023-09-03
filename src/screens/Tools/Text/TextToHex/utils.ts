export const convertTextToHex = (input: string): string => {
  let output = "";
  for (let i = 0; i < input.length; i += 1) {
    const hex = input.charCodeAt(i).toString(16);
    output += `000${hex}`.slice(-4);
  }
  return output;
};
