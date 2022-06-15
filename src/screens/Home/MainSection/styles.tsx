import { Card } from "@blueprintjs/core";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 60px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px 20px;
`;

export const StyledCard = styled(Card)`
  margin-right: 10px;
  margin-bottom: 10px;
  min-width: 222px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;
