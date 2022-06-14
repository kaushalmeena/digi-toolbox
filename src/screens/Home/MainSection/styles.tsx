import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 20px 0px 60px 0px;
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
  justify-content: center;
  & > div {
    min-width: 200px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;

export const CardBody = styled.div`
  font-size: 16;
  font-weight: bold;
  text-align: center;
`;
