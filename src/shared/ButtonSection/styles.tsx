import styled from "styled-components";

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  & button + button {
    margin-left: 10px;
  }
`;
