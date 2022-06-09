import { TextArea } from "@blueprintjs/core";
import React from "react";
import ButtonSection from "../../../../ButtonSection";
import { TextIOContainer } from "../../../styles";

type OutputSectionProps = {
  output: string;
  handleOutputCopy: () => void;
  handleOutputDownload: () => void;
};

function OutputSection({
  output,
  handleOutputCopy,
  handleOutputDownload
}: OutputSectionProps) {
  return (
    <TextIOContainer>
      <TextArea readOnly fill rows={16} value={output} />
      <ButtonSection
        buttons={[
          {
            title: "Copy",
            icon: "duplicate",
            onClick: handleOutputCopy
          },
          {
            title: "Download",
            icon: "import",
            onClick: handleOutputDownload
          }
        ]}
      />
    </TextIOContainer>
  );
}

export default OutputSection;
