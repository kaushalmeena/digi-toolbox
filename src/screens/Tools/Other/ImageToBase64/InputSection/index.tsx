import { Button, Card } from "@blueprintjs/core";
import Image from "next/image";
import React from "react";
import {
  ButtonContainer,
  CardImage,
  NormalIOContainer
} from "../../../../../styles";

type InputSectionProps = {
  input: string;
  handleInputUpload: () => void;
};

function InputSection({ input, handleInputUpload }: InputSectionProps) {
  return (
    <NormalIOContainer>
      <Card>
        <CardImage>
          {input ? <Image alt="Output-Image" src={input} /> : null}
        </CardImage>
      </Card>
      <ButtonContainer>
        <Button
          large
          title="Upload"
          icon="export"
          onClick={handleInputUpload}
        />
      </ButtonContainer>
    </NormalIOContainer>
  );
}

export default InputSection;
