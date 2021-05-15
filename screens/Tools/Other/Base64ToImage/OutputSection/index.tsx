import { Button, Card } from "@blueprintjs/core";
import React, { FunctionComponent } from "react";
import {
  ButtonContainer,
  CardImage,
  NormalIOContainer
} from "../../../../common/styles";

type OutputSectionProps = {
  output: string;
  handleOutputDownload: () => void;
};

const OutputSection: FunctionComponent<OutputSectionProps> = (
  props: OutputSectionProps
) => {
  return (
    <NormalIOContainer>
      <Card>
        <CardImage>
          {props.output ? <img alt="output-image" src={props.output} /> : null}
        </CardImage>
      </Card>
      <ButtonContainer>
        <Button
          large
          title="Download"
          icon="import"
          onClick={props.handleOutputDownload}
        />
      </ButtonContainer>
    </NormalIOContainer>
  );
};

export default OutputSection;
