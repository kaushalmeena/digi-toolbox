import { Card } from "@blueprintjs/core";
import Image from "next/image";
import React from "react";
import ButtonSection from "../../../../../../shared/ButtonSection";
import Toast from "../../../../../../shared/Toast";
import { CardImage, NormalIOContainer } from "../../../styles";

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
        <CardImage>
          {output ? (
            <Image
              alt="Output-Image"
              layout="fill"
              src={output}
              onError={handleImageError}
            />
          ) : null}
        </CardImage>
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
