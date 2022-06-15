import { Card } from "@blueprintjs/core";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  padding: 0px;
`;

export const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 308px;
`;

export const CardCanvas = styled.canvas`
  max-width: 100%;
  max-height: 260px;
  height: 100%;
  cursor: crosshair;
`;

export const CardFooter = styled.div`
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  border-top: 1px solid ${(props) => props.theme.colors.gray[2]};
  border-radius: 0px 0px 3px 3px;
`;

export const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 0.5;
  justify-content: center;
  min-width: 242px;
  height: 59px;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
    flex: 1;
  }
`;
