"use client";

import { Spinner } from "@blueprintjs/core";
import { type ReactNode, useEffect, useState } from "react";
import OmnibarSearch from "../../components/OmnibarSearch";
import Header from "./Header";
import { fetchDarkMode, storeDarkMode } from "./utils";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const [mounted, setMounted] = useState(false);
  const [omnibarSearchOpen, setOmnibarSearchOpen] = useState(false);
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

  const handleOmnibarSearchOpen = () => {
    setOmnibarSearchOpen(true);
  };

  const handleOmnibarSearchClose = () => {
    setOmnibarSearchOpen(false);
  };

  if (!mounted) {
    return (
      <Spinner
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        intent="primary"
        size={60}
      />
    );
  }

  return (
    <div className={`bg-surface ${darkMode ? "bp6-dark" : ""}`}>
      <Header
        darkMode={darkMode}
        toggleDarkMode={handleDarkModeToggle}
        openOmnibarSearch={handleOmnibarSearchOpen}
      />
      <main className="mx-auto min-h-[calc(100vh-50px)] w-full max-w-[1400px] px-10 py-5 max-sm:px-5 max-sm:py-2.5">
        {children}
      </main>
      <OmnibarSearch
        isOpen={omnibarSearchOpen}
        onClose={handleOmnibarSearchClose}
      />
    </div>
  );
}
