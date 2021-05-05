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

export const Main = styled.main`
  padding: 20px 40px 60px 40px;
  min-height: calc(100vh - 88px);
  background-color: ${(props) => props.theme.gray[4]};
`;

export const Footer = styled.footer`
  padding: 10px;
  text-align: center;
  background-color: ${(props) => props.theme.gray[5]};
`;
