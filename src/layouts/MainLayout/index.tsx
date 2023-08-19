"use client";

import { fetchDarkMode, storeDarkMode } from "@/utils";
import { Spinner } from "@blueprintjs/core";
import { ReactNode, useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import { DarkTheme, LightTheme } from "@/constants/theme";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.gray[5]};
`;

const MainContainer = styled.main`
  margin: 0px auto;
  max-width: 1400px;
  width: 100%;
  padding: 20px 40px;
  min-height: calc(100vh - 50px);

  @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
    padding: 10px 20px;
  }
`;

const StyledSpinner = styled(Spinner)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const value = fetchDarkMode();
    setDarkMode(value);
    setMounted(true);
  }, []);

  const handleDarkModeToggle = () => {
    setDarkMode((prevValue) => {
      const nextValue = !prevValue;
      storeDarkMode(nextValue);
      return nextValue;
    });
  };

  const theme = darkMode ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      {mounted ? (
        <Container className={theme.className}>
          <Header darkMode={darkMode} toggleDarkMode={handleDarkModeToggle} />
          <MainContainer>{children}</MainContainer>
          <Footer />
        </Container>
      ) : (
        <StyledSpinner intent="primary" size={60} />
      )}
    </ThemeProvider>
  );
}
