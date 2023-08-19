import ButtonSection, { ButtonOption } from "@/components/ButtonSection";
import IOContainer from "@/components/IOContainer";
import { Card } from "@blueprintjs/core";
import styled from "styled-components";

const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 308px;
`;

const CardImage = styled.img`
  max-width: 100%;
  max-height: 264px;
  height: 100%;
`;

type OutputSectionProps = {
  buttons: ButtonOption[];
  value: string;
  handleImageError: () => void;
};

export default function ImageIOSection({
  buttons,
  value,
  handleImageError
}: OutputSectionProps) {
  return (
    <IOContainer>
      <StyledCard>
        {value && (
          <CardImage alt="Input-Image" src={value} onError={handleImageError} />
        )}
      </StyledCard>
      <ButtonSection buttons={buttons} />
    </IOContainer>
  );
}