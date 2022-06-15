import React, { memo } from "react";
import { Container, StyledButton } from "./styles";
import { ButtonOption } from "./types";

type ButtonSectionProps = {
  buttons: ButtonOption[];
};

function ButtonSection({ buttons }: ButtonSectionProps) {
  return (
    <Container>
      {buttons.map((button) => (
        <StyledButton
          large
          key={button.title}
          title={button.title}
          icon={button.icon}
          onClick={button.onClick}
        />
      ))}
    </Container>
  );
}

function propsAreEqual(
  prevProps: ButtonSectionProps,
  nextProps: ButtonSectionProps
) {
  return prevProps.buttons.length === nextProps.buttons.length;
}

export default memo(ButtonSection, propsAreEqual);
