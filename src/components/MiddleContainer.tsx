import styled from "styled-components";

const MiddleContainer = styled.div`
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

export default MiddleContainer;