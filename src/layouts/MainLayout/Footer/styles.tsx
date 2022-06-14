import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${(props) => props.theme.gray[3]};
`;

export const MainContainer = styled.div`
  padding: 30px 20px 30px 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BoxContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  & > a {
    font-size: 16px;
    line-height: 1.5;
  }
  @media (max-width: 760px) {
    width: 100%;
    text-align: center;
    & > a {
      font-size: 20px;
    }
  }
`;

export const ToolCategory = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 760px) {
    font-size: 24px;
  }
`;
