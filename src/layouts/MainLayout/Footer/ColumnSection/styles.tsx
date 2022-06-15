import styled from "styled-components";

export const ColumnContainer = styled.div`
  margin: 20px;
`;

export const ToolContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
    width: 100%;
    text-align: center;
  }
`;

export const ToolCategory = styled.h3`
  font-size: 20px;
  font-weight: bold;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
    font-size: 24px;
  }
`;

export const ToolLink = styled.a`
  font-size: 16px;
  line-height: 1.5;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
    font-size: 20px;
  }
`;
