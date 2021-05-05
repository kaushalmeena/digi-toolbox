import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 20px 70px 20px;
  min-width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & .show-md {
    display: inline-flex;
  }
  & .hide-md {
    display: none;
  }
  @media (max-width: 760px) {
    padding: 10px 0px 10px 0px;
    width: 100%;
    & .show-md {
      display: none;
    }
    & .hide-md {
      display: inline-flex;
    }
  }
`;
