import React, { memo } from "react";
import { ButtonContainer, StyledButton } from "./styles";
import { ButtonOption } from "./types";

type ButtonSectionProps = {
  buttons: ButtonOption[];
};

function ButtonSection({ buttons }: ButtonSectionProps) {
  return (
    <ButtonContainer>
      {buttons.map((button) => (
        <StyledButton large key={button.title} {...button} />
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
