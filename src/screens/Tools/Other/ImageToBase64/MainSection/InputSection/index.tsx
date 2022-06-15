import React from "react";
import ButtonSection from "../../../../../../shared/ButtonSection";
import { CardImage, NormalIOContainer, StyledCard } from "../../../styles";
import { handleImageError } from "../../../utils";

type InputSectionProps = {
  input: string;
  handleInputUpload: () => void;
};

function InputSection({ input, handleInputUpload }: InputSectionProps) {
  return (
    <NormalIOContainer>
      <StyledCard>
        {input ? (
          <CardImage alt="Input-Image" src={input} onError={handleImageError} />
        ) : null}
      </StyledCard>
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
