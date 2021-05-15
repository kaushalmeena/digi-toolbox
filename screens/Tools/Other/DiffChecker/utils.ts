export const getDiffOutput = (
  original: string,
  modified: string
): string[][] => {
  const result = [];
  const LCSMatrix = buildLCSMatrix(original, modified);
  let i = original.length;
  let j = modified.length;
  let chunk = null;

  while (true) {
    if (i > 0 && j > 0 && original[i - 1] === modified[j - 1]) {
      chunk = ["N", original[i - 1]];
      i--;
      j--;
    } else if (
      j > 0 &&
      (i === 0 || LCSMatrix[i][j - 1] >= LCSMatrix[i - 1][j])
    ) {
      chunk = ["G", modified[j - 1]];
      j--;
    } else if (
      i > 0 &&
      (j === 0 || LCSMatrix[i][j - 1] < LCSMatrix[i - 1][j])
    ) {
      chunk = ["R", original[i - 1]];
      i--;
    } else {
      break;
    }

    if (result[0] && result[0][0] && result[0][0] === chunk[0]) {
      result[0][1] = chunk[1] + result[0][1];
      continue;
    }

    result.unshift(chunk);
  }

  return result;
};

function buildLCSMatrix(original: string, modified: string) {
  const LCSMatrix = [];

  for (let x = 0; x <= original.length; x++) {
    LCSMatrix[x] = [];
    for (let y = 0; y <= modified.length; y++) {
      LCSMatrix[x][y] = 0;
    }
  }

  for (let i = 1; i <= original.length; i++) {
    for (let j = 1; j <= modified.length; j++) {
      if (original[i - 1] === modified[j - 1]) {
        LCSMatrix[i][j] = LCSMatrix[i - 1][j - 1] + 1;
      } else {
        LCSMatrix[i][j] = Math.max(LCSMatrix[i - 1][j], LCSMatrix[i][j - 1]);
      }
    }
  }

  return LCSMatrix;
}
