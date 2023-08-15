import URLEncodePage from "@/screens/Tools/Text/URLEncode";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URL-encode Text - GetThatTool",
  description:
    "Super simple, free and fast browser-based utility for URL-escaping text."
};

export default function URLEncode() {
  return <URLEncodePage />;
}
