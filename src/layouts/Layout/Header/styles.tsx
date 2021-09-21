import { Icon } from "@blueprintjs/core";
import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  & :hover {
    opacity: 0.3;
  }
`;

export const LogoIcon = styled(Icon)`
  margin-right: 5px;
`;

export const LogoText = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
