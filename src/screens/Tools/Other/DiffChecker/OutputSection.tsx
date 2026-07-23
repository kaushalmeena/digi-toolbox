import { Card } from "@blueprintjs/core";
import type { Change } from "diff";
import { Fragment } from "react";
import IOContainer from "@/components/IOContainer";

export default function OutputSection({ output }: { output: Change[] }) {
  const renderText = (item: Change) => {
    if (item.added) {
      return <span className="bg-success">{item.value}</span>;
    }
    if (item.removed) {
      return <span className="bg-destructive">{item.value}</span>;
    }
    return item.value;
  };

  return (
    <IOContainer>
      <Card className="min-h-77 font-mono">
        {output.map((item, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: diff output is regenerated wholesale and positional, so index is the stable identity here
          <Fragment key={`text-${index}`}>{renderText(item)}</Fragment>
        ))}
      </Card>
    </IOContainer>
  );
}
