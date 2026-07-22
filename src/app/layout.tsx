import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import ServiceWorkerRegistrar from "@/components/ServiceWorkerRegistrar";
import { SITE_URL } from "@/constants";
import MainLayout from "@/layouts/MainLayout";

import "normalize.css";

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";

import "./globals.css";

const TITLE = "GetThatTool - One place for all common tools you could want!";
const DESCRIPTION =
  "GetThatTool lets you have all common JSON, CSV, YAML, XML, Text and other tools and converters at one place — fast, free and right in your browser.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    // Per-page titles (e.g. "JSON to CSV") get this suffix automatically.
    template: "%s - GetThatTool"
  },
  description: DESCRIPTION,
  applicationName: "GetThatTool",
  authors: [{ name: "Kaushal Meena" }],
  keywords: [
    "online tools",
    "developer tools",
    "JSON formatter",
    "JSON to CSV",
    "CSV to JSON",
    "YAML converter",
    "XML formatter",
    "base64 encode",
    "JWT decoder",
    "hash generator",
    "UUID generator",
    "unit converter",
    "diff checker"
  ],
  manifest: "/manifest.json",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    siteName: "GetThatTool",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#2d72d2"
};

function InitialThemeScript() {
  const codeToRunOnClient = `
    (function () {
      function fetchDarkMode() {
        let mode = false;
        const value = localStorage.getItem("darkMode");
        if (value) {
          mode = value === "1";
        } else {
          const media = window.matchMedia("(prefers-color-scheme: dark)");
          mode = media.matches;
        }
        return mode;
      }
      const initialTheme = fetchDarkMode() ? "dark" : "light";
      document.body.setAttribute("data-initial-theme", initialTheme);
    })();
  `;

  return (
    <script
      // biome-ignore lint/security/noDangerouslySetInnerHtml: static, non-user inline script that sets the initial theme before hydration to prevent a flash
      dangerouslySetInnerHTML={{
        __html: codeToRunOnClient
      }}
    />
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <InitialThemeScript />
        <ServiceWorkerRegistrar />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
