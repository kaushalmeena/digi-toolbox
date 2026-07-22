import type { Metadata } from "next";
import HTMLEncodePage from "@/screens/Tools/Text/HTMLEncode";

export const metadata: Metadata = {
  title: "HTML-encode Text - GetThatTool",
  description:
    "Super simple, free and fast browser-based utility for HTML-encoding text."
};

export default function HTMLEncode() {
  return <HTMLEncodePage />;
}
