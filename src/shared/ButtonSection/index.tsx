import { Button } from "@blueprintjs/core";
import React, { memo } from "react";
import { ButtonContainer } from "../../styles";
import { ButtonOption } from "./types";

type ButtonSectionProps = {
  buttons: ButtonOption[];
};

function ButtonSection({ buttons }: ButtonSectionProps) {
  return (
    <ButtonContainer>
      {buttons.map((button) => (
        <Button
          large
          key={button.title}
          title={button.title}
          icon={button.icon}
          onClick={button.onClick}
        />
      ))}
    </ButtonContainer>
  );
}

function propsAreEqual(
  prevProps: ButtonSectionProps,
  nextProps: ButtonSectionProps
) {
  return prevProps.buttons.length === nextProps.buttons.length;
}

export default memo(ButtonSection, propsAreEqual);
