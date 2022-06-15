import { Card } from "@blueprintjs/core";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  min-height: 308px;
  font-family: monospace;
`;

export const RText = styled.span`
  background-color: ${(props) => props.theme.colors.wrong};
`;

export const GText = styled.span`
  background-color: ${(props) => props.theme.colors.right};
`;
