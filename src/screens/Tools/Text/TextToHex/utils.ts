export const convertTextToHex = (input: string): string => {
  let result = "";

  for (let i = 0; i < input.length; i += 1) {
    const hex = input.charCodeAt(i).toString(16);
    result += `000${hex}`.slice(-4);
  }

  return result;
};
