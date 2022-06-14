import styled from "styled-components";

export const CardBody = styled.div`
  min-height: 300px;
  font-family: monospace;
`;

export const RText = styled.span`
  background-color: ${(props) => props.theme.wrong};
`;

export const GText = styled.span`
  background-color: ${(props) => props.theme.right};
`;
