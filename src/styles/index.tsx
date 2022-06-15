import styled from "styled-components";

export const ConvertContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
    flex-direction: column;
  }
`;

export const MiddleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 20px 70px 20px;
  min-width: 80px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
    padding: 10px 0px;
    width: 100%;
  }
`;
