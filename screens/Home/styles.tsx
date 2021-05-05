import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 20px 10px 60px 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardContainer = styled.div`
  padding: 30px 20px 30px 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & > div {
    min-width: 200px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;

export const CardBody = styled.div`
  font-size: 16;
  font-weight: bold;
`;
