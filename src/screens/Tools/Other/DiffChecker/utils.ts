import { Change, diffChars } from "diff";

export const getLeftAndRightOutput = (
  original: string,
  modified: string
): [Change[], Change[]] => {
  let lOutput: Change[] = [];
  let rOutput: Change[] = [];
  if (original && modified) {
    const output = diffChars(original, modified);
    lOutput = output.filter((item) => item.removed || !item.added);
    rOutput = output.filter((item) => item.added || !item.removed);
  }
  return [lOutput, rOutput];
};
