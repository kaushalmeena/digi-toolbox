import { Button, TextArea } from "@blueprintjs/core";
import React, { FunctionComponent } from "react";
import { ButtonContainer, IOContainer } from "../styles";

type OutputContainerProps = {
  output: string;
  handleOutputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleOutputCopy: () => void;
  handleOutputDownload: () => void;
};

const OutputContainer: FunctionComponent<OutputContainerProps> = (
  props: OutputContainerProps
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

export default OutputContainer;
