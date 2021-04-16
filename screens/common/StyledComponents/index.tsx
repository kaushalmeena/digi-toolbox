import styled from "styled-components";

export const TopContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

export const MainContainer = styled.div`
  padding: 20px 10px 60px 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BoxContainer = styled.div`
  margin: 20px;
  min-width: 300px;
  flex: 1;
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
  & button + button {
    margin-left: 10px;
  }
`;
