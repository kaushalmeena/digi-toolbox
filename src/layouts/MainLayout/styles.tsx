import { Spinner } from "@blueprintjs/core";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  .position-fixed {
    position: fixed !important;
  }
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.gray[4]};
`;

export const FixedContainer = styled.div`
  margin: 0px auto;
  max-width: 1400px;
  width: 100%;
`;

export const MainContainer = styled.main`
  padding: 20px 40px;
  min-height: calc(100vh - 50px);
`;

export const StyledSpinner = styled(Spinner)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
