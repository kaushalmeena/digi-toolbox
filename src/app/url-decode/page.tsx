import URLDecodePage from "@/screens/Tools/Text/URLDecode";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URL-decode Text - GetThatTool",
  description:
    "Super simple, free and fast browser-based utility for URL-unescaping text."
};

export default function URLDecode() {
  return <URLDecodePage />;
}
