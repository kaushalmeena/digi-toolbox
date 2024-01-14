import MainLayout from "@/layouts/MainLayout";
import type { Metadata } from "next";
import { ReactNode } from "react";
import StyledComponentsRegistry from "./registry";

import "normalize.css";

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "GetThatTool - One place for all common tools you could want!",
  description:
    "GetThatTool is app that lets you have all common JSON, CSV, YAML, XML, Text and other tools and converters at one place."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/initial-theme.js" />
        <StyledComponentsRegistry>
          <MainLayout>{children}</MainLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
