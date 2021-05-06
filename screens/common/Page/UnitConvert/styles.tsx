import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const IOContainer = styled.div`
  padding: 20px 0px 20px 0px;
  min-width: 300px;
  flex: 1;
  & input {
    font-family: monospace;
  }
`;

export const SelectContainer = styled.div`
  margin-top: 10px;
`;

export const EqualContainer = styled.div`
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
