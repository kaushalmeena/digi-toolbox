import styled from "styled-components";

const ConvertContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
    flex-direction: column;
  }
`;

export default ConvertContainer;
