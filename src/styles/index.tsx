import styled from "styled-components";

export const TopContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

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
  @media (max-width: 760px) {
    padding: 10px 0px 10px 0px;
    width: 100%;
  }
`;
