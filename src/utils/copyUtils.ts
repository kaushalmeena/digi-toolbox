export const copyText = (text: string): Promise<void> =>
  navigator.clipboard.writeText(text);
