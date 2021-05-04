import styled from "styled-components";

export const IOContainer = styled.div`
  padding: 20px 0px 20px 0px;
  min-width: 300px;
  flex: 1;
  & > textarea {
    font-family: monospace;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  & > button {
    margin-right: 10px;
  }
`;

export const SectionContainer = styled.div`
  margin-top: 10px;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;
`;
