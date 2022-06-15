import { Card } from "@blueprintjs/core";
import React from "react";
import ButtonSection from "../../../../../../shared/ButtonSection";
import Toast from "../../../../../../shared/Toast";
import { CardContainer, CardImage, NormalIOContainer } from "../../../styles";

type OutputSectionProps = {
  output: string;
  handleOutputDownload: () => void;
};

function OutputSection({ output, handleOutputDownload }: OutputSectionProps) {
  const handleImageError = () => {
    Toast.show({ message: "Invalid image detected.", intent: "danger" });
  };

  return (
    <NormalIOContainer>
      <Card>
        <CardContainer>
          {output ? (
            <CardImage
              alt="Input-Image"
              src={output}
              onError={handleImageError}
            />
          ) : null}
        </CardContainer>
      </Card>
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
