import { Button, TextArea } from "@blueprintjs/core";
import React, { FunctionComponent } from "react";
import { IOContainer } from "../../common/styles";
import { ButtonContainer } from "../styles";

type OutputSectionProps = {
  output: string;
  handleOutputCopy: () => void;
  handleOutputDownload: () => void;
};

const OutputSection: FunctionComponent<OutputSectionProps> = (
  props: OutputSectionProps
) => {
  return (
    <IOContainer>
      <TextArea readOnly fill rows={16} value={props.output} />
      <ButtonContainer>
        <Button
          large
          title="Copy"
          icon="duplicate"
          onClick={props.handleOutputCopy}
        />
        <Button
          large
          title="Download"
          icon="import"
          onClick={props.handleOutputDownload}
        />
      </ButtonContainer>
    </IOContainer>
  );
};

export default OutputSection;
