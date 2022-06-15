import styled from "styled-components";

export const RotateContainer = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
    transform: rotate(90deg);
  }
`;
