export const unstringifyJSON = (data: string): string => {
  const result = JSON.parse(data);
  return result.toString();
};
