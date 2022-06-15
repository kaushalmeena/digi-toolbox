import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${(props) => props.theme.colors.gray[3]};
`;

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 40px;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
    flex-direction: column;
  }
`;
