"use client";

import { Spinner } from "@blueprintjs/core";
import { type ReactNode, useEffect, useState } from "react";
import OmnibarSearch from "../../components/OmnibarSearch/OmnibarSearch";
import Header from "./Header";

export default function MainLayout({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [omnibarSearchOpen, setOmnibarSearchOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleOmnibarSearchOpen = () => {
    setOmnibarSearchOpen(true);
  };

  const handleOmnibarSearchClose = () => {
    setOmnibarSearchOpen(false);
  };

  // The tool UI relies on Blueprint components that only render consistently on
  // the client, so we render it after mount. next-themes has already applied
  // the theme class to <html> before paint, so `bg-surface` here is themed and
  // there is no flash. The document <head> (SEO metadata) is unaffected.
  if (!mounted) {
    return (
      <div className="bg-surface flex min-h-screen items-center justify-center">
        <Spinner intent="primary" size={60} />
      </div>
    );
  }

  return (
    <div className="bg-surface">
      <Header openOmnibarSearch={handleOmnibarSearchOpen} />
      <main className="mx-auto min-h-[calc(100vh-50px)] w-full max-w-350 px-10 py-5 max-sm:px-5 max-sm:py-2.5">
        {children}
      </main>
      <OmnibarSearch
        isOpen={omnibarSearchOpen}
        onClose={handleOmnibarSearchClose}
      />
    </div>
  );
}
