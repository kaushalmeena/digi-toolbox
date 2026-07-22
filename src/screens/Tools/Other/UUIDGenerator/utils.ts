export const generateUUIDs = (count: number): string => {
  const total = Math.max(1, Math.min(count, 500));
  return Array.from({ length: total }, () => crypto.randomUUID()).join("\n");
};
