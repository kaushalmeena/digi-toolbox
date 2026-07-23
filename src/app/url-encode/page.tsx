import type { Metadata } from "next";
import URLEncodePage from "@/screens/Tools/Text/URLEncode/URLEncode";

export const metadata: Metadata = {
  title: "URL-encode Text",
  description:
    "Super simple, free and fast browser-based utility for URL-escaping text."
};

export default function URLEncode() {
  return <URLEncodePage />;
}
