import MainLayout from "@/layouts/MainLayout";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { ReactNode } from "react";
import { COOKIE_DARK_MODE_KEY } from "../constants/theme";
import StyledComponentsRegistry from "./registry";

import "./globals.css";

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

export const metadata: Metadata = {
  title: "GetThatTool - One place for all common tools you could want!",
  description:
    "GetThatTool is app that lets you have all common JSON, CSV, YAML, XML, Text and other tools and converters at one place."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const initialDarkMode = cookies().get(COOKIE_DARK_MODE_KEY)?.value === "1";
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <MainLayout initialDarkMode={initialDarkMode}>{children}</MainLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
