import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
    transform: rotate(90deg);
  }
`;
