export const getDiffOutput = (str1: string, str2: string): string[][] => {
  const result = [];
  const LCSMatrix = buildLCSMatrix(str1, str2);
  let firstRow = null;
  let tempRow = null;
  let i = str1.length;
  let j = str2.length;

  while (true) {
    if (i > 0 && j > 0 && str1[i - 1] === str2[j - 1]) {
      tempRow = ["N", str1[i - 1]];
      i--;
      j--;
    } else if (
      j > 0 &&
      (i === 0 || LCSMatrix[i][j - 1] >= LCSMatrix[i - 1][j])
    ) {
      tempRow = ["G", str2[j - 1]];
      j--;
    } else if (
      i > 0 &&
      (j === 0 || LCSMatrix[i][j - 1] < LCSMatrix[i - 1][j])
    ) {
      tempRow = ["R", str1[i - 1]];
      i--;
    } else {
      break;
    }

    firstRow = result[0];

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
  const LCSMatrix = [];

  for (let x = 0; x <= str1.length; x++) {
    LCSMatrix[x] = [];
    for (let y = 0; y <= str2.length; y++) {
      LCSMatrix[x][y] = 0;
    }
  }

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        LCSMatrix[i][j] = LCSMatrix[i - 1][j - 1] + 1;
      } else {
        LCSMatrix[i][j] = Math.max(LCSMatrix[i - 1][j], LCSMatrix[i][j - 1]);
      }
    }
  }

  return LCSMatrix;
}
