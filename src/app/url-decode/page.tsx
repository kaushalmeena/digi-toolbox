import type { Metadata } from "next";
import URLDecodePage from "@/screens/Tools/Text/URLDecode";

export const metadata: Metadata = {
  title: "URL-decode Text - GetThatTool",
  description:
    "Super simple, free and fast browser-based utility for URL-unescaping text."
};

export default function URLDecode() {
  return <URLDecodePage />;
}
