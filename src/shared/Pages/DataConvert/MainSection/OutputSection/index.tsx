import React from "react";
import ButtonSection from "../../../../ButtonSection";
import { StyledTextArea, TextIOContainer } from "../../../styles";

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
      <StyledTextArea readOnly fill rows={16} value={output} />
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
