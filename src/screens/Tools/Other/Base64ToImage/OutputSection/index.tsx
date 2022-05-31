import { Button, Card } from "@blueprintjs/core";
import Image from "next/image";
import React from "react";
import {
  ButtonContainer,
  CardImage,
  NormalIOContainer
} from "../../../../../styles";

type OutputSectionProps = {
  output: string;
  handleOutputDownload: () => void;
};

function OutputSection({ output, handleOutputDownload }: OutputSectionProps) {
  return (
    <NormalIOContainer>
      <Card>
        <CardImage>
          {output ? <Image alt="Output-Image" src={output} /> : null}
        </CardImage>
      </Card>
      <ButtonContainer>
        <Button
          large
          title="Download"
          icon="import"
          onClick={handleOutputDownload}
        />
      </ButtonContainer>
    </NormalIOContainer>
  );
}

export default OutputSection;
