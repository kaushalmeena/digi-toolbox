import { Card } from "@blueprintjs/core";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 308px;
`;

export const CardImage = styled.img`
  max-width: 100%;
  max-height: 264px;
  height: 100%;
`;

export const NormalIOContainer = styled.div`
  flex: 1;
  padding-top: 20px;
  padding-bottom: 20px;
  min-width: 300px;
`;
