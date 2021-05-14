import { Card } from "@blueprintjs/core";
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 0px 20px 0px;
  min-width: 300px;
  flex: 1;
`;

export const CustomCard = styled(Card)`
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
  height: 70px;
  display: flex;
`;

export const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
