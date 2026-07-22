export const convertBase = (
  input: string,
  from: string,
  to: string
): string => {
  const fromBase = from.substring(5);
  const toBase = to.substring(5);
  const initialBase = parseInt(fromBase, 10);
  const targetBase = parseInt(toBase, 10);
  const output = parseInt(input, initialBase).toString(targetBase);
  return output;
};
