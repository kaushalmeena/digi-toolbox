export const getLeftAndRightOutput = (
  original: string,
  modified: string
): [string[][], string[][]] => {
  let lOutput = null;
  let rOutput = null;
  if (original && modified) {
    const output = getDiffOutput(original, modified);
    lOutput = output.filter((item) => item[0] === "*" || item[0] === "+");
    rOutput = output.filter((item) => item[0] === "*" || item[0] === "-");
  }
  return [lOutput, rOutput];
};

export const getDiffOutput = (str1: string, str2: string): string[][] => {
  const result = [];
  const LCS = computeLCSMatrix(str1, str2);

  let tempRow = null;
  let i = str1.length;
  let j = str2.length;

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && str1[i - 1] === str2[j - 1]) {
      tempRow = ["*", str1[i - 1]];
      i -= 1;
      j -= 1;
    } else if (j > 0 && (i === 0 || LCS[i][j - 1] >= LCS[i - 1][j])) {
      tempRow = ["+", str2[j - 1]];
      j -= 1;
    } else if (i > 0 && (j === 0 || LCS[i][j - 1] < LCS[i - 1][j])) {
      tempRow = ["-", str1[i - 1]];
      i -= 1;
    }

    if (result[0] && result[0][0] === tempRow[0]) {
      result[0][1] = tempRow[1] + result[0][1];
      continue;
    }

    result.unshift(tempRow);
  }

  return result;
};

function computeLCSMatrix(str1: string, str2: string) {
  const matrix = [];
  const l1 = str1.length;
  const l2 = str2.length;

  for (let x = 0; x <= l1; x += 1) {
    matrix[x] = [];
    for (let y = 0; y <= l2; y += 1) {
      matrix[x][y] = 0;
    }
  }

  for (let i = 1; i <= l1; i += 1) {
    for (let j = 1; j <= l2; j += 1) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      } else {
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }

  return matrix;
}
