import type { Metadata } from "next";
import HexToTextPage from "@/screens/Tools/Text/HexToText";

export const metadata: Metadata = {
  title: "Convert Hexadecimal to Text",
  description:
    "Super simple, free and fast browser-based utility for converting hexadecimal to text."
};

export default function HexToText() {
  return <HexToTextPage />;
}
