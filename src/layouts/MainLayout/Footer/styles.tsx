import styled from "styled-components";

export const Container = styled.footer`
  padding: 20px 40px;
  background-color: ${(props) => props.theme.gray[3]};
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;
