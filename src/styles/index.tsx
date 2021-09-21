import styled from "styled-components";

export const TopContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TextIOContainer = styled.div`
  padding: 20px 0px 20px 0px;
  min-width: 300px;
  flex: 1;
  & input,
  textarea {
    font-family: monospace;
  }
`;

export const NormalIOContainer = styled.div`
  padding: 20px 0px 20px 0px;
  min-width: 300px;
  flex: 1;
`;

export const MiddleContainer = styled.div`
  padding: 20px 20px 70px 20px;
  min-width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 760px) {
    padding: 10px 0px 10px 0px;
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  & button {
    margin-right: 10px;
  }
`;

export const SelectContainer = styled.div`
  margin-top: 10px;
`;

export const RotateContainer = styled.div`
  @media (max-width: 760px) {
    transform: rotate(90deg);
  }
`;

export const CardImage = styled.div`
  min-height: 268px;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    max-width: 100%;
    max-height: 100%;
  }
`;
