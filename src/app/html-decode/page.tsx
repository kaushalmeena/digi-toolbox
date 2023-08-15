import HTMLDecodePage from "@/screens/Tools/Text/HTMLDecode";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTML-decode Text - GetThatTool",
  description:
    "Super simple, free and fast browser-based utility for HTML-decoding text."
};

export default function HTMLDecode() {
  return <HTMLDecodePage />;
}
