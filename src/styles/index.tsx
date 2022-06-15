import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MiddleContainer = styled.div`
  padding: 20px 20px 70px 20px;
  min-width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
    padding: 10px 0px 10px 0px;
    width: 100%;
  }
`;
