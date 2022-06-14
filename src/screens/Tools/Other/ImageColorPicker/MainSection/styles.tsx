import { Card as BlueprintJSCard } from "@blueprintjs/core";
import styled from "styled-components";

export const Card = styled(BlueprintJSCard)`
  padding: 0px;
`;

export const CardBody = styled.div`
  padding: 20px;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  & canvas {
    cursor: crosshair;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const CardFooter = styled.div`
  border-top: 1px solid ${(props) => props.theme.gray[2]};
  overflow: hidden;
  border-radius: 0px 0px 3px 3px;
  display: flex;
  flex-wrap: wrap;
`;

export const ColorContainer = styled.div`
  min-width: 242px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.5;
  @media (max-width: 760px) {
    flex: 1;
  }
`;
