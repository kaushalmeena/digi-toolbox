import styled from "styled-components";

export const TopContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

export const HideOnSmallScreen = styled.div`
  display: inline-flex;
  @media (max-width: 760px) {
    display: none;
  }
`;

export const ShowOnSmallScreen = styled.div`
  display: none;
  @media (max-width: 760px) {
    display: inline-flex;
  }
`;
