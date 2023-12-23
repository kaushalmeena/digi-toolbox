"use client";

import { DarkTheme, LightTheme } from "@/constants/theme";
import { fetchDarkMode, storeDarkMode } from "@/utils";
import { ReactNode, useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

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

type MainLayoutProps = {
  initialDarkMode: boolean;
  children: ReactNode;
};

export default function MainLayout({
  initialDarkMode,
  children
}: MainLayoutProps) {
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  useEffect(() => {
    const value = fetchDarkMode();
    storeDarkMode(value);
    setDarkMode(value);
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
      <Container className={theme.className}>
        <Header darkMode={darkMode} toggleDarkMode={handleDarkModeToggle} />
        <MainContainer>{children}</MainContainer>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
