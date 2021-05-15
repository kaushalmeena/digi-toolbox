export const getDiffOutput = (
  text1: string,
  text2: string,
  type: string
): string[][] => {
  const result = [];
  let unequalMode = false;
  let text = "";

  for (let i = 0; i < text1.length; i++) {
    text += text1[i];

    if (text1[i] != text2[i]) {
      unequalMode = true;
      result.push(["N", text]);
      text = "";
    }

    if (unequalMode && text1[i] == text2[i]) {
      unequalMode = false;
      result.push([type, text]);
      text = "";
    }
  }

  return result;
};
