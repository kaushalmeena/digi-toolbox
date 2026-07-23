import type { Metadata } from "next";
import HTMLEncodePage from "@/screens/Tools/Text/HTMLEncode/HTMLEncode";

export const metadata: Metadata = {
  title: "HTML-encode Text",
  description:
    "Super simple, free and fast browser-based utility for HTML-encoding text."
};

export default function HTMLEncode() {
  return <HTMLEncodePage />;
}
