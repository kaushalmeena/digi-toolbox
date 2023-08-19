import { Button, IconName, MaybeElement } from "@blueprintjs/core";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const StyledButton = styled(Button)`
  margin-right: 10px;
`;

export type ButtonOption = {
  title: string;
  icon: IconName | MaybeElement;
  onClick: () => void;
};

type ButtonSectionProps = {
  buttons: ButtonOption[];
};

export default function ButtonSection({ buttons }: ButtonSectionProps) {
  return (
    <Container>
      {buttons.map((button) => (
        <StyledButton large key={button.title} {...button} />
      ))}
    </Container>
  );
}
