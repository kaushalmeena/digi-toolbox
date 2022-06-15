import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  .position-fixed {
    position: fixed !important;
  }
`;

export const Main = styled.main`
  min-height: calc(100vh - 50px);
  padding: 20px 40px 60px 40px;
  background-color: ${(props) => props.theme.gray[4]};
`;

export const ResponsiveContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const SpinnerContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
