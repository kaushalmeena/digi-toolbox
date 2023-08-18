import React from "react";
import ButtonSection from "../../../../../../shared/ButtonSection";
import { CardImage, NormalIOContainer, StyledCard } from "../../../styles";
import { handleImageError } from "../../../utils";

type OutputSectionProps = {
  output: string;
  handleOutputDownload: () => void;
};

function OutputSection({ output, handleOutputDownload }: OutputSectionProps) {
  return (
    <NormalIOContainer>
      <StyledCard>
        {output ? (
          <CardImage
            alt="Input-Image"
            src={output}
            onError={handleImageError}
          />
        ) : null}
      </StyledCard>
      <ButtonSection
        buttons={[
          {
            title: "Download",
            icon: "import",
            onClick: handleOutputDownload
          }
        ]}
      />
    </NormalIOContainer>
  );
}

export default OutputSection;
