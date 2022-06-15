import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  .position-fixed {
    position: fixed !important;
  }
`;

export const Main = styled.main`
  min-height: calc(100vh - 50px);
  padding: 20px 40px;
  background-color: ${(props) => props.theme.gray[4]};
`;

export const ResponsiveContainer = styled.div`
  width: 100%;
  margin: 0px auto;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
    max-width: ${(props) => props.theme.breakpoints.lg}px;
  }
`;

export const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
