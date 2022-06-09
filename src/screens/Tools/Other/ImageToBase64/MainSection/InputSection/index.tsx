import { Card } from "@blueprintjs/core";
import Image from "next/image";
import React from "react";
import ButtonSection from "../../../../../../shared/ButtonSection";
import { CardImage, NormalIOContainer } from "../../../styles";

type InputSectionProps = {
  input: string;
  handleInputUpload: () => void;
};

function InputSection({ input, handleInputUpload }: InputSectionProps) {
  return (
    <NormalIOContainer>
      <Card>
        <CardImage>
          {input ? <Image alt="Input-Image" src={input} /> : null}
        </CardImage>
      </Card>
      <ButtonSection
        buttons={[
          {
            title: "Upload",
            icon: "export",
            onClick: handleInputUpload
          }
        ]}
      />
    </NormalIOContainer>
  );
}

export default InputSection;
