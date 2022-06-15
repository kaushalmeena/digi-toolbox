import { Card } from "@blueprintjs/core";
import React from "react";
import ButtonSection from "../../../../../../shared/ButtonSection";
import { CardContainer, CardImage, NormalIOContainer } from "../../../styles";

type InputSectionProps = {
  input: string;
  handleInputUpload: () => void;
};

function InputSection({ input, handleInputUpload }: InputSectionProps) {
  return (
    <NormalIOContainer>
      <Card>
        <CardContainer>
          {input ? <CardImage alt="Input-Image" src={input} /> : null}
        </CardContainer>
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
