import { Button, TextArea } from "@blueprintjs/core";
import React from "react";
import { ButtonContainer, TextIOContainer } from "../../../../styles";

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
      <ButtonContainer>
        <Button
          large
          title="Copy"
          icon="duplicate"
          onClick={handleOutputCopy}
        />
        <Button
          large
          title="Download"
          icon="import"
          onClick={handleOutputDownload}
        />
      </ButtonContainer>
    </TextIOContainer>
  );
}

export default OutputSection;
