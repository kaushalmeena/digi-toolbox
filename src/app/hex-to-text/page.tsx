import HexToTextPage from "@/screens/Tools/Text/HexToText";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convert Hexadecimal to Text - GetThatTool",
  description:
    "Super simple, free and fast browser-based utility for converting hexadecimal to text."
};

export default function HexToText() {
  return <HexToTextPage />;
}
