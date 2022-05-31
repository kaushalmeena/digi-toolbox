export const getLeftAndRightOutput = (
  original: string,
  modified: string
): [string[][], string[][]] => {
  let leftOutput = null;
  let rightOutput = null;
  if (original && modified) {
    const output = getDiffOutput(original, modified);
    leftOutput = output.filter((item) => item[0] === "N" || item[0] === "G");
    rightOutput = output.filter((item) => item[0] === "N" || item[0] === "R");
  }
  return [leftOutput, rightOutput];
};

export const getDiffOutput = (str1: string, str2: string): string[][] => {
  const result = [];
  const LCSMatrix = buildLCSMatrix(str1, str2);

  let firstRow = null;
  let tempRow = null;
  let i = str1.length;
  let j = str2.length;

  while (1) {
    if (i > 0 && j > 0 && str1[i - 1] === str2[j - 1]) {
      tempRow = ["N", str1[i - 1]];
      i -= 1;
      j -= 1;
    } else if (
      j > 0 &&
      (i === 0 || LCSMatrix[i][j - 1] >= LCSMatrix[i - 1][j])
    ) {
      tempRow = ["G", str2[j - 1]];
      j -= 1;
    } else if (
      i > 0 &&
      (j === 0 || LCSMatrix[i][j - 1] < LCSMatrix[i - 1][j])
    ) {
      tempRow = ["R", str1[i - 1]];
      i -= 1;
    } else {
      break;
    }

    [firstRow] = result;

    if (firstRow && firstRow[0] === tempRow[0]) {
      firstRow[1] = tempRow[1] + firstRow[1];
      result[0] = firstRow;
      continue;
    }

    result.unshift(tempRow);
  }

  return result;
};

function buildLCSMatrix(str1: string, str2: string) {
  const matrix = [];

  for (let x = 0; x <= str1.length; x += 1) {
    matrix[x] = [];
    for (let y = 0; y <= str2.length; y += 1) {
      matrix[x][y] = 0;
    }
  }

  for (let i = 1; i <= str1.length; i += 1) {
    for (let j = 1; j <= str2.length; j += 1) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      } else {
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }

  return matrix;
}
