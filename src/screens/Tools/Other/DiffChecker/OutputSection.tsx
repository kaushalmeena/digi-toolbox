import IOContainer from "@/components/IOContainer";
import { Card } from "@blueprintjs/core";
import { Change } from "diff";
import { Fragment } from "react";
import styled from "styled-components";

const StyledCard = styled(Card)`
  min-height: 308px;
  font-family: monospace;
`;

const DelText = styled.span`
  background-color: ${(props) => props.theme.colors.wrong};
`;

const InsText = styled.span`
  background-color: ${(props) => props.theme.colors.right};
`;

type OutputSectionProps = {
  output: Change[];
};

export default function OutputSection({ output }: OutputSectionProps) {
  const renderText = (item: Change) => {
    if (item.added) {
        return <InsText>{item.value}</InsText>
    }
    if (item.removed) {
        return <DelText>{item.value}</DelText>
    }
    return item.value;
  }

  return (
    <IOContainer>
      <StyledCard>
        {output.map((item, index) => (
          <Fragment key={`text-${index}`}>
            {renderText(item)}
          </Fragment>
        ))}
      </StyledCard>
    </IOContainer>
  );
}