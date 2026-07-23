import { Classes } from "@blueprintjs/core";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import ServiceWorker from "@/components/ServiceWorker";
import { SITE_BASE_URL } from "@/constants/config";
import MainLayout from "@/layouts/MainLayout/MainLayout";

import "normalize.css";

// Icons are used as SVG React components (e.g. <Flash />), so the legacy icon
// *font* stylesheet (blueprint-icons.css) is intentionally not imported.
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";

import "./globals.css";

const TITLE = "Digi-Toolbox — your all-in-one developer toolbox";
const DESCRIPTION =
  "Digi-Toolbox is a fast, free, in-browser toolbox of 45+ developer utilities — JSON, CSV, YAML, XML and text converters, encoders, formatters, and more.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_BASE_URL),
  title: {
    default: TITLE,
    // Per-page titles (e.g. "JSON to CSV") get this suffix automatically.
    template: "%s - Digi-Toolbox"
  },
  description: DESCRIPTION,
  applicationName: "Digi-Toolbox",
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
    siteName: "Digi-Toolbox",
    url: SITE_BASE_URL,
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ServiceWorker />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // Map next-themes' "dark" onto Blueprint's own dark class.
          value={{ light: "light", dark: Classes.DARK }}
          disableTransitionOnChange
        >
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
